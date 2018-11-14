<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of list" v-bind:key="item.id">
        <img class="swiper-img" v-bind:src="item.imgUrl" alt=""/>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data () {
        return {
            swiperOption:{
                pagination:'.swiper-pagination',//存储页码
                loop:true,//循环轮播
            },

            // swiperList:[{
            //     id:'0001',
            //     imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg',
            // },
            // {
            //     id:'0002',
            //     imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg',
            // },
            // {
            //     id:'0003',
            //     imgUrl:'http://img1.qunarzz.com/piao/fusion/1810/e2/2e3774e52b380102.jpg_750x200_14e6ebab.jpg',
            // },
            // ]
        };
    },
    computed:{
        showSwiper () {
            return this.list.length;
        }
    }
};
</script>

<style lang="stylus" scoped>
// 穿透 >>>
  .wrapper >>>.swiper-pagination-bullet-active
    background #fff!important
  .wrapper
    width 100%
    height 0
    overflow hidden
    background #eee 
    padding-bottom 31.25%
  
  .swiper-img
    width 100%
  
</style>
