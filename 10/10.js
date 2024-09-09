const disp=(divNum,divPlus,divBonus)=>{
  divNum.style.display = 'dsp';
  divPlus.style.display = 'dsp';
  divBonus.style.display = 'dsp';
};

document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const divNum = document.querySelector('#divNum');
  const divPlus = document.querySelector('.divplus');
  const divBonus = document.querySelector('#divBonus');
  const bt = document.querySelector('.sec > button');

  //요소 숨기기
  //disp(block);

  bt.addEventListener('click', (e)=>{
    e.preventDefault();

    let arr = [];
    while(arr.length<7){
      let n = Math.floor(Math.random() * 45)+1;

      if(!arr.includes(n)) arr.push(n);
      
      
    }
    
    
    let arrBonus = arr.splice(6,1);
    arr.sort((a,b)=> a-b);
    
    console.log(arr);
    console.log(arrBonus);


    arr = arr.map(item => `<span class='sp${Math.floor(item/10)}'>${item}</span>`);
    arr = arr.join('');
    divNum.innerHTML = arr;

    divBonus.innerHTML = arrBonus;
    console.log(arr);
    



  });




});