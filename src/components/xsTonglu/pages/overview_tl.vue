<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>桐庐概况</p>
	 				<p class="right_eng">OVERVOEW OF TONGLU</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><a>潇洒桐庐</a></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">桐庐概况</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			<p>桐庐县，镶嵌在浙西北的翡翠，撒落在富春江畔的一颗璀璨明珠！<br />
    			    桐庐自225年置县，至今已有1770余年历史。境内总面积1825平方公里，辖7个镇、4个乡、2个街道，人口40万，隶属杭州市管辖，是国务院批准的对外开放县。桐庐系多山丘陵地区，属亚热带季风气候，冬暖夏凉，四季分明。平均降雨量1450毫米，平均气温16摄氏度，自然景观多姿多彩。<br />
                                                                      桐庐历来是文人雅士邀游吟诗之地。自南北朝至清代，曾有一千多位名贤高蹈之士，在这里留下了脍炙人口的名篇佳作。桐庐的山山水水，已与历史、文化、传说融为一体。<br />
                                                                      桐庐自建县后，历经南宋、齐、梁、陈，隋开皇九年（公元589年），桐庐县并入钱塘县，属杭州。仁寿二年（公元602年）复置桐庐县，属睦州。宣和三年（公元1121年），改睦州为严州府。元代属建德路。明清两代称严州府，桐庐、分水均属严州府。民国成立后，废府设道，桐庐、分水属金华道。1927年废除道制后直属浙江省。1949年4一5月两县解放。1958年分水县并入桐庐，1960年5月起隶属于杭州市。<br />
                                                                      桐庐在历史上曾三迁县治。建县初，县治设于今漏港滩附近。仁寿二年复置桐庐县时，新县址设于“桐江西山庄”，在今俞赵附近。贞观二十年（公元646年），又将县治迁至桐溪边，即今旧县街道所在地；后因旧县址低洼易涝，交通不便，于开元二十六年（公元738年），迁至江口，即今桐庐镇。<br />
                                                                      关于县名由来，说法有三：《元和郡县志》说，因居地桐溪而得名；《太平寰宇记》中说，桐溪有颗大桐树，枝多叶茂。树冠大，遮住数亩土地，远望似庐，故得桐庐之名；据《方舆胜览》载：“有人采药结庐桐木下，人问其姓，指桐木示之，因山名桐君，郡曰桐庐。”如今以第三种说法较多。<br />
                                                                       如今，桐庐已是“国际花园城市”、“中国优秀旅游名县”和“中国最佳休闲旅游县”，其良好的生态环境和优越的地理位置，吸引着越来越多的人前来投资创业和休闲旅游。</p>
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