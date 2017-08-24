import Vue from 'vue'
import { utils, storage } from '~/assets/js/utils'
import VueScrollTo from 'vue-scrollto'

const options = {
  container: 'body',
  easing: 'ease-in',
  offset: -60,
  cancelable: true,
  onDone: function() {
    // scrolling is done
  },
  onCancel: function() {
    // scrolling has been interrupted
  },
  x: true,
  y: false
}

Vue.mixin({
  created: function () {
    this.$utils = utils
    this.$storage = storage
    this.$scrollTo = (elem_or_selector) => {
    	let elem = utils.isString(elem_or_selector) 
    		? document.querySelector(elem_or_selector) :
    		utils.isDom(elem_or_selector) ? elem_or_selector : null
    	window.requestAnimationFrame && elem &&	VueScrollTo.scrollTo(elem, 300, options)
    }
  }
})
