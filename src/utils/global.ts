export const Util:any = {
    // 动态加载js文件
    getScript: (url: string, callback?: Function): void => {
        let head:Node = document.getElementsByTagName('head')[0], 
            js = document.createElement('script')
        js.setAttribute('type', 'text/javascript')
        js.setAttribute('src', url)
        head.appendChild(js)
        js.onload = function() {
            if (typeof callback === 'function') {
                callback()
            }
        }
    },

    // 过滤html标签
    filterHtmlTags: (str: string): string => {
        if (!str || typeof str !== 'string') {
            return ''
        }
        return str.replace(/<\/?[^>]*>/g, '')
    },

    // 获取url中参数的值
    getQueryString: (name: string): string | null => {
        let reg: RegExp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        let r = window.location.search.substr(1).match(reg)
        if (r != null) return decodeURI(r[2])
        return null
    },

    // Javascript获取页面来源
    getReferrer: (): string => {
        let referrer: string = ''
        try {
            referrer = window.top.document.referrer
        } catch (e) {
            if (window.parent) {
                try {
                    referrer = window.parent.document.referrer
                } catch (e2) {
                    referrer = ''
                }
            }
        }
        if (referrer === '') {
            referrer = document.referrer
        }
        return referrer
    },

    // 获取url（排除url中参数）
    getUrlNoParams: (): string => {
        let locaUrl = window.location.href,
            endIndex = 0
        if (locaUrl.indexOf('?') >= 0) {
            endIndex = locaUrl.indexOf('?')
            return locaUrl.substring(0, endIndex)
        }
        if (locaUrl.indexOf('#') >= 0) {
            endIndex = locaUrl.indexOf('#')
            return locaUrl.substring(0, endIndex)
        }
        return locaUrl
    },

    // browser的判断
    getBrowserType: (): string => {
        let agent: any = navigator.userAgent.toLowerCase()
        let browserType: string = ''
        if (agent.indexOf('msie') > 0) {
            browserType = 'IE'
        }
        if (agent.indexOf('firefox') > 0) {
            browserType = 'firefox'
        }
        if (agent.indexOf('chrome') > 0 && agent.indexOf('mb2345browser') < 0 && agent.indexOf('360 aphone browser') < 0) {
            browserType = 'chrome'
        }
        if (agent.indexOf('360 aphone browser') > 0 || agent.indexOf('qhbrowser') > 0) {
            browserType = '360'
        }
        if (agent.indexOf('ucbrowser') > 0) {
            browserType = 'UC'
        }
        if (agent.indexOf('micromessenger') > 0) {
            browserType = 'WeChat'
        }
        if ((agent.indexOf('mqqbrowser') > 0 || agent.indexOf('qq') > 0) && agent.indexOf('micromessenger') < 0) {
            browserType = 'QQ'
        }
        if (agent.indexOf('miuibrowser') > 0) {
            browserType = 'MIUI'
        }
        if (agent.indexOf('mb2345browser') > 0) {
            browserType = '2345'
        }
        if (agent.indexOf('sogoumobilebrowser') > 0) {
            browserType = 'sogou'
        }
        if (agent.indexOf('liebaofast') > 0) {
            browserType = 'liebao'
        }
        if (agent.indexOf('weibo') > 0) {
            browserType = 'weibo'
        }
        if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0 && agent.indexOf('ucbrowser') < 0 && agent.indexOf('micromessenger') < 0 && agent.indexOf('mqqbrowser') < 0 && agent.indexOf('miuibrowser') < 0 && agent.indexOf('mb2345browser') < 0 && agent.indexOf('sogoumobilebrowser') < 0 && agent.indexOf('liebaofast') < 0 && agent.indexOf('qhbrowser') < 0 && agent.indexOf('weibo') < 0) {
            browserType = 'safari'
        }
        return browserType
    },

    // OS的判断
    getOsType: (): string => {
        let agent: string = navigator.userAgent.toLowerCase()
        let osType: string = ''
        let index: number
        let version: string
        if (/android/i.test(navigator.userAgent)) {
            index = agent.indexOf('android')
            version = agent.substr(index + 8, 3)
            osType = 'Android ' + version
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            index = agent.indexOf('os')
            version = agent.substr(index + 3, 4)
            osType = 'iOS ' + version
        }
        if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            osType = 'Linux'
        }
        if (/windows|win32/i.test(navigator.userAgent)) {
            osType = 'windows32'
        }
        if (/windows|win64/i.test(navigator.userAgent)) {
            osType = 'windows64'
        }
        return osType.replace(/(^\s*)|(\s*$)/g, '')
    },

    // 获取字符串字节数
    getBytes: (str: string): number => {
        let byteLen:number = 0
        let len: number = str.length
        if (str) {
            for (let i = 0; i < len; i++) {
                if (str.charCodeAt(i) > 255) {
                    byteLen += 2
                } else {
                    byteLen++
                }
            }
            return byteLen
        } else {
            return 0
        }
    },
    
    // 打乱数组
    dislocateArr: (arr: any[]): any[] => arr.sort(() => 0.5 - Math.random()),
}


export const Cookie: any = {
    /**
     * 设置cookie
     * @param name 名称
     * @param value 值
     * @param expires 有效时间（单位：小时）（可选） 默认：24h
     */
    set: (name: string, value: any, expires?: number, domain?: string): void => {
        let expTimes = expires ? (Number(expires) * 60 * 60 * 1000) : (24 * 60 * 60 * 1000) // 毫秒
        let expDate = new Date()
        expDate.setTime(expDate.getTime() + expTimes)
        let expString = expires ? '; expires=' + expDate.toUTCString() : ''
        let pathString = '; path=/'
        let dm = '; domain=' + domain
        document.cookie = name + '=' + encodeURI(value) + expString + pathString + dm
    },

    /**
     * 读cookie
     * @param name
     */
    get: (name: string): string | null => {
        let cookieStr = '; ' + document.cookie + '; '
        let index = cookieStr.indexOf('; ' + name + '=')
        if (index !== -1) {
            let s = cookieStr.substring(index + name.length + 3, cookieStr.length)
            return decodeURI(s.substring(0, s.indexOf('; ')))
        } else {
            return null
        }
    },

    /**
     * 删除cookie
     * @param name
     */
    del: function (name: string, domain: string): void {
        let exp = new Date(new Date().getTime() - 1)
        let s = this.get(name)
        if (s !== null) {
            document.cookie = name + '=' + s + '; expires=' + exp.toUTCString() + '; path=/; domain=' + domain
        }
    }
}