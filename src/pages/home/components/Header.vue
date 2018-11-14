<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
          <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe603;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default{
    name:'HomeHeader',
    computed:{
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }
};</script>

<style lang="stylus" scoped>

// 在css中引用其他css文件需要在最前面加一个@符号 @代表src目录
  @import '~styles/varibles.styl';
  .header
    font-size:.28rem
    background:$bgColor
    color:#fff
    line-height :$headerHeight

    display :flex
    height : $headerHeight
    .header-left 
      width :.64rem
      float:left
    .back-icon
      text-align :center
      font-size :.36rem
    .header-input
      flex :1
      padding-left:.2rem
      background :#fff
      margin-top: .12rem
      color:#ccc
      line-height  :.64rem
      height :.64rem
      margin-left :.2rem
      border-radius :.1rem
    .header-right
      min-width:1.04rem;
      padding 0 .1rem
      text-align :center
      float:right
      color #fff
    .arrow-icon
      font-size:.24rem
      margin-left -.04rem
</style>
