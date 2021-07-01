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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/matilda.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../front/loader.js":
/*!******************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/loader.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/main */ "../../front/scripts/main.js");
/* harmony import */ var _style_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main */ "../../front/style/main.scss");
/* harmony import */ var _style_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../front/node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../test/dummy/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/application */ "../../front/node_modules/@stimulus/core/dist/src/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/context */ "../../front/node_modules/@stimulus/core/dist/src/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _src_context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/controller */ "../../front/node_modules/@stimulus/core/dist/src/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _src_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/schema */ "../../front/node_modules/@stimulus/core/dist/src/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _src_schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });






/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/action.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/action.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "../../front/node_modules/@stimulus/core/dist/src/action_descriptor.js");


var Action =
/** @class */
function () {
  function Action(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  Action.forToken = function (token) {
    return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseDescriptorString"])(token.content));
  };

  Action.prototype.toString = function () {
    var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
    return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
  };

  Object.defineProperty(Action.prototype, "eventTargetName", {
    get: function get() {
      return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
    },
    enumerable: true,
    configurable: true
  });
  return Action;
}();


var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "change";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "change";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/action_descriptor.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \******************************************************************************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDescriptorString", function() { return parseDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
function parseDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/application.js":
/*!************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/application.js ***!
  \************************************************************************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "../../front/node_modules/@stimulus/core/dist/src/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "../../front/node_modules/@stimulus/core/dist/src/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "../../front/node_modules/@stimulus/core/dist/src/schema.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [0, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var Application =
/** @class */
function () {
  function Application(element, schema) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (schema === void 0) {
      schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"];
    }

    this.element = element;
    this.schema = schema;
    this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
    this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
  }

  Application.start = function (element, schema) {
    var application = new Application(element, schema);
    application.start();
    return application;
  };

  Application.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , domReady()];

          case 1:
            _a.sent();

            this.router.start();
            this.dispatcher.start();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Application.prototype.stop = function () {
    this.router.stop();
    this.dispatcher.stop();
  };

  Application.prototype.register = function (identifier, controllerConstructor) {
    this.load({
      identifier: identifier,
      controllerConstructor: controllerConstructor
    });
  };

  Application.prototype.load = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var definitions = Array.isArray(head) ? head : [head].concat(rest);
    definitions.forEach(function (definition) {
      return _this.router.loadDefinition(definition);
    });
  };

  Application.prototype.unload = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var identifiers = Array.isArray(head) ? head : [head].concat(rest);
    identifiers.forEach(function (identifier) {
      return _this.router.unloadIdentifier(identifier);
    });
  };

  Object.defineProperty(Application.prototype, "controllers", {
    // Controllers
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    },
    enumerable: true,
    configurable: true
  });

  Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
    var context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }; // Error handling


  Application.prototype.handleError = function (error, message, detail) {
    console.error("%s\n\n%o\n\n%o", message, error, detail);
  };

  return Application;
}();



function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/binding.js":
/*!********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/binding.js ***!
  \********************************************************************************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding =
/** @class */
function () {
  function Binding(context, action) {
    this.context = context;
    this.action = action;
  }

  Object.defineProperty(Binding.prototype, "index", {
    get: function get() {
      return this.action.index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventTarget", {
    get: function get() {
      return this.action.eventTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.handleEvent = function (event) {
    if (this.willBeInvokedByEvent(event)) {
      this.invokeWithEvent(event);
    }
  };

  Object.defineProperty(Binding.prototype, "eventName", {
    get: function get() {
      return this.action.eventName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "method", {
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.invokeWithEvent = function (event) {
    try {
      this.method.call(this.controller, event);
    } catch (error) {
      var _a = this,
          identifier = _a.identifier,
          controller = _a.controller,
          element = _a.element,
          index = _a.index;

      var detail = {
        identifier: identifier,
        controller: controller,
        element: element,
        index: index,
        event: event
      };
      this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
    }
  };

  Binding.prototype.willBeInvokedByEvent = function (event) {
    var eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return true;
    }
  };

  Object.defineProperty(Binding.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "methodName", {
    get: function get() {
      return this.action.methodName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  return Binding;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/binding_observer.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "../../front/node_modules/@stimulus/core/dist/src/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "../../front/node_modules/@stimulus/core/dist/src/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "../../front/node_modules/@stimulus/mutation-observers/dist/index.js");




var BindingObserver =
/** @class */
function () {
  function BindingObserver(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  BindingObserver.prototype.start = function () {
    if (!this.valueListObserver) {
      this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  };

  BindingObserver.prototype.stop = function () {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  };

  Object.defineProperty(BindingObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
    get: function get() {
      return this.schema.actionAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "schema", {
    get: function get() {
      return this.context.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "bindings", {
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    },
    enumerable: true,
    configurable: true
  });

  BindingObserver.prototype.connectAction = function (action) {
    var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  };

  BindingObserver.prototype.disconnectAction = function (action) {
    var binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction["delete"](action);
      this.delegate.bindingDisconnected(binding);
    }
  };

  BindingObserver.prototype.disconnectAllActions = function () {
    var _this = this;

    this.bindings.forEach(function (binding) {
      return _this.delegate.bindingDisconnected(binding);
    });
    this.bindingsByAction.clear();
  }; // Value observer delegate


  BindingObserver.prototype.parseValueForToken = function (token) {
    var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  };

  BindingObserver.prototype.elementMatchedValue = function (element, action) {
    this.connectAction(action);
  };

  BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
    this.disconnectAction(action);
  };

  return BindingObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/context.js":
/*!********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/context.js ***!
  \********************************************************************************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "../../front/node_modules/@stimulus/core/dist/src/binding_observer.js");


var Context =
/** @class */
function () {
  function Context(module, scope) {
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);

    try {
      this.controller.initialize();
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  Context.prototype.connect = function () {
    this.bindingObserver.start();

    try {
      this.controller.connect();
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  };

  Context.prototype.disconnect = function () {
    try {
      this.controller.disconnect();
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.bindingObserver.stop();
  };

  Object.defineProperty(Context.prototype, "application", {
    get: function get() {
      return this.module.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "identifier", {
    get: function get() {
      return this.module.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "dispatcher", {
    get: function get() {
      return this.application.dispatcher;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "parentElement", {
    get: function get() {
      return this.element.parentElement;
    },
    enumerable: true,
    configurable: true
  }); // Error handling

  Context.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    var _a = this,
        identifier = _a.identifier,
        controller = _a.controller,
        element = _a.element;

    detail = Object.assign({
      identifier: identifier,
      controller: controller,
      element: element
    }, detail);
    this.application.handleError(error, "Error " + message, detail);
  };

  return Context;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/controller.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/controller.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target_properties */ "../../front/node_modules/@stimulus/core/dist/src/target_properties.js");


var Controller =
/** @class */
function () {
  function Controller(context) {
    this.context = context;
  }

  Controller.bless = function () {
    Object(_target_properties__WEBPACK_IMPORTED_MODULE_0__["defineTargetProperties"])(this);
  };

  Object.defineProperty(Controller.prototype, "application", {
    get: function get() {
      return this.context.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "targets", {
    get: function get() {
      return this.scope.targets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: true,
    configurable: true
  });

  Controller.prototype.initialize = function () {// Override in your subclass to set up initial controller state
  };

  Controller.prototype.connect = function () {// Override in your subclass to respond when the controller is connected to the DOM
  };

  Controller.prototype.disconnect = function () {// Override in your subclass to respond when the controller is disconnected from the DOM
  };

  Controller.targets = [];
  return Controller;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/data_map.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/data_map.js ***!
  \*********************************************************************************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
var DataMap =
/** @class */
function () {
  function DataMap(scope) {
    this.scope = scope;
  }

  Object.defineProperty(DataMap.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DataMap.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });

  DataMap.prototype.get = function (key) {
    key = this.getFormattedKey(key);
    return this.element.getAttribute(key);
  };

  DataMap.prototype.set = function (key, value) {
    key = this.getFormattedKey(key);
    this.element.setAttribute(key, value);
    return this.get(key);
  };

  DataMap.prototype.has = function (key) {
    key = this.getFormattedKey(key);
    return this.element.hasAttribute(key);
  };

  DataMap.prototype["delete"] = function (key) {
    if (this.has(key)) {
      key = this.getFormattedKey(key);
      this.element.removeAttribute(key);
      return true;
    } else {
      return false;
    }
  };

  DataMap.prototype.getFormattedKey = function (key) {
    return "data-" + this.identifier + "-" + dasherize(key);
  };

  return DataMap;
}();



function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, _char) {
    return "-" + _char.toLowerCase();
  });
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/definition.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/definition.js ***!
  \***********************************************************************************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/** @hidden */


function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
  };
}

function blessControllerConstructor(controllerConstructor) {
  var constructor = extend(controllerConstructor);
  constructor.bless();
  return constructor;
}

var extend = function () {
  function extendWithReflect(constructor) {
    function Controller() {
      var _newTarget = this && this instanceof Controller ? this.constructor : void 0;

      return Reflect.construct(constructor, arguments, _newTarget);
    }

    Controller.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: Controller
      }
    });
    Reflect.setPrototypeOf(Controller, constructor);
    return Controller;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return (
        /** @class */
        function (_super) {
          __extends(Controller, _super);

          function Controller() {
            return _super !== null && _super.apply(this, arguments) || this;
          }

          return Controller;
        }(constructor)
      );
    };
  }
}();

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/dispatcher.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "../../front/node_modules/@stimulus/core/dist/src/event_listener.js");


var Dispatcher =
/** @class */
function () {
  function Dispatcher(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  Dispatcher.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.connect();
      });
    }
  };

  Dispatcher.prototype.stop = function () {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.disconnect();
      });
    }
  };

  Object.defineProperty(Dispatcher.prototype, "eventListeners", {
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    },
    enumerable: true,
    configurable: true
  }); // Binding observer delegate

  /** @hidden */

  Dispatcher.prototype.bindingConnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  };
  /** @hidden */


  Dispatcher.prototype.bindingDisconnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }; // Error handling


  Dispatcher.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    this.application.handleError(error, "Error " + message, detail);
  };

  Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
    var eventTarget = binding.eventTarget,
        eventName = binding.eventName;
    return this.fetchEventListener(eventTarget, eventName);
  };

  Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {
    var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    var eventListener = eventListenerMap.get(eventName);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName);
      eventListenerMap.set(eventName, eventListener);
    }

    return eventListener;
  };

  Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {
    var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  };

  Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
    var eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  };

  return Dispatcher;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/event_listener.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \***************************************************************************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener =
/** @class */
function () {
  function EventListener(eventTarget, eventName) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.unorderedBindings = new Set();
  }

  EventListener.prototype.connect = function () {
    this.eventTarget.addEventListener(this.eventName, this, false);
  };

  EventListener.prototype.disconnect = function () {
    this.eventTarget.removeEventListener(this.eventName, this, false);
  }; // Binding observer delegate

  /** @hidden */


  EventListener.prototype.bindingConnected = function (binding) {
    this.unorderedBindings.add(binding);
  };
  /** @hidden */


  EventListener.prototype.bindingDisconnected = function (binding) {
    this.unorderedBindings["delete"](binding);
  };

  EventListener.prototype.handleEvent = function (event) {
    var extendedEvent = extendEvent(event);

    for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
      var binding = _a[_i];

      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  };

  Object.defineProperty(EventListener.prototype, "bindings", {
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    },
    enumerable: true,
    configurable: true
  });
  return EventListener;
}();



function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var stopImmediatePropagation_1 = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation_1.call(this);
      }
    });
  }
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/module.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/module.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "../../front/node_modules/@stimulus/core/dist/src/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "../../front/node_modules/@stimulus/core/dist/src/definition.js");



var Module =
/** @class */
function () {
  function Module(application, definition) {
    this.application = application;
    this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  Object.defineProperty(Module.prototype, "identifier", {
    get: function get() {
      return this.definition.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "controllerConstructor", {
    get: function get() {
      return this.definition.controllerConstructor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "contexts", {
    get: function get() {
      return Array.from(this.connectedContexts);
    },
    enumerable: true,
    configurable: true
  });

  Module.prototype.connectContextForScope = function (scope) {
    var context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  };

  Module.prototype.disconnectContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts["delete"](context);
      context.disconnect();
    }
  };

  Module.prototype.fetchContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (!context) {
      context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  };

  return Module;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/router.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/router.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "../../front/node_modules/@stimulus/core/dist/src/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "../../front/node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope_observer */ "../../front/node_modules/@stimulus/core/dist/src/scope_observer.js");




var Router =
/** @class */
function () {
  function Router(application) {
    this.application = application;
    this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_2__["ScopeObserver"](this.element, this.schema, this);
    this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
    this.modulesByIdentifier = new Map();
  }

  Object.defineProperty(Router.prototype, "element", {
    get: function get() {
      return this.application.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "modules", {
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "contexts", {
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    },
    enumerable: true,
    configurable: true
  });

  Router.prototype.start = function () {
    this.scopeObserver.start();
  };

  Router.prototype.stop = function () {
    this.scopeObserver.stop();
  };

  Router.prototype.loadDefinition = function (definition) {
    this.unloadIdentifier(definition.identifier);
    var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
    this.connectModule(module);
  };

  Router.prototype.unloadIdentifier = function (identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  };

  Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(function (context) {
        return context.element == element;
      });
    }
  }; // Error handler delegate

  /** @hidden */


  Router.prototype.handleError = function (error, message, detail) {
    this.application.handleError(error, message, detail);
  }; // Scope observer delegate

  /** @hidden */


  Router.prototype.scopeConnected = function (scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  };
  /** @hidden */


  Router.prototype.scopeDisconnected = function (scope) {
    this.scopesByIdentifier["delete"](scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }; // Modules


  Router.prototype.connectModule = function (module) {
    this.modulesByIdentifier.set(module.identifier, module);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.connectContextForScope(scope);
    });
  };

  Router.prototype.disconnectModule = function (module) {
    this.modulesByIdentifier["delete"](module.identifier);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.disconnectContextForScope(scope);
    });
  };

  return Router;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/schema.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/schema.js ***!
  \*******************************************************************************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/scope.js":
/*!******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/scope.js ***!
  \******************************************************************************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_map */ "../../front/node_modules/@stimulus/core/dist/src/data_map.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_set */ "../../front/node_modules/@stimulus/core/dist/src/target_set.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "../../front/node_modules/@stimulus/core/dist/src/selectors.js");




var Scope =
/** @class */
function () {
  function Scope(schema, identifier, element) {
    this.schema = schema;
    this.identifier = identifier;
    this.element = element;
    this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_1__["TargetSet"](this);
    this.data = new _data_map__WEBPACK_IMPORTED_MODULE_0__["DataMap"](this);
  }

  Scope.prototype.findElement = function (selector) {
    return this.findAllElements(selector)[0];
  };

  Scope.prototype.findAllElements = function (selector) {
    var head = this.element.matches(selector) ? [this.element] : [];
    var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
    return head.concat(tail);
  };

  Scope.prototype.filterElements = function (elements) {
    var _this = this;

    return elements.filter(function (element) {
      return _this.containsElement(element);
    });
  };

  Scope.prototype.containsElement = function (element) {
    return element.closest(this.controllerSelector) === this.element;
  };

  Object.defineProperty(Scope.prototype, "controllerSelector", {
    get: function get() {
      return Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
    },
    enumerable: true,
    configurable: true
  });
  return Scope;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/scope_observer.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \***************************************************************************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "../../front/node_modules/@stimulus/core/dist/src/scope.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/mutation-observers */ "../../front/node_modules/@stimulus/mutation-observers/dist/index.js");



var ScopeObserver =
/** @class */
function () {
  function ScopeObserver(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__["ValueListObserver"](this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  ScopeObserver.prototype.start = function () {
    this.valueListObserver.start();
  };

  ScopeObserver.prototype.stop = function () {
    this.valueListObserver.stop();
  };

  Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  }); // Value observer delegate

  /** @hidden */

  ScopeObserver.prototype.parseValueForToken = function (token) {
    var element = token.element,
        identifier = token.content;
    var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    var scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.schema, identifier, element);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  };
  /** @hidden */


  ScopeObserver.prototype.elementMatchedValue = function (element, value) {
    var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  };
  /** @hidden */


  ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
    var referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  };

  ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
    var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  };

  return ScopeObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/selectors.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/selectors.js ***!
  \**********************************************************************************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
  return "[" + attributeName + "~=\"" + token + "\"]";
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/target_properties.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \******************************************************************************************************************************/
/*! exports provided: defineTargetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTargetProperties", function() { return defineTargetProperties; });
/** @hidden */
function defineTargetProperties(constructor) {
  var prototype = constructor.prototype;
  var targetNames = getTargetNamesForConstructor(constructor);
  targetNames.forEach(function (name) {
    var _a;

    return defineLinkedProperties(prototype, (_a = {}, _a[name + "Target"] = {
      get: function get() {
        var target = this.targets.find(name);

        if (target) {
          return target;
        } else {
          throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
        }
      }
    }, _a[name + "Targets"] = {
      get: function get() {
        return this.targets.findAll(name);
      }
    }, _a["has" + capitalize(name) + "Target"] = {
      get: function get() {
        return this.targets.has(name);
      }
    }, _a));
  });
}

