!function(e){jQuery.scrollSpeed=function(i,o,t){var l,r,u,h=e(document),a=e(window),c=e("html, body"),d=t||"default",f=0,s=!1;if(window.navigator.msPointerEnabled)return!1;a.on("mousewheel DOMMouseScroll",function(t){var e=t.originalEvent.wheelDeltaY,n=t.originalEvent.detail;return l=h.height()>a.height(),r=h.width()>a.width(),s=!0,l&&(u=a.height(),(e<0||0<n)&&(f=f+u>=h.height()?f:f+=i),(0<e||n<0)&&(f=f<=0?0:f-=i),c.stop().animate({scrollTop:f},o,d,function(){s=!1})),r&&(u=a.width(),(e<0||0<n)&&(f=f+u>=h.width()?f:f+=i),(0<e||n<0)&&(f=f<=0?0:f-=i),c.stop().animate({scrollLeft:f},o,d,function(){s=!1})),!1}).on("scroll",function(){l&&!s&&(f=a.scrollTop()),r&&!s&&(f=a.scrollLeft())}).on("resize",function(){l&&!s&&(u=a.height()),r&&!s&&(u=a.width())})},jQuery.easing.default=function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n}}(jQuery);