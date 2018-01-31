/*
* 保留1位小数
* @param {string} val 需要截取的文字
*/
export function num (val: number | string): string {
    if(val > 999){
    	return (Number(val)/1000).toFixed(1) + 'k'
    }else {
    	return val + ''
    }
}

/**
 * 计算指定时间与当前时间的时间差 并转换成相应格式字符串
 * 如：xx分钟前，xx小时前，昨天 xx:xx，前天 xx:xx，xx-xx xx:xx
 * 超过一年的显示年份
 * @param { number | string } val 时间戳
 */
export function formatTimestamp (val: number | string): string {
    let t: number = 0;
    if (typeof(val) === 'string') {
        // if (isNaN(val)) {
            // t = Date.parse(val);
        // } else {
            t = parseInt(val);
        // }
    } else {
        t = val;
    }
    if (!t) return '';

    function add0 (n: number): string {
        return n < 10 ? '0'+n : ''+n
    }
    const date = new Date(t),
        year = date.getFullYear(),
        month = (date.getMonth() + 1),
        day = date.getDate(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    const c = new Date().getTime();
    const diff = Number(c - t), // 相差ms
        dy = 365 * 24 * 60 * 60 * 1000, // 1年
        dd = 24 * 60 * 60 * 1000, // 1天
        dh = 60 * 60 * 1000, // 1小时
        dm = 60 * 1000; // 1分钟
    if(diff < dy) {
        const days = (diff) / dd - 1; // 相差天数
        if (days > 2) {
            return add0(month) + '-' + add0(day) + ' ' + add0(h) + ':' + add0(m);
        } else if (days > 1) {
            return '前天 ' + add0(h) + ':' + add0(m);
        } else if (days > 0) {
            return '昨天 ' + add0(h) + ':' + add0(m);
        } else {
            if (diff >= dh) {
                return Math.floor(diff / dh) + '小时前';
            } else if (diff >= dm) {
                return Math.floor(diff / dm) + '分钟前';
            } else {
                // return Math.floor(diff / 1000) + '秒前';
                return '最新';
            }
        }
    } else {
        return year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(h) + ':' + add0(m);
    }
}

/*
* 视频时间格式化
* @param {string | number} val 视频时间长度
*/
export function formatDuration (val: any): string {
    if(isNaN(val)) return '';
    let n = Number(val) / 1000,
    	h = Math.floor(n / 60 / 60),
    	m = Math.floor(n % 3600 / 60),
    	s = Math.floor(n % 60);
    function add0(v: number): string | number {
    	return v > 9 ? v : '0'+v;
    }
    if (h > 0) {
    	return add0(h) + ':' + add0(m) + ':' + add0(s)
    } else {
    	return add0(m) + ':' + add0(s)
    }
}
