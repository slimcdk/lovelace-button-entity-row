/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/card-tools/src/action.js":
/*!***********************************************!*\
  !*** ./node_modules/card-tools/src/action.js ***!
  \***********************************************/
/*! exports provided: bindActionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionHandler\", function() { return bindActionHandler; });\nfunction bindActionHandler(element, options={}) {\n  customElements.whenDefined(\"long-press\").then(() => {\n    const longpress = document.body.querySelector(\"long-press\");\n    longpress.bind(element);\n  });\n  customElements.whenDefined(\"action-handler\").then(() => {\n    const actionHandler = document.body.querySelector(\"action-handler\");\n    actionHandler.bind(element, options);\n  });\n  return element;\n}\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/action.js?");

/***/ }),

/***/ "./node_modules/card-tools/src/deviceID.js":
/*!*************************************************!*\
  !*** ./node_modules/card-tools/src/deviceID.js ***!
  \*************************************************/
/*! exports provided: deviceID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deviceID\", function() { return deviceID; });\nfunction _deviceID() {\n  const ID_STORAGE_KEY = 'lovelace-player-device-id';\n  if(window['fully'] && typeof fully.getDeviceId === \"function\")\n    return fully.getDeviceId();\n  if(!localStorage[ID_STORAGE_KEY])\n  {\n    const s4 = () => {\n      return Math.floor((1+Math.random())*100000).toString(16).substring(1);\n    }\n    localStorage[ID_STORAGE_KEY] = `${s4()}${s4()}-${s4()}${s4()}`;\n  }\n  return localStorage[ID_STORAGE_KEY];\n};\n\nlet deviceID = _deviceID();\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/deviceID.js?");

/***/ }),

/***/ "./node_modules/card-tools/src/hass.js":
/*!*********************************************!*\
  !*** ./node_modules/card-tools/src/hass.js ***!
  \*********************************************/
/*! exports provided: hass, provideHass, lovelace, lovelace_view, load_lovelace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hass\", function() { return hass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"provideHass\", function() { return provideHass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lovelace\", function() { return lovelace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lovelace_view\", function() { return lovelace_view; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load_lovelace\", function() { return load_lovelace; });\nfunction hass() {\n  if(document.querySelector('hc-main'))\n    return document.querySelector('hc-main').hass;\n\n  if(document.querySelector('home-assistant'))\n    return document.querySelector('home-assistant').hass;\n\n  return undefined;\n};\n\nfunction provideHass(element) {\n  if(document.querySelector('hc-main'))\n    return document.querySelector('hc-main').provideHass(element);\n\n  if(document.querySelector('home-assistant'))\n    return document.querySelector(\"home-assistant\").provideHass(element);\n\n  return undefined;\n}\n\nfunction lovelace() {\n  var root = document.querySelector(\"hc-main\");\n  if(root) {\n    var ll = root._lovelaceConfig;\n    ll.current_view = root._lovelacePath;\n    return ll;\n  }\n\n  root = document.querySelector(\"home-assistant\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\")\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\")\n  if (root) {\n    var ll =  root.lovelace\n    ll.current_view = root.___curView;\n    return ll;\n  }\n\n  return null;\n}\n\nfunction lovelace_view() {\n  var root = document.querySelector(\"hc-main\");\n  if(root) {\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hc-lovelace\");\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hui-view\");\n    return root;\n  }\n\n  root = document.querySelector(\"home-assistant\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"ha-app-layout #view\");\n  root = root && root.firstElementChild;\n  return root;\n}\n\nfunction load_lovelace() {\n  if(customElements.get(\"hui-view\")) return true;\n\n  const res = document.createElement(\"partial-panel-resolver\");\n  res.hass = hass();\n  if(!res.hass || !res.hass.panels)\n    return false;\n  res.route = {path: \"/lovelace/\"};\n  res._updateRoutes();\n  try {\n    document.querySelector(\"home-assistant\").appendChild(res);\n  } catch (error) {\n  } finally {\n    document.querySelector(\"home-assistant\").removeChild(res);\n  }\n  if(customElements.get(\"hui-view\")) return true;\n  return false;\n}\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/hass.js?");

/***/ }),

/***/ "./node_modules/card-tools/src/lit-element.js":
/*!****************************************************!*\
  !*** ./node_modules/card-tools/src/lit-element.js ***!
  \****************************************************/
