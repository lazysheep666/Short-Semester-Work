/**
 * 输入框失去焦点且数据改变时触发
 * 检查用户名格式是否正确 字母开头之后的必须为数字 总长4-9位
 * @event .log-item input
 * @param {Object} e 事件对象
 */
function checkUsnValid(event) {
	let val = event.currentTarget.value;
	if (!/^[a-zA-Z]\d{3,8}$/.test(val)) {
		flag1 = false;
		event.currentTarget
		     .nextElementSibling
				 .style
				 .display  = 'block';
	}
	else {
		flag1 = true;
		event.currentTarget
				 .nextElementSibling
				 .style
				 .display  = 'none';
	}
 if (flag1 && flag2 && flag3) {
	 SUBBTN.classList.remove('sub-btn-unable');
 } else {
 	SUBBTN.classList.add('sub-btn-unable');
 }
}

/**
 * 输入框失去焦点且数据改变时触发
 * 检查密码格式是否正确 只能为数字总长4-9位
 * @event .log-item input
 * @param {Object} e 事件对象
 */
function checkPswdValid(event) {
  let val = event.currentTarget.value;
 	if (!/^\d{4,9}$/.test(val)) {
		flag2 = false;
 		event.currentTarget
 		     .nextElementSibling
 				 .style
 				 .display  = 'block';
 	}
 	else {
		flag2 = true
 		event.currentTarget
 				 .nextElementSibling
 				 .style
 				 .display  = 'none';
 	}
	if (val === document.getElementsByTagName('input')[2].value || !document.getElementsByTagName('input')[2].value) {
		flag3 = true;
		document.getElementsByTagName('input')[2].nextElementSibling.style.display = 'none';
	}
	else {
		flag3 = false;
		document.getElementsByTagName('input')[2].nextElementSibling.style.display = 'block';
	}
	if (flag1 && flag2 && flag3) {
		SUBBTN.classList.remove('sub-btn-unable');
	}
	else {
		SUBBTN.classList.add('sub-btn-unable');
	}
 }

 /**
  * 输入框失去焦点且数据改变时触发
  * 检查第二次密码是否跟第一次相同
  * @event .log-item input
  * @param {Object} e 事件对象
  */
function recheckPswd(event) {
  let val = event.currentTarget.value;
  if (val != document.getElementsByTagName('input')[1].value) {
		flag3 = false;
  	event.currentTarget
  		   .nextElementSibling
  			 .style
  			 .display  = 'block';
  	}
  	else {
			flag3 = true;
  		event.currentTarget
  				 .nextElementSibling
  				 .style
  				 .display  = 'none';
  	}
		if (flag1 && flag2 && flag3) {
			SUBBTN.classList.remove('sub-btn-unable');
		}
		else {
			SUBBTN.classList.add('sub-btn-unable');
		}
  }

/**
 * 检查表单是否符合规范
 * 阻止表单提交
 * @event form
 * @param {Object} e 事件对象
 */
function checkFormValid(event) {
	if (!(INPUTS[0].value && INPUTS[1].value && INPUTS[2].value && flag1 && flag2 && flag3)) {
		event.preventDefault();
	}
}

/**
 * 主函数
 */

let flag1 = true;
let flag2 = true;
let flag3 = true;
const SUBBTN = document.getElementsByTagName('button')[0];
const INPUTS = document.getElementsByTagName('input');
INPUTS[0].addEventListener('blur', checkUsnValid, false);
INPUTS[1].addEventListener('blur', checkPswdValid, false);
INPUTS[2].addEventListener('blur', recheckPswd, false);

const FORM = document.getElementsByTagName('form')[0];
FORM.addEventListener('submit', checkFormValid, false);
