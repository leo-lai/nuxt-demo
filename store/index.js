/*
*
* 根数据状态 存放全局数据和异步方法
*
*/
import service from '~/plugins/service'
import productData from '~/assets/js/product.data'

// global actions
export const actions = {

  // 获取新闻列表
  loadNews ({ commit }, params = { newsType: 1, page: 1 }) {
    commit('news/REQUEST_LIST', params)
    return service.post('/websiteNews/websiteNewsList', params).then(({ data }) => {
      const success = data.resultCode === 200 && data.data
      const isFirstPage = params.page && params.page <= 1
      const commitName = `news/${isFirstPage ? 'GET' : 'ADD'}_LIST_SUCCESS`
      if (success) {
        commit(commitName, Object.assign({}, data.data, params))
      } else {
        commit('news/GET_LIST_FAILURE', params)
      }
    })
    .catch(error => {
      commit('news/GET_LIST_FAILURE', Object.assign({}, error, params))
    })
  }

  // 获取产品列表
  
}
