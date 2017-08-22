/*
*
* 新闻数据状态
*
*/

export const state = () => {
  return {
    list: {
      fetching: false,
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
  CLEAR_LIST (state) {
    state.list.data = []
    state.list.page = 1
  },
  REQUEST_LIST (state) {
    state.list.fetching = true
  },
  GET_LIST_FAILURE (state) {
    state.list.fetching = false
  },
  GET_LIST_SUCCESS (state, action) {
    state.list.fetching = false
    state.list.data = action.list
  },

  // info
  REQUEST_INFO (state) {
    state.info.fetching = true
  },
  GET_INFO_FAILURE (state) {
    state.info.fetching = false
  },
  GET_INFO_SUCCESS (state, action) {
    state.info.fetching = false
    state.info.data = action.data
  }
}
