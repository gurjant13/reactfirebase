// import React from 'react';
import React, { useState } from "react";
import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';



function Insertapidata() {
	const [inputs, setInputs] = useState({
		username : "",
		password : ""
	});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}))
	}


	const handleSubmit = async(event) => {
		event.preventDefault();
		// alert(`${name}`);

		
		// console.log(inputs);

		const { username, password } = inputs;

		const res = fetch(
			"https://epikreactt-default-rtdb.firebaseio.com/userDataRecords.json",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json" ,
			} ,
			body: JSON.stringify({
				username,
				password,
			}),

		}
			)
		

		if (res) {
			setInputs({
				username: "",
				password: "",

			});
			alert("Data Stored");
		} else {
			alert("plz fill the data");
		}


	}

	return (


		<div className="container">
		<div className="row">
		<div className="col-lg">
		</div>
		<div className="col-lg">

		<form onSubmit={handleSubmit}>




		<div className="mb-3">
		<input type="text" 
		name="username" 
		value={inputs.username || ""} 
		onChange={handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
		</div>


		<div className="mb-3">
		<input type="text" 
		name="password" 
		value={inputs.password || ""} 
		onChange={handleChange} className="form-control" placeholder="Password" id="exampleInputPassword1" />
		</div>


		<div className="d-grid">
		<button type="submit" className="btn btn-primary">Sign Up</button>
		</div>


		</form>

		</div>
		<div className="col-lg">
		</div>
		</div>
		</div>



		)
}

export default Insertapidata;







