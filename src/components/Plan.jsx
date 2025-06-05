'use client'
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useLanguage } from "@/hooks/useLanguage";
import CardPricing from '@/components/CardPricing';
import CardTimes from "@/components/CardTimes";
import { useAppContext } from "@/context/AppContext";

export default function PlansSection() {
  const { language } = useLanguage();
  const { setCardPricingOne } = useAppContext();
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [selecteTypePlan, setSelecteTypePlan] = useState(null);
  const [selectedType, setSelectedType] = useState(0);

  console.log("language: ", language);

  const loadData = async (lang) => {
    try {
      const url = `http://localhost:5000/api/plan?locale=${lang}`;
      const res = await fetch(url);
      const data = await res.json();
      setPlans(data);

      if (data.length > 0) {
        setSelectedPlanId(data[0]._id);
        setSelectedType(0);
      }
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  useEffect(() => {
    loadData(language);
  }, [language]);

  const selectedPlan = plans.find(plan => plan._id === selectedPlanId);
  const typePlan = selectedPlan?.[language]?.typePlan || [];

  console.log("selected Plan: ", selectedPlan);
  console.log(typePlan);
  

  return (
    <section id="pricing" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>
      <h2 className="text-3xl font-bold text-black mb-12 text-left">Precios</h2>

      <div className="w-[90vw] max-w-[1100px] mx-auto md:p-6 py-6 rounded-xl shadow-lg flex flex-col items-center justify-center">

        <div className=" w-full  border border-gray-200 rounded-[50px] flex flex-col md:grid md:grid-cols-4 mb-10">
          <div className="w-full flex md:flex-col justify-around rounded-[8px] mb-6  pr-10">
            {plans.map((plan) =>
              plan[language] ? (
                <Button
                  key={plan._id}
                  theme={plan._id === selectedPlanId ? 'MiniPrimary' : 'MiniTransparent'}
                  click={() => {
                    setSelectedPlanId(plan._id);
                    setCardPricingOne(plan[language].tituloDelPlan);
                    setSelecteTypePlan(plan[language].typePlan[0])
                  }}
                >
                  {plan[language].tituloDelPlan}
                </Button>
              ) : (
                <span key={plan._id}>Sin datos.</span>
              )
            )}

          </div>
          <div className="col-span-3 rounded-[50px]  max-w-full ">
            <CardPricing
              img={selectedPlan?.[language]?.imageUrl || '/demo.jpg'}
              description={selectedPlan?.[language]?.descripcion || 'Sin descripción'}
            />

          </div>
        </div>

        <div className=" w-full  border border-gray-200 rounded-[50px] flex flex-col md:grid grid-cols-4">
          <div className="w-full flex  md:hidden justify-around rounded-[8px] mb-6  pl-10">
            {typePlan.map((item, index) => (
              <Button
                key={index}
                theme={index === selectedType ? 'MiniPrimary' : 'MiniTransparent'}
                click={() => setSelectedType(0)}
              >
                {item.type}
              </Button>
            ))}
          </div>
          <div className="col-span-3 rounded-[50px]  ">
            {selecteTypePlan && (
              <CardTimes
                img={selectedPlan[language].imageUrl}
                clases={selecteTypePlan}
              />
            )}
          </div>
          <div className="w-full hidden md:flex  flex-col justify-around rounded-[8px] mb-6  pl-10">
            {typePlan.map((item, index) => (
              <Button
                key={index}
                theme={index === selectedType ? 'MiniPrimary' : 'MiniTransparent'}
                click={() => 
                  {setSelectedType(index)
                  setSelecteTypePlan(item)}
                }
              >
                {item.type}
              </Button>
            ))}

          </div>
        </div>
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
