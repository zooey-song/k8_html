const getData = (ul) => {
  let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240908'

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    console.log(data.boxOfficeResult.dailyBoxOfficeList);
    let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    let tm = dailyBoxOfficeList.map(item=>`<li>${item.movieNm}</li>`)
    ul.innerHTML = tm.join('') ;
  })
  
  .catch(err => console.error(err));

  
}

 document.addEventListener('DOMContentLoaded', () => {
const ul = document.querySelector('sec > ul');
ul.innerHTML = tm;
  getData();

})

