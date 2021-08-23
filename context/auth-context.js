import React, { createContext, useState, useCallback, useEffect } from 'react'

import moment from 'moment'
import { AsyncStorage } from 'react-native';

export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {
	useEffect(() =>{
		AsyncStorage.getItem('user').then(user=>{
			uid=JSON.parse(user)?.USER_ID||appData.values.userId
			setValueFunc('USER_ID',uid)
		})
	},[])

	initialValues={
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
		city:"Dhanbad",
		userBloodGroup:'',
		
	}


	// useEffect(() => {
	// 	fetchLocalStorage()
	// },[])

	
	const [values, setValues] = useState(initialValues)



	const login = async(uid, token) => {
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
				setValues({ ...values, docName: value })
				break;
			}
			case "docId": {
				setValues({ ...values, docId: value })
				break;
			}
			case "USER_ID": {
				setValues({ ...values, userId: value })
				break;
			}
			case "city": {

				setValues({ ...values, city: value })
				break;
			}
			case "date": {
				setValues({ ...values, date: value })
				break;
			}
			case "time": {
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
