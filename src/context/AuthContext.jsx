import React from 'react'
import { useEffect } from 'react';
export const Auth = React.createContext(null);

export default function AuthContext({children}) {
  const [auth, setAuth] =  React.useState(true)
  
  useEffect(()=>{

  },[])

  return (
  <>
    <Auth.Provider value={{auth, setAuth}}>
        {children}
    </Auth.Provider>
    </>
  )
}
