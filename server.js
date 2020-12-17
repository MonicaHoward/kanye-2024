const express = require('express');

const app = express();

const localDb = {
    users: [
        {
            id: '131',
            firstName: "Kim",
            lastName: "Kardashian-West",
            email: "kiki@gmail.com",
            password: "password",
            partyAff: 'birthday',
            joined: new Date()
        },
        {
            id: '132',
            firstName: "Meek",
            lastName: "Mill",
            email: "meek@gmail.com",
            password: "dreamer",
            partyAff: 'independent',
            joined: new Date()
        }

    ]
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(localDb.users);
})
app.post('/register', (req, res) => {
    const { firstName, lastName, email, password, partyAff } = req.body
    localDb.users.push({
            id: '212',
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            partyAff: partyAff,
            joined: new Date()

    })
    res.json(localDb.users[localDb.users.length - 1]);
})
app.post('/signin', (req, res) => {
    if (req.body.email === localDb.users[0].email && 
        req.body.password === localDb.users[0].password ){
        res.json('successfully signed in');
    }
    else {
        res.status(400).json("error logging in");
    }
    // res.json("Welcome back, user");
})
app.get('/profile/:uIDg', (req, res) => {
    res.send("Hello!");
})

app.listen(3001);