!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/info/matt/",""===window.location.port,o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Not all that glitters is gold")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var a=Polymer.dom(e).querySelector("#mainToolbar .app-name"),r=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),t=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),n=o.detail,l=n.height-n.condensedHeight,i=Math.min(1,n.y/l),s=.5,c=l-n.y,m=l/(1-s),d=Math.max(s,c/m+s),y=1-i;Polymer.Base.transform("translate3d(0,"+100*i+"%,0)",r),Polymer.Base.transform("scale("+y+") translateZ(0)",t),Polymer.Base.transform("scale("+d+") translateZ(0)",a)}),o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()}}(document);