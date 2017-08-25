<template>
	<div class="l-page-ft">
		<div class="_inner">
			<p class="l-margin-s">U视一号 | 护眼解决方案服务商</p>
			<p class="l-margin-s">400-180-6900</p>
			<p>
				<el-tooltip placement="top">
					<div slot="content">
						<img width="200" height="200" src="https://static.ushiyihao.com/web/usee-online.jpg" alt="">
					</div>
					<i class="l-icon l-fs-xl l-margin-r">&#xe66f;</i>
				</el-tooltip>
				<a target="_blank" href="http://weibo.com/u/6178959104">
					<i class="l-icon l-fs-xl">&#xe600;</i>
				</a>
			</p>
			<p class="l-margin-s">广东省广州市天河区沙太路陶庄五号空间3F009</p>
			<p class="l-margin-s">网站备案号：黔ICP备17001681号-3 | 贵州优视一号生物科技有限公司</p>
		</div>

		<div class="l-fixed-side">
			<el-tooltip placement="left">
				<div slot="content">
					<img width="200" height="200" src="https://static.ushiyihao.com/web/usee-online.jpg" alt="">
				</div>
				<a class="_item">
					<i class="l-icon">&#xe66f;</i>
					<span>微信<br>商城</span>
				</a>
			</el-tooltip>
			<a class="_item" target="_blank" href="http://weibo.com/u/6178959104">
				<i class="l-icon">&#xe600;</i>
				<span>新浪<br>微博</span>
			</a>
			<a class="_item" target="_blank" href="http://p.qiao.baidu.com/cps/chat?siteId=10857794&userId=23235048">
				<i class="l-icon">&#xe601;</i>
				<span>在线<br>客服</span>
			</a>
			<a class="_item" @click="$scrollTo('#page-top')">
				<i class="l-icon">&#xe705;</i>
				<span>返回<br>顶部</span>
			</a>
			<a class="_item" @click="$router.back()">
				<i class="l-icon">&#xe62f;</i>
				<span style="padding:1rem 0;">上一页</span>
			</a>
		</div>
		<div style="font-size:0;position:absolute;bottom:0;opacity:0;">
      <h1>怎样保护眼睛 保护眼睛的方法 如何保护眼睛 保护眼睛的颜色</h1>
      <h1>怎样缓解眼睛干涩 眼睛干涩怎么缓解 缓解眼睛干涩眼药水</h1>
      <h1>中药眼药水缓解视疲劳 怎样缓解视疲劳 怎么缓解视疲劳</h1>
      <h1>保护视力健康知识宣传 保护视力健康教案 保护视力呵护健康</h1>
    </div>
	</div>
</template>

<style lang="scss">
.l-page-ft{
	background: #333; color: #fff; 
	>._inner{width: 1000px; margin: auto; padding: 1rem; text-align: center;}
	a{color: #fff; text-decoration: none;}
}

.l-fixed-side{
	position: fixed; top: 50%; right: 0;  z-index: 1000; transform: translate3d(0,-25%,0);
	width: 60px;
	._item{
		background-color: #20a0ff;
		display: block; width: 100%; text-align: center; height: 60px; line-height: 60px; color: #fff; margin-top: 1px;
		cursor: pointer; position: relative; overflow: hidden;
		span{
			background-color: #20a0ff; padding: 11px; box-sizing:border-box; transition: all 0.3s;
			position: absolute; height: 100%; width: 100%; right:0; bottom: -60px; line-height: 1.4;
		}
	}
	.l-icon{font-size: 1.4rem;}
	._item:hover{
		span{bottom: 0;}
	}
}
</style>