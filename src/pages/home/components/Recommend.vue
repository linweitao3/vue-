<template>
  <div>
   <div class="recommend-title">热销推荐</div>
   <ul>
      <router-link 
        tag="li" 
        class="item border-bottom" 
        v-for="item of list" 
        :key="item.id"
        :to="'/detail/' + item.id"
      >
          <img class="item-img" v-bind:src="item.imgUrl" alt=""/>
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-comment">{{item.comment}}条评论</p>
          <p class="item-desc">
            <span class="item-price">￥<em class="item-price-num">{{item.price}}</em></span>起
            <span class="item-address">{{item.address}}</span>
            </p>
          <!-- <div class="item-button">查看详情</div> -->
        </div>
     </router-link>
   </ul>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    },
    data () {
        return {
            // recommendList:[{
            //     id:'0001',
            //     imgUrl:'http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_200x200_65b5a07f.jpg',
            //     title:'世界之窗',
            //     desc:'来到深圳，你需要来这里签到',
            // },
            // ]
        };
    }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    font-size .32rem
    background #eee
    text-indent  .2rem
  .item
    font-size .32rem
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-comment
      color #616161
      margin-top .14rem
      font-size .24rem
    .item-price
      font-size .24rem
      text-align left 
      color: #ff8300;
      .item-price-num
        font-size .4rem
        font-style: normal;
    .item-address
      float  right 
    .item-desc
      font-size .24rem
      margin-top .22rem
      line-height .4rem
      color:#616161
      ellipsis()
    .item-button
      background #ff9300 
      padding .2rem
      border-radius .06rem 
      margin-top .15rem
      color #fff
      line-height .2rem
      width 1.4rem
      height .2rem
</style>




