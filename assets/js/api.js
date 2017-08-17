import axios from 'axios'
import { Message } from 'element-ui'
import { storage } from '~/assets/js/utils'

let baseUrl = 'http://api.usee1.com.cn/useeproject/interface/'
// 正式
if (['www.ushiyihao.com', 'ushiyihao.com'].indexOf(window.location.host) > -1) {
  baseUrl = 'https://api.ushiyihao.com/useeproject02/interface/'
}
const _http = {
  ajax (url = '', data = {}, method = 'GET', contentType = 'form') {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    url = baseUrl + url
    data.sessionId = storage.local.get('sessionId')
    return new Promise((resolve, reject) => {
      axios({
        url,
        method,
        data,
        headers,
        timeout: 60000,
        transformRequest: [function (data) {
          let ret = []
          for (let key in data) {
            ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          }
          return ret.join('&')
        }]
      }).then(function ({ data }) {
        if (data.resultCode === 4002) { // 登录失效
          storage.local.remove('sessionId')
          Message({
            type: 'error',
            message: data.message || '登录失效，请重新登录。',
            onClose (instance) {
              _api.logout()
            }
          })
          reject(data.message)
        } else if (data.resultCode !== 200) {
          Message({
            message: data.message,
            type: 'error'
          })
          reject(data.message)
        }
        resolve(data)
      }).catch((error) => {
        Message('服务器连接失败')
        reject(error)
      })
    })
  },
  get (url, data) {
    return _http.ajax(url, data)
  },
  post (url, data) {
    return _http.ajax(url, data, 'POST')
  }
}

const _api = {
  baseUrl,
  product: {
    getList () {

    }
  },
  news: {
    getList (newsType = '', page = 1, rows = 10) {
      return _http.post('/websiteNews/websiteNewsList', {
        newsType,
        page,
        rows
      }).then((response) => {
        !response.data && (response.data = [])
        response.data.rows = rows
        return response
      })
    },
    getInfo (newsId) {
      return _http.post('/websiteNews/websiteNewsInfo', {
        newsId
      })
    }
  }
}

export default _api
