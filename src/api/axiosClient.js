import axios from 'axios';
import queryString from 'query-string'

import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseUrl: apiConfig.baseUrl,
    headers:{
        'content-Type' : 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params,api_key: apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async(config)=>config);

axiosClient.interceptors.reponse.use((reponse)=>{
    if (reponse && reponse.data){
        return reponse.data;
    }

    return reponse; 
}, (error) =>{
    throw error
});


export default axiosClient 