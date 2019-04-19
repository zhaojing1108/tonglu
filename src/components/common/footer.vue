<template>
	<div id="myFooter" class="myFooter">
		<footer class="container">
			<el-row  class="footer_wrap">
			  <el-col :span="8"><div class="grid-content bg-purple" style="width: 100%;">
			  	<p><span>网络地图</span><span>|</span><span>免责声明</span><span>|</span><span>隐私声明</span><span>|</span><span>投诉建议</span></p>
					<p>Copyright @ 2018 浙江富春江旅游股份有限公司</p>
					<p>浙CP备10006740号-1</p>
			  </div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple">
			  	<p class="contact">与我们联系</p>
					<i class="el-icon-phone"><span style="margin-left: 5px;">0571-85198075</span></i>
					<i class="el-icon-mobile-phone"><span style="margin-left: 5px;">0571-85198075</span></i>
			  </div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple">
			  	<p class="contact">关注更多精彩</p>
					<span>公司简介</span>
					<span>人才招聘</span>
					<span>在线调查</span>
					<span>广告合作</span>
			  </div></el-col>
			</el-row>
			
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'myFooter',
		data(){
			return{				
			}
		}
	}
</script>

<style>	
	.myFooter {
		width: 100%;
		background-color: #38a1d1;	
		min-width: 1190px;
	}
	footer .footer_wrap{
		width: 95%;
		height: 100%;
		margin: 0px auto;
		color: #fff;
	}
	footer .contact{
		border-bottom: 1px #ccc solid;
		padding-bottom: 15px;
	}
	footer .el-row .el-col{
		padding: 20px;
		margin-top: 40px;
	}
	footer .el-row p,footer .el-row i,footer .el-row span,footer .el-row hr {
		margin-right: 5px;
	}
	.grid-content p{
		margin-bottom: 15px;
	}
	.grid-content{
		width: 85%;
		margin: 0 auto;
	}
</style>
