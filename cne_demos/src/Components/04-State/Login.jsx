import React, {useState} from 'react';

const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const printValues = event => {
         event.preventDefault();
         console.log(username,password);
     };

     function onChangeUsername(e) {
        setUsername(e.target.value);
     }

     return(
         <>
             <form onSubmit={printValues}>
             <label> Username:</label>
                 <input name="username" 
                 type="text" 
                 value={username} 
                 onChange={onChangeUsername}/>

             <label> Password: </label>
                 <input type="password"
                 name="password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}/>
             <br/>
             <button>Submit</button>
             </form>
         </>
     );
 }

 export default Login; 