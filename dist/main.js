/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/Ubuntu-Regular.ttf */ "./src/assets/fonts/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/makeVertical.png */ "./src/assets/makeVertical.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/makeHorizontal.png */ "./src/assets/makeHorizontal.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/missIcon.png */ "./src/assets/missIcon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/targetIcon.png */ "./src/assets/targetIcon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0px;\n    margin: 0px;\n    user-select: none;\n    box-sizing: border-box;\n    font-family: ubuntu;\n}\n@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nP{\n    margin: 0px;\n    padding: 0px;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: rgba(47, 143, 190, 0.10);\n    touch-action: manipulation;\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n/* main area section */\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n\n.startingMenu{\n    height: 100%;\n    width: 100%;\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.gamePhase{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    gap: 15px;\n}\n\n.gamePhase.preStage{\n    justify-content: flex-start !important;\n    gap: 15px;\n}\n\n.battleshipLogo{\n    max-height: 10%;\n}\n\n.battleshipImage{\n    max-height: 20%;\n    margin-top: -20px;\n}\n\n.optionsContainer{\n    display: flex;\n    gap: 15px;\n    max-height: 20%;\n}\n\n.playAgainstPlayer,\n.playAgainstBot,\n.easyDifficulty,\n.hardDifficulty,\n.playMultiplayerButton,\n.deployButton{\n    border: 1px black solid;\n    padding: 8px 15px 8px 15px;\n    cursor: pointer;\n    border-radius: 2px;\n    font-weight: 600;\n}\n\n.playAgainstPlayer:hover,\n.playAgainstBot:hover,\n.easyDifficulty:hover,\n.hardDifficulty:hover,\n.playMultiplayerButton:hover,\n.deployButton:hover{\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n.player1NameContainer,\n.player2NameContainer{\n    display: flex;\n    flex-direction: column;\n    font-weight: 600;\n    gap: 8px;\n    position: relative;\n}\n\n.player1NameContainer > div:nth-child(1),\n.player2NameContainer > div:nth-child(1){\n    text-align: center;\n}\n\n.player1NameContainer > input:nth-child(2),\n.player2NameContainer > input:nth-child(2){\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    background-color: transparent;\n    width: 150px;\n    text-align: center;\n}\n\n.player1NameContainer > input:nth-child(2):focus,\n.player2NameContainer > input:nth-child(2):focus{\n    outline: none;\n}\n\n.playMultiplayerButton{\n    margin-top: 15px;\n}\n\n.errorMessage{\n    color: red;\n    font-weight: 500;\n    position: absolute;\n    bottom: -17px;\n    font-size: 11px;\n    text-align: center;\n    width: 100%;\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n/* Player Area Section */\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n.playerArea{\n    width: 70%;\n    max-width: 440px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    height: 40%;\n    min-height: 420px;\n    gap: 15px;\n}\n\n.playerBoard{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    cursor: crosshair;\n    border-radius: 10px;\n    box-shadow: 0px 2px 1px 2px rgba(0, 0, 0, 0.13);\n}\n\n.playerArea:nth-of-type(2)> .playerBoard{\n    box-shadow: 0px -2px 1px 2px rgba(0, 0, 0, 0.13);\n}\n\n.square{\n    border: 1px rgba(30, 30, 30, 0.7) solid;\n    box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.13);\n}\n\n/* Putting border-radius on gamephase board corners */\n.topLeft{\n    border-top-left-radius: 10px;\n}\n\n.topRight{\n    border-top-right-radius: 10px;\n}\n\n.bottomLeft{\n    border-bottom-left-radius: 10px;\n}\n\n.bottomRight{\n    border-bottom-right-radius: 10px;\n}\n\n.square.active{\n    background-color: rgb(81, 110, 153);\n}\n\n.fakeBoard{\n    height: 100%;\n    position: absolute;\n    width: 100%;\n    pointer-events: none;\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n.playerIdentification0,\n.playerIdentification1{\n    position: absolute;\n    width: 100%;\n    display: flex;\n    font-size: 16px;\n    justify-content: space-evenly;\n    align-items: center;\n    font-weight: 700;\n    color: rgb(51, 51, 51);\n}\n\n.playerIdentification0{\n    bottom: -30px;\n}\n\n.playerIdentification1{\n    top: -30px;\n}\n\n.playerName{\n    width: 60px;\n    max-width: 60px;\n}\n\n.battleshipPreview0,\n.carrierPreview0,\n.submarinePreview0,\n.cruiserPreview0,\n.smallshipPreview0,\n.battleshipPreview1,\n.carrierPreview1,\n.submarinePreview1,\n.cruiserPreview1,\n.smallshipPreview1{\n    display: flex;\n    border: 1px rgb(120, 120, 120) solid;\n}\n\n.battleshipPreview0 > div,\n.carrierPreview0 > div,\n.submarinePreview0 > div,\n.cruiserPreview0 > div,\n.smallshipPreview0 > div{\n    border-right: 1px rgb(120, 120, 120) solid;\n    width: 10px;\n    height: 10px;\n    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.39);\n}\n\n.battleshipPreview1 > div,\n.carrierPreview1 > div,\n.submarinePreview1 > div,\n.cruiserPreview1 > div,\n.smallshipPreview1 > div{\n    border-right: 1px black solid;\n    width: 10px;\n    height: 10px;\n    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.39);\n}\n\n.battleshipPreview0 > div:last-child,\n.carrierPreview0 > div:last-child,\n.submarinePreview0 > div:last-child,\n.cruiserPreview0 > div:last-child,\n.smallshipPreview0 > div:last-child,\n.battleshipPreview1 > div:last-child,\n.carrierPreview1 > div:last-child,\n.submarinePreview1 > div:last-child,\n.cruiserPreview1 > div:last-child,\n.smallshipPreview1 > div:last-child{\n    border-right: none\n}\n\n.message{\n    font-size: 16px;\n    font-style: italic;\n    width: max-content;\n}\n\n.rotateButton{\n    border-radius: 10%;\n    padding: 5px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    content: ' ';\n    height: 40px;\n    width: 40px;\n}\n\n.rotateButton.makeHorizontal{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-position: center;\n}\n\n.rotateButton.makeVertical{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-position: center;\n}\n\n.shot{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: center;\n    background-color: initial;\n    background-size: cover;\n    transition: all 1s ease;\n}\n\n.shot.shipHit{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-position: center;\n    background-size: cover;\n    transition: all 1s ease;\n}\n\n.shot.shipHit.shipSunk{\n    background-color: rgba(255, 0, 0, 0.671);\n    background-image: none;\n    transition: all 1s ease;\n}\n\n.playerBoard .shot.shipHit.shipSunk.horizontalCarrier:nth-child(1){\n    border: 10px black solid;\n}\n\n.fakeBoard > img{\n    background: rgb(36, 36, 36);\n    border: 1px rgba(255, 255, 255, 0.329) solid;\n}\n\n@media screen and (max-width: 600px){\n    .gamePhase{\n        max-height: 100vh;\n    }\n\n    .playerArea{\n        height: auto;\n        min-height: 40%;\n        gap: 10px;\n    }\n\n    .playerBoard{\n        width: 100%;\n        height: 100%;\n        min-width: 340px;\n        max-width: 95%;\n        min-height: 280px;\n        max-height: 400px;\n    }\n\n    .playerIdentification0{\n        bottom: -25px;\n        font-size: 15px;\n    }\n\n    .message{\n        font-size: 15px;\n        text-align: center;\n    }\n\n    .playerIdentification1{\n        top: -25px;\n        font-size: 15px;\n    }\n}\n\n@media screen and (min-height: 720px){\n    .gamePhase{\n        height: 100%;\n        justify-content: center !important;\n        gap: 40px;\n    }\n}\n\n@media screen and (max-height: 800px) and (min-height: 720px){\n    .gamePhase{\n        height: 100%;\n        justify-content: center !important;\n    }\n\n    .playerArea{\n        min-height: 35%;\n        gap: 10px;\n    }\n\n    .playerBoard{\n        width: 80%;\n        height: 100%;\n        max-width: 95%;\n        max-height: 400px;\n    }\n\n    .playerIdentification0{\n        bottom: -25px;\n        font-size: 15px;\n    }\n\n    .message{\n        font-size: 15px;\n        text-align: center;\n    }\n\n    .playerIdentification1{\n        top: -25px;\n        font-size: 15px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    user-select: none;\n    box-sizing: border-box;\n    font-family: ubuntu;\n}\n@font-face {\n    font-family: Ubuntu;\n    src: url('/src/assets/fonts/Ubuntu-Regular.ttf');\n}\n\nP{\n    margin: 0px;\n    padding: 0px;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: rgba(47, 143, 190, 0.10);\n    touch-action: manipulation;\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n/* main area section */\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n\n.startingMenu{\n    height: 100%;\n    width: 100%;\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.gamePhase{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    gap: 15px;\n}\n\n.gamePhase.preStage{\n    justify-content: flex-start !important;\n    gap: 15px;\n}\n\n.battleshipLogo{\n    max-height: 10%;\n}\n\n.battleshipImage{\n    max-height: 20%;\n    margin-top: -20px;\n}\n\n.optionsContainer{\n    display: flex;\n    gap: 15px;\n    max-height: 20%;\n}\n\n.playAgainstPlayer,\n.playAgainstBot,\n.easyDifficulty,\n.hardDifficulty,\n.playMultiplayerButton,\n.deployButton{\n    border: 1px black solid;\n    padding: 8px 15px 8px 15px;\n    cursor: pointer;\n    border-radius: 2px;\n    font-weight: 600;\n}\n\n.playAgainstPlayer:hover,\n.playAgainstBot:hover,\n.easyDifficulty:hover,\n.hardDifficulty:hover,\n.playMultiplayerButton:hover,\n.deployButton:hover{\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n.player1NameContainer,\n.player2NameContainer{\n    display: flex;\n    flex-direction: column;\n    font-weight: 600;\n    gap: 8px;\n    position: relative;\n}\n\n.player1NameContainer > div:nth-child(1),\n.player2NameContainer > div:nth-child(1){\n    text-align: center;\n}\n\n.player1NameContainer > input:nth-child(2),\n.player2NameContainer > input:nth-child(2){\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    background-color: transparent;\n    width: 150px;\n    text-align: center;\n}\n\n.player1NameContainer > input:nth-child(2):focus,\n.player2NameContainer > input:nth-child(2):focus{\n    outline: none;\n}\n\n.playMultiplayerButton{\n    margin-top: 15px;\n}\n\n.errorMessage{\n    color: red;\n    font-weight: 500;\n    position: absolute;\n    bottom: -17px;\n    font-size: 11px;\n    text-align: center;\n    width: 100%;\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n/* Player Area Section */\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n.playerArea{\n    width: 70%;\n    max-width: 440px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    height: 40%;\n    min-height: 420px;\n    gap: 15px;\n}\n\n.playerBoard{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    cursor: crosshair;\n    border-radius: 10px;\n    box-shadow: 0px 2px 1px 2px rgba(0, 0, 0, 0.13);\n}\n\n.playerArea:nth-of-type(2)> .playerBoard{\n    box-shadow: 0px -2px 1px 2px rgba(0, 0, 0, 0.13);\n}\n\n.square{\n    border: 1px rgba(30, 30, 30, 0.7) solid;\n    box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.13);\n}\n\n/* Putting border-radius on gamephase board corners */\n.topLeft{\n    border-top-left-radius: 10px;\n}\n\n.topRight{\n    border-top-right-radius: 10px;\n}\n\n.bottomLeft{\n    border-bottom-left-radius: 10px;\n}\n\n.bottomRight{\n    border-bottom-right-radius: 10px;\n}\n\n.square.active{\n    background-color: rgb(81, 110, 153);\n}\n\n.fakeBoard{\n    height: 100%;\n    position: absolute;\n    width: 100%;\n    pointer-events: none;\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n.playerIdentification0,\n.playerIdentification1{\n    position: absolute;\n    width: 100%;\n    display: flex;\n    font-size: 16px;\n    justify-content: space-evenly;\n    align-items: center;\n    font-weight: 700;\n    color: rgb(51, 51, 51);\n}\n\n.playerIdentification0{\n    bottom: -30px;\n}\n\n.playerIdentification1{\n    top: -30px;\n}\n\n.playerName{\n    width: 60px;\n    max-width: 60px;\n}\n\n.battleshipPreview0,\n.carrierPreview0,\n.submarinePreview0,\n.cruiserPreview0,\n.smallshipPreview0,\n.battleshipPreview1,\n.carrierPreview1,\n.submarinePreview1,\n.cruiserPreview1,\n.smallshipPreview1{\n    display: flex;\n    border: 1px rgb(120, 120, 120) solid;\n}\n\n.battleshipPreview0 > div,\n.carrierPreview0 > div,\n.submarinePreview0 > div,\n.cruiserPreview0 > div,\n.smallshipPreview0 > div{\n    border-right: 1px rgb(120, 120, 120) solid;\n    width: 10px;\n    height: 10px;\n    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.39);\n}\n\n.battleshipPreview1 > div,\n.carrierPreview1 > div,\n.submarinePreview1 > div,\n.cruiserPreview1 > div,\n.smallshipPreview1 > div{\n    border-right: 1px black solid;\n    width: 10px;\n    height: 10px;\n    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.39);\n}\n\n.battleshipPreview0 > div:last-child,\n.carrierPreview0 > div:last-child,\n.submarinePreview0 > div:last-child,\n.cruiserPreview0 > div:last-child,\n.smallshipPreview0 > div:last-child,\n.battleshipPreview1 > div:last-child,\n.carrierPreview1 > div:last-child,\n.submarinePreview1 > div:last-child,\n.cruiserPreview1 > div:last-child,\n.smallshipPreview1 > div:last-child{\n    border-right: none\n}\n\n.message{\n    font-size: 16px;\n    font-style: italic;\n    width: max-content;\n}\n\n.rotateButton{\n    border-radius: 10%;\n    padding: 5px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    content: ' ';\n    height: 40px;\n    width: 40px;\n}\n\n.rotateButton.makeHorizontal{\n    background-image: url('./assets/makeVertical.png');\n    background-size: cover;\n    background-position: center;\n}\n\n.rotateButton.makeVertical{\n    background-image: url('./assets/makeHorizontal.png');\n    background-size: cover;\n    background-position: center;\n}\n\n.shot{\n    background-image: url('./assets/missIcon.png');\n    background-position: center;\n    background-color: initial;\n    background-size: cover;\n    transition: all 1s ease;\n}\n\n.shot.shipHit{\n    background-image: url('./assets/targetIcon.png');\n    background-position: center;\n    background-size: cover;\n    transition: all 1s ease;\n}\n\n.shot.shipHit.shipSunk{\n    background-color: rgba(255, 0, 0, 0.671);\n    background-image: none;\n    transition: all 1s ease;\n}\n\n.playerBoard .shot.shipHit.shipSunk.horizontalCarrier:nth-child(1){\n    border: 10px black solid;\n}\n\n.fakeBoard > img{\n    background: rgb(36, 36, 36);\n    border: 1px rgba(255, 255, 255, 0.329) solid;\n}\n\n@media screen and (max-width: 600px){\n    .gamePhase{\n        max-height: 100vh;\n    }\n\n    .playerArea{\n        height: auto;\n        min-height: 40%;\n        gap: 10px;\n    }\n\n    .playerBoard{\n        width: 100%;\n        height: 100%;\n        min-width: 340px;\n        max-width: 95%;\n        min-height: 280px;\n        max-height: 400px;\n    }\n\n    .playerIdentification0{\n        bottom: -25px;\n        font-size: 15px;\n    }\n\n    .message{\n        font-size: 15px;\n        text-align: center;\n    }\n\n    .playerIdentification1{\n        top: -25px;\n        font-size: 15px;\n    }\n}\n\n@media screen and (min-height: 720px){\n    .gamePhase{\n        height: 100%;\n        justify-content: center !important;\n        gap: 40px;\n    }\n}\n\n@media screen and (max-height: 800px) and (min-height: 720px){\n    .gamePhase{\n        height: 100%;\n        justify-content: center !important;\n    }\n\n    .playerArea{\n        min-height: 35%;\n        gap: 10px;\n    }\n\n    .playerBoard{\n        width: 80%;\n        height: 100%;\n        max-width: 95%;\n        max-height: 400px;\n    }\n\n    .playerIdentification0{\n        bottom: -25px;\n        font-size: 15px;\n    }\n\n    .message{\n        font-size: 15px;\n        text-align: center;\n    }\n\n    .playerIdentification1{\n        top: -25px;\n        font-size: 15px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/attackStageDom.js":
/*!*******************************!*\
  !*** ./src/attackStageDom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateBoardDom": () => (/* binding */ updateBoardDom)
/* harmony export */ });
function updateBoardDom(player){
    let yShot = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].y
    let xShot = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].x
    player.playerBoard.board[yShot][xShot].dom.classList.add('shot')

    if (player.playerBoard.board[yShot][xShot].hasShip){
        let yShipHit = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].y
        let xShipHit = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].x
        player.playerBoard.board[yShipHit][xShipHit].dom.classList.add('shipHit')
    }

    for (let i=0; i<player.playerBoard.allShips.length; i++){
        if (player.playerBoard.allShips[i].isSunk() === true){
            let yLoc = player.playerBoard.allShips[i].placedAt.y 
            let xLoc = player.playerBoard.allShips[i].placedAt.x
            if (!player.playerBoard.board[yLoc][xLoc].dom.classList.contains('shipSunk')){
                if (player.playerBoard.allShips[i].axis === 'vertical'){
                    for (let q=0; q<player.playerBoard.allShips[i].length; q++){
                        player.playerBoard.board[yLoc + q][xLoc].dom.classList.add('shipSunk')
                    }
                } else {
                    for (let q=0; q<player.playerBoard.allShips[i].length; q++){
                        player.playerBoard.board[yLoc][xLoc + q].dom.classList.add('shipSunk')
                    }
                }
            }
        }
    }
    updateShipPreviews(player)
}

