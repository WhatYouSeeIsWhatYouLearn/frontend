import axios from 'axios';

export const API_ROOT = "/api/v2"

export async function getTemplates(){
    const res = await axios.get(`${API_ROOT}/pages/3`)
    console.log(res);
    return res.data;
}