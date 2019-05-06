<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>人才招聘</p>
	 				<p class="right_eng">TALENT RECRUITMENT</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>关于我们</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">人才招聘</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
		 		<div class="contact">
		 			<div class="contactli">
		 				<i class="contacticon"><img src="../../../assets/img/recruittele.png"/></i>
		 				<div class="contactli_r">
		 					<h2 class="contacth2">招聘联系电话</h2>
		 					<i class="teleicon"></i>
		 					<p>您可以来电咨询我们，联系电话：<span class="colorblue">0571-569652201</span></p>
		 					<p>联系人：张女士</p>
		 				</div>
		 			</div>
		 			<div class="contactli">
		 				<i class="contacticon"><img src="../../../assets/img/recruitemail.png"/></i>
		 				<div class="contactli_r">
		 					<h2 class="contacth2">简历投递邮箱</h2>
		 					<i class="teleicon"></i>
		 					<p>您可以把信息发送人力资源部邮箱</p>
		 					<p>E-mail：<span class="colorblue">634320217@qq.com</span></p>
		 				</div>
		 			</div>
		 		</div>
		 		<div class="joblist">
		 			<el-collapse accordion>
					  <el-collapse-item v-for="item in joblist" :key="item.id">
					    <template slot="title">
					     	<div class="jobname">{{item.positionName}}</div>
					     	<div class="jobtime">{{item.updateTime | formatDate}}</div>
					    </template>
					    <div>
					    	<p>工作地点：{{item.address}}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职位类别：{{item.categories}}</p>
					    	<p class="rzyqtext">[任职要求]</p>
					    	<p v-html="item.content">{{item.content}}</p>
					    	<!--<p style="margin-top: 15px;">一、岗位要求</p>
					    	<p v-for="item2 in item.jobrequire" :key="item2.index">
					    		{{item2.requiretext}}
					    	</p>
							<p style="margin-top: 15px;">二、待遇</p>	
							<p> {{item.jobpay}}</p>-->
					    </div>
						</el-collapse-item>
					</el-collapse>
		 		</div>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	import api from '@/assets/js/api'
	import axios from 'axios'
	import {formatDate} from '@/assets/js/date.js' //在组件中引用date.js
	  export default {
	    data(){
	      return {
	      	activeNames: ['1'],
	      	joblist:[]
	    }
	  },
	 methods:{
			getHomeInfo (){
				axios.get(api.recruitUrl)//url 
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res) {
				res=res.data
				this.joblist=res
			}
	},
	mounted () {
		this.getHomeInfo()
	},
	filters: {
       formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy年MM月dd日');   //年月日 格式自己定义   'yyyy : MM : dd'  例 2018年12月5日的格式
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
	.contact{
		width: 100%;
		display: flex;
	}
	.contactli{
		width: 46%;
		height: 120px;
		background: #f9f9f9;
		border-radius: 5px;
		margin-right: 3%;
	}
	.contacticon{
		width: 70px;
		height: 70px;
		display: block;
		margin: 25px 20px ;
		float: left;	
	}
	.contacticon img{
		width: 100%;
		height: 100%;
	}
	.contactli_r{
		width: 290px;
		height: 100%;
		float: left;
		color: #787878;
		font-size: 12px;
	}
	.contacth2{
		color: #424242;
		font-size: 16px;
		margin-top: 18px;
		font-weight: 300;
	}
	.teleicon{
		width: 15px;
		height: 4px;
		display: block;
		background: #35abd9;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.colorblue{
		color: #35abd9;
	}
	.joblist{
		width: 95%;
		overflow: hidden;
		margin-top: 20px;
	}
	.el-collapse-item__header{
		background: red !important;
	}
	.joblist >>> .el-collapse-item__header { background: #f5f5f5 !important; margin-top: 20px;border: none;padding-left: 20px;color: #797e83;}
	.joblist >>> .el-collapse { border: none;}
	.jobname{
		width: 40%;
		float: left;
	}
	.jobtime{
		width: 40%;
		float: left;
	}
	.joblist >>> .el-collapse-item__content{color: #828282;font-size: 12px;padding-top: 30px;}
	.rzyqtext{
		color: #35abd9;
		margin: 20px 0;
	}
</style>