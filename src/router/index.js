import Vue from 'vue'
import VueRouter from 'vue-router'

// 主页
import index from '@/components/index/index'
// 潇洒桐庐
import xsTonglu from '@/components/xsTonglu/home'
import overview_tl from '@/components/xsTonglu/pages/overview_tl'
import celebrity_tl from '@/components/xsTonglu/pages/celebrity_tl'
import opera_tl from '@/components/xsTonglu/pages/opera_tl'
import papercut_tl from '@/components/xsTonglu/pages/papercut_tl'
import poetic_tl from '@/components/xsTonglu/pages/poetic_tl'
// 酒店美食
import foodhotel from '@/components/foodhotel/foodhotel'
import food from '@/components/foodhotel/pages/food'
import house from '@/components/foodhotel/pages/house'
// 景区推荐
import spot from '@/components/spot/spot'
// 活动咨询
import activity from '@/components/activity/activity'
import hotactivity from '@/components/activity/pages/hotactivity'
import acitivityDetails from '@/components/activity/pages/acitivityDetails'
import news from '@/components/activity/pages/news'
import newsDetails from '@/components/activity/pages/newsDetails'
import travel from '@/components/activity/pages/travel'
import travelDetails from '@/components/activity/pages/travelDetails'

// 旅游指南
import tourist from '@/components/tourist/tourist'
import dependtravel from '@/components/tourist/pages/dependtravel'
import trafficguide from '@/components/tourist/pages/trafficguide'
// 关于我们
import aboutus from '@/components/aboutus/aboutus'
import companypro from '@/components/aboutus/pages/companypro'
import cooperate from '@/components/aboutus/pages/cooperate'
import recruit from '@/components/aboutus/pages/recruit'
// 景区拓展
import product from '@/components/product/product'
import baseshow from '@/components/product/pages/baseshow'
import expand from '@/components/product/pages/expand'
import stupractice from '@/components/product/pages/stupractice'


Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name:'index',
		component: index
	},
	// 潇洒桐庐
	{
		path: '/xsTonglu',
		component: xsTonglu,
		name:'xsTonglu',
		redirect:"/pages/overview_tl",
		children:[
			 {
	          path: '/pages/overview_tl',
	          name: 'overview_tl',
	          component: overview_tl
	        },
	        {
	          path: '/pages/poetic_tl',
	          name: 'poetic_tl',
	          component: poetic_tl
	        },
	         {
	          path: '/pages/papercut_tl',
	          name: 'papercut_tl',
	          component: papercut_tl
	        },
	        {
	          path: '/pages/celebrity_tl',
	          name: 'celebrity_tl',
	          component: celebrity_tl
	        },
	        {
	          path: '/pages/opera_tl',
	          name: 'opera_tl',
	          component: opera_tl
	        }
		]	
	},
	// 酒店美食
	{
      path: '/foodhotel',
      name: 'foodhotel',
      component: foodhotel,
      redirect:"/pages/food",
      children:[
        {
          path: '/pages/food',
          name: 'food',
          component: food
        },
        {
          path: '/pages/house',
          name: 'house',
          component: house
        }
      ]
    },
    // 景区推荐
    {
    	path: '/spot',
		component: spot
    },
    // 活动咨询
	{
		path:'/activity',
		name:'activity',
		component:activity,
		redirect:"pages/news",
		children:[
			{
				path:'/pages/news',
				name:'news',
				component:news,
			},
			{
				path:'/pages/newsDetails/',
				name:'newsDetails',
				component:newsDetails
			},
			{
				path:'/pages/hotactivity',
				name:'hotactivity',
				component:hotactivity
			},
			{
				path:'/pages/acitivityDetails',
				name:'acitivityDetails',
				component:acitivityDetails
			},
			{
				path:'/pages/travel',
				name:'travel',
				component:travel
			},
			{
				path:'/pages/travelDetails',
				name:'travelDetails',
				component:travelDetails
			}
		]	
	},
	// 旅游指南
	{
		path:'/tourist',
		name:'tourist',
		component:tourist,
		redirect:"pages/dependtravel",
		children:[
			{
				path:'/pages/dependtravel',
				name:'dependtravel',
				component:dependtravel
			},
			{
				path:'/pages/trafficguide',
				name:'trafficguide',
				component:trafficguide
			}
		]	
	},
	// 关于我们
	{
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus,
      redirect:"/pages/companypro",
      children:[
        {
          path: '/pages/companypro',
          name: 'companypro',
          component: companypro
        },
        {
          path: '/pages/cooperate',
          name: 'cooperate',
          component: cooperate
        },
        {
          path: '/pages/recruit',
          name: 'recruit',
          component: recruit
        }
      ]
    },
    {
    	path:'/product',
    	component:product,
    	name:'product',
    	redirect:'/pages/baseshow',
    	children:[
    		{
    			path:'/pages/baseshow',
    			name:'baseshow',
    			component:baseshow
    		},
    		{
    			path:'/pages/expand',
    			name:'expand',
    			component:expand
    		},
    		{
    			path:'/pages/stupractice',
    			name:'stupractice',
    			component:stupractice
    		}
    	]
    }

]

const router = new VueRouter({
	routes,
	linkActiveClass:'active'
})

export default router


