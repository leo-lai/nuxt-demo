<template>
	<div class="l-page-bd">
		<div class="l-page-banner" style="background-image:url('https://static.ushiyihao.com/web/article_banner.jpg')">
			<img src="https://static.ushiyihao.com/web/article_banner.jpg" alt="">
		</div>
  	<div class="_inner">
  		<div class="l-bd-tab">
  			<div class="_tit">
  				<a class="_item" :class="{'_active': tabIndex == 1}" @click="tabClick(1)">企业动态</a>
  				<a class="_item" :class="{'_active': tabIndex == 2}" @click="tabClick(2)">护眼知识</a>
  			</div>
  			<div class="_cont">
  				<div class="_item" :class="{'_active': tabIndex == 1}">
  					<div class="l-news-list">
  						<div class="_item" v-for="item in newsList1.data">
  							<h3>{{item.newsTitle}}</h3>
  							<p><span class="l-text-gray l-fs-m">{{item.published}}</span></p>
  							<p>{{item.newsDescribe}}</p>
  							<p class="l-text-right"><router-link :to="'/news/' + item.newsId">阅读全文</router-link></p>
  						</div>
  					</div>
  					<div class="l-margin l-text-center" v-if="newsList1.total > 0">
  						<br><br>
						  <el-pagination @current-change="getList"
						    layout="prev, pager, next"
						    :total="newsList1.total">
						  </el-pagination>
						</div>
  				</div>
  				<div class="_item" :class="{'_active': tabIndex == 2}">
  					<div class="l-news-list">
  						<div class="_item" v-for="item in newsList2.data">
  							<h3>{{item.newsTitle}}</h3>
  							<p><span class="l-text-gray l-fs-m">{{item.published}}</span></p>
  							<p>{{item.newsDescribe}}</p>
  							<p class="l-text-right"><router-link :to="'/news/' + item.newsId">阅读全文</router-link></p>
  						</div>
  					</div>
  					<div class="l-margin l-text-center" v-if="newsList2.total > 0">
  						<br><br>
						  <el-pagination @current-change="getList"
						    layout="prev, pager, next"
						    :total="newsList2.total">
						  </el-pagination>
						</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
	name: 'news',
  head: {
    title: '公司动态'
  },
  fetch ({ store }) {
    return Promise.all([
      store.dispatch('loadNews'),
      store.dispatch('loadNews', { newsType: 2, page: 1 })
    ])
  },
	data () {
		return {
			tabIndex: 1
		}
	},
	computed: {
		newsList1 () {
      return this.$store.state.news.list1
    },
    newsList2 () {
      return this.$store.state.news.list2
    }
	},
	methods: {
		tabClick (index = 1) {
			this.tabIndex = index
			// this.getList()
		},
		getList (page = 1) {
			let loading = this.$loading()
			this.$store.dispatch('loadNews', { newsType: this.tabIndex, page }).finally(() => {
				loading.close()
			})
		}
	},
	mounted () {
		this.tabClick(this.$route.query.tab)
	}
}
</script>
<style scoped lang="scss">
.l-page-bd{
	background: #eff3f5; position: relative; z-index: 1;
	>._inner{background-color: transparent;}
}

.l-news-list{
	._item{
		margin: 10px 0 30px; border-bottom: 1px dashed #ddd;
		h3{margin: 0;}
		p{margin-top: 10px;}
		a{color: #20a0ff; text-decoration: underline; cursor: pointer;}
	}
}
</style>