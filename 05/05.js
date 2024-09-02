document.addEventListener('DOMContentLoaded', () => {
  const bt1 = document.querySelector('button');
  const img = document.querySelector('#msg > img');

  bt1.addEventListener('click', ()=>{
    let n = Math.floor(Math.random()*6)+1;
    img.setAttribute('src',`../img/${n}.png`);
    //alert(n);
    img.setAttribute('alt',`${n}`);

  });

});
