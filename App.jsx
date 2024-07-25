import react, { useState } from 'react'

const App=()=>{

const[name,setName]=useState();
const[fullName,setFullName]=useState();

const[pass,setpass]=useState();
const[password,setpassword]=useState();

const[NewEmail,setNewEmail]=useState();
const[email,setemail]=useState();


        const inputEvent=(Event)=>{
              setName(Event.target.value)
    };

         const inputEventtwo=(Event)=>{
              setpass(Event.target.value);
    };
    
        const inputEventthree=(event)=>{
            setNewEmail(event.target.value);
        };


 const onsubmit=()=>{
    setFullName(name);
   setpassword(pass)
    setemail(NewEmail);
 };



return(
    <>
    <div>
    <form>   
         <h1>Hello{fullName}{password}{email}</h1>

        <input type='text' placeholder='enter your name'
            onChange={inputEvent}
        />

        <input type='password' placeholder='enter your password'
         onChange={inputEventtwo}
        />

        <input type='email' placeholder='enter your email'
         onChange={inputEventthree}
        />

        <button onClick={onsubmit}>Click Me</button>
    </form>

    </div>

</>
);
};

export default App;