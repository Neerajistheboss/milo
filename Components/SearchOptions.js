import React, { useState } from 'react'
import { Text, View,TextInput,TouchableOpacity, Button } from 'react-native'

const SearchOptions = ({navigation}) => {
	const [search,setSearch]=useState('')

	

	const searchBtnClicked=()=>{
		console.log(search)  
		 navigation.navigate('Search',{
		 	search: search

		 }
		)
	}



	return (
		
		<View>
			
			<View>
				<View>
					<View>
						
						<View style={{display:'flex',justifyContent:'center',alignItems:'center',margin:10,marginTop:3,backgroundColor:'#e6fffc',padding:5,borderRadius:10}}>
								<TextInput
								style={{width:'80%',border:'0',backgroundColor:'#e6fffc'}}
								placeholder="Search for Doctors or Hospitals"
								value={search}
								onChangeText={value=>setSearch(value)}
								/>
						</View>
							<View style={{alignItems:'center'}}>

							<View style={{width:100}}>
							<Button onPress={searchBtnClicked} title='Search' color='#01d8bb'/>
							</View>		
							</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default SearchOptions
