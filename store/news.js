/*
*
* 新闻数据状态
*
*/

export const state = () => {
  return {
    list1: {
      fetching: false,
      total: 1,
      page: 1,
      rows: 10,
      data: []
    },
    list2: {
      fetching: false,
      total: 1,
      page: 1,
      rows: 10,
      data: []
    },
    info: {
      fetching: false,
      data: {}
    }
  }
}

export const mutations = {
  // List
  CLEAR_LIST (state, action = { newsType: 1 }) {
    state['list' + action.newsType].data = []
    state['list' + action.newsType].page = 1
    state['list' + action.newsType].total = 1
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
    state['list' + action.newsType].total = action.total
  },
  ADD_LIST_SUCCESS (state, action = { newsType: 1, data: [] }) {
    state['list' + action.newsType].fetching = false
    // state['list' + action.newsType].data.push.apply(state['list' + action.newsType].data, action.websiteNews)
    state['list' + action.newsType].data = action.websiteNews
    state['list' + action.newsType].page = action.page
    state['list' + action.newsType].total = action.total
  },

  // info
  REQUEST_INFO (state) {
    state.info.fetching = true
  },
  GET_INFO_FAILURE (state) {
    state.info.fetching = false
  },
  GET_INFO_SUCCESS (state, action) {
    console.log(action)
    state.info.fetching = false
    state.info.data = action
  }
}