// Update the previews next to player name, indicating health life of ships
function updateShipPreviews(player){
    let ships = player.playerBoard.allShips

    if (Array.from(document.querySelectorAll('.playerName'))[0].textContent === player.player.name){
        for(let i=0; i<ships.length; i++){
            let hitsTaken = ships[i].length - ships[i].remainingLength 
            if (ships[i].name === 'Battleship'){
                Array.from(document.querySelector('.battleshipPreview0').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            
            }
            if (ships[i].name === 'Carrier'){
                Array.from(document.querySelector('.carrierPreview0').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            }
            if (ships[i].name === 'Submarine'){
                if (i === 2){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview0'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 3){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview0'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Cruiser'){
                if (i === 4){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview0'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 5){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview0'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 6){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview0'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Smallship'){
                if (i === 7){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview0'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 8){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview0'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 9){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview0'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
        }    
    }

    if (Array.from(document.querySelectorAll('.playerName'))[1].textContent === player.player.name){
        for(let i=0; i<ships.length; i++){
            let hitsTaken = ships[i].length - ships[i].remainingLength 
            if (ships[i].name === 'Battleship'){
                Array.from(document.querySelector('.battleshipPreview1').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            }
            if (ships[i].name === 'Carrier'){
                Array.from(document.querySelector('.carrierPreview1').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            }
            if (ships[i].name === 'Submarine'){
                if (i === 2){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview1'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 3){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview1'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Cruiser'){
                if (i === 4){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview1'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 5){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview1'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 6){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview1'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Smallship'){
                if (i === 7){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview1'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 8){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview1'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 9){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview1'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
        }    
    }
}

/***/ }),

/***/ "./src/boardDom.js":
/*!*************************!*\
  !*** ./src/boardDom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayerAreas": () => (/* binding */ createPlayerAreas),
/* harmony export */   "createPlayerBoard": () => (/* binding */ createPlayerBoard)
/* harmony export */ });
/* harmony import */ var _assets_battleshipLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/battleshipLogo.png */ "./src/assets/battleshipLogo.png");


function createPlayerAreas(playerNumber){
    if (playerNumber === 0){
        const gamePhase = document.createElement('div');
        gamePhase.classList.add('gamePhase');
        document.body.appendChild(gamePhase);
        let battleshipLogo = document.createElement('img');
        battleshipLogo.classList.add('battleshipLogo')
        battleshipLogo.src = _assets_battleshipLogo_png__WEBPACK_IMPORTED_MODULE_0__;
        gamePhase.appendChild(battleshipLogo) 
    }
    // Player Area
    const playerArea = document.createElement('div');
    document.querySelector('.gamePhase').appendChild(playerArea);
    playerArea.classList.add('playerArea');
    const message = document.createElement('div');
    playerArea.appendChild(message);
    message.classList.add('message');
    const rotateButton = document.createElement('div');
    playerArea.appendChild(rotateButton);
    rotateButton.classList.add('rotateButton', 'makeVertical', 'makeHorizontal')
    rotateButton.classList.toggle('makeVertical')
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('playerBoard');
    playerArea.appendChild(playerBoard);
}

function createPlayerBoard(board){
    let playerBoard = document.querySelector('.playerBoard');
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            board[i][q].dom = document.createElement('div');
            board[i][q].dom.classList.add('active');
            board[i][q].dom.classList.add('square')
            board[i][q].dom.classList.toggle('active');
            board[i][q].dom.location = { y: i, x: q }
            if(i === 0){
                if (q === 0){
                    board[i][q].dom.classList.add('topLeft')
                }
                if (q === 9){
                    board[i][q].dom.classList.add('topRight')
                }
            }
            if(i === 9){
                if (q === 0){
                    board[i][q].dom.classList.add('bottomLeft')
                }
                if (q === 9){
                    board[i][q].dom.classList.add('bottomRight')
                }
            }
            playerBoard.appendChild(board[i][q].dom)
        }
    }
}

/***/ }),

/***/ "./src/displayBoards.js":
/*!******************************!*\
  !*** ./src/displayBoards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayBoards": () => (/* binding */ displayBoards)
/* harmony export */ });
function displayBoards(player, num){
    const gamePhase = document.querySelector('.gamePhase');
    gamePhase.style.justifyContent = 'space-around'

    let playerArea = document.createElement('div')
    playerArea.classList.add('playerArea')
    gamePhase.appendChild(playerArea);

    if (num === 0){
        let message = document.querySelector('.message');
        let player1Instructions = document.createElement('div');
        message.appendChild(player1Instructions)
        let player2Instructions = document.createElement('div');
        message.appendChild(player2Instructions)
        message.textContent = '';
        message.classList.add('message')
        gamePhase.appendChild(message)
        document.querySelector('.playerArea').remove();
        document.querySelector('.battleshipLogo').remove();
    }

    let playerBoard = document.createElement('div');
    playerBoard.classList.add('playerBoard')
    playerArea.appendChild(playerBoard);
    
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            playerBoard.appendChild(player.playerBoard.board[i][q].dom);
            if (player.playerBoard.board[i][q].hasShip === true){
                player.playerBoard.board[i][q].dom.classList.add('active')
                player.playerBoard.board[i][q].dom.classList.add(`${player.playerBoard.board[i][q].ship.axis}` + `${player.playerBoard.board[i][q].ship.name}`)
            }
        }
    }
}


/***/ }),

/***/ "./src/displayShipsOnBoard.js":
/*!************************************!*\
  !*** ./src/displayShipsOnBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPlayerShipsOnBoard": () => (/* binding */ displayPlayerShipsOnBoard)
/* harmony export */ });
/* harmony import */ var _shipImages_battleship_horizontal_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipImages/battleship-horizontal.svg */ "./src/shipImages/battleship-horizontal.svg");
/* harmony import */ var _shipImages_battleship_vertical_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipImages/battleship-vertical.svg */ "./src/shipImages/battleship-vertical.svg");
/* harmony import */ var _shipImages_carrier_horizontal_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipImages/carrier-horizontal.svg */ "./src/shipImages/carrier-horizontal.svg");
/* harmony import */ var _shipImages_carrier_vertical_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipImages/carrier-vertical.svg */ "./src/shipImages/carrier-vertical.svg");
/* harmony import */ var _shipImages_cruiser_horizontal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipImages/cruiser-horizontal.svg */ "./src/shipImages/cruiser-horizontal.svg");
/* harmony import */ var _shipImages_cruiser_vertical_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipImages/cruiser-vertical.svg */ "./src/shipImages/cruiser-vertical.svg");
/* harmony import */ var _shipImages_small_ship_horizontal_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipImages/small-ship-horizontal.svg */ "./src/shipImages/small-ship-horizontal.svg");
/* harmony import */ var _shipImages_small_ship_vertical_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipImages/small-ship-vertical.svg */ "./src/shipImages/small-ship-vertical.svg");
/* harmony import */ var _shipImages_submarine_horizontal_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shipImages/submarine-horizontal.svg */ "./src/shipImages/submarine-horizontal.svg");
/* harmony import */ var _shipImages_submarine_vertical_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipImages/submarine-vertical.svg */ "./src/shipImages/submarine-vertical.svg");











// Using the dimensions of 'square' to place responsive ships on board.

function displayPlayerShipsOnBoard(playerBoard, count){
    let arrayOfPhysicalShips = [];

    if (document.querySelector('.fakeBoard') === null){
        let fakeBoard = document.createElement('div');
        fakeBoard.textContent = '';
        fakeBoard.classList.add('fakeBoard');
        document.querySelector('.playerBoard').appendChild(fakeBoard)
    }

    let square = document.querySelector('.square').getClientRects()[0]

    arrayOfPhysicalShips[count] = document.createElement('img');

    if (playerBoard.allShips[count].name === 'Battleship'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = _shipImages_battleship_horizontal_svg__WEBPACK_IMPORTED_MODULE_0__
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 5}px`
        } else {
            arrayOfPhysicalShips[count].src = _shipImages_battleship_vertical_svg__WEBPACK_IMPORTED_MODULE_1__
            arrayOfPhysicalShips[count].style.height = `${square.height * 5}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Carrier'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = _shipImages_carrier_horizontal_svg__WEBPACK_IMPORTED_MODULE_2__
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 4}px`
        } else {
            arrayOfPhysicalShips[count].src = _shipImages_carrier_vertical_svg__WEBPACK_IMPORTED_MODULE_3__
            arrayOfPhysicalShips[count].style.height = `${square.height * 4}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Submarine'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = _shipImages_submarine_horizontal_svg__WEBPACK_IMPORTED_MODULE_8__
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 3}px`
        } else {
            arrayOfPhysicalShips[count].src = _shipImages_submarine_vertical_svg__WEBPACK_IMPORTED_MODULE_9__
            arrayOfPhysicalShips[count].style.height = `${square.height * 3}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Cruiser'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = _shipImages_cruiser_horizontal_svg__WEBPACK_IMPORTED_MODULE_4__
            arrayOfPhysicalShips[count].style.height = `${square.height}px`
            arrayOfPhysicalShips[count].style.width = `${square.width * 2}px`
        } else {
            arrayOfPhysicalShips[count].src = _shipImages_cruiser_vertical_svg__WEBPACK_IMPORTED_MODULE_5__
            arrayOfPhysicalShips[count].style.height = `${square.height * 2}px`
            arrayOfPhysicalShips[count].style.width = `${square.width}px`
        }
    } else if (playerBoard.allShips[count].name === 'Smallship'){
        if (playerBoard.allShips[count].axis === 'horizontal'){
            arrayOfPhysicalShips[count].src = _shipImages_small_ship_horizontal_svg__WEBPACK_IMPORTED_MODULE_6__
        } else {
            arrayOfPhysicalShips[count].src = _shipImages_small_ship_vertical_svg__WEBPACK_IMPORTED_MODULE_7__
        }
        arrayOfPhysicalShips[count].style.height = `${square.height}px`
        arrayOfPhysicalShips[count].style.width = `${square.width}px`
    } 

    document.querySelector('.fakeBoard').appendChild(arrayOfPhysicalShips[count])

    arrayOfPhysicalShips[count].style.position = 'absolute';
    arrayOfPhysicalShips[count].style.left = ((playerBoard.allShips[count].placedAt.x) * 10) + '%'
    arrayOfPhysicalShips[count].style.top = ((playerBoard.allShips[count].placedAt.y) * 10) + '%'
}

// A copy of displayPlayerShipsOnBoard function but this keeps the ships on the board against the bot
// Not used at the moment; ship images not shown on board
// export function showShipsSingleplayer(playerBoard){
//     let arrayOfPhysicalShips = [];

//     if (document.querySelector('.fakeBoard') === null){
//         let fakeBoard = document.createElement('div');
//         fakeBoard.textContent = '';
//         fakeBoard.classList.add('fakeBoard');
//         document.querySelector('.playerBoard').appendChild(fakeBoard)
//     }

//     let square = document.querySelector('.square').getClientRects()[0]
//     let totalShips = playerBoard.allShips.length

//     for (let i=0; i<totalShips; i++){
//         arrayOfPhysicalShips[i] = document.createElement('img');
//         if (playerBoard.allShips[i].name === 'Battleship'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalBattleship
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 5}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalBattleship
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 5}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         }else if (playerBoard.allShips[i].name === 'Carrier'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalCarrier
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 4}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalCarrier
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 4}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         } else if (playerBoard.allShips[i].name === 'Submarine'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalSubmarine
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 3}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalSubmarine
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 3}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         } else if (playerBoard.allShips[i].name === 'Cruiser'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalCruiser
//                 arrayOfPhysicalShips[i].style.height = `${square.height}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width * 2}px`
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalCruiser
//                 arrayOfPhysicalShips[i].style.height = `${square.height * 2}px`
//                 arrayOfPhysicalShips[i].style.width = `${square.width}px`
//             }
//         } else if (playerBoard.allShips[i].name === 'Smallship'){
//             if (playerBoard.allShips[i].axis === 'horizontal'){
//                 arrayOfPhysicalShips[i].src = horizontalSmallship
//             } else {
//                 arrayOfPhysicalShips[i].src = verticalSmallship
//             }
//             arrayOfPhysicalShips[i].style.height = `${square.height}px`
//             arrayOfPhysicalShips[i].style.width = `${square.width}px`
//         } 
//         document.querySelector('.fakeBoard').appendChild(arrayOfPhysicalShips[i])
//         arrayOfPhysicalShips[i].style.position = 'absolute';
//         arrayOfPhysicalShips[i].style.left = ((playerBoard.allShips[i].placedAt.x) * 10) + '%'
//         arrayOfPhysicalShips[i].style.top = ((playerBoard.allShips[i].placedAt.y) * 10) + '%'
//     }
// }

/***/ }),

/***/ "./src/gameConclusion.js":
/*!*******************************!*\
  !*** ./src/gameConclusion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reportResult": () => (/* binding */ reportResult)
/* harmony export */ });
function reportResult(players){
    if (players[0].player.winner === true){
        document.querySelector('.message').textContent = players[0].player.name + ' has won the game!'
    } else {
        document.querySelector('.message').textContent = players[1].player.name + ' has won the game!'
    }
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


class Gameboard{
    constructor(){
        this.board = [];
        this.allShips = [];
        this.allShipsDestroyed;
        this.chronologicalGeneralDamage = [];
        this.chronologicalShipDamage = [];
    }
    init(){
        for (let y=0; y<10; y++){
            this.board[y] = [];
            for (let x=0; x<10; x++){
                this.board[y][x] = { hasShip: false, isShot: false };
            }
        }
    }
    placeShip(y, x, shipName, length, axis){
        if (axis === 'horizontal'){
            for (let i=0; i<length; i++){
                if (((x + i) > 9) || (this.board[y][x+i].hasShip === true)){
                    throw new Error('invalid horizontal position');             
                }
            }
        } else {
            for (let i=0; i<length; i++){
                if (((y + i) > 9) || (this.board[y+i][x].hasShip === true)){
                    throw new Error('invalid vertical position');
                }
            }
        }
        
        this.allShips.push(new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipName, length, axis))
        this.allShips[this.allShips.length-1].placedAt = { y: y, x:x }
        
        if (axis === 'horizontal'){
            for (let i=0; i<length; i++){
                this.board[y][x + i].hasShip = true;
                this.board[y][x + i].ship = this.allShips[this.allShips.length - 1];
            }
        } else {
            for (let i=0; i<length; i++){
                this.board[y + i][x].hasShip = true;
                this.board[y + i][x].ship = this.allShips[this.allShips.length - 1];
            }
        }
    }
    receiveAttack(y, x){
        if (this.board[y][x].isShot === true){
            throw new Error('invalid attacking location')
        } else {
            this.chronologicalGeneralDamage.push({y: y, x:x});
            this.board[y][x].isShot = true;
            if (this.board[y][x].hasShip){
                this.chronologicalShipDamage.push({y: y, x:x});
                this.board[y][x].ship.hit();
                this.board[y][x].ship.isSunk();
                this.checkShips();
            }
        }
        
    }
    checkShips(){
        let count = 0;
        for (let i=0; i < this.allShips.length; i++){
            if (this.allShips[i].isSunk() === true){
                count++;
            }
            if (count === this.allShips.length){
                this.allShipsDestroyed = true;
            }
        }
    }
}

/***/ }),

/***/ "./src/placeBotShips.js":
/*!******************************!*\
  !*** ./src/placeBotShips.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeBotShips": () => (/* binding */ placeBotShips),
/* harmony export */   "populateBotBoard": () => (/* binding */ populateBotBoard)
/* harmony export */ });
let axis;
let randomAxis;

function placeBotShips(botBoard){
   placeBotBattleship(botBoard);
   placeBotCarrier(botBoard);
   placeBotSubmarine(botBoard);
   placeBotSubmarine(botBoard);
   placeBotCruiser(botBoard);
   placeBotCruiser(botBoard);
   placeBotCruiser(botBoard);
   placeBotSmallship(botBoard);
   placeBotSmallship(botBoard);
   placeBotSmallship(botBoard);
}

function placeBotBattleship(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Battleship', 5, axis)
    } catch (error){
        placeBotBattleship(botBoard)
    }
}

function placeBotCarrier(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Carrier', 4, axis)
    } catch (error){
        placeBotCarrier(botBoard)
    }
}

function placeBotSubmarine(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Submarine', 3, axis)
    } catch (error){
        placeBotSubmarine(botBoard);
    }
}

function placeBotCruiser(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Cruiser', 2, axis)
    } catch (error){
        placeBotCruiser(botBoard)
    }
}

function placeBotSmallship(botBoard){
    randomAxis = Math.floor(Math.random() * 2)
    if (randomAxis === 0){
        axis = 'horizontal'; 
    } else {
        axis = 'vertical';
    }
    try {
        botBoard.placeShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 'Smallship', 1, axis)
    } catch (error){
        placeBotSmallship(botBoard)
    }
}

function populateBotBoard(botBoard){
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            botBoard.board[i][q].dom = document.createElement('div');
            botBoard.board[i][q].dom.classList.add('square')
            if(i === 0){
                if (q === 0){
                    botBoard.board[i][q].dom.classList.add('topLeft')
                }
                if (q === 9){
                    botBoard.board[i][q].dom.classList.add('topRight')
                }
            }
            if(i === 9){
                if (q === 0){
                    botBoard.board[i][q].dom.classList.add('bottomLeft')
                }
                if (q === 9){
                    botBoard.board[i][q].dom.classList.add('bottomRight')
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/placeShipsStage.js":
/*!********************************!*\
  !*** ./src/placeShipsStage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShipsStage": () => (/* binding */ placeShipsStage),
/* harmony export */   "removeActiveClass": () => (/* binding */ removeActiveClass)
/* harmony export */ });
/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupGame */ "./src/setupGame.js");
/* harmony import */ var _displayShipsOnBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayShipsOnBoard */ "./src/displayShipsOnBoard.js");




let highlightShipPlacementTemp;
let shipToDomTemp;
let count;
let shipsInfo = [];

function Ship(shipName, shipLength){
    this.name = shipName,
    this.length = shipLength,
    this.message = 'place your ' + this.name.substring(0, this.name.length) + ` (${this.length} ${this.length === 1 ? 'square' : 'squares'})`
}

function supplyShipsInfo(){
    shipsInfo[0] = new Ship('Battleship', 5)
    shipsInfo[1] = new Ship('Carrier', 4)
    shipsInfo[2] = new Ship('Submarine', 3)
    shipsInfo[3] = new Ship('Submarine', 3)
    shipsInfo[4] = new Ship('Cruiser', 2)
    shipsInfo[5] = new Ship('Cruiser', 2)
    shipsInfo[6] = new Ship('Cruiser', 2)
    shipsInfo[7] = new Ship('Smallship', 1)
    shipsInfo[8] = new Ship('Smallship', 1)
    shipsInfo[9] = new Ship('Smallship', 1)
}

function placeShipsStage(pBoard, playerNumber){
    count = 0;
    supplyShipsInfo();
    let playerBoardDom = document.querySelector('.playerBoard');
    let rotateButton = document.querySelector('.rotateButton');
    rotateButton.addEventListener('click', rotateShip)
    playerBoardDom.addEventListener('mouseout', removeActiveClass)
    
    // Battleship first, other ships next
    placeShip(pBoard, playerNumber);
}

function placeShip(pBoard, playerNumber){
    document.querySelector('.message').textContent = pBoard.mode === 'singlePlayer' ? `Player, ${shipsInfo[count].message}` : (playerNumber === 0 ? _setupGame__WEBPACK_IMPORTED_MODULE_0__.p1Name : _setupGame__WEBPACK_IMPORTED_MODULE_0__.p2Name) + ', ' + shipsInfo[count].message;
    let playerBoard = document.querySelector('.playerBoard')
    playerBoard.addEventListener('mouseover', highlightShipPlacementTemp = (ev) => highlightShipPlacement(ev, pBoard))
    playerBoard.addEventListener('click', shipToDomTemp = (ev) => shipToDom(ev, pBoard, playerNumber))
}

// Highlights the board to see where the ship will be placed on the board
function highlightShipPlacement(ev, pBoard){
    let activeArray = Array.from(document.querySelectorAll('.active'))
        for (let i=0; i<activeArray.length; i++){
            activeArray[i].classList.remove('active');    
        }
        for(let i=0; i<10; i++){
            for(let q=0; q<10; q++){
                if (ev.target === pBoard.board[i][q].dom){   
                    if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
                        for (let z=0; z<shipsInfo[count].length;z++){
                            if (!(q + z > 9)){
                                pBoard.board[i][q+z].dom.classList.toggle('active')
                            }
                        }
                    }
                    if (document.querySelector('.rotateButton').classList.contains('makeVertical')){
                        for (let z=0; z<shipsInfo[count].length;z++){
                            if (!(i + z > 9)){
                                pBoard.board[i+z][q].dom.classList.toggle('active')
                            }
                        }
                    } 
                }
            }
        }
}

function shipToDom(ev, pBoard, playerNumber){
    let playerBoard = document.querySelector('.playerBoard')
    let axis;
    playerBoard.removeEventListener('click', shipToDomTemp)
    playerBoard.removeEventListener('mouseover', highlightShipPlacementTemp)
    if (!(ev.target.classList.contains('square'))){
        placeShip(pBoard, playerNumber);
    }else {
        if (document.querySelector('.rotateButton').classList.contains('makeHorizontal')){
            axis = 'horizontal';
        } else { 
            axis = 'vertical'
        }
        // If the position to place the ship is valid, then continue with the next ship.
        if (checkShipValidity(pBoard, ev.target.location.y, ev.target.location.x, axis, shipsInfo[count].name, shipsInfo[count].length) === true){
            (0,_displayShipsOnBoard__WEBPACK_IMPORTED_MODULE_1__.displayPlayerShipsOnBoard)(pBoard, count)
            count++
            if (count === shipsInfo.length){
                if (playerNumber === 0){
                    createDeployButton();
                    document.querySelector('.message').textContent = 'All ships have been placed. You may now deploy.'
                    document.querySelector('.deployButton').addEventListener('click', _setupGame__WEBPACK_IMPORTED_MODULE_0__.postShipDeployment)
                } else if (playerNumber === 1){
                    createDeployButton();
                    document.querySelector('.message').textContent = 'All ships have been placed. You may now deploy.'
                    document.querySelector('.deployButton').addEventListener('click', _setupGame__WEBPACK_IMPORTED_MODULE_0__.multiplayerAttackingStage)
                }
            } else {
                placeShip(pBoard, playerNumber)
            }
        } else {
            placeShip(pBoard, playerNumber)
        }
    }
}

function checkShipValidity(game, y, x, axis, name, length){
    try {
        game.placeShip(y, x, name, length, axis)
        return true;
    } catch (error){
        return false;
    }
}

function rotateShip(){
    document.querySelector('.rotateButton').classList.toggle('makeVertical');
    document.querySelector('.rotateButton').classList.toggle('makeHorizontal');
}

