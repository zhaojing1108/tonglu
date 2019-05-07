<template>
	<div>
		<div class="news_content">
 			<ul class="newslist" >				
				<li v-for="item of activity" :key="item.id" style="margin:15px 0 10px;padding-bottom:25px;border-bottom:1px solid #ebebeb;" @click="change(item.title,item.content)">
					<el-row style="width:1017px">
						<el-col :span="4"><img :src="item.imgUrl"/></el-col>
						<el-col :span="20">
							<el-row>
								<el-col :span="14"><h4>{{item.title}}</h4></el-col>
								<el-col :span="6"><span class="date">{{item.createTime | formatDate }}</span></el-col>									
							</el-row>
							<p style="margin-top:10px; overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">{{item.description}}</p>
						</el-col>
					</el-row>
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
import {formatDate} from './../../../assets/js/date.js' //在组件中引用date.js
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
		},
		filters: {
			formatDate(time) {
					var date = new Date(time);
					return formatDate(date, 'yyyy年MM月dd日');   //年月日 格式自己定义   'yyyy : MM : dd'  例 2018年12月5日的格式
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
	line-height: 25px;
	cursor: pointer;
}
.news_content li:hover{
	background: #eee !important;
}
.news_content li img{
	padding-left: 0;
	height: 120px;
	width: 150px;
	padding-right: 30px;
}
.news_content li h4{
	cursor: pointer;
	color: #45a2cc;
	display: block;
	overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.news_content .date{
	font-size: 12px;
	color: #777;
}
.news_content li h4:hover{
	color: #409eff;
}
.news_content li p{
	color: #777777;
	word-wrap: break-word;
}
</style>