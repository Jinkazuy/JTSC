(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{"0803":function(t,e,n){},"330e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.filterBar_search_driveShow=!0},t.e1=function(e){t.filterBar_time_SheetShow=!0},t.e2=function(e){t.filterBar_type_SheetShow=!0},t.e3=function(e){t.filterBar_more_driveShow=!0},t.e4=function(e){t.filterBar_more_driveShow=!1},t.e5=function(e){t.filterBar_search_driveShow=!1})},r=[]},"33e0":function(t,e,n){"use strict";n.r(e);var a=n("dad7"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},9374:function(t,e,n){"use strict";var a=n("0803"),o=n.n(a);o.a},b17f:function(t,e,n){"use strict";n.r(e);var a=n("330e"),o=n("33e0");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("9374");var i,l=n("f0c5"),c=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"4e31284a",null,!1,a["a"],i);e["default"]=c.exports},dad7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),o=i(n("8ef2")),r=i(n("d27b"));function i(t){return t&&t.__esModule?t:{default:t}}function l(t){return f(t)||u(t)||s(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _(t,e,n,a,o,r,i){try{var l=t[r](i),c=l.value}catch(s){return void n(s)}l.done?e(c):Promise.resolve(c).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function i(t){_(r,a,o,i,l,"next",t)}function l(t){_(r,a,o,i,l,"throw",t)}i(void 0)}))}}var p=function(){n.e("components/newsList/index").then(function(){return resolve(n("425d"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/Am-FontAwesome/index").then(function(){return resolve(n("d0a3"))}.bind(null,n)).catch(n.oe)},g={onLaunch:function(){console.log("首页 Launch")},onShow:function(){console.log("首页 Show"),getApp().globalData.localSelect&&(this.filter_local.cityName=getApp().globalData.localSelect.cityName,this.filter_local.cityCode=getApp().globalData.localSelect.cityCode),this._http_get_newsListData()},onHide:function(){console.log("首页 Hide")},components:{newsList:p,FontAwesome:m},data:function(){return{loadingFlag:!1,httpParams:{type:1,page:1},newsListData:[],newsListDataIsMore:!0,filterBar_time_SheetShow:!1,filterBar_time_SheetActions:[{name:"一小时"},{name:"今天"},{name:"7天内",subname:"7个自然日内"}],filterBar_type_SheetShow:!1,filterBar_type_SheetActions:[{name:"劳务招标"},{name:"材料招标"}],filterBar_more_driveShow:!1,filterBar_search_driveShow:!1,searchValue:"",filter_local:{cityName:"北京市",cityCode:11},filter_time:"一小时前",filter_type:"劳务招标"}},onReachBottom:function(){console.log("页面触底"),this.newsListDataIsMore?(this.httpParams.page++,this._http_get_newsListData()):(0,r.default)("暂无更多数据~")},methods:{_http_get_newsListData:function(){var t=this;return d(a.default.mark((function e(){var n,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("http 获取列表数据"),t.loadingFlag=!0,e.next=4,o.default.http_get_biddingList(t.httpParams);case 4:if(r=e.sent,console.log(r),r){e.next=10;break}return t.newsListDataIsMore=!1,t.loadingFlag=!1,e.abrupt("return");case 10:t.loadingFlag=!1,t.searchValue="",(n=t.newsListData).push.apply(n,l(r)),console.log(t.newsListData);case 14:case"end":return e.stop()}}),e)})))()},_filterBar_time_onClose:function(){this.filterBar_time_SheetShow=!1},_filterBar_type_onClose:function(){this.filterBar_type_SheetShow=!1},_filterBar_time_onSelect:function(t){console.log(t.detail),this.filter_time=t.detail.name,this.filterBar_time_SheetShow=!1},_filterBar_type_onSelect:function(t){console.log(t.detail),this.filter_type=t.detail.name,this.filterBar_type_SheetShow=!1},_filterBar_local_pageShow:function(){console.log(this.filter_local),t.navigateTo({url:"/pages/localSelect/index?page=home&cityName=".concat(this.filter_local.cityName,"&&cityCode=").concat(this.filter_local.cityCode)})},_searchInputOnChange:function(t){this.searchValue=t.detail},_searchInputOnCancel:function(){console.log("搜索框取消"),this.searchValue="",this.filterBar_search_driveShow=!1},_searchInputOnSearch:function(t){console.log("搜索关键词↓"),console.log(this.searchValue),this._http_get_newsListData(),this.filterBar_search_driveShow=!1},tabClick:function(t){switch(console.log(t),t.detail.index){case 0:this.httpParams.type=1;break;case 1:this.httpParams.type=2;break}this.httpParams.page=1,this.newsListDataIsMore=!0,this.newsListData=[],this._http_get_newsListData()}}};e.default=g}).call(this,n("543d")["default"])},e5bf:function(t,e,n){"use strict";(function(t){n("8f28");a(n("66fd"));var e=a(n("b17f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e5bf","common/runtime","common/vendor"]]]);