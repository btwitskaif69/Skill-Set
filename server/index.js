const express = require ('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require ('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


app.use(cors())
app.use((express.json()))
mongoose.connect('mongodb://localhost:27017/skill-set')


app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        // Hash the password
        const newPassword = await bcrypt.hash(req.body.password, 10);
        
        // Create a new user with the hashed password
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: newPassword,  // Use the hashed password
            confirmpassword: newPassword, // Optional: You might want to handle this differently
        });

        res.json({ status: 'ok' });
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', error: 'Duplicate Email' });
    }
});



app.post('/api/login', async (req, res) => {

        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })

        if (user){
            return res.json({status: 'ok', user: true})
        }else{
            return res.json({status: 'error', user: true})
        }

    })
app.listen(1337, () => {
    console.log('Sever started on 1337')
})