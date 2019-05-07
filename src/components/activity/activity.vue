<template>
	<el-container class="bgcolor" >
	  <el-header class="banner"></el-header>
	  	<div class="container childpage" style="margin-bottom:30px">
		 	<el-card shadow="always" class="container">
				<div class="righttitle_r" style="padding-bottom:10px;border-bottom:1px solid #e8e8e8">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item><router-link to="/"><span style="color: #777;font-weight: 300;">首页</span></router-link></el-breadcrumb-item>
						<el-breadcrumb-item><router-link to="/pages/news"><span>活动资讯</span></router-link></el-breadcrumb-item>
						<el-breadcrumb-item><span style="color: #35abd9;">{{breadcrumbItems}}</span></el-breadcrumb-item>						
					</el-breadcrumb>
				</div>
				<transition>
					<el-menu class="activity_nav" @select="handleSelect"  mode="horizontal"  :default-active="navIndex" 
					v-if="$route.name !== 'acitivityDetails' && $route.name !== 'newsDetails' && $route.name !== 'travelDetails' ">
						<el-menu-item index="news"  class="activitytabli">
							景区新闻
						</el-menu-item>
						<el-menu-item index="hotactivity" class="activitytabli">
							热门活动
						</el-menu-item>
						<el-menu-item index="travel" class="activitytabli">
						旅游新闻
						</el-menu-item>
					</el-menu>
				</transition>
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
				navIndex:'hotactivity',
			}
		},
		watch:{
		  '$route':'getPath'
		},
		methods:{
	      	handleSelect(key, keyPath){	      
				//   console.log(key, keyPath)
	        	switch(key){
	          		case 'news':
	            	this.$router.push('/pages/news');
					this.breadcrumbItems  = '景区新闻'
		            break;
		            case 'hotactivity':
	            	this.$router.push('/pages/hotactivity');
					this.breadcrumbItems = '热门活动'
					break;	
					case 'travel':
	            	this.$router.push('/pages/travel');
					this.breadcrumbItems = '旅游新闻'
		            break;	          	
				}
			  },
			 //监听路由
	      	getPath(){
				var _this=this
				var href=window.location.href
				href=href.substring(href.lastIndexOf("/")+1,href.length);
				_this.navIndex=href
				//console.log(_this.navIndex)
			}	
		},
		//监听路由
		mounted(){
			this.getPath()
		}
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

	.el-menu-item  button:hover{
		background-color: #95c9e0;
	}
	.el-menu.el-menu--horizontal.activity_nav{
		display: block;
		width: 400px;
		margin: 70px auto 20px;
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
	.activitytabli{
		width: 100px;
		height: 40px !important;
		line-height: 40px !important;
		font-size: 14px;
		border-radius: 0;
		text-align:center;
		margin-right:20px !important;
		color: #595959;
	}
	.activity_nav .is-active{
		background: #499bbf !important;
		color: #fff !important;
	}
</style>