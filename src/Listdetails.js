import { React, useState, useEffect} from 'react';
import {db} from './firebase_config';
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

function Listdetails() {


  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [updateAge, setNewAge] = useState("");

  const updateUser = async (id, Age) => {

    const userDoc = doc(db, "users", id)
    // alert("update");
    const newFields = { Age: updateAge };
    await updateDoc(userDoc, newFields)


  };

  const deleteUser = async (id) => {
    alert("delete");
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)

  };

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getUsers();
  }, []);

  

  return (
    <>

    {users.map((user) => { 
      return (
       <div key={user.id}> 

       <div className="container">
       <div className="row">
       <div className="col-lg-4">
       </div>
       <div className="col-lg-4">



       


       <div className="mb-3">
       <input placeholder = {user.Name} type="text" className="form-control" 
       aria-label="Username" aria-describedby="addon-wrapping" 

       />
       </div>

       <div className="mb-3">
       <input placeholder = {user.Age} 
       
       type="number" className="form-control" id="exampleInputPassword1" 

       onChange={(event) => {setNewAge(event.target.value);
       }}
       />
       </div>





       <div className="d-grid">
       <button onClick={() => {
        updateUser(user.id, user.Age);
      }}
      className="btn btn-primary">Update Age</button>

      <br />


      <button 
      onClick={() => {
        deleteUser(user.id);
      }}
      className="btn btn-primary"
      > 
      Delete Record
      </button>

      </div>



      </div>


      </div>
      <div className="col-lg">
      </div>
      </div>
      <br />
      </div>

      );
    })}  
    </>
    );

    }



    export default Listdetails;



