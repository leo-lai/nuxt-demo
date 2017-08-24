<template>
	<div class="l-page-bd">
    <div class="l-page-banner" style="background-image:url('https://static.ushiyihao.com/web/banner-002.jpg')">
      <img src="https://static.ushiyihao.com/web/banner-002.jpg" alt="">
    </div>
  	<div class="_inner">
  		<div class="l-product-info l-text-center l-padding l-bg-white">
  			<img :src="info.data.info" alt="">
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'shop-info',
	fetch ({ store, params }) {
    return store.dispatch('loadProductInfo', params)
  },
  computed: {
  	info () {
  		return this.$store.state.product.info
  	}
  }
}
</script>
<style scoped lang="scss">

</style>