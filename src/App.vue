<template>
	<div id="app">
		<!-- 头部 -->
		<myNav></myNav>	
		<!-- 底部 -->
		<myFooter></myFooter>
	</div>
</template>
<script>
	import myNav from '@/components/common/nav'
	import myFooter from '@/components/common/footer'
	export default {
		name: 'App',
		components:{
			myFooter,
			myNav
		}
	}
</script>

<style>
.nav .el-row{
	width: 1190px;
	margin: 0px auto;
	padding-top: 10px;	
}
</style>
