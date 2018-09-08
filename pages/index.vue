<template>
  <div class="l-page-bd">
    <el-carousel class="l-index-banner" trigger="click" height="400px">
      <el-carousel-item>
        <a href="/join" class="_img" style="background-image:url('https://static.ushiyihao.com/web/20180908001.jpg')"></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href="/shop" class="_img" style="background-image:url('https://static.ushiyihao.com/web/banner-002.jpg')"></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href="/about" class="_img" style="background-image:url('https://static.ushiyihao.com/web/banner-003.jpg')"></a>
      </el-carousel-item>
    </el-carousel>
    <div class="_inner">
      <!-- 产品列表 -->
      <div class="l-column-tit">
        <div class="_inner">
          <h3>产品列表</h3>
          <p>Product</p>
        </div>
      </div>
      <div class="l-product-keyword">
        <span>舒眼喷雾</span>
        <span>怎样保护眼睛</span>
        <span>缓解眼睛干涩</span>
        <span>中药眼药水缓解视疲劳</span>
        <span>缓解眼睛酸胀</span>
        <span>系列护眼产品</span>
        <span>改善视力模糊</span>
        <span>保护视力健康知识宣传</span>
        <span>改善眼睛充血</span>
        <span>首款舒眼喷雾</span>
      </div>
      <el-carousel class="l-carousel-product" :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="(item, index) in productList.data" :key="index">
          <router-link :to="'/shop/' + item.id" class="_item">
            <div class="_img" @mouseenter="flipShow($event.currentTarget, item)" @mouseleave="timeout(item.timeid)">
              <img style="visibility: hidden;" :src="item.img" alt="">
              <img class="flip out" :src="item.qr" alt="">
              <img class="flip in" :src="item.img" alt="">
            </div>
            <div class="_txt">
              <h4>{{item.name}}</h4>
              <p>{{item.desc}}</p>
            </div>
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <!-- 产品列表 end-->

      <!-- U视资讯 -->
      <div class="l-column-tit">
        <div class="_inner">
          <h3>U视资讯</h3>
          <p>News</p>
        </div>
      </div>
      <el-row class="l-padding-lr" :gutter="40">
        <el-col :span="12">
          <div class="l-box-news">
            <div class="_hd">
              <a class="l-fr" @click="$router.push('/news?tab=1')">更多&gt;&gt;</a>
              <h3>企业动态</h3>
            </div>
            <div class="_bd">
              <ul>
                <li v-for="item in newsList1.data"><router-link :to="'/news/' + item.newsId">{{item.newsTitle}}</router-link></li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="l-box-news">
            <div class="_hd">
              <a class="l-fr" @click="$router.push('/news?tab=2')">更多&gt;&gt;</a>
              <h3>护眼知识</h3>
            </div>
            <div class="_bd">
              <ul>
                <li v-for="item in newsList2.data"><router-link :to="'/news/' + item.newsId">{{item.newsTitle}}</router-link></li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- U视资讯 end-->
      <br>
      <!-- 友情链接 -->
      <div class="l-column-tit">
        <div class="_inner">
          <h3>友情链接</h3>
          <p>Links</p>
        </div>
      </div>
      <div class="l-text-center">
        <a target="_blank" href="http://www.o2opc-cn.com" style="color:inherit; text-decoration:none;">
          <img src="https://static.ushiyihao.com/web/sdh-logo.png" alt="">
          <p>中国O2O私董会</p>
        </a>
      </div>
      <!-- 友情链接 end-->
      <br><br>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  head: {
    title: '首页'
  },
  fetch ({ store }) {
    return Promise.all([
      store.dispatch('loadProducts'),
      store.dispatch('loadNews'),
      store.dispatch('loadNews', { newsType: 2, page: 1 })
    ])
  },
  computed: {
    newsList1 () {
      return this.$store.state.news.list1
    },
    newsList2 () {
      return this.$store.state.news.list2
    },
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
<style lang="scss">
.l-index-banner{
  ._img{display: block; height: 100%; background-repeat: no-repeat; background-position: 50% 50%;}
}

.l-carousel-product{
  text-align: center; margin: 1rem auto;
  .el-carousel__item{visibility: visible;}
  .el-carousel__indicators{visibility: hidden;}
  ._item{
    width: 250px; display: inline-block; text-align: left; border:1px solid #64c4a8; color: inherit; text-decoration: none;
    img{width: 250px; height: 250px;vertical-align: top;}
    ._img{
      position: relative;
      img.flip{position: absolute; top:0; left: 0; width: 100%;}
    }
    ._txt{
      background: #64c4a8; color: #fff; padding: 0.75rem;
      h4{margin:0 0 5px 0;}
    }
  }
  .is-active ._item{
    // box-shadow: -7px 7px 5px 0px #ddd;
  }
}
.l-product-keyword{
  overflow: hidden;
  span{float: left;width: 20%; text-align: center; margin: 0.75rem 0;}
}
.l-box-news{
  min-height: 200px;
  ._hd{
    background: #00a0e9; color: #fff; padding: 0.75rem 1rem;
    h3{margin: 0;}
    a{color: #fff; cursor: pointer;margin-top: 1px;}
  }

  ._bd{
    border: 1px solid #ccc; border-top: none; overflow: hidden; height: 339px;
    ul{padding: 0 1rem 0 2rem;}
    li{margin: 0.5rem 0;}
    a{color: #333; text-decoration: none;cursor: pointer;}
    a:hover{color: #00a0e9; text-decoration: underline;}
  }
}
</style>