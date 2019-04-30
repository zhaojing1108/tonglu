<template>
	<div>
		<div class="news_content">
 			<ul class="newslist" >
 				<li v-for="item of activity" :key="item.id" style="margin:15px 0 10px;padding-bottom:15px;border-bottom:1px solid #ebebeb;">
 					<img :src="item.imgUrl"/>
 					<div @click="change(item.title,item.content)" class="newstitle">{{item.title}}</div>
					<div class="newsdescp">{{item.description}}</div>
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
				this.$router.push({name:"newsDetails" ,query:{title:title,content:content}})
			},
			getActivity(){
				this.axios.get(api.activityUrl).then(response => {
					for(let i = 0; i<response.data.length;i++){					
						if(response.data[i].category == 2){
							this.activity.push(response.data[i])
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
	cursor: pointer
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
.newstitle{
  width:75%;
  height:40px;
  font-size:16px;
  line-height:45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #409eff;
}
.newsdescp{
  width:80%;
  height:70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

}
</style>

