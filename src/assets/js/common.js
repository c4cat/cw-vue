import axios from 'axios'
import _url from './url.js'

export default class common {
	static _request (url, params) {
		let p = new URLSearchParams()
				p.append('data', JSON.stringify(params))

		return axios.request({
			method: 'post',
			url: url + '&token=' + _url.token,
			data: p
		})
	}

	static async req (url, params) {
		try {
			const res = await this._request(url, params)
			if (res.data.errcode === 0) {
				return res.data
			} else {
				alert(res.data.errmsg)
				return false
			}
		} catch (e) {
			alert(e)
			return false
		}
	}

	static localSet (key, value) {
		try {
			localStorage.setItem(key, value)
		} catch (e) {
			console.log(e)
			localStorage.clear()
		}
	}

	static localGet (key) {
		try {
			localStorage.getItem(key)
		} catch (e) {
			console.log(e)
			return ''
		}
	}

	static localRemove (key) {
		try {
			localStorage.removeItem(key)
		} catch (e) {
			console.log(e)
		}
	}
}
