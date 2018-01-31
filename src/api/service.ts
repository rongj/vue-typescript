import axios from './axios'
// import jsonp from './jsonp'
import jsonp from '../utils/jsonp'
import * as config from './config'

// export const Jsonp  = async function (url: string ,data?: any): Promise<Ajax.AjaxResponse | void> {
//     return await jsonp(url, {
//         params: data || {},
//         timeout: config.timeout,
//         jsonpCallback: 'callback'
//     })
// }

// export const getRecommendList: Promise<Ajax.AjaxResponse> = async (data?: any) => await axios.get('wap/recommend', {params: data}).then((res: Ajax.AxiosResponse) => res.data)

// export function getRecommendList (data?: any): Promise<Ajax.AjaxResponse | void> {
//     return axios.get('wap/recommend', {params: data})
//         .then((res: Ajax.AxiosResponse) => res.data)
//         .catch((e: string) => console.error(e))
// }

// export const getRecommendList = function (data?: any): Promise<Ajax.AjaxResponse | void> {
//     return axios.get('wap/recommend', {params: data})
//         .then((res: Ajax.AxiosResponse) => res.data)
//         .catch((e: string) => console.error(e))
// }

/* 帖子详情 */
export const getArticleDetail = async (data?: any): Promise<any> => 
    await axios.get('//staticize.mop.com/subject/getArticleById', {params: data})
    .then((res: Ajax.AxiosResponse) => res.data)
    .catch((e: string) => console.error(e))

/* 详情页推荐列表 */
export const getRecommendList = async function (data?: any): Promise<Ajax.AjaxResponse | void>  {
    return await axios.get('wap/recommend', {params: data})
        .then((res: Ajax.AxiosResponse) => res.data)
        .catch((e: string) => console.error(e))
}

/* 信息流列表 */
export const getDataList =  (data?: any): Promise<Ajax.HbaseResponse | any> => jsonp('//106.75.98.65/wapmdi/data.html', {
        params: data || {},
        timeout: config.timeout,
        jsonpCallback: 'jsonpcallback'
    })

// export function getRecommendList (data) {
//     return axios.get('wap/recommend', {params: data})
//         .then(res => res.data)
//         .catch(e => console.error(e))
// }

// export const getRecommendList = function (data) {
//     return axios.get('wap/recommend', {params: data})
//         .then(res => res.data)
//         .catch(e => console.error(e))
// }

// export const getRecommendList = async function (data?: any) {
//     return await axios.get('wap/recommend', {params: data})
//         .then(res => res.data)
//         .catch(e => console.error(e))
// }