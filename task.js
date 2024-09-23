const url = "https://students.netoservices.ru/nestjs-backend/slow-get-courses";
const items = document.getElementById("items");
const loader = document.querySelector("img");

let xhr = new XMLHttpRequest();

xhr.open("GET", url);  
xhr.responseType = "json";
xhr.send();

let getResponse = null;

xhr.onload = function() {
  getResponse = xhr.response;
  getResponse = getResponse["response"]["Valute"];
  
  loader.classList.toggle("loader_active");
  
  for (currValute in getResponse) {

    let valute = getResponse[currValute]
    items.insertAdjacentHTML("beforeend", `
    <div class="item">
      <div class="item__code">
        ${valute["CharCode"]}
      </div>
      <div class="item__value">
        ${valute["Value"]}
      </div>
      <div class="item__currency">
        руб.
      </div>
    </div>
  `);
  
  };  
};

