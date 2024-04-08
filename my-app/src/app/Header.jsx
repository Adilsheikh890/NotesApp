"use client";

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
//import Signin from "./Signin";
import Dashboard from './Dashboard/page';


const HomePage = () => {
  const [greetText, setGreetText] = useState("");
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('default', {weekday: 'long'});
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    let currentHour = currentDate.getHours();
    if(currentHour < 12) setGreetText("Good Morning!")
    else if(currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  }, [])

  return (
    <div className='app flex bg-orange-400 sticky top-0 '>
      <Image src="/color.png" width="120"  height="100" className='pl-6 '/>
      <div className='app-main'>
        <header className='header w-100 flex align-center'>
          <div className='container w-100 md:pl-[800px] '>
            <div className='header-content flex align-center justify-between text-white'>
              <div className=' font-bold pt-10 '>
              
                <h3 className=' '>{greetText}</h3>
                
              </div>
              <div className='font-bold pt-10 pl-2 '>
                <span className='text-uppercase '>{date}</span>
                <Dashboard/>
              </div>
            </div>
          </div>
        </header>
        <div className='notes-wrapper py-4 px-4'>
        
        </div>
      </div>
    </div>
  )
}

export default HomePage