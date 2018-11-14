<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" v-bind:key="index" >
				<div class="icon" v-for="item of page" v-bind:key="item.id">
					<div class="icon-img">
						<img v-bind:src="item.imgUrl" class="icon-imgcontent" alt="" />
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			
		</swiper>


		
	</div>

</template>

<script>
export default{
    name:'HomeIcons',
    props:{
        list:Array
    },
    data () {
        return {
            swiperOption:{
                autoplay:false
            }
            // iconList:[{
            //     id:'0001',
            //     imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            //     desc:'景点门票',
            // },
            // ]
        };
    },
    computed:{
        pages () {
            const pages = [];
            this.list.forEach((item,index) => {
                const page = Math.floor(index / 8);
                if(!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
};
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height 0
		padding-bottom 50%
	.icons
		margin-top .1rem
		.icon
			position relative 
			overflow hidden
			width:25%
			float left
			padding-bottom 25%
			height 0
			.icon-img
				position absolute
				top 0
				left 0
				right 0
				bottom 0.44rem
				box-sizing border-box
				padding .1rem
				.icon-imgcontent
					height 100%
					display block
					margin 0 auto
			.icon-desc
				position absolute
				left 0
				right 0
				bottom 0	
				line-height .44rem
				height .44rem
				color $darkTextColor
				text-align center
				font-size: .28rem;	
				ellipsis()
			
			
</style>