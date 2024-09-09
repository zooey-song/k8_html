document.addEventListener('DOMContentLoaded', () => {
  const txt1 = document.querySelector('#txt1');
  const secBt = document.querySelectorAll('.secBt');
  const secBt2 = document.querySelectorAll('.secBt2');
  const secBt3 = document.querySelectorAll('.secBt3');
  const secBt41 = document.querySelector('.secBt41');
  const secBt42 = document.querySelector('.secBt42');

  let obj = {
    apple: '🍕',
    carrot: '🥩',
    banana: '🥟'
  };

  let jsonDT;
    secBt41.addEventListener('click', (e) => {
      e.preventDefault();

      jsonDt = JSON.stringify(obj);

      console.log('obj =' ,obj);
      console.log('obj = ',obj['apple']);
      console.log('jsonDT = ', jsonDt);
      console.log('jsonDt =',jsonDt['apple'] );

    });

    secBt42.addEventListener('click', (e) => {
      e.preventDefault();

      obj2 = JSON.parse(jsonDt);
      console.log('obj2 = ',obj2);
      console.log('obj2 = ',obj2['apple']);

    });





  for (let bt of secBt) {
    bt.addEventListener('click', (e) => {
      e.preventDefault();
      let addItem = bt.innerHTML.replace('추가', '');
      txt1.value = txt1.value + addItem;
      console.log(bt.innerHTML);
    });

  }

  for (let bt of secBt2) {
    bt.addEventListener('click', (e) => {
      e.preventDefault();

      let delItem = bt.innerHTML.replace('삭제', '');//이모지 형태로 분리
      let tmArr = Array.from(txt1.value);

      tmArr = tmArr.filter(item => item != delItem);
      tmArr = tmArr.join('');
      txt1.value = tmArr;


      //txt1.value = txt1.value.replaceAll(delItem,'');

      console.log(bt.innerHTML);
    });
  }

  for (let bt of secBt3) {
    bt.addEventListener('click', (e) => {
      e.preventDefault();

      let items = bt.innerHTML.split(',');
      console.log('item =>', items);
      //txt1.value = txt1.value.replaceAll(items[0], items[1]);
      let tmArr = Array.from(txt1.value);
      tmArr = tmArr.map(item => item == items[0] ? items[1] : item);

      txt1.value = tmArr.join('');

    });
  }



});