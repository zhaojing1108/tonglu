<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>诗乡画城</p>
	 				<p class="right_eng">POETIC CITY</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><router-link to="/pages/overview_tl">潇洒桐庐</router-link></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">诗乡画城</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<p>
	 				人们常说“上有天堂，下有苏杭”。朋友，只要你从“人间天堂”杭州再向西跨出一步，你一定会惊奇地发现，有一条秀绝人寰的富春江，如绿色的飘带徜徉在群山间，水绿如铺，铺出了一个潇潇洒洒的美桐庐。<br />
        	桐庐，地处国家级风景名胜区“富春江—新安江—千岛湖”的中心地段。境内，山水旅游资源得天独厚，山青水秀，洞奇石美，古迹悠悠，胜迹处处。“潇洒桐庐郡”、“流水带花香”便是流传了千年的吟咏。桐庐，处处是山水诗，寸寸是写意画， 从1600多年前的南北朝到20世纪初的清末，就有1000多名诗人到此盘桓后留下过2000多首诗。<br />
        	1979年，因瑶琳仙境重新被发现，“忽然洞开新世界，不尽宾客滚滚来”，桐庐名声大噪。继而又修复建设了东汉古迹严子陵钓台、“药祖圣地”桐君山，尔后，大奇山国家森林公园、天目溪竹筏漂流、红灯笼乡村家园（外婆家）、江南龙门湾、印象富春江等一批景区如雨后春笋般发展起来。桐庐旅游一时名冠全国，有了全国“县级旅游之冠”美誉。<br />
       		经过30年的苦心经营，桐庐旅游已形成了以桐庐镇为中心，以富春江、天目溪为纽带的瑶琳仙境和富春江两大旅游板块，各具特色的景区，让人陶醉其中：那些久居地平线上，想去看看地下幻境的游人，便涌向瑶琳仙境，这里的“溶洞灯光秀”可是华东首家；文化沉积厚实的游人则更多去钓台、富春江小三峡，既登山临水，又发思古之幽情；住厌了城市蜗居的游人，乐于去天目溪漂流，或乘竹筏，或乘皮筏，再去临江的小桥流水外婆家漫步，红灯笼小木屋、大奇山蒙古包小住，体验那里的民族文化、风土人情和乡风民俗，采采花、打打牌、聊聊天，将整个身心溶进大自然的怀抱中去；而到大奇山国家森林公园，可餐霞饮露，走索桥、步栈道、一路行来悠哉游哉，好不快活；登临两江入怀的桐君山，品茗清赏，再悟桐君老人济世风范，于身于心都是恰好的消遣，有着城市无法比拟的神韵和意境；也可以到印象富春江，从富春江漂流而下，体验一下南朝文学家吴均漂流富春江的乐趣，那份惬意就别提了……<br />
       		跨入新世纪，桐庐再度掀起了新一轮旅游发展高潮，按照市场经济的规律，依托资源优势，不断完善多元化投资体系，打响“潇洒桐庐·富春江山水”的旅游品牌，构筑大旅游格局，做大做深桐庐山、水、洞、林文章。目前，每年接待游客人次超280万人次，在中国县级旅游史上创造了长盛不衰的旅游奇迹。<br />
       		游不完的富春江山水，道不尽的潇洒美桐庐。朋友，潇洒桐庐欢迎您！富春山水拥抱您！ 
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
</style>