function getTargetNamesForConstructor(constructor) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (targetNames, constructor) {
    getOwnTargetNamesForConstructor(constructor).forEach(function (name) {
      return targetNames.add(name);
    });
    return targetNames;
  }, new Set()));
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors;
}

function getOwnTargetNamesForConstructor(constructor) {
  var definition = constructor["targets"];
  return Array.isArray(definition) ? definition : [];
}

function defineLinkedProperties(object, properties) {
  Object.keys(properties).forEach(function (name) {
    if (!(name in object)) {
      var descriptor = properties[name];
      Object.defineProperty(object, name, descriptor);
    }
  });
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/target_set.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/core/dist/src/target_set.js ***!
  \***********************************************************************************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "../../front/node_modules/@stimulus/core/dist/src/selectors.js");


var TargetSet =
/** @class */
function () {
  function TargetSet(scope) {
    this.scope = scope;
  }

  Object.defineProperty(TargetSet.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "schema", {
    get: function get() {
      return this.scope.schema;
    },
    enumerable: true,
    configurable: true
  });

  TargetSet.prototype.has = function (targetName) {
    return this.find(targetName) != null;
  };

  TargetSet.prototype.find = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findElement(selector);
  };

  TargetSet.prototype.findAll = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findAllElements(selector);
  };

  TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
    var _this = this;

    return targetNames.map(function (targetName) {
      return _this.getSelectorForTargetName(targetName);
    }).join(", ");
  };

  TargetSet.prototype.getSelectorForTargetName = function (targetName) {
    var targetDescriptor = this.identifier + "." + targetName;
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
  };

  return TargetSet;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/multimap/dist/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: Multimap, IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/multimap */ "../../front/node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _src_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });

/* harmony import */ var _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/indexed_multimap */ "../../front/node_modules/@stimulus/multimap/dist/src/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__["IndexedMultimap"]; });




/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/src/indexed_multimap.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "../../front/node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "../../front/node_modules/@stimulus/multimap/dist/src/set_operations.js");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var IndexedMultimap =
/** @class */
function (_super) {
  __extends(IndexedMultimap, _super);

  function IndexedMultimap() {
    var _this = _super.call(this) || this;

    _this.keysByValue = new Map();
    return _this;
  }

  Object.defineProperty(IndexedMultimap.prototype, "values", {
    get: function get() {
      return Array.from(this.keysByValue.keys());
    },
    enumerable: true,
    configurable: true
  });

  IndexedMultimap.prototype.add = function (key, value) {
    _super.prototype.add.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype["delete"] = function (key, value) {
    _super.prototype["delete"].call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.hasValue = function (value) {
    return this.keysByValue.has(value);
  };

  IndexedMultimap.prototype.getKeysForValue = function (value) {
    var set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  };

  return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]);



/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/src/multimap.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "../../front/node_modules/@stimulus/multimap/dist/src/set_operations.js");


var Multimap =
/** @class */
function () {
  function Multimap() {
    this.valuesByKey = new Map();
  }

  Object.defineProperty(Multimap.prototype, "values", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Multimap.prototype, "size", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    },
    enumerable: true,
    configurable: true
  });

  Multimap.prototype.add = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
  };

  Multimap.prototype["delete"] = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.has = function (key, value) {
    var values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  };

  Multimap.prototype.hasKey = function (key) {
    return this.valuesByKey.has(key);
  };

  Multimap.prototype.hasValue = function (value) {
    var sets = Array.from(this.valuesByKey.values());
    return sets.some(function (set) {
      return set.has(value);
    });
  };

  Multimap.prototype.getValuesForKey = function (key) {
    var values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  };

  Multimap.prototype.getKeysForValue = function (value) {
    return Array.from(this.valuesByKey).filter(function (_a) {
      var key = _a[0],
          values = _a[1];
      return values.has(value);
    }).map(function (_a) {
      var key = _a[0],
          values = _a[1];
      return key;
    });
  };

  return Multimap;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/src/set_operations.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key)["delete"](value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}
function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map["delete"](key);
  }
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attribute_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _src_element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/element_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _src_element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/token_list_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__["TokenListObserver"]; });

/* harmony import */ var _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/value_list_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__["ValueListObserver"]; });






/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");


var AttributeObserver =
/** @class */
function () {
  function AttributeObserver(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
  }

  Object.defineProperty(AttributeObserver.prototype, "element", {
    get: function get() {
      return this.elementObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttributeObserver.prototype, "selector", {
    get: function get() {
      return "[" + this.attributeName + "]";
    },
    enumerable: true,
    configurable: true
  });

  AttributeObserver.prototype.start = function () {
    this.elementObserver.start();
  };

  AttributeObserver.prototype.stop = function () {
    this.elementObserver.stop();
  };

  AttributeObserver.prototype.refresh = function () {
    this.elementObserver.refresh();
  };

  Object.defineProperty(AttributeObserver.prototype, "started", {
    get: function get() {
      return this.elementObserver.started;
    },
    enumerable: true,
    configurable: true
  }); // Element observer delegate

  AttributeObserver.prototype.matchElement = function (element) {
    return element.hasAttribute(this.attributeName);
  };

  AttributeObserver.prototype.matchElementsInTree = function (tree) {
    var match = this.matchElement(tree) ? [tree] : [];
    var matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  };

  AttributeObserver.prototype.elementMatched = function (element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementUnmatched = function (element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  };

  return AttributeObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver =
/** @class */
function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  ElementObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.refresh();
    }
  };

  ElementObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  ElementObserver.prototype.refresh = function () {
    if (this.started) {
      var matches = new Set(this.matchElementsInTree());

      for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
        var element = _a[_i];

        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
        var element = _c[_b];
        this.addElement(element);
      }
    }
  }; // Mutation record processing


  ElementObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  ElementObserver.prototype.processMutation = function (mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  };

  ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
    var element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  };

  ElementObserver.prototype.processRemovedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  };

  ElementObserver.prototype.processAddedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }; // Element matching


  ElementObserver.prototype.matchElement = function (element) {
    return this.delegate.matchElement(element);
  };

  ElementObserver.prototype.matchElementsInTree = function (tree) {
    if (tree === void 0) {
      tree = this.element;
    }

    return this.delegate.matchElementsInTree(tree);
  };

  ElementObserver.prototype.processTree = function (tree, processor) {
    for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
      var element = _a[_i];
      processor.call(this, element);
    }
  };

  ElementObserver.prototype.elementFromNode = function (node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  };

  ElementObserver.prototype.elementIsActive = function (element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }; // Element tracking


  ElementObserver.prototype.addElement = function (element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  };

  ElementObserver.prototype.removeElement = function (element) {
    if (this.elements.has(element)) {
      this.elements["delete"](element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  };

  return ElementObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "../../front/node_modules/@stimulus/multimap/dist/index.js");



var TokenListObserver =
/** @class */
function () {
  function TokenListObserver(element, attributeName, delegate) {
    this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
  }

  Object.defineProperty(TokenListObserver.prototype, "started", {
    get: function get() {
      return this.attributeObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  TokenListObserver.prototype.start = function () {
    this.attributeObserver.start();
  };

  TokenListObserver.prototype.stop = function () {
    this.attributeObserver.stop();
  };

  TokenListObserver.prototype.refresh = function () {
    this.attributeObserver.refresh();
  };

  Object.defineProperty(TokenListObserver.prototype, "element", {
    get: function get() {
      return this.attributeObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TokenListObserver.prototype, "attributeName", {
    get: function get() {
      return this.attributeObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  }); // Attribute observer delegate

  TokenListObserver.prototype.elementMatchedAttribute = function (element) {
    this.tokensMatched(this.readTokensForElement(element));
  };

  TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
    var _a = this.refreshTokensForElement(element),
        unmatchedTokens = _a[0],
        matchedTokens = _a[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  };

  TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  };

  TokenListObserver.prototype.tokensMatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenMatched(token);
    });
  };

  TokenListObserver.prototype.tokensUnmatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenUnmatched(token);
    });
  };

  TokenListObserver.prototype.tokenMatched = function (token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  };

  TokenListObserver.prototype.tokenUnmatched = function (token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement["delete"](token.element, token);
  };

  TokenListObserver.prototype.refreshTokensForElement = function (element) {
    var previousTokens = this.tokensByElement.getValuesForKey(element);
    var currentTokens = this.readTokensForElement(element);
    var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_a) {
      var previousToken = _a[0],
          currentToken = _a[1];
      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  };

  TokenListObserver.prototype.readTokensForElement = function (element) {
    var attributeName = this.attributeName;
    var tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  };

  return TokenListObserver;
}();



function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");


var ValueListObserver =
/** @class */
function () {
  function ValueListObserver(element, attributeName, delegate) {
    this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  Object.defineProperty(ValueListObserver.prototype, "started", {
    get: function get() {
      return this.tokenListObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.start = function () {
    this.tokenListObserver.start();
  };

  ValueListObserver.prototype.stop = function () {
    this.tokenListObserver.stop();
  };

  ValueListObserver.prototype.refresh = function () {
    this.tokenListObserver.refresh();
  };

  Object.defineProperty(ValueListObserver.prototype, "element", {
    get: function get() {
      return this.tokenListObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ValueListObserver.prototype, "attributeName", {
    get: function get() {
      return this.tokenListObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.tokenMatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.tokenUnmatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element)["delete"](token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.fetchParseResultForToken = function (token) {
    var parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  };

  ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
    var valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  };

  ValueListObserver.prototype.parseToken = function (token) {
    try {
      var value = this.delegate.parseValueForToken(token);
      return {
        value: value
      };
    } catch (error) {
      return {
        error: error
      };
    }
  };

  return ValueListObserver;
}();



/***/ }),

/***/ "../../front/node_modules/stimulus/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/node_modules/stimulus/index.js ***!
  \***************************************************************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "../../front/node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });



/***/ }),

/***/ "../../front/scripts/controllers/FlashController.js":
/*!***********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/scripts/controllers/FlashController.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FlashController =
/*#__PURE__*/
function (_Controller) {
  _inherits(FlashController, _Controller);

  function FlashController() {
    _classCallCheck(this, FlashController);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlashController).apply(this, arguments));
  }

  _createClass(FlashController, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      // manage flash rendered from back-end
      this.messageTargets.forEach(function (message) {
        setTimeout(function () {
          return message.classList.add('is-active');
        }, 100);
        setTimeout(function () {
          return _this.closeMessage(message);
        }, 10000);
      });
    }
  }, {
    key: "closeMessage",
    value: function closeMessage(message) {
      var _this2 = this;

      if (!message) return;
      message.classList.remove('is-active');
      setTimeout(function () {
        try {
          _this2.element.removeChild(message);
        } catch (e) {}
      }, 300);
    }
  }, {
    key: "openMessage",
    value: function openMessage(messageContent) {
      var _this3 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
      var classes = "c-flash__message c-flash__message--".concat(type);
      var message = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', classes, messageContent);
      message.setAttribute('data-target', 'flash.message');
      this.element.appendChild(message);
      var close = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('span', 'c-flash__message-close', '');
      close.setAttribute('data-action', 'click->flash#close');
      message.appendChild(close);
      setTimeout(function () {
        return message.classList.add('is-active');
      }, 100);
      setTimeout(function () {
        return _this3.closeMessage(message);
      }, 10000);
    }
    /**
     * @function close
     */

  }, {
    key: "close",
    value: function close(e) {
      this.closeMessage(e.currentTarget.parentNode);
    }
  }]);

  return FlashController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

FlashController.targets = ['message'];
/* harmony default export */ __webpack_exports__["default"] = (FlashController);

/***/ }),

/***/ "../../front/scripts/controllers/FormController.js":
/*!**********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/scripts/controllers/FormController.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FormController =
/*#__PURE__*/
function (_Controller) {
  _inherits(FormController, _Controller);

  function FormController() {
    _classCallCheck(this, FormController);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormController).apply(this, arguments));
  }

  _createClass(FormController, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.fields = {}; // map fields and add listeners in case of errors classes

      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["each"])(this.fieldTargets, function (field) {
        _this.fields[field.getAttribute('name')] = field;
        field.addEventListener('keyup', function () {
          return field.classList.remove('is-error');
        });
      }); // add submit listener to disable submit button

      this.element.addEventListener('submit', function (e) {
        _this.submitTarget.setAttribute('disabled', '');

        _this.submitTarget.classList.add('is-loading');
      }); // manage required inputs

      this.manageRequiredInputs();
    }
  }, {
    key: "manageRequiredInputs",
    value: function manageRequiredInputs() {
      var _this2 = this;

      this.fieldTargets.forEach(function (target) {
        if (!target.hasAttribute('required')) return;

        var label = _this2.element.querySelector("label[for=\"".concat(target.id, "\"]"));

        if (label && label.innerText.charAt(label.innerText.length - 1) !== '*') label.innerHTML = "".concat(label.innerHTML, " *");
      });
    }
    /**
     * @function validateResponse
     * @param {*} event 
     */

  }, {
    key: "validateResponse",
    value: function validateResponse(event) {
      var _this3 = this;

      var _event$detail = _slicedToArray(event.detail, 3),
          data = _event$detail[0],
          _status = _event$detail[1],
          _xhr = _event$detail[2];

      if (data.result) {
        var redirect = this.data.get('redirect');
        var reload = this.data.get('reload'); // manage redirect

        if (redirect) {
          window.location.replace(redirect);
          return;
        } // manage reload


        if (reload) {
          location.reload();
          return;
        }
      } else {
        var Flash = this.application.getControllerForElementAndIdentifier(document.getElementById('flash'), 'flash');
        Flash.openMessage(data.errors[0].message, 'orange');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["each"])(data.errors, function (error) {
          if (!_this3.fields[error.code]) return;

          _this3.fields[error.code].classList.add('is-error');
        });
      }

      this.submitTarget.removeAttribute('disabled');
      this.submitTarget.classList.remove('is-loading');
    }
  }]);

  return FormController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

FormController.targets = ['field', 'submit'];
/* harmony default export */ __webpack_exports__["default"] = (FormController);

/***/ }),

/***/ "../../front/scripts/controllers/HeaderController.js":
/*!************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/scripts/controllers/HeaderController.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HeaderController =
/*#__PURE__*/
function (_Controller) {
  _inherits(HeaderController, _Controller);

  function HeaderController() {
    _classCallCheck(this, HeaderController);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderController).apply(this, arguments));
  }

  _createClass(HeaderController, [{
    key: "connect",
    value: function connect() {
      // set menu preference to close in case of mobile device
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width <= 768) {
        fetch($routes.update_menu_preference + "?menu_preference=closed").then(function (_response) {});
      }
    }
    /**
     * @function toggleProfile
     */

  }, {
    key: "toggleProfile",
    value: function toggleProfile() {
      this.profileMenuTarget.classList.toggle('is-active');
    }
    /**
     * @function toggleMenu
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width > 768) {
        setTimeout(function () {
          var preference = document.body.classList.contains('is-menu-closed') ? 'closed' : 'opened';
          fetch($routes.update_menu_preference + "?menu_preference=".concat(preference)).then(function (_response) {});
        }, 250);
      }

      if (document.body.classList.contains('is-menu-closed')) {
        document.body.classList.remove('is-menu-closed');

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width <= 768) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["disableScroll"])();
        }
      } else {
        document.body.classList.add('is-menu-closed');

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width <= 768) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["enableScroll"])();
        }
      }
    }
  }]);

  return HeaderController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

HeaderController.targets = ['profileMenu'];
/* harmony default export */ __webpack_exports__["default"] = (HeaderController);

/***/ }),

