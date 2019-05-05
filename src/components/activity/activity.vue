<template>
	<el-container class="bgcolor" >
	  <el-header class="banner"></el-header>
	  	<div class="container childpage" style="margin-bottom:30px">
		 	<el-card shadow="always" class="container">
				<div class="righttitle_r" style="padding-bottom:10px;border-bottom:1px solid #e8e8e8">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
						<el-breadcrumb-item><span>活动咨询</span></el-breadcrumb-item>
						<el-breadcrumb-item><span style="color: #35abd9;">{{breadcrumbItems}}</span></el-breadcrumb-item>						
					</el-breadcrumb>
				</div>
				<el-menu class="activity_nav" @select="handleSelect"  mode="horizontal"  :default-active="navIndex" 
				v-if="$route.name !== 'acitivityDetails' && $route.name !== 'newsDetails'">
					<el-menu-item index="news" >
						<el-button type="primary" slot="title" >景区新闻</el-button>
					</el-menu-item>
					<el-menu-item index="acitivity">
					    <el-button  slot="title" style="backgrounf:#35abd9;color:#fff;">热门活动</el-button>
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
				breadcrumbItems: '景区新闻',
				navIndex:'news',
			}
		},
		methods:{
	      	handleSelect(key, keyPath){	      
				//   console.log(key, keyPath)
	        	switch(key){
	          		case 'news':
	            	this.$router.push('/pages/news');
					this.breadcrumbItems  = '景区新闻'
		            break;
		            case 'acitivity':
	            	this.$router.push('/pages/hotactivity');
					this.breadcrumbItems = '热门活动'
		            break;		          	
				}
			  },
			 //监听路由
	      	getPath(){
				var _this=this
				var href=window.location.href
				href=href.substring(href.lastIndexOf("/")+1,href.length);
				_this.navIndex=href
				//console.log(href);
			},
		},
		mounted(){
			var _this=this
			var href=window.location.href
			href=href.substring(href.lastIndexOf("/")+1,href.length);
			_this.navIndex=href
			console.log(href);
		},
	}
</script>

<style scoped>
	.news{
		margin-top: 50px;
	}
	.banner{
		width:100%;
		height: 350px !important;
		background: url(../../assets/img/spotbanner.jpg);
		background-size: 100% 100%;
	}
	.el-card{
		margin-top: 30px;
		position: relative;
	}
	/* .el-breadcrumb{
		width: 90%;
		border-bottom: 1px #ccc solid;
		margin: 0 auto;
	}
	.el-breadcrumb__item{
		display: block;
		padding: 10px;
		float: right;
	} */
	.righttitle_r{
		width: 95%;
		font-size: 12px;
	}
	.righttitle_r{
		font-size: 12px !important;
		color: #777777;
		position: absolute;
	}
	.el-breadcrumb {
	    font-size: 12px;
	    line-height: 1;
		float:right;
	}
	.el-breadcrumb__inner, .el-breadcrumb__inner a{
	    font-weight: 300 !important;
	    color: #777777 !important;
	}
	.el-breadcrumb__inner, .el-breadcrumb__inner a {
   		font-weight: 300 !important;
	    color: #777777 !important;
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
	img{
		max-width: 800px !important;
	}
</style>