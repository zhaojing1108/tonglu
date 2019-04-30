<template>
	<div>
		<div class="news_content">
 			<ul class="newslist" >
 					<li v-for="item of activity" :key="item.id" style="margin:15px 0 10px;padding-bottom:15px;border-bottom:1px solid #ebebeb;">
 					<img :src="item.img"/>
 					<h4 @click="change(item.title,item.content)">{{item.title}}</h4>
					<p>{{item.description}}</p>
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
				activity:[],
				flag:true
			}
		},
		created(){
			this.getActivity()
		},
		methods:{
			change(title,content){
				this.$router.push({name:"acitivityDetails" ,query:{title:title,content:content}})
			},
			getActivity(){
				this.axios.get(api.activityUrl).then(response => {							
					for(let i = 0; i<response.data.length;i++){					
						if(response.data[i].category == 1){
						//console.log(response.data[i])
						this.activity.push(response.data[i]);
						//console.log(this.activity)
						}				
					}			
				}).catch(error => {
					console.log(error)
				})
			},
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
	height: 120px;
	margin-bottom: 10px;
	padding: 0;
	position: relative;
	line-height: 25px;
	cursor: pointer;
}
.news_content li img{
	padding-left: 0;
	height: 120px;
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

