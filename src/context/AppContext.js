'use client'

import { useState, useRef, useMemo, useContext, createContext } from 'react'

// const Context = createContext(



const AppContext = createContext();


export function AppProvider({ children }) {


	const [cardPricingOne, setCardPricingOne] = useState('individual');
	const [cardPricingTwo, setCardPricingTwo] = useState('60min');




	const [user, setUser] = useState(null)
	const [users, setUsers] = useState(null)
	const [userDB, setUserDB] = useState({ cuenta: 'tester' })
	const [subItemNav, setSubItemNav] = useState('Casos de Cobranza')
	const [alerta, setAlerta] = useState('')
	const [theme, setTheme] = useState('light');

	const [loader, setLoader] = useState('');


	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [checkedArr, setCheckedArr] = useState([]);


	const setUserSuccess = (data) => {

		if (success === null) {
			setSuccess(data)
			const timer = setTimeout(() => {
				setSuccess(null)
				// console.log('timer')
				return clearTimeout(timer)
			}, 6000)

		}

	}

	const value = useMemo(() => {
		return ({
			cardPricingOne, setCardPricingOne,
			cardPricingTwo, setCardPricingTwo

		})

	}, [cardPricingOne, cardPricingTwo


	])


	return (
		<AppContext.Provider value={value} >
			{children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}
