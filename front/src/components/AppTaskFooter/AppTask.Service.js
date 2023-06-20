import api from '../../services/api';

const CreateTask = (name) => {
    const body = {
        name: name,
        forbiden: false,
        completed: false,
        postponed: false,
        forgot: false,
        abandoned: false,
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
        id : null,
        //userID from localstorage
        referenceId : null,
    }
    try {
        const response = api.post('/createUnitTask' , body);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export { CreateTask };