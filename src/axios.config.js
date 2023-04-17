import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://luqatah.brunchenapp.com/api/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        "Access-Control-Allow-Origin": "*",
           
    }
});

export default instance;



/* import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.bruxiesegypt.com/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export default instance;
 */