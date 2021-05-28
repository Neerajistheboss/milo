import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/auth-context'
import { ScrollView, Text, View } from 'react-native'

const AboutScreen = () => {
	const auth = useContext(AppContext)
	auth.time = null
	useEffect(() =>{
        window.scrollTo(0,0)
    },[])


	return (
		
			<ScrollView className="p-2 justify-content-center align-items-center about" style={{ background: '#C4FFF8' }}>
				<Text style={{ fontWeight: 'bold' }} >About Us</Text>
				<View className="pr-lg-5" style={{ fontSize: '1.3rem' }}>
					<Text>
						We have been bridging the gap between thousands of people and their
						Doctors for almost 2 years now. We intend to create a Viewerse ecosystem
				connecting the people with any kind of health issue with their Health.{' '}
					</Text>
					<Text>
						The Health Care community also harness our platform to establish and
						increase their presence among the patients.
			</Text>
					<Text>
						Your Health Our Priority
						Care for loved ones
					</Text>
				</View>
			</ScrollView >
	
	)
}
export default AboutScreen
