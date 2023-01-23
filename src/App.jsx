import { useState } from 'react'

function App() {

  const login = async()=>{
      let res = await fetch("http://localhost:8000/login",{
        method:"POST",
        body:JSON.stringify({email:"vishwajeethaldar01321@gmail.com", password:"12345"}),
        headers:{
          'Content-Type': 'application/json'
        },
        credentials:"include",
        withCredentials: true,
      })
      console.log(await res.json());
  }

  return (
    <div className="App">
        <button onClick={login}>
            Login
        </button>
    </div>
  )
}

export default App
