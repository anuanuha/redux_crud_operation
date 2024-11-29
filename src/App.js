import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { addUser , deleteUser, updateUser} from './feature/Users';
import { useState } from 'react';
function App() {
  const userList = useSelector((state)=>state.users.value);
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername]= useState("");
  return (
    <div className="App">
      <div className='adduser'>
      <input type='text' placeholder='name' onChange={(event)=>{setName(event.target.value)}}></input>
      <input type='text' placeholder='username' onChange={(event)=>{setUsername(event.target.value)}}></input>
      <button onClick={()=>{dispatch(addUser({id:userList[userList.length-1].id+1,name,username}))}}>add user</button>
      </div>
      <div  className='displayuser'>
        {userList.map((user)=>{
         return <div>
          <h1>{user.name}</h1>
         <h1>{user.username}</h1>
         <input type='text' placeholder='new username...' onChange={(event)=>{setNewUsername(event.target.value)}}></input>
         <button onClick={()=>{dispatch(updateUser({id:user.id, username:newUsername}))}}>Update Username</button>
         <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete User</button>
         </div>
        })}
      </div>
    </div>
  );
}

export default App;
