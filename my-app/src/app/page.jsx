"use client";
import NewNote from "./NewNote";
import { user , useState , useEffect } from "react";
import{getAuth} from "firebase/auth";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Dashboard  from "./Dashboard/page";
import app from "../../config.js";





const Home = ()=>{
      const [user , setUser] = useState(null);
      const router = useRouter();
  
      useEffect(()=>{
          const auth = getAuth(app);
          const unsubscribe = auth.onAuthStateChanged((user) => {
              if(user){
                  setUser(user);
              }else{
                  setUser(null);
              }
          
  });
      return()=>unsubscribe();
  },[]);
  
  const signInWithGoogle = async ()=>{
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      try{
          await signInWithPopup(auth, provider);
          router.push("/Dashboard");
      }catch(error){
          
          console.error("Error signing in google:", error.message);
          
      }
  };
  return(

      
      <div className="flex  flex-col items-center justify-center h-screen">
      
          {user?(<Dashboard/>):(
  
              //user is not loaged in button
      <button onClick={signInWithGoogle}className="bg-gray-400 p-5 hover:bg-read-400 text-black font-bold py-4 rounded">
            signIn With Google
          </button>
  
          )}
      </div>
      
      
  );
          };
  
  export default Home;        
  


    


