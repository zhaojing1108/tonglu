<template>
	<el-container class="bgcolor">
	  <el-header class="banner"></el-header>
	  	<div class="container childpage">
		 	<el-card shadow="always" class="container">
		      	<el-breadcrumb separator="/">
					<el-breadcrumb-item>活动咨询</el-breadcrumb-item>
			    	<el-breadcrumb-item :to="{ path: '>' }"><span style="">首页</span></el-breadcrumb-item>			  
			    	<el-breadcrumb-item>当前位置：</el-breadcrumb-item>
				</el-breadcrumb>
				<el-menu class="activity_nav" @select="handleSelect"  mode="horizontal"  >
					<el-menu-item index="1">
						<el-button @click="handleSelect" type="primary" >景区新闻</el-button>
					</el-menu-item>
					<el-menu-item index="2" >
					    <el-button  type="primary" >热门活动</el-button>
					</el-menu-item>
				</el-menu>
				<div class="news">
					<router-view></router-view>
				</div>
			</el-card>
		</div>
	</el-container>
	
</template>
<script>
	export default {
		name: 'Activity',
		data(){
			return{
				 breadcrumbItems: ['景区新闻'],
			}
		},
		methods:{
	      	handleSelect(key, keyPath){	      
	        	switch(key){
	          		case '1':
	            	this.$router.push('/pages/news');
		            this.breadcrumbItems  = ['景区新闻']
		            break;
		            case '2':
	            	this.$router.push('/pages/hotactivity');
		            this.breadcrumbItems  = ['热门活动']
		            break;		          	
	        	}
	      	}
	    }
	}
</script>

<style scoped>
	.banner{
		width:100%;
		height: 350px !important;
		background: url(../../assets/img/spotbanner.jpg);
		background-size: 100% 100%;
	}
	.el-card{
		margin-top: 30px;
	}
	.el-breadcrumb{
		width: 90%;
		border-bottom: 1px #ccc solid;
		margin: 0 auto;
	}
	.el-breadcrumb__item{
		display: block;
		padding: 10px;
		float: right;
	}
	.el-menu-item  button{
		width: 130px;
		background-color: #499bbf;
		font-size: 16px;
		border: none;
		font-family: "Arial"
	}
	.el-menu-item  button:hover{
		background-color: #95c9e0;
	}
	.el-menu.el-menu--horizontal.activity_nav{
		display: block;
		width: 280px;
		margin: 30px auto;
		text-align: center;
	}
	.activity_nav >>>.el-menu-item.is-active{
		border-bottom: #fff;
		outline: none;
	}
	.activity_nav >>> .el-menu-item{
		padding: 0 5px;
	}
</style>
