import React, { useState, useContext,useEffect } from 'react'
import axios from 'axios'
import { View } from 'react-native'


const LoginScreen = (props) => {
	

	//scrool to top on page load
	useEffect(() =>{
        window.scrollTo(0,0)
	},[])

	
	const [mobile, setMobile] = useState('')
	const [otp, setOtp] = useState('')

	const handleMobileChange = (event) => {
		setMobile(event.target.value)
	}
	const handleOtpChange = (event) => {
		setOtp(event.target.value)
	}

	

	return (
		<View>
			<View className='container-fluid login'>
				<View className='row'>
					<View className=' mx-auto'>
						<View id='first'>
							<View className='myform form '>
								<View className='logo mb-3'>
									<View className='col-md-12 text-center'>
										<h6>UserLogin</h6>
									</View>
								</View>

								

								<View name='register'>
									<View className='form-group' style={{ width: 350 }}>
										<label htmlFor='exampleInputEmail1'> Mobile No.:</label>
										<input
											value={mobile}
											onChange={handleMobileChange}
											type='number'
											name='mobile'
											className='form-control'
											id='mobile'
											aria-describedby='emailHelp'
											placeholder='Enter Mobile No.' required></input>
									</View>
								
									<View style={{width:'80%',backgroundColor:'#3ad3b2',color:'#FFF',fontSize:18,textAlign:'center',margin:"0 auto",padding:15}}>
										Send Otp
									</View>
									<View className='form-group' style={{ width: 350 }}>
										<p className='text-center'>
											By signing up you accept our <NavLink to='terms' style={{color:"#00D0CC"}}>Terms Of Use</NavLink>
										</p>
									</View>
									<View className=' text-center login_btn '>
										
									</View>

								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default LoginScreen
