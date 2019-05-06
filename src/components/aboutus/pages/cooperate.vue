<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>广告合作</p>
	 				<p class="right_eng">ADVERTISING COOPERATION</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>关于我们</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">广告合作</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
		 		<p>
				全国免费咨询热线：800-8571789（8+杭州区号571+789）<br />
				地址：浙江省桐庐县富春路158号 <br />
				邮编：311500<br />
				办公室：0571-69870018 <br />
				办公室传真：0571-69870017<br />
				营销部：0571-64600687 <br />
				营销部传真：0571-64600687<br />
				广告部：0571-69870028<br />
				网址：http://www.wqtlw.cn Email：1437310911@qq.com</p>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {
	      	
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
	.spottitle{
		width: 95px;
		height: 35px;
		background: url(../../../assets/img/spot_titlebg.png);
		background-size: 100% 100%;
		color: #fff;
		line-height: 35px;
		padding-left: 10px;
		margin: 10px 0;
	}
	.houseimg{
		width: 240px;
		height: 160px;
		margin: 10px 0 0 25px;
		float: left;
	}
	.coloryellow{
		color: #f88335;
	}
</style>