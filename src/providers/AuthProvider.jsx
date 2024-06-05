/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContex = createContext(null)

const auth = getAuth(app)





const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [booking, setBooking] = useState({origin: '', from: '', to: ''});

    const [myBooking,setMyBooking] = useState([])

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('state changed');
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const bookingInfo = (origin,from,to) =>{
        setBooking({origin, from, to});
    }

    const handleMyBooking = (myHotel)=>{
        let newMyBooking = [];

        const exists = myBooking.find(hotelName=>hotelName.hotel_name
            === myHotel.hotel_name
        )

        if(!exists){
            newMyBooking = [...myBooking,myHotel]
            alert('booking confiremd')
        }
        else{
            const remaining = myBooking.filter(hotelName=>hotelName.hotel_name !== myHotel.hotel_name
            )

            newMyBooking = [...remaining,exists]
            alert('already booked')
        }

        
        setMyBooking(newMyBooking)
        console.log(newMyBooking);
        
    }










    const authInfo = {user,createUser,logOut,logIn,loading,booking,bookingInfo,handleMyBooking,myBooking}






    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;