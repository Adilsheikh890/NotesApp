"use client";
//import NewNote from "./NewNote";
import { user, useState, useEffect } from "react";

import{getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../../config";

function Dashboard (){
          const auth = getAuth();
          const router = useRouter();
          const [user, setUser]= useState(null);
          useEffect(()=>{

            const auth = getAuth(app);
            const unsubscribe = auth.onAuthStateChanged((user) => {
                if(user){
                    setUser(user);
                }else{
                    router.push("/"); // Redirect to yhe login page if the is not authenticate

                }
            
    });

    return()=> unsubscribe ();

}, [auth, router]);

const handleLogout  = async ()=>{
    try{
        await  signOut(auth);
        router.push("/"); // Ridirect to the login page
    }catch (error){
        console.error("Error signing out : ", error.message)
    }
};
return(
    <div className="flex flex-col items-center justify-center h-screen">
     <div className=" p-8 rounded-lg shadow-md">
        <h1 className=" text-3xl font-bold mb-4">
            wellcome to the,{user ? user.displayName : "Guest" }!</h1>
<button onClick={handleLogout} className=" bg-read-500 hover:bg- bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
LogOut
</button>
     </div>



    </div>
);
}

export default Dashboard;




    


