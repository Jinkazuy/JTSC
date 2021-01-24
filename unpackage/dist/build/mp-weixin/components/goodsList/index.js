(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodsList/index"],{2116:function(n,t,o){"use strict";var e=o("c985"),c=o.n(e);c.a},2124:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){o.e("components/Am-FontAwesome/index").then(function(){return resolve(o("d0a3"))}.bind(null,o)).catch(o.oe)},c={components:{FontAwesome:e},props:{goodsListData:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){console.log("商品列表↓"),console.log(this.goodsListData)},methods:{_openGoodsInfo:function(t){console.log(t),n.navigateTo({url:"/pages/goodsInfo/index?goodsId=".concat(t.name)})}}};t.default=c}).call(this,o("543d")["default"])},"82b1":function(n,t,o){"use strict";o.r(t);var e=o("bbd1"),c=o("a4cc");for(var u in c)"default"!==u&&function(n){o.d(t,n,(function(){return c[n]}))}(u);o("2116");var a,r=o("f0c5"),i=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"305f35ba",null,!1,e["a"],a);t["default"]=i.exports},a4cc:function(n,t,o){"use strict";o.r(t);var e=o("2124"),c=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=c.a},bbd1:function(n,t,o){"use strict";var e;o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return e}));var c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},c985:function(n,t,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodsList/index-create-component',
    {
        'components/goodsList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("82b1"))
        })
    },
    [['components/goodsList/index-create-component']]
]);
