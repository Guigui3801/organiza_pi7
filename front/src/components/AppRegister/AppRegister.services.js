import api from '../../services/api';
import { notification } from 'antd';
const registerUser = (name,email,password) => {
    if(name =''){
        alert('passo aqui');
        return;
    }
    if(email =''){
        alert('passo aqui');
        return;
    }
    if(password =''){
        alert('passo aqui');
        return;
    }
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
    }).catch((err) =>{
        notification.error({
            message: 'E-mail já existente',
            description: '',
        });
    })
    return response;
}
export {registerUser};