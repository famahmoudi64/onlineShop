import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import { authHandler } from './utils/authorization.js';
import { validateForm } from './utils/validation.js'

const inputsBox = document.querySelectorAll('input');
const loginButton = document.querySelector('button');

const submitHandler = async (event) => {
      event.preventDefault();

      const username = inputsBox[0].value;
      const password = inputsBox[1].value;
      const validation = validateForm(username, password)
      if (!validation) return; // Stop further processing if validation fails
     

     const response = await postData("auth/login",{ username,password });
     setCookie(response.token)
     location.assign("index.html")
};
loginButton.addEventListener('click',submitHandler)

 authHandler()
document.addEventListener('DOMContentLoaded', authHandler)