/***/ "../../front/scripts/controllers/LinkController.js":
/*!**********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/scripts/controllers/LinkController.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LinkController =
/*#__PURE__*/
function (_Controller) {
  _inherits(LinkController, _Controller);

  function LinkController() {
    _classCallCheck(this, LinkController);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkController).apply(this, arguments));
  }

  _createClass(LinkController, [{
    key: "validateResponse",

    /**
     * @function validateResponse
     * @param {*} event 
     */
    value: function validateResponse(event) {
      var _event$detail = _slicedToArray(event.detail, 3),
          data = _event$detail[0],
          _status = _event$detail[1],
          _xhr = _event$detail[2];

      if (data.result) {
        var redirect = this.data.get('redirect');
        var reload = this.data.get('reload'); // manage redirect

        if (redirect) {
          window.location.replace(redirect);
          return;
        } // manage reload


        if (reload) {
          location.reload();
          return;
        }
      } else {
        var Flash = this.application.getControllerForElementAndIdentifier(document.getElementById('flash'), 'flash');
        Flash.openMessage(data.errors[0].message, 'orange');
      }
    }
  }]);

  return LinkController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

/* harmony default export */ __webpack_exports__["default"] = (LinkController);

/***/ }),

/***/ "../../front/scripts/main.js":
/*!************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/scripts/main.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "../../front/node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _controllers_FormController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/FormController */ "../../front/scripts/controllers/FormController.js");
/* harmony import */ var _controllers_FlashController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/FlashController */ "../../front/scripts/controllers/FlashController.js");
/* harmony import */ var _controllers_HeaderController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/HeaderController */ "../../front/scripts/controllers/HeaderController.js");
/* harmony import */ var _controllers_LinkController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/LinkController */ "../../front/scripts/controllers/LinkController.js");






_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
var application = stimulus__WEBPACK_IMPORTED_MODULE_1__["Application"].start();
application.register('form', _controllers_FormController__WEBPACK_IMPORTED_MODULE_2__["default"]);
application.register('flash', _controllers_FlashController__WEBPACK_IMPORTED_MODULE_3__["default"]);
application.register('header', _controllers_HeaderController__WEBPACK_IMPORTED_MODULE_4__["default"]);
application.register('link', _controllers_LinkController__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "../../front/scripts/utils.js":
/*!*************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/scripts/utils.js ***!
  \*************************************************************************************/
/*! exports provided: addAuthTokenParamToFetchBody, each, disableScroll, enableScroll, debounce, getSreenSizes, createElement, stringToColour, getSelectOptions, createEelementFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthTokenParamToFetchBody", function() { return addAuthTokenParamToFetchBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScroll", function() { return disableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScroll", function() { return enableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSreenSizes", function() { return getSreenSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToColour", function() { return stringToColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectOptions", function() { return getSelectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEelementFromString", function() { return createEelementFromString; });
/**
 * @function addAuthTokenParamToFetchBody
 * @param {*} body 
 */
function addAuthTokenParamToFetchBody(body) {
  body[$authtokenname] = $authtoken;
  return body;
}
/**
 * @function each
 * @param {*} array 
 * @param {*} callback 
 * @param {*} scope 
 */

function each(array, callback, scope) {
  for (var i = 0; i < array.length; i += 1) {
    callback.call(scope, array[i], i);
  }
}
/**
 * @function disableScroll
 */

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;

  window.onscroll = function () {
    return window.scrollTo(x, y);
  };
}
/**
 * @function enableScroll
 */

function enableScroll() {
  window.onscroll = function () {};
}
/**
 * @function debounce
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/**
 * @function getSreenSizes
 */

function getSreenSizes() {
  var w = window;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName('body')[0];
  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight || e.clientHeight || g.clientHeight
  };
}
/**
 * @function createElement
 * @param {*} type 
 * @param {*} classes 
 * @param {*} content 
 */

function createElement(type) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var element = document.createElement(type);

  if (classes) {
    classes.split(' ').forEach(function (className) {
      element.classList.add(className);
    });
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
}
/**
 * @function stringToColour
 * @param {*} str 
 */

function stringToColour(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 2) - hash);
  }

  var colour = '#';

  for (var i = 0; i < 3; i++) {
    var value = hash >> i * 8 & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour;
}
/**
 * @function getSelectOptions
 * @param {*} select 
 */

function getSelectOptions(select) {
  var options = select.querySelectorAll('option');
  var result = [];
  options.forEach(function (option) {
    var singleResult = {};
    singleResult.value = option.getAttribute('value');
    singleResult.label = option.innerText;
    singleResult.customProperties = Object.assign({}, option.dataset);
    result.push(singleResult);
  });
  return result;
}
/**
 * @function createEelementFromString
 * @param {*} string
 */

function createEelementFromString(string) {
  var div = createElement('div');
  div.innerHTML = string;
  return div.firstChild;
}

/***/ }),

