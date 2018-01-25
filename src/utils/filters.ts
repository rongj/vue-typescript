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
