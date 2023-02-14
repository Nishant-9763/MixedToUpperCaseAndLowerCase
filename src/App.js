 import React, { useState } from 'react';


function App() {
 const [bio , setBio] = useState('')
return (
  <div>
    <h1>Mixed To UpperCase</h1>

  <textarea style={{width:"500px",height:"200px",fontSize:"50px"}} value={bio} onChange ={(e) =>{
    setBio(e.target.value)
  } } > </textarea> <br/>

  <div style={{margin:"10px"}}>
  <button onClick={()=>{
    let newBio = bio
    setBio(newBio.toUpperCase())
    }}>Change to Uppercase</button>



    <button style={{marginLeft:"190px"}} onClick={()=>{
    let newBio = bio
    setBio(newBio.toLowerCase())
    }}>Change to LowerCase</button>
  </div>

    <p style={{fontSize:"50px"}}>{bio}</p>

  </div>
)
}

export default App;




//import React, { useState } from 'react';
// import './style.css';

// export default function App() {
//   const [bio, setBio] = useState('');

//   return (
//     <div>
//       <textarea value={bio} onChange={(e) => {setBio(e.target.value); }}> </textarea>{' '}
//       <br />
//       <button onClick={() => {let newBio = bio;setBio(newBio.toUpperCase()); }}> Change to uppercase</button>
//       <p>{bio}</p>
//     </div>
//   );
// }
// // //Create a page with a textarea, where a user writes their introduction/bio in mixed case. There will be a button on click of which the bio will change to upper case and show on a paragraph element below the textarea. */