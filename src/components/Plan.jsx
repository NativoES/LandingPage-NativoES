'use client'
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useLanguage } from "@/hooks/useLanguage";

export default function PlansSection() {
  const { language } = useLanguage();
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/plan?locale=${language}`)
      .then(res => res.json())
      .then(data => {
        setPlans(data);
        if (data.length > 0) {
          setSelectedPlanId(data[0]._id);
          setSelectedType(0);
        }
      });
  }, [language]);

  const selectedPlan = plans.find(plan => plan._id === selectedPlanId);
  const typePlan = selectedPlan?.[language]?.typePlan || [];

  return (
    <section id="pricing" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f]"></div>
      <h2 className="text-3xl font-bold text-black mb-12 text-left">Precios</h2>

      <div className="w-[90vw] max-w-[1100px] mx-auto md:p-6 py-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
        
        <div className="w-full border border-gray-200 rounded-[50px] flex flex-col md:grid md:grid-cols-4 mb-10">
          
          <div className="w-full flex md:flex-col justify-around rounded-[8px] mb-6 pr-10">
            {plans.map((plan) => (
              <Button
                key={plan._id}
                theme={plan._id === selectedPlanId ? 'MiniPrimary' : 'MiniTransparent'}
                click={() => {
                  setSelectedPlanId(plan._id);
                  setSelectedType(0);
                }}
              >
                {plan[language]?.tituloDelPlan}
              </Button>
            ))}
          </div>

          <div className="col-span-3 rounded-[50px] max-w-full">
            {selectedPlan && (
              <>
                <img
                  src={selectedPlan[language]?.imageUrl}
                  alt="Plan"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-black">{selectedPlan[language]?.descripcion}</p>
              </>
            )}
          </div>
        </div>

        <div className="w-full border border-gray-200 rounded-[50px] flex flex-col md:grid grid-cols-4">
          
          <div className="w-full flex md:hidden justify-around rounded-[8px] mb-6 pl-10">
            {typePlan.map((type, idx) => (
              <Button
                key={idx}
                theme={idx === selectedType ? 'MiniPrimary' : 'MiniTransparent'}
                click={() => setSelectedType(idx)}
              >
                {type.type}
              </Button>
            ))}
          </div>

          <div className="col-span-3 rounded-[50px] p-6">
            {typePlan[selectedType] && (
              <div className="bg-white rounded-xl shadow-md p-6 text-black">
                <h3 className="text-xl font-semibold mb-2">{typePlan[selectedType].type}</h3>
                <p className="text-sm mb-2">
                  <strong>Precio regular:</strong> ${typePlan[selectedType].precioRegular}
                </p>
                <p className="text-sm mb-4">
                  <strong>Con descuento:</strong> ${typePlan[selectedType].precioConDescuento}
                </p>
                <ul className="list-disc pl-6">
                  {typePlan[selectedType].caracteristicas.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="w-full hidden md:flex flex-col justify-around rounded-[8px] mb-6 pl-10">
            {typePlan.map((type, idx) => (
              <Button
                key={idx}
                theme={idx === selectedType ? 'MiniPrimary' : 'MiniTransparent'}
                click={() => setSelectedType(idx)}
              >
                {type.type}
              </Button>
            ))}
          </div>
        </div>

        {/* Botón de reserva */}
        <div className="flex justify-center mt-10">
          <div className="w-[300px]">
            <Button theme={'MiniPrimary'} click={() => ''}>
              Reserva tu clase
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
