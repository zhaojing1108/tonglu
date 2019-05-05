<template>
	<!-- 首页 -->
	<div class="index">
		<!-- 导航轮播 -->
		<template>
			<!-- 轮播图 -->
			<el-carousel style="height: 500px; position: relative;" :interval="3000" arrow="always">
				<el-carousel-item  v-for="(imgurl, index) in bannerList" v-show="index===mark" :key="index" >
					<router-link to="/spot"><img :src='imgurl.imgAddress' alt="图片加载中。。。"></router-link>
				</el-carousel-item>
			</el-carousel>
			<!-- 固定栏 -->
			<div class="container"  style="position: absolute;top: 0;left: 50%;margin-left: -595px;height: 500px;">
				<div class="fix_bar">				
					<div class="fix_bar_item" v-for="item of bannermenu" :key="item.id" @click="goPage(item.id)">				
						  <el-col :span="6"><div class="grid-content bg-purple">
						  	<img :src="item.imgUrl" >
						  </div></el-col>
						  <el-col :span="18"><div class="grid-content bg-purple">
						  	<p><a  style="color:#fff;font-size: 16px;">{{item.titile}}</a></p>
							<p><a  class="bannertext"></a>{{item.description}}</p>
						  </div></el-col>													
					</div>
				</div>		
			</div>
		</template>

		<!-- 侧边固定 -->
		<div class="sidebar1">
			<ul><li><span>0571-69870018</span></li></ul>
			<ul><li><span>XXXXXXX</span></li></ul>
			<ul><li class="wx"></li></ul>
			<ul><li><span>0571-1234567</span>	</li></ul>
			<ul><li><span>0571-1234567</span>	</li></ul>
		</div>
		<div class="sidebar2">
			<ul><li><span class="iconfont">&#xe606;</span></li></ul>
			<ul><li><span class="iconfont">&#xe634;</span></li></ul>
			<ul><li><span class="iconfont">&#xe617;</span></li></ul>
			<ul><li><span class="iconfont">&#xe635;</span></li></ul>
			<ul><li><span class="iconfont">&#xe61a;</span></li></ul>
		</div>

		<!-- middle-content -->
		<el-row class="wrap ">
			<!-- 活动咨询 -->
			<div class="middle_content">
				<img class="middle_content_nav" src="./../../assets/img/index_activity.png" alt="">
				<el-row style="padding-top: 20px; height:250px; overflow:hidden">
				  	<el-col :span="10" class="el_tab"><div class="grid-content bg-purple" style="width: 100%;">
				  		<el-tabs :tab-position="tabPosition" class="news_img newchose" label="right" style="height: 240px;" @tab-click="handleClick">
			    			<el-tab-pane label="热门活动"><img :src="rmhdimgUrl" alt="" style="width:95%;height:100%"></el-tab-pane>
			    			<el-tab-pane label="景区新闻"><img :src="jqxwimgUrl" alt="" style="width:95%;height:100%"></el-tab-pane>
			    			<el-tab-pane label="旅游新闻"><img :src="lyxwimgUrl" alt="" style="width:95%;height:100%"></el-tab-pane>
			  			</el-tabs>
				  	</div></el-col>
					<div v-if="tabType == 0">
						<el-col :span="1" style="position: relative ">
							<ul class="newsDate" >
								<li v-for="item of rmhdArray" :key="item.id" > 
									<p style="padding-top: 15px;font-size: 16px;">{{item.createTime | formatDate }}</p>
									<p style="font-size: 12px;">{{item.createTime | formatDateTwo}}</p>
								</li>
							</ul>
						</el-col>
						<el-col :span="12"><div class="grid-content bg-purple" style="margin-left: 14%;">
							<ul class="newsText">
								<li  v-for="item of rmhdArray" :key="item.id" @click="goActivity(item.title,item.content)">
									<p style="color: #444444 !important;padding-top: 3px;">{{item.title}}</p>
									<p style="color: #a2a2a2;font-size: 12px;margin-top: 2px !important;">{{item.description}}</p>
								</li>
							</ul>							
						</div></el-col>
					</div>
					<div v-if="tabType == 1">
						<el-col :span="1" style="position: relative ">
							<ul class="newsDate" >
								<li v-for="item of jqxwArray" :key="item.id" > 
									<p style="padding-top: 15px;font-size: 16px;">{{item.createTime | formatDate }}</p>
									<p style="font-size: 12px;">{{item.createTime | formatDateTwo}}</p>
								</li>
							</ul>
						</el-col>
						<el-col :span="12"><div class="grid-content bg-purple" style="margin-left: 14%;">
							<ul class="newsText">
								<li  v-for="item of jqxwArray" :key="item.id" @click="goActivity(item.title,item.content)">
									<p style="color: #444444 !important;padding-top: 3px;">{{item.title}}</p>
									<p style="color: #a2a2a2;font-size: 12px;margin-top: 2px !important;">{{item.description}}</p>
								</li>
							</ul>							
						</div></el-col>
					</div>
					<div v-if="tabType == 2">
						<el-col :span="1" style="position: relative ">
							<ul class="newsDate" >
								<li v-for="item of lyxwArray" :key="item.id" > 
									<p style="padding-top: 15px;font-size: 16px;">{{item.createTime | formatDate }}</p>
									<p style="font-size: 12px;">{{item.createTime | formatDateTwo}}</p>
								</li>
							</ul>
						</el-col>
						<el-col :span="12"><div class="grid-content bg-purple" style="margin-left: 14%;">
							<ul class="newsText">
								<li  v-for="item of lyxwArray" :key="item.id" @click="goActivity(item.title,item.content)">
									<p style="color: #444444 !important;padding-top: 3px;">{{item.title}}</p>
									<p style="color: #a2a2a2;font-size: 12px;margin-top: 2px !important;">{{item.description}}</p>
								</li>
							</ul>							
						</div></el-col>
					</div>
				</el-row>
				
				<div class="look" @click="lookActivity()">查看更多</div>
			</div>		
			
		</el-row>
		<!-- 广告位 -->
		<div class="middle_banner">
				<el-row :gutter="20" style="padding:0 !important">
					<el-col :span="18" style="height:100%">
						<div style="width:90%;height:40px;margin-top:45px;font-size:18px;line-height:40px;padding-left:10%">{{adver.title}}</div>
						<div style="width:90%;height:57px;padding-left:10%;overflow:hidden">{{adver.content}}</div>
						<!-- <div class="grid-content bg-purple" style="height:100%">
							<li>
								<h3>{{adver.title}}</h3>
							</li>
							<li>							
								<p>{{adver.content}}</p>
							</li>
						</div> -->
					</el-col>
					<el-col :span="6"><div class="grid-content bg-purple click"><p @click="goAd(activity[0].title,activity[0].content)">点击了解详情</p></div></el-col>
				</el-row>
		</div>
		<!-- 景点介绍 -->
		<div class="middle_content">
			<img class="middle_content_nav" src="./../../assets/img/index_screen.png" >
			<el-row style="padding-top: 20px; height:550px; overflow:hidden">
				<el-col :span="6" v-for="value of spotIntrouduce" :key = "value.id" style="padding-top: 20px;" ><div class="grid-content bg-purple">
					<figure>
						<img :src="value.imgUrl" >
						<figcaption  @click="goSpot(value.id)">
							<h2>{{value.name}}</h2>
						</figcaption>	
					</figure>
				</div></el-col>
			</el-row>
			<div class="look" @click="lookSpot()">查看更多</div>
		</div>
		<!-- 地图 -->
		<div class="foot_map" style="position: relative;">
			<img src="./../../assets/img/index_map.png" alt="">
			<div class="container" style="position: absolute;top: 0;left: 50%;margin-left: -550px;"><div class="fooot_ewm ">
				<p>玩乐桐庐</p>
				<img src="../../assets/img/index_ewm.png" style="width: 115px;height: 115px;margin: 10px auto 0;" />
			</div></div>
		</div>
		
	</div>
