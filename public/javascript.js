
(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 1033924, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');



var element = document.createElement('script'); element.src = 'https://api-ads.farakav.com/api/ad/adserverad?zid=7&eid=anten-exclusive'; document.getElementById('anten-exclusive').appendChild(element);



    
        window.socketEndPoints = ["wss://yws.farakav.com"];
    

    
        window.ApiBaseUrl = "https://api.varzesh3.com/v4";
    

    
    
    var pageAdCode = 0;
    



	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = 1;
	script.src = "https://s1.mediaad.org/serve/varzesh3.com/loader.js";
	head.appendChild(script);


		now = new Date();
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		var script_address = 'https://cdn.yektanet.com/js/varzesh3.com/article.v1.min.js';
		script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
		head.appendChild(script);
	
		$(document).ready(function(){
			$('.farakav-ad-container').on('mousedown', function (event) {
			var key = $(this).data('ads-key');
			$.ajax('https://adsc.farakav.com/ads/' + key);
			return true;
			})
		})
	
		now = new Date();
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		var script_address = 'https://cdn.yektanet.com/template/bnrs/yn_bnr.min.js';
		script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
		head.appendChild(script);
	
		now = new Date();
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		var script_address = 'https://admin.wl.farakav.com/static/scripts/farakav_min.bnr.min.js';
		script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
		head.appendChild(script);
	

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-97890887-9', {'sample_rate': 10});
