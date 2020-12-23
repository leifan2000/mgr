import axios from 'axios';
import { getToken } from '@/helpers/token';

axios.defaults.headers['Authorization'] = `Bearer ${getToken()}`;


export const add = (form) => {
    return axios.post('http://localhost:3000/bos/add',form,);
};

export const list = (data) => {
    return axios.get('http://localhost:3000/bos/list',{
        params: data,
    });

};

export const remove = (id) => {
    return axios.delete(`http://localhost:3000/bos/${id}`,);

};

export const update = (data = {}) => {
    return axios.post(`http://localhost:3000/bos/update`,data)};

export const detail = (id) => {
    return axios.get(
        `http://localhost:3000/bos/detail/${id}`,
    )
}