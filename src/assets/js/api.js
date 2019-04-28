const base = 'http://172.16.100.201:8000/api/'
// const base = 'http://192.168.123.226:8000/api/'

export default {
    spotUrl: `${base}show/getTravelPoint`,//旅游景点url
    recruitUrl:`${base}show/getTalentRecruitment`,//招聘url
    bannermenuUrl:`${base}show/getBannerMenu`,//轮播菜单url
    bannerUrl:`${base}show/getBanner`,//轮播图url
    activityUrl:`${base}show/getActivity` ,//活动咨询url
    adUrl:`${base}show/getAd`//广告url
}