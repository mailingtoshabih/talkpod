// import { useState, useEffect, useRef, useCallback } from "react";
// import { useStateCallback } from "./useStateCallback";
// import { socketInit } from "../socket"
// import { ACTIONS } from "../actions";
// import freeice from 'freeice'









// const users = [
//     { id: 1, name: "Shab" },
//     { id: 2, name: "Timmy" }
// ]

// const useWebrtc = (roomId, user) => {


//     const [clients, setClients] = useStateCallback([]);
//     // clients && console.log(clients) 

//     const audioElements = useRef({});
//     const connections = useRef({});
//     const localMediaStream = useRef(null);
//     const socket = useRef(null);
//     const clientsRef = useRef([]);





//     useEffect(() => {
//         socket.current = socketInit();
//     }, [])



//     const addNewClient = useCallback(

//         (newClient, cb) => {

//             const lookingFor = clients.find((client) => client._id === newClient._id);

//             if (lookingFor === undefined) {
//                 setClients((existingClients) => [...existingClients, newClient], cb);
//             }
//         },
//         [clients, setClients]
//     )


//     useEffect(() => {

//         const startCapture = async () => {
//             localMediaStream.current =
//                 await navigator.mediaDevices.getUserMedia({
//                     audio: true
//                 })
//         }

//         startCapture().then(() => {
//             addNewClient({ ...user, muted: true }, () => {
//                 const localElement = audioElements.current[user._id];
//                 if (localElement) {
//                     localElement.volume = 0;
//                     localElement.srcObject = localMediaStream.current;
//                 }

//                 socket.current.emit(ACTIONS.JOIN, { roomId, user });

//             });
//         });

//         return () => {
//             // leaving room
//             localMediaStream.current
//                 .getTracks()
//                 .forEach((track) => track.stop());

//             socket.current.emit(ACTIONS.LEAVE, { roomId });
//         };
//     }, []);






//     useEffect(() => {

//         const handleNewPeer = async ({
//             peerId,
//             createOffer,
//             user: remoteUser,
//         }) => {
//             // If already connected then prevent connecting again
//             // console.log('render inside handle new peer', 8);
//             if (peerId in connections.current) {
//                 return console.warn(
//                     `You are already connected with ${peerId} (${user.name})`
//                 );
//             }


//             // Store it to connections
//             connections.current[peerId] = new RTCPeerConnection({
//                 iceServers: freeice()
//             });


//             // Handle new ice candidate on this peer connection
//             connections.current[peerId].onicecandidate = (event) => {
//                 socket.current.emit(ACTIONS.RELAY_ICE, {
//                     peerId,
//                     icecandidate: event.candidate,
//                 });
//             };


//             // Handle on track event on this connection
//             connections.current[peerId].ontrack = ({
//                 streams: [remoteStream]
//             }) => {
//                 addNewClient({ ...remoteUser, muted: true }, () => {
//                     // console.log('render add new client remote', 9);
//                     if (audioElements.current[remoteUser.id]) {
//                         audioElements.current[remoteUser.id].srcObject =
//                             remoteStream;
//                     } else {
//                         let settled = false;
//                         const interval = setInterval(() => {
//                             if (audioElements.current[remoteUser.id]) {
//                                 audioElements.current[
//                                     remoteUser.id
//                                 ].srcObject = remoteStream;
//                                 settled = true;
//                             }

//                             if (settled) {
//                                 clearInterval(interval);
//                             }
//                         }, 1000);
//                     }
//                 });
//             };



//             // Add local traks to remote connections
//             localMediaStream.current.getTracks().forEach((track) => {
//                 connections.current[peerId].addTrack(
//                     track,
//                     localMediaStream.current
//                 );
//             });


//             // Create offer
//             if (createOffer) {
//                 const offer = await connections.current[peerId].createOffer();

//                 await connections.current[peerId].setLocalDescription(
//                     offer
//                 );


