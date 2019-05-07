<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>宾馆酒店</p>
	 				<p class="right_eng">GAESTGIVERIET HOTEL</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><router-link to="/pages/food">酒店美食</router-link></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">宾馆酒店</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain" >
	 			<div v-for="item of houselist" :key="item.id" style="width: 100%;overflow: hidden;margin-bottom: 20px;">
		 			<div class="spottitle">{{item.housename}}</div>
		 			<p>{{item.housemain}}</p>
		 			<div v-for="item2 of item.images" :key="item2.index">
		 				<img :src="item2.imageUrl"  class="houseimg" preview="0"/>
		 			</div>
		 			<!--<img src="../../../assets/imgs/houseimg01.jpg" class="houseimg"/>
		 			<img src="../../../assets/imgs/houseimg02.jpg" class="houseimg"/>
		 			<img src="../../../assets/imgs/houseimg03.jpg" class="houseimg"/>-->
	 			</div>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {
	      	houselist:[
		      	{
		      		id:"01",
		      		housename:"红楼国际饭店",
		      		housemain:"浙江红楼国际饭店位于杭州市桐庐县金融、商业、旅游和文化中心，紧邻著名的富春江，是一座按五星级标准设计建造的涉外商务旅游饭店，她交通便利，环境怡人，是您理想的下榻之所。 浙江红楼国际饭店主楼二十六层，拥有各类客房268间（套），景观房将现代气息与秀美的富春江景色融为一体。临窗远眺，美丽的富春江尽收眼底，您在沐浴的同时亦可欣赏江景。 会议中心拥有10 个不同规格的会议室，以及齐全的会议配套设施。富丽堂皇的中、西式餐厅能容纳近千人同时就餐。欧美风情的大堂吧、咖啡厅是您休闲小憩的最佳场所。 饭店康乐设施齐全，充满时尚气息，室内游泳池、健身房、演艺吧、KTV包厢、棋牌中心、桑拿足浴中心，让您享受难得的闲暇时光。 浙江红楼国际饭店先进完善的设施，幽雅温馨的环境，科学成熟的管理，热情、微笑、快捷、细微的服务和无限蕴育的商机定会带给每一位入住饭店的朋友难得的体验。",
		      		//imageUrl:require('@/assets/imgs/houseimg01.jpg')
		      		images:[
		      			{
		      				index:"1",
		      				imageUrl:require('@/assets/img/houseimg01.jpg')
		      			},
		      			{
		      				index:"2",
		      				imageUrl:require('@/assets/img/houseimg02.jpg')
		      			},
		      			{
		      				index:"3",
		      				imageUrl:require('@/assets/img/houseimg03.jpg')
		      			}
		      		]
		      	},
		      	{
		      		id:"02",
		      		housename:"红灯笼小木屋",
		      		housemain:"红灯笼小木屋度假村由50余幢风格古朴的小木屋组成，可同时下榻近300余人。小木屋外形古朴，充满浓郁的乡村特色。内部按星级标准配置，彩电、空调、卫生间一应俱全。是全国首家二星级小木屋度假村。丁香、含笑、海棠、芙蓉、木莲等花花草草的名字，在这里成了一幢幢木屋的名字，你说浪漫不浪漫？ 夜幕降临，数千盏红灯笼亮起来，风情篝火晚会开始了。舞蹈、歌曲、杂技，每个节目都那么地道，还有互动活动等你参与。看着歌舞、吃着烧烤、喝着啤酒，好一个火树银花不夜天！ 住特色小木屋，吃风味土菜，观烟花歌舞，其乐融融。你还可在观光农艺园，种植蔬菜瓜果、五谷杂粮，体验耕稼乐趣哦。",
		      		images:[
		      			{
		      				index:"1",
		      				imageUrl:require('@/assets/img/houseimg04.jpg')
		      			},
		      			{
		      				index:"2",
		      				imageUrl:require('@/assets/img/houseimg05.png')
		      			},
		      			{
		      				index:"3",
		      				imageUrl:require('@/assets/img/houseimg06.jpg')
		      			}
		      		]
		      
		      	},
		      	{
		      		id:"03",
		      		housename:"富春漫舍",
		      		housemain:"富春漫舍，坐落于江南龙门湾钓鱼岛上，岛上设有住宿、餐饮、茶室、书吧、棋牌、垂钓、烧烤及水上娱乐等项目，集山水风光与富春文化之经典，是一处远离雾霾、放慢身心的休闲隐居胜地。在这里，你可以慢品茗、慢阅读、慢垂钓、慢创作、慢运动、慢疗心，一览富春山水，享受至慢生活。",
		      		images:[
		      			{
		      				index:"1",
		      				imageUrl:require('@/assets/img/houseimg07.png')
		      			},
		      			{
		      				index:"2",
		      				imageUrl:require('@/assets/img/houseimg08.png')
		      			}
		      		]
		      
		      	}
	      	]
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
		font-size: 14px;
		line-height: 24px;
	}
	.right_img{
		width: 350px;
		display: block;
		margin: 20px auto;
	}
	.spottitle{
		width: 95px;
		height: 35px;
		background: url(../../../assets/img/spot_titlebg.png);
		background-size: 100% 100%;
		color: #fff;
		line-height: 35px;
		padding-left: 10px;
		margin: 10px 0;
	}
	.houseimg{
		width: 240px;
		height: 160px;
		margin: 10px 0 0 25px;
		float: left;
	}
</style>