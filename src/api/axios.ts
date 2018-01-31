import axios from 'axios'
import * as config from './config'

// const DEFAULT_TIMEOUT = 5000;

// axios.defaults.timeout = DEFAULT_TIMEOUT;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '//hi3.mop.com/ajax/';


export default axios.create({
    timeout: config.timeout,
    baseURL: config.apiurl,
})
