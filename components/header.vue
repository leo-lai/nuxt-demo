<template>
	<div class="l-page-hd l-sticky">
		<el-row class="_inner" :gutter="0">
		  <el-col :span="8">
		  	<a class="l-page-hd-logo" href="/">
			  	<img src="https://static.ushiyihao.com/logo32px.png" alt="优视一号">
			  	<p>护眼解决方案服务商</p>
		  	</a>
		  </el-col>
		  <el-col :span="16">
		  	<el-menu class="l-page-hd-menu" mode="horizontal" router :default-active="$route.path" @select="clickMenu">
				  <el-menu-item index="/">首页</el-menu-item>
				  <el-submenu index="/sys/">
				    <template slot="title">爱眼护眼</template>
				    <el-menu-item index="/sys/#eye" >瞳诊系统</el-menu-item>
				    <el-menu-item index="/sys/#train" >护眼训练</el-menu-item>
				    <el-menu-item index="/sys/#check" >体质检测</el-menu-item>
				  </el-submenu>
				  <el-menu-item index="/shop/">U视商城</el-menu-item>
				  <el-menu-item index="/join/">区域合作</el-menu-item>
				  <el-menu-item index="/about/">关于我们</el-menu-item>
				</el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	methods: {
		clickMenu (path) {
			if (this.$route.path.includes('/sys/') && this.$route.hash) {
				setTimeout(() => {
					this.$scrollTo(document.querySelector(this.$route.hash + '-part'))
				}, 200)
			}
		}
	},
	mounted () {
		this.clickMenu()
	}
}
</script>
<style lang="scss">
.l-page-hd-menu > .el-menu-item.is-active{border-bottom: 5px solid #20a0ff;}
.el-submenu .el-menu-item{min-width: 100%; }
.l-page-hd{
	background: rgba(255,255,255,1); padding: 0; border-bottom: 1px solid #efefef;
	>._inner{width: 1000px; margin: auto;}
}
.l-page-hd-logo{
	display: block; padding: 7px 0; color: inherit; text-decoration: none;
}
.l-page-hd-menu{
	background-color: transparent; float: right;
	.el-menu-item, .el-submenu .el-submenu__title{
		height: 74px; line-height: 74px; font-size: 0.8rem;
	}
	.el-submenu>.el-menu{
		top: 75px; border:none;
	}
}
.l-page-hd-menu .el-menu-item:hover, .l-page-hd-menu .el-submenu__title:hover{
	background-color: transparent;
}

</style>