//                 // Set offer to another client
//                 socket.current.emit(ACTIONS.RELAY_SDP, {
//                     peerId,
//                     sessionDescription: offer,
//                 });
//             }

//         }


//         socket.current.on(ACTIONS.ADD_PEER, handleNewPeer);

//         return () => {
//             socket.current.off(ACTIONS.ADD_PEER);
//         }

//     }, [])




//     // handle ice cndidate
//     useEffect(() => {
//         socket.current.on(ACTIONS.ICE_CANDIDATE, ({ peerId, icecandidate }) => {
//             if (icecandidate) {
//                 connections.current[peerId].addIceCandidate(icecandidate);
//             }
//         });

//         return () => {
//             socket.current.off(ACTIONS.RELAY_ICE);
//         }
//     }, [])





//     // handle sdp
//     useEffect(() => {

//         const handleRemoteSdp = async ({
//             peerId,
//             sessionDescription: remoteSessionDescription
//         }) => {
//             connections.current[peerId].setRemoteDescription(
//                 new RTCSessionDescription(remoteSessionDescription)
//             )

//             //  if session desc is offer then create answer

//             if (remoteSessionDescription.type === 'offer') {
//                 const connection = connections.current[peerId];
//                 const answer = await connection.createAnswer();

//                 connection.setLocalDescription(answer);
//                 socket.current.emit(ACTIONS.RELAY_SDP, {
//                     peerId,
//                     sessionDescription: answer
//                 })
//             }
//         };

//         socket.current.on(ACTIONS.SESSION_DESCRIPTION, handleRemoteSdp)

//         return () => {
//             socket.current.off(ACTIONS.SESSION_DESCRIPTION);
//         }

//     }, [])

// // ---------------------------------------------
// // -----------------------------------------------



//     // handle remove peer
//     useEffect(() => {
//         const handleRemovePeer = async ({ peerId, userId }) => {

//             if (connections.current[peerId]) {
//                 connections.current[peerId].close();
//             }

//             delete connections.current[peerId];
//             delete audioElements.current[peerId];
//             setClients((list) => list.filter((client) => client._id !== userId))
//         };

//         socket.current.on(ACTIONS.REMOVE_PEER, handleRemovePeer);

//         return () => {
//             socket.current.off(ACTIONS.REMOVE_PEER);
//         };

//     }, []);




//     // handle mute
//     const handleMute = (isMute, userId) => {
        
//         let settled = false;

//         let interval = setInterval(() => {
//             if (localMediaStream.current) {
//                 localMediaStream.current.getTracks()[0].enabled = !isMute;

//                 if (isMute) {
//                     socket.current.emit(ACTIONS.MUTE, {
//                         roomId,
//                         userId
//                     })
//                 } else {
//                     socket.current.emit(ACTIONS.UNMUTE, {
//                         roomId,
//                         userId
//                     })
//                 }
//                 settled = true;
//             }

//             if (settled) {
//                 clearInterval(interval);
//             }

//         }, 200);
//     }






//     useEffect(() => {
//         clientsRef.current = clients;
//     }, [clients]);

//     // Listen for mute/unmute
    
//     useEffect(() => {
//         socket.current.on(ACTIONS.MUTE, ({ peerId, userId }) => {
//             setMute(true, userId);
//         });
//         socket.current.on(ACTIONS.UNMUTE, ({ peerId, userId }) => {
//             setMute(false, userId);
//         });


//         const setMute = (mute, userId) => {
            
//             // _id change

//             const clientIdx = clientsRef.current
//                 .map((client) => client._id)
//                 .indexOf(userId);
            

//             const connectedClients = JSON.parse(
//                 JSON.stringify(clientsRef.current)
//             );


//             if (clientIdx > -1) {
//                 connectedClients[clientIdx].muted = mute;
//                 setClients(connectedClients);
//             }
//         }
//     }, [])







//     const provideRef = (instance, userId) => {
//         audioElements.current[userId] = instance;
//     };


//     return { clients, provideRef, handleMute };

// }