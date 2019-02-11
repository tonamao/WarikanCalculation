(function() {
	'use strict';
	var price = document.getElementById('price');
	var num = document.getElementById('num');
	var unit = document.getElementById('unit');
	var btn = document.getElementById('btn');
	var result = document.getElementById('result');
	var reset = document.getElementById('reset');
	var flg = 0;

	function checkValue(value) {
		var re = new RegExp(/^[0-9]+$/);
		return re.test(value);
	}

	btn.addEventListener('click', function(){
		//input values
		var prc = price.value;
		var n = num.value;
		var unt = unit.options[unit.selectedIndex].id;
		//flg for check values
		var isNum = 0;
		var prcIsNum;
		var nIsNum;

		//check values
		prcIsNum = checkValue(prc);
		if(prcIsNum){
			nIsNum = checkValue(n);
			if(nIsNum){
				isNum = 1;
			} else {
				alert("入力された【" + num.placeholder + "】が半角数字でないため計算できませ～ん┐(´ｰ｀)┌ ");
			}
		} else {
			alert("入力された【" + price.placeholder + "】が半角数字でないため計算できませ～ん┐(´ｰ｀)┌ ");
		}

		//calculate value
		if(isNum){
			var ans = Math.ceil( (prc / n) / unt ) * unt;
			var otsuri = ( ans * n - prc );


			var rsltMsg = prc + '円を' + n + '人で割り勘すると、1人【' + ans + '円】です(^^)<br />';
			if(otsuri > 0){
				rsltMsg += '【' + otsuri + '円】のおつりを仲良く' + n + '人で分けてね(^^)';
			}
			result.innerHTML = rsltMsg;
		}
	});
})();