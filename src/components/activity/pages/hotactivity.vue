<template>
	<div>
		<div class="news_content">
 			<ul class="newslist" >
 					<li v-for="(item,index) of newslist" :key="item.id">
 					<img :src="item.url"/>
 					<h4 @click="change">{{item.title}}</h4>
 					<p>{{item.content}}</p>
 				</li>
 			</ul>
 			<div class="newsw">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
import api from '@/assets/js/api'
	export default {
		name: 'News',
		data(){
			return{
				newslist:{},
				flag:true
			}
		},
		created(){
			this.getNews()
		},
		methods:{
			change(){
				this.$router.push({name:"newsDetails" ,params:{id:"1"}})
			},
			getNews(){
				this.axios.get(api.activityUrl).then(response =>{
					this.newslist = response.data
					console.log(response.data)
				}).catch(error =>{
					console.log(error)
				})
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
	padding: 20px 0 7px 0;
	cursor: pointer;
	color: #45a2cc;
}
.news_content li h4:hover{
	color: #409eff;
}
.news_content li p{
	color: #777777;
	}
</style>

