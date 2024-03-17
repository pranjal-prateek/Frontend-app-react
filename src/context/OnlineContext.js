import React, { createContext, useContext, useEffect, useState } from 'react'
const OnlineNetworkContext = createContext(null);
export const useOnline = () => useContext(OnlineNetworkContext);
export const OnlineContextProvider = ({children}) => {
const [isOnline,setIsOnline] =useState(()=>{return navigator.onLine})


useEffect(()=>{
    window.addEventListener('online', ()=> setIsOnline(true))
    window.addEventListener('offline', ()=> setIsOnline(false) )

    return ()=>{
        window.removeEventListener('online', ()=> setIsOnline(true))
        window.removeEventListener('offline', ()=> setIsOnline(false) )
    }
})
  return (
        <OnlineNetworkContext.Provider value={{isOnline}}>
            {children}
        </OnlineNetworkContext.Provider>
  )
}
