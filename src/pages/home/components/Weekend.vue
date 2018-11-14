<template>
  <div>
   <div class="recommend-title">周末去哪儿</div>
   <ul>
     <li class="item border-bottom" v-for="item of list" v-bind:key="item.id">
        <div class="item-img-warpper">
          <img class="item-img" v-bind:src="item.imgUrl" alt=""/>
        </div>
       <div class="item-info">
         <p class="item-title">{{item.name}}</p>
         <p class="item-desc">{{item.desc}}</p>
       </div>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    },
    data () {
        return {
            // recommendList:[{
            //     id:'0001',
            //     imgUrl:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
            //     title:'世界之窗',
            //     desc:'来到深圳，你需要来这里签到',
            // },
            // {
            //     id:'0002',
            //     imgUrl:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
            //     title:'世界之窗',
            //     desc:'来到深圳，你需要来这里签到',
            // },
            // {
            //     id:'0003',
            //     imgUrl:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
            //     title:'世界之窗',
            //     desc:'来到深圳，你需要来这里签到',
            // },
            // {
            //     id:'0004',
            //     imgUrl:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
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
    line-height .8rem
    font-size .28rem
    background #eee
    text-indent  .2rem
  .item 
    font-size .28rem
  .item-img-warpper
    height 0
    overflow  hidden
    padding-bottom 37.09%
 
  .item-img
    width 100%
  .item-info
    padding: .14rem .2rem .2rem .2rem;
  .item-title
    line-height .54rem
    font-size .28rem
    ellipsis()
  .item-desc
    font-size .24rem
    line-height .4rem
    color:#616161
    ellipsis()

</style>




