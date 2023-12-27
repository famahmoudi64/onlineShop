import { getCookie } from './cookie.js'

const authHandler = () => {
    const cookie = getCookie();
    const url = location.href;
    if((cookie && url.includes("auth")) || (!cookie && url.includes("dashboard")) ) {
       window.location.href = "index.html"
       return false;    
      }
     }

export { authHandler };