function removeActiveClass(){
    let activeArray = Array.from(document.querySelectorAll('.active'))
    for (let i=0; i<activeArray.length; i++){
        activeArray[i].classList.remove('active');    
    }
}

function createDeployButton(){
    let deployButton = document.createElement('div');
    deployButton.classList.add('deployButton');
    document.querySelector('.gamePhase').appendChild(deployButton);
    deployButton.textContent = 'DEPLOY';
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player extends _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard{
    constructor(name, receiveAttack){
        super(receiveAttack)
        this.name = name;
        this.usedAttacks = [];
    }
    attack(y, x, enemy){
        if (this.name === 'Bot'){
            if (this.difficulty === 'novice'){
                let ycord = Math.floor(Math.random() * 10);
                let xcord = Math.floor(Math.random() * 10);
    
                enemy.receiveAttack(ycord, xcord)
            } else if (this.difficulty === 'expert'){
                let negativeOrPositive = Math.random() < 0.5 ? -1 : 1                

                if (enemy.chronologicalShipDamage.length > 0){
                    let lastAttack = enemy.chronologicalShipDamage[enemy.chronologicalShipDamage.length - 1]

                    let attackLocationY = Math.random() < 0.5 ? lastAttack.y + negativeOrPositive : lastAttack.y

                    let attackLocationX = attackLocationY === lastAttack.y ? lastAttack.x + negativeOrPositive : lastAttack.x

                    if (attackLocationX >= 0 || attackLocationX <= 9 || attackLocationY >= 0 || attackLocationY >= 9){
                        if (!enemy.board[attackLocationY][attackLocationX].isShot){
                            enemy.receiveAttack(attackLocationY, attackLocationX)
                        } else {
                            let ycord = Math.floor(Math.random() * 10);
                            let xcord = Math.floor(Math.random() * 10);
    
                            enemy.receiveAttack(ycord, xcord)
                        }
                    } else {
                        console.log('will randomly attack');
                        let ycord = Math.floor(Math.random() * 10);
                        let xcord = Math.floor(Math.random() * 10);
    
                        enemy.receiveAttack(ycord, xcord)
                    }
                    
                } else {
                    let ycord = Math.floor(Math.random() * 10);
                    let xcord = Math.floor(Math.random() * 10);
    
                    enemy.receiveAttack(ycord, xcord)
                }
            }
            
        } else {
            enemy.receiveAttack(y, x);
        }
    }
}

/***/ }),

/***/ "./src/setupGame.js":
/*!**************************!*\
  !*** ./src/setupGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multiplayerAttackingStage": () => (/* binding */ multiplayerAttackingStage),
/* harmony export */   "p1Name": () => (/* binding */ p1Name),
/* harmony export */   "p2Name": () => (/* binding */ p2Name),
/* harmony export */   "players": () => (/* binding */ players),
/* harmony export */   "postShipDeployment": () => (/* binding */ postShipDeployment),
/* harmony export */   "setupPlayer": () => (/* binding */ setupPlayer)
/* harmony export */ });
/* harmony import */ var _boardDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDom.js */ "./src/boardDom.js");
/* harmony import */ var _placeShipsStage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShipsStage.js */ "./src/placeShipsStage.js");
/* harmony import */ var _placeBotShips_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeBotShips.js */ "./src/placeBotShips.js");
/* harmony import */ var _displayBoards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayBoards.js */ "./src/displayBoards.js");
/* harmony import */ var _takeTurnsAttacking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./takeTurnsAttacking.js */ "./src/takeTurnsAttacking.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.js */ "./src/player.js");








let players = [];
let p1Name;
let p2Name;

let difficultyChosen;

// Once all ships are deployed, the game is set up, displaying both boards on screen. Ready for attack.

// Based on menu options, the mode is either 'single player' or 'multi player'.
// If single player is chosen, there are two difficulties: novice and expert.

function setupPlayer(mode, difficulty, num){
    if (num === 0 && mode !== 'singlePlayer'){
        p1Name = document.querySelector('.inputPlayer1Name').value
        p2Name = document.querySelector('.inputPlayer2Name').value
        leaveStartingMenu();
    }
    let player;
    let name;
    let playerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_5__.Gameboard();
    difficultyChosen = difficulty
    playerBoard.init();
    if (mode === 'singlePlayer'){
        player = new _player_js__WEBPACK_IMPORTED_MODULE_6__.Player('Human');
    } else {
        if (num === 0){
            name = p1Name;
        } else{
            name = p2Name;
        }
        player = new _player_js__WEBPACK_IMPORTED_MODULE_6__.Player(name)
    }

    players[num] = {
        player: player,
        playerBoard: playerBoard
    };

    if (mode === 'singlePlayer'){
        players[0].playerBoard.mode = 'singlePlayer'
    }


    (0,_boardDom_js__WEBPACK_IMPORTED_MODULE_0__.createPlayerAreas)(num);
    (0,_boardDom_js__WEBPACK_IMPORTED_MODULE_0__.createPlayerBoard)(players[num].playerBoard.board);
    (0,_placeShipsStage_js__WEBPACK_IMPORTED_MODULE_1__.placeShipsStage)(players[num].playerBoard, num);    
    document.querySelector('.gamePhase').classList.add('preStage')
}

function postShipDeployment(){
    document.querySelector('.gamePhase').classList.remove('preStage')
    if (players[0].playerBoard.mode === 'singlePlayer'){
        document.querySelector('.deployButton').removeEventListener('click', postShipDeployment)
        document.querySelector('.deployButton').remove();
        createBotBoard();
        (0,_displayBoards_js__WEBPACK_IMPORTED_MODULE_3__.displayBoards)(players[0], 0);
        (0,_displayBoards_js__WEBPACK_IMPORTED_MODULE_3__.displayBoards)(players[1], 1);
        addPlayerIdentification(players[0], 0)
        addPlayerIdentification(players[1], 1)
        ;(0,_placeShipsStage_js__WEBPACK_IMPORTED_MODULE_1__.removeActiveClass)();
        (0,_takeTurnsAttacking_js__WEBPACK_IMPORTED_MODULE_4__.takeTurnsAttacking)();
    } else{
        document.querySelector('.deployButton').removeEventListener('click', postShipDeployment)
        clearScreen();
        setupPlayer('multiPlayer', 'multi', 1)
    }
}

function multiplayerAttackingStage(){
    document.querySelector('.gamePhase').classList.remove('preStage')
    document.querySelector('.deployButton').removeEventListener('click', multiplayerAttackingStage)
    document.querySelector('.deployButton').remove();
    (0,_displayBoards_js__WEBPACK_IMPORTED_MODULE_3__.displayBoards)(players[0], 0);
    (0,_displayBoards_js__WEBPACK_IMPORTED_MODULE_3__.displayBoards)(players[1], 1);
    addPlayerIdentification(players[0], 0);
    addPlayerIdentification(players[1], 1);
    (0,_placeShipsStage_js__WEBPACK_IMPORTED_MODULE_1__.removeActiveClass)();
    (0,_takeTurnsAttacking_js__WEBPACK_IMPORTED_MODULE_4__.takeTurnsAttacking)();
}

function createBotBoard(){

    let player2Board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_5__.Gameboard();
    player2Board.init();
    let player2 = new _player_js__WEBPACK_IMPORTED_MODULE_6__.Player('Bot');
    player2.difficulty = difficultyChosen

    players[1] = {
        player: player2,
        playerBoard: player2Board
    }
    ;(0,_placeBotShips_js__WEBPACK_IMPORTED_MODULE_2__.populateBotBoard)(players[1].playerBoard)
    ;(0,_placeBotShips_js__WEBPACK_IMPORTED_MODULE_2__.placeBotShips)(players[1].playerBoard);
}

function leaveStartingMenu(){
    document.querySelector('.startingMenu').remove();
}

function clearScreen(){
    document.querySelector('.playerArea').remove();
    document.querySelector('.deployButton').remove();
}

// Adding name & ships previews to keep track of ships destroyed

function addPlayerIdentification(player, num){
    const playerIdentification = document.createElement('div');
    playerIdentification.classList.add('playerIdentification' + num)
    const playerName = document.createElement('div');
    playerName.classList.add('playerName')
    playerIdentification.appendChild(playerName)

    playerName.textContent = player.player.name;

    // Battleship
    const battleshipPreview = document.createElement('div')
    battleshipPreview.classList.add('battleshipPreview' + num)
    playerIdentification.appendChild(battleshipPreview)
    let battleshipChildren = []
    for (let i=0; i<5; i++){
        battleshipChildren[i] = document.createElement('div')
        battleshipPreview.appendChild(battleshipChildren[i])
    }

    // Carrier
    const carrierPreview = document.createElement('div')
    carrierPreview.classList.add('carrierPreview' + num)
    playerIdentification.appendChild(carrierPreview)
    let carrierChildren = []
    for (let i=0; i<4; i++){
        carrierChildren[i] = document.createElement('div')
        carrierPreview.appendChild(carrierChildren[i])
    }
    
    // Submarines
    let submarinePreviews = []
    let submarineChildren = []
    for (let q=0; q<2; q++){
        submarinePreviews[q] = document.createElement('div')
        submarinePreviews[q].classList.add('submarinePreview' + num)
        playerIdentification.appendChild(submarinePreviews[q])
        for (let i=0; i<3; i++){
            submarineChildren[i] = document.createElement('div')
            submarinePreviews[q].appendChild(submarineChildren[i])
        }
    }

    // Cruisers
    let cruiserPreviews = []
    let cruiserChildren = []
    for (let q=0; q<3; q++){
        cruiserPreviews[q] = document.createElement('div')
        cruiserPreviews[q].classList.add('cruiserPreview' + num)
        playerIdentification.appendChild(cruiserPreviews[q])
        for (let i=0; i<2; i++){
            cruiserChildren[i] = document.createElement('div')
            cruiserPreviews[q].appendChild(cruiserChildren[i])
        }
    }

    // Smallships
    let smallshipPreviews = []
    let smallshipChildren = []
    for (let q=0; q<3; q++){
        smallshipPreviews[q] = document.createElement('div')
        smallshipPreviews[q].classList.add('smallshipPreview' + num)
        playerIdentification.appendChild(smallshipPreviews[q])
        smallshipChildren[q] = document.createElement('div')
        smallshipPreviews[q].appendChild(smallshipChildren[q])
    }

    document.querySelectorAll('.playerBoard')[num].appendChild(playerIdentification)
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
class Ship{
    constructor(name, length, axis){
        this.name = name;
        this.length = length;
        this.remainingLength = length
        this.axis = axis;
        this.hit = function(){
            this.remainingLength--;
        }
        this.isSunk = function(){
            if (this.remainingLength === 0){
                return true;
            } else {
                return false;
            }
        }
    }
}

/***/ }),

/***/ "./src/takeTurnsAttacking.js":
/*!***********************************!*\
  !*** ./src/takeTurnsAttacking.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeTurnsAttacking": () => (/* binding */ takeTurnsAttacking)
/* harmony export */ });
/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupGame */ "./src/setupGame.js");
/* harmony import */ var _gameConclusion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameConclusion */ "./src/gameConclusion.js");
/* harmony import */ var _attackStageDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attackStageDom.js */ "./src/attackStageDom.js");




let count = 0;
let areaHit = {};

function takeTurnsAttacking(){
    document.querySelector('.message').textContent = _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].player.name + ' It\'s your turn to attack! Pick a location to shoot at.'
    attackPlayer2();
}

function attackPlayer2(){
    if (_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.mode === 'singlePlayer'){
        if (count === 0){
            document.querySelector('.message').textContent = 'It\'s your turn to attack!';
            count++;
        }
    } else {
        document.querySelector('.message').textContent = _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].player.name + ', it\'s your turn to attack.';
    }
    document.querySelectorAll('.playerBoard')[1].addEventListener('click', processPlayer2Target)
}

// Player 1 has clicked on player 2 board, attack is processed here

function processPlayer2Target(ev){
    let caught = false;
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            if (_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].playerBoard.board[i][q].dom === ev.target){
                document.querySelectorAll('.playerBoard')[1].removeEventListener('click', processPlayer2Target)
                // Attempt shot at clicked location. If invalid, redo whole process.
                try{
                    _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].player.attack(i, q, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].playerBoard)
                } catch{
                    caught = true;
                    document.querySelector('.message').textContent = 'Invalid shot. Pick another location.'
                    setTimeout(attackPlayer2, 1250)
                }
                if (!caught){
                    (0,_attackStageDom_js__WEBPACK_IMPORTED_MODULE_2__.updateBoardDom)(_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1])
                    setTimeout(communicateAttackInfo, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0], _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1], i, q)
                    if(_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].playerBoard.allShipsDestroyed === true){
                        _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].player.winner = true;
                        setTimeout(_gameConclusion__WEBPACK_IMPORTED_MODULE_1__.reportResult, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players);
                    } else {
                        setTimeout(attackPlayer1, 1250)
                    }
                }
            }
        }
    }
}

function attackPlayer1(){
    let caught = false;
    if (_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.mode === 'singlePlayer'){
        try{
            _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].player.attack(0, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard);
        } catch{
            attackPlayer1();
        }
        if (!caught){
            areaHit.y = _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.chronologicalGeneralDamage[_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.chronologicalGeneralDamage.length - 1].y;
            areaHit.x = _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.chronologicalGeneralDamage[_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.chronologicalGeneralDamage.length - 1].x;
            setTimeout(communicateAttackInfo, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1], _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0], areaHit.y, areaHit.x);
            (0,_attackStageDom_js__WEBPACK_IMPORTED_MODULE_2__.updateBoardDom)(_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0])
            if (_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.allShipsDestroyed === true){
                _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].player.winner = true;
                setTimeout(_gameConclusion__WEBPACK_IMPORTED_MODULE_1__.reportResult, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players);
            } else {
                setTimeout(attackPlayer2, 1250)
            }
        }
        
    } else {
        document.querySelector('.message').textContent = _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].player.name + ', it\'s your turn to attack.';
        document.querySelectorAll('.playerBoard')[0].addEventListener('click', processPlayer1Target)
    }
}

function processPlayer1Target(ev){
    let caught = false;
    for (let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            if (_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.board[i][q].dom === ev.target){
            document.querySelectorAll('.playerBoard')[0].removeEventListener('click', processPlayer1Target)
                try{
                    _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].player.attack(i, q, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard)
                } catch{
                    caught = true;
                    document.querySelector('.message').textContent = 'Invalid shot. Pick another location.'
                    setTimeout(attackPlayer1, 1250);
                }
                if (!caught){
                    (0,_attackStageDom_js__WEBPACK_IMPORTED_MODULE_2__.updateBoardDom)(_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0])
                    setTimeout(communicateAttackInfo, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1], _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0], i, q)
                    if(_setupGame__WEBPACK_IMPORTED_MODULE_0__.players[0].playerBoard.allShipsDestroyed === true){
                        _setupGame__WEBPACK_IMPORTED_MODULE_0__.players[1].player.winner = true;
                        setTimeout(_gameConclusion__WEBPACK_IMPORTED_MODULE_1__.reportResult, 0, _setupGame__WEBPACK_IMPORTED_MODULE_0__.players);
                    } else {
                        setTimeout(attackPlayer2, 1250)
                    }
                }
                
            }
        }
    }
}

function communicateAttackInfo(offense, defense, y, x){
    if (defense.playerBoard.board[y][x].hasShip === true){
        if (offense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'The bot has shot.. and they hit your ' + makeLowercase(defense.playerBoard.board[y][x].ship.name) + '!';  
        }else if (defense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'You shoot.. and managed to hit the bot\'s ' + makeLowercase(defense.playerBoard.board[y][x].ship.name) + '!';  
        }else if (offense.player.name !== 'bot'){
            document.querySelector('.message').textContent = offense.player.name + ' has shot.. and they hit ' + defense.player.name + '\'s' + ' ' + makeLowercase(defense.playerBoard.board[y][x].ship.name) + '!';  
        }
    }
    else {
        if (offense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'The bot has shot.. and they missed.'  
        }else if (defense.player.name === 'bot'){
            document.querySelector('.message').textContent = 'You shoot.. and you hit nothing.'  
        }else if(offense.player.name !== 'bot'){
            document.querySelector('.message').textContent = offense.player.name + ' has shot.. and they hit nothing.'  
        }
    }
}

function makeLowercase(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
}

/***/ }),

/***/ "./src/assets/battleshipImage.png":
/*!****************************************!*\
  !*** ./src/assets/battleshipImage.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a740991c74261e6fd56.png";

/***/ }),

/***/ "./src/assets/battleshipLogo.png":
/*!***************************************!*\
  !*** ./src/assets/battleshipLogo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4be3df741b793215f8cb.png";

/***/ }),

/***/ "./src/assets/fonts/Ubuntu-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Ubuntu-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

/***/ }),

/***/ "./src/assets/makeHorizontal.png":
/*!***************************************!*\
  !*** ./src/assets/makeHorizontal.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "980b543822a1bf762052.png";

/***/ }),

/***/ "./src/assets/makeVertical.png":
/*!*************************************!*\
  !*** ./src/assets/makeVertical.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "886d1ad38da31defe057.png";

/***/ }),

/***/ "./src/assets/missIcon.png":
/*!*********************************!*\
  !*** ./src/assets/missIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "155e56395d01abed0f88.png";

/***/ }),

/***/ "./src/assets/targetIcon.png":
/*!***********************************!*\
  !*** ./src/assets/targetIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "321a573e4328febfcba0.png";

/***/ }),

/***/ "./src/shipImages/battleship-horizontal.svg":
/*!**************************************************!*\
  !*** ./src/shipImages/battleship-horizontal.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be44c07688751c771a5d.svg";

/***/ }),

/***/ "./src/shipImages/battleship-vertical.svg":
/*!************************************************!*\
  !*** ./src/shipImages/battleship-vertical.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f828ab720c08a29d587d.svg";

/***/ }),

/***/ "./src/shipImages/carrier-horizontal.svg":
/*!***********************************************!*\
  !*** ./src/shipImages/carrier-horizontal.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "474c5c901a111a4fd96c.svg";

/***/ }),

/***/ "./src/shipImages/carrier-vertical.svg":
/*!*********************************************!*\
  !*** ./src/shipImages/carrier-vertical.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acae28ca9bc350fd8992.svg";

/***/ }),

/***/ "./src/shipImages/cruiser-horizontal.svg":
/*!***********************************************!*\
  !*** ./src/shipImages/cruiser-horizontal.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4e8e6fa39a9a6e3fc2f.svg";

/***/ }),

/***/ "./src/shipImages/cruiser-vertical.svg":
/*!*********************************************!*\
  !*** ./src/shipImages/cruiser-vertical.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c0fc992ec11b2e3063c.svg";

/***/ }),

/***/ "./src/shipImages/small-ship-horizontal.svg":
/*!**************************************************!*\
  !*** ./src/shipImages/small-ship-horizontal.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bf5d5a77167315847e6.svg";

/***/ }),

/***/ "./src/shipImages/small-ship-vertical.svg":
/*!************************************************!*\
  !*** ./src/shipImages/small-ship-vertical.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adb0471b7652f04b20bc.svg";

/***/ }),

/***/ "./src/shipImages/submarine-horizontal.svg":
/*!*************************************************!*\
  !*** ./src/shipImages/submarine-horizontal.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b175fe4df656a0305e4.svg";

/***/ }),

/***/ "./src/shipImages/submarine-vertical.svg":
/*!***********************************************!*\
  !*** ./src/shipImages/submarine-vertical.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92c453c6dced7a0f6272.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/startingMenu.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_battleshipLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/battleshipLogo.png */ "./src/assets/battleshipLogo.png");
/* harmony import */ var _assets_battleshipImage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/battleshipImage.png */ "./src/assets/battleshipImage.png");
/* harmony import */ var _setupGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setupGame.js */ "./src/setupGame.js");





let errors = [];

// Initial menu. Determine if playing vs bot or human.

const startingMenu = document.createElement('div');
startingMenu.classList.add('startingMenu');
document.body.appendChild(startingMenu)

const battleshipLogo = document.createElement('img');
battleshipLogo.classList.add('battleshipLogo')
battleshipLogo.src = _assets_battleshipLogo_png__WEBPACK_IMPORTED_MODULE_1__;
startingMenu.appendChild(battleshipLogo)

