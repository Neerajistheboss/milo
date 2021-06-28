import { PermissionsAndroid} from 'react-native';




    export const requestCameraPermission = async () => {
		try {
		  const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.CAMERA,
			{
			  title: "Cool Photo App Camera Permission",
			  message:
				"Cool Photo App needs access to your camera " +
				"so you can take awesome pictures.",
			  buttonNeutral: "Ask Me Later",
			  buttonNegative: "Cancel",
			  buttonPositive: "OK"
			}
		  );
		  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			// props.navigation.navigate('VideoCall')
			// navigation.navigate('VideoCall')
            setCamPermission(true);
		  } else {
			console.log("Camera permission denied");
		  }
		} catch (err) {
		  console.warn(err);
		}
	  };
	

      export const requestMicrophonePermission = async () => {
		try {
		  const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
			{
			  title: "Cool Photo App Microphone Permission",
			  message:
				"Cool Photo App needs access to your microphone " +
				"so you can take awesome pictures.",
			  buttonNeutral: "Ask Me Later",
			  buttonNegative: "Cancel",
			  buttonPositive: "OK"
			}
		  );
		  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			// props.navigation.navigate('VideoCall')
			// navigation.navigate('VideoCall')
            setMicPermission(true)
		  } else {
			console.log("Camera permission denied");
		  }
		} catch (err) {
		  console.warn(err);
		}
	  };
	
