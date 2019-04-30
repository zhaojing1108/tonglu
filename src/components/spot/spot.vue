<template>
	<el-container class="bgcolor">
	  <el-header class="banner"></el-header>
	  	<div class="container childpage">
		 	<div class="left">
		 		<div class="lefttitle">
		 			<h2>景区推荐</h2>
		 			<p>RECOMMENDATION</p>
		 		</div>
		 		 <el-menu default-active="navIndex" @select="handleSelect">
				      <el-menu-item v-for="item of spotname" :key="item.id" :index="item.id+''">
				        <span slot="title">{{item.name}}</span>
				      </el-menu-item>
			   </el-menu>
			    <img src="../../assets/img/spot_leftimg.jpg" class="leftimg"/>
		 	</div>
		 	<div class="right">
	             <div class="righttitle">
		 			<div class="righttitle_l">
		 				<p>{{nav}}</p>
		 				<p class="right_eng">{{engnav}}</p>
		 			</div>
		 			<div class="righttitle_r">
		 				<el-breadcrumb separator="/">
						  <el-breadcrumb-item :to="{ path: '>' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
						  <el-breadcrumb-item><a href="/">景区推荐</a></el-breadcrumb-item>
						  <el-breadcrumb-item><span style="color: #35abd9;">{{nav}}</span></el-breadcrumb-item>
						</el-breadcrumb>
		 			</div>
		 		</div>
		 		<div class="rightmain">
		 			<div class="right_swiper">
			 			<el-carousel type="card" height="200px" :autoplay="false">
						   <el-carousel-item v-for="item of spotImgs" :key="item.id">
						     <h3><img :src="item.url"/></h3>
						   </el-carousel-item>
						</el-carousel>
					</div>
					<div class="spottitle">景点介绍</div>
					<div class="spotprga">{{spotnav}}</div>
        			<div class="spottitle">交通指南</div>
        			<div class="spotprga">
        				<!--<p class="coloryellow">自驾车</p>
        				{{carnav}}
        				<p class="coloryellow">公交车</p>
        				{{busnav}}-->
        				<p>{{transport}}</p>
        			</div>
		 		</div>
		 	</div>
		</div>
	</el-container>
</template>

<script>
	import api from '@/assets/js/api'
	import axios from 'axios'
	export default{
		name:"spot",
		data (){
			return{
				nav:"",
				engnav:"",
				spotnav: "",
				transport:"",
				spotImgs:[],
				spotname:[],
		    navIndex:''
			}
		},
		methods:{
			handleSelect(key){
				//获得点击的导航值，并跟换显示的数据
				var thisname=this.spotname[key-1].name;
				var thisengname=this.spotname[key-1].enName;
				var thisspotintro=this.spotname[key-1].description;
				var thistransport=this.spotname[key-1].transportation;
				var thisimg=this.spotname[key-1].images;
				this.nav=thisname;
				this.spotnav=thisspotintro;
				this.engnav=thisengname;
				this.transport=thistransport;
				this.spotImgs=thisimg;
			},
			getHomeInfo (){
				axios.get(api.spotUrl)//url api
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res) {
				res=res.data
				console.log(res)
				this.spotname=res
				this.nav=this.spotname[0].name
				this.engnav=this.spotname[0].enName
				this.spotnav=this.spotname[0].name
				this.transport=this.spotname[0].transportation
				this.spotImgs=this.spotname[0].images
			}
		},
		mounted () {
			this.getHomeInfo()
			
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
		background: url(../../assets/img/spotbanner.jpg);
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
		margin-top: 3px;
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
		height: 30px;
		border-bottom: 1px solid #ebebeb;
		margin: 0 auto;
		display: flex;
		padding: 15px 20px;
		position: relative;
	}
	.righttitle_l{
		width: 50%;
		margin-top: 5px;
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
	
	.right_swiper{
		width: 95%;
		margin: 0 auto;
	}
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    /* opacity: 0.75; */
	    line-height: 200px;
	    margin: 0;
	}
	  
	.el-carousel__item:nth-child(2n) {
	   background-color: #99a9bf;
	}
	  
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #d3dce6;
	}
	.spottitle{
		width: 85px;
		height: 35px;
		background: url(../../assets/img/spot_titlebg.png) no-repeat;
		background-size: 100% 100%;
		color: #fff;
		line-height: 35px;
		padding-left: 15px;
	}
	.spotprga{
		margin: 10px 0;
	}
	.coloryellow{
		color:#f99860;
	}
</style>