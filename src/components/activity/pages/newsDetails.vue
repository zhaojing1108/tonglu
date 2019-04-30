<template>
	<div>
		<div id="newsDetails" >
		<div>
			<!-- <h4>{{this.$route.query.title}}</h4> -->
			<h4>{{this.thistitle}}</h4>
			<p v-html="this.$route.query.content">{{this.$route.query.content}}</p>
		</div>
	</div>
</div>
	
</template>
<script>
	import api from '@/assets/js/api'
	export default {
		name: 'NewsDetails',
		data(){
			return{
				activity:{},
				thistitle:''
			}
		},
		created (){
			this.thistitle=this.$route.query.title
			console.log(this.thistitle)
		},
		watch:{
				
		},
		methods:{
	       
		},
	
	}
</script>

<style >
	#newsDetails h4{
		padding-top: 20px;
		margin-top: 50px;
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