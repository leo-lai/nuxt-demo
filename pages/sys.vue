<template>
  <div class="l-page-bd">
    <div class="_inner" style="padding:0;">
      <div id="eye-part" class="l-sys-item" style="border-top:none;">
        <img style="margin-top: -30px;" class="l-fr" src="https://static.ushiyihao.com/web/eye.png" alt="瞳诊系统">
        <br>
        <p>Modular No. <i>01</i></p>
        <p class="l-fs-xl">瞳诊系统</p>
        <p>通过眼睛照片的上传及眼睛区域的点击</p>
        <p>系统通过大数据的分析分析得出测试人的身体状况</p>
        <p>推荐对应的科学调理方案</p>
        <p><img width="150" height="150" src="https://static.ushiyihao.com/web/usee-online.jpg" alt=""></p>
        <p>扫码进入喷喷商城，立即体验</p>
      </div>
      <div id="train-part" class="l-sys-item l-text-right">
        <img style="margin-top: -30px;" class="l-fl" src="https://static.ushiyihao.com/web/bodycheck.png" alt="体质检测">
        <br>
        <br>
        <br>
        <br>
        <p>Modular No. <i>02</i></p>
        <p class="l-fs-xl">体质检测</p>
        <p>通过一系列的体质问答</p>
        <p>得出当前身体体质及推荐调整方案</p>
        <p><img width="150" height="150" src="https://static.ushiyihao.com/web/usee-online.jpg" alt=""></p>
        <p>扫码进入喷喷商城，立即体验</p>
      </div>
      <div id="check-part" class="l-sys-item" style="background:rgba(39,44,47,1); color:#fff; ">
        <img style="margin-top: -30px;" class="l-fr" src="https://static.ushiyihao.com/web/eyetrian.png" alt="视力训练">
        <br>
        <br>
        <p>Modular No. <i>03</i></p>
        <p class="l-fs-xl">视力训练</p>
        <p>通过一系列的回答问题</p>
        <p>得出当前视疲劳分数及对应的分数及疲劳程度</p>
        <p>推荐对应的视疲劳训练</p>
        <p><img width="150" height="150" src="https://static.ushiyihao.com/web/usee-online.jpg" alt=""></p>
        <p>扫码进入喷喷商城，立即体验</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sys'
}
</script>
<style scoped lang="scss">
.l-page-bd {
  position: relative;
  z-index: 1;
}

.l-sys-item {
  border-top: 1px solid #efefef;
  overflow: hidden;
  padding: 30px 50px;
  background: #fff;
  p {
    margin: 10px 0;
    white-space: nowrap;
  }
}
</style>