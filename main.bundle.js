webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    text-align: center;\r\n    height: 100px;\r\n    background-color: royalblue;\r\n    color: lightblue;\r\n    margin-bottom: 20px;\r\n}\r\n.square-home {\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#red {\r\n    left: 500px;\r\n    background-color: red;\r\n    -webkit-animation: run-amok-R 2s 4s ease forwards;\r\n            animation: run-amok-R 2s 4s ease forwards;    \r\n}\r\n#red .l-square { -webkit-animation: updown-L 1s ease 3; animation: updown-L 1s ease 3 }\r\n#red .r-square { -webkit-animation: updown-R 1s ease 3; animation: updown-R 1s ease 3 }\r\n#red .left-R { -webkit-animation: idle 1s ease 3  , stare-l 1s ease 3s; animation: idle 1s ease 3  , stare-l 1s ease 3s }\r\n#red .right-R { -webkit-animation: idle 1s ease 3  , stare-r 1s ease 3s; animation: idle 1s ease 3  , stare-r 1s ease 3s }\r\n\r\n#orange {\r\n    left: 380px;\r\n    background-color: orange;\r\n    -webkit-animation: run-amok-R 2s 4s ease forwards ;\r\n            animation: run-amok-R 2s 4s ease forwards ;\r\n}\r\n#orange .l-square { -webkit-animation: updown-L 1s ease 3; animation: updown-L 1s ease 3 }\r\n#orange .r-square { -webkit-animation: updown-R 1s ease 3; animation: updown-R 1s ease 3 }\r\n#orange .left-R { -webkit-animation: idle 1s ease 3  , stare-l 1s ease 3s; animation: idle 1s ease 3  , stare-l 1s ease 3s }\r\n#orange .right-R { -webkit-animation: idle 1s ease 3  , stare-r 1s ease 3s; animation: idle 1s ease 3  , stare-r 1s ease 3s }\r\n\r\n#orangered {\r\n    left: 280px;\r\n    background-color: orangered;\r\n    -webkit-animation: run-amok-R 2s 4s ease forwards ;\r\n            animation: run-amok-R 2s 4s ease forwards ;\r\n}\r\n#orangered .l-square { -webkit-animation: updown-L 1s ease 3; animation: updown-L 1s ease 3 }\r\n#orangered .r-square { -webkit-animation: updown-R 1s ease 3; animation: updown-R 1s ease 3 }\r\n#orangered .left-R { -webkit-animation: idle 1s ease 3  , stare-l 1s ease 3s; animation: idle 1s ease 3  , stare-l 1s ease 3s }\r\n#orangered .right-R { -webkit-animation: idle 1s ease 3  , stare-r 1s ease 3s; animation: idle 1s ease 3  , stare-r 1s ease 3s }\r\n\r\n#green {\r\n    left: 650px;\r\n    background-color: green;\r\n    -webkit-animation: run-amok-L 2s 4s ease forwards ;\r\n            animation: run-amok-L 2s 4s ease forwards ;\r\n}\r\n#green .l-square { -webkit-animation: updown-L 1s ease 3; animation: updown-L 1s ease 3 }\r\n#green .r-square { -webkit-animation: updown-R 1s ease 3; animation: updown-R 1s ease 3 }\r\n#green .left-L { -webkit-animation: idle 1s ease 3  , stare-l 1s ease 3s; animation: idle 1s ease 3  , stare-l 1s ease 3s }\r\n#green .right-L { -webkit-animation: idle 1s ease 3  , stare-r 1s ease 3s; animation: idle 1s ease 3  , stare-r 1s ease 3s }\r\n\r\n#magenta {\r\n    left: 890px;\r\n    background-color: magenta;\r\n    -webkit-animation: run-amok-L 2s 4s ease forwards ;\r\n            animation: run-amok-L 2s 4s ease forwards ;\r\n}\r\n#magenta .l-square { -webkit-animation: updown-L 1s ease 3; animation: updown-L 1s ease 3 }\r\n#magenta .r-square { -webkit-animation: updown-R 1s ease 3; animation: updown-R 1s ease 3 }\r\n#magenta .left-L { -webkit-animation: idle 1s ease 3  , stare-l 1s ease 3s; animation: idle 1s ease 3  , stare-l 1s ease 3s }\r\n#magenta .right-L { -webkit-animation: idle 1s ease 3  , stare-r 1s ease 3s; animation: idle 1s ease 3  , stare-r 1s ease 3s }\r\n\r\n#royalblue {\r\n    left: 770px;\r\n    background-color: royalblue;\r\n    -webkit-animation: run-amok-L 2s 4s ease forwards ;\r\n            animation: run-amok-L 2s 4s ease forwards ;\r\n}\r\n#royalblue .l-square { -webkit-animation: updown-L 1s ease 3; animation: updown-L 1s ease 3 }\r\n#royalblue .r-square { -webkit-animation: updown-R 1s ease 3; animation: updown-R 1s ease 3 }\r\n#royalblue .left-L { -webkit-animation: idle 1s ease 3  , stare-l 1s ease 3s; animation: idle 1s ease 3  , stare-l 1s ease 3s }\r\n#royalblue .right-L { -webkit-animation: idle 1s ease 3  , stare-r 1s ease 3s; animation: idle 1s ease 3  , stare-r 1s ease 3s }\r\n\r\n\r\n.square {\r\n    position: absolute;\r\n    top: 300px;\r\n}\r\n.l-square {\r\n    position: absolute;\r\n    left: 2;\r\n    background-color: inherit;\r\n    height: 100px;\r\n    width: 50px;\r\n    -webkit-transform-origin: center bottom ;\r\n            transform-origin: center bottom ; \r\n    /* animation: updown-L 1s ease infinite; */\r\n    /* animation: run-amok 500ms ease infinite; */\r\n}\r\n.r-square {\r\n    position: absolute;\r\n    left: 48px;\r\n    background-color: inherit;\r\n    /* background-color: rgb(41, 124, 219); */\r\n    height: 100px;\r\n    width: 50px;\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom; \r\n    /* animation: updown-R 1s ease infinite;  */   \r\n    /* animation: run-amok 500ms ease infinite; */\r\n}\r\n\r\n.left-L {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 5px;\r\n    width: 30px;\r\n\theight: 30px;\r\n border-radius: 50%;\r\n    background-color: white;\r\n    /* background-color: cyan; */\r\n}\r\n.right-L {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 40px;\r\n    width: 30px;\r\n\theight: 30px;\r\n border-radius: 50%;\r\n    background-color: white;\r\n    /* background-color: greenyellow; */\r\n    /* animation: stare-r 200ms 4000ms linear 1 forwards; */\r\n}\r\n.left-R {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 30px;\r\n    width: 30px;\r\n\theight: 30px;\r\n border-radius: 50%;\r\n    background-color: white;\r\n    /* background-color: cyan; */\r\n}\r\n.right-R {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 65px;\r\n    width: 30px;\r\n\theight: 30px;\r\n border-radius: 50%;\r\n    background-color: white;\r\n    /* background-color: greenyellow; */\r\n    /* animation: stare-r 200ms 4000ms linear 1 forwards; */\r\n}\r\n\r\n/* KEYFRAMES */\r\n\r\n@-webkit-keyframes idle {\r\n    0%   { -webkit-transform: translateY(0); transform: translateY(0)    }\r\n    50%  { -webkit-transform: translateY(-5px); transform: translateY(-5px) }\r\n    100% { -webkit-transform: translateY(0); transform: translateY(0)    }\r\n}\r\n\r\n@keyframes idle {\r\n    0%   { -webkit-transform: translateY(0); transform: translateY(0)    }\r\n    50%  { -webkit-transform: translateY(-5px); transform: translateY(-5px) }\r\n    100% { -webkit-transform: translateY(0); transform: translateY(0)    }\r\n}\r\n\r\n@-webkit-keyframes updown-R {\r\n    0%   { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n    50%  { -webkit-transform: scaleY(1.05) skewX(3deg); transform: scaleY(1.05) skewX(3deg) }\r\n    100% { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n}\r\n\r\n@keyframes updown-R {\r\n    0%   { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n    50%  { -webkit-transform: scaleY(1.05) skewX(3deg); transform: scaleY(1.05) skewX(3deg) }\r\n    100% { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n}\r\n@-webkit-keyframes updown-L {\r\n    0%   { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n    50%  { -webkit-transform: scaleY(1.05) skewX(-3deg); transform: scaleY(1.05) skewX(-3deg) }\r\n    100% { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n}\r\n@keyframes updown-L {\r\n    0%   { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n    50%  { -webkit-transform: scaleY(1.05) skewX(-3deg); transform: scaleY(1.05) skewX(-3deg) }\r\n    100% { -webkit-transform: scaleY(1)    skewX(0deg); transform: scaleY(1)    skewX(0deg)    }\r\n}\r\n\r\n@-webkit-keyframes run-amok-R {\r\n    0%   { -webkit-transform: translateX(0px)    skewX(0deg); transform: translateX(0px)    skewX(0deg)   }\r\n    25%  { -webkit-transform: translateX(100px)  skewX(-20deg); transform: translateX(100px)  skewX(-20deg) }\r\n    50%  { -webkit-transform: translateX(-100px) skewX(20deg); transform: translateX(-100px) skewX(20deg)  }\r\n    99%  { -webkit-transform: translateX(1500px) skewX(20deg) scale(1,1); transform: translateX(1500px) skewX(20deg) scale(1,1) }\r\n    100% { -webkit-transform: translateX(1500px) skewX(20deg) scale(0,0); transform: translateX(1500px) skewX(20deg) scale(0,0) }\r\n}\r\n\r\n@keyframes run-amok-R {\r\n    0%   { -webkit-transform: translateX(0px)    skewX(0deg); transform: translateX(0px)    skewX(0deg)   }\r\n    25%  { -webkit-transform: translateX(100px)  skewX(-20deg); transform: translateX(100px)  skewX(-20deg) }\r\n    50%  { -webkit-transform: translateX(-100px) skewX(20deg); transform: translateX(-100px) skewX(20deg)  }\r\n    99%  { -webkit-transform: translateX(1500px) skewX(20deg) scale(1,1); transform: translateX(1500px) skewX(20deg) scale(1,1) }\r\n    100% { -webkit-transform: translateX(1500px) skewX(20deg) scale(0,0); transform: translateX(1500px) skewX(20deg) scale(0,0) }\r\n}\r\n@-webkit-keyframes run-amok-L {\r\n    0%   { -webkit-transform: translateX(0px)     skewX(0deg); transform: translateX(0px)     skewX(0deg)   }\r\n    25%  { -webkit-transform: translateX(-100px)  skewX(20deg); transform: translateX(-100px)  skewX(20deg)  }\r\n    50%  { -webkit-transform: translateX(100px)   skewX(-20deg); transform: translateX(100px)   skewX(-20deg) }\r\n    99%  { -webkit-transform: translateX(-1500px) skewX(-20deg) scale(1,1); transform: translateX(-1500px) skewX(-20deg) scale(1,1) }\r\n    100% { -webkit-transform: translateX(-1500px) skewX(-20deg) scale(0,0); transform: translateX(-1500px) skewX(-20deg) scale(0,0) }\r\n}\r\n@keyframes run-amok-L {\r\n    0%   { -webkit-transform: translateX(0px)     skewX(0deg); transform: translateX(0px)     skewX(0deg)   }\r\n    25%  { -webkit-transform: translateX(-100px)  skewX(20deg); transform: translateX(-100px)  skewX(20deg)  }\r\n    50%  { -webkit-transform: translateX(100px)   skewX(-20deg); transform: translateX(100px)   skewX(-20deg) }\r\n    99%  { -webkit-transform: translateX(-1500px) skewX(-20deg) scale(1,1); transform: translateX(-1500px) skewX(-20deg) scale(1,1) }\r\n    100% { -webkit-transform: translateX(-1500px) skewX(-20deg) scale(0,0); transform: translateX(-1500px) skewX(-20deg) scale(0,0) }\r\n}\r\n\r\n@-webkit-keyframes stare-l {\r\n    0%   { left: 15px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    50%  { left: 15px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    75%  { left: 15px; -webkit-transform: scaleY(0); transform: scaleY(0) }\r\n    100% { left: 15px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n}\r\n\r\n@keyframes stare-l {\r\n    0%   { left: 15px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    50%  { left: 15px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    75%  { left: 15px; -webkit-transform: scaleY(0); transform: scaleY(0) }\r\n    100% { left: 15px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n}\r\n@-webkit-keyframes stare-r {\r\n    0%   { left: 55px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    50%  { left: 55px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    75%  { left: 55px; -webkit-transform: scaleY(0); transform: scaleY(0) }\r\n    100% { left: 55px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n}\r\n@keyframes stare-r {\r\n    0%   { left: 55px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    50%  { left: 55px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n    75%  { left: 55px; -webkit-transform: scaleY(0); transform: scaleY(0) }\r\n    100% { left: 55px; -webkit-transform: scaleY(1); transform: scaleY(1) }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h4>Panos Alexandros Fragoulis</h4>\n  <h3>SVG Icon Designs</h3>\n</div>\n\n<app-gallery></app-gallery>\n\n<div class=\"square-home\">\n  <div id=\"red\" class=\"square\">\n    <div class=\"l-square\" ></div>\n    <div class=\"r-square\" ></div>\n    <div class=\"left-R\"></div>\n    <div class=\"right-R\"></div>\n  </div>\n  <div id=\"orange\" class=\"square\">\n    <div class=\"l-square\" ></div>\n    <div class=\"r-square\" ></div>\n    <div class=\"left-R\"></div>\n    <div class=\"right-R\"></div>\n  </div>\n  <div id=\"orangered\" class=\"square\">\n    <div class=\"l-square\" ></div>\n    <div class=\"r-square\" ></div>\n    <div class=\"left-R\"></div>\n    <div class=\"right-R\"></div>\n  </div>\n  <div id=\"green\" class=\"square\">\n    <div class=\"l-square\" ></div>\n    <div class=\"r-square\" ></div>\n    <div class=\"left-L\"></div>\n    <div class=\"right-L\"></div>\n  </div>\n  <div id=\"magenta\" class=\"square\">\n    <div class=\"l-square\" ></div>\n    <div class=\"r-square\" ></div>\n    <div class=\"left-L\"></div>\n    <div class=\"right-L\"></div>\n  </div>\n  <div id=\"royalblue\" class=\"square\">\n    <div class=\"l-square\" ></div>\n    <div class=\"r-square\" ></div>\n    <div class=\"left-L\"></div>\n    <div class=\"right-L\"></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery-wrapper {\r\n    /* display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap; */\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 376px 188px 94px 376px 188px 94px ;\r\n        grid-template-columns: 376px 188px 94px 376px 188px 94px ;\r\n    -webkit-animation: fadeIn 1s 6s ease forwards;\r\n            animation: fadeIn 1s 6s ease forwards;\r\n    /* animation: fadeIn 1s  ease forwards; */\r\n    opacity: 0; \r\n}\r\n\r\n.png {\r\n    /* align-self: center; */\r\n    /* justify-self: center; */\r\n}\r\n\r\n/* KEYFRAMES */\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {opacity: 0}\r\n    to   {opacity: 1}\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {opacity: 0}\r\n    to   {opacity: 1}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper\">\n  <img class=\"png\" src=\"../assets/icons/Culture(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Culture(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Culture(1).png\" width= \"94px\" height= \"96px\">\n  \n  <img class=\"png\" src=\"../assets/icons/Directions(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Directions(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Directions(1).png\" width= \"94px\" height= \"96px\">\n  \n  <img class=\"png\" src=\"../assets/icons/Entertainment(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Entertainment(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Entertainment(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/Gastronomy(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Gastronomy(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Gastronomy(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/Help(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Help(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Help(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/ImHungry(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/ImHungry(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/ImHungry(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/Leisure(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Leisure(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Leisure(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/Profile(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Profile(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Profile(1).png\" width= \"94px\" height= \"96px\">\n  \n  <img class=\"png\" src=\"../assets/icons/Timeline(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Timeline(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Timeline(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/Urban(3).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Urban(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Urban(1).png\" width= \"94px\" height= \"96px\">\n\n  <img class=\"png\" src=\"../assets/icons/Budget(1).png\" width=\"376px\" height=\"384px\">\n  <img class=\"png\" src=\"../assets/icons/Budget(2).png\" width=\"188px\" height=\"192px\">\n  <img class=\"png\" src=\"../assets/icons/Budget(3).png\" width=\"94px\" height=\"96px\">\n\n  <!-- <img src=\"../assets/icons/Entertainment.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/Gastronomy.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/Help.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/ImHungry.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/Leisure.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/Profile.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/Timeline.svg\" height=\"200px\" width=\"200px\" alt=\"\">\n  <img src=\"../assets/icons/Urban.svg\" height=\"200px\" width=\"200px\" alt=\"\">  \n  <img src=\"../assets/icons/budget4.svg\" height=\"200px\" width=\"200px\" alt=\"\">   -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map