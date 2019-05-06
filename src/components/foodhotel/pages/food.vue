<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>桐庐美食</p>
	 				<p class="right_eng">TONGLU CUISINE</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>酒店美食</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">桐庐美食</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<ul class="foodlist">
	 				<li v-for="item of foodlist" :key="item.id">
	 					<img :src="item.imageUrl" class="foodlistimg"/>
	 					<p>{{item.foodtext}}</p>
	 				</li>
	 			</ul>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {
	      	foodlist:[
		      	{
		      		id:"01",
		      		imageUrl:require('@/assets/img/foodimg01.jpg'),
		      		foodtext:"十大特色菜:三野茅草鸡"
		      	},
		      	{
		      		id:"02",
		      		imageUrl:require('@/assets/img/foodimg02.jpg'),
		      		foodtext:"十大特色菜:香酱过桥排"
		      	},
		      	{
		      		id:"03",
		      		imageUrl:require('@/assets/img/foodimg03.jpg'),
		      		foodtext:"十大特色菜:鸿运脆皮鸡"
		      	},
		      	{
		      		id:"04",
		      		imageUrl:require('@/assets/img/foodimg04.jpg'),
		      		foodtext:"十大特色菜:农家沸豆腐	"
		      	},
		      	{
		      		id:"05",
		      		imageUrl:require('@/assets/img/foodimg05.jpg'),
		      		foodtext:"十大特色菜:七里雪花松"
		      	},
		      	{
		      		id:"06",
		      		imageUrl:require('@/assets/img/foodimg06.jpg'),
		      		foodtext:"十大特色菜:渔夫丰庆"
		      	},
		      	{
		      		id:"07",
		      		imageUrl:require('@/assets/img/foodimg07.jpg'),
		      		foodtext:"十大特色菜:农家布袋鸡"
		      	},
		      	{
		      		id:"08",
		      		imageUrl:require('@/assets/img/foodimg08.jpg'),
		      		foodtext:"十大特色菜:土豆饼"
		      	},
		      	{
		      		id:"09",
		      		imageUrl:require('@/assets/img/foodimg09.jpg'),
		      		foodtext:"十大特色菜:金牌兔肉"
		      	},
		      	{
		      		id:"10",
		      		imageUrl:require('@/assets/img/foodimg10.jpg'),
		      		foodtext:"十大特色菜:石磨豆腐煲	"
		      	},
		      	{
		      		id:"11",
		      		imageUrl:require('@/assets/img/foodimg11.jpg'),
		      		foodtext:"药膳: 砂锅炖土鸡"
		      	},
		      	{
		      		id:"12",
		      		imageUrl:require('@/assets/img/foodimg12.jpg'),
		      		foodtext:"农家菜:农家土豆饼"
		      	}
	      	]
	      }
	    }
	  }
</script>

<style scoped>
	.lefttitle{
		width: 90%;
		margin: 10px auto 20px;
		border-bottom: 1px solid #ebebeb;
		height: 45px;
		color: #5e5e5e;
		padding: 5px 0 0 5%;
		font-size: 16px;
	}
	.lefttitle p{
		color: #35abd9;
		font-size: 12px;
		margin-top: 5px;
	}
	.el-menu{
		border: none;
	}
	.el-menu-item{
		height: 40px;
		line-height: 40px;
		padding-left: 40px !important;
		color: #777777;
	}
	.el-menu-item.is-active {
	    color: #fff;
	    background: #35abd9;
	}
	.leftimg{
		width: 100%;
		margin-top: 10px;
		margin-bottom: 35px;
	}
	.righttitle{
		width: 93%;
		height: 20px;
		border-bottom: 1px solid #ebebeb;
		margin: 0 auto;
		display: flex;
		padding: 15px 20px;
		position: relative;
	}
	.righttitle_l{
		width: 50%;
	}
	.righttitle_r{
		width: 50%;
		font-size: 12px;
	}
	.right_eng{
		color: #afafaf;
		font-size: 12px;
		margin-top: 3px;
	}
	.righttitle_r{
		font-size: 12px !important;
		color: #777777;
	}
	.el-breadcrumb {
	    font-size: 12px;
	    line-height: 1;
	    position: absolute;
        right: 10px;
        bottom: 10px;
	}
	.el-breadcrumb__inner, .el-breadcrumb__inner a{
	    font-weight: 300 !important;
	    color: #777777 !important;
	}
	.el-breadcrumb__inner, .el-breadcrumb__inner a {
   		font-weight: 300 !important;
	    color: #777777 !important;
	}
	.navcur{
		color: red !important;
	}
	.rightmain{
		width: 94%;
		height: auto;
		padding: 3%;
		color: #777777;
		font-size: 14px;
		line-height: 24px;
	}
	.right_img{
		width: 350px;
		display: block;
		margin: 20px auto;
	}
	.foodlist{
		width: 100%;
		display: flex;
		flex-direction: row;
        flex-wrap: wrap;
	}
	.foodlist li{
		width: 29%;
		padding: 10px 0;
		text-align: center;
		margin: 0 2%;
	}
	.foodlistimg{
		width: 100%;
		margin-bottom: 10px;
	}
</style>