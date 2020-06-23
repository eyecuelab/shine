import axios from "axios";

const logIn = () => axios.post(`https://shoeshine.herokuapp.com/login`, {
  "email": "example@example.com", 
  "password": "theshoe"
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});

console.log(logIn());