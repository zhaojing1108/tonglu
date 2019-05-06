<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>桐庐剪纸</p>
	 				<p class="right_eng">PAPERCUTTING OF TONGLU</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>潇洒桐庐</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">桐庐剪纸</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<p>
	 				 桐庐的民间剪纸古已有之，广为流传，经多年开发，出作品、出人才，形成了“凝炼概括，厚中见秀，玲珑剔透，含蓄华丽”的江南剪纸特色。<br />
       				目前，桐庐剪纸人才辈出，老、中、青、少都有剪纸高手。已故百岁老人胡家芝的多件剪纸作品出国展览，并被美术馆、博物馆收藏。谢玉霞的剪纸系列作品获国家金奖。桐庐被命名为“中国民间艺术（剪纸）之乡”。2010年，由朱维桢老师等人历时3个月创作完成的“桐君悦虎”在红灯笼乡村家园揭幕，它高7米，宽10米，创造了“世界最大单体剪纸虎”纪录，让桐庐剪纸再次名声大噪。<br />
	 			</p>
	 			<img src="./../../../assets/img/tl_jianzhi_01.jpg" class="right_img"/>
	 			<img src="./../../../assets/img/tl_jianzhi_02.jpg" class="right_img"/>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {}
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
</style>