<template>
	<div>
		<div id="newsDetails" >
		<div v-for="item of data" :key="item.id">
			<h4>{{item.title}}</h4>
			<p>{{item.content}}</p>
			<img :src="item.url" alt="">	
					
		</div>
		<div>{{this.$route.params.id}}</div>
	</div>
</div>
	
</template>
<script>
	import api from '@/assets/js/api'
	import Bus from './../bus.js'
	export default {
		name: 'NewsDetails',
		data(){
			return{
				data:'默认值'
			}
		},
    }

</script>

<style scoped>
	#newsDetails h4{
		padding-top: 20px;
		font-weight: bold;
		text-align: center;
	}
	#newsDetails p{
		color: #737171;
		line-height: 25px;
		padding: 30px;
		text-align: center;
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