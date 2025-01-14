import React, { useState,useEffect } from 'react'

function Github() {
   const [data,setData]=useState([])
    useEffect(() => {
     
        fetch('https://api.github.com/users/Aryans06').then(res=>res.json()).then(data=>{
      console.log(data);
      setData(data)
    })
    
      
    }, [])
    
    return (
    <div className='text-center m-4 bg-gray-400 text-white text-3xl p-4'>
      Github Followers: {data.public_repos}
      <img src={data.avatar_url} width={300}></img>
    </div>
  )
}

export default Github
