
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from './firebase_config'



function Register() {
	// const [inputs, setInputs] = useState({
	// 	username : "",
	// 	password : ""
	// });

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");	

	const [user, setUser] = useState ({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	})
	// const handleChange = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	setInputs(values => ({...values, [name]: value}))
	// }


	const handleSubmit = async(event) => {
		event.preventDefault();
		try {
			// alert("done");
			const user = await createUserWithEmailAndPassword(
				auth,
				username,
				password
				);
			// alert("done");
			console.log(user);
		} catch (error) {
			alert("error");
			console.log(error.message);
		}

	}

	const login = async (event) => {
		event.preventDefault();
		try {
			
			const user = await signInWithEmailAndPassword(
				auth,
				loginUsername,
				loginPassword
				);

			// alert("done");
			console.log(user);
			
		} catch (error) {
			alert("error");
			console.log(error.message);
		}
	};

	const logout = async () => {
		// alert("d");
		await signOut(auth);
	};

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
		
		onChange={(event) => {
			setUsername(event.target.value)
		}
	} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
	</div>


	<div className="mb-3">
	<input type="text" 
	name="password" 

	onChange={(event) => {
		setPassword(event.target.value)
	}
} className="form-control" placeholder="Password" id="exampleInputPassword1" />
</div>


<div className="d-grid">
<button type="submit" className="btn btn-primary">Sign Up</button>
</div>


</form>

<br />

<form onSubmit={login}>




<div className="mb-3">
<input type="text" 
name="username" 

onChange={(event) => {
	setLoginUsername(event.target.value)
}
} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
</div>


<div className="mb-3">
<input type="text" 
name="password" 

onChange={(event) => {
	setLoginPassword(event.target.value)
}
} className="form-control" placeholder="Password"  />
</div>


<div className="d-grid">
<button type="submit" className="btn btn-primary">Log In</button>
</div>


</form>

{user?.email}

<br />

<div className="d-grid">
<button onClick={logout} className="btn btn-primary">Log Out</button>
</div>

</div>
<div className="col-lg">
</div>
</div>
</div>



)
}

// ReactDOM.render(<RegisterForm />, document.getElementById('register_root'));


export default Register;






