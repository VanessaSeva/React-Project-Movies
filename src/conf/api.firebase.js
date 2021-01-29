import  * as axios from 'axios';

const apiFirebase = axios.create({
    baseUrl: 'https://films-cd377-default-rtdb.firebaseio.com/'
});

export default apiFirebase;