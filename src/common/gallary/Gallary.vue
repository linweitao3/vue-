<template>
  <div  class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt=""/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default () {
                return [];
                // 'http://img1.qunarzz.com/sight/p0/1603/96/96f47768e63ffdbe90.water.jpg_r_800x800_2042c569.jpg','http://img1.qunarzz.com/sight/p0/201403/07/f22d018bd8d32c48735fb97cff50dff2.jpg_r_800x800_ef69c01e.jpg'
            }
        }
    },
    data () {
        return {
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType : 'fraction',
                observer:true,
                observeParents:true,
            }
        };
    },
    methods:{
        handleGallaryClick () {
            this.$emit('close');
        }
    }
};
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    z-index 99
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
