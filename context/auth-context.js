import React, { createContext, useState, useCallback, useEffect } from 'react'

import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {

	const [values, setValues] = useState({
		isLoggedIn: false,
		patientName: null,
		userId: null,	
		name: null,
		specialisation: null,
		date: null,
		time: null,
		docName: null,
		docId: null,
		hospitalId: null,
		cost: null,
		city:"Dhanbad"
	})



	const login = async(uid, token) => {
		console.log("login")
		console.log(uid + token)
		setValues({ ...values, token, userId: uid, isLoggedIn: true })
		await AsyncStorage.setItem("token", token)
		await AsyncStorage.setItem("uid", uid)
	}

	const setDocName=(value)=>{
		setValues({ ...values,docName:value})
	}


	const loginFunc=async()=>{
		
		const token =await AsyncStorage.getItem('token')
		const uid =await AsyncStorage.getItem('uid')
		setValues({ ...values, token, userId: uid })
		if (token) login(uid, token)
	}

	useEffect(() => {
		login()
	}, [])

	const setValueFunc = (key, value) => {
		switch (key) {
			case "hospitalId": {

				setValues({ ...values, hospitalId: value })
				break;
			}

			case "docName": {
				console.log('upadting docName',value)
				setValues({ ...values, docName: value })
				break;
			}
			case "docId": {
				console.log('upadting docId',value)
				setValues({ ...values, docId: value })
				break;
			}
			case "city": {

				setValues({ ...values, city: value })
				break;
			}
			case "date": {
				console.log('updating date',value)
				setValues({ ...values, date: value })
				break;
			}
			case "time": {
				console.log('updating time',value)
				setValues({ ...values, time: value })
				break;
			}
			default:{
				return
			}


		}
	}


	return (
		<AppContext.Provider value={{ values, setValueFunc }}>
			{children}
		</AppContext.Provider>
	)
}