const battleshipImage = document.createElement('img');
battleshipImage.classList.add('battleshipImage')
battleshipImage.src = _assets_battleshipImage_png__WEBPACK_IMPORTED_MODULE_2__;
startingMenu.appendChild(battleshipImage)

const optionsContainer = document.createElement('div');
optionsContainer.classList.add('optionsContainer')
startingMenu.appendChild(optionsContainer);

const playAgainstBot = document.createElement('div');
playAgainstBot.classList.add('playAgainstBot')
playAgainstBot.textContent = 'SINGLE PLAYER'
optionsContainer.appendChild(playAgainstBot)

const playAgainstPlayer = document.createElement('div');
playAgainstPlayer.classList.add('playAgainstPlayer')
playAgainstPlayer.textContent = 'MULTI PLAYER'
optionsContainer.appendChild(playAgainstPlayer)

// play vs bot
playAgainstBot.addEventListener('click', selectDifficulty)

function selectDifficulty(){
    playAgainstBot.removeEventListener('click', selectDifficulty)
    optionsContainer.textContent = '';
    const easyDifficulty = document.createElement('div');
    easyDifficulty.classList.add('easyDifficulty')
    easyDifficulty.textContent = 'NOVICE';
    optionsContainer.appendChild(easyDifficulty);

    const hardDifficulty = document.createElement('div');
    hardDifficulty.classList.add('hardDifficulty')
    hardDifficulty.textContent = 'EXPERT';
    optionsContainer.appendChild(hardDifficulty)
    let setUpGameTemp;
    easyDifficulty.addEventListener('click', setUpGameTemp = () =>{
        easyDifficulty.removeEventListener('click', setUpGameTemp)
        document.querySelector('body').textContent = '';
        (0,_setupGame_js__WEBPACK_IMPORTED_MODULE_3__.setupPlayer)('singlePlayer', 'novice', 0)
    })

    hardDifficulty.addEventListener('click', setUpGameTemp = () =>{
        hardDifficulty.removeEventListener('click', setUpGameTemp)
        document.querySelector('body').textContent = '';
        (0,_setupGame_js__WEBPACK_IMPORTED_MODULE_3__.setupPlayer)('singlePlayer', 'expert', 0)
    })
}

// play vs player
playAgainstPlayer.addEventListener('click', promptPlayerNames)

function promptPlayerNames(){
    playAgainstPlayer.removeEventListener('click', promptPlayerNames)
    optionsContainer.textContent= '';

    const player1NameContainer = document.createElement('div');
    player1NameContainer.classList.add('player1NameContainer');
    optionsContainer.appendChild(player1NameContainer)

    const player2NameContainer = document.createElement('div');
    player2NameContainer.classList.add('player2NameContainer');
    optionsContainer.appendChild(player2NameContainer)
    
    const player1Label = document.createElement('div');
    player1Label.textContent = 'Player 1 Name';
    player1NameContainer.appendChild(player1Label)

    const inputPlayer1Name = document.createElement('input');
    inputPlayer1Name.classList.add('inputPlayer1Name')
    player1NameContainer.appendChild(inputPlayer1Name)

    const player2Label = document.createElement('div');
    player2Label.textContent = 'Player 2 Name';
    player2NameContainer.appendChild(player2Label)

    const inputPlayer2Name = document.createElement('input');
    inputPlayer2Name.classList.add('inputPlayer2Name')
    player2NameContainer.appendChild(inputPlayer2Name)

    const playMultiplayerButton = document.createElement('div');
    playMultiplayerButton.classList.add('playMultiplayerButton');
    playMultiplayerButton.textContent = 'PLAY';
    startingMenu.appendChild(playMultiplayerButton)

    playMultiplayerButton.addEventListener('click', playMultiplayer)
}