/*! exports provided: LitElement, html, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LitElement\", function() { return LitElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\nconst LitElement = customElements.get('home-assistant-main')\n  ? Object.getPrototypeOf(customElements.get('home-assistant-main'))\n  : Object.getPrototypeOf(customElements.get('hui-view'));\n\nconst html = LitElement.prototype.html;\n\nconst css = LitElement.prototype.css;\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/lit-element.js?");

/***/ }),

/***/ "./node_modules/card-tools/src/templates.js":
/*!**************************************************!*\
  !*** ./node_modules/card-tools/src/templates.js ***!
  \**************************************************/
/*! exports provided: parseTemplate, hasTemplate, subscribeRenderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTemplate\", function() { return parseTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasTemplate\", function() { return hasTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscribeRenderTemplate\", function() { return subscribeRenderTemplate; });\n/* harmony import */ var _hass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass.js */ \"./node_modules/card-tools/src/hass.js\");\n/* harmony import */ var _deviceID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deviceID.js */ \"./node_modules/card-tools/src/deviceID.js\");\n\n\n\nasync function parseTemplate(hass, str, specialData = {}) {\n  if (!hass) hass = hass();\n  if (typeof(specialData === \"string\")) specialData = {};\n    specialData = Object.assign({\n      user: hass.user.name,\n      browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__[\"deviceID\"],\n      hash: location.hash.substr(1) || ' ',\n    },\n    specialData);\n\n    for (var k in specialData) {\n      var re = new RegExp(`\\\\{${k}\\\\}`, \"g\");\n      str = str.replace(re, specialData[k]);\n    }\n\n    return hass.callApi(\"POST\", \"template\", {template: str});\n};\n\nfunction hasTemplate(str) {\n  if(String(str).includes(\"{%\"))\n    return true;\n  if(String(str).includes(\"{{\"))\n    return true;\n}\n\nfunction subscribeRenderTemplate(conn, onChange, params) {\n  // params = {template, entity_ids, variables}\n  if(!conn)\n    conn = Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().connection;\n  let variables = {\n    user: Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().user.name,\n    browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__[\"deviceID\"],\n    hash: location.hash.substr(1) || ' ',\n    ...params.variables,\n  };\n  let template = params.template;\n  let entity_ids = params.entity_ids;\n\n  return conn.subscribeMessage(\n    (msg) => {\n      let res = msg.result;\n      // Localize \"_(key)\" if found in template results\n      const localize_function = /_\\([^)]*\\)/g;\n      res = res.replace(localize_function, (key) => Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])().localize(key.substring(2, key.length-1)) || key);\n      onChange(res)\n    },\n    { type: \"render_template\",\n      template,\n      variables,\n      entity_ids,\n    }\n  );\n};\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/templates.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, private, version, description, scripts, repository, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"weekday-entity-row\\\",\\\"private\\\":true,\\\"version\\\":\\\"1.0.0\\\",\\\"description\\\":\\\"\\\",\\\"scripts\\\":{\\\"build\\\":\\\"webpack\\\",\\\"watch\\\":\\\"webpack --watch --mode=development\\\",\\\"update-card-tools\\\":\\\"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"github.com:slimcdk/lovelace-weekday-entity-row\\\"},\\\"keywords\\\":[],\\\"author\\\":\\\"Christian Skjerning\\\",\\\"license\\\":\\\"MIT\\\",\\\"devDependencies\\\":{\\\"webpack\\\":\\\"^4.41.6\\\",\\\"webpack-cli\\\":\\\"^3.3.11\\\"},\\\"dependencies\\\":{\\\"card-tools\\\":\\\"github:thomasloven/lovelace-card-tools\\\"}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var card_tools_src_lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-tools/src/lit-element */ \"./node_modules/card-tools/src/lit-element.js\");\n/* harmony import */ var card_tools_src_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! card-tools/src/templates */ \"./node_modules/card-tools/src/templates.js\");\n/* harmony import */ var card_tools_src_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! card-tools/src/action */ \"./node_modules/card-tools/src/action.js\");\n\n\n\n\nconst OPTIONS = [\n  \"icon\",\n  \"active\",\n  \"name\",\n  \"secondary\",\n  \"state\",\n  \"condition\",\n  \"image\",\n  \"entity\",\n  // Secret option -\n  // Set color to a hs-color value (\"[<hue>,<saturation>]\")\n  // with hue in the range 0-360 and saturation 0-100.\n  // Works only if entity is unset and active is set.\n  \"color\",\n]\n\nclass TemplateEntityRow extends card_tools_src_lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n\n  static get properties() {\n    return {\n      hass: {},\n      state: {},\n    };\n  }\n\n  setConfig(config) {\n    this._config = {...config};\n    this.state = {...this._config};\n\n    let entity_ids = this._config.entity_ids;\n    if(!entity_ids && this._config.entity && !Object(card_tools_src_templates__WEBPACK_IMPORTED_MODULE_1__[\"hasTemplate\"])(this._config.entity))\n      entity_ids = [this._config.entity];\n    for(const k of OPTIONS) {\n      if(this._config[k] && Object(card_tools_src_templates__WEBPACK_IMPORTED_MODULE_1__[\"hasTemplate\"])(this._config[k])) {\n        Object(card_tools_src_templates__WEBPACK_IMPORTED_MODULE_1__[\"subscribeRenderTemplate\"])(null, (res) => {\n          this.state[k] = res;\n          this.requestUpdate();\n        }, {\n          template: this._config[k],\n          variables: {config: this._config},\n          entity_ids,\n        });\n      }\n    }\n  }\n\n  render() {\n    if (this.state.condition !== undefined && String(this.state.condition).toLowerCase() !== \"true\")\n      return card_tools_src_lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]``;\n\n    const base = this.hass.states[this.state.entity];\n    const entity = base && JSON.parse(JSON.stringify(base)) || {\n      entity_id: \"light.\",\n      attributes: {icon: \"no:icon\"},\n    };\n\n    const icon = this.state.icon !== undefined\n      ? this.state.icon || \"no:icon\"\n      : undefined;\n    ;\n    const image = this.state.image;\n    const name = this.state.name !== undefined\n      ? this.state.name\n      : base ? base.attributes.friendly_name || base.entity_id : undefined\n    ;\n    const secondary = this.state.secondary;\n    const state = this.state.state !== undefined\n      ? this.state.state\n      : entity ? entity.state : undefined\n    ;\n    const active = this.state.active !== undefined\n      ? String(this.state.active).toLowerCase() === \"true\"\n      : undefined\n    ;\n\n    if(active !== undefined) {\n      entity.attributes.brightness = 255;\n      entity.attributes.hs_color = this.state.color !== undefined && !Object(card_tools_src_templates__WEBPACK_IMPORTED_MODULE_1__[\"hasTemplate\"])(this.state.color)\n      ? JSON.parse(this.state.color)\n      : [0,0];\n    }\n\n    return card_tools_src_lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <div id=\"wrapper\">\n        <state-badge\n          .hass=${this.hass}\n          .stateObj=${entity}\n          style=${active !== undefined\n              ? active\n                ? \"--paper-item-icon-color: var(--paper-item-icon-active-color, #fdd835);\"\n                : \"--paper-item-icon-active-color: var(--paper-item-icon-color, #44739e);\"\n              : \"\"\n          }\n          .overrideIcon=${icon}\n          .overrideImage=${image}\n        ></state-badge>\n        <div class=\"flex\">\n          <div\n            class=\"info\"\n          >\n            ${name}\n            <div class=\"secondary\">\n              ${secondary}\n            </div>\n          </div>\n          <div class=\"state\">\n          ${state}\n          </div>\n        </div>\n      </div>\n    `;\n  }\n\n  static get styles() {\n    const HuiGenericEntityRow = customElements.get('hui-generic-entity-row');\n    let style = HuiGenericEntityRow.styles;\n    style.cssText = style.cssText\n      .replace(\":host\", \"#wrapper\")\n      + `\n      .state {\n        text-align: right;\n      }\n      #wrapper {\n        min-height: 40px;\n      }\n      `;\n    return style;\n  }\n}\n\nif(!customElements.get(\"template-entity-row\")) {\n  customElements.define(\"template-entity-row\", TemplateEntityRow);\n  const pjson = __webpack_require__(/*! ../package.json */ \"./package.json\");\n  console.info(`%cTEMPLATE-ENTITY-ROW ${pjson.version} IS INSTALLED`,\n  \"color: green; font-weight: bold\",\n  \"\");\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });