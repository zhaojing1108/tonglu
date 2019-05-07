<template>
	<div>
		<div class="right">
	 		<div class="righttitle">
	 			<div class="righttitle_l">
	 				<p>拓展产品</p>
	 				<p class="right_eng">EXPANDING PRODUCTS</p>
	 			</div>
	 			<div class="righttitle_r">
	 				<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><span style="color: #777;font-weight: 300;">首页</span></el-breadcrumb-item>
					  <el-breadcrumb-item><router-link to="/pages/baseshow">景区拓展</router-link></el-breadcrumb-item>
					  <el-breadcrumb-item><span style="color: #35abd9;">拓展产品</span></el-breadcrumb-item>
					</el-breadcrumb>
	 			</div>
	 		</div>
	 		<div class="rightmain">
	 			 <el-table
					:data="tableData"
					:span-method="objectSpanMethod"
					border
					style="width: 100%; margin-top: 20px">
					<el-table-column
						prop="address"
						label="基地"
						width="100px">
					</el-table-column>
					<el-table-column
						prop="content"
						label="内容">
					</el-table-column>
					<el-table-column
						prop="price"
						label="报价"
						width="180px">
					</el-table-column>
					<el-table-column
						prop="other"
						label="备注"
						width="100px">
					</el-table-column>
				</el-table>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	  export default {
	    data(){
	      return {
					tableData: [{
						id: '01',
						address: '大奇山',
						content: 'cs野战营',
						price: '158元/人',
						other: '含门票'
					}, {
						id: '02',
						address: '大奇山',
						content: '瀑降',
						price: '350元/人',
						other: '含门票'
					}, {
						id: '03',
						address: '大奇山',
						content: '峡谷探险（包括瀑降、溯溪）',
						price: '98元/人',
						other: '含门票'
					}, {
						id: '04',
						address: '大奇山',
						content: '空中抓杠、跨越、天梯、信任背摔、电网、毕业墙、盲人方阵、极限60秒、支援前线、98元/人罐头鞋、勇闯夺命岛、飞越激流',
						price: '98元/人 任选三项',
						other: '含门票'
					},{
						id: '05',
						address: '富春江',
						content: '激流勇进（印象富春江）',
						price: '100元/人',
						other: '含门票'
					},{
						id: '06',
						address: '富春江',
						content: '定向寻宝（漏江滩）',
						price: '110元/人',
						other: '含门票'
					},{
						id: '07',
						address: '富春江',
						content: '盘山石壁崖降',
						price: '50元/人',
						other: '含门票'
					},{
						id: '08',
						address: '富春江',
						content: '水上拔河',
						price: '20元/人',
						other: '不含门票'
					},{
						id: '09',
						address: '红灯笼',
						content: '扎筏泅渡',
						price: '30元/人',
						other: '不含门票'
					},{
						id: '10',
						address: '红灯笼',
						content: '定向寻宝（包括：智力迷宫）',
						price: '98元/人',
						other: '含门票'
					},{
						id: '11',
						address: '红灯笼',
						content: '皮筏竞渡',
						price: '50元/人',
						other: '含门票'
					},{
						id: '12',
						address: '红灯笼',
						content: '象鼻岩速降',
						price: '50元/人',
					}]
	      }
			},
			methods:{
				objectSpanMethod({row,column,rowIndex,columnIndex}){
					if (columnIndex === 0) {
						if (rowIndex % 4 === 0) {
							return {rowspan: 4,colspan: 1};
						} else  {
							return {rowspan: 0,colspan: 0};
						}
					}			
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
	.right_img{
		width: 350px;
		display: block;
		margin: 20px auto;
	}
	.foodlist{
		width: 100%;
		display: flex;
		flex-direction: row;
        flex-wrap: wrap;
	}
	.foodlist li{
		width: 29%;
		text-align: center;
		margin: 0 2% 20px;
		height: 160px;
		position: relative;
	}
	.foodlistimg{
		width: 100%;
		margin-bottom: 10px;
		height: 100%;
	}
	.expandname{
		width: 100%;
		height: 30px;
		background: rgba(0,0,0,0.2);
		color: #fff;
		position: absolute;
		bottom: 0;
		line-height: 30px;
	}
</style>