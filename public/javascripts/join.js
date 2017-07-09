
/**
 * 点击时触发
 * 显示下拉选项
 * @event .select-item
 * @param {Object} e 事件对象
 */

function showChoices(e) {
  const CHOICES = e.currentTarget
                   .nextSibling
                   .nextSibling;
  CHOICES.classList.toggle('select-on');
}

/**
 * 失去焦点时触发
 * 隐藏下拉选项
 * @event .select-item
 * @param {Object} e 事件对象
 */

function hideChoices(e) {
    const CHOICES = e.currentTarget
                     .nextSibling
                     .nextSibling;
    CHOICES.classList.remove('select-on');
}

/**
 * 鼠标按下时触发
 * 选中选项
 * @event .select-country | .select-city
 * @param {Object} e 事件对象
 */

function makeChoice(e) {
  let val = e.currentTarget
             .innerText;
  const SELECT_ITEM = e.currentTarget
                       .parentNode
                       .previousSibling
                       .previousSibling;
  SELECT_ITEM.value = val;
}

/**
 * 鼠标按下时触发
 * 给城市的下拉表添加城市的选项
 * @event .country-choice
 * @param {Object} e 事件对象
 */

function addChoices(e) {
  let area = {
    '无': ['无'],
    '中国': ['北京', '上海', '广州'],
    '美国': ['洛杉矶', '纽约', '旧金山'],
    '英国': ['伦敦', '利物浦', '曼切斯特']
  };
  let country = e.currentTarget.innerText;
  let city = area[country];
  const CITY_CHOICES = document.getElementsByClassName('city-choices')[0];
  //初始选项
  CITY_CHOICES.innerHTML = '';
  let stringHTML = '';
  for (let i = 0, len = city.length; i < len; i++) {
    stringHTML += `<div class="city-choice">${city[i]}</div>`;
  }
  //添加选项
  CITY_CHOICES.innerHTML = stringHTML;
  //给下拉框设置初始值
  document.getElementById('select-city').value = city[0]
  const CITIES = document.getElementsByClassName('city-choice');
  for (const CITY of CITIES) {
    CITY.addEventListener('mousedown', makeChoice, false);
  }
}

/**
 * 主函数
 */
 
//所有的下拉表
const SELECT_ITEMS = document.getElementsByClassName('select-item');
//国家的所有选项
const COUNTRYS = document.getElementsByClassName('country-choice');
for (const SELECT_ITEM of SELECT_ITEMS) {
  SELECT_ITEM.addEventListener('click', showChoices, false);
  SELECT_ITEM.addEventListener('blur', hideChoices, false);
}
for (const COUNTRY of COUNTRYS) {
  COUNTRY.addEventListener('mousedown', makeChoice, false);
  COUNTRY.addEventListener('mousedown', addChoices, false);
}
