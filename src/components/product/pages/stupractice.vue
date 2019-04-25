<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>学生实践</p>
	 				<p class="right_eng">STUDENT PRACTICE</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '>' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a href="/">景区拓展</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">学生实践</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<ul class="pralist">
	 				<li v-for="item of pralist" :key="item.id">
	 					<img :src="item.imageUrl" class="pralistimg"/>
	 					<p>{{item.msg}}</p>
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
	      	pralist:[
		      	{
		      		id:"01",
		      		imageUrl:require('@/assets/img/student1.jpg'),
		      		msg:"学生实践"
		      	},
		      	{
		      		id:"02",
		      		imageUrl:require('@/assets/img/student2.jpg'),
		      		msg:"学生实践"
		      	},
		      	{
		      		id:"03",
		      		imageUrl:require('@/assets/img/student3.jpg'),
		      		msg:"学生实践"
		      	},
		      	{
		      		id:"04",
		      		imageUrl:require('@/assets/img/student4.jpg'),
		      		msg:"学生实践	"
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
	.pralist{
		width: 100%;
		display: flex;
		flex-direction: row;
        flex-wrap: wrap;
	}
	.pralist li{
		width: 29%;
		padding: 10px 0;
		text-align: center;
		margin: 0 2%;
	}
	.pralistimg{
		width: 100%;
		margin-bottom: 10px;
	}
</style>