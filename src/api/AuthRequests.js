import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://precious-glasses-lamb.cyclic.app/'
  });

export const login=(formData)=>instance.post('/signin',formData)
export const register=(formData)=>instance.post('signup',formData)
export const getUser = ()=>instance.get('/usersData')