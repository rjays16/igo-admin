import cookies from 'js-cookie';
import router from "../router";

export default function auth({ next }) {
    const token = cookies.get('igo-x-access-token');
    if(!token) {
        return router.push({ name: 'loginmain' }) 
    }
  
    return next();
}