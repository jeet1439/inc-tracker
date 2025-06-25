import express from 'express';
import mongoose from 'mongoose';

const app = express();

const URL = 'mongodb://127.0.0.1:27017/Inc-tracker'

app.listen(3000, ()=>{
    console.log("Server running");
    mongoose.connect(URL)
      .then(() => console.log("database connected locally"))
      .catch((err) => console.log(err));

});

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const User = mongoose.model('User', UserSchema);

// User.create({ name: 'Jeet', email: 'jeet@example.com' })
//   .then(user => {
//     console.log('User created:', user);
//   })
//   .catch(err => {
//     console.error('Error creating user:', err);
//   });

app.get("/",(req, res)=>{
    res.send("index.html");
})