<template>
	<div>
		<div class="news_content">
			<el-menu class="newslist">
				<el-menu-item  v-for="(item,index) of newslist" :key="item.id">
					<el-row>
						<el-col :span="4"><img :src="item.url"/></el-col>
						<el-col :span="20">
							<h4 @click="change" >{{item.title}}</h4>
 							<p>{{item.content}}</p>
						</el-col>
					</el-row>			
				</el-menu-item>
			</el-menu>
			<!-- <div class="newsw"><router-view></router-view></div>			 -->
			<child  :listValue="newslist" v-if="listValue.length>0"></child>
		</div>
	</div>
</template>
<script>
import api from '@/assets/js/api'
import newsDetails from './children/newsDetails'
	export default {
		name: 'News',
		data(){
			return{
				newslist:[],
			}
		},
		components:{
			'child':newsDetails
		},
		created(){
			this.getNews()
		},
		methods:{
			change(){
				this.$router.push({name:"newsDetails" ,params:{id:"1"}});
				getData({id:id}).then(res=>{
					this.newslist =  res.data
				})
			},
			getNews(){
				this.axios.get(api.activityUrl).then(response =>{
					this.newslist = response.data
					console.log(response.data)
				}).catch(error =>{
					console.log(error)
				});
			},
		},	
		mounted(){
			this.change()
		}	
	}
		

</script>

<style scoped>
.news_content{
	height: auto;
	margin: 0 auto;
}
.el-row{
	width: 100%;
}
.news_content li{
	height: 150px;
	margin-bottom: 10px;
	padding: 0;
	line-height: 25px;	
}
.news_content li img{
	padding-right: 20px;
	height: 150px;
	width: 150px;
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
	height: auto;
	word-break:break-all;
　　word-wrap:break-word;
	white-space:normal;
	padding-right: 10px;	
}
</style>
