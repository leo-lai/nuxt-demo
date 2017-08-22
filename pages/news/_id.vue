<template>
	<div class="l-page">
		<l-header></l-header>
		<div class="l-page-banner" style="background-image:url('https://static.ushiyihao.com/web/article_banner.jpg')">
			<img src="https://static.ushiyihao.com/web/article_banner.jpg" alt="">
			<div class="l-new-title">
				<h3>{{info.data.newsTitle}}</h3>
				<p>发布时间：{{info.data.published}}</p>
			</div>
		</div>
		<div class="l-page-bd">
    	<div class="_inner">
    		<div v-html="info.data.newsContent"></div>
    	</div>
    </div>
    <l-footer></l-footer>
	</div>
</template>
<script>
import lHeader from '~/components/header'
import lFooter from '~/components/footer'
export default {
	name: 'news-info',
	components: {
		lHeader, lFooter
	},
	fetch ({ store, params }) {
    return store.dispatch('loadNewsInfo', params)
  },
  computed: {
  	info () {
  		return this.$store.state.news.info
  	}
  }
}
</script>
<style scoped lang="scss">
.l-page-bd{
	background: #eff3f5; position: relative; z-index: 1;
	>._inner{padding:1rem; box-sizing: border-box;}
}

.l-news-list{
	._item{
		margin: 10px 0 30px; border-bottom: 1px dashed #ddd;
		h3{margin: 0;}
		p{margin-top: 10px;}
		a{color: #20a0ff; text-decoration: underline; cursor: pointer;}
	}
}
.l-page-banner{
	position: relative; overflow: hidden;
	.l-new-title{
		position: absolute; top: 50%;left:0; right: 0; text-align: center; color: #fff;
		h3{font-size: 1.4rem; margin: 20px 0;}
	}
}
</style>