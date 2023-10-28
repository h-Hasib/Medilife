import axios from 'src/services/axios';
import { Login } from 'src/types/patient';

const doctorApi = {
  login: async (data: Login) => axios.post('/doctor/auth/login-dev', data),
};

export default doctorApi;
