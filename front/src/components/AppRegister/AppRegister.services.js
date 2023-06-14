import api from '../../services/api';

const registerUser = (name,email,password) => {
    const body = {
        name: name,
        email: email,
        password: password
    }
    const response = api.post('/users',body).then((res) =>{
        const {token} = res.data
        alert("Conectou")
        localStorage.setItem('token',token)
        //mandar para tela de todos
        return res;
    }).catch((err) =>{alert(err)})
    return response;
}
export {registerUser};