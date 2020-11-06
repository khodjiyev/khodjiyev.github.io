/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-instagram-1': '&#xe900;',
		'icon-facebook-1': '&#xe901;',
		'icon-briefcase-1': '&#xe902;',
		'icon-promotion-1': '&#xe903;',
		'icon-customer-1': '&#xe904;',
		'icon-handshake-1': '&#xe905;',
		'icon-search-1': '&#xe906;',
		'icon-star-1': '&#xe907;',
		'icon-high-five-1': '&#xe908;',
		'icon-earnings-1': '&#xe909;',
		'icon-social-care-1': '&#xe90a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
