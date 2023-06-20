import api from '../../services/api';

const loginUser = (email, password) => {
  const body = {
    email: email,
    password: password
  };

  return api.post('/session', body)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('accountId', res.data.id)
      localStorage.setItem('token', token);
      return '/pomodoro'; // Rota de redirecionamento como uma string
    })
    .catch((err) => {
      //alert(err);
      return null; // Retornar null em caso de erro
    });
};

export { loginUser };
