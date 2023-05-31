import api from '../../services/api';

const loginUser = (email,password) => {
    const body = {
        email: email,
        password: password
    }
    const response = api.post('/session',body).then((res) =>{
        const {token} = res.data
        
        localStorage.setItem('token',token)
        //mandar para tela de todos
        return res;
    }).catch((err) =>{alert(err)})
    return response;
}
export {loginUser};