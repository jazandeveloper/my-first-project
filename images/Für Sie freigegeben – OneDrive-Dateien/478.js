(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[478],{2873:function(e,t,n){"use strict";t.e='<div data-bind="element:rootElement,keyboard:keyboardOptions,react:reactBindingParams"></div>'},2874:function(e,t,n){"use strict";var a=n(0),i=n(196),r=n(530),o=n(811),s=n(1109),c=n(1108),d=n(592),l=n(633),u=n(232),f=n(8),p=n(10),m=Object(u.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,n.e(335).then(n.bind(null,3372))];case 1:return[2,e.sent().ReactCommandBar]}})})}),_=function(e){function t(t,n){var a=e.call(this,t,n)||this;a._responsiveUI=n.responsiveUI,a.addBindingHandlers({react:d.t,element:s.e,keyboard:c.e,interactionScope:o.t});var i=a.observables.create(!0);a._reactCommandManager=a.scope.attach(new n.reactCommandManagerType({commandSet:t.commandSet,isActive:i})),a.rootElement=a.createObservable(),a.shouldBlockEscKey=a.createObservable(!1),a.keyboardOptions={target:Object(p.isFeatureEnabled)(p.shouldTargetWindow)?window:document,isActive:i,mappings:{},allowButtonEvents:!0,eventFilter:a._getEventFilter()},a._initializeKeyboardMappings();var r=a._getCommandBarProps();return a.reactBindingParams={componentType:m,props:r},a}return Object(a.__extends)(t,e),t.prototype._getCommandBarProps=function(){var e=this;return this.observables.pureCompute(function(){var t,n=e._reactCommandManager.commandBarItems(),i=n.items,r=n.farItems,o=i,s=n.overflowItems;if(o.length){var c=o[0];"Small"===e._responsiveUI.formFactorSize()?(s=Object(a.__spreadArray)(Object(a.__spreadArray)([],o.slice(1),!0),s,!0),o=[c]):o=Object(a.__spreadArray)([c],o.slice(1),!0)}if(s=s.map(function(e){return Object(a.__assign)(Object(a.__assign)({},e),{renderedInOverflow:!0})}),f.t.isActivated("264FA7B2-B9C5-11EB-8529-0242AC130003","5/20/2021","Suppress command callouts from inactive modals")||e.observables.unwrap(e.keyboardOptions.isActive))for(var d=0,l=s;d<l.length;d++){var u=l[d].data,p=u.payload;if(p&&p.control()&&u.isOpen()&&(!u.action||!u.action.isToggled())){t=u;break}}return{mainCommands:o,farCommands:r,overFlowCommands:s,payloadCommand:t,isActive:e.observables.unwrap(e.keyboardOptions.isActive),shouldBlockEscKey:e.shouldBlockEscKey}}).extend({deferred:!0})},t.prototype._initializeKeyboardMappings=function(){var e=this,t=this._reactCommandManager.allCommands,n=function(t){var n={};h(n,t),e.keyboardOptions.mappings=n};n(t.peek()),this.observables.subscribe(t,n)},t.prototype._getEventFilter=function(){var e=this;return function(t,n,a){var i;if("Left"===t||"Right"===t){var r=e.rootElement.peek();if(a&&r.contains(a.target))return!1}if(!Object(p.isFeatureEnabled)(p.shouldTargetWindow)&&!f.t.isActivated("b1e3b1a3-c4e6-4d4f-a40d-d456de338f8d","07/05/2021","fixing the escape key problem when commandbar is overflown")&&"Esc"===t&&e.shouldBlockEscKey.peek())return e.shouldBlockEscKey(!1),!1;for(var o=0,s=Array.from(document.querySelectorAll("[data-handle-special-keys]"));o<s.length;o++){var c=s[o];if(-1!==((null===(i=c.getAttribute("data-handle-special-keys"))||void 0===i?void 0:i.split(" "))||[]).indexOf(t)&&a&&c.contains(a.target))return!1}return!0}},t.dependencies=Object(a.__assign)(Object(a.__assign)({},i.t.dependencies),{responsiveUI:r.t,reactCommandManagerType:l.t}),t}(i.t);function h(e,t){for(var n=function(t){if(t.keys)for(var n=function(e,n){t.onClick(t,n),n.preventDefault()},a=0,i=t.keys;a<i.length;a++){var r=i[a];e[r]||(e[r]=[]),e[r].push(n)}var o=t.children.peek();o.length&&h(e,o)},a=0,i=t;a<i.length;a++)n(i[a])}t.e=_},4712:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return h});var a=n(2873),i=n(0),r=n(196),o=n(1109),s=n(592),c=n(633),d=n(530),l=n(232),u=n(2874),f=n(8),p=Object(l.e)(function(){return Object(i.__awaiter)(void 0,void 0,void 0,function(){return Object(i.__generator)(this,function(e){switch(e.label){case 0:return[4,n.e(335).then(n.bind(null,3372))];case 1:return[2,e.sent().ReactCommandBar]}})})}),m=function(e){function t(t,n){var a=e.call(this,t,n)||this;a._oneUpResponsiveUI=n.responsiveUI,a.addBindingHandlers({react:s.t,element:o.e}),a._oneUpCommandManager=a.scope.attach(new n.reactCommandManagerType({commandSet:t.commandSet})),a.rootElement=a.createObservable();var i=a._getOneUpCommandBarProps();return a.reactBindingParams={componentType:p,props:i},a}return Object(i.__extends)(t,e),t.prototype._getOneUpCommandBarProps=function(){var e=this;return this.observables.pureCompute(function(){var t=e._oneUpCommandManager.commandBarItems(),n=t.items,a=t.middleItems,r=t.farItems,o=t.overflowItems,s=Object(i.__spreadArray)([],n,!0),c=o,d=a,l=r,u=[],p=e._oneUpResponsiveUI.windowWidth();p>=900&&p<1095?u=s.splice(-1):p>=710&&p<900?(u=s.splice(-2),d=e._shortenTitleInMediumScreen(d)):p>=480&&p<710?(u=s.splice(-3),d=[]):p<480&&(u=s.splice(-4),d=[]),u.length>0&&(c=Object(i.__spreadArray)(Object(i.__spreadArray)([],u,!0),c,!0),l=e._removePageCountInScreenLessThanXLarge(r));var m,_=c.map(function(e){return Object(i.__assign)(Object(i.__assign)({},e),{renderedInOverflow:!0})});if(f.t.isActivated("264FA7B2-B9C5-11EB-8529-0242AC130003","5/20/2021","Suppress command callouts from inactive modals")||e.observables.unwrap(e.keyboardOptions.isActive))for(var h=0,b=c;h<b.length;h++){var g=b[h].data,v=g.payload;if(v&&v.control()&&g.isOpen()&&(!g.action||!g.action.isToggled())){m=g;break}}return{mainCommands:s,middleCommands:d,farCommands:l,overFlowCommands:_,payloadCommand:m,shouldBlockEscKey:e.shouldBlockEscKey}}).extend({deferred:!0})},t.prototype._removePageCountInScreenLessThanXLarge=function(e){return e.filter(function(e){return"oneUpPageCount"!==e["data-automationid"]})},t.prototype._shortenTitleInMediumScreen=function(e){var t,n=Object(i.__assign)({},e[0]);return n.name=null===(t=n.name)||void 0===t?void 0:t.replace(/(.{16}).+(\..+)/,"$1...$2"),[n]},t.dependencies=Object(i.__assign)(Object(i.__assign)({},r.t.dependencies),{responsiveUI:d.t,reactCommandManagerType:c.t}),t}(u.e),_=n(179),h=Object(_.t)({name:"OneUpCommandBar",template:a.e,automationName:"ms-oneup-command-bar-wrapper",viewModelType:m});t.default=h}}]);