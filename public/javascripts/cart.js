/**
 * 输入框失去焦点且数量改变时触发
 * @event .cart-item-num
 * @param {Object} event 事件对象
 */
function changeNum(event) {
	let num = event.currentTarget.value;
	let val = event.currentTarget
								 .previousElementSibling
								 .innerText;
	if (/^[1-9]\d*$/.test(num)) {
		val = parseInt(val.split(' ')[1], 10);
		let totalVal = parseInt(num, 10) * val;
		event.currentTarget
		     .nextElementSibling
				 .innerText = 'RMB ' + totalVal;

		let allTotalVal = 0;
		const CART_ITEM_TOTAL = document.getElementsByClassName('cart-item-total');
		for (let i = 0; i < CART_ITEM_TOTAL.length; i++) {
			allTotalVal += parseInt(CART_ITEM_TOTAL[i].innerText.split(' ')[1], 10);
		}
		document.getElementsByClassName('cart-total')[0]
		        .innerText = '总计 RMB ' + allTotalVal;

	}else {
		event.currentTarget.value = 1;
		event.currentTarget
		     .nextElementSibling
				 .innerText = val;

		let allTotalVal = 0;
		const CART_ITEM_TOTAL = document.getElementsByClassName('cart-item-total');
		for (let i = 0; i < CART_ITEM_TOTAL.length; i++) {
		 	allTotalVal += parseInt(CART_ITEM_TOTAL[i].innerText.split(' ')[1], 10);
		 }
		 document.getElementsByClassName('cart-total')[0]
		 		     .innerText = '总计 RMB ' + allTotalVal;
	}
}

/**
 * 主函数
 */
const INPUTS = document.getElementsByTagName('input');
for (const INPUT of INPUTS) {
	INPUT.addEventListener('blur', changeNum, false);
}
