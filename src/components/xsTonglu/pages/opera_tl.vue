<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>桐庐越剧</p>
	 				<p class="right_eng">SHAOXING OPERA OF TONGLU</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>潇洒桐庐</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">桐庐越剧</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<p>
	 		越剧的故乡在嵊州，而越剧的摇篮却在桐庐。<br />
       		吴侬软语，温婉曲调，不少享誉海内外的越剧名角出自富春江畔。二十多年前，由桐庐越剧团创演的两部作品被接连拍成电影并在全国公映，更让一个县级小剧团成为了江南戏曲舞台上的一颗明珠。<br />
            1980年代，改革的春风吹进了当时的桐庐越剧团（杭州越剧二团前身）。1983年7月，越剧团调整演员，吸收越剧艺训班学员15名，恢复女子越剧。是年秋，演出《春江月》，并参加浙江省首届戏剧节，获优秀演出奖。1984年，中央新闻纪录电影制片厂拍摄彩色戏曲艺术片《绣花女传奇》。1986年2月28日，县文化局在桐庐电影院举行由桐庐越剧团自编自演的《春江月》改编的彩色艺术片《绣花女传奇》影片首映式。1985年，桐庐越剧团又排演《桐江雨》，在省第二届戏剧节上夺魁。1986年，上海电影制片厂摄制成彩色艺术片，易名《桐花泪》。12月6日，桐庐电影院举行由桐庐越剧团饰演的彩色故事片《桐花泪》首映式。桐庐越剧团作为一个县级剧团，在改革开放初期，自编剧本、自己创演的两部作品拍成电影在全国公映，这在全国来说是独一无二的，对县级剧团来说更是一个奇迹。<br />
                                         经过多年的发展，桐庐越剧已成为“江南戏曲舞台上的一颗明珠”，先后有多人夺得中国戏剧最高奖——梅花奖。桐庐人听越剧，唱越剧已成为一种浓郁的地方文化。红灯笼乡村家园每天都有越剧表演，来桐庐旅游，一定不要错过温婉的桐庐越剧。<br />
                <img src="./../../../assets/img/tl_yueju_01.jpg"  class="right_img"/>
	 			</p>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {}
	    }
	  }
</script>

<style scoped>
	..lefttitle{
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
		font-size: 14px;
		line-height: 24px;
	}
	.right_img{
		width: 350px;
		display: block;
		margin: 20px auto;
	}
</style>