import axios from 'axios'

// const DEFAULT_TIMEOUT = 5000;

// axios.defaults.timeout = DEFAULT_TIMEOUT;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '//hi3.mop.com/ajax/';

const IS_DEV: boolean = process.env.NODE_ENV !== 'production'
const api_url: string = IS_DEV ? '//staticize.mop.com/dzh/subject/v1.0/' : ''

export default axios.create({
    timeout: 5000,
    baseURL: api_url,
})
