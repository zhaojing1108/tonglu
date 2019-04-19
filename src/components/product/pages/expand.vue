<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>拓展产品</p>
	 				<p class="right_eng">EXPANDING PRODUCTS</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '>' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a href="/">景区拓展</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">拓展产品</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<ul class="foodlist">
	 				<li v-for="item of expandlist" :key="item.id">
	 					<img :src="item.imageUrl" class="foodlistimg"/>
	 					<div class="expandname">{{item.expandtext}}</div>
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
	      	expandlist:[
		      	{
		      		id:"01",
		      		imageUrl:require('@/assets/img/expand_img01.jpg'),
		      		expandtext:"极限生存"
		      	},
		      	{
		      		id:"02",
		      		imageUrl:require('@/assets/img/expand_img02.jpg'),
		      		expandtext:"溶洞探险"
		      	},
		      	{
		      		id:"03",
		      		imageUrl:require('@/assets/img/expand_img03.jpg'),
		      		expandtext:"野外生存"
		      	},
		      	{
		      		id:"04",
		      		imageUrl:require('@/assets/img/expand_img04.jpg'),
		      		expandtext:"水上拓展"
		      	},
		      	{
		      		id:"05",
		      		imageUrl:require('@/assets/img/expand_img05.jpg'),
		      		expandtext:"破浪逐风"
		      	},
		      	{
		      		id:"06",
		      		imageUrl:require('@/assets/img/expand_img06.jpg'),
		      		expandtext:"悬崖迫降"
		      	},
		      	{
		      		id:"07",
		      		imageUrl:require('@/assets/img/expand_img07.jpg'),
		      		expandtext:"丰富知识"
		      	},
		      	{
		      		id:"08",
		      		imageUrl:require('@/assets/img/expand_img08.jpg'),
		      		expandtext:"学生实践"
		      	},
		      	{
		      		id:"09",
		      		imageUrl:require('@/assets/img/expand_img09.jpg'),
		      		expandtext:"基地项目"
		      	},
		      	{
		      		id:"10",
		      		imageUrl:require('@/assets/img/expand_img10.jpg'),
		      		expandtext:"高空项目"
		      	},
		      	{
		      		id:"11",
		      		imageUrl:require('@/assets/img/expand_img11.jpg'),
		      		expandtext:"真人CS"
		      	},
		      	{
		      		id:"12",
		      		imageUrl:require('@/assets/img/expand_img12.jpg'),
		      		expandtext:"野外生存"
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
		font-size: 12px;
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
		text-align: center;
		margin: 0 2% 20px;
		height: 160px;
		position: relative;
	}
	.foodlistimg{
		width: 100%;
		margin-bottom: 10px;
		height: 100%;
	}
	.expandname{
		width: 100%;
		height: 30px;
		background: rgba(0,0,0,0.2);
		color: #fff;
		position: absolute;
		bottom: 0;
		line-height: 30px;
	}
</style>