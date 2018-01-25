import axios from './axios'

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

export const getRecommendList = async function (data?: any): Promise<Ajax.AjaxResponse | void>  {
    return await axios.get('wap/recommend', {params: data})
        .then((res: Ajax.AxiosResponse) => res.data)
        .catch((e: string) => console.error(e))
}

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