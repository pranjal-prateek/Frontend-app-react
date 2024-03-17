import { useState, useEffect } from 'react';

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
console.log(isOnline+"check")
  useEffect(() => {
     window.addEventListener('online',() => {setIsOnline(false)});
    window.addEventListener('offline', ()=>{
        setIsOnline(false)
    });

    return () => {
      window.removeEventListener('online', ()=>{setIsOnline(false)});
      window.removeEventListener('offline', ()=> setIsOnline(false));
    };
  }, []);

  return isOnline;
}