</template>

<script>
import {formatDate} from '../../assets/js/date.js' //在组件中引用date.js
import api from '@/assets/js/api'
export default {
	name:'index',
	data(){
		return {		
            mark: 0, //比对图片索引的变量
            tabPosition: 'right',
            bannermenu:{},
            bannerList:{},
			spotIntrouduce:{},
			spottitles:{},
			spotimgs:{},
            activity:{},
			adver:{},
			title:{},
			navIndex:"spot",
			tabType: 0,
			jqxwArray:{},
			rmhdArray:{},
			lyxwArray:{},
			rmhdimgUrl:'',
			jqxwimgUrl:'',
			lyxwimgUrl:''
		}
	},
	created () {
		this.getBannerMenu(),
		this.getBanner(),
		this.getTravelPoint(),
		this.getActivity(),
		this.getAd()
	},
	methods: {
		change (i) {
			this.mark = i
		},
		getBannerMenu () {
		    this.axios.get(api.bannermenuUrl).then(response => {
		       this.bannermenu = response.data
		    //    console.log(response.data)
		    }).catch(error => {
		       console.log(error)
		    })
	   	},
	   	getBanner () {
		    this.axios.get(api.bannerUrl).then(response => {
		       this.bannerList = response.data
		    //    console.log(response.data[0])
		    }).catch(error => {
		       console.log(error)
		    })
	   	},
	   	getTravelPoint(){
			var spottitles = []				 
			this.axios.get(api.spotUrl).then(response=>{
				this.spotIntrouduce = response.data			
				// console.log(response.data)
	   		}).catch(error => {
	   			console.log(error)
			})
		},		
	   	getActivity(){
	   		this.axios.get(api.activityUrl).then(response => {
				this.activity = response.data
				var r=0
				var s=0
				var t=0
				for(let i in this.activity){
					if(this.activity[i].category == 2){
						this.jqxwArray[r++] = this.activity[i]
					}
					if(this.activity[i].category == 1){
						this.rmhdArray[s++] = this.activity[i]
					}
					if(this.activity[i].category == 3){
						this.lyxwArray[t++] = this.activity[i]
					
					}
				}
				this.rmhdimgUrl=this.rmhdArray[0].imgUrl
				this.jqxwimgUrl=this.jqxwArray[0].imgUrl
				this.lyxwimgUrl=this.lyxwArray[0].imgUrl
	   			// console.log(response.data.updateTime)
	   		}).catch(error => {
	   			console.log(error)
	   		})
		   },
		handleClick(tab, e) {//点击选项卡
			this.tabType = tab.index;
			// var _val = tab.index;//
			// this.getWaterDetails(_val);
		},
	   	getAd(){
	   		this.axios.get(api.adUrl).then(response => {
	   			this.adver = response.data[0]
	   			// console.log(response.data[0])
	   		}).catch(error => {
	   			console.log(error)
	   		})
		   },
		goPage(id){
			if(id==1){
				window.location.href = "https://ylxjjqjt.fliggy.com/"
			}else if(id==2){
				this.$router.push({path:'/pages/house',query:{id:this.id}})
			}else if(id==3){
				this.$router.push({path:'/pages/food',query:{id:this.id}})
			}else if(id==4){
				this.$router.push({path:'/pages/trafficguide',query:{id:this.id}})
			}else if(id==5){
				this.$router.push({path:'/pages/trafficguide',query:{id:this.id}})
			}
			else if(id==6){
				this.$router.push({path:'/pages/dependtravel',query:{id:this.id}})
			}
		},
		goActivity(title,content){
			this.$router.push({name:"newsDetails" ,query:{title:title,content:content}})
		},
		goAd(title,content){
			this.$router.push({name:"acitivityDetails" ,query:{title:title,content:content}})
		},
		lookActivity(){
			this.$router.push({path:'/pages/news',params:{id:this.id}})
		},
		lookSpot(){
			this.$router.push({path:'/spot',params:{id:this.id}})
		},
		goSpot(id){
			this.$router.push({path:'/spot',params:{id:this.id}})						
		}
	},
	filters: {
       formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'dd');   //年月日 格式自己定义   'yyyy : MM : dd'  例 2018年12月5日的格式
       },
       formatDateTwo(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM');   //时间点 例 21点12分12秒的格式
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li{
		list-style: none;
		cursor: pointer;
	}
	@font-face {
		font-family: 'iconfont';
		src: url('./../../assets/font/iconfont.eot');
		src: url('./../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
		url('./../../assets/font/iconfont.woff2') format('woff2'),
		url('./../../assets/font/iconfont.woff') format('woff'),
		url('./../../assets/font/iconfont.ttf') format('truetype'),
		url('./../../assets/font/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
/* 轮播图 */
	.nav .index{
		position: relative;
	}
	.el-carousel__container .el-carousel__item{
		height: 500px;
	}
/* 轮播固定栏目 */
	.fix_bar{
		position: absolute;
		top: 0px;
		left: 0;
		width: 250px;
		height: 460px;
		background-color: rgba(42, 42, 43, 0.5);
		cursor: pointer;
		z-index: 9999;
		padding: 20px 0;	
	}
	.fix_bar_item{
		height: 75px;
		color: #fff;
		margin: 0 auto;
		padding: 10px;	
	}
	.fix_bar_item p{
		font-size: 14px;
	}
	
	.fix_bar_item:hover{
		background-color: #3155779c;
	}
	.fix_bar .fix_bar_item img{
		margin-top: 20px;
		width: 30px;
		height: 30px;
		padding-right: 5px;
		margin-top: 15px;
		margin-right: 20px;
		margin-left: 10px;
	}
/* 活动咨询 */
	.el-row {
		width: 1170px;
		height: auto;
		margin: 50px auto;
	}
	.middle_content .middle_content_nav{
		display: block;
		width: 275px;
		height: 75px;
		margin: 0px auto;
	}
	.index .wrap .middle_content .newsDate{
		text-align: center;	
		position: absolute;	
	}
	.index .wrap .middle_content .newsDate li{
		height: 55px;
		margin-bottom: 5px;
		width: 70px;		
		color: #fff;
		background-color: #38a1d1;
	}
	.index .wrap .middle_content .newsDate li p:first-child{
		padding-top: 5px;
	}
	.index .wrap .middle_content .newsText li{
		height: 55px;
		width: 100%;
		overflow: hidden;
		margin-bottom: 5px;
	}
	.index .wrap .middle_content .newsText li p{
		font-size: 14px;
		line-height: 16px;
		margin: 0 !important;
	}
	.middle_content .look{
		width: 150px;
	    height: 30px;
	    border: 1px solid #666666;
	    border-radius: 35px;
	    text-align: center;
	    line-height: 30px;
	    margin: 0 auto;
	    cursor: pointer;
	}
/* 广告位 */
	.middle_banner{
		height: 180px;
		background: url(../../assets/img/index_advbg.png) no-repeat;
		background-size: 100% 100%;
		margin-bottom: 50px;
		color: #fff;
		overflow: hidden;
	}
	.middle_banner .el-row{
		margin: 0 auto!important;
		height: 100%!important;
	}
	.middle_banner .el-row li{
		margin: 25px;
	}
	.middle_banner .el-row p{
		line-height: 30px;
	}
	.middle_banner .el-row .click{
		color: #fff;
		display: block;
		width: 150px;
		height: 30px;
		background-color: #000;
		border-radius: 30px;
		text-align: center;
		cursor: pointer;
		line-height: 30px;
		margin-top: 75px;
		margin-left: 50px;
	}
/* 景点介绍 */
	figure{
		width: 100%;
		height: 240px;
		overflow: hidden;		
		background-color: #fff;
		text-align: center;
		cursor: pointer;
		position: relative;
	}
	figcaption{
		display: block;
	    position: absolute;
	    top: 20px;
	    left: 8%;
	    width: 85%;
	    height: 85%;
	}	
	figure img{
		width: 100% ;
		height: 100%;
		margin: 0 auto;
		opacity: 0.9;
		-webkit-transition: opacity 0.35s;
		transition: opacity 0.35s; 
	}
	figure:hover img{
		-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);
	}
	figcaption::before,
	figcaption::after{
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		content: " ";
		opacity: 1;
		-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
		transition: opacity 0.35s , transform 0.35s;
	}
	figcaption::before{
		border-top: 1px solid #fff;
		border-bottom: 1px solid #fff;
		-webkit-transform:scale(0,1) ;
		transform: scale(0,1);
	}
	figcaption::after{
		border-right: 1px solid #fff;
		border-left: 1px solid #fff;
		-webkit-transform: scale(1,0);
		transform: scale(1,0);
	}
	figure h2{
		color: #fff;
		letter-spacing:10px;
		width: 100%;
		height: 20px;
		font-size: 19px;
		font-weight: 700;
		padding-top: 30%;
		-webkit-transition: -webkit-transform 0.35s;
		transition: transform 0.35s;
		-webkit-transform: translate3d(0,20px,0);
		transform: translate3d(0,20px,0);
		line-height: 30px;
	}
	figure:hover figcaption::before,
	figure:hover figcaption::after{
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	figure:hover h2{
		opacity: 1;
		-webkit-transform: translate3d(0,0,0);
		transform:translate3d(0,0,0) ;
	}
/* 侧边固定栏 */
	.sidebar1,.sidebar2{
		width: 50px;
	    height: 254px;
	    position: fixed;
	    top: 33%;
	    right: 0;	    
	    z-index: 999;
	}
	.sidebar2{
		pointer-events:none;
		background-color: #a09595;
	}
	.sidebar2 li{
		width: 50px;
		height: 50px;
		border-bottom: 1px solid #888181;	
	}
	.sidebar2 li span{
		color: #ffff;
		font-size: 2em;
		line-height: 50px;
		padding-left: 10px;
	}
	
	.sidebar1 ul{
		width: 50px;
		height: 51px;
		position: relative;
	}
	.sidebar1 ul li {
		position: absolute;
		top: 0;
		right: -150px;
	    width: 200px;
	    height: 51px;
	    background: #d82828;
	    transition:right 1.5s;
		-webkit-transition:right 1.5s; /* Safari */	    	 
	}
	.sidebar1 ul li:hover{
		right: 0px;
	}
	.sidebar1 ul li span{
		line-height: 50px;
		color: #fff;
		font-size: 16px;
		margin-left: 25px;
	}	
	.sidebar1 .wx {
		background: url(../../assets/img/index_wxbg.png);
		right: -150px;
		height: 50px;
		transition:height 1s,right 1s;
		-webkit-transition:height 1s,right 1s; /* Safari */	    
	}
	.sidebar1 .wx img{
		width: 100px;
		height: 100px;
	}
	.sidebar1 .wx:hover{
		height: 100px;
		right: -50px;
	}
/* 地图 */
	.foot_map{
		width: 100%;
		margin-top: 50px;
		height: 300px;
	}
	.foot_map img{
		width: 100%;
		height: 300px;
	}
	.bannertext{
		font-size: 12px !important;
		color: #afafaf;
	}
	.newchose >>> .el-tabs__item{
	    display: block;
	    height: 80px !important;
	    line-height: 60px !important;
	    color: #666;
	}
	.newchose  >>> .el-tabs__item.is-active {
	    color: #409EFF;
	}
	.fooot_ewm{
		width: 150px;
		height: 160px;
		color: #fff;
		text-align: center;
		padding-top: 20px;
		background: #35abd9;
	}
</style>

