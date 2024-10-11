import React from 'react'
import { useState,useEffect } from 'react'
const url = "https://api.github.com/users"
const ExampleOne = () => {

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    const fetchData = async () => { 
      try{
        const res = await fetch(url);
        const users = await res.json();
        setUsers(users); 
        console.log(users);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();

  },[]);

  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333' }}>users</h2>
      <ul className='users' style={{ listStyleType: 'none', padding: 0 , display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id} style={{ marginBottom: '15px', alignItems: 'center' }}>
              <img src={avatar_url} alt={login} style={{ borderRadius: '50%',width:'200px'}} />
              <div style={{  display: 'flex'}}>
                <h5 style={{ margin: 0 }}>{login}</h5>
                <a href={html_url} style={{ color: '#007bff', textDecoration: 'none' ,marginRight:"12px"}}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export default ExampleOne