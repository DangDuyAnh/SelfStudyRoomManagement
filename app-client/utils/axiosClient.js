import axios from 'axios'

const axiosClient = (method, url, data, params) => {
    const baseURL = 'http://192.168.1.226:5000/' 
    return axios({
        baseURL: baseURL,
        method: method,
        url: url,
        data: data,
        params: params,
    })
}

export default axiosClient