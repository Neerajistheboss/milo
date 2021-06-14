import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,Dimensions } from 'react-native';
import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo
} from 'react-native-twilio-video-webrtc';
import { Ionicons } from '@expo/vector-icons';
import {requestCameraPermission,requestMicrophonePermission} from '../Utils/VideoCallPermissions'
import axios from 'axios';
import { AppContext } from '../context/auth-context';

const VideoCallScreen = ({navigation,route}) => {
  useEffect(()=>{
    requestCameraPermission();
    requestMicrophonePermission()
  },[])


  const appData=useContext(AppContext)

  
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [status, setStatus] = useState('disconnected');
  const [participants, setParticipants] = useState(new Map());
  const [videoTracks, setVideoTracks] = useState(new Map());
  const [token, setToken] = useState(null);
  const twilioRef = useRef(null);


  //getting access token 
  useEffect(()=>{
    // axios.get(`https://server.yumedic.com:5000/api/v1/videocalls/user/${query.get('docId')}/${JSON.parse(localStorage.getItem('user'))?.USER_ID}`)
    
    axios.get(`https://server.yumedic.com:5000/api/v1/videocalls/user/${route.params.docId}/${appData.values.userId}`)
    .then(response=>{
      console.log(response.data.accessToken)
      setToken(response.data.accessToken)
    })
  },[])



  console.log(status)
  const _onConnectButtonPress = () => {
    twilioRef.current.connect({ 
      roomName:'cool room',
      accessToken: token });
    setStatus('connecting');
  }
  
  const _onEndButtonPress = () => {
    twilioRef.current.disconnect();
  };

  const _onMuteButtonPress = () => {
    twilioRef.current
      .setLocalAudioEnabled(!isAudioEnabled)
      .then(isEnabled => setIsAudioEnabled(isEnabled));
  };

  const _onFlipButtonPress = () => {
    twilioRef.current.flipCamera();
  };

  const _onRoomDidConnect = ({roomName, error}) => {
    console.log('onRoomDidConnect: ', roomName);

    setStatus('connected');
  };

  const _onRoomDidDisconnect = ({ roomName, error }) => {
    console.log('[Disconnect]ERROR: ', error);

    setStatus('disconnected');
  };

  const _onRoomDidFailToConnect = error => {
    console.log('[FailToConnect]ERROR: ', error);

    setStatus('disconnected');
  };

  const _onParticipantAddedVideoTrack = ({ participant, track }) => {
    console.log('onParticipantAddedVideoTrack: ', participant, track);

    setVideoTracks(
      new Map([
        ...videoTracks,
        [
          track.trackSid,
          { participantSid: participant.sid, videoTrackSid: track.trackSid },
        ],
      ]),
    );
  };

  const _onParticipantRemovedVideoTrack = ({ participant, track }) => {
    console.log('onParticipantRemovedVideoTrack: ', participant, track);

    const videoTracksLocal = videoTracks;
    videoTracksLocal.delete(track.trackSid);

    setVideoTracks(videoTracksLocal);
  };

  useEffect(() => {
    if(!token) return  
    _onConnectButtonPress()
  },[token])

  return (
    <View style={styles.container}>
      

      {
        (status === 'connected' || status === 'connecting') &&
          <View style={styles.callContainer}>
          {
            status === 'connected' &&
            <View style={styles.remoteGrid}>
              {
                Array.from(videoTracks, ([trackSid, trackIdentifier]) => {
                  return (
                    <TwilioVideoParticipantView
                      style={styles.remoteVideo}
                      key={trackSid}
                      trackIdentifier={trackIdentifier}
                    />
                  )
                })
              }
            </View>
          }
          <View
            style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={_onMuteButtonPress}>
               <Ionicons name={"time"} size={14}  />
              <Text style={{fontSize: 12}}>{ isAudioEnabled ? "Mute" : "Unmute" }</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={_onEndButtonPress}>
               <Ionicons name={"time"} size={14}  />
              <Text style={{fontSize: 12,color:'red'}}>End</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={_onFlipButtonPress}>
               <Ionicons name={"time"} size={14} color={'gray'}  />
               <Text style={{fontSize: 12}}>Flip</Text>
            </TouchableOpacity>
            <TwilioVideoLocalView
              enabled={true}
              style={styles.localVideo}
            />
          </View>
        </View>
      }

      <TwilioVideo
        ref={ twilioRef }
        onRoomDidConnect={ _onRoomDidConnect }
        onRoomDidDisconnect={ _onRoomDidDisconnect }
        onRoomDidFailToConnect= { _onRoomDidFailToConnect }
        onParticipantAddedVideoTrack={ _onParticipantAddedVideoTrack }
        onParticipantRemovedVideoTrack= { _onParticipantRemovedVideoTrack }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  form: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formGroup: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  textInput: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  callContainer: {
    flex: 1,
  },
  callWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  remoteGrid: {
    flex: 1,
  },
  remoteVideo: {
    flex: 1,
  },
  localVideo: {
    position: 'absolute',
    right: 5,
    bottom: 50,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 4,
  },
  optionsContainer: {
    position: 'absolute',
    paddingHorizontal: 10,
    left: 0,
    right: 0,
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default VideoCallScreen