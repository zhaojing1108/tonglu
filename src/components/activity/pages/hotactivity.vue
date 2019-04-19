<template>
	<div>
		<div class="news_content">
 			<ul class="newslist" >
 					<li v-for="item of newslist" :key="item.id">
 					<img :src="item.imageUrl"/>
 					<h4 @click="change">{{item.newstitle}}</h4>
 					<p>{{item.newstext}}</p>
 				</li>
 			</ul>
 			<div class="newsw">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'News',
		data(){
			return{
				newslist:{},
				flag:true
			}
		},
		methods:{
			change(){
				this.$router.push({name:"acitivityDetails" ,params:{id:"1"}})
			}
		}	
	}
</script>

<style scoped>
.news_content{
	height: auto;
	width: 90%;
	margin: 0 auto;
}
.news_content li{
	height: 150px;
	margin-bottom: 10px;
	padding: 0;
	position: relative;
	line-height: 25px;
}
.news_content li img{
	padding-left: 0;
	height: 150px;
	width: 150px;
	float: left;
	padding-right: 30px;
}
.news_content li h4{
	padding: 15px 0;
	cursor: pointer;
	font-size: 16px;
	color: #45a2cc;
}
.news_content li h4:hover{
	color: #409eff;
}
.news_content li p{
	color: #777777;
	}
</style>
