
/**
 * 切换照片按钮
 *
 * @param {number} index 当前照片的索引
 */

function changePicBtn(index) {

  const PIC_BTNS = document.getElementsByClassName('center-pic-changes')[0]
                           .getElementsByTagName('a');
  for (let i = 0, len = PIC_BTNS.length; i < len; i++) {
    if (i === index) {
      PIC_BTNS[i].classList.add('center-pic-on');
    }
    else {
      PIC_BTNS[i].classList.remove('center-pic-on');
    }
  }
  //当索引指向最后一张照片时
  if (index === 3) {
    PIC_BTNS[0].classList.add('center-pic-on');
  }
}

/**
 * 切换照片
 *
 * @return {Function} 返回了一个闭包用于setInterval的回调
 */

 function changePic() {
 	const PIC_COTANIER = document.getElementsByClassName('center-pic-container')[0];
	//向左的偏移量
 	let offsetLeft = document.querySelector('.center-pic img').clientWidth;
	//照片的索引初始为0
 	let index = 0;
 	return function () {
 		PIC_COTANIER.style.transform = `translateX(${++index * offsetLeft * -1}px)`;
		PIC_COTANIER.style.transition = 'all 0.5s ease';
    //改变照片的按钮
    changePicBtn(index);
		//当索引为最后一张照片时
		if (index === 3) {
			//等到最后一次过渡执行完成后
			setTimeout(() => {
				//索引重新指向第一张照片
				index = 0;
				//取消过渡动画
				PIC_COTANIER.style.transition = 'all 0.0s ease';
				//偏移量重新回到0
				PIC_COTANIER.style.transform = `translateX(0px)`;
			},
			500
		);
		}
 	};
 }

/**
 * 点击tab时触发
 *
 * @event [class="execl-tab-"]
 * @param {Object} e 事件对象
 */

function changeTab(e) {
  //指向当前tab的索引
  let index = 1;
  //所有表的数组
  const TABLES = document.getElementsByClassName('execl-table');
  for (let i = 0, len = TABS.length; i < len; i++) {
    //更新当前index
    index = e.currentTarget === TABS[i] ? i : index;
    TABS[i].classList.remove('execl-tab-on');
    TABLES[i].classList.remove('execl-table-on');
  }
  //当前tab和table添加选中样式
  e.currentTarget.classList.add('execl-tab-on');
  TABLES[index].classList.add('execl-table-on');
}

/**
 * 主函数
 */

setInterval(changePic(), 2000);

const TABS = document.getElementsByClassName('execl-tab');
for (const TAB of TABS) {
  TAB.addEventListener('click', changeTab, false);
}
