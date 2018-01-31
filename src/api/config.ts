import * as Global from '../utils/global'

const IS_DEV: boolean = process.env.NODE_ENV !== 'production'


// 默认请求时间
export const timeout: number = 5000

// api地址
export const apiurl: string = IS_DEV ? '//staticize.mop.com/dzh/subject/v1.0/' : ''

// qid、uid、login
export let qid: string = Global.Util.getQueryString('qid') || Global.Cookie.get('qid') || 'null'
Global.Cookie.set('qid', qid, 3, 'mop.com')
export let uid: string | number
export let login: string | number
let mu = Global.Cookie.get('_mu');
if (mu) {
	uid = mu.replace(/\"/g, '').split('|')[0];
	login = mu.replace(/\"/g, '').split('|')[0];
} else {
	uid = Global.Cookie.get('user_id')
	login = 'null';
}

if (!uid) {
    uid = (+new Date()) + Math.random().toString(10).substring(2, 6)
    Global.Cookie.set('user_id', uid, 365 * 24, 'mop.com')
}