import React, { useContext,useEffect } from 'react'
import { ScrollView } from 'react-native'
import { AppContext } from '../context/auth-context'
const RefundScreen = () => {
	const auth = useContext(AppContext)
	auth.time = null
	
	//scrool to top on page load
	useEffect(() =>{
        window.scrollTo(0,0)
	},[])

	
	return (
		<ScrollView className="text-justify px-1 pt-3">
			<Text>Refund and Cancellation Policy</Text>
			<Text>
				Our focus is complete customer satisfaction. In the event, if you are
				displeased with the services provided, we will refund back the money,
				provided the reasons are genuine and proved after investigation. Please
				read the fine prints of each deal before buying it, it provides all the
				details about the services or the product you purchase
			</Text>
			<Text>
				In case of dissatisfaction from our services, clients have the liberty
				to cancel their projects and request a refund from us. Our Policy for
				the cancellation and refund will be as follows:
			</Text>
			<Text>
				Cancellation Policy
				
				For Cancellations please contact us via our contact us option on our
				page or call on our helpline – 8580024009 we also provide the option of
				having a rescheduling of appointment if one want to get the appointment
				in a period of 7 days
			</Text>
			<Text>
				Refund Policy
				
				We will try our best to create the suitable design concepts for our
				clients.
				
				In case any client is not completely satisfied with our products we can
				provide a refund.
				
				If paid by credit card, refunds will be issued to the original credit
				card provided at the time of purchase and in case of payment gateway
				name payments refund will be made to the same account. The fees are
				refunded after deducting the internet handling fees.
			</Text>
			<Text>
				Your Health Our Priority
				
				Care for loved ones
			</Text>
		</ScrollView>
	)
}
export default RefundScreen
