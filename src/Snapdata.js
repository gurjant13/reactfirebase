import { useState, useEffect} from 'react';
import {db} from './firebase_config';
// import { collection, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

function Snapdata() {
	

	const [users, setUsers] = useState([]);

	// const usersCollectionRef = collection(db, "users");
	const ref = collection(db, "users");
	// const ref = firebase.firestore().collection("users");


	function getUsers() {
		// setLoading(true);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());

			});
			setUsers(items);

		})
	}






	useEffect(() => {

		// const getUsers = async () => {
		// 	const data = await getDocs(usersCollectionRef);
		// 	// console.log(data);
		// 	setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
		// }

		getUsers();
	}, []);

	return (



		<div>
		<h1>Users</h1>
		{users.map((user) => (
			<div key={user.id}>
			<h2>{user.name}</h2>
			</div>

			))}

			</div>
			);
}





export default Snapdata;