/***/ "../../front/style/main.scss":
/*!************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/main.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../test/dummy/node_modules/css-loader/dist/cjs.js??ref--7-1!../../test/dummy/node_modules/postcss-loader/src??ref--7-2!../../test/dummy/node_modules/sass-loader/dist/cjs.js??ref--7-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!../../front/style/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../test/dummy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/javascript/packs/matilda.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/matilda.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../front/loader */ "../../front/loader.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!../../front/style/main.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/main.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../test/dummy/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alata);", ""]);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n.u-clearfix:before, .u-clearfix:after {\n  content: \" \";\n  display: table; }\n.u-clearfix:after {\n  clear: both; }\n.u-float-right {\n  float: right; }\n.u-float-left {\n  float: left; }\n.u-only-md {\n  display: block; }\n.u-only-sm {\n  display: block; }\n@media (max-width: 1024px) {\n  .u-only-md {\n    display: none; } }\n@media (max-width: 768px) {\n  .u-only-sm {\n    display: none; } }\n* {\n  box-sizing: border-box; }\nbody {\n  font-family: 'Alata', sans-serif;\n  background-color: #e8ebf1;\n  color: #3d5170; }\nmain {\n  position: relative;\n  margin-top: 50px; }\na {\n  color: #0047a8; }\nimg {\n  max-width: 100%; }\n.turbolinks-progress-bar {\n  background-color: #ffffff !important; }\n.c-section {\n  width: calc(100% - 200px);\n  min-height: calc(100vh - 50px);\n  margin-left: 200px;\n  padding: 15px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  position: relative; }\n.c-section--full {\n    width: 100%;\n    margin-left: 0; }\n.c-section__head {\n  border-bottom: solid 1px #d8dde7;\n  padding-bottom: 5px; }\n.c-section__head-title {\n  display: inline-block;\n  margin: 0;\n  font-size: 30px;\n  color: #3d5170; }\n.c-section__head-breadcrumb {\n  padding-top: 13px;\n  float: right; }\n.c-section__head-breadcrumb-link {\n  font-size: 14px;\n  color: #3d5170;\n  font-weight: bold;\n  text-decoration: none; }\n.c-section__head-breadcrumb-link:after {\n    color: #a9b4ca;\n    content: ' - '; }\n.c-section__head-breadcrumb-link:last-child:after {\n    display: none; }\n.c-section__head-breadcrumb-link[href] {\n    color: #a9b4ca;\n    font-weight: normal; }\n.c-section__head-breadcrumb-link[href]:hover {\n      color: #0047a8; }\n.c-section__head-breadcrumb-link[href]:hover:after {\n        color: #a9b4ca; }\n.c-section__content {\n  margin-top: 15px; }\n.c-section__content--cols {\n    display: flex;\n    /* [1] */\n    flex-wrap: nowrap;\n    /* [1] */\n    overflow-x: auto;\n    /* [1] */\n    -webkit-overflow-scrolling: touch;\n    /* [4] */\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    /* [5] */ }\n.c-section__content-block {\n  margin-bottom: 15px; }\n.c-section__content-block--col {\n    flex: 0 0 auto;\n    width: 325px;\n    margin-right: 15px; }\n.c-section__content-block--col > .c-card .c-card__body {\n      height: calc(100vh - 200px); }\n.is-menu-closed .c-section {\n  width: 100%;\n  margin-left: 0; }\n@media (max-width: 768px) {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n    padding: 0; }\n    .c-section--full {\n      width: 100%;\n      margin-left: 0; }\n  .c-section__head {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px; }\n  .c-section__head-title {\n    font-size: 24px; }\n  .c-section__head-breadcrumb {\n    padding-top: 5px;\n    float: none; }\n  .c-section__head-breadcrumb-link {\n    font-size: 10px; }\n  .c-section__content {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .c-section__content-block {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 100% !important; }\n    .c-section__content-block--col {\n      width: 100%; }\n      .c-section__content-block--col > .c-card .c-card__body {\n        overflow-y: auto !important; } }\n.c-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #0047a8;\n  z-index: 6;\n  padding: 0 15px;\n  border-bottom: solid 1px #d8dde7;\n  display: flex;\n  justify-content: space-between; }\n.c-header__logo {\n  color: #ffffff;\n  text-decoration: none;\n  height: 50px;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  width: auto; }\n.c-header__logo-title {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 5px;\n  bottom: 3px; }\n@media (max-width: 580px) {\n  .c-header__logo-title {\n    display: none; } }\n.c-header__nav {\n  display: flex;\n  flex-direction: flex-end; }\n.c-header__nav-item {\n  position: relative; }\n.c-header__nav-item-action {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  padding: 5px 15px;\n  color: #ffffff;\n  font-size: 14px;\n  height: 49px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase; }\n.c-header__nav-item-action:hover, .c-header__nav-item-action:focus {\n    background-color: #003c8f;\n    color: #ffffff; }\n.c-header__nav-menu {\n  position: absolute;\n  top: 57px;\n  right: 0px;\n  width: 200px;\n  max-height: 60vh;\n  background-color: #ffffff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  -webkit-transform: translateY(30px);\n          transform: translateY(30px);\n  visibility: hidden;\n  overflow-y: auto;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.c-header__nav-menu.is-active {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    visibility: visible;\n    opacity: 1; }\n.c-header__nav-menu--large {\n    width: 400px; }\n.c-header__nav-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n.c-header__nav-menu-list-item {\n  width: 100%;\n  border-bottom: solid 1px #d8dde7; }\n.c-header__nav-menu-list-item:last-child {\n    border-bottom: none; }\n.c-header__nav-menu-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #3d5170;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  text-decoration: none; }\n.c-header__nav-menu-list-item-link:hover {\n    background-color: #e8ebf1; }\n@media (max-width: 768px) {\n  .c-header__nav-menu {\n    position: fixed;\n    width: calc(100% - 30px);\n    right: 15px;\n    max-height: calc(100% - 50px - 20px); } }\n.c-footer {\n  width: calc(100% - 200px);\n  height: 50px;\n  margin-left: 200px;\n  padding: 0 15px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.c-footer--full {\n    width: 100%;\n    margin-left: 0; }\n.c-footer__content {\n  padding: 15px 0;\n  font-size: 12px;\n  color: #3d5170;\n  border-top: solid 1px #d8dde7; }\n.c-footer__content a {\n    color: #3d5170; }\n.is-menu-closed .c-footer {\n  width: 100%;\n  margin-left: 0; }\n.is-primary .c-footer__content {\n  color: #ffffff; }\n.is-primary .c-footer__content a {\n    color: #ffffff; }\n@media (max-width: 768px) {\n  .c-footer {\n    width: 100%;\n    margin-left: 0; }\n    .c-footer--full {\n      width: 100%;\n      margin-left: 0; } }\n.c-flash {\n  position: fixed;\n  top: 65px;\n  right: 0;\n  width: 300px;\n  z-index: 5; }\n.c-flash__message {\n  width: 100%;\n  background-color: #0047a8;\n  color: #ffffff;\n  font-size: 14px;\n  text-align: left;\n  padding: 15px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  border-radius: 15px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n.c-flash__message.is-active {\n    -webkit-transform: translateX(-15px);\n            transform: translateX(-15px); }\n.c-flash__message--green {\n    background-color: #54B64E; }\n.c-flash__message--green .c-flash__message-close {\n      border-color: #54B64E; }\n.c-flash__message--orange {\n    background-color: #EF662F !important; }\n.c-flash__message--orange .c-flash__message-close {\n      border-color: #EF662F; }\n.c-flash__message--blue {\n    background-color: #00AEE3; }\n.c-flash__message--blue .c-flash__message-close {\n      border-color: #00AEE3; }\n.c-flash__message--yellow {\n    background-color: #FEC542; }\n.c-flash__message--yellow .c-flash__message-close {\n      border-color: #FEC542; }\n.c-flash__message-close {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  border: solid 2px #0047a8;\n  cursor: pointer; }\n.c-flash__message-close:hover {\n    background-color: #f2f2f2; }\n.c-flash__message-close:before, .c-flash__message-close:after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 10px;\n    background-color: #8998b7;\n    position: absolute;\n    top: calc(50% - 5px);\n    left: calc(50% - 1px); }\n.c-flash__message-close:before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.c-flash__message-close:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n.c-card {\n  background-color: #ffffff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  -webkit-transition: box-shadow 0.25s linear;\n  transition: box-shadow 0.25s linear; }\n.c-card--centerpage {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 600px; }\n.c-card--centerpage-large {\n    width: 900px; }\n.c-card--unhidden {\n    overflow: visible; }\n.c-card--hasnext {\n    margin-bottom: 15px; }\n.c-card--viewported.is-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100vh;\n    border-radius: 0;\n    overflow: auto; }\n.c-card--viewported.is-fixed .c-card__header {\n      border-radius: 0; }\n.c-card--viewported.is-fixed .c-card__body--scrollable {\n      max-height: calc(100vh - 50px); }\n.c-card:hover {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n.c-card__header {\n  background-color: #ffffff;\n  color: #3d5170;\n  border-bottom: solid 1px #d8dde7;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n.c-card__header:before, .c-card__header:after {\n    content: \" \";\n    display: table; }\n.c-card__header:after {\n    clear: both; }\n.c-card__header-title {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px; }\n.c-card__header-actions {\n  list-style: none;\n  margin: 0;\n  padding: 7px 15px;\n  float: right; }\n.c-card__header-actions:before, .c-card__header-actions:after {\n    content: \" \";\n    display: table; }\n.c-card__header-actions:after {\n    clear: both; }\n.c-card__header-actions--full {\n    float: none;\n    width: 100%; }\n.c-card__header-action {\n  display: inline-block;\n  margin-right: 5px; }\n.c-card__header-action--full {\n    display: block;\n    width: 100%; }\n.c-card__header-action:last-child {\n    margin-right: 0; }\n.c-card__header-action .c-button {\n    padding: 8px 20px; }\n.c-card__header-action .c-input-action {\n    margin: 2px 0;\n    font-size: 14px; }\n.c-card__header-action .c-input-action .c-input__field, .c-card__header-action .c-input-action .c-input-action__field {\n      padding: 7px 10px; }\n.c-card__header-action .c-input-action .c-input-action__button {\n      padding: 7px 0; }\n.c-card__header-action-text {\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 10px; }\n.c-card__body {\n  padding: 15px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n.c-card__body--list {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n.c-card__body--scrollable {\n    max-height: calc(100vh - 200px);\n    overflow-y: auto; }\n.c-card__body-list-item {\n  border-bottom: solid 1px #d8dde7;\n  color: #3d5170; }\n.c-card__body-list-item:last-child {\n    border-bottom: none; }\n.c-card__body-list-item--padding {\n    padding: 15px; }\n.c-card__body-list-item.is-active {\n    background-color: rgba(0, 71, 168, 0.1); }\n.c-card__body-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #3d5170;\n  text-decoration: none; }\n.c-card__body-list-item-link:hover {\n    background-color: #e8ebf1;\n    text-decoration: none; }\n.c-card__body-list-item-link.is-active {\n    background-color: rgba(0, 71, 168, 0.1); }\n.c-card__body-list-item-content {\n  display: inline-block;\n  padding-right: 90px; }\n.c-card__body-list-item-action {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n  color: #0047a8; }\n@media (max-width: 1024px) {\n  .c-card--centerpage-large {\n    width: calc(100% - 30px); } }\n@media (max-width: 768px) {\n  .c-card {\n    background-color: #ffffff;\n    border-radius: 0;\n    overflow: hidden; }\n    .c-card--centerpage {\n      position: relative;\n      top: 0;\n      left: 0;\n      -webkit-transform: none;\n              transform: none;\n      width: calc(100% - 30px);\n      margin: auto;\n      border-radius: 15px;\n      margin-top: 65px;\n      margin-bottom: 15px; }\n    .c-card--centerpage-large {\n      width: calc(100% - 30px); }\n  .c-card__header {\n    border-radius: 0; }\n  .c-card__header-title {\n    display: block;\n    text-align: center;\n    font-size: 20px; }\n  .c-card__header-actions {\n    text-align: center;\n    float: none;\n    padding-top: 0;\n    margin-top: -10px; }\n    .c-card__header-actions--full {\n      margin-top: 0;\n      padding-top: 7px; }\n  .c-card__header-action-group {\n    display: flex; }\n  .c-card__header-action {\n    float: none;\n    width: 100%; }\n    .c-card__header-action .c-button {\n      display: block;\n      text-align: center; }\n  .c-card__body {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n    .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; } }\n@media (max-width: 768px) {\n  .c-card--mobile-fixed-section {\n    margin: 0 !important; }\n  .c-card--mobile-fixed {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 50px);\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n    overflow-y: auto;\n    z-index: 1; }\n    .c-card--mobile-fixed.is-open {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    .c-card--mobile-fixed .c-card__header-actions {\n      margin-top: 0;\n      padding-top: 7px; }\n    .c-card--mobile-fixed .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; }\n  .c-card__header-title--mobile-fixed {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    background-color: #0047a8;\n    color: #ffffff;\n    border-radius: 10px;\n    font-size: 12px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n    z-index: 2; } }\n@-webkit-keyframes c-button-is-loading {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(200%);\n            transform: translateX(200%); } }\n@keyframes c-button-is-loading {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(200%);\n            transform: translateX(200%); } }\n.c-button {\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n  background-color: #0047a8;\n  color: #ffffff;\n  text-decoration: none;\n  border: none;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  outline: 0;\n  position: relative; }\n.c-button[disabled] {\n    background-color: rgba(61, 81, 112, 0.65); }\n.c-button[disabled]:hover {\n      background-color: rgba(61, 81, 112, 0.65);\n      box-shadow: none; }\n.c-button.is-loading {\n    color: rgba(255, 255, 255, 0.5);\n    overflow: hidden; }\n.c-button.is-loading:before {\n      content: '';\n      display: block;\n      width: 70%;\n      height: 2px;\n      background-color: rgba(255, 255, 255, 0.8);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      -webkit-animation: c-button-is-loading 1s infinite;\n              animation: c-button-is-loading 1s infinite; }\n.c-button:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 71, 168, 0.25);\n    background-color: #003c8f; }\n.c-button:active, .c-button:focus {\n    background-color: #003175; }\n.c-button--green {\n    background-color: #54B64E; }\n.c-button--green:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(84, 182, 78, 0.25);\n      background-color: #4aa644; }\n.c-button--green:active, .c-button--green:focus {\n      background-color: #42943d; }\n.c-button--blue {\n    background-color: #00AEE3; }\n.c-button--blue:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 174, 227, 0.25);\n      background-color: #009aca; }\n.c-button--blue:active, .c-button--blue:focus {\n      background-color: #0087b0; }\n.c-button--yellow {\n    background-color: #FEC542; }\n.c-button--yellow:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(254, 197, 66, 0.25);\n      background-color: #febd29; }\n.c-button--yellow:active, .c-button--yellow:focus {\n      background-color: #feb50f; }\n.c-button--orange {\n    background-color: #EF662F; }\n.c-button--orange:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(239, 102, 47, 0.25);\n      background-color: #ed5517; }\n.c-button--orange:active, .c-button--orange:focus {\n      background-color: #da4a11; }\n.c-button--black {\n    background-color: #3d5170; }\n.c-button--black:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(61, 81, 112, 0.25);\n      background-color: #34455f; }\n.c-button--black:active, .c-button--black:focus {\n      background-color: #2b394f; }\n.c-button--cenere {\n    background-color: #e8ebf1;\n    color: #3d5170; }\n.c-button--cenere:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(232, 235, 241, 0.25);\n      background-color: #d8dde7; }\n.c-button--cenere:active, .c-button--cenere:focus {\n      background-color: #c8cfde; }\n.c-button--transparent {\n    background-color: transparent;\n    color: #3d5170; }\n.c-button--transparent:hover {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n.c-button--transparent:active, .c-button--transparent:focus {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n.c-button--twitter {\n    background-color: #55acee; }\n.c-button--twitter:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(85, 172, 238, 0.25);\n      background-color: #3ea1ec; }\n.c-button--twitter:active, .c-button--twitter:focus {\n      background-color: #2795e9; }\n.c-button--linkedin {\n    background-color: #007bb6; }\n.c-button--linkedin:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 123, 182, 0.25);\n      background-color: #006a9d; }\n.c-button--linkedin:active, .c-button--linkedin:focus {\n      background-color: #005983; }\n.c-button--toggl {\n    background-color: #e20505; }\n.c-button--toggl:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(226, 5, 5, 0.25);\n      background-color: #c90404; }\n.c-button--toggl:active, .c-button--toggl:focus {\n      background-color: #b00404; }\n.c-button--dropbox {\n    background-color: #005ff8; }\n.c-button--dropbox:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 95, 248, 0.25);\n      background-color: #0055df; }\n.c-button--dropbox:active, .c-button--dropbox:focus {\n      background-color: #004bc5; }\n.c-button--block {\n    display: block;\n    text-align: center; }\n@media (max-width: 768px) {\n  .c-button {\n    padding: 15px 20px; } }\n.c-grid__container, .c-grid__container-spaced {\n  margin: auto;\n  box-sizing: border-box; }\n.c-grid__container:before, .c-grid__container:after, .c-grid__container-spaced:before, .c-grid__container-spaced:after {\n    content: \" \";\n    display: table; }\n.c-grid__container:after, .c-grid__container-spaced:after {\n    clear: both; }\n.c-grid__col {\n  float: left;\n  box-sizing: border-box;\n  width: 100%; }\n.c-grid__col--1 {\n  width: 4.16667%; }\n.c-grid__col--2 {\n  width: 8.33333%; }\n.c-grid__col--3 {\n  width: 12.5%; }\n.c-grid__col--4 {\n  width: 16.66667%; }\n.c-grid__col--5 {\n  width: 20.83333%; }\n.c-grid__col--6 {\n  width: 25%; }\n.c-grid__col--7 {\n  width: 29.16667%; }\n.c-grid__col--8 {\n  width: 33.33333%; }\n.c-grid__col--9 {\n  width: 37.5%; }\n.c-grid__col--10 {\n  width: 41.66667%; }\n.c-grid__col--11 {\n  width: 45.83333%; }\n.c-grid__col--12 {\n  width: 50%; }\n.c-grid__col--13 {\n  width: 54.16667%; }\n.c-grid__col--14 {\n  width: 58.33333%; }\n.c-grid__col--15 {\n  width: 62.5%; }\n.c-grid__col--16 {\n  width: 66.66667%; }\n.c-grid__col--17 {\n  width: 70.83333%; }\n.c-grid__col--18 {\n  width: 75%; }\n.c-grid__col--19 {\n  width: 79.16667%; }\n.c-grid__col--20 {\n  width: 83.33333%; }\n.c-grid__col--21 {\n  width: 87.5%; }\n.c-grid__col--22 {\n  width: 91.66667%; }\n.c-grid__col--23 {\n  width: 95.83333%; }\n.c-grid__col--24 {\n  width: 100%; }\n@media screen and (min-width: 581px) {\n  .c-grid__col--xs-1 {\n    width: 4.16667%; }\n  .c-grid__col--xs-2 {\n    width: 8.33333%; }\n  .c-grid__col--xs-3 {\n    width: 12.5%; }\n  .c-grid__col--xs-4 {\n    width: 16.66667%; }\n  .c-grid__col--xs-5 {\n    width: 20.83333%; }\n  .c-grid__col--xs-6 {\n    width: 25%; }\n  .c-grid__col--xs-7 {\n    width: 29.16667%; }\n  .c-grid__col--xs-8 {\n    width: 33.33333%; }\n  .c-grid__col--xs-9 {\n    width: 37.5%; }\n  .c-grid__col--xs-10 {\n    width: 41.66667%; }\n  .c-grid__col--xs-11 {\n    width: 45.83333%; }\n  .c-grid__col--xs-12 {\n    width: 50%; }\n  .c-grid__col--xs-13 {\n    width: 54.16667%; }\n  .c-grid__col--xs-14 {\n    width: 58.33333%; }\n  .c-grid__col--xs-15 {\n    width: 62.5%; }\n  .c-grid__col--xs-16 {\n    width: 66.66667%; }\n  .c-grid__col--xs-17 {\n    width: 70.83333%; }\n  .c-grid__col--xs-18 {\n    width: 75%; }\n  .c-grid__col--xs-19 {\n    width: 79.16667%; }\n  .c-grid__col--xs-20 {\n    width: 83.33333%; }\n  .c-grid__col--xs-21 {\n    width: 87.5%; }\n  .c-grid__col--xs-22 {\n    width: 91.66667%; }\n  .c-grid__col--xs-23 {\n    width: 95.83333%; }\n  .c-grid__col--xs-24 {\n    width: 100%; } }\n@media screen and (min-width: 769px) {\n  .c-grid__col--sm-1 {\n    width: 4.16667%; }\n  .c-grid__col--sm-2 {\n    width: 8.33333%; }\n  .c-grid__col--sm-3 {\n    width: 12.5%; }\n  .c-grid__col--sm-4 {\n    width: 16.66667%; }\n  .c-grid__col--sm-5 {\n    width: 20.83333%; }\n  .c-grid__col--sm-6 {\n    width: 25%; }\n  .c-grid__col--sm-7 {\n    width: 29.16667%; }\n  .c-grid__col--sm-8 {\n    width: 33.33333%; }\n  .c-grid__col--sm-9 {\n    width: 37.5%; }\n  .c-grid__col--sm-10 {\n    width: 41.66667%; }\n  .c-grid__col--sm-11 {\n    width: 45.83333%; }\n  .c-grid__col--sm-12 {\n    width: 50%; }\n  .c-grid__col--sm-13 {\n    width: 54.16667%; }\n  .c-grid__col--sm-14 {\n    width: 58.33333%; }\n  .c-grid__col--sm-15 {\n    width: 62.5%; }\n  .c-grid__col--sm-16 {\n    width: 66.66667%; }\n  .c-grid__col--sm-17 {\n    width: 70.83333%; }\n  .c-grid__col--sm-18 {\n    width: 75%; }\n  .c-grid__col--sm-19 {\n    width: 79.16667%; }\n  .c-grid__col--sm-20 {\n    width: 83.33333%; }\n  .c-grid__col--sm-21 {\n    width: 87.5%; }\n  .c-grid__col--sm-22 {\n    width: 91.66667%; }\n  .c-grid__col--sm-23 {\n    width: 95.83333%; }\n  .c-grid__col--sm-24 {\n    width: 100%; } }\n@media screen and (min-width: 1025px) {\n  .c-grid__col--md-1 {\n    width: 4.16667%; }\n  .c-grid__col--md-2 {\n    width: 8.33333%; }\n  .c-grid__col--md-3 {\n    width: 12.5%; }\n  .c-grid__col--md-4 {\n    width: 16.66667%; }\n  .c-grid__col--md-5 {\n    width: 20.83333%; }\n  .c-grid__col--md-6 {\n    width: 25%; }\n  .c-grid__col--md-7 {\n    width: 29.16667%; }\n  .c-grid__col--md-8 {\n    width: 33.33333%; }\n  .c-grid__col--md-9 {\n    width: 37.5%; }\n  .c-grid__col--md-10 {\n    width: 41.66667%; }\n  .c-grid__col--md-11 {\n    width: 45.83333%; }\n  .c-grid__col--md-12 {\n    width: 50%; }\n  .c-grid__col--md-13 {\n    width: 54.16667%; }\n  .c-grid__col--md-14 {\n    width: 58.33333%; }\n  .c-grid__col--md-15 {\n    width: 62.5%; }\n  .c-grid__col--md-16 {\n    width: 66.66667%; }\n  .c-grid__col--md-17 {\n    width: 70.83333%; }\n  .c-grid__col--md-18 {\n    width: 75%; }\n  .c-grid__col--md-19 {\n    width: 79.16667%; }\n  .c-grid__col--md-20 {\n    width: 83.33333%; }\n  .c-grid__col--md-21 {\n    width: 87.5%; }\n  .c-grid__col--md-22 {\n    width: 91.66667%; }\n  .c-grid__col--md-23 {\n    width: 95.83333%; }\n  .c-grid__col--md-24 {\n    width: 100%; } }\n@media screen and (min-width: 1282px) {\n  .c-grid__col--lg-1 {\n    width: 4.16667%; }\n  .c-grid__col--lg-2 {\n    width: 8.33333%; }\n  .c-grid__col--lg-3 {\n    width: 12.5%; }\n  .c-grid__col--lg-4 {\n    width: 16.66667%; }\n  .c-grid__col--lg-5 {\n    width: 20.83333%; }\n  .c-grid__col--lg-6 {\n    width: 25%; }\n  .c-grid__col--lg-7 {\n    width: 29.16667%; }\n  .c-grid__col--lg-8 {\n    width: 33.33333%; }\n  .c-grid__col--lg-9 {\n    width: 37.5%; }\n  .c-grid__col--lg-10 {\n    width: 41.66667%; }\n  .c-grid__col--lg-11 {\n    width: 45.83333%; }\n  .c-grid__col--lg-12 {\n    width: 50%; }\n  .c-grid__col--lg-13 {\n    width: 54.16667%; }\n  .c-grid__col--lg-14 {\n    width: 58.33333%; }\n  .c-grid__col--lg-15 {\n    width: 62.5%; }\n  .c-grid__col--lg-16 {\n    width: 66.66667%; }\n  .c-grid__col--lg-17 {\n    width: 70.83333%; }\n  .c-grid__col--lg-18 {\n    width: 75%; }\n  .c-grid__col--lg-19 {\n    width: 79.16667%; }\n  .c-grid__col--lg-20 {\n    width: 83.33333%; }\n  .c-grid__col--lg-21 {\n    width: 87.5%; }\n  .c-grid__col--lg-22 {\n    width: 91.66667%; }\n  .c-grid__col--lg-23 {\n    width: 95.83333%; }\n  .c-grid__col--lg-24 {\n    width: 100%; } }\n.c-grid__container-spaced {\n  margin-left: -7.5px;\n  margin-right: -7.5px; }\n.c-grid__container-spaced > .c-grid__col {\n    margin-left: 7.5px;\n    margin-right: 7.5px; }\n.c-grid__container-spaced > .c-grid__col--1 {\n    width: calc(4.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--2 {\n    width: calc(8.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--3 {\n    width: calc(12.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--4 {\n    width: calc(16.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--5 {\n    width: calc(20.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--6 {\n    width: calc(25% - 15px); }\n.c-grid__container-spaced > .c-grid__col--7 {\n    width: calc(29.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--8 {\n    width: calc(33.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--9 {\n    width: calc(37.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--10 {\n    width: calc(41.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--11 {\n    width: calc(45.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--12 {\n    width: calc(50% - 15px); }\n.c-grid__container-spaced > .c-grid__col--13 {\n    width: calc(54.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--14 {\n    width: calc(58.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--15 {\n    width: calc(62.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--16 {\n    width: calc(66.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--17 {\n    width: calc(70.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--18 {\n    width: calc(75% - 15px); }\n.c-grid__container-spaced > .c-grid__col--19 {\n    width: calc(79.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--20 {\n    width: calc(83.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--21 {\n    width: calc(87.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--22 {\n    width: calc(91.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--23 {\n    width: calc(95.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--24 {\n    width: calc(100% - 15px); }\n@media screen and (min-width: 581px) {\n    .c-grid__container-spaced > .c-grid__col--xs-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-24 {\n      width: calc(100% - 15px); } }\n@media screen and (min-width: 769px) {\n    .c-grid__container-spaced > .c-grid__col--sm-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-24 {\n      width: calc(100% - 15px); } }\n@media screen and (min-width: 1025px) {\n    .c-grid__container-spaced > .c-grid__col--md-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-24 {\n      width: calc(100% - 15px); } }\n@media screen and (min-width: 1282px) {\n    .c-grid__container-spaced > .c-grid__col--lg-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-24 {\n      width: calc(100% - 15px); } }\n.c-form {\n  padding-bottom: 15px; }\n.c-form:before, .c-form:after {\n    content: \" \";\n    display: table; }\n.c-form:after {\n    clear: both; }\n.c-form__actions {\n  margin-bottom: -15px;\n  text-align: right; }\n.c-form__title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #3d5170;\n  border-bottom: solid 1px #e8ebf1;\n  padding-bottom: 5px;\n  margin-bottom: 15px; }\n.c-input {\n  margin-bottom: 15px; }\n.c-input__label {\n  font-size: 14px;\n  color: #3d5170;\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 4px; }\n.c-input__label-subtitle {\n  font-size: 12px;\n  color: #a9b4ca;\n  margin-bottom: 4px;\n  margin-left: 4px;\n  display: block; }\n.c-input__field {\n  display: block;\n  border: solid 1px #c8cfde;\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #3d5170;\n  padding: 10px;\n  outline: none;\n  width: 100%;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n.c-input__field:active, .c-input__field:focus {\n    border-color: #0f74ff;\n    box-shadow: 0 2px 5px #c8cfde; }\n.c-input__field[disabled] {\n    background-color: #fafafa; }\n.c-input__field[disabled]:active, .c-input__field[disabled]:focus {\n      border-color: #c8cfde;\n      box-shadow: none; }\n.c-input__field.is-error {\n    border-color: #EF662F; }\ntextarea.c-input__field {\n  min-height: 100px; }\ninput[type=\"date\"].c-input__field {\n  padding: 7px 10px;\n  padding-top: 8px; }\n.c-input-action__field {\n  display: inline-block;\n  border: solid 1px #d8dde7;\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #ffffff;\n  color: #3d5170;\n  padding: 10px;\n  outline: none;\n  width: calc(100% - 60px);\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n.c-input-action__field:active, .c-input-action__field:focus {\n    border-color: #0f74ff;\n    box-shadow: 0 2px 5px #c8cfde; }\n.c-input-action__field.is-error {\n    border-color: #EF662F; }\n.c-input-action__button {\n  cursor: pointer;\n  display: inline-block;\n  border: solid 1px #0047a8;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #0047a8;\n  color: #ffffff;\n  padding: 10px 0;\n  outline: none;\n  width: 60px;\n  float: right;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n.c-input-action__button:hover {\n    background-color: #003c8f; }\n.c-input-action__button[disabled] {\n    background-color: #3d5170;\n    border-color: #3d5170; }\n.c-input-action__button[disabled]:hover {\n      background-color: #3d5170; }\n.c-input-checkbox {\n  position: relative;\n  margin-bottom: 15px; }\n.c-input-checkbox__label {\n  display: inline-block;\n  font-size: 14px;\n  color: #3d5170;\n  padding-left: 25px;\n  cursor: pointer;\n  position: relative; }\n.c-input-checkbox__label:before {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    border: solid 2px #d8dde7;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-radius: 5px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease; }\n.c-input-checkbox__label:hover:before {\n    background-color: #d8dde7; }\n.c-input-checkbox__label:after {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    background-color: #0047a8;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    border-radius: 4px; }\n.c-input-checkbox__field {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n.c-input-checkbox .c-input-checkbox__field + .c-input-checkbox__label::after {\n  content: none; }\n.c-input-checkbox .c-input-checkbox__field:checked + .c-input-checkbox__label::after {\n  content: ''; }\n@media (max-width: 768px) {\n  .c-form__actions {\n    text-align: center; }\n    .c-form__actions .c-button {\n      display: block;\n      width: 100%; } }\n.c-input-selector__head {\n  margin-bottom: 15px; }\n.c-input-selector__content {\n  border: solid 1px #c8cfde;\n  height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n.choices.is-focused .choices__inner {\n  border-color: #0f74ff;\n  box-shadow: 0 2px 5px #c8cfde; }\n.choices.is-disabled .choices__inner {\n  background-color: #fafafa; }\n.choices.is-disabled .choices__input {\n  background-color: #fafafa;\n  cursor: auto;\n  cursor: initial; }\n.choices .choices__inner {\n  background-color: #ffffff;\n  border-radius: 5px;\n  border-color: #c8cfde;\n  min-height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 7px;\n  padding-bottom: 2px; }\n.choices .choices__input {\n  background-color: #ffffff; }\n.choices .choices__list--dropdown {\n  border-radius: 5px;\n  border-color: #c8cfde;\n  top: calc(100% + 2px); }\n.choices .choices__list--dropdown.is-active {\n    min-height: 150px; }\n.choices .choices__list--dropdown .choices__list {\n    max-height: 150px; }\n.choices .choices__list--multiple .choices__item {\n  background-color: #0047a8;\n  border-color: #0047a8; }\n.choices .choices__list--multiple .choices__item.is-highlighted {\n  background-color: #0047a8;\n  border-color: #0047a8; }\n.c-message {\n  padding: 30px 15px; }\n.c-message__title {\n  display: block;\n  text-align: center;\n  color: #3d5170;\n  font-size: 30px; }\n.c-message__content {\n  display: block;\n  text-align: center;\n  color: #3d5170;\n  font-size: 20px;\n  margin-top: 15px; }\n.c-message__content--small {\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto; }\n", "",{"version":3,"sources":["/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/_normalize.scss","main.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/_mixin.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/_helpers.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/_base.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/_variables.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_section.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_header.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_footer.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_flash.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_card.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_button.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_grid.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_input.scss","/Users/gregoriogalante/Workspace/matilda2/matilda-core/front/style/components/_message.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import url(\"https://fonts.googleapis.com/css?family=Alata\");\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.u-clearfix:before, .u-clearfix:after {\n  content: \" \";\n  display: table; }\n\n.u-clearfix:after {\n  clear: both; }\n\n.u-float-right {\n  float: right; }\n\n.u-float-left {\n  float: left; }\n\n.u-only-md {\n  display: block; }\n\n.u-only-sm {\n  display: block; }\n\n@media (max-width: 1024px) {\n  .u-only-md {\n    display: none; } }\n\n@media (max-width: 768px) {\n  .u-only-sm {\n    display: none; } }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: 'Alata', sans-serif;\n  background-color: #e8ebf1;\n  color: #3d5170; }\n\nmain {\n  position: relative;\n  margin-top: 50px; }\n\na {\n  color: #0047a8; }\n\nimg {\n  max-width: 100%; }\n\n.turbolinks-progress-bar {\n  background-color: #ffffff !important; }\n\n.c-section {\n  width: calc(100% - 200px);\n  min-height: calc(100vh - 50px);\n  margin-left: 200px;\n  padding: 15px;\n  transition: all 0.3s;\n  position: relative; }\n  .c-section--full {\n    width: 100%;\n    margin-left: 0; }\n\n.c-section__head {\n  border-bottom: solid 1px #d8dde7;\n  padding-bottom: 5px; }\n\n.c-section__head-title {\n  display: inline-block;\n  margin: 0;\n  font-size: 30px;\n  color: #3d5170; }\n\n.c-section__head-breadcrumb {\n  padding-top: 13px;\n  float: right; }\n\n.c-section__head-breadcrumb-link {\n  font-size: 14px;\n  color: #3d5170;\n  font-weight: bold;\n  text-decoration: none; }\n  .c-section__head-breadcrumb-link:after {\n    color: #a9b4ca;\n    content: ' - '; }\n  .c-section__head-breadcrumb-link:last-child:after {\n    display: none; }\n  .c-section__head-breadcrumb-link[href] {\n    color: #a9b4ca;\n    font-weight: normal; }\n    .c-section__head-breadcrumb-link[href]:hover {\n      color: #0047a8; }\n      .c-section__head-breadcrumb-link[href]:hover:after {\n        color: #a9b4ca; }\n\n.c-section__content {\n  margin-top: 15px; }\n  .c-section__content--cols {\n    display: flex;\n    /* [1] */\n    flex-wrap: nowrap;\n    /* [1] */\n    overflow-x: auto;\n    /* [1] */\n    -webkit-overflow-scrolling: touch;\n    /* [4] */\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    /* [5] */ }\n\n.c-section__content-block {\n  margin-bottom: 15px; }\n  .c-section__content-block--col {\n    flex: 0 0 auto;\n    width: 325px;\n    margin-right: 15px; }\n    .c-section__content-block--col > .c-card .c-card__body {\n      height: calc(100vh - 200px); }\n\n.is-menu-closed .c-section {\n  width: 100%;\n  margin-left: 0; }\n\n@media (max-width: 768px) {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n    padding: 0; }\n    .c-section--full {\n      width: 100%;\n      margin-left: 0; }\n  .c-section__head {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px; }\n  .c-section__head-title {\n    font-size: 24px; }\n  .c-section__head-breadcrumb {\n    padding-top: 5px;\n    float: none; }\n  .c-section__head-breadcrumb-link {\n    font-size: 10px; }\n  .c-section__content {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .c-section__content-block {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 100% !important; }\n    .c-section__content-block--col {\n      width: 100%; }\n      .c-section__content-block--col > .c-card .c-card__body {\n        overflow-y: auto !important; } }\n\n.c-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #0047a8;\n  z-index: 6;\n  padding: 0 15px;\n  border-bottom: solid 1px #d8dde7;\n  display: flex;\n  justify-content: space-between; }\n\n.c-header__logo {\n  color: #ffffff;\n  text-decoration: none;\n  height: 50px;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  width: auto; }\n\n.c-header__logo-title {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 5px;\n  bottom: 3px; }\n\n@media (max-width: 580px) {\n  .c-header__logo-title {\n    display: none; } }\n\n.c-header__nav {\n  display: flex;\n  flex-direction: flex-end; }\n\n.c-header__nav-item {\n  position: relative; }\n\n.c-header__nav-item-action {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  padding: 5px 15px;\n  color: #ffffff;\n  font-size: 14px;\n  height: 49px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase; }\n  .c-header__nav-item-action:hover, .c-header__nav-item-action:focus {\n    background-color: #003c8f;\n    color: #ffffff; }\n\n.c-header__nav-menu {\n  position: absolute;\n  top: 57px;\n  right: 0px;\n  width: 200px;\n  max-height: 60vh;\n  background-color: #ffffff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  transform: translateY(30px);\n  visibility: hidden;\n  overflow-y: auto;\n  opacity: 0;\n  transition: all 0.3s; }\n  .c-header__nav-menu.is-active {\n    transform: translateY(0);\n    visibility: visible;\n    opacity: 1; }\n  .c-header__nav-menu--large {\n    width: 400px; }\n\n.c-header__nav-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.c-header__nav-menu-list-item {\n  width: 100%;\n  border-bottom: solid 1px #d8dde7; }\n  .c-header__nav-menu-list-item:last-child {\n    border-bottom: none; }\n\n.c-header__nav-menu-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #3d5170;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-decoration: none; }\n  .c-header__nav-menu-list-item-link:hover {\n    background-color: #e8ebf1; }\n\n@media (max-width: 768px) {\n  .c-header__nav-menu {\n    position: fixed;\n    width: calc(100% - 30px);\n    right: 15px;\n    max-height: calc(100% - 50px - 20px); } }\n\n.c-footer {\n  width: calc(100% - 200px);\n  height: 50px;\n  margin-left: 200px;\n  padding: 0 15px;\n  transition: all 0.3s; }\n  .c-footer--full {\n    width: 100%;\n    margin-left: 0; }\n\n.c-footer__content {\n  padding: 15px 0;\n  font-size: 12px;\n  color: #3d5170;\n  border-top: solid 1px #d8dde7; }\n  .c-footer__content a {\n    color: #3d5170; }\n\n.is-menu-closed .c-footer {\n  width: 100%;\n  margin-left: 0; }\n\n.is-primary .c-footer__content {\n  color: #ffffff; }\n  .is-primary .c-footer__content a {\n    color: #ffffff; }\n\n@media (max-width: 768px) {\n  .c-footer {\n    width: 100%;\n    margin-left: 0; }\n    .c-footer--full {\n      width: 100%;\n      margin-left: 0; } }\n\n.c-flash {\n  position: fixed;\n  top: 65px;\n  right: 0;\n  width: 300px;\n  z-index: 5; }\n\n.c-flash__message {\n  width: 100%;\n  background-color: #0047a8;\n  color: #ffffff;\n  font-size: 14px;\n  text-align: left;\n  padding: 15px;\n  transition: all 0.3s;\n  transform: translateX(100%);\n  border-radius: 15px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n  .c-flash__message.is-active {\n    transform: translateX(-15px); }\n  .c-flash__message--green {\n    background-color: #54B64E; }\n    .c-flash__message--green .c-flash__message-close {\n      border-color: #54B64E; }\n  .c-flash__message--orange {\n    background-color: #EF662F !important; }\n    .c-flash__message--orange .c-flash__message-close {\n      border-color: #EF662F; }\n  .c-flash__message--blue {\n    background-color: #00AEE3; }\n    .c-flash__message--blue .c-flash__message-close {\n      border-color: #00AEE3; }\n  .c-flash__message--yellow {\n    background-color: #FEC542; }\n    .c-flash__message--yellow .c-flash__message-close {\n      border-color: #FEC542; }\n\n.c-flash__message-close {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  border: solid 2px #0047a8;\n  cursor: pointer; }\n  .c-flash__message-close:hover {\n    background-color: #f2f2f2; }\n  .c-flash__message-close:before, .c-flash__message-close:after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 10px;\n    background-color: #8998b7;\n    position: absolute;\n    top: calc(50% - 5px);\n    left: calc(50% - 1px); }\n  .c-flash__message-close:before {\n    transform: rotate(45deg); }\n  .c-flash__message-close:after {\n    transform: rotate(-45deg); }\n\n.c-card {\n  background-color: #ffffff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.25s linear; }\n  .c-card--centerpage {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px; }\n  .c-card--centerpage-large {\n    width: 900px; }\n  .c-card--unhidden {\n    overflow: visible; }\n  .c-card--hasnext {\n    margin-bottom: 15px; }\n  .c-card--viewported.is-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100vh;\n    border-radius: 0;\n    overflow: auto; }\n    .c-card--viewported.is-fixed .c-card__header {\n      border-radius: 0; }\n    .c-card--viewported.is-fixed .c-card__body--scrollable {\n      max-height: calc(100vh - 50px); }\n  .c-card:hover {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n\n.c-card__header {\n  background-color: #ffffff;\n  color: #3d5170;\n  border-bottom: solid 1px #d8dde7;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n  .c-card__header:before, .c-card__header:after {\n    content: \" \";\n    display: table; }\n  .c-card__header:after {\n    clear: both; }\n\n.c-card__header-title {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px; }\n\n.c-card__header-actions {\n  list-style: none;\n  margin: 0;\n  padding: 7px 15px;\n  float: right; }\n  .c-card__header-actions:before, .c-card__header-actions:after {\n    content: \" \";\n    display: table; }\n  .c-card__header-actions:after {\n    clear: both; }\n  .c-card__header-actions--full {\n    float: none;\n    width: 100%; }\n\n.c-card__header-action {\n  display: inline-block;\n  margin-right: 5px; }\n  .c-card__header-action--full {\n    display: block;\n    width: 100%; }\n  .c-card__header-action:last-child {\n    margin-right: 0; }\n  .c-card__header-action .c-button {\n    padding: 8px 20px; }\n  .c-card__header-action .c-input-action {\n    margin: 2px 0;\n    font-size: 14px; }\n    .c-card__header-action .c-input-action .c-input__field, .c-card__header-action .c-input-action .c-input-action__field {\n      padding: 7px 10px; }\n    .c-card__header-action .c-input-action .c-input-action__button {\n      padding: 7px 0; }\n\n.c-card__header-action-text {\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 10px; }\n\n.c-card__body {\n  padding: 15px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n  .c-card__body--list {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n  .c-card__body--scrollable {\n    max-height: calc(100vh - 200px);\n    overflow-y: auto; }\n\n.c-card__body-list-item {\n  border-bottom: solid 1px #d8dde7;\n  color: #3d5170; }\n  .c-card__body-list-item:last-child {\n    border-bottom: none; }\n  .c-card__body-list-item--padding {\n    padding: 15px; }\n  .c-card__body-list-item.is-active {\n    background-color: rgba(0, 71, 168, 0.1); }\n\n.c-card__body-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #3d5170;\n  text-decoration: none; }\n  .c-card__body-list-item-link:hover {\n    background-color: #e8ebf1;\n    text-decoration: none; }\n  .c-card__body-list-item-link.is-active {\n    background-color: rgba(0, 71, 168, 0.1); }\n\n.c-card__body-list-item-content {\n  display: inline-block;\n  padding-right: 90px; }\n\n.c-card__body-list-item-action {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n  color: #0047a8; }\n\n@media (max-width: 1024px) {\n  .c-card--centerpage-large {\n    width: calc(100% - 30px); } }\n\n@media (max-width: 768px) {\n  .c-card {\n    background-color: #ffffff;\n    border-radius: 0;\n    overflow: hidden; }\n    .c-card--centerpage {\n      position: relative;\n      top: 0;\n      left: 0;\n      transform: none;\n      width: calc(100% - 30px);\n      margin: auto;\n      border-radius: 15px;\n      margin-top: 65px;\n      margin-bottom: 15px; }\n    .c-card--centerpage-large {\n      width: calc(100% - 30px); }\n  .c-card__header {\n    border-radius: 0; }\n  .c-card__header-title {\n    display: block;\n    text-align: center;\n    font-size: 20px; }\n  .c-card__header-actions {\n    text-align: center;\n    float: none;\n    padding-top: 0;\n    margin-top: -10px; }\n    .c-card__header-actions--full {\n      margin-top: 0;\n      padding-top: 7px; }\n  .c-card__header-action-group {\n    display: flex; }\n  .c-card__header-action {\n    float: none;\n    width: 100%; }\n    .c-card__header-action .c-button {\n      display: block;\n      text-align: center; }\n  .c-card__body {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n    .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; } }\n\n@media (max-width: 768px) {\n  .c-card--mobile-fixed-section {\n    margin: 0 !important; }\n  .c-card--mobile-fixed {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 50px);\n    transform: translateX(100%);\n    transition: transform 0.3s;\n    overflow-y: auto;\n    z-index: 1; }\n    .c-card--mobile-fixed.is-open {\n      transform: translateX(0); }\n    .c-card--mobile-fixed .c-card__header-actions {\n      margin-top: 0;\n      padding-top: 7px; }\n    .c-card--mobile-fixed .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; }\n  .c-card__header-title--mobile-fixed {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    background-color: #0047a8;\n    color: #ffffff;\n    border-radius: 10px;\n    font-size: 12px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n    z-index: 2; } }\n\n@keyframes c-button-is-loading {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(200%); } }\n\n.c-button {\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n  background-color: #0047a8;\n  color: #ffffff;\n  text-decoration: none;\n  border: none;\n  transition: all 0.15s;\n  outline: 0;\n  position: relative; }\n  .c-button[disabled] {\n    background-color: rgba(61, 81, 112, 0.65); }\n    .c-button[disabled]:hover {\n      background-color: rgba(61, 81, 112, 0.65);\n      box-shadow: none; }\n  .c-button.is-loading {\n    color: rgba(255, 255, 255, 0.5);\n    overflow: hidden; }\n    .c-button.is-loading:before {\n      content: '';\n      display: block;\n      width: 70%;\n      height: 2px;\n      background-color: rgba(255, 255, 255, 0.8);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      animation: c-button-is-loading 1s infinite; }\n  .c-button:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 71, 168, 0.25);\n    background-color: #003c8f; }\n  .c-button:active, .c-button:focus {\n    background-color: #003175; }\n  .c-button--green {\n    background-color: #54B64E; }\n    .c-button--green:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(84, 182, 78, 0.25);\n      background-color: #4aa644; }\n    .c-button--green:active, .c-button--green:focus {\n      background-color: #42943d; }\n  .c-button--blue {\n    background-color: #00AEE3; }\n    .c-button--blue:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 174, 227, 0.25);\n      background-color: #009aca; }\n    .c-button--blue:active, .c-button--blue:focus {\n      background-color: #0087b0; }\n  .c-button--yellow {\n    background-color: #FEC542; }\n    .c-button--yellow:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(254, 197, 66, 0.25);\n      background-color: #febd29; }\n    .c-button--yellow:active, .c-button--yellow:focus {\n      background-color: #feb50f; }\n  .c-button--orange {\n    background-color: #EF662F; }\n    .c-button--orange:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(239, 102, 47, 0.25);\n      background-color: #ed5517; }\n    .c-button--orange:active, .c-button--orange:focus {\n      background-color: #da4a11; }\n  .c-button--black {\n    background-color: #3d5170; }\n    .c-button--black:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(61, 81, 112, 0.25);\n      background-color: #34455f; }\n    .c-button--black:active, .c-button--black:focus {\n      background-color: #2b394f; }\n  .c-button--cenere {\n    background-color: #e8ebf1;\n    color: #3d5170; }\n    .c-button--cenere:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(232, 235, 241, 0.25);\n      background-color: #d8dde7; }\n    .c-button--cenere:active, .c-button--cenere:focus {\n      background-color: #c8cfde; }\n  .c-button--transparent {\n    background-color: transparent;\n    color: #3d5170; }\n    .c-button--transparent:hover {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n    .c-button--transparent:active, .c-button--transparent:focus {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n  .c-button--twitter {\n    background-color: #55acee; }\n    .c-button--twitter:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(85, 172, 238, 0.25);\n      background-color: #3ea1ec; }\n    .c-button--twitter:active, .c-button--twitter:focus {\n      background-color: #2795e9; }\n  .c-button--linkedin {\n    background-color: #007bb6; }\n    .c-button--linkedin:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 123, 182, 0.25);\n      background-color: #006a9d; }\n    .c-button--linkedin:active, .c-button--linkedin:focus {\n      background-color: #005983; }\n  .c-button--toggl {\n    background-color: #e20505; }\n    .c-button--toggl:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(226, 5, 5, 0.25);\n      background-color: #c90404; }\n    .c-button--toggl:active, .c-button--toggl:focus {\n      background-color: #b00404; }\n  .c-button--dropbox {\n    background-color: #005ff8; }\n    .c-button--dropbox:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 95, 248, 0.25);\n      background-color: #0055df; }\n    .c-button--dropbox:active, .c-button--dropbox:focus {\n      background-color: #004bc5; }\n  .c-button--block {\n    display: block;\n    text-align: center; }\n\n@media (max-width: 768px) {\n  .c-button {\n    padding: 15px 20px; } }\n\n.c-grid__container, .c-grid__container-spaced {\n  margin: auto;\n  box-sizing: border-box; }\n  .c-grid__container:before, .c-grid__container:after, .c-grid__container-spaced:before, .c-grid__container-spaced:after {\n    content: \" \";\n    display: table; }\n  .c-grid__container:after, .c-grid__container-spaced:after {\n    clear: both; }\n\n.c-grid__col {\n  float: left;\n  box-sizing: border-box;\n  width: 100%; }\n\n.c-grid__col--1 {\n  width: 4.16667%; }\n\n.c-grid__col--2 {\n  width: 8.33333%; }\n\n.c-grid__col--3 {\n  width: 12.5%; }\n\n.c-grid__col--4 {\n  width: 16.66667%; }\n\n.c-grid__col--5 {\n  width: 20.83333%; }\n\n.c-grid__col--6 {\n  width: 25%; }\n\n.c-grid__col--7 {\n  width: 29.16667%; }\n\n.c-grid__col--8 {\n  width: 33.33333%; }\n\n.c-grid__col--9 {\n  width: 37.5%; }\n\n.c-grid__col--10 {\n  width: 41.66667%; }\n\n.c-grid__col--11 {\n  width: 45.83333%; }\n\n.c-grid__col--12 {\n  width: 50%; }\n\n.c-grid__col--13 {\n  width: 54.16667%; }\n\n.c-grid__col--14 {\n  width: 58.33333%; }\n\n.c-grid__col--15 {\n  width: 62.5%; }\n\n.c-grid__col--16 {\n  width: 66.66667%; }\n\n.c-grid__col--17 {\n  width: 70.83333%; }\n\n.c-grid__col--18 {\n  width: 75%; }\n\n.c-grid__col--19 {\n  width: 79.16667%; }\n\n.c-grid__col--20 {\n  width: 83.33333%; }\n\n.c-grid__col--21 {\n  width: 87.5%; }\n\n.c-grid__col--22 {\n  width: 91.66667%; }\n\n.c-grid__col--23 {\n  width: 95.83333%; }\n\n.c-grid__col--24 {\n  width: 100%; }\n\n@media screen and (min-width: 581px) {\n  .c-grid__col--xs-1 {\n    width: 4.16667%; }\n  .c-grid__col--xs-2 {\n    width: 8.33333%; }\n  .c-grid__col--xs-3 {\n    width: 12.5%; }\n  .c-grid__col--xs-4 {\n    width: 16.66667%; }\n  .c-grid__col--xs-5 {\n    width: 20.83333%; }\n  .c-grid__col--xs-6 {\n    width: 25%; }\n  .c-grid__col--xs-7 {\n    width: 29.16667%; }\n  .c-grid__col--xs-8 {\n    width: 33.33333%; }\n  .c-grid__col--xs-9 {\n    width: 37.5%; }\n  .c-grid__col--xs-10 {\n    width: 41.66667%; }\n  .c-grid__col--xs-11 {\n    width: 45.83333%; }\n  .c-grid__col--xs-12 {\n    width: 50%; }\n  .c-grid__col--xs-13 {\n    width: 54.16667%; }\n  .c-grid__col--xs-14 {\n    width: 58.33333%; }\n  .c-grid__col--xs-15 {\n    width: 62.5%; }\n  .c-grid__col--xs-16 {\n    width: 66.66667%; }\n  .c-grid__col--xs-17 {\n    width: 70.83333%; }\n  .c-grid__col--xs-18 {\n    width: 75%; }\n  .c-grid__col--xs-19 {\n    width: 79.16667%; }\n  .c-grid__col--xs-20 {\n    width: 83.33333%; }\n  .c-grid__col--xs-21 {\n    width: 87.5%; }\n  .c-grid__col--xs-22 {\n    width: 91.66667%; }\n  .c-grid__col--xs-23 {\n    width: 95.83333%; }\n  .c-grid__col--xs-24 {\n    width: 100%; } }\n\n@media screen and (min-width: 769px) {\n  .c-grid__col--sm-1 {\n    width: 4.16667%; }\n  .c-grid__col--sm-2 {\n    width: 8.33333%; }\n  .c-grid__col--sm-3 {\n    width: 12.5%; }\n  .c-grid__col--sm-4 {\n    width: 16.66667%; }\n  .c-grid__col--sm-5 {\n    width: 20.83333%; }\n  .c-grid__col--sm-6 {\n    width: 25%; }\n  .c-grid__col--sm-7 {\n    width: 29.16667%; }\n  .c-grid__col--sm-8 {\n    width: 33.33333%; }\n  .c-grid__col--sm-9 {\n    width: 37.5%; }\n  .c-grid__col--sm-10 {\n    width: 41.66667%; }\n  .c-grid__col--sm-11 {\n    width: 45.83333%; }\n  .c-grid__col--sm-12 {\n    width: 50%; }\n  .c-grid__col--sm-13 {\n    width: 54.16667%; }\n  .c-grid__col--sm-14 {\n    width: 58.33333%; }\n  .c-grid__col--sm-15 {\n    width: 62.5%; }\n  .c-grid__col--sm-16 {\n    width: 66.66667%; }\n  .c-grid__col--sm-17 {\n    width: 70.83333%; }\n  .c-grid__col--sm-18 {\n    width: 75%; }\n  .c-grid__col--sm-19 {\n    width: 79.16667%; }\n  .c-grid__col--sm-20 {\n    width: 83.33333%; }\n  .c-grid__col--sm-21 {\n    width: 87.5%; }\n  .c-grid__col--sm-22 {\n    width: 91.66667%; }\n  .c-grid__col--sm-23 {\n    width: 95.83333%; }\n  .c-grid__col--sm-24 {\n    width: 100%; } }\n\n@media screen and (min-width: 1025px) {\n  .c-grid__col--md-1 {\n    width: 4.16667%; }\n  .c-grid__col--md-2 {\n    width: 8.33333%; }\n  .c-grid__col--md-3 {\n    width: 12.5%; }\n  .c-grid__col--md-4 {\n    width: 16.66667%; }\n  .c-grid__col--md-5 {\n    width: 20.83333%; }\n  .c-grid__col--md-6 {\n    width: 25%; }\n  .c-grid__col--md-7 {\n    width: 29.16667%; }\n  .c-grid__col--md-8 {\n    width: 33.33333%; }\n  .c-grid__col--md-9 {\n    width: 37.5%; }\n  .c-grid__col--md-10 {\n    width: 41.66667%; }\n  .c-grid__col--md-11 {\n    width: 45.83333%; }\n  .c-grid__col--md-12 {\n    width: 50%; }\n  .c-grid__col--md-13 {\n    width: 54.16667%; }\n  .c-grid__col--md-14 {\n    width: 58.33333%; }\n  .c-grid__col--md-15 {\n    width: 62.5%; }\n  .c-grid__col--md-16 {\n    width: 66.66667%; }\n  .c-grid__col--md-17 {\n    width: 70.83333%; }\n  .c-grid__col--md-18 {\n    width: 75%; }\n  .c-grid__col--md-19 {\n    width: 79.16667%; }\n  .c-grid__col--md-20 {\n    width: 83.33333%; }\n  .c-grid__col--md-21 {\n    width: 87.5%; }\n  .c-grid__col--md-22 {\n    width: 91.66667%; }\n  .c-grid__col--md-23 {\n    width: 95.83333%; }\n  .c-grid__col--md-24 {\n    width: 100%; } }\n\n@media screen and (min-width: 1282px) {\n  .c-grid__col--lg-1 {\n    width: 4.16667%; }\n  .c-grid__col--lg-2 {\n    width: 8.33333%; }\n  .c-grid__col--lg-3 {\n    width: 12.5%; }\n  .c-grid__col--lg-4 {\n    width: 16.66667%; }\n  .c-grid__col--lg-5 {\n    width: 20.83333%; }\n  .c-grid__col--lg-6 {\n    width: 25%; }\n  .c-grid__col--lg-7 {\n    width: 29.16667%; }\n  .c-grid__col--lg-8 {\n    width: 33.33333%; }\n  .c-grid__col--lg-9 {\n    width: 37.5%; }\n  .c-grid__col--lg-10 {\n    width: 41.66667%; }\n  .c-grid__col--lg-11 {\n    width: 45.83333%; }\n  .c-grid__col--lg-12 {\n    width: 50%; }\n  .c-grid__col--lg-13 {\n    width: 54.16667%; }\n  .c-grid__col--lg-14 {\n    width: 58.33333%; }\n  .c-grid__col--lg-15 {\n    width: 62.5%; }\n  .c-grid__col--lg-16 {\n    width: 66.66667%; }\n  .c-grid__col--lg-17 {\n    width: 70.83333%; }\n  .c-grid__col--lg-18 {\n    width: 75%; }\n  .c-grid__col--lg-19 {\n    width: 79.16667%; }\n  .c-grid__col--lg-20 {\n    width: 83.33333%; }\n  .c-grid__col--lg-21 {\n    width: 87.5%; }\n  .c-grid__col--lg-22 {\n    width: 91.66667%; }\n  .c-grid__col--lg-23 {\n    width: 95.83333%; }\n  .c-grid__col--lg-24 {\n    width: 100%; } }\n\n.c-grid__container-spaced {\n  margin-left: -7.5px;\n  margin-right: -7.5px; }\n  .c-grid__container-spaced > .c-grid__col {\n    margin-left: 7.5px;\n    margin-right: 7.5px; }\n  .c-grid__container-spaced > .c-grid__col--1 {\n    width: calc(4.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--2 {\n    width: calc(8.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--3 {\n    width: calc(12.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--4 {\n    width: calc(16.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--5 {\n    width: calc(20.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--6 {\n    width: calc(25% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--7 {\n    width: calc(29.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--8 {\n    width: calc(33.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--9 {\n    width: calc(37.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--10 {\n    width: calc(41.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--11 {\n    width: calc(45.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--12 {\n    width: calc(50% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--13 {\n    width: calc(54.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--14 {\n    width: calc(58.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--15 {\n    width: calc(62.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--16 {\n    width: calc(66.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--17 {\n    width: calc(70.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--18 {\n    width: calc(75% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--19 {\n    width: calc(79.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--20 {\n    width: calc(83.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--21 {\n    width: calc(87.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--22 {\n    width: calc(91.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--23 {\n    width: calc(95.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--24 {\n    width: calc(100% - 15px); }\n  @media screen and (min-width: 581px) {\n    .c-grid__container-spaced > .c-grid__col--xs-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-24 {\n      width: calc(100% - 15px); } }\n  @media screen and (min-width: 769px) {\n    .c-grid__container-spaced > .c-grid__col--sm-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-24 {\n      width: calc(100% - 15px); } }\n  @media screen and (min-width: 1025px) {\n    .c-grid__container-spaced > .c-grid__col--md-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-24 {\n      width: calc(100% - 15px); } }\n  @media screen and (min-width: 1282px) {\n    .c-grid__container-spaced > .c-grid__col--lg-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-24 {\n      width: calc(100% - 15px); } }\n\n.c-form {\n  padding-bottom: 15px; }\n  .c-form:before, .c-form:after {\n    content: \" \";\n    display: table; }\n  .c-form:after {\n    clear: both; }\n\n.c-form__actions {\n  margin-bottom: -15px;\n  text-align: right; }\n\n.c-form__title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #3d5170;\n  border-bottom: solid 1px #e8ebf1;\n  padding-bottom: 5px;\n  margin-bottom: 15px; }\n\n.c-input {\n  margin-bottom: 15px; }\n\n.c-input__label {\n  font-size: 14px;\n  color: #3d5170;\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 4px; }\n\n.c-input__label-subtitle {\n  font-size: 12px;\n  color: #a9b4ca;\n  margin-bottom: 4px;\n  margin-left: 4px;\n  display: block; }\n\n.c-input__field {\n  display: block;\n  border: solid 1px #c8cfde;\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #3d5170;\n  padding: 10px;\n  outline: none;\n  width: 100%;\n  transition: all 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  .c-input__field:active, .c-input__field:focus {\n    border-color: #0f74ff;\n    box-shadow: 0 2px 5px #c8cfde; }\n  .c-input__field[disabled] {\n    background-color: #fafafa; }\n    .c-input__field[disabled]:active, .c-input__field[disabled]:focus {\n      border-color: #c8cfde;\n      box-shadow: none; }\n  .c-input__field.is-error {\n    border-color: #EF662F; }\n\ntextarea.c-input__field {\n  min-height: 100px; }\n\ninput[type=\"date\"].c-input__field {\n  padding: 7px 10px;\n  padding-top: 8px; }\n\n.c-input-action__field {\n  display: inline-block;\n  border: solid 1px #d8dde7;\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #ffffff;\n  color: #3d5170;\n  padding: 10px;\n  outline: none;\n  width: calc(100% - 60px);\n  transition: all 0.15s; }\n  .c-input-action__field:active, .c-input-action__field:focus {\n    border-color: #0f74ff;\n    box-shadow: 0 2px 5px #c8cfde; }\n  .c-input-action__field.is-error {\n    border-color: #EF662F; }\n\n.c-input-action__button {\n  cursor: pointer;\n  display: inline-block;\n  border: solid 1px #0047a8;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #0047a8;\n  color: #ffffff;\n  padding: 10px 0;\n  outline: none;\n  width: 60px;\n  float: right;\n  transition: all 0.15s; }\n  .c-input-action__button:hover {\n    background-color: #003c8f; }\n  .c-input-action__button[disabled] {\n    background-color: #3d5170;\n    border-color: #3d5170; }\n    .c-input-action__button[disabled]:hover {\n      background-color: #3d5170; }\n\n.c-input-checkbox {\n  position: relative;\n  margin-bottom: 15px; }\n\n.c-input-checkbox__label {\n  display: inline-block;\n  font-size: 14px;\n  color: #3d5170;\n  padding-left: 25px;\n  cursor: pointer;\n  position: relative; }\n  .c-input-checkbox__label:before {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    border: solid 2px #d8dde7;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-radius: 5px;\n    transition: all 0.3s ease; }\n  .c-input-checkbox__label:hover:before {\n    background-color: #d8dde7; }\n  .c-input-checkbox__label:after {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    background-color: #0047a8;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    border-radius: 4px; }\n\n.c-input-checkbox__field {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.c-input-checkbox .c-input-checkbox__field + .c-input-checkbox__label::after {\n  content: none; }\n\n.c-input-checkbox .c-input-checkbox__field:checked + .c-input-checkbox__label::after {\n  content: ''; }\n\n@media (max-width: 768px) {\n  .c-form__actions {\n    text-align: center; }\n    .c-form__actions .c-button {\n      display: block;\n      width: 100%; } }\n\n.c-input-selector__head {\n  margin-bottom: 15px; }\n\n.c-input-selector__content {\n  border: solid 1px #c8cfde;\n  height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.choices.is-focused .choices__inner {\n  border-color: #0f74ff;\n  box-shadow: 0 2px 5px #c8cfde; }\n\n.choices.is-disabled .choices__inner {\n  background-color: #fafafa; }\n\n.choices.is-disabled .choices__input {\n  background-color: #fafafa;\n  cursor: initial; }\n\n.choices .choices__inner {\n  background-color: #ffffff;\n  border-radius: 5px;\n  border-color: #c8cfde;\n  min-height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 7px;\n  padding-bottom: 2px; }\n\n.choices .choices__input {\n  background-color: #ffffff; }\n\n.choices .choices__list--dropdown {\n  border-radius: 5px;\n  border-color: #c8cfde;\n  top: calc(100% + 2px); }\n  .choices .choices__list--dropdown.is-active {\n    min-height: 150px; }\n  .choices .choices__list--dropdown .choices__list {\n    max-height: 150px; }\n\n.choices .choices__list--multiple .choices__item {\n  background-color: #0047a8;\n  border-color: #0047a8; }\n\n.choices .choices__list--multiple .choices__item.is-highlighted {\n  background-color: #0047a8;\n  border-color: #0047a8; }\n\n.c-message {\n  padding: 30px 15px; }\n\n.c-message__title {\n  display: block;\n  text-align: center;\n  color: #3d5170;\n  font-size: 30px; }\n\n.c-message__content {\n  display: block;\n  text-align: center;\n  color: #3d5170;\n  font-size: 20px;\n  margin-top: 15px; }\n  .c-message__content--small {\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto; }\n","@mixin clearfix {\n  &:before, &:after {\n    content: \" \";\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin isPrimaryBodyBg {\n  background: linear-gradient(270deg, $color_primary, $color_primary, $color_primary);\n  background-size: 600% 600%;\n  animation: BodyPrimaryBg 15s ease infinite;\n\n  @keyframes BodyPrimaryBg { \n    0%{background-position:0% 50%}\n    50%{background-position:100% 50%}\n    100%{background-position:0% 50%}\n  }\n}\n",".u-clearfix {\n  @include clearfix;\n}\n\n.u-float-right {\n  float: right;\n}\n\n.u-float-left {\n  float: left;\n}\n\n.u-only-md {\n  display: block;\n}\n\n.u-only-sm {\n  display: block;\n}\n\n@media (max-width: $breakpoint_md) {\n  .u-only-md {\n    display: none;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .u-only-sm {\n    display: none;\n  }\n}\n","* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Alata', sans-serif;\n  background-color: $color_cenere;\n  color: $color_black;\n}\n\nmain {\n  position: relative;\n  margin-top: $size_header_height;\n}\n\na {\n  color: $color_primary;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.turbolinks-progress-bar {\n  background-color: $color_white !important;\n}\n","// Breakpoints\n// //////////////////////////////////////////\n\n$breakpoint_xs: 580px;\n$breakpoint_sm: 768px;\n$breakpoint_md: 1024px;\n$breakpoint_lg: 1281px;\n\n// Colors\n// //////////////////////////////////////////\n\n$color_white: #ffffff;\n$color_black: #3d5170;\n$color_cenere: #e8ebf1;\n$color_primary: #0047a8;\n$color_blue: #00AEE3;\n$color_green: #54B64E;\n$color_yellow: #FEC542;\n$color_orange: #EF662F;\n\n$color_twitter: #55acee;\n$color_linkedin: #007bb6;\n$color_toggl: #e20505;\n$color_dropbox: #005ff8;\n\n// Sizes\n// //////////////////////////////////////////\n\n$size_header_height: 50px;\n$size_sidebar_width: 200px;\n",".c-section {\n  width: calc(100% - #{$size_sidebar_width});\n  min-height: calc(100vh - 50px);\n  margin-left: $size_sidebar_width;\n  padding: 15px;\n  transition: all 0.3s;\n  position: relative;\n\n  &--full {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.c-section__head {\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  padding-bottom: 5px;\n}\n\n.c-section__head-title {\n  display: inline-block;\n  margin: 0;\n  font-size: 30px;\n  color: $color_black;\n}\n\n.c-section__head-breadcrumb {\n  padding-top: 13px;\n  float: right;\n}\n\n.c-section__head-breadcrumb-link {\n  font-size: 14px;\n  color: $color_black;\n  font-weight: bold;\n  text-decoration: none;\n\n  &:after {\n    color: darken($color_cenere, 20%);\n    content: ' - ';\n  }\n\n  &:last-child {\n    &:after { display: none; }\n  }\n\n  &[href] {\n    color: darken($color_cenere, 20%);\n    font-weight: normal;\n\n    &:hover {\n      color: $color_primary;\n\n      &:after {\n        color: darken($color_cenere, 20%);\n      }\n    }\n  }\n}\n\n.c-section__content {\n  margin-top: 15px;\n\n  &--cols {\n    display: flex; /* [1] */\n    flex-wrap: nowrap; /* [1] */\n    overflow-x: auto; /* [1] */\n    -webkit-overflow-scrolling: touch; /* [4] */\n    -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */\n  }\n}\n\n.c-section__content-block {\n  margin-bottom: 15px;\n\n  &--col {\n    flex: 0 0 auto;\n    width: 325px;\n    margin-right: 15px;\n\n    > .c-card {\n      .c-card__body {\n        height: calc(100vh - 200px);\n      }\n    }\n  }\n}\n\n.is-menu-closed {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n    padding: 0;\n\n    &--full {\n      width: 100%;\n      margin-left: 0;\n    }\n  }\n\n  .c-section__head {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n  }\n\n  .c-section__head-title {\n    font-size: 24px;\n  }\n\n  .c-section__head-breadcrumb {\n    padding-top: 5px;\n    float: none;\n  }\n\n  .c-section__head-breadcrumb-link {\n    font-size: 10px;\n  }\n\n  .c-section__content {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n\n  .c-section__content-block {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 100% !important;\n\n    &--col {\n      width: 100%;\n\n      > .c-card {\n        .c-card__body {\n          overflow-y: auto !important;\n        }\n      }\n    }\n  }\n}",".c-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: $size_header_height;\n  background-color: $color_primary;\n  z-index: 6;\n  padding: 0 15px;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  display: flex;\n  justify-content: space-between;\n}\n\n// Logo\n// //////////////////////////////////////////\n\n.c-header__logo {\n  color: $color_white;\n  text-decoration: none;\n  height: $size_header_height;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n\n.c-header__logo-title {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 5px;\n  bottom: 3px;\n}\n\n@media (max-width: $breakpoint_xs) {\n  .c-header__logo-title {\n    display: none;\n  }\n}\n\n// Nav\n// //////////////////////////////////////////\n\n.c-header__nav {\n  display: flex;\n  flex-direction: flex-end;\n}\n\n.c-header__nav-item {\n  position: relative;\n}\n\n.c-header__nav-item-action {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  padding: 5px 15px;\n  color: $color_white;\n  font-size: 14px;\n  height: $size_header_height - 1px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase;\n\n  &:hover, &:focus {\n    background-color: darken($color_primary, 5%);\n    color: $color_white;\n  }\n}\n\n.c-header__nav-menu {\n  position: absolute;\n  top: $size_header_height + 7px;\n  right: 0px;\n  width: 200px;\n  max-height: 60vh;\n  background-color: $color_white;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.10);\n  border-radius: 10px;\n  overflow: hidden;\n  transform: translateY(30px);\n  visibility: hidden;\n  overflow-y: auto;\n  \n  opacity: 0;\n  transition: all 0.3s;\n\n  &.is-active {\n    transform: translateY(0);\n    visibility: visible;\n    opacity: 1\n  }\n  \n  &--large {\n    width: 400px;\n  }\n}\n\n.c-header__nav-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.c-header__nav-menu-list-item {\n  width: 100%;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n\n  &:last-child {\n    border-bottom: none;\n  }\n}\n\n.c-header__nav-menu-list-item-link {\n  display: block;\n  padding: 15px;\n  color: $color_black;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-decoration: none;\n\n  &:hover {\n    background-color: $color_cenere;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-header__nav-menu {\n    position: fixed;\n    width: calc(100% - 30px);\n    right: 15px;\n    max-height: calc(100% - #{$size_header_height} - 20px);\n  }\n}\n",".c-footer {\n  width: calc(100% - #{$size_sidebar_width});\n  height: 50px;\n  margin-left: $size_sidebar_width;\n  padding: 0 15px;\n  transition: all 0.3s;\n\n  &--full {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.c-footer__content {\n  padding: 15px 0;\n  font-size: 12px;\n  color: $color_black;\n  border-top: solid 1px darken($color_cenere, 5%);\n\n  a {\n    color: $color_black;\n  }\n}\n\n.is-menu-closed {\n  .c-footer {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.is-primary {\n  .c-footer__content {\n    color: $color_white;\n\n    a {\n      color: $color_white;\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-footer {\n    width: 100%;\n    margin-left: 0;\n\n    &--full {\n      width: 100%;\n      margin-left: 0;\n    }\n  }\n}",".c-flash {\n  position: fixed;\n  top: $size_header_height + 15px;\n  right: 0;\n  width: 300px;\n  z-index: 5;\n}\n\n.c-flash__message {\n  width: 100%;\n  background-color: $color_primary;\n  color: $color_white;\n  font-size: 14px;\n  text-align: left;\n  padding: 15px;\n  transition: all 0.3s;\n  transform: translateX(100%);\n  border-radius: 15px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.05);\n\n  &.is-active {\n    transform: translateX(-15px);\n  }\n\n  &--green {\n    background-color: $color_green;\n\n    .c-flash__message-close { border-color: $color_green; }\n  }\n\n  &--orange {\n    background-color: $color_orange !important;\n\n    .c-flash__message-close { border-color: $color_orange; }\n  }\n\n  &--blue {\n    background-color: $color_blue;\n\n    .c-flash__message-close { border-color: $color_blue; }\n  }\n\n  &--yellow {\n    background-color: $color_yellow;\n\n    .c-flash__message-close { border-color: $color_yellow; }\n  }\n}\n\n.c-flash__message-close {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background-color: $color_white;\n  border-radius: 50%;\n  border: solid 2px $color_primary;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darken($color_white, 5%);\n  }\n\n  &:before, &:after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 10px;\n    background-color: darken($color_cenere, 30%);\n    position: absolute;\n    top: calc(50% - 5px);\n    left: calc(50% - 1px);\n  }\n\n  &:before {\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    transform: rotate(-45deg);\n  }\n}\n",".c-card {\n  background-color: $color_white;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);\n  transition: box-shadow 0.25s linear;\n\n  &--centerpage { // center the card on the page\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px;\n  }\n\n  &--centerpage-large { // center the card on the page with a large size\n    width: 900px;\n  }\n\n  &--unhidden { // permit overflow on card\n    overflow: visible;\n  }\n\n  &--hasnext { // add a margin for the next card\n    margin-bottom: 15px;\n  }\n\n  &--viewported { // add viewported support for viewport view\n    &.is-fixed {\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 9999;\n      width: 100%;\n      height: 100vh;\n      border-radius: 0;\n      overflow: auto;\n\n      .c-card__header {\n        border-radius: 0;\n      }\n\n      .c-card__body--scrollable {\n        max-height: calc(100vh - 50px);\n      }\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.05);\n  }\n}\n\n.c-card__header {\n  background-color: $color_white;\n  color: $color_black;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  @include clearfix;\n}\n\n.c-card__header-title {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px;\n}\n\n.c-card__header-actions {\n  list-style: none;\n  margin: 0;\n  padding: 7px 15px;\n  float: right;\n  @include clearfix;\n\n  &--full {\n    float: none;\n    width: 100%;\n  }\n}\n\n.c-card__header-action {\n  display: inline-block;\n  margin-right: 5px;\n\n  &--full {\n    display: block;\n    width: 100%;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  .c-button {\n    padding: 8px 20px;\n  }\n\n  .c-input-action {\n    margin: 2px 0;\n    font-size: 14px;\n\n    .c-input__field, .c-input-action__field {\n      padding: 7px 10px;\n    }\n    .c-input-action__button {\n      padding: 7px 0;\n    }\n  }\n}\n\n.c-card__header-action-text {\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 10px;\n}\n\n.c-card__body {\n  padding: 15px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n\n  &--list { // manage style for ul attribute\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  &--scrollable { // permit scroll of content\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n  }\n}\n\n.c-card__body-list-item {\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  color: $color_black;\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  &--padding { // Use it when link or content is not present\n    padding: 15px;\n  }\n\n  &.is-active {\n    background-color: rgba($color_primary, 0.1);\n  }\n}\n\n.c-card__body-list-item-link {\n  display: block;\n  padding: 15px;\n  color: $color_black;\n  text-decoration: none;\n\n  &:hover {\n    background-color: $color_cenere;\n    text-decoration: none;\n  }\n\n  &.is-active {\n    background-color: rgba($color_primary, 0.1);\n  }\n}\n\n.c-card__body-list-item-content {\n  display: inline-block;\n  padding-right: 90px;\n}\n\n.c-card__body-list-item-action {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n  color: $color_primary;\n}\n\n@media (max-width: $breakpoint_md) {\n  .c-card {\n    &--centerpage-large {\n      width: calc(100% - 30px);\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-card {\n    background-color: $color_white;\n    border-radius: 0;\n    overflow: hidden;\n\n    &--centerpage {\n      position: relative;\n      top: 0;\n      left: 0;\n      transform: none;\n      width: calc(100% - 30px);\n      margin: auto;\n      border-radius: 15px;\n      margin-top: $size_header_height + 15px;\n      margin-bottom: 15px;\n    }\n\n    &--centerpage-large {\n      width: calc(100% - 30px);\n    }\n  }\n\n  .c-card__header {\n    border-radius: 0;\n  }\n\n  .c-card__header-title {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n  }\n\n  .c-card__header-actions {\n    text-align: center;\n    float: none;\n    padding-top: 0;\n    margin-top: -10px;\n\n    &--full {\n      margin-top: 0;\n      padding-top: 7px;\n    }\n  }\n\n  .c-card__header-action-group {\n    display: flex;\n  }\n\n  .c-card__header-action {\n    float: none;\n    width: 100%;\n\n    .c-button {\n      display: block;\n      text-align: center;\n    }\n  }\n\n  .c-card__body {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n\n    &--scrollable {\n      max-height: none;\n      overflow-y: hidden;\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-card--mobile-fixed-section { // use it on sections that contains only a card mobile fixed\n    margin: 0 !important;\n  }\n  .c-card--mobile-fixed {\n    position: fixed;\n    top: $size_header_height;\n    left: 0;\n    width: 100%;\n    height: calc(100% - #{$size_header_height});\n    transform: translateX(100%);\n    transition: transform 0.3s;\n    overflow-y: auto;\n    z-index: 1;\n\n    &.is-open {\n      transform: translateX(0);\n    }\n\n    .c-card__header-actions {\n      margin-top: 0;\n      padding-top: 7px;\n    }\n\n    .c-card__body {\n      &--scrollable {\n        max-height: none;\n        overflow-y: hidden;\n      }\n    }\n  }\n\n  .c-card__header-title--mobile-fixed {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    background-color: $color_primary;\n    color: $color_white;\n    border-radius: 10px;\n    font-size: 12px;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.10);\n    z-index: 2;\n  }\n}","@keyframes c-button-is-loading {\n  0%   { transform: translateX(-100%); }\n  100% { transform: translateX(200%); }\n}\n\n.c-button {\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n  background-color: $color_primary;\n  color: $color_white;\n  text-decoration: none;\n  border: none;\n  transition: all 0.15s;\n  outline: 0;\n  position: relative;\n\n  &[disabled] {\n    background-color: rgba($color_black, 0.65);\n\n    &:hover {\n      background-color: rgba($color_black, 0.65);\n      box-shadow: none;\n    }\n  }\n\n  &.is-loading {\n    color: rgba($color_white, 0.5);\n    overflow: hidden;\n\n    &:before {\n      content: '';\n      display: block;\n      width: 70%;\n      height: 2px;\n      background-color: rgba($color_white, 0.8);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      animation: c-button-is-loading 1s infinite;\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_primary,.25);\n    background-color: darken($color_primary, 5%);\n  }\n\n  &:active, &:focus {\n    background-color: darken($color_primary, 10%);\n  }\n\n  &--green {\n    background-color: $color_green;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_green,.25);\n      background-color: darken($color_green, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_green, 10%);\n    }\n  }\n\n  &--blue {\n    background-color: $color_blue;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_blue,.25);\n      background-color: darken($color_blue, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_blue, 10%);\n    }\n  }\n\n  &--yellow {\n    background-color: $color_yellow;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_yellow,.25);\n      background-color: darken($color_yellow, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_yellow, 10%);\n    }\n  }\n\n  &--orange {\n    background-color: $color_orange;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_orange,.25);\n      background-color: darken($color_orange, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_orange, 10%);\n    }\n  }\n\n  &--black {\n    background-color: $color_black;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_black,.25);\n      background-color: darken($color_black, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_black, 10%);\n    }\n  }\n  \n  &--cenere {\n    background-color: $color_cenere;\n    color: $color_black;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_cenere,.25);\n      background-color: darken($color_cenere, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_cenere, 10%);\n    }\n  }\n\n  &--transparent {\n    background-color: transparent;\n    color: $color_black;\n\n    &:hover {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline;\n    }\n  \n    &:active, &:focus {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline;\n    }\n  }\n\n  &--twitter {\n    background-color: $color_twitter;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_twitter,.25);\n      background-color: darken($color_twitter, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_twitter, 10%);\n    }\n  }\n\n  &--linkedin {\n    background-color: $color_linkedin;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_linkedin,.25);\n      background-color: darken($color_linkedin, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_linkedin, 10%);\n    }\n  }\n\n  &--toggl {\n    background-color: $color_toggl;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_toggl,.25);\n      background-color: darken($color_toggl, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_toggl, 10%);\n    }\n  }\n\n  &--dropbox {\n    background-color: $color_dropbox;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_dropbox,.25);\n      background-color: darken($color_dropbox, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_dropbox, 10%);\n    }\n  }\n\n  &--block {\n    display: block;\n    text-align: center;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n\n  .c-button {\n    padding: 15px 20px;\n  }\n\n}","// Configuration\n// *********************************************************************\n\n$grid: (\n  columns: 24,\n  space: 7.5px,\n  breakpoints: (\n    xs: 581px,\n    sm: 769px,\n    md: 1025px,\n    lg: 1282px\n  )\n);\n\n// Style\n// *********************************************************************\n\n.c-grid__container, .c-grid__container-spaced {\n  margin: auto;\n  box-sizing: border-box;\n  @include clearfix;\n}\n\n.c-grid__col {\n  float: left;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n// Basic grid\n// *********************************************************************\n\n@for $i from 1 through map-get($grid, 'columns') {\n  $width: percentage(1 / (map-get($grid, 'columns') / $i));\n\n  .c-grid__col--#{$i} {\n    width: $width;\n  }\n}\n\n@each $name, $pixels in map-get($grid, 'breakpoints') {\n  @media screen and (min-width: $pixels) {\n    @for $i from 1 through map-get($grid, 'columns') {\n      $width: percentage(1 / (map-get($grid, 'columns') / $i));\n    \n      .c-grid__col--#{$name}-#{$i} {\n        width: $width;\n      }\n    }\n  }\n}\n\n// Spaced grid\n// *********************************************************************\n\n.c-grid__container-spaced {\n  margin-left: - map-get($grid, 'space');\n  margin-right:  - map-get($grid, 'space');\n\n  > .c-grid__col {\n    margin-left: map-get($grid, 'space');\n    margin-right: map-get($grid, 'space');\n  }\n\n  @for $i from 1 through map-get($grid, 'columns') {\n    $width: percentage(1 / (map-get($grid, 'columns') / $i));\n  \n    > .c-grid__col--#{$i} {\n      width: calc(#{$width} - #{map-get($grid, 'space') * 2});\n    }\n  }\n  \n  @each $name, $pixels in map-get($grid, 'breakpoints') {\n    @media screen and (min-width: $pixels) {\n      @for $i from 1 through map-get($grid, 'columns') {\n        $width: percentage(1 / (map-get($grid, 'columns') / $i));\n      \n        > .c-grid__col--#{$name}-#{$i} {\n          width: calc(#{$width} - #{map-get($grid, 'space') * 2});\n        }\n      }\n    }\n  }\n}","// Form\n// *********************************************************************\n\n.c-form {\n  padding-bottom: 15px;\n  @include clearfix;\n}\n\n.c-form__actions {\n  margin-bottom: -15px;\n  text-align: right;\n}\n\n.c-form__title {\n  font-weight: bold;\n  font-size: 18px;\n  color: $color_black;\n  border-bottom: solid 1px $color_cenere;\n  padding-bottom: 5px;\n  margin-bottom: 15px;\n}\n\n// Input normal\n// *********************************************************************\n\n.c-input {\n  margin-bottom: 15px;\n}\n\n.c-input__label {\n  font-size: 14px;\n  color: $color_black;\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 4px;\n}\n\n.c-input__label-subtitle {\n  font-size: 12px;\n  color: darken($color_cenere, 20%);\n  margin-bottom: 4px;\n  margin-left: 4px; \n  display: block;\n}\n\n.c-input__field {\n  display: block;\n  border: solid 1px darken($color_cenere, 10%);\n  border-radius: 5px;\n  background-color: $color_white;\n  color: $color_black;\n  padding: 10px;\n  outline: none;\n  width: 100%;\n  transition: all 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  &:active, &:focus {\n    border-color: lighten($color_primary, 20%);\n    box-shadow: 0 2px 5px darken($color_cenere, 10%);\n  }\n\n  &[disabled] {\n    background-color: darken($color_white, 2%);\n\n    &:active, &:focus {\n      border-color: darken($color_cenere, 10%);\n      box-shadow: none;\n    }\n  }\n\n  &[required] {\n    // TODO\n  }\n\n  &.is-error {\n    border-color: $color_orange;\n  }\n}\n\ntextarea.c-input__field {\n  min-height: 100px;\n}\n\ninput[type=\"date\"].c-input__field {\n  padding: 7px 10px;\n  padding-top: 8px;\n}\n\n// Input action\n// *********************************************************************\n\n.c-input-action {\n\n}\n\n.c-input-action__field {\n  display: inline-block;\n  border: solid 1px darken($color_cenere, 5%);\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: $color_white;\n  color: $color_black;\n  padding: 10px;\n  outline: none;\n  width: calc(100% - 60px);\n  transition: all 0.15s;\n\n  &:active, &:focus {\n    border-color: lighten($color_primary, 20%);\n    box-shadow: 0 2px 5px darken($color_cenere, 10%);\n  }\n\n  &.is-error {\n    border-color: $color_orange;\n  }\n}\n\n.c-input-action__button {\n  cursor: pointer;\n  display: inline-block;\n  border: solid 1px $color_primary;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: $color_primary;\n  color: $color_white;\n  padding: 10px 0;\n  outline: none;\n  width: 60px;\n  float: right;\n  transition: all 0.15s;\n\n  &:hover {\n    background-color: darken($color_primary, 5%);\n  }\n\n  &[disabled] {\n    background-color: $color_black;\n    border-color: $color_black;\n\n    &:hover {\n      background-color: $color_black;\n    }\n  }\n}\n\n// Input checkbox\n// *********************************************************************\n\n.c-input-checkbox {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.c-input-checkbox__label {\n  display: inline-block;\n  font-size: 14px;\n  color: $color_black;\n  padding-left: 25px;\n  cursor: pointer;\n  position: relative;\n\n  &:before{\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px; \n    border: solid 2px darken($color_cenere, 5%);\n    background-color: $color_white;\n    position: absolute; \n    left: 0;\n    top: 0;\n    border-radius: 5px;\n    transition: all 0.3s ease;\n  }\n\n  &:hover {\n    &:before{\n      background-color: darken($color_cenere, 5%);\n    }\n  }\n\n  &:after {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    background-color: $color_primary;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    border-radius: 4px;\n  }\n}\n\n.c-input-checkbox__field {\n  position: absolute;\n  top: 0; left: 0;\n  opacity: 0;\n}\n\n.c-input-checkbox .c-input-checkbox__field + .c-input-checkbox__label::after {\n  content: none;\n}\n\n.c-input-checkbox .c-input-checkbox__field:checked + .c-input-checkbox__label::after {\n  content: '';\n}\n\n.c-input-checkbox .c-input-checkbox__field[required] + .c-input-checkbox__label::before {\n  // Custom style for required checkbox\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-form__actions {\n    text-align: center;\n\n    .c-button {\n      display: block;\n      width: 100%;\n    }\n  }\n}\n\n// Input selector\n// *********************************************************************\n\n.c-input-selector {\n\n}\n\n.c-input-selector__head {\n  margin-bottom: 15px;\n}\n\n.c-input-selector__content {\n  border: solid 1px darken($color_cenere, 10%);\n  height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n// Dependency Choices\n// *********************************************************************\n\n.choices {\n  &.is-focused {\n    .choices__inner {\n      border-color: lighten($color_primary, 20%);\n      box-shadow: 0 2px 5px darken($color_cenere, 10%);\n    }\n  }\n\n  &.is-disabled {\n    .choices__inner {\n      background-color: darken($color_white, 2%);\n    }\n\n    .choices__input {\n      background-color: darken($color_white, 2%);\n      cursor: initial;\n    }\n  }\n\n  .choices__inner {\n    background-color: $color_white;\n    border-radius: 5px;\n    border-color: darken($color_cenere, 10%);\n    min-height: 40px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 7px;\n    padding-bottom: 2px;\n  }\n\n  .choices__input {\n    background-color: $color_white;\n  }\n\n  .choices__list--dropdown {\n    border-radius: 5px;\n    border-color: darken($color_cenere, 10%);\n    top: calc(100% + 2px);\n\n    &.is-active {\n      min-height: 150px;\n    }\n\n    .choices__list {\n      max-height: 150px;\n    }\n  }\n\n  .choices__list--multiple .choices__item {\n    background-color: $color_primary;\n    border-color: $color_primary;\n  }\n\n  .choices__list--multiple .choices__item.is-highlighted {\n      background-color: $color_primary;\n      border-color: $color_primary;\n  }\n}\n",".c-message {\n  padding: 30px 15px;\n}\n\n.c-message__title {\n  display: block;\n  text-align: center;\n  color: $color_black;\n  font-size: 30px;\n}\n\n.c-message__content {\n  display: block;\n  text-align: center;\n  color: $color_black;\n  font-size: 20px;\n  margin-top: 15px;\n\n  &--small {\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=matilda-b44c6ba283132515b82c.js.map