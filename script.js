const APIKEY="d7f8cb1d6f2546199bf41ac464c05b97"

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`
// get


getData()

async function getData(){

  let resp=await fetch(url)
  let data=await resp.json()
  DisplayNews(data)
}



function DisplayNews(news){

    htmlData=``

    for (let n of news.articles){

        htmlData+=`
        <div class="col-6">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
      </div>
    </div>`

    }

    document.querySelector("#root").innerHTML=htmlData
}



const categories=["business","entertainment","general","health","science","sports","technology"]

DisplayCategory(categories)
function DisplayCategory(categories){

    htmlData=``

    for (let c of categories){

        htmlData+=`
        <button value="${c}" class="btn btn-primary mb-3" onclick="fetchnewsbyCategory(event)">${c}</button> `

    }
        document.querySelector("#category").innerHTML=htmlData
}

function fetchnewsbyCategory(event){

  let categoryname=event.target.value
  fetch(`${url}&category=${categoryname}`).then(res=>res.json()).then(data=>DisplayNews(data))
}
