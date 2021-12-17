import { React, useState, useEffect} from 'react';
import {db} from './firebase_config';
import { collection, getDocs, addDoc } from "firebase/firestore";

function Addrecord() {


  const usersCollectionRef = collection(db, "users");

  const [newName, setName] = useState("");
  const [newAge, setAge] = useState("");


  const createUser = async (event) => {
    event.preventDefault();
    await addDoc(usersCollectionRef, {Name: newName, Age:Number(newAge) });
    alert(newName);
  }

  

  

  return (
<>

<div className="container">
  <div className="row">
    <div className="col-lg">
    </div>
    <div className="col-lg">

     

<form onSubmit={createUser}>
        

      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Full Name" 
        aria-label="Username" aria-describedby="addon-wrapping" 
        onChange={(event) => {setName(event.target.value);
    }}/>
      </div>

        <div className="mb-3">
          <input type="number" className="form-control" placeholder="Age" id="exampleInputPassword1" 
          onChange={(event) => {setAge(event.target.value);
    }}/>
        </div>

        
        


        <div className="d-grid">
        <button type="submit" className="btn btn-primary">Add User</button>
      </div>

        
  </form>    
      
    </div>
    <div className="col-lg">
    </div>
  </div>
</div>

    

    </>
    );

  }



  export default Addrecord;



