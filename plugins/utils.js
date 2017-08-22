import Vue from 'vue'
import { utils, storage } from '~/assets/js/utils'

Vue.mixin({
  created: function () {
    this.$utils = utils
    this.$storage = storage
  }
})
