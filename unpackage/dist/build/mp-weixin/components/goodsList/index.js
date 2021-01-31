(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodsList/index"],{"1fea":function(n,t,o){},2124:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){o.e("components/Am-FontAwesome/index").then(function(){return resolve(o("d0a3"))}.bind(null,o)).catch(o.oe)},a={components:{FontAwesome:e},props:{goodsListData:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){console.log("商品列表↓"),console.log(this.goodsListData)},methods:{_opengoodsInfo:function(t){console.log(t),n.navigateTo({url:"/pages/goodsInfo/index?goodsId=".concat(t.name)})}}};t.default=a}).call(this,o("543d")["default"])},"82b1":function(n,t,o){"use strict";o.r(t);var e=o("846f"),a=o("a4cc");for(var c in a)"default"!==c&&function(n){o.d(t,n,(function(){return a[n]}))}(c);o("929a");var u,r=o("f0c5"),f=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"52cafdba",null,!1,e["a"],u);t["default"]=f.exports},"846f":function(n,t,o){"use strict";var e;o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement;n._self._c},c=[]},"929a":function(n,t,o){"use strict";var e=o("1fea"),a=o.n(e);a.a},a4cc:function(n,t,o){"use strict";o.r(t);var e=o("2124"),a=o.n(e);for(var c in e)"default"!==c&&function(n){o.d(t,n,(function(){return e[n]}))}(c);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodsList/index-create-component',
    {
        'components/goodsList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("82b1"))
        })
    },
    [['components/goodsList/index-create-component']]
]);
