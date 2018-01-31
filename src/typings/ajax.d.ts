declare namespace Ajax {

    // axios 返回数据
    export interface AxiosResponse {
        data: AjaxResponse
    }

    export interface HbaseResponse {
        // 数据
        data: any,
        
        // 镜像id
        mirrorid: string,

        // 请求时间
        requestTime: string,

        // 状态码
        status: string
    }
    
    // 请求接口数据
    export interface AjaxResponse {
        // 状态码
        code: number,

        // 数据
        data: any,

        // 消息
        msg: string
    }
}