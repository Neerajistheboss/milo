import React from 'react'
import { View,Text,StyleSheet, StatusBar } from 'react-native'
const DataScreen=({route})=>{
console.log(route.name==='About Us')
    let data=<View><Text>{route.name}</Text></View>

   

const aboutUs=(                                                                                                                //ABOUT US               
    <View style={styles.container}>
    <StatusBar backgroundColor='#01F0D0' animated={true}/>
        <Text>About Us</Text>
    </View>
)



const contactUs=(                                                                                                                //Contact US               
    <View style={styles.container}>
        <Text>Contact Us</Text>
    </View>
)



const disclaimer=(                                                                                                                //Disclaimer               
    <View style={styles.container}>
        <Text>Disclaimer</Text>
    </View>
)




const helpAndSupport=(                                                                                                                //Help & Support          
    <View style={styles.container}>
        <Text>Help & Support</Text>
    </View>
)




const termsAndConditions=(                                                                                                                //Terms And Conditions           
    <View style={styles.container}>
        <Text>Terms And Conditions</Text>
    </View>
)



const refundPolicy=(                                                                                                                //Refund Policy             
    <View style={styles.container}>
        <Text>Refund Policy</Text>
    </View>
)




const privacyPolicy=(                                                                                                                //Privacy Policy           
    <View style={styles.container}>
        <Text>Privacy Policy</Text>
    </View>
)

switch(route.name){
    case 'About Us':
    data=aboutUs        
    break
            
    case 'Contact Us':
    data=contactUs    
    break
        
    case 'Disclaimer':
    data=disclaimer    
    break
        
    case 'Help & Support':
    data=helpAndSupport    
    break
        
    case 'Terms & Conditions':
    data=termsAndConditions    
    break
        
    case 'Refund Policy':
    data=refundPolicy    
    break
        
    case 'Privacy Policy':
    data=privacyPolicy    
    break
}


    return(
        data
    )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
}
})

export default DataScreen