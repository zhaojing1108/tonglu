<template>
	<div>
		<div id="newsDetails" >
			<div>
				<h4>{{this.$route.query.title}}</h4>
				<span>发布日期：{{this.$route.query.createTime | formatDate}}</span>
				<p v-html="this.$route.query.content"  style="margin-top:40px">>{{this.$route.query.content}}</p>
			</div>
		</div>
	</div>	
</template>
<script>
	import api from '@/assets/js/api'
	import {formatDate} from './../../../assets/js/date.js' //在组件中引用date.js
	export default {
		name: 'NewsDetails',
		data(){
			return{
				activity:{},
			}
		},
		filters: {
			formatDate(time) {
				var date = new Date(time);
				return formatDate(date, 'yyyy.MM.dd');   //年月日 格式自己定义   'yyyy : MM : dd'  例 2018年12月5日的格式
			},
    	}		
	}
</script>

<style >
	#newsDetails h4{
		padding-top: 20px;
		margin-top: 50px;
		font-weight: bold;
		font-size: 18px;
		text-align: center;
	}
	#newsDetails span{
		display: block;
		text-align: center;
		margin-top: 20px;
		color: #a5a5a5;
		font-size: 12px;
	}
	#newsDetails p{
		color: #737171;
		line-height: 25px;
		text-align: center;
		padding: 0 50px;
	}
	#newsDetails img{
		display: block;
		width: 500px;
		height: 300px;
		margin: 20px auto;
	}
	.news_content .row a{
		color: #737171;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
	}
	.news_content .row a:hover{
		color: #38a1d1;
	}
	
</style>