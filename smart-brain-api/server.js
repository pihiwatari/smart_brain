const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt-nodejs");
const app = express();

app.use(bodyParser.json());
app.use(cors());


const database = {
	users: [
		{
			id: "1",
			name: "TEST",
			email: "mail1@mail.com",
			password: "pass1",
			entries: 0,
			joined: new Date(),
		},
		{
			id: "2",
			name: "name2",
			email: "mail2@mail.com",
			password: "pass2",
			entries: 0,
			joined: new Date(),
		},
		{
			id: "3",
			name: "name3",
			email: "mail3@mail.com",
			password: "pass3",
			entries: 0,
			joined: new Date(),
		},
	]
}

app.get("/", (req, res) => {
	res.send(database.users);
})


app.post("/signin", (req,res) => {
	if (req.body.email === database.users[0].email &&
			req.body.password === database.users[0].password) {
		res.json(database.users[0]);
	} 
	else {
		res.status(404).json("error logging in");
	}
})


app.post("/register", (req, res) => {
	const { email, name, password } = req.body;
	database.users.push({
		id: "4",
		name: name,
		email: email,
		entries: 0,
		joined: new Date(),
	})
	res.json(database.users[database.users.length-1])
})


app.get("/profile/:id" , (req, res) => {
	const {id} = req.params;
	let found = false;
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			return res.json(user);
		}
	})
	if (!found) {
		res.status(404).json("not found");
	}
})


app.put("/image", (req, res) => {
	const { id } = req.body;
	let found = false;
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			user.entries++
			return res.json(user.entries);
		}
	})
	if (!found) {
		res.status(404).json("not found");
	}
})



app.listen(3000, () => {
	console.log("ok");
})