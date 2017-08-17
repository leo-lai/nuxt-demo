import Vue from 'vue'
import { utils, storage } from '~/assets/js/utils'
import Api from '~/assets/js/api'

Vue.mixin({
  created () {
    // 自定义工具类
    this.$utils = utils
    // 本地缓存
    this.$storage = storage
    // 接口
    this.$api = Api
  }
})
