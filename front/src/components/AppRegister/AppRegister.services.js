import api from '../../services/api';

const registerUser = (name,email,password) => {
    if(name ===''){
        //alert('passo aqui 1');
        return;
    }
    if(email ===''){
        //alert('passo aqui 2');
        return;
    }
    if(password ===''){
        //alert('passo aqui 3');
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
    }).catch((err) =>{alert(err)})
    return response;
}
export {registerUser};