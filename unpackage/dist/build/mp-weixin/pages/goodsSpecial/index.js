(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsSpecial/index"],{"0325":function(t,e,a){"use strict";(function(t){a("8f28");o(a("66fd"));var e=o(a("33ae"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"05c8":function(t,e,a){"use strict";a.r(e);var o=a("854d"),m=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=m.a},"33ae":function(t,e,a){"use strict";a.r(e);var o=a("e356"),m=a("05c8");for(var i in m)"default"!==i&&function(t){a.d(e,t,(function(){return m[t]}))}(i);a("5148");var s,x=a("f0c5"),n=Object(x["a"])(m["default"],o["b"],o["c"],!1,null,"ad7f03ea",null,!1,o["a"],s);e["default"]=n.exports},5148:function(t,e,a){"use strict";var o=a("b960"),m=a.n(o);m.a},"854d":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("a34a")),m=i(a("c460"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,o,m,i,s){try{var x=t[i](s),n=x.value}catch(d){return void a(d)}x.done?e(n):Promise.resolve(n).then(o,m)}function x(t){return function(){var e=this,a=arguments;return new Promise((function(o,m){var i=t.apply(e,a);function x(t){s(i,o,m,x,n,"next",t)}function n(t){s(i,o,m,x,n,"throw",t)}x(void 0)}))}}var n=function(){a.e("components/goodsList/index").then(function(){return resolve(a("82b1"))}.bind(null,a)).catch(a.oe)},d={components:{goodsList:n},onLoad:function(e){if(console.log("options"),console.log(e),e.keyWord)this.pageType="keyWord",t.setNavigationBarTitle({title:e.keyWord});else if(e.type)switch(this.pageType="listType",e.type){case"1":t.setNavigationBarTitle({title:"护栏、网栏"}),this.goodsListTypes=[{tabItemName:"波形梁钢护栏",tabItemCode:"xxx"},{tabItemName:"活动护栏",tabItemCode:"xxxx"},{tabItemName:"缆索护栏",tabItemCode:"xxx"},{tabItemName:"预应力护栏",tabItemCode:"xxxx"},{tabItemName:"市政护栏",tabItemCode:"xxx"},{tabItemName:"新型护栏",tabItemCode:"xxxx"},{tabItemName:"刺铁丝",tabItemCode:"xxx"},{tabItemName:"焊接网",tabItemCode:"xxxx"},{tabItemName:"柔性防护网",tabItemCode:"xxxx"},{tabItemName:"防风抑尘网",tabItemCode:"xxxx"},{tabItemName:"其他",tabItemCode:"xxxx"}];break;case"2":t.setNavigationBarTitle({title:"诱导设施"}),this.goodsListTypes=[{tabItemName:"铝合金标志",tabItemCode:"xxx"},{tabItemName:"主动发光标志",tabItemCode:"xxx"},{tabItemName:"热熔标线",tabItemCode:"xxx"},{tabItemName:"双组份标线",tabItemCode:"xxx"},{tabItemName:"彩色防滑标线",tabItemCode:"xxx"},{tabItemName:"防眩板",tabItemCode:"xxx"},{tabItemName:"防眩网",tabItemCode:"xxx"},{tabItemName:"标志立柱",tabItemCode:"xxx"},{tabItemName:"附着式轮廓标",tabItemCode:"xxx"},{tabItemName:"柱式轮廓标",tabItemCode:"xxx"},{tabItemName:"板式轮廓标",tabItemCode:"xxx"},{tabItemName:"铸铝道钉",tabItemCode:"xxx"},{tabItemName:"塑料道钉",tabItemCode:"xxx"},{tabItemName:"玻璃道钉",tabItemCode:"xxx"}];break;case"3":t.setNavigationBarTitle({title:"安设施设"}),this.goodsListTypes=[{tabItemName:"路锥",tabItemCode:"xxx"},{tabItemName:"爆闪灯",tabItemCode:"xxx"},{tabItemName:"减速带",tabItemCode:"xxx"},{tabItemName:"防撞桶",tabItemCode:"xxx"},{tabItemName:"反光衣",tabItemCode:"xxx"},{tabItemName:"防撞垫",tabItemCode:"xxx"},{tabItemName:"其他",tabItemCode:"xxx"}];break;case"4":t.setNavigationBarTitle({title:"设备仪器"}),this.goodsListTypes=[{tabItemName:"信号灯",tabItemCode:"xxx"},{tabItemName:"警示灯",tabItemCode:"xxx"},{tabItemName:"LED导向牌",tabItemCode:"xxx"},{tabItemName:"发光标志牌",tabItemCode:"xxx"},{tabItemName:"电子警察监控",tabItemCode:"xxx"},{tabItemName:"打桩机",tabItemCode:"xxx"},{tabItemName:"钻孔机",tabItemCode:"xxx"},{tabItemName:"标线设备",tabItemCode:"xxx"},{tabItemName:"测量仪器",tabItemCode:"xxx"},{tabItemName:"公路养护设备",tabItemCode:"xxx"}];break;case"5":t.setNavigationBarTitle({title:"其他建材"}),this.goodsListTypes=[{tabItemName:"钢材",tabItemCode:"xxx"},{tabItemName:"水泥",tabItemCode:"xxx"},{tabItemName:"沥青",tabItemCode:"xxx"},{tabItemName:"紧固件",tabItemCode:"xxx"},{tabItemName:"其他",tabItemCode:"xxx"}];break}this.goodsListData=[],this.goodsListDataIsMore=!0,this.http_getGoodsListData()},onReachBottom:function(){console.log("页面触底"),this.goodsListDataIsMore?this.http_getGoodsListData():Toast("暂无更多数据~")},data:function(){return{pageType:"keyWord",goodsListTypeIndex:0,goodsListTypes:[],goodsListData:[],goodsListDataIsMore:!0,goodsListLoadingFlag:!1}},methods:{http_getGoodsListData:function(){var t=this;return x(o.default.mark((function e(){var a,i;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("http 获取商品列表数据"),t.goodsListLoadingFlag=!0,i=[{name:"商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称",price:"价格详询",desc:"商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",descTag:"热销",imgSrc:m.default,tags:"标签标签标签标签标签标签标签标签",promotion:{_h:"会员专享 先到先得 会员专享 先到先得",_v:"满千包邮满千包邮",_price:"200200"}},{name:"商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称",price:"价格详询",desc:"商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",descTag:"热销",imgSrc:m.default,tags:"标签标签标签标签标签标签标签标签",promotion:{_h:"会员专享 先到先得 会员专享 先到先得",_v:"满千包邮满千包邮",_price:"200200"}},{name:"商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称",price:"价格详询",desc:"商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",descTag:"热销",imgSrc:m.default,tags:"标签标签标签标签标签标签标签标签",promotion:{_h:"会员专享 先到先得 会员专享 先到先得",_v:"满千包邮满千包邮",_price:"200200"}},{name:"商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称",price:"价格详询",desc:"商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",descTag:"热销",imgSrc:m.default,tags:"标签标签标签标签标签标签标签标签",promotion:{_h:"",_v:"",_price:""}},{name:"商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称",price:"价格详询",desc:"商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",descTag:"热销",imgSrc:m.default,tags:"标签标签标签标签标签标签标签标签",promotion:{_h:"",_v:"",_price:""}}],i){e.next=7;break}return t.goodsListDataIsMore=!1,t.goodsListLoadingFlag=!1,e.abrupt("return");case 7:t.goodsListLoadingFlag=!1,(a=t.goodsListData).push.apply(a,i),console.log(t.goodsListData);case 10:case"end":return e.stop()}}),e)})))()},goodsListTypeChange:function(t){console.log(t.detail.index),this.goodsListTypeIndex=t.detail.index,this.goodsListData=[],this.goodsListDataIsMore=!0,this.http_getGoodsListData()}}};e.default=d}).call(this,a("543d")["default"])},b960:function(t,e,a){},e356:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return m})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var m=function(){var t=this,e=t.$createElement;t._self._c},i=[]}},[["0325","common/runtime","common/vendor"]]]);