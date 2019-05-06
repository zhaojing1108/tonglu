<template>
	<div class="nav">
		<el-row class="nav_wrap container">
			<el-col :span="5"><div class="grid-content bg-purple">
				<img class="nav_img" src="./../../assets/img/logo.jpg" alt="">
			</div></el-col>

			<el-col :span="19">
				<div class="nav_text" >
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width:100%">
						<el-submenu index="8" class="nav_li" style="float:right">
							<template slot="title">关于我们</template>
							<router-link to="/pages/companypro"><el-menu-item index="8-1">公司简介</el-menu-item></router-link>
							<router-link to="/pages/recruit"><el-menu-item index="8-2">人才招聘</el-menu-item></router-link>
							<router-link to="/pages/cooperate"><el-menu-item index="8-4">广告合作</el-menu-item></router-link>
						</el-submenu> 

						<el-submenu index="7" class="nav_li" style="float:right">
							<template slot="title">景区拓展</template>
							<router-link to="/pages/baseshow"><el-menu-item index="7-1">基地展示</el-menu-item></router-link>
							<router-link to="/pages/stupractice"><el-menu-item index="7-2">学生实践</el-menu-item></router-link>
							<router-link to="/pages/expand"><el-menu-item index="7-3">拓展产品</el-menu-item></router-link>
						</el-submenu> 
						<el-submenu index="6" class="nav_li" style="float:right">
							<template slot="title">旅游指南</template>
							<router-link to="/pages/trafficguide"><el-menu-item index="6-1">交通指南</el-menu-item></router-link>
							<router-link to="/pages/dependtravel"><el-menu-item index="6-2">自助游攻略</el-menu-item></router-link>
						</el-submenu> 

						<el-submenu index="5" class="nav_li" style="float:right">
							<template slot="title">酒店美食</template>
							<router-link to="/pages/food"><el-menu-item index="5-1">桐庐美食</el-menu-item></router-link>
							<router-link to="/pages/house"><el-menu-item index="5-2">酒店住宿</el-menu-item></router-link>
						</el-submenu> 

						
						<el-submenu index="4" class="nav_li" style="float:right">
							<template slot="title">新闻资讯</template>
							<router-link to="/activity"><el-menu-item index="4-1">景区新闻</el-menu-item></router-link>
							<router-link to="/pages/hotactivity"><el-menu-item index="4-2">热门活动</el-menu-item></router-link>
							<router-link to="/pages/travel"><el-menu-item index="4-3">旅游新闻</el-menu-item></router-link>			
							<router-link to="/pages/newsDetails" style="display:none"><el-menu-item index="4-3">景区新闻详情</el-menu-item></router-link>	
							<router-link to="/pages/activityDetails" style="display:none"><el-menu-item index="4-4">热门活动详情</el-menu-item></router-link>	
							<router-link to="/pages/travelDetails" style="display:none"><el-menu-item index="4-5">旅游新闻详情</el-menu-item></router-link>						
						</el-submenu> 

						<el-menu-item index="3" class="nav_li" style="float:right">
							<router-link class="router_link" to="/spot" >景区推荐</router-link>
						</el-menu-item>

						<el-submenu index="2" class="nav_li" style="float:right">
							<template slot="title" >潇洒桐庐</template>
							<router-link  to="/pages/overview_tl"><el-menu-item class="router_link" index="2-1">桐庐概况</el-menu-item></router-link>
							<router-link  to="/pages/poetic_tl"><el-menu-item class="router_link" index="2-2">诗乡画城</el-menu-item></router-link>
							<router-link  to="/pages/papercut_tl"><el-menu-item class="router_link" index="2-3">桐庐剪纸</el-menu-item></router-link>
							<router-link  to="/pages/opera_tl"><el-menu-item class="router_link" index="2-4">桐庐越剧</el-menu-item></router-link>
							<router-link  to="/pages/celebrity_tl"><el-menu-item class="router_link" index="2-5">桐庐名人</el-menu-item></router-link>
						</el-submenu>

						<el-menu-item index="1" class="nav_li" style="float:right">
							<router-link class="router_link" to="/">网站首页</router-link>
						</el-menu-item>
				
					</el-menu>	
				</div>
			</el-col>
				
		</el-row>
		<router-view></router-view>	
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		 data() {
		      return {
		      		activeIndex:"1",
		      		navConfig:{
		        	'index':'1',
		        	'home':'2',
		        	'overview_tl':'2-1',
		        	'poetic_tl':'2-2',
		        	'papercut_tl':'2-3',
		        	'opera_tl':'2-4',
		        	'celebrity_tl':'2-5',
		        	'spot':'3',
		        	'hotactivity':'4-2',
							'news':'4-1',
							'newsDetails':'4-3',
							'acitivityDetails':'4-4',
							'travelDetails':'4-5',
		        	'food':'5-1',
		        	'house':'5-2',
		        	'trafficguide':'6-1',
							'dependtravel':'6-2',
							'baseshow':'7-1',
		        	'stupractice':'7-2',
		        	'expand':'7-3',
		        	'companypro':'8-1',
		        	'recruit':'8-2',
		        	'cooperate':'8-3'		        	
		        }
		      };
		    },
		    methods: {
		      handleSelect(key, keyPath) {
						//console.log(key);
					},
					getPath(){
						var _this=this
						var href=window.location.href
						href=href.substring(href.lastIndexOf("/")+1,href.length)
						//console.log(href)
						var fdStart = href.indexOf("newsDetails")
						var actStart = href.indexOf("acitivityDetails")
						var travelStart = href.indexOf("travelDetails")
						if(fdStart == 0 || actStart== 0 || travelStart== 0 ){
								var pos=href.indexOf("?")
								href=href.substring(0,pos)
								_this.activeIndex=_this.navConfig[href]
								//alert("是以details开头")
						}else if(fdStart == -1){
								//alert("不是以details开头")
								_this.activeIndex=_this.navConfig[href]
						}
						//console.log(_this.activeIndex)
					}
				},
				watch: {
					'$route':'getPath'
				},
				//路由导航监听
		    mounted(){
					this.getPath()
			 }
	}
</script>

<style >
	@media screen and (min-width: 1400px) and (max-width:1920px) {
    .nav .nav_wrap .nav_text{
			margin-left: 0px !important;
		}
	}
	.el-menu--horizontal>.el-menu-item,.el-menu .el-submenu__title{
		color: #292929 !important;
	}	
	.nav a{
		font-size: 14px;
	}
	.nav .el-row .router_link{
		text-decoration: none !important;
	}
	.nav .el-col .el-col-21{
		margin-left: 100px;
	}
	.nav/deep/.el-submenu__title{
		padding: 0px 10px;
	}
	.el-menu.el-menu--horizontal{
		text-align: center;
		border: none !important;
	}
	.nav ul li img{
		padding-left: 20px;
	}
	@media screen and (min-width: 1200px) and (max-width:1450px) {
	  .nav a{
		font-size: 14px;
	}
		.nav/deep/.el-submenu__title{
			padding: 0px 2px;
		}
	}
	.el-icon-arrow-down:before {
	    display: none;
	}
	.righttitle_r a{
		font-size: 12px;
	}
	.el-submenu {
		width: 85px !important;
	}
</style>
