<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>基地展示</p>
	 				<p class="right_eng">BASE SHOW</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>景区拓展</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">基地展示</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<p>	
					富春江拓展——勇敢者的游戏野外拓展训练，借鉴先进的团队培训理论，结合大自然环境本身存在的各种险阻，艰辛、挫折等困难来提升个人意志力、培养团队的沟通能力、协作能力，从而达到激发潜能，熔炼团队的目的。特别适合学校、公司等培养团队精神和提升企业文化。 “天下佳山水，古今推富春”。富春江山奇水秀，是旅游休闲的绝佳去处，也是野外拓展的最佳场所。杭州富春江拓展俱乐部是以桐庐丰富的旅游资源和秀美的富春山水为依托，将拓展项目与景区优美的自然环境相结合，亦训亦游，张弛有道，让身体和心灵得到一次真正的放松。俱乐部下属有大奇山、红灯笼、龙门湾等六大不同特色的拓展培训基地，拥有野外勇士、亲近自然、水上项目等多个项目，内容丰富。
				</p>
	   			
   			  	<div class="basetitle">大奇山拓展基地</div>
   			  	<el-row>
				  	<el-col :span="9">
				  		<img src="../../../assets/img/baseshow.jpg" alt="">
				  	</el-col>
				  	<el-col :span="15" class="basecontent">
				  		<div class="basetext">
		   			  		<h3>大奇山拓展基地——野外生存、真人CS</h3>
		   			  		<p>CS镭战是一种新兴的时尚体育运动，根据场地不同，分为野战(户外)和巷战(室内)。大奇山国家森林公园山野起伏，丛林密布，非常适合CS野战。参加者手持镭射枪，身穿迷彩军服，在公园天然的丛林与特别搭建的掩体中穿梭，与“敌人”展开激烈的“战斗”，完成如“歼灭”、“攻山”等精心设计的任务，亲身体验只有在电影或电子游戏中才能看到的场景。</p>
									<p>地址：桐庐桐君街道大奇山国家森林公园景区内</p>
									<p>电话：0571—64241035</p>
						</div>
				  	</el-col>
				</el-row>		
	   			  					
				<div class="basetitle">红灯笼外婆家拓展基地</div>
				<el-row>
				  	<el-col :span="9">
				  		<img src="../../../assets/img/expand_hong.jpg" alt="">
				  	</el-col>
				  	<el-col :span="15" class="basecontent">
				  		<div class="basetext">
		   			  		<h3>红灯笼外婆家拓展基地——挑战自我，悬崖迫降</h3>
									<p>地址：桐庐瑶琳镇红灯笼乡村家园景区内</p>
									<p>电话：0571—64241035</p>
						</div>
				  	</el-col>
				</el-row>	
				
				<div class="basetitle">江南龙门湾拓展基地</div>
				<el-row>
				  	<el-col :span="9">
				  		<img src="../../../assets/img/expand_long.jpg" alt="">
				  	</el-col>
				  	<el-col :span="15" class="basecontent">
				  		<div class="basetext">
		   			  		<h3>江南龙门湾拓展基地——休闲乐园、水上拓展</h3>
									<p>地址：桐庐富春江镇江南龙门湾景区内</p>
									<p>电话：0571—64651646</p>
						</div>
				  	</el-col>
				</el-row>	

				<div class="basetitle">天目溪拓展基地</div>
				<el-row>
				  	<el-col :span="9">
				  		<img src="../../../assets/img/expand_tian.jpg" alt="">
				  	</el-col>
				  	<el-col :span="15" class="basecontent">
				  		<div class="basetext">
		   			  		<h3>天目溪拓展基地——激流勇进、破浪逐风</h3>
									<p>地址：桐庐瑶琳镇天目溪漂流景区内</p>
									<p>电话：0571—64376173</p>
						</div>
				  	</el-col>
				</el-row>	


				<div class="basetitle">桐君山拓展基地</div>
				<el-row>
				  	<el-col :span="9">
				  		<img src="../../../assets/img/expand_tong.jpg" alt="">
				  	</el-col>
				  	<el-col :span="15" class="basecontent">
				  		<div class="basetext">
		   			  		<h3>桐君山拓展基地——学生实践、丰富知识</h3>
									<p>地址：桐庐桐君街道桐君山·七里扬帆景区内</p>
									<p>电话：0571—64622945</p>
							</div>
				  	</el-col>
				</el-row>	

				
				
				
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {
	      
	      }
	    }
	  }
</script>

<style scoped>
	.lefttitle{
		width: 90%;
		margin: 10px auto 20px;
		border-bottom: 1px solid #ebebeb;
		height: 45px;
		color: #5e5e5e;
		padding: 5px 0 0 5%;
		font-size: 16px;
	}
	.lefttitle p{
		color: #35abd9;
		font-size: 12px;
		margin-top: 5px;
	}
	.el-menu{
		border: none;
	}
	.el-menu-item{
		height: 40px;
		line-height: 40px;
		padding-left: 40px !important;
		color: #777777;
	}
	.el-menu-item.is-active {
	    color: #fff;
	    background: #35abd9;
	}
	.leftimg{
		width: 100%;
		margin-top: 10px;
		margin-bottom: 35px;
	}
	.righttitle{
		width: 93%;
		height: 20px;
		border-bottom: 1px solid #ebebeb;
		margin: 0 auto;
		display: flex;
		padding: 15px 20px;
		position: relative;
	}
	.righttitle_l{
		width: 50%;
	}
	.righttitle_r{
		width: 50%;
		font-size: 12px;
	}
	.right_eng{
		color: #afafaf;
		font-size: 12px;
		margin-top: 3px;
	}
	.righttitle_r{
		font-size: 12px !important;
		color: #777777;
	}
	.el-breadcrumb {
	    font-size: 12px;
	    line-height: 1;
	    position: absolute;
        right: 10px;
        bottom: 10px;
	}
	.el-breadcrumb__inner, .el-breadcrumb__inner a{
	    font-weight: 300 !important;
	    color: #777777 !important;
	}
	.el-breadcrumb__inner, .el-breadcrumb__inner a {
   		font-weight: 300 !important;
	    color: #777777 !important;
	}
	.navcur{
		color: red !important;
	}
	.rightmain{
		width: 94%;
		height: auto;
		padding: 3%;
		color: #777777;
		font-size: 12px;
		line-height: 24px;
	}
	.rightmain .el-row{
		width: 100%;
		margin-top: 10px;
	}
	.rightmain  .basetitle{
		width: 140px;		
		height: 35px;
		background: url(../../../assets/img/spot_titlebg.png) no-repeat;
		background-size: 100% 100%;
		color: #fff;
		line-height: 35px;
		padding-left: 15px;
		margin-top: 20px;
	}
	.rightmain  img{
		width: 300px;
	}
	.rightmain .basecontent{
		padding-top: 15px;
		line-height: 25px;
	}
	

	
	
	

</style>