<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>交通指南</p>
	 				<p class="right_eng">TRAFFIC GUIDE</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '>' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a href="/">旅游指南</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">交通指南</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
		 		<div class="spottitle">如何来桐庐</div>
				<p>桐庐地处“富春江 - 新安江 - 千岛湖”国家级黄金旅游线的中心，交通便利，已形成以公路、水运组成的水陆衔接、较为通达的运输网络， 杭新景高速和320 国道连接县城与省会城市杭州，仅 1 小时车程。 05 、16、23 省道穿越县内主要地区，乡镇公路四通八达。县城距杭州国际机场 100 公里 ，从杭州上沪 - 杭 - 甬高速到上海港、宁波港仅需 2 小时车程。水运上溯新安江、兰溪江，下通钱塘江经京杭大运河可达上海。</p>
				<div v-for="item of gototl" :key="item.id" style="line-height: 35px;">
					<span class="coloryellow">{{item.departplace}}</span>
					<span>{{item.way}}</span>
				</div>
				<div class="spottitle">怎样去景区</div>
				<div v-for="item of gototravel" :key="item.id" style="line-height: 35px;">
					<p class="coloryellow">{{item.travelname}}</p>
					<p>{{item.travelway}}</p>
				</div>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {
	      	gototl:[
	      		{
	      			id:"1",
	      			departplace:"杭州",
	      			way:"—上杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"2",
	      			departplace:"上海",
	      			way:"——上沪杭高速到杭州北出口——走杭州绕城高速——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"3",
	      			departplace:"南京",
	      			way:"——上宁杭高速到杭州北出口——走杭州绕城高速——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"4",
	      			departplace:"苏州",
	      			way:"——上苏嘉杭高速——转沪杭高速到杭州北方向——走杭州绕城高速西——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"5",
	      			departplace:"宁波",
	      			way:"——上杭甬高速公路——转杭金衢高速公路——转杭州绕城高速——转杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"6",
	      			departplace:"温州",
	      			way:"——上金丽温高速公路——转龙丽高速公路——转杭新龙高速——转杭新景（杭千）高速杭州方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"7",
	      			departplace:"绍兴",
	      			way:"——上104国道——转杭金衢高速公路杭州南出口——走杭州绕城高速——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"8",
	      			departplace:"衢州",
	      			way:"——上杭金衢高速公路——转杭新龙高速——转杭新景（杭千）高速杭州方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"9",
	      			departplace:"金华",
	      			way:"——上杭金衢高速公路杭州南出口——走杭州绕城高速——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区金华——上杭金衢高速公路——往浦江方向走210省道——富春江镇——桐庐——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"10",
	      			departplace:"台州",
	      			way:"——沿上三高速公路——转杭甬高速公路——转杭金衢高速公路——转杭州绕城高速——转杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"11",
	      			departplace:"湖州",
	      			way:"——沿104国道——上宁杭高速到杭州北出口——走杭州绕城高速——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"12",
	      			departplace:"嘉兴",
	      			way:"——上乍嘉苏转沪杭高速到杭州北出口——走杭州绕城高速——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		},
	      		{
	      			id:"13",
	      			departplace:"无锡",
	      			way:"——上锡宜高速——转宁杭高速到杭州北出口———走杭州绕城高速西——杭新景（杭千）高速千岛湖方向——桐庐出口下——按指路牌即可到达各景区"
	      		}
	      	],
	      	gototravel:[
	      		{
	      			id:"101",
	      			travelname:"瑶琳仙境",
	      			travelway:"桐庐市区→16省道→林场（左转2公里）→瑶琳仙境景区（途中有指路牌）"
	      		},
	      		{
	      			id:"102",
	      			travelname:"严子陵钓台(富春江小三峡)",
	      			travelway:"杭新景高速→富春江镇出口（桐庐下一出口）→沿指路牌到严子陵钓台·富春江小三峡·江南龙门湾景区"
	      		},
	      		{
	      			id:"103",
	      			travelname:"大奇山国家森林公园",
	      			travelway:"杭新景高速（桐庐站出口下）→到达第一个红绿灯（第一个十字路口）左转到底，再左转到大奇山路→大奇山国家森林公园景区（途中有指路牌）"
	      		},
	      		{
	      			id:"104",
	      			travelname:"红灯笼乡村家园",
	      			travelway:"桐庐市区→16省道→林场（左转1公里）→瑶琳镇（右转3公里）→红灯笼乡村家园景区（途中有指路牌）"
	      		},
	      		{
	      			id:"105",
	      			travelname:"天目溪漂流",
	      			travelway:"桐庐市区→16省道→05省道→毕浦隧道后第一个路口左转500米→ 天目溪漂流（途中有指路牌）"
	      		},
	      		{
	      			id:"106",
	      			travelname:"印象富春江",
	      			travelway:"杭新景高速→富春江镇出口（桐庐下一出口）→沿指路牌到印象富春江景区"
	      		},
	      		{
	      			id:"107",
	      			travelname:"桐君山",
	      			travelway:"桐庐市区→23省道→桐君山景区（途中有指路牌）"
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
	.coloryellow{
		color: #f88335;
	}
</style>