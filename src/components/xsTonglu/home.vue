<template>
	<el-container class="bgcolor">
	  <el-header class="banner"></el-header>
	  	<div class="container childpage">
		 	<div class="left">
		 		<div class="lefttitle">
		 			<h2>潇洒桐庐</h2>
		 			<p>SMART TONGLU</p>
		 		</div>
		 		 <el-menu @select="handleSelect" :default-active="navIndex" >
				      <el-menu-item index="overview_tl">
				        <span slot="title">桐庐概况</span>
				      </el-menu-item>
				      <el-menu-item index="poetic_tl"  >
				        <span slot="title">诗乡画城</span>
				      </el-menu-item>
				      <el-menu-item index="papercut_tl" >
				        <span slot="title">桐庐剪纸</span>
				      </el-menu-item>
				      <el-menu-item index="opera_tl"  >
				        <span slot="title">桐庐越剧</span>
				      </el-menu-item>
				      <el-menu-item index="celebrity_tl" >
				        <span slot="title">桐庐名人</span>
				      </el-menu-item>
			    </el-menu>
			    <img src="./../../assets/img/timg.jpg" class="leftimg"/>
		 	</div>
		 	<div class="right">
	             <div style="margin-top:10px">
		             <router-view></router-view>
		          </div>
		 	</div>
		</div>
	</el-container>
</template>

<script>
	export default{
		name:"home",
		data(){
	       return {
	         breadcrumbItems: ['桐庐概况'],
	         navIndex:'overview_tl'
	      }
	    },
	    watch:{
		  '$route':'getPath'
		},
	     methods:{
	      handleSelect(key, keyPath){
	        switch(key){
	          case 'overview_tl':
	            this.$router.push('/pages/overview_tl');
	            this.breadcrumbItems  = ['桐庐概况']
	            break;
	          case 'poetic_tl':
	            this.$router.push('/pages/poetic_tl');
	            this.breadcrumbItems  = ['诗乡画城']
	            break;
	          case 'papercut_tl':
	            this.$router.push('/pages/papercut_tl');
	            this.breadcrumbItems  = ['桐庐剪纸']
	            break;
	          case 'opera_tl':
	            this.$router.push('/pages/opera_tl');
	            this.breadcrumbItems  = ['桐庐越剧']
	            break;
	          case 'celebrity_tl':
	            this.$router.push('/pages/celebrity_tl');
	            this.breadcrumbItems  = ['桐庐名人']
	            break;
	        }
	      },
	      //监听路由
	      getPath(){
					var _this=this
					var href=window.location.href
					href=href.substring(href.lastIndexOf("/")+1,href.length);
					_this.navIndex=href
				}
      },
      	 //监听路由
	    mounted(){
				var _this=this
				var href=window.location.href
				href=href.substring(href.lastIndexOf("/")+1,href.length);
				_this.navIndex=href
		 }
	 }
	
</script>

<style scoped>
	.bgcolor{
		width: 100%;
		height: 100%;
		background: #fcfcfc !important;
	}
	.banner{
		width:100%;
		height: 350px !important;
		background: url(../../assets/img/xstlbanner.jpg);
		background-size: 100% 100%;
	}
	.childpage{
		height:100%; 
		overflow:hidden; 
		background: #fff;
		border: 1px solid #ebebeb;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		margin: 25px auto;
		overflow: hidden;
		display: flex;
	}
	.left{
		width: 20%;
		border-right:1px solid #f3f3f3;
		height:100%; 
		overflow:hidden;
		word-break: break-all; 
		padding-bottom:9999px; 
		margin-bottom:-9999px; 
	}
	.right{
		width:79.9%; 
		height:auto;
		min-height: 500px;
		word-break: break-all;
	}
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
</style>