import axios from "axios";

const logIn = () => axios.post(`https://shoeshine.herokuapp.com/login`, {
  "email": "example@example.com", 
  "password": "theshoe"
});

console.log(logIn);