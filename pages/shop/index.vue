<template>
	<div class="l-page-bd">
		<div class="l-page-banner" style="background-image:url('https://static.ushiyihao.com/web/banner-002.jpg')">
			<img src="https://static.ushiyihao.com/web/banner-002.jpg" alt="">
		</div>
  	<div class="_inner">
  		<div class="l-product-list">
  			<router-link class="_item" v-for="(item,index) in productList.data" :key="item.id" :to="'/shop/' + item.id">
  				<div class="_img viewport-flip" @mouseenter="flipShow($event.currentTarget, item)" @mouseleave="timeout(item.timeid)">
  					<img style="visibility: hidden;" :src="item.img" alt="">
  					<img class="flip out" :src="item.qr" alt="">
  					<img class="flip in" :src="item.img" alt="">
  				</div>
	      	<div class="_txt">
	      		<h4>{{item.name}}</h4>
	      		<p>{{item.desc}}</p>
	      	</div>
  			</router-link>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
	name: 'shop',
  head: {
    title: 'U视商城'
  },
	fetch ({ store }) {
    return store.dispatch('loadProducts')
  },
  computed: {
    productList () {
      return this.$store.state.product.list
    }
  },
	methods: {
		flipShow (target, item) {
			clearTimeout(item.timeid)
			item.timeid = setTimeout(() => {
				let eleFront = target.querySelector('.flip.in')
				let eleBack = target.querySelector('.flip.out')

				if (eleFront && eleFront.classList) {
					eleFront.classList.add('out')
					eleFront.classList.remove('in')
			    setTimeout(function () {
			    	eleBack.classList.add('in')
			    	eleBack.classList.remove('out')
			    }, 225)
				}
			}, 100)
		},
		timeout (timeid) {
			clearTimeout(timeid)
		}
	}
}
</script>
<style scoped lang="scss">
.l-product-list{
	overflow: hidden; padding: 0 20px;
	._item {
		float: left; width: 33.33%; text-align: center; margin:0 0 2rem; text-decoration: none;
		border-bottom: 1px solid #eee; padding: 0.5rem 1rem; box-sizing: border-box; height: 420px;color: inherit;
		img{width: 100%;vertical-align: top;}
		._img{
			position: relative;
			img.flip{position: absolute; top:0; left: 0; width: 100%;}
		}
		._txt{
			padding: 0.75rem;
			h4{margin:0 0 5px 0;}
		}
	}
}
</style>