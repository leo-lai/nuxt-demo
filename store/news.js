/*
*
* 新闻数据状态
*
*/

export const state = () => {
  return {
    list1: {
      fetching: false,
      page: 1,
      rows: 10,
      data: []
    },
    list2: {
      fetching: false,
      page: 1,
      rows: 10,
      data: []
    }
  }
}

export const mutations = {
  // List
  CLEAR_LIST (state, action = { newsType: 1 }) {
    state['list' + action.newsType].data = []
    state['list' + action.newsType].page = 1
  },
  REQUEST_LIST (state, action = { newsType: 1 }) {
    state['list' + action.newsType].fetching = true
  },
  GET_LIST_FAILURE (state, action = { newsType: 1 }) {
    state['list' + action.newsType].fetching = false
  },
  GET_LIST_SUCCESS (state, action = { newsType: 1, data: [] }) {
    state['list' + action.newsType].fetching = false
    state['list' + action.newsType].data = action.websiteNews
    state['list' + action.newsType].page = action.page
  },
  ADD_LIST_SUCCESS (state, action = { newsType: 1, data: [] }) {
    state['list' + action.newsType].fetching = false
    state['list' + action.newsType].data.push.apply(state['list' + action.newsType].data, action.websiteNews)
    state['list' + action.newsType].page = action.page
  }
}