function playMultiplayer(){
    errors = [];
        let allErrors = document.querySelectorAll('.errorMessage')
        for (let i=0; i<allErrors.length; i++){
            allErrors[i].remove();
        }

        if (document.querySelector('.inputPlayer1Name').value === ''){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Can\'t be left empty';
            document.querySelector('.player1NameContainer').appendChild(errors[errors.length - 1])
        } else if (document.querySelector('.inputPlayer1Name').value.length > 8){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Must be 8 chars. or less';
            document.querySelector('.player1NameContainer').appendChild(errors[errors.length - 1])
        } else if (document.querySelector('.inputPlayer1Name').value === 'Human' || document.querySelector('.inputPlayer1Name').value === 'Bot'){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Player 1 name is invalid';
            document.querySelector('.player1NameContainer').appendChild(errors[errors.length - 1])
        }
        else if (document.querySelector('.inputPlayer2Name').value === ''){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Can\'t be left empty';
            document.querySelector('.player2NameContainer').appendChild(errors[errors.length - 1])
        } else if (document.querySelector('.inputPlayer2Name').value === 'Human' || document.querySelector('.inputPlayer2Name').value === 'Bot'){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Player 2 name is invalid';
            document.querySelector('.player2NameContainer').appendChild(errors[errors.length - 1])
        } else if (document.querySelector('.inputPlayer2Name').value.length > 8){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Must be 8 chars. or less';
            document.querySelector('.player2NameContainer').appendChild(errors[errors.length - 1])
        } 
        else {
            document.querySelector('.playMultiplayerButton').removeEventListener('click', playMultiplayer)
            ;(0,_setupGame_js__WEBPACK_IMPORTED_MODULE_3__.setupPlayer)('multiPlayer', 'multi', 0, document.querySelector('.inputPlayer1Name').value, document.querySelector('.inputPlayer2Name').value)
        }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxjQUFjLFVBQVUsWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLGNBQWMsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFh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c2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2F0dGFja1N0YWdlRG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmREb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Qm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheVNoaXBzT25Cb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb25jbHVzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VCb3RTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlU2hpcHNTdGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy90YWtlVHVybnNBdHRhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0YXJ0aW5nTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWFrZVZlcnRpY2FsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21ha2VIb3Jpem9udGFsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21pc3NJY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3RhcmdldEljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogdWJ1bnR1O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5Qe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsIDE0MywgMTkwLCAwLjEwKTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuLyogbWFpbiBhcmVhIHNlY3Rpb24gKi9cXG4vKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xcblxcbi5zdGFydGluZ01lbnV7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVQaGFzZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5nYW1lUGhhc2UucHJlU3RhZ2V7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwTG9nb3tcXG4gICAgbWF4LWhlaWdodDogMTAlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcEltYWdle1xcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4ub3B0aW9uc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XFxufVxcblxcbi5wbGF5QWdhaW5zdFBsYXllcixcXG4ucGxheUFnYWluc3RCb3QsXFxuLmVhc3lEaWZmaWN1bHR5LFxcbi5oYXJkRGlmZmljdWx0eSxcXG4ucGxheU11bHRpcGxheWVyQnV0dG9uLFxcbi5kZXBsb3lCdXR0b257XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wbGF5QWdhaW5zdFBsYXllcjpob3ZlcixcXG4ucGxheUFnYWluc3RCb3Q6aG92ZXIsXFxuLmVhc3lEaWZmaWN1bHR5OmhvdmVyLFxcbi5oYXJkRGlmZmljdWx0eTpob3ZlcixcXG4ucGxheU11bHRpcGxheWVyQnV0dG9uOmhvdmVyLFxcbi5kZXBsb3lCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyMU5hbWVDb250YWluZXIsXFxuLnBsYXllcjJOYW1lQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyMU5hbWVDb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpLFxcbi5wbGF5ZXIyTmFtZUNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllcjFOYW1lQ29udGFpbmVyID4gaW5wdXQ6bnRoLWNoaWxkKDIpLFxcbi5wbGF5ZXIyTmFtZUNvbnRhaW5lciA+IGlucHV0Om50aC1jaGlsZCgyKXtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyMU5hbWVDb250YWluZXIgPiBpbnB1dDpudGgtY2hpbGQoMik6Zm9jdXMsXFxuLnBsYXllcjJOYW1lQ29udGFpbmVyID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucGxheU11bHRpcGxheWVyQnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdle1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cXG4vKiBQbGF5ZXIgQXJlYSBTZWN0aW9uICovXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cXG4ucGxheWVyQXJlYXtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWF4LXdpZHRoOiA0NDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgbWluLWhlaWdodDogNDIwcHg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnBsYXllckJvYXJke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbn1cXG5cXG4ucGxheWVyQXJlYTpudGgtb2YtdHlwZSgyKT4gLnBsYXllckJvYXJke1xcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxufVxcblxcbi5zcXVhcmV7XFxuICAgIGJvcmRlcjogMXB4IHJnYmEoMzAsIDMwLCAzMCwgMC43KSBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxufVxcblxcbi8qIFB1dHRpbmcgYm9yZGVyLXJhZGl1cyBvbiBnYW1lcGhhc2UgYm9hcmQgY29ybmVycyAqL1xcbi50b3BMZWZ0e1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udG9wUmlnaHR7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYm90dG9tTGVmdHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJvdHRvbVJpZ2h0e1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNxdWFyZS5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgMTEwLCAxNTMpO1xcbn1cXG5cXG4uZmFrZUJvYXJke1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGxheWVySWRlbnRpZmljYXRpb24wLFxcbi5wbGF5ZXJJZGVudGlmaWNhdGlvbjF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxufVxcblxcbi5wbGF5ZXJJZGVudGlmaWNhdGlvbjB7XFxuICAgIGJvdHRvbTogLTMwcHg7XFxufVxcblxcbi5wbGF5ZXJJZGVudGlmaWNhdGlvbjF7XFxuICAgIHRvcDogLTMwcHg7XFxufVxcblxcbi5wbGF5ZXJOYW1le1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcFByZXZpZXcwLFxcbi5jYXJyaWVyUHJldmlldzAsXFxuLnN1Ym1hcmluZVByZXZpZXcwLFxcbi5jcnVpc2VyUHJldmlldzAsXFxuLnNtYWxsc2hpcFByZXZpZXcwLFxcbi5iYXR0bGVzaGlwUHJldmlldzEsXFxuLmNhcnJpZXJQcmV2aWV3MSxcXG4uc3VibWFyaW5lUHJldmlldzEsXFxuLmNydWlzZXJQcmV2aWV3MSxcXG4uc21hbGxzaGlwUHJldmlldzF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHJnYigxMjAsIDEyMCwgMTIwKSBzb2xpZDtcXG59XFxuXFxuLmJhdHRsZXNoaXBQcmV2aWV3MCA+IGRpdixcXG4uY2FycmllclByZXZpZXcwID4gZGl2LFxcbi5zdWJtYXJpbmVQcmV2aWV3MCA+IGRpdixcXG4uY3J1aXNlclByZXZpZXcwID4gZGl2LFxcbi5zbWFsbHNoaXBQcmV2aWV3MCA+IGRpdntcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggcmdiKDEyMCwgMTIwLCAxMjApIHNvbGlkO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zOSk7XFxufVxcblxcbi5iYXR0bGVzaGlwUHJldmlldzEgPiBkaXYsXFxuLmNhcnJpZXJQcmV2aWV3MSA+IGRpdixcXG4uc3VibWFyaW5lUHJldmlldzEgPiBkaXYsXFxuLmNydWlzZXJQcmV2aWV3MSA+IGRpdixcXG4uc21hbGxzaGlwUHJldmlldzEgPiBkaXZ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM5KTtcXG59XFxuXFxuLmJhdHRsZXNoaXBQcmV2aWV3MCA+IGRpdjpsYXN0LWNoaWxkLFxcbi5jYXJyaWVyUHJldmlldzAgPiBkaXY6bGFzdC1jaGlsZCxcXG4uc3VibWFyaW5lUHJldmlldzAgPiBkaXY6bGFzdC1jaGlsZCxcXG4uY3J1aXNlclByZXZpZXcwID4gZGl2Omxhc3QtY2hpbGQsXFxuLnNtYWxsc2hpcFByZXZpZXcwID4gZGl2Omxhc3QtY2hpbGQsXFxuLmJhdHRsZXNoaXBQcmV2aWV3MSA+IGRpdjpsYXN0LWNoaWxkLFxcbi5jYXJyaWVyUHJldmlldzEgPiBkaXY6bGFzdC1jaGlsZCxcXG4uc3VibWFyaW5lUHJldmlldzEgPiBkaXY6bGFzdC1jaGlsZCxcXG4uY3J1aXNlclByZXZpZXcxID4gZGl2Omxhc3QtY2hpbGQsXFxuLnNtYWxsc2hpcFByZXZpZXcxID4gZGl2Omxhc3QtY2hpbGR7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZVxcbn1cXG5cXG4ubWVzc2FnZXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5yb3RhdGVCdXR0b24ubWFrZUhvcml6b250YWx7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbi5tYWtlVmVydGljYWx7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnNob3R7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcblxcbi5zaG90LnNoaXBIaXR7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcblxcbi5zaG90LnNoaXBIaXQuc2hpcFN1bmt7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQgLnNob3Quc2hpcEhpdC5zaGlwU3Vuay5ob3Jpem9udGFsQ2FycmllcjpudGgtY2hpbGQoMSl7XFxuICAgIGJvcmRlcjogMTBweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLmZha2VCb2FyZCA+IGltZ3tcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCAzNiwgMzYpO1xcbiAgICBib3JkZXI6IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzI5KSBzb2xpZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xcbiAgICAuZ2FtZVBoYXNle1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllckFyZWF7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtaW4taGVpZ2h0OiA0MCU7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllckJvYXJke1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtaW4td2lkdGg6IDM0MHB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAyODBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJJZGVudGlmaWNhdGlvbjB7XFxuICAgICAgICBib3R0b206IC0yNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5tZXNzYWdle1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJJZGVudGlmaWNhdGlvbjF7XFxuICAgICAgICB0b3A6IC0yNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MjBweCl7XFxuICAgIC5nYW1lUGhhc2V7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgICAgICAgZ2FwOiA0MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA3MjBweCl7XFxuICAgIC5nYW1lUGhhc2V7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJBcmVhe1xcbiAgICAgICAgbWluLWhlaWdodDogMzUlO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJCb2FyZHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJJZGVudGlmaWNhdGlvbjB7XFxuICAgICAgICBib3R0b206IC0yNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5tZXNzYWdle1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJJZGVudGlmaWNhdGlvbjF7XFxuICAgICAgICB0b3A6IC0yNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNENBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQywwQkFBMEI7QUFDOUI7O0FBRUEsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0QiwyQ0FBMkM7O0FBRTNDO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBOzs7Ozs7SUFNSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7SUFNSSw4QkFBOEI7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LGVBQWU7UUFDZixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixrQ0FBa0M7UUFDbEMsU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHVidW50dTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XFxuICAgIHNyYzogdXJsKCcvc3JjL2Fzc2V0cy9mb250cy9VYnVudHUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuUHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxNDMsIDE5MCwgMC4xMCk7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG4vKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xcbi8qIG1haW4gYXJlYSBzZWN0aW9uICovXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cXG5cXG4uc3RhcnRpbmdNZW51e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lUGhhc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZ2FtZVBoYXNlLnByZVN0YWdle1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcExvZ297XFxuICAgIG1heC1oZWlnaHQ6IDEwJTtcXG59XFxuXFxuLmJhdHRsZXNoaXBJbWFnZXtcXG4gICAgbWF4LWhlaWdodDogMjAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLm9wdGlvbnNDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWF4LWhlaWdodDogMjAlO1xcbn1cXG5cXG4ucGxheUFnYWluc3RQbGF5ZXIsXFxuLnBsYXlBZ2FpbnN0Qm90LFxcbi5lYXN5RGlmZmljdWx0eSxcXG4uaGFyZERpZmZpY3VsdHksXFxuLnBsYXlNdWx0aXBsYXllckJ1dHRvbixcXG4uZGVwbG95QnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucGxheUFnYWluc3RQbGF5ZXI6aG92ZXIsXFxuLnBsYXlBZ2FpbnN0Qm90OmhvdmVyLFxcbi5lYXN5RGlmZmljdWx0eTpob3ZlcixcXG4uaGFyZERpZmZpY3VsdHk6aG92ZXIsXFxuLnBsYXlNdWx0aXBsYXllckJ1dHRvbjpob3ZlcixcXG4uZGVwbG95QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYXllcjFOYW1lQ29udGFpbmVyLFxcbi5wbGF5ZXIyTmFtZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllcjFOYW1lQ29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ucGxheWVyMk5hbWVDb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXIxTmFtZUNvbnRhaW5lciA+IGlucHV0Om50aC1jaGlsZCgyKSxcXG4ucGxheWVyMk5hbWVDb250YWluZXIgPiBpbnB1dDpudGgtY2hpbGQoMil7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllcjFOYW1lQ29udGFpbmVyID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmZvY3VzLFxcbi5wbGF5ZXIyTmFtZUNvbnRhaW5lciA+IGlucHV0Om50aC1jaGlsZCgyKTpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBsYXlNdWx0aXBsYXllckJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmVycm9yTWVzc2FnZXtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0xN3B4O1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuLyogUGxheWVyIEFyZWEgU2VjdGlvbiAqL1xcbi8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuLnBsYXllckFyZWF7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wbGF5ZXJCb2FyZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG59XFxuXFxuLnBsYXllckFyZWE6bnRoLW9mLXR5cGUoMik+IC5wbGF5ZXJCb2FyZHtcXG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgICBib3JkZXI6IDFweCByZ2JhKDMwLCAzMCwgMzAsIDAuNykgc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbn1cXG5cXG4vKiBQdXR0aW5nIGJvcmRlci1yYWRpdXMgb24gZ2FtZXBoYXNlIGJvYXJkIGNvcm5lcnMgKi9cXG4udG9wTGVmdHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRvcFJpZ2h0e1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJvdHRvbUxlZnR7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ib3R0b21SaWdodHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zcXVhcmUuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODEsIDExMCwgMTUzKTtcXG59XFxuXFxuLmZha2VCb2FyZHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBsYXllcklkZW50aWZpY2F0aW9uMCxcXG4ucGxheWVySWRlbnRpZmljYXRpb24xe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbn1cXG5cXG4ucGxheWVySWRlbnRpZmljYXRpb24we1xcbiAgICBib3R0b206IC0zMHB4O1xcbn1cXG5cXG4ucGxheWVySWRlbnRpZmljYXRpb24xe1xcbiAgICB0b3A6IC0zMHB4O1xcbn1cXG5cXG4ucGxheWVyTmFtZXtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIG1heC13aWR0aDogNjBweDtcXG59XFxuXFxuLmJhdHRsZXNoaXBQcmV2aWV3MCxcXG4uY2FycmllclByZXZpZXcwLFxcbi5zdWJtYXJpbmVQcmV2aWV3MCxcXG4uY3J1aXNlclByZXZpZXcwLFxcbi5zbWFsbHNoaXBQcmV2aWV3MCxcXG4uYmF0dGxlc2hpcFByZXZpZXcxLFxcbi5jYXJyaWVyUHJldmlldzEsXFxuLnN1Ym1hcmluZVByZXZpZXcxLFxcbi5jcnVpc2VyUHJldmlldzEsXFxuLnNtYWxsc2hpcFByZXZpZXcxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCByZ2IoMTIwLCAxMjAsIDEyMCkgc29saWQ7XFxufVxcblxcbi5iYXR0bGVzaGlwUHJldmlldzAgPiBkaXYsXFxuLmNhcnJpZXJQcmV2aWV3MCA+IGRpdixcXG4uc3VibWFyaW5lUHJldmlldzAgPiBkaXYsXFxuLmNydWlzZXJQcmV2aWV3MCA+IGRpdixcXG4uc21hbGxzaGlwUHJldmlldzAgPiBkaXZ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHJnYigxMjAsIDEyMCwgMTIwKSBzb2xpZDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzkpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcFByZXZpZXcxID4gZGl2LFxcbi5jYXJyaWVyUHJldmlldzEgPiBkaXYsXFxuLnN1Ym1hcmluZVByZXZpZXcxID4gZGl2LFxcbi5jcnVpc2VyUHJldmlldzEgPiBkaXYsXFxuLnNtYWxsc2hpcFByZXZpZXcxID4gZGl2e1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBibGFjayBzb2xpZDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zOSk7XFxufVxcblxcbi5iYXR0bGVzaGlwUHJldmlldzAgPiBkaXY6bGFzdC1jaGlsZCxcXG4uY2FycmllclByZXZpZXcwID4gZGl2Omxhc3QtY2hpbGQsXFxuLnN1Ym1hcmluZVByZXZpZXcwID4gZGl2Omxhc3QtY2hpbGQsXFxuLmNydWlzZXJQcmV2aWV3MCA+IGRpdjpsYXN0LWNoaWxkLFxcbi5zbWFsbHNoaXBQcmV2aWV3MCA+IGRpdjpsYXN0LWNoaWxkLFxcbi5iYXR0bGVzaGlwUHJldmlldzEgPiBkaXY6bGFzdC1jaGlsZCxcXG4uY2FycmllclByZXZpZXcxID4gZGl2Omxhc3QtY2hpbGQsXFxuLnN1Ym1hcmluZVByZXZpZXcxID4gZGl2Omxhc3QtY2hpbGQsXFxuLmNydWlzZXJQcmV2aWV3MSA+IGRpdjpsYXN0LWNoaWxkLFxcbi5zbWFsbHNoaXBQcmV2aWV3MSA+IGRpdjpsYXN0LWNoaWxke1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmVcXG59XFxuXFxuLm1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5yb3RhdGVCdXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uLm1ha2VIb3Jpem9udGFse1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL21ha2VWZXJ0aWNhbC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uLm1ha2VWZXJ0aWNhbHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9tYWtlSG9yaXpvbnRhbC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uc2hvdHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9taXNzSWNvbi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuXFxuLnNob3Quc2hpcEhpdHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy90YXJnZXRJY29uLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbn1cXG5cXG4uc2hvdC5zaGlwSGl0LnNoaXBTdW5re1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuXFxuLnBsYXllckJvYXJkIC5zaG90LnNoaXBIaXQuc2hpcFN1bmsuaG9yaXpvbnRhbENhcnJpZXI6bnRoLWNoaWxkKDEpe1xcbiAgICBib3JkZXI6IDEwcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mYWtlQm9hcmQgPiBpbWd7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgMzYsIDM2KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyOSkgc29saWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXG4gICAgLmdhbWVQaGFzZXtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJBcmVhe1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWluLWhlaWdodDogNDAlO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJCb2FyZHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWluLXdpZHRoOiAzNDBweDtcXG4gICAgICAgIG1heC13aWR0aDogOTUlO1xcbiAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAucGxheWVySWRlbnRpZmljYXRpb24we1xcbiAgICAgICAgYm90dG9tOiAtMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAubWVzc2FnZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucGxheWVySWRlbnRpZmljYXRpb24xe1xcbiAgICAgICAgdG9wOiAtMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzIwcHgpe1xcbiAgICAuZ2FtZVBoYXNle1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgICAgIGdhcDogNDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIGFuZCAobWluLWhlaWdodDogNzIwcHgpe1xcbiAgICAuZ2FtZVBoYXNle1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAucGxheWVyQXJlYXtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1JTtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucGxheWVyQm9hcmR7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAucGxheWVySWRlbnRpZmljYXRpb24we1xcbiAgICAgICAgYm90dG9tOiAtMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAubWVzc2FnZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucGxheWVySWRlbnRpZmljYXRpb24xe1xcbiAgICAgICAgdG9wOiAtMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJvYXJkRG9tKHBsYXllcil7XG4gICAgbGV0IHlTaG90ID0gcGxheWVyLnBsYXllckJvYXJkLmNocm9ub2xvZ2ljYWxHZW5lcmFsRGFtYWdlW3BsYXllci5wbGF5ZXJCb2FyZC5jaHJvbm9sb2dpY2FsR2VuZXJhbERhbWFnZS5sZW5ndGggLTFdLnlcbiAgICBsZXQgeFNob3QgPSBwbGF5ZXIucGxheWVyQm9hcmQuY2hyb25vbG9naWNhbEdlbmVyYWxEYW1hZ2VbcGxheWVyLnBsYXllckJvYXJkLmNocm9ub2xvZ2ljYWxHZW5lcmFsRGFtYWdlLmxlbmd0aCAtMV0ueFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZFt5U2hvdF1beFNob3RdLmRvbS5jbGFzc0xpc3QuYWRkKCdzaG90JylcblxuICAgIGlmIChwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbeVNob3RdW3hTaG90XS5oYXNTaGlwKXtcbiAgICAgICAgbGV0IHlTaGlwSGl0ID0gcGxheWVyLnBsYXllckJvYXJkLmNocm9ub2xvZ2ljYWxHZW5lcmFsRGFtYWdlW3BsYXllci5wbGF5ZXJCb2FyZC5jaHJvbm9sb2dpY2FsR2VuZXJhbERhbWFnZS5sZW5ndGggLTFdLnlcbiAgICAgICAgbGV0IHhTaGlwSGl0ID0gcGxheWVyLnBsYXllckJvYXJkLmNocm9ub2xvZ2ljYWxHZW5lcmFsRGFtYWdlW3BsYXllci5wbGF5ZXJCb2FyZC5jaHJvbm9sb2dpY2FsR2VuZXJhbERhbWFnZS5sZW5ndGggLTFdLnhcbiAgICAgICAgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkW3lTaGlwSGl0XVt4U2hpcEhpdF0uZG9tLmNsYXNzTGlzdC5hZGQoJ3NoaXBIaXQnKVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaTxwbGF5ZXIucGxheWVyQm9hcmQuYWxsU2hpcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAocGxheWVyLnBsYXllckJvYXJkLmFsbFNoaXBzW2ldLmlzU3VuaygpID09PSB0cnVlKXtcbiAgICAgICAgICAgIGxldCB5TG9jID0gcGxheWVyLnBsYXllckJvYXJkLmFsbFNoaXBzW2ldLnBsYWNlZEF0LnkgXG4gICAgICAgICAgICBsZXQgeExvYyA9IHBsYXllci5wbGF5ZXJCb2FyZC5hbGxTaGlwc1tpXS5wbGFjZWRBdC54XG4gICAgICAgICAgICBpZiAoIXBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZFt5TG9jXVt4TG9jXS5kb20uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwU3VuaycpKXtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBsYXllckJvYXJkLmFsbFNoaXBzW2ldLmF4aXMgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBxPTA7IHE8cGxheWVyLnBsYXllckJvYXJkLmFsbFNoaXBzW2ldLmxlbmd0aDsgcSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZFt5TG9jICsgcV1beExvY10uZG9tLmNsYXNzTGlzdC5hZGQoJ3NoaXBTdW5rJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHE9MDsgcTxwbGF5ZXIucGxheWVyQm9hcmQuYWxsU2hpcHNbaV0ubGVuZ3RoOyBxKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkW3lMb2NdW3hMb2MgKyBxXS5kb20uY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVNoaXBQcmV2aWV3cyhwbGF5ZXIpXG59XG5cbi8vIFVwZGF0ZSB0aGUgcHJldmlld3MgbmV4dCB0byBwbGF5ZXIgbmFtZSwgaW5kaWNhdGluZyBoZWFsdGggbGlmZSBvZiBzaGlwc1xuZnVuY3Rpb24gdXBkYXRlU2hpcFByZXZpZXdzKHBsYXllcil7XG4gICAgbGV0IHNoaXBzID0gcGxheWVyLnBsYXllckJvYXJkLmFsbFNoaXBzXG5cbiAgICBpZiAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyTmFtZScpKVswXS50ZXh0Q29udGVudCA9PT0gcGxheWVyLnBsYXllci5uYW1lKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGhpdHNUYWtlbiA9IHNoaXBzW2ldLmxlbmd0aCAtIHNoaXBzW2ldLnJlbWFpbmluZ0xlbmd0aCBcbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5uYW1lID09PSAnQmF0dGxlc2hpcCcpe1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXBQcmV2aWV3MCcpLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcHNbaV0ubmFtZSA9PT0gJ0NhcnJpZXInKXtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJyaWVyUHJldmlldzAnKS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSknXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5uYW1lID09PSAnU3VibWFyaW5lJyl7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDIpe1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1hcmluZVByZXZpZXcwJykpWzBdLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSknXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtYXJpbmVQcmV2aWV3MCcpKVsxXS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5uYW1lID09PSAnQ3J1aXNlcicpe1xuICAgICAgICAgICAgICAgIGlmIChpID09PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcnVpc2VyUHJldmlldzAnKSlbMF0uY2hpbGRyZW4pLnNsaWNlKDAsIGhpdHNUYWtlbikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDUpe1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNydWlzZXJQcmV2aWV3MCcpKVsxXS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gNil7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3J1aXNlclByZXZpZXcwJykpWzJdLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSknXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLm5hbWUgPT09ICdTbWFsbHNoaXAnKXtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gNyl7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21hbGxzaGlwUHJldmlldzAnKSlbMF0uY2hpbGRyZW4pLnNsaWNlKDAsIGhpdHNUYWtlbikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDgpe1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYWxsc2hpcFByZXZpZXcwJykpWzFdLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSknXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSA5KXtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWFsbHNoaXBQcmV2aWV3MCcpKVsyXS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyTmFtZScpKVsxXS50ZXh0Q29udGVudCA9PT0gcGxheWVyLnBsYXllci5uYW1lKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGhpdHNUYWtlbiA9IHNoaXBzW2ldLmxlbmd0aCAtIHNoaXBzW2ldLnJlbWFpbmluZ0xlbmd0aCBcbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5uYW1lID09PSAnQmF0dGxlc2hpcCcpe1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXBQcmV2aWV3MScpLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLm5hbWUgPT09ICdDYXJyaWVyJyl7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycmllclByZXZpZXcxJykuY2hpbGRyZW4pLnNsaWNlKDAsIGhpdHNUYWtlbikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcHNbaV0ubmFtZSA9PT0gJ1N1Ym1hcmluZScpe1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtYXJpbmVQcmV2aWV3MScpKVswXS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWFyaW5lUHJldmlldzEnKSlbMV0uY2hpbGRyZW4pLnNsaWNlKDAsIGhpdHNUYWtlbikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcHNbaV0ubmFtZSA9PT0gJ0NydWlzZXInKXtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3J1aXNlclByZXZpZXcxJykpWzBdLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSknXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSA1KXtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcnVpc2VyUHJldmlldzEnKSlbMV0uY2hpbGRyZW4pLnNsaWNlKDAsIGhpdHNUYWtlbikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDYpe1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNydWlzZXJQcmV2aWV3MScpKVsyXS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5uYW1lID09PSAnU21hbGxzaGlwJyl7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDcpe1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYWxsc2hpcFByZXZpZXcxJykpWzBdLmNoaWxkcmVuKS5zbGljZSgwLCBoaXRzVGFrZW4pLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3MSknXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSA4KXtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWFsbHNoaXBQcmV2aWV3MScpKVsxXS5jaGlsZHJlbikuc2xpY2UoMCwgaGl0c1Rha2VuKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzEpJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gOSl7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21hbGxzaGlwUHJldmlldzEnKSlbMl0uY2hpbGRyZW4pLnNsaWNlKDAsIGhpdHNUYWtlbikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjcxKSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgfVxufSIsImltcG9ydCBiYXR0bGVzaGlwR2FtZVRpdGxlIGZyb20gJy4vYXNzZXRzL2JhdHRsZXNoaXBMb2dvLnBuZydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllckFyZWFzKHBsYXllck51bWJlcil7XG4gICAgaWYgKHBsYXllck51bWJlciA9PT0gMCl7XG4gICAgICAgIGNvbnN0IGdhbWVQaGFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lUGhhc2UuY2xhc3NMaXN0LmFkZCgnZ2FtZVBoYXNlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZVBoYXNlKTtcbiAgICAgICAgbGV0IGJhdHRsZXNoaXBMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGJhdHRsZXNoaXBMb2dvLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXBMb2dvJylcbiAgICAgICAgYmF0dGxlc2hpcExvZ28uc3JjID0gYmF0dGxlc2hpcEdhbWVUaXRsZTtcbiAgICAgICAgZ2FtZVBoYXNlLmFwcGVuZENoaWxkKGJhdHRsZXNoaXBMb2dvKSBcbiAgICB9XG4gICAgLy8gUGxheWVyIEFyZWFcbiAgICBjb25zdCBwbGF5ZXJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVQaGFzZScpLmFwcGVuZENoaWxkKHBsYXllckFyZWEpO1xuICAgIHBsYXllckFyZWEuY2xhc3NMaXN0LmFkZCgncGxheWVyQXJlYScpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJBcmVhLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckFyZWEuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbiAgICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRlQnV0dG9uJywgJ21ha2VWZXJ0aWNhbCcsICdtYWtlSG9yaXpvbnRhbCcpXG4gICAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ21ha2VWZXJ0aWNhbCcpXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJCb2FyZCcpO1xuICAgIHBsYXllckFyZWEuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hcmQoYm9hcmQpe1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpO1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgZm9yIChsZXQgcT0wOyBxPDEwOyBxKyspe1xuICAgICAgICAgICAgYm9hcmRbaV1bcV0uZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBib2FyZFtpXVtxXS5kb20uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBib2FyZFtpXVtxXS5kb20uY2xhc3NMaXN0LmFkZCgnc3F1YXJlJylcbiAgICAgICAgICAgIGJvYXJkW2ldW3FdLmRvbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGJvYXJkW2ldW3FdLmRvbS5sb2NhdGlvbiA9IHsgeTogaSwgeDogcSB9XG4gICAgICAgICAgICBpZihpID09PSAwKXtcbiAgICAgICAgICAgICAgICBpZiAocSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3FdLmRvbS5jbGFzc0xpc3QuYWRkKCd0b3BMZWZ0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHEgPT09IDkpe1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVtxXS5kb20uY2xhc3NMaXN0LmFkZCgndG9wUmlnaHQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgPT09IDkpe1xuICAgICAgICAgICAgICAgIGlmIChxID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1bcV0uZG9tLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUxlZnQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocSA9PT0gOSl7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3FdLmRvbS5jbGFzc0xpc3QuYWRkKCdib3R0b21SaWdodCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRbaV1bcV0uZG9tKVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmRzKHBsYXllciwgbnVtKXtcbiAgICBjb25zdCBnYW1lUGhhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZVBoYXNlJyk7XG4gICAgZ2FtZVBoYXNlLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCdcblxuICAgIGxldCBwbGF5ZXJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwbGF5ZXJBcmVhLmNsYXNzTGlzdC5hZGQoJ3BsYXllckFyZWEnKVxuICAgIGdhbWVQaGFzZS5hcHBlbmRDaGlsZChwbGF5ZXJBcmVhKTtcblxuICAgIGlmIChudW0gPT09IDApe1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gICAgICAgIGxldCBwbGF5ZXIxSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQocGxheWVyMUluc3RydWN0aW9ucylcbiAgICAgICAgbGV0IHBsYXllcjJJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVzc2FnZS5hcHBlbmRDaGlsZChwbGF5ZXIySW5zdHJ1Y3Rpb25zKVxuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpXG4gICAgICAgIGdhbWVQaGFzZS5hcHBlbmRDaGlsZChtZXNzYWdlKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyQXJlYScpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcExvZ28nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJCb2FyZCcpXG4gICAgcGxheWVyQXJlYS5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gICAgXG4gICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBxPTA7IHE8MTA7IHErKyl7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV1bcV0uZG9tKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV1bcV0uaGFzU2hpcCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkW2ldW3FdLmRvbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZFtpXVtxXS5kb20uY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV1bcV0uc2hpcC5heGlzfWAgKyBgJHtwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV1bcV0uc2hpcC5uYW1lfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgaG9yaXpvbnRhbEJhdHRsZXNoaXAgZnJvbSAnLi9zaGlwSW1hZ2VzL2JhdHRsZXNoaXAtaG9yaXpvbnRhbC5zdmcnXG5pbXBvcnQgdmVydGljYWxCYXR0bGVzaGlwIGZyb20gJy4vc2hpcEltYWdlcy9iYXR0bGVzaGlwLXZlcnRpY2FsLnN2ZydcbmltcG9ydCBob3Jpem9udGFsQ2FycmllciBmcm9tICcuL3NoaXBJbWFnZXMvY2Fycmllci1ob3Jpem9udGFsLnN2ZydcbmltcG9ydCB2ZXJ0aWNhbENhcnJpZXIgZnJvbSAnLi9zaGlwSW1hZ2VzL2NhcnJpZXItdmVydGljYWwuc3ZnJ1xuaW1wb3J0IGhvcml6b250YWxDcnVpc2VyIGZyb20gJy4vc2hpcEltYWdlcy9jcnVpc2VyLWhvcml6b250YWwuc3ZnJ1xuaW1wb3J0IHZlcnRpY2FsQ3J1aXNlciBmcm9tICcuL3NoaXBJbWFnZXMvY3J1aXNlci12ZXJ0aWNhbC5zdmcnXG5pbXBvcnQgaG9yaXpvbnRhbFNtYWxsc2hpcCBmcm9tICcuL3NoaXBJbWFnZXMvc21hbGwtc2hpcC1ob3Jpem9udGFsLnN2ZydcbmltcG9ydCB2ZXJ0aWNhbFNtYWxsc2hpcCBmcm9tICcuL3NoaXBJbWFnZXMvc21hbGwtc2hpcC12ZXJ0aWNhbC5zdmcnXG5pbXBvcnQgaG9yaXpvbnRhbFN1Ym1hcmluZSBmcm9tICcuL3NoaXBJbWFnZXMvc3VibWFyaW5lLWhvcml6b250YWwuc3ZnJ1xuaW1wb3J0IHZlcnRpY2FsU3VibWFyaW5lIGZyb20gJy4vc2hpcEltYWdlcy9zdWJtYXJpbmUtdmVydGljYWwuc3ZnJ1xuXG4vLyBVc2luZyB0aGUgZGltZW5zaW9ucyBvZiAnc3F1YXJlJyB0byBwbGFjZSByZXNwb25zaXZlIHNoaXBzIG9uIGJvYXJkLlxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBsYXllclNoaXBzT25Cb2FyZChwbGF5ZXJCb2FyZCwgY291bnQpe1xuICAgIGxldCBhcnJheU9mUGh5c2ljYWxTaGlwcyA9IFtdO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWtlQm9hcmQnKSA9PT0gbnVsbCl7XG4gICAgICAgIGxldCBmYWtlQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmFrZUJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZha2VCb2FyZC5jbGFzc0xpc3QuYWRkKCdmYWtlQm9hcmQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckJvYXJkJykuYXBwZW5kQ2hpbGQoZmFrZUJvYXJkKVxuICAgIH1cblxuICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJykuZ2V0Q2xpZW50UmVjdHMoKVswXVxuXG4gICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNbY291bnRdLm5hbWUgPT09ICdCYXR0bGVzaGlwJyl7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tjb3VudF0uYXhpcyA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zcmMgPSBob3Jpem9udGFsQmF0dGxlc2hpcFxuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHR9cHhgXG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGggKiA1fXB4YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnNyYyA9IHZlcnRpY2FsQmF0dGxlc2hpcFxuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHQgKiA1fXB4YFxuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLndpZHRoID0gYCR7c3F1YXJlLndpZHRofXB4YFxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tjb3VudF0ubmFtZSA9PT0gJ0NhcnJpZXInKXtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzW2NvdW50XS5heGlzID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnNyYyA9IGhvcml6b250YWxDYXJyaWVyXG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3R5bGUuaGVpZ2h0ID0gYCR7c3F1YXJlLmhlaWdodH1weGBcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS53aWR0aCA9IGAke3NxdWFyZS53aWR0aCAqIDR9cHhgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3JjID0gdmVydGljYWxDYXJyaWVyXG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3R5bGUuaGVpZ2h0ID0gYCR7c3F1YXJlLmhlaWdodCAqIDR9cHhgXG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGh9cHhgXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzW2NvdW50XS5uYW1lID09PSAnU3VibWFyaW5lJyl7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tjb3VudF0uYXhpcyA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zcmMgPSBob3Jpem9udGFsU3VibWFyaW5lXG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3R5bGUuaGVpZ2h0ID0gYCR7c3F1YXJlLmhlaWdodH1weGBcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS53aWR0aCA9IGAke3NxdWFyZS53aWR0aCAqIDN9cHhgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3JjID0gdmVydGljYWxTdWJtYXJpbmVcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmUuaGVpZ2h0ICogM31weGBcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS53aWR0aCA9IGAke3NxdWFyZS53aWR0aH1weGBcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNbY291bnRdLm5hbWUgPT09ICdDcnVpc2VyJyl7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tjb3VudF0uYXhpcyA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zcmMgPSBob3Jpem9udGFsQ3J1aXNlclxuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHR9cHhgXG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGggKiAyfXB4YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnNyYyA9IHZlcnRpY2FsQ3J1aXNlclxuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHQgKiAyfXB4YFxuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLndpZHRoID0gYCR7c3F1YXJlLndpZHRofXB4YFxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tjb3VudF0ubmFtZSA9PT0gJ1NtYWxsc2hpcCcpe1xuICAgICAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNbY291bnRdLmF4aXMgPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tjb3VudF0uc3JjID0gaG9yaXpvbnRhbFNtYWxsc2hpcFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnNyYyA9IHZlcnRpY2FsU21hbGxzaGlwXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHR9cHhgXG4gICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS53aWR0aCA9IGAke3NxdWFyZS53aWR0aH1weGBcbiAgICB9IFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZha2VCb2FyZCcpLmFwcGVuZENoaWxkKGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XSlcblxuICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbY291bnRdLnN0eWxlLmxlZnQgPSAoKHBsYXllckJvYXJkLmFsbFNoaXBzW2NvdW50XS5wbGFjZWRBdC54KSAqIDEwKSArICclJ1xuICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2NvdW50XS5zdHlsZS50b3AgPSAoKHBsYXllckJvYXJkLmFsbFNoaXBzW2NvdW50XS5wbGFjZWRBdC55KSAqIDEwKSArICclJ1xufVxuXG4vLyBBIGNvcHkgb2YgZGlzcGxheVBsYXllclNoaXBzT25Cb2FyZCBmdW5jdGlvbiBidXQgdGhpcyBrZWVwcyB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIGFnYWluc3QgdGhlIGJvdFxuLy8gTm90IHVzZWQgYXQgdGhlIG1vbWVudDsgc2hpcCBpbWFnZXMgbm90IHNob3duIG9uIGJvYXJkXG4vLyBleHBvcnQgZnVuY3Rpb24gc2hvd1NoaXBzU2luZ2xlcGxheWVyKHBsYXllckJvYXJkKXtcbi8vICAgICBsZXQgYXJyYXlPZlBoeXNpY2FsU2hpcHMgPSBbXTtcblxuLy8gICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFrZUJvYXJkJykgPT09IG51bGwpe1xuLy8gICAgICAgICBsZXQgZmFrZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgICAgIGZha2VCb2FyZC50ZXh0Q29udGVudCA9ICcnO1xuLy8gICAgICAgICBmYWtlQm9hcmQuY2xhc3NMaXN0LmFkZCgnZmFrZUJvYXJkJyk7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpLmFwcGVuZENoaWxkKGZha2VCb2FyZClcbi8vICAgICB9XG5cbi8vICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxdWFyZScpLmdldENsaWVudFJlY3RzKClbMF1cbi8vICAgICBsZXQgdG90YWxTaGlwcyA9IHBsYXllckJvYXJkLmFsbFNoaXBzLmxlbmd0aFxuXG4vLyAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsU2hpcHM7IGkrKyl7XG4vLyAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4vLyAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tpXS5uYW1lID09PSAnQmF0dGxlc2hpcCcpe1xuLy8gICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzW2ldLmF4aXMgPT09ICdob3Jpem9udGFsJyl7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3JjID0gaG9yaXpvbnRhbEJhdHRsZXNoaXBcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmUuaGVpZ2h0fXB4YFxuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnN0eWxlLndpZHRoID0gYCR7c3F1YXJlLndpZHRoICogNX1weGBcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3JjID0gdmVydGljYWxCYXR0bGVzaGlwXG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUuaGVpZ2h0ID0gYCR7c3F1YXJlLmhlaWdodCAqIDV9cHhgXG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGh9cHhgXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1lbHNlIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tpXS5uYW1lID09PSAnQ2Fycmllcicpe1xuLy8gICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzW2ldLmF4aXMgPT09ICdob3Jpem9udGFsJyl7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3JjID0gaG9yaXpvbnRhbENhcnJpZXJcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmUuaGVpZ2h0fXB4YFxuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnN0eWxlLndpZHRoID0gYCR7c3F1YXJlLndpZHRoICogNH1weGBcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3JjID0gdmVydGljYWxDYXJyaWVyXG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUuaGVpZ2h0ID0gYCR7c3F1YXJlLmhlaWdodCAqIDR9cHhgXG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGh9cHhgXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNbaV0ubmFtZSA9PT0gJ1N1Ym1hcmluZScpe1xuLy8gICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzW2ldLmF4aXMgPT09ICdob3Jpem9udGFsJyl7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3JjID0gaG9yaXpvbnRhbFN1Ym1hcmluZVxuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHR9cHhgXG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGggKiAzfXB4YFxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zcmMgPSB2ZXJ0aWNhbFN1Ym1hcmluZVxuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHQgKiAzfXB4YFxuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnN0eWxlLndpZHRoID0gYCR7c3F1YXJlLndpZHRofXB4YFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzW2ldLm5hbWUgPT09ICdDcnVpc2VyJyl7XG4vLyAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNbaV0uYXhpcyA9PT0gJ2hvcml6b250YWwnKXtcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zcmMgPSBob3Jpem9udGFsQ3J1aXNlclxuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZS5oZWlnaHR9cHhgXG4vLyAgICAgICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGggKiAyfXB4YFxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zcmMgPSB2ZXJ0aWNhbENydWlzZXJcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmUuaGVpZ2h0ICogMn1weGBcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS53aWR0aCA9IGAke3NxdWFyZS53aWR0aH1weGBcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tpXS5uYW1lID09PSAnU21hbGxzaGlwJyl7XG4vLyAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNbaV0uYXhpcyA9PT0gJ2hvcml6b250YWwnKXtcbi8vICAgICAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zcmMgPSBob3Jpem9udGFsU21hbGxzaGlwXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGFycmF5T2ZQaHlzaWNhbFNoaXBzW2ldLnNyYyA9IHZlcnRpY2FsU21hbGxzaGlwXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmUuaGVpZ2h0fXB4YFxuLy8gICAgICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUud2lkdGggPSBgJHtzcXVhcmUud2lkdGh9cHhgXG4vLyAgICAgICAgIH0gXG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWtlQm9hcmQnKS5hcHBlbmRDaGlsZChhcnJheU9mUGh5c2ljYWxTaGlwc1tpXSlcbi8vICAgICAgICAgYXJyYXlPZlBoeXNpY2FsU2hpcHNbaV0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuLy8gICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS5sZWZ0ID0gKChwbGF5ZXJCb2FyZC5hbGxTaGlwc1tpXS5wbGFjZWRBdC54KSAqIDEwKSArICclJ1xuLy8gICAgICAgICBhcnJheU9mUGh5c2ljYWxTaGlwc1tpXS5zdHlsZS50b3AgPSAoKHBsYXllckJvYXJkLmFsbFNoaXBzW2ldLnBsYWNlZEF0LnkpICogMTApICsgJyUnXG4vLyAgICAgfVxuLy8gfSIsImV4cG9ydCBmdW5jdGlvbiByZXBvcnRSZXN1bHQocGxheWVycyl7XG4gICAgaWYgKHBsYXllcnNbMF0ucGxheWVyLndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykudGV4dENvbnRlbnQgPSBwbGF5ZXJzWzBdLnBsYXllci5uYW1lICsgJyBoYXMgd29uIHRoZSBnYW1lISdcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gcGxheWVyc1sxXS5wbGF5ZXIubmFtZSArICcgaGFzIHdvbiB0aGUgZ2FtZSEnXG4gICAgfVxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnXG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYWxsU2hpcHNEZXN0cm95ZWQ7XG4gICAgICAgIHRoaXMuY2hyb25vbG9naWNhbEdlbmVyYWxEYW1hZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5jaHJvbm9sb2dpY2FsU2hpcERhbWFnZSA9IFtdO1xuICAgIH1cbiAgICBpbml0KCl7XG4gICAgICAgIGZvciAobGV0IHk9MDsgeTwxMDsgeSsrKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHg9MDsgeDwxMDsgeCsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3hdID0geyBoYXNTaGlwOiBmYWxzZSwgaXNTaG90OiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2hpcCh5LCB4LCBzaGlwTmFtZSwgbGVuZ3RoLCBheGlzKXtcbiAgICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmICgoKHggKyBpKSA+IDkpIHx8ICh0aGlzLmJvYXJkW3ldW3graV0uaGFzU2hpcCA9PT0gdHJ1ZSkpe1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaG9yaXpvbnRhbCBwb3NpdGlvbicpOyAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmICgoKHkgKyBpKSA+IDkpIHx8ICh0aGlzLmJvYXJkW3kraV1beF0uaGFzU2hpcCA9PT0gdHJ1ZSkpe1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdmVydGljYWwgcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChuZXcgU2hpcChzaGlwTmFtZSwgbGVuZ3RoLCBheGlzKSlcbiAgICAgICAgdGhpcy5hbGxTaGlwc1t0aGlzLmFsbFNoaXBzLmxlbmd0aC0xXS5wbGFjZWRBdCA9IHsgeTogeSwgeDp4IH1cbiAgICAgICAgXG4gICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXS5zaGlwID0gdGhpcy5hbGxTaGlwc1t0aGlzLmFsbFNoaXBzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XS5zaGlwID0gdGhpcy5hbGxTaGlwc1t0aGlzLmFsbFNoaXBzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2soeSwgeCl7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdLmlzU2hvdCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXR0YWNraW5nIGxvY2F0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hyb25vbG9naWNhbEdlbmVyYWxEYW1hZ2UucHVzaCh7eTogeSwgeDp4fSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3hdLmlzU2hvdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XS5oYXNTaGlwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNocm9ub2xvZ2ljYWxTaGlwRGFtYWdlLnB1c2goe3k6IHksIHg6eH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3hdLnNoaXAuaXNTdW5rKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1NoaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGNoZWNrU2hpcHMoKXtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5hbGxTaGlwcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxTaGlwc1tpXS5pc1N1bmsoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gdGhpcy5hbGxTaGlwcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImxldCBheGlzO1xubGV0IHJhbmRvbUF4aXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUJvdFNoaXBzKGJvdEJvYXJkKXtcbiAgIHBsYWNlQm90QmF0dGxlc2hpcChib3RCb2FyZCk7XG4gICBwbGFjZUJvdENhcnJpZXIoYm90Qm9hcmQpO1xuICAgcGxhY2VCb3RTdWJtYXJpbmUoYm90Qm9hcmQpO1xuICAgcGxhY2VCb3RTdWJtYXJpbmUoYm90Qm9hcmQpO1xuICAgcGxhY2VCb3RDcnVpc2VyKGJvdEJvYXJkKTtcbiAgIHBsYWNlQm90Q3J1aXNlcihib3RCb2FyZCk7XG4gICBwbGFjZUJvdENydWlzZXIoYm90Qm9hcmQpO1xuICAgcGxhY2VCb3RTbWFsbHNoaXAoYm90Qm9hcmQpO1xuICAgcGxhY2VCb3RTbWFsbHNoaXAoYm90Qm9hcmQpO1xuICAgcGxhY2VCb3RTbWFsbHNoaXAoYm90Qm9hcmQpO1xufVxuXG5mdW5jdGlvbiBwbGFjZUJvdEJhdHRsZXNoaXAoYm90Qm9hcmQpe1xuICAgIHJhbmRvbUF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIGlmIChyYW5kb21BeGlzID09PSAwKXtcbiAgICAgICAgYXhpcyA9ICdob3Jpem9udGFsJzsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXhpcyA9ICd2ZXJ0aWNhbCc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJvdEJvYXJkLnBsYWNlU2hpcChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgJ0JhdHRsZXNoaXAnLCA1LCBheGlzKVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgcGxhY2VCb3RCYXR0bGVzaGlwKGJvdEJvYXJkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VCb3RDYXJyaWVyKGJvdEJvYXJkKXtcbiAgICByYW5kb21BeGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICBpZiAocmFuZG9tQXhpcyA9PT0gMCl7XG4gICAgICAgIGF4aXMgPSAnaG9yaXpvbnRhbCc7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aXMgPSAndmVydGljYWwnO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBib3RCb2FyZC5wbGFjZVNoaXAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksICdDYXJyaWVyJywgNCwgYXhpcylcbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgIHBsYWNlQm90Q2Fycmllcihib3RCb2FyZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlQm90U3VibWFyaW5lKGJvdEJvYXJkKXtcbiAgICByYW5kb21BeGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICBpZiAocmFuZG9tQXhpcyA9PT0gMCl7XG4gICAgICAgIGF4aXMgPSAnaG9yaXpvbnRhbCc7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aXMgPSAndmVydGljYWwnO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBib3RCb2FyZC5wbGFjZVNoaXAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksICdTdWJtYXJpbmUnLCAzLCBheGlzKVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgcGxhY2VCb3RTdWJtYXJpbmUoYm90Qm9hcmQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VCb3RDcnVpc2VyKGJvdEJvYXJkKXtcbiAgICByYW5kb21BeGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICBpZiAocmFuZG9tQXhpcyA9PT0gMCl7XG4gICAgICAgIGF4aXMgPSAnaG9yaXpvbnRhbCc7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aXMgPSAndmVydGljYWwnO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBib3RCb2FyZC5wbGFjZVNoaXAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksICdDcnVpc2VyJywgMiwgYXhpcylcbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgIHBsYWNlQm90Q3J1aXNlcihib3RCb2FyZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlQm90U21hbGxzaGlwKGJvdEJvYXJkKXtcbiAgICByYW5kb21BeGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICBpZiAocmFuZG9tQXhpcyA9PT0gMCl7XG4gICAgICAgIGF4aXMgPSAnaG9yaXpvbnRhbCc7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aXMgPSAndmVydGljYWwnO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBib3RCb2FyZC5wbGFjZVNoaXAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksICdTbWFsbHNoaXAnLCAxLCBheGlzKVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgcGxhY2VCb3RTbWFsbHNoaXAoYm90Qm9hcmQpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVCb3RCb2FyZChib3RCb2FyZCl7XG4gICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBxPTA7IHE8MTA7IHErKyl7XG4gICAgICAgICAgICBib3RCb2FyZC5ib2FyZFtpXVtxXS5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJvdEJvYXJkLmJvYXJkW2ldW3FdLmRvbS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKVxuICAgICAgICAgICAgaWYoaSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgaWYgKHEgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBib3RCb2FyZC5ib2FyZFtpXVtxXS5kb20uY2xhc3NMaXN0LmFkZCgndG9wTGVmdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxID09PSA5KXtcbiAgICAgICAgICAgICAgICAgICAgYm90Qm9hcmQuYm9hcmRbaV1bcV0uZG9tLmNsYXNzTGlzdC5hZGQoJ3RvcFJpZ2h0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpID09PSA5KXtcbiAgICAgICAgICAgICAgICBpZiAocSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGJvdEJvYXJkLmJvYXJkW2ldW3FdLmRvbS5jbGFzc0xpc3QuYWRkKCdib3R0b21MZWZ0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHEgPT09IDkpe1xuICAgICAgICAgICAgICAgICAgICBib3RCb2FyZC5ib2FyZFtpXVtxXS5kb20uY2xhc3NMaXN0LmFkZCgnYm90dG9tUmlnaHQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHBvc3RTaGlwRGVwbG95bWVudCwgbXVsdGlwbGF5ZXJBdHRhY2tpbmdTdGFnZSB9IGZyb20gJy4vc2V0dXBHYW1lJztcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJTaGlwc09uQm9hcmQgfSBmcm9tICcuL2Rpc3BsYXlTaGlwc09uQm9hcmQnXG5pbXBvcnQgeyBwMU5hbWUsIHAyTmFtZSB9IGZyb20gJy4vc2V0dXBHYW1lJ1xuXG5sZXQgaGlnaGxpZ2h0U2hpcFBsYWNlbWVudFRlbXA7XG5sZXQgc2hpcFRvRG9tVGVtcDtcbmxldCBjb3VudDtcbmxldCBzaGlwc0luZm8gPSBbXTtcblxuZnVuY3Rpb24gU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCl7XG4gICAgdGhpcy5uYW1lID0gc2hpcE5hbWUsXG4gICAgdGhpcy5sZW5ndGggPSBzaGlwTGVuZ3RoLFxuICAgIHRoaXMubWVzc2FnZSA9ICdwbGFjZSB5b3VyICcgKyB0aGlzLm5hbWUuc3Vic3RyaW5nKDAsIHRoaXMubmFtZS5sZW5ndGgpICsgYCAoJHt0aGlzLmxlbmd0aH0gJHt0aGlzLmxlbmd0aCA9PT0gMSA/ICdzcXVhcmUnIDogJ3NxdWFyZXMnfSlgXG59XG5cbmZ1bmN0aW9uIHN1cHBseVNoaXBzSW5mbygpe1xuICAgIHNoaXBzSW5mb1swXSA9IG5ldyBTaGlwKCdCYXR0bGVzaGlwJywgNSlcbiAgICBzaGlwc0luZm9bMV0gPSBuZXcgU2hpcCgnQ2FycmllcicsIDQpXG4gICAgc2hpcHNJbmZvWzJdID0gbmV3IFNoaXAoJ1N1Ym1hcmluZScsIDMpXG4gICAgc2hpcHNJbmZvWzNdID0gbmV3IFNoaXAoJ1N1Ym1hcmluZScsIDMpXG4gICAgc2hpcHNJbmZvWzRdID0gbmV3IFNoaXAoJ0NydWlzZXInLCAyKVxuICAgIHNoaXBzSW5mb1s1XSA9IG5ldyBTaGlwKCdDcnVpc2VyJywgMilcbiAgICBzaGlwc0luZm9bNl0gPSBuZXcgU2hpcCgnQ3J1aXNlcicsIDIpXG4gICAgc2hpcHNJbmZvWzddID0gbmV3IFNoaXAoJ1NtYWxsc2hpcCcsIDEpXG4gICAgc2hpcHNJbmZvWzhdID0gbmV3IFNoaXAoJ1NtYWxsc2hpcCcsIDEpXG4gICAgc2hpcHNJbmZvWzldID0gbmV3IFNoaXAoJ1NtYWxsc2hpcCcsIDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBzU3RhZ2UocEJvYXJkLCBwbGF5ZXJOdW1iZXIpe1xuICAgIGNvdW50ID0gMDtcbiAgICBzdXBwbHlTaGlwc0luZm8oKTtcbiAgICBsZXQgcGxheWVyQm9hcmREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyQm9hcmQnKTtcbiAgICBsZXQgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpO1xuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApXG4gICAgcGxheWVyQm9hcmREb20uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByZW1vdmVBY3RpdmVDbGFzcylcbiAgICBcbiAgICAvLyBCYXR0bGVzaGlwIGZpcnN0LCBvdGhlciBzaGlwcyBuZXh0XG4gICAgcGxhY2VTaGlwKHBCb2FyZCwgcGxheWVyTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwKHBCb2FyZCwgcGxheWVyTnVtYmVyKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gcEJvYXJkLm1vZGUgPT09ICdzaW5nbGVQbGF5ZXInID8gYFBsYXllciwgJHtzaGlwc0luZm9bY291bnRdLm1lc3NhZ2V9YCA6IChwbGF5ZXJOdW1iZXIgPT09IDAgPyBwMU5hbWUgOiBwMk5hbWUpICsgJywgJyArIHNoaXBzSW5mb1tjb3VudF0ubWVzc2FnZTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyQm9hcmQnKVxuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhpZ2hsaWdodFNoaXBQbGFjZW1lbnRUZW1wID0gKGV2KSA9PiBoaWdobGlnaHRTaGlwUGxhY2VtZW50KGV2LCBwQm9hcmQpKVxuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hpcFRvRG9tVGVtcCA9IChldikgPT4gc2hpcFRvRG9tKGV2LCBwQm9hcmQsIHBsYXllck51bWJlcikpXG59XG5cbi8vIEhpZ2hsaWdodHMgdGhlIGJvYXJkIHRvIHNlZSB3aGVyZSB0aGUgc2hpcCB3aWxsIGJlIHBsYWNlZCBvbiB0aGUgYm9hcmRcbmZ1bmN0aW9uIGhpZ2hsaWdodFNoaXBQbGFjZW1lbnQoZXYsIHBCb2FyZCl7XG4gICAgbGV0IGFjdGl2ZUFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJykpXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhY3RpdmVBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBhY3RpdmVBcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHE9MDsgcTwxMDsgcSsrKXtcbiAgICAgICAgICAgICAgICBpZiAoZXYudGFyZ2V0ID09PSBwQm9hcmQuYm9hcmRbaV1bcV0uZG9tKXsgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ21ha2VIb3Jpem9udGFsJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgej0wOyB6PHNoaXBzSW5mb1tjb3VudF0ubGVuZ3RoO3orKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocSArIHogPiA5KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBCb2FyZC5ib2FyZFtpXVtxK3pdLmRvbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnbWFrZVZlcnRpY2FsJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgej0wOyB6PHNoaXBzSW5mb1tjb3VudF0ubGVuZ3RoO3orKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSArIHogPiA5KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBCb2FyZC5ib2FyZFtpK3pdW3FdLmRvbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gc2hpcFRvRG9tKGV2LCBwQm9hcmQsIHBsYXllck51bWJlcil7XG4gICAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckJvYXJkJylcbiAgICBsZXQgYXhpcztcbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNoaXBUb0RvbVRlbXApXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGlnaGxpZ2h0U2hpcFBsYWNlbWVudFRlbXApXG4gICAgaWYgKCEoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpKXtcbiAgICAgICAgcGxhY2VTaGlwKHBCb2FyZCwgcGxheWVyTnVtYmVyKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlQnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWtlSG9yaXpvbnRhbCcpKXtcbiAgICAgICAgICAgIGF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgYXhpcyA9ICd2ZXJ0aWNhbCdcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgcG9zaXRpb24gdG8gcGxhY2UgdGhlIHNoaXAgaXMgdmFsaWQsIHRoZW4gY29udGludWUgd2l0aCB0aGUgbmV4dCBzaGlwLlxuICAgICAgICBpZiAoY2hlY2tTaGlwVmFsaWRpdHkocEJvYXJkLCBldi50YXJnZXQubG9jYXRpb24ueSwgZXYudGFyZ2V0LmxvY2F0aW9uLngsIGF4aXMsIHNoaXBzSW5mb1tjb3VudF0ubmFtZSwgc2hpcHNJbmZvW2NvdW50XS5sZW5ndGgpID09PSB0cnVlKXtcbiAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJTaGlwc09uQm9hcmQocEJvYXJkLCBjb3VudClcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gc2hpcHNJbmZvLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck51bWJlciA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURlcGxveUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gJ0FsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLiBZb3UgbWF5IG5vdyBkZXBsb3kuJ1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVwbG95QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3N0U2hpcERlcGxveW1lbnQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJOdW1iZXIgPT09IDEpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEZXBsb3lCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9ICdBbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZC4gWW91IG1heSBub3cgZGVwbG95LidcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcGxveUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXVsdGlwbGF5ZXJBdHRhY2tpbmdTdGFnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChwQm9hcmQsIHBsYXllck51bWJlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYWNlU2hpcChwQm9hcmQsIHBsYXllck51bWJlcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tTaGlwVmFsaWRpdHkoZ2FtZSwgeSwgeCwgYXhpcywgbmFtZSwgbGVuZ3RoKXtcbiAgICB0cnkge1xuICAgICAgICBnYW1lLnBsYWNlU2hpcCh5LCB4LCBuYW1lLCBsZW5ndGgsIGF4aXMpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcCgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKS5jbGFzc0xpc3QudG9nZ2xlKCdtYWtlVmVydGljYWwnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlQnV0dG9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWFrZUhvcml6b250YWwnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCl7XG4gICAgbGV0IGFjdGl2ZUFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJykpXG4gICAgZm9yIChsZXQgaT0wOyBpPGFjdGl2ZUFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYWN0aXZlQXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7ICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwbG95QnV0dG9uKCl7XG4gICAgbGV0IGRlcGxveUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlcGxveUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXBsb3lCdXR0b24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZVBoYXNlJykuYXBwZW5kQ2hpbGQoZGVwbG95QnV0dG9uKTtcbiAgICBkZXBsb3lCdXR0b24udGV4dENvbnRlbnQgPSAnREVQTE9ZJztcbn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCByZWNlaXZlQXR0YWNrKXtcbiAgICAgICAgc3VwZXIocmVjZWl2ZUF0dGFjaylcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51c2VkQXR0YWNrcyA9IFtdO1xuICAgIH1cbiAgICBhdHRhY2soeSwgeCwgZW5lbXkpe1xuICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnQm90Jyl7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnbm92aWNlJyl7XG4gICAgICAgICAgICAgICAgbGV0IHljb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGxldCB4Y29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBcbiAgICAgICAgICAgICAgICBlbmVteS5yZWNlaXZlQXR0YWNrKHljb3JkLCB4Y29yZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnZXhwZXJ0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG5lZ2F0aXZlT3JQb3NpdGl2ZSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtMSA6IDEgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuY2hyb25vbG9naWNhbFNoaXBEYW1hZ2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0QXR0YWNrID0gZW5lbXkuY2hyb25vbG9naWNhbFNoaXBEYW1hZ2VbZW5lbXkuY2hyb25vbG9naWNhbFNoaXBEYW1hZ2UubGVuZ3RoIC0gMV1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0YWNrTG9jYXRpb25ZID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IGxhc3RBdHRhY2sueSArIG5lZ2F0aXZlT3JQb3NpdGl2ZSA6IGxhc3RBdHRhY2sueVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRhY2tMb2NhdGlvblggPSBhdHRhY2tMb2NhdGlvblkgPT09IGxhc3RBdHRhY2sueSA/IGxhc3RBdHRhY2sueCArIG5lZ2F0aXZlT3JQb3NpdGl2ZSA6IGxhc3RBdHRhY2sueFxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tMb2NhdGlvblggPj0gMCB8fCBhdHRhY2tMb2NhdGlvblggPD0gOSB8fCBhdHRhY2tMb2NhdGlvblkgPj0gMCB8fCBhdHRhY2tMb2NhdGlvblkgPj0gOSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmJvYXJkW2F0dGFja0xvY2F0aW9uWV1bYXR0YWNrTG9jYXRpb25YXS5pc1Nob3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnJlY2VpdmVBdHRhY2soYXR0YWNrTG9jYXRpb25ZLCBhdHRhY2tMb2NhdGlvblgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5Y29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeGNvcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkucmVjZWl2ZUF0dGFjayh5Y29yZCwgeGNvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2lsbCByYW5kb21seSBhdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5Y29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4Y29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnJlY2VpdmVBdHRhY2soeWNvcmQsIHhjb3JkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5Y29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHhjb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBlbmVteS5yZWNlaXZlQXR0YWNrKHljb3JkLCB4Y29yZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZW15LnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyQXJlYXMsIGNyZWF0ZVBsYXllckJvYXJkIH0gZnJvbSAnLi9ib2FyZERvbS5qcydcbmltcG9ydCB7IHBsYWNlU2hpcHNTdGFnZSwgcmVtb3ZlQWN0aXZlQ2xhc3MgfSBmcm9tICcuL3BsYWNlU2hpcHNTdGFnZS5qcyc7XG5pbXBvcnQgeyBwbGFjZUJvdFNoaXBzLCBwb3B1bGF0ZUJvdEJvYXJkIH0gZnJvbSAnLi9wbGFjZUJvdFNoaXBzLmpzJ1xuaW1wb3J0IHsgZGlzcGxheUJvYXJkcyB9IGZyb20gJy4vZGlzcGxheUJvYXJkcy5qcydcbmltcG9ydCB7IHRha2VUdXJuc0F0dGFja2luZyB9IGZyb20gJy4vdGFrZVR1cm5zQXR0YWNraW5nLmpzJ1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgbGV0IHBsYXllcnMgPSBbXTtcbmV4cG9ydCBsZXQgcDFOYW1lO1xuZXhwb3J0IGxldCBwMk5hbWU7XG5cbmxldCBkaWZmaWN1bHR5Q2hvc2VuO1xuXG4vLyBPbmNlIGFsbCBzaGlwcyBhcmUgZGVwbG95ZWQsIHRoZSBnYW1lIGlzIHNldCB1cCwgZGlzcGxheWluZyBib3RoIGJvYXJkcyBvbiBzY3JlZW4uIFJlYWR5IGZvciBhdHRhY2suXG5cbi8vIEJhc2VkIG9uIG1lbnUgb3B0aW9ucywgdGhlIG1vZGUgaXMgZWl0aGVyICdzaW5nbGUgcGxheWVyJyBvciAnbXVsdGkgcGxheWVyJy5cbi8vIElmIHNpbmdsZSBwbGF5ZXIgaXMgY2hvc2VuLCB0aGVyZSBhcmUgdHdvIGRpZmZpY3VsdGllczogbm92aWNlIGFuZCBleHBlcnQuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBsYXllcihtb2RlLCBkaWZmaWN1bHR5LCBudW0pe1xuICAgIGlmIChudW0gPT09IDAgJiYgbW9kZSAhPT0gJ3NpbmdsZVBsYXllcicpe1xuICAgICAgICBwMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRQbGF5ZXIxTmFtZScpLnZhbHVlXG4gICAgICAgIHAyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFBsYXllcjJOYW1lJykudmFsdWVcbiAgICAgICAgbGVhdmVTdGFydGluZ01lbnUoKTtcbiAgICB9XG4gICAgbGV0IHBsYXllcjtcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgZGlmZmljdWx0eUNob3NlbiA9IGRpZmZpY3VsdHlcbiAgICBwbGF5ZXJCb2FyZC5pbml0KCk7XG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGVQbGF5ZXInKXtcbiAgICAgICAgcGxheWVyID0gbmV3IFBsYXllcignSHVtYW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobnVtID09PSAwKXtcbiAgICAgICAgICAgIG5hbWUgPSBwMU5hbWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5hbWUgPSBwMk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyID0gbmV3IFBsYXllcihuYW1lKVxuICAgIH1cblxuICAgIHBsYXllcnNbbnVtXSA9IHtcbiAgICAgICAgcGxheWVyOiBwbGF5ZXIsXG4gICAgICAgIHBsYXllckJvYXJkOiBwbGF5ZXJCb2FyZFxuICAgIH07XG5cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZVBsYXllcicpe1xuICAgICAgICBwbGF5ZXJzWzBdLnBsYXllckJvYXJkLm1vZGUgPSAnc2luZ2xlUGxheWVyJ1xuICAgIH1cblxuXG4gICAgY3JlYXRlUGxheWVyQXJlYXMobnVtKTtcbiAgICBjcmVhdGVQbGF5ZXJCb2FyZChwbGF5ZXJzW251bV0ucGxheWVyQm9hcmQuYm9hcmQpO1xuICAgIHBsYWNlU2hpcHNTdGFnZShwbGF5ZXJzW251bV0ucGxheWVyQm9hcmQsIG51bSk7ICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lUGhhc2UnKS5jbGFzc0xpc3QuYWRkKCdwcmVTdGFnZScpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0U2hpcERlcGxveW1lbnQoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZVBoYXNlJykuY2xhc3NMaXN0LnJlbW92ZSgncHJlU3RhZ2UnKVxuICAgIGlmIChwbGF5ZXJzWzBdLnBsYXllckJvYXJkLm1vZGUgPT09ICdzaW5nbGVQbGF5ZXInKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcGxveUJ1dHRvbicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zdFNoaXBEZXBsb3ltZW50KVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVwbG95QnV0dG9uJykucmVtb3ZlKCk7XG4gICAgICAgIGNyZWF0ZUJvdEJvYXJkKCk7XG4gICAgICAgIGRpc3BsYXlCb2FyZHMocGxheWVyc1swXSwgMCk7XG4gICAgICAgIGRpc3BsYXlCb2FyZHMocGxheWVyc1sxXSwgMSk7XG4gICAgICAgIGFkZFBsYXllcklkZW50aWZpY2F0aW9uKHBsYXllcnNbMF0sIDApXG4gICAgICAgIGFkZFBsYXllcklkZW50aWZpY2F0aW9uKHBsYXllcnNbMV0sIDEpXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgICAgIHRha2VUdXJuc0F0dGFja2luZygpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcGxveUJ1dHRvbicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zdFNoaXBEZXBsb3ltZW50KVxuICAgICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgICBzZXR1cFBsYXllcignbXVsdGlQbGF5ZXInLCAnbXVsdGknLCAxKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGxheWVyQXR0YWNraW5nU3RhZ2UoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZVBoYXNlJykuY2xhc3NMaXN0LnJlbW92ZSgncHJlU3RhZ2UnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXBsb3lCdXR0b24nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpcGxheWVyQXR0YWNraW5nU3RhZ2UpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcGxveUJ1dHRvbicpLnJlbW92ZSgpO1xuICAgIGRpc3BsYXlCb2FyZHMocGxheWVyc1swXSwgMCk7XG4gICAgZGlzcGxheUJvYXJkcyhwbGF5ZXJzWzFdLCAxKTtcbiAgICBhZGRQbGF5ZXJJZGVudGlmaWNhdGlvbihwbGF5ZXJzWzBdLCAwKTtcbiAgICBhZGRQbGF5ZXJJZGVudGlmaWNhdGlvbihwbGF5ZXJzWzFdLCAxKTtcbiAgICByZW1vdmVBY3RpdmVDbGFzcygpO1xuICAgIHRha2VUdXJuc0F0dGFja2luZygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3RCb2FyZCgpe1xuXG4gICAgbGV0IHBsYXllcjJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXIyQm9hcmQuaW5pdCgpO1xuICAgIGxldCBwbGF5ZXIyID0gbmV3IFBsYXllcignQm90Jyk7XG4gICAgcGxheWVyMi5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eUNob3NlblxuXG4gICAgcGxheWVyc1sxXSA9IHtcbiAgICAgICAgcGxheWVyOiBwbGF5ZXIyLFxuICAgICAgICBwbGF5ZXJCb2FyZDogcGxheWVyMkJvYXJkXG4gICAgfVxuICAgIHBvcHVsYXRlQm90Qm9hcmQocGxheWVyc1sxXS5wbGF5ZXJCb2FyZClcbiAgICBwbGFjZUJvdFNoaXBzKHBsYXllcnNbMV0ucGxheWVyQm9hcmQpO1xufVxuXG5mdW5jdGlvbiBsZWF2ZVN0YXJ0aW5nTWVudSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydGluZ01lbnUnKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTY3JlZW4oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyQXJlYScpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXBsb3lCdXR0b24nKS5yZW1vdmUoKTtcbn1cblxuLy8gQWRkaW5nIG5hbWUgJiBzaGlwcyBwcmV2aWV3cyB0byBrZWVwIHRyYWNrIG9mIHNoaXBzIGRlc3Ryb3llZFxuXG5mdW5jdGlvbiBhZGRQbGF5ZXJJZGVudGlmaWNhdGlvbihwbGF5ZXIsIG51bSl7XG4gICAgY29uc3QgcGxheWVySWRlbnRpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJJZGVudGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJJZGVudGlmaWNhdGlvbicgKyBudW0pXG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllck5hbWUuY2xhc3NMaXN0LmFkZCgncGxheWVyTmFtZScpXG4gICAgcGxheWVySWRlbnRpZmljYXRpb24uYXBwZW5kQ2hpbGQocGxheWVyTmFtZSlcblxuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXIucGxheWVyLm5hbWU7XG5cbiAgICAvLyBCYXR0bGVzaGlwXG4gICAgY29uc3QgYmF0dGxlc2hpcFByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJhdHRsZXNoaXBQcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXBQcmV2aWV3JyArIG51bSlcbiAgICBwbGF5ZXJJZGVudGlmaWNhdGlvbi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwUHJldmlldylcbiAgICBsZXQgYmF0dGxlc2hpcENoaWxkcmVuID0gW11cbiAgICBmb3IgKGxldCBpPTA7IGk8NTsgaSsrKXtcbiAgICAgICAgYmF0dGxlc2hpcENoaWxkcmVuW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYmF0dGxlc2hpcFByZXZpZXcuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcENoaWxkcmVuW2ldKVxuICAgIH1cblxuICAgIC8vIENhcnJpZXJcbiAgICBjb25zdCBjYXJyaWVyUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FycmllclByZXZpZXcuY2xhc3NMaXN0LmFkZCgnY2FycmllclByZXZpZXcnICsgbnVtKVxuICAgIHBsYXllcklkZW50aWZpY2F0aW9uLmFwcGVuZENoaWxkKGNhcnJpZXJQcmV2aWV3KVxuICAgIGxldCBjYXJyaWVyQ2hpbGRyZW4gPSBbXVxuICAgIGZvciAobGV0IGk9MDsgaTw0OyBpKyspe1xuICAgICAgICBjYXJyaWVyQ2hpbGRyZW5baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJyaWVyUHJldmlldy5hcHBlbmRDaGlsZChjYXJyaWVyQ2hpbGRyZW5baV0pXG4gICAgfVxuICAgIFxuICAgIC8vIFN1Ym1hcmluZXNcbiAgICBsZXQgc3VibWFyaW5lUHJldmlld3MgPSBbXVxuICAgIGxldCBzdWJtYXJpbmVDaGlsZHJlbiA9IFtdXG4gICAgZm9yIChsZXQgcT0wOyBxPDI7IHErKyl7XG4gICAgICAgIHN1Ym1hcmluZVByZXZpZXdzW3FdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VibWFyaW5lUHJldmlld3NbcV0uY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lUHJldmlldycgKyBudW0pXG4gICAgICAgIHBsYXllcklkZW50aWZpY2F0aW9uLmFwcGVuZENoaWxkKHN1Ym1hcmluZVByZXZpZXdzW3FdKVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MzsgaSsrKXtcbiAgICAgICAgICAgIHN1Ym1hcmluZUNoaWxkcmVuW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHN1Ym1hcmluZVByZXZpZXdzW3FdLmFwcGVuZENoaWxkKHN1Ym1hcmluZUNoaWxkcmVuW2ldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3J1aXNlcnNcbiAgICBsZXQgY3J1aXNlclByZXZpZXdzID0gW11cbiAgICBsZXQgY3J1aXNlckNoaWxkcmVuID0gW11cbiAgICBmb3IgKGxldCBxPTA7IHE8MzsgcSsrKXtcbiAgICAgICAgY3J1aXNlclByZXZpZXdzW3FdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY3J1aXNlclByZXZpZXdzW3FdLmNsYXNzTGlzdC5hZGQoJ2NydWlzZXJQcmV2aWV3JyArIG51bSlcbiAgICAgICAgcGxheWVySWRlbnRpZmljYXRpb24uYXBwZW5kQ2hpbGQoY3J1aXNlclByZXZpZXdzW3FdKVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MjsgaSsrKXtcbiAgICAgICAgICAgIGNydWlzZXJDaGlsZHJlbltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjcnVpc2VyUHJldmlld3NbcV0uYXBwZW5kQ2hpbGQoY3J1aXNlckNoaWxkcmVuW2ldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU21hbGxzaGlwc1xuICAgIGxldCBzbWFsbHNoaXBQcmV2aWV3cyA9IFtdXG4gICAgbGV0IHNtYWxsc2hpcENoaWxkcmVuID0gW11cbiAgICBmb3IgKGxldCBxPTA7IHE8MzsgcSsrKXtcbiAgICAgICAgc21hbGxzaGlwUHJldmlld3NbcV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzbWFsbHNoaXBQcmV2aWV3c1txXS5jbGFzc0xpc3QuYWRkKCdzbWFsbHNoaXBQcmV2aWV3JyArIG51bSlcbiAgICAgICAgcGxheWVySWRlbnRpZmljYXRpb24uYXBwZW5kQ2hpbGQoc21hbGxzaGlwUHJldmlld3NbcV0pXG4gICAgICAgIHNtYWxsc2hpcENoaWxkcmVuW3FdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc21hbGxzaGlwUHJldmlld3NbcV0uYXBwZW5kQ2hpbGQoc21hbGxzaGlwQ2hpbGRyZW5bcV0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllckJvYXJkJylbbnVtXS5hcHBlbmRDaGlsZChwbGF5ZXJJZGVudGlmaWNhdGlvbilcbn0iLCJleHBvcnQgY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGF4aXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdMZW5ndGggPSBsZW5ndGhcbiAgICAgICAgdGhpcy5heGlzID0gYXhpcztcbiAgICAgICAgdGhpcy5oaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdMZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vc2V0dXBHYW1lJ1xuaW1wb3J0IHsgcmVwb3J0UmVzdWx0IH0gZnJvbSAnLi9nYW1lQ29uY2x1c2lvbic7XG5pbXBvcnQgeyB1cGRhdGVCb2FyZERvbSB9IGZyb20gJy4vYXR0YWNrU3RhZ2VEb20uanMnXG5cbmxldCBjb3VudCA9IDA7XG5sZXQgYXJlYUhpdCA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gdGFrZVR1cm5zQXR0YWNraW5nKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IHBsYXllcnNbMF0ucGxheWVyLm5hbWUgKyAnIEl0XFwncyB5b3VyIHR1cm4gdG8gYXR0YWNrISBQaWNrIGEgbG9jYXRpb24gdG8gc2hvb3QgYXQuJ1xuICAgIGF0dGFja1BsYXllcjIoKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNrUGxheWVyMigpe1xuICAgIGlmIChwbGF5ZXJzWzBdLnBsYXllckJvYXJkLm1vZGUgPT09ICdzaW5nbGVQbGF5ZXInKXtcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykudGV4dENvbnRlbnQgPSAnSXRcXCdzIHlvdXIgdHVybiB0byBhdHRhY2shJztcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gcGxheWVyc1swXS5wbGF5ZXIubmFtZSArICcsIGl0XFwncyB5b3VyIHR1cm4gdG8gYXR0YWNrLic7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJCb2FyZCcpWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvY2Vzc1BsYXllcjJUYXJnZXQpXG59XG5cbi8vIFBsYXllciAxIGhhcyBjbGlja2VkIG9uIHBsYXllciAyIGJvYXJkLCBhdHRhY2sgaXMgcHJvY2Vzc2VkIGhlcmVcblxuZnVuY3Rpb24gcHJvY2Vzc1BsYXllcjJUYXJnZXQoZXYpe1xuICAgIGxldCBjYXVnaHQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgIGZvciAobGV0IHE9MDsgcTwxMDsgcSsrKXtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJzWzFdLnBsYXllckJvYXJkLmJvYXJkW2ldW3FdLmRvbSA9PT0gZXYudGFyZ2V0KXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQm9hcmQnKVsxXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2Nlc3NQbGF5ZXIyVGFyZ2V0KVxuICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgc2hvdCBhdCBjbGlja2VkIGxvY2F0aW9uLiBJZiBpbnZhbGlkLCByZWRvIHdob2xlIHByb2Nlc3MuXG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzWzBdLnBsYXllci5hdHRhY2soaSwgcSwgcGxheWVyc1sxXS5wbGF5ZXJCb2FyZClcbiAgICAgICAgICAgICAgICB9IGNhdGNoe1xuICAgICAgICAgICAgICAgICAgICBjYXVnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gJ0ludmFsaWQgc2hvdC4gUGljayBhbm90aGVyIGxvY2F0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRhY2tQbGF5ZXIyLCAxMjUwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNhdWdodCl7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkRG9tKHBsYXllcnNbMV0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY29tbXVuaWNhdGVBdHRhY2tJbmZvLCAwLCBwbGF5ZXJzWzBdLCBwbGF5ZXJzWzFdLCBpLCBxKVxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzWzFdLnBsYXllckJvYXJkLmFsbFNoaXBzRGVzdHJveWVkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbMF0ucGxheWVyLndpbm5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlcG9ydFJlc3VsdCwgMCwgcGxheWVycyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dGFja1BsYXllcjEsIDEyNTApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFja1BsYXllcjEoKXtcbiAgICBsZXQgY2F1Z2h0ID0gZmFsc2U7XG4gICAgaWYgKHBsYXllcnNbMF0ucGxheWVyQm9hcmQubW9kZSA9PT0gJ3NpbmdsZVBsYXllcicpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBwbGF5ZXJzWzFdLnBsYXllci5hdHRhY2soMCwgMCwgcGxheWVyc1swXS5wbGF5ZXJCb2FyZCk7XG4gICAgICAgIH0gY2F0Y2h7XG4gICAgICAgICAgICBhdHRhY2tQbGF5ZXIxKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYXVnaHQpe1xuICAgICAgICAgICAgYXJlYUhpdC55ID0gcGxheWVyc1swXS5wbGF5ZXJCb2FyZC5jaHJvbm9sb2dpY2FsR2VuZXJhbERhbWFnZVtwbGF5ZXJzWzBdLnBsYXllckJvYXJkLmNocm9ub2xvZ2ljYWxHZW5lcmFsRGFtYWdlLmxlbmd0aCAtIDFdLnk7XG4gICAgICAgICAgICBhcmVhSGl0LnggPSBwbGF5ZXJzWzBdLnBsYXllckJvYXJkLmNocm9ub2xvZ2ljYWxHZW5lcmFsRGFtYWdlW3BsYXllcnNbMF0ucGxheWVyQm9hcmQuY2hyb25vbG9naWNhbEdlbmVyYWxEYW1hZ2UubGVuZ3RoIC0gMV0ueDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY29tbXVuaWNhdGVBdHRhY2tJbmZvLCAwLCBwbGF5ZXJzWzFdLCBwbGF5ZXJzWzBdLCBhcmVhSGl0LnksIGFyZWFIaXQueCk7XG4gICAgICAgICAgICB1cGRhdGVCb2FyZERvbShwbGF5ZXJzWzBdKVxuICAgICAgICAgICAgaWYgKHBsYXllcnNbMF0ucGxheWVyQm9hcmQuYWxsU2hpcHNEZXN0cm95ZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHBsYXllcnNbMV0ucGxheWVyLndpbm5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXBvcnRSZXN1bHQsIDAsIHBsYXllcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dGFja1BsYXllcjIsIDEyNTApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IHBsYXllcnNbMV0ucGxheWVyLm5hbWUgKyAnLCBpdFxcJ3MgeW91ciB0dXJuIHRvIGF0dGFjay4nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQm9hcmQnKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2Nlc3NQbGF5ZXIxVGFyZ2V0KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1BsYXllcjFUYXJnZXQoZXYpe1xuICAgIGxldCBjYXVnaHQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgIGZvciAobGV0IHE9MDsgcTwxMDsgcSsrKXtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJzWzBdLnBsYXllckJvYXJkLmJvYXJkW2ldW3FdLmRvbSA9PT0gZXYudGFyZ2V0KXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJCb2FyZCcpWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvY2Vzc1BsYXllcjFUYXJnZXQpXG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzWzFdLnBsYXllci5hdHRhY2soaSwgcSwgcGxheWVyc1swXS5wbGF5ZXJCb2FyZClcbiAgICAgICAgICAgICAgICB9IGNhdGNoe1xuICAgICAgICAgICAgICAgICAgICBjYXVnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gJ0ludmFsaWQgc2hvdC4gUGljayBhbm90aGVyIGxvY2F0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRhY2tQbGF5ZXIxLCAxMjUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjYXVnaHQpe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZERvbShwbGF5ZXJzWzBdKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNvbW11bmljYXRlQXR0YWNrSW5mbywgMCwgcGxheWVyc1sxXSwgcGxheWVyc1swXSwgaSwgcSlcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyc1swXS5wbGF5ZXJCb2FyZC5hbGxTaGlwc0Rlc3Ryb3llZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzWzFdLnBsYXllci53aW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXBvcnRSZXN1bHQsIDAsIHBsYXllcnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRhY2tQbGF5ZXIyLCAxMjUwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21tdW5pY2F0ZUF0dGFja0luZm8ob2ZmZW5zZSwgZGVmZW5zZSwgeSwgeCl7XG4gICAgaWYgKGRlZmVuc2UucGxheWVyQm9hcmQuYm9hcmRbeV1beF0uaGFzU2hpcCA9PT0gdHJ1ZSl7XG4gICAgICAgIGlmIChvZmZlbnNlLnBsYXllci5uYW1lID09PSAnYm90Jyl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnRleHRDb250ZW50ID0gJ1RoZSBib3QgaGFzIHNob3QuLiBhbmQgdGhleSBoaXQgeW91ciAnICsgbWFrZUxvd2VyY2FzZShkZWZlbnNlLnBsYXllckJvYXJkLmJvYXJkW3ldW3hdLnNoaXAubmFtZSkgKyAnISc7ICBcbiAgICAgICAgfWVsc2UgaWYgKGRlZmVuc2UucGxheWVyLm5hbWUgPT09ICdib3QnKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykudGV4dENvbnRlbnQgPSAnWW91IHNob290Li4gYW5kIG1hbmFnZWQgdG8gaGl0IHRoZSBib3RcXCdzICcgKyBtYWtlTG93ZXJjYXNlKGRlZmVuc2UucGxheWVyQm9hcmQuYm9hcmRbeV1beF0uc2hpcC5uYW1lKSArICchJzsgIFxuICAgICAgICB9ZWxzZSBpZiAob2ZmZW5zZS5wbGF5ZXIubmFtZSAhPT0gJ2JvdCcpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IG9mZmVuc2UucGxheWVyLm5hbWUgKyAnIGhhcyBzaG90Li4gYW5kIHRoZXkgaGl0ICcgKyBkZWZlbnNlLnBsYXllci5uYW1lICsgJ1xcJ3MnICsgJyAnICsgbWFrZUxvd2VyY2FzZShkZWZlbnNlLnBsYXllckJvYXJkLmJvYXJkW3ldW3hdLnNoaXAubmFtZSkgKyAnISc7ICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZmVuc2UucGxheWVyLm5hbWUgPT09ICdib3QnKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykudGV4dENvbnRlbnQgPSAnVGhlIGJvdCBoYXMgc2hvdC4uIGFuZCB0aGV5IG1pc3NlZC4nICBcbiAgICAgICAgfWVsc2UgaWYgKGRlZmVuc2UucGxheWVyLm5hbWUgPT09ICdib3QnKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykudGV4dENvbnRlbnQgPSAnWW91IHNob290Li4gYW5kIHlvdSBoaXQgbm90aGluZy4nICBcbiAgICAgICAgfWVsc2UgaWYob2ZmZW5zZS5wbGF5ZXIubmFtZSAhPT0gJ2JvdCcpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IG9mZmVuc2UucGxheWVyLm5hbWUgKyAnIGhhcyBzaG90Li4gYW5kIHRoZXkgaGl0IG5vdGhpbmcuJyAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VMb3dlcmNhc2Uoc3RyaW5nKXtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYmF0dGxlc2hpcEdhbWVUaXRsZSBmcm9tICcuL2Fzc2V0cy9iYXR0bGVzaGlwTG9nby5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcFBORyBmcm9tICcuL2Fzc2V0cy9iYXR0bGVzaGlwSW1hZ2UucG5nJ1xuaW1wb3J0IHsgc2V0dXBQbGF5ZXIgfSBmcm9tICcuL3NldHVwR2FtZS5qcydcblxubGV0IGVycm9ycyA9IFtdO1xuXG4vLyBJbml0aWFsIG1lbnUuIERldGVybWluZSBpZiBwbGF5aW5nIHZzIGJvdCBvciBodW1hbi5cblxuY29uc3Qgc3RhcnRpbmdNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdGFydGluZ01lbnUuY2xhc3NMaXN0LmFkZCgnc3RhcnRpbmdNZW51Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXJ0aW5nTWVudSlcblxuY29uc3QgYmF0dGxlc2hpcExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmJhdHRsZXNoaXBMb2dvLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXBMb2dvJylcbmJhdHRsZXNoaXBMb2dvLnNyYyA9IGJhdHRsZXNoaXBHYW1lVGl0bGU7XG5zdGFydGluZ01lbnUuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcExvZ28pXG5cbmNvbnN0IGJhdHRsZXNoaXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYmF0dGxlc2hpcEltYWdlLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXBJbWFnZScpXG5iYXR0bGVzaGlwSW1hZ2Uuc3JjID0gYmF0dGxlc2hpcFBORztcbnN0YXJ0aW5nTWVudS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwSW1hZ2UpXG5cbmNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9uc0NvbnRhaW5lcicpXG5zdGFydGluZ01lbnUuYXBwZW5kQ2hpbGQob3B0aW9uc0NvbnRhaW5lcik7XG5cbmNvbnN0IHBsYXlBZ2FpbnN0Qm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wbGF5QWdhaW5zdEJvdC5jbGFzc0xpc3QuYWRkKCdwbGF5QWdhaW5zdEJvdCcpXG5wbGF5QWdhaW5zdEJvdC50ZXh0Q29udGVudCA9ICdTSU5HTEUgUExBWUVSJ1xub3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QWdhaW5zdEJvdClcblxuY29uc3QgcGxheUFnYWluc3RQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBsYXlBZ2FpbnN0UGxheWVyLmNsYXNzTGlzdC5hZGQoJ3BsYXlBZ2FpbnN0UGxheWVyJylcbnBsYXlBZ2FpbnN0UGxheWVyLnRleHRDb250ZW50ID0gJ01VTFRJIFBMQVlFUidcbm9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUFnYWluc3RQbGF5ZXIpXG5cbi8vIHBsYXkgdnMgYm90XG5wbGF5QWdhaW5zdEJvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdERpZmZpY3VsdHkpXG5cbmZ1bmN0aW9uIHNlbGVjdERpZmZpY3VsdHkoKXtcbiAgICBwbGF5QWdhaW5zdEJvdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdERpZmZpY3VsdHkpXG4gICAgb3B0aW9uc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IGVhc3lEaWZmaWN1bHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWFzeURpZmZpY3VsdHkuY2xhc3NMaXN0LmFkZCgnZWFzeURpZmZpY3VsdHknKVxuICAgIGVhc3lEaWZmaWN1bHR5LnRleHRDb250ZW50ID0gJ05PVklDRSc7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlYXN5RGlmZmljdWx0eSk7XG5cbiAgICBjb25zdCBoYXJkRGlmZmljdWx0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhcmREaWZmaWN1bHR5LmNsYXNzTGlzdC5hZGQoJ2hhcmREaWZmaWN1bHR5JylcbiAgICBoYXJkRGlmZmljdWx0eS50ZXh0Q29udGVudCA9ICdFWFBFUlQnO1xuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaGFyZERpZmZpY3VsdHkpXG4gICAgbGV0IHNldFVwR2FtZVRlbXA7XG4gICAgZWFzeURpZmZpY3VsdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRVcEdhbWVUZW1wID0gKCkgPT57XG4gICAgICAgIGVhc3lEaWZmaWN1bHR5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0VXBHYW1lVGVtcClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHNldHVwUGxheWVyKCdzaW5nbGVQbGF5ZXInLCAnbm92aWNlJywgMClcbiAgICB9KVxuXG4gICAgaGFyZERpZmZpY3VsdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRVcEdhbWVUZW1wID0gKCkgPT57XG4gICAgICAgIGhhcmREaWZmaWN1bHR5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0VXBHYW1lVGVtcClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHNldHVwUGxheWVyKCdzaW5nbGVQbGF5ZXInLCAnZXhwZXJ0JywgMClcbiAgICB9KVxufVxuXG4vLyBwbGF5IHZzIHBsYXllclxucGxheUFnYWluc3RQbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9tcHRQbGF5ZXJOYW1lcylcblxuZnVuY3Rpb24gcHJvbXB0UGxheWVyTmFtZXMoKXtcbiAgICBwbGF5QWdhaW5zdFBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByb21wdFBsYXllck5hbWVzKVxuICAgIG9wdGlvbnNDb250YWluZXIudGV4dENvbnRlbnQ9ICcnO1xuXG4gICAgY29uc3QgcGxheWVyMU5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIxTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxTmFtZUNvbnRhaW5lcicpO1xuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMU5hbWVDb250YWluZXIpXG5cbiAgICBjb25zdCBwbGF5ZXIyTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllcjJOYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjJOYW1lQ29udGFpbmVyJyk7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXIyTmFtZUNvbnRhaW5lcilcbiAgICBcbiAgICBjb25zdCBwbGF5ZXIxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIxTGFiZWwudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgTmFtZSc7XG4gICAgcGxheWVyMU5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMUxhYmVsKVxuXG4gICAgY29uc3QgaW5wdXRQbGF5ZXIxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRQbGF5ZXIxTmFtZS5jbGFzc0xpc3QuYWRkKCdpbnB1dFBsYXllcjFOYW1lJylcbiAgICBwbGF5ZXIxTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFBsYXllcjFOYW1lKVxuXG4gICAgY29uc3QgcGxheWVyMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyMkxhYmVsLnRleHRDb250ZW50ID0gJ1BsYXllciAyIE5hbWUnO1xuICAgIHBsYXllcjJOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcjJMYWJlbClcblxuICAgIGNvbnN0IGlucHV0UGxheWVyMk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0UGxheWVyMk5hbWUuY2xhc3NMaXN0LmFkZCgnaW5wdXRQbGF5ZXIyTmFtZScpXG4gICAgcGxheWVyMk5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRQbGF5ZXIyTmFtZSlcblxuICAgIGNvbnN0IHBsYXlNdWx0aXBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXlNdWx0aXBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5TXVsdGlwbGF5ZXJCdXR0b24nKTtcbiAgICBwbGF5TXVsdGlwbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSAnUExBWSc7XG4gICAgc3RhcnRpbmdNZW51LmFwcGVuZENoaWxkKHBsYXlNdWx0aXBsYXllckJ1dHRvbilcblxuICAgIHBsYXlNdWx0aXBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlNdWx0aXBsYXllcilcbn1cblxuZnVuY3Rpb24gcGxheU11bHRpcGxheWVyKCl7XG4gICAgZXJyb3JzID0gW107XG4gICAgICAgIGxldCBhbGxFcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3JNZXNzYWdlJylcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGFsbEVycm9ycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBhbGxFcnJvcnNbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UGxheWVyMU5hbWUnKS52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgICAgICBlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ2Vycm9yTWVzc2FnZScpXG4gICAgICAgICAgICBlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ID0gJ0NhblxcJ3QgYmUgbGVmdCBlbXB0eSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMU5hbWVDb250YWluZXInKS5hcHBlbmRDaGlsZChlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdKVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFBsYXllcjFOYW1lJykudmFsdWUubGVuZ3RoID4gOCl7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgICAgIGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmFkZCgnZXJyb3JNZXNzYWdlJylcbiAgICAgICAgICAgIGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgPSAnTXVzdCBiZSA4IGNoYXJzLiBvciBsZXNzJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxTmFtZUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0pXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UGxheWVyMU5hbWUnKS52YWx1ZSA9PT0gJ0h1bWFuJyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRQbGF5ZXIxTmFtZScpLnZhbHVlID09PSAnQm90Jyl7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgICAgIGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmFkZCgnZXJyb3JNZXNzYWdlJylcbiAgICAgICAgICAgIGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgPSAnUGxheWVyIDEgbmFtZSBpcyBpbnZhbGlkJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxTmFtZUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UGxheWVyMk5hbWUnKS52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgICAgICBlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ2Vycm9yTWVzc2FnZScpXG4gICAgICAgICAgICBlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ID0gJ0NhblxcJ3QgYmUgbGVmdCBlbXB0eSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMk5hbWVDb250YWluZXInKS5hcHBlbmRDaGlsZChlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdKVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFBsYXllcjJOYW1lJykudmFsdWUgPT09ICdIdW1hbicgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UGxheWVyMk5hbWUnKS52YWx1ZSA9PT0gJ0JvdCcpe1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgICAgICBlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ2Vycm9yTWVzc2FnZScpXG4gICAgICAgICAgICBlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ID0gJ1BsYXllciAyIG5hbWUgaXMgaW52YWxpZCc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMk5hbWVDb250YWluZXInKS5hcHBlbmRDaGlsZChlcnJvcnNbZXJyb3JzLmxlbmd0aCAtIDFdKVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFBsYXllcjJOYW1lJykudmFsdWUubGVuZ3RoID4gOCl7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgICAgIGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmFkZCgnZXJyb3JNZXNzYWdlJylcbiAgICAgICAgICAgIGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgPSAnTXVzdCBiZSA4IGNoYXJzLiBvciBsZXNzJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyTmFtZUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGVycm9yc1tlcnJvcnMubGVuZ3RoIC0gMV0pXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlNdWx0aXBsYXllckJ1dHRvbicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheU11bHRpcGxheWVyKVxuICAgICAgICAgICAgc2V0dXBQbGF5ZXIoJ211bHRpUGxheWVyJywgJ211bHRpJywgMCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UGxheWVyMU5hbWUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UGxheWVyMk5hbWUnKS52YWx1ZSlcbiAgICAgICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==