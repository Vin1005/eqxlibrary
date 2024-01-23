// GLOBAL ARRAY VARIABLE
let book = JSON.parse(localStorage.getItem("books"));


// TOP 3 BEST SELLING SORT BY SOLD 
let cardShow =()=>{

  const sortArrayObjs = function(arr, prop1){
    let sort1 = arr.sort((a,b) => {     
    return (Number (a[prop1]) > Number (b[prop1])) ? -1 : 1;             
        });
     return sort1;
    };

  let newArrays = sortArrayObjs(book, 'sold');
      
  for (var i = 0; i < 3; i++){
    document.getElementById("cardBooks").innerHTML += 
             `
              <!-- Box -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="m-2 p-2 shadow-lg rounded-3 bg-light">
                  <div class="cards"> 
                      <div><a data-bs-toggle="collapse" href="#multiCollapseBook" role="button" aria-expanded="false" aria-controls="multiCollapseBook"><img src="${newArrays[i].image}" class="card-img-top" alt="" style="height: 15rem;" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Click for more details">
                      </a>
                      </div>
                      <h6 class = "card-title text-center">${newArrays[i].title}</h6>
                      <div class="collapse multi-collapse" id="multiCollapseBook">
                      <div class="overflow-y-scroll" style="height: 250px;">
                      <div class="card card-body mb-1">
                        <table class="table caption-top">
                          <tbody>
                            <tr>
                              <th scope="row">Author</th>
                              <td>${newArrays[i].author}</td>
                            </tr>
                            <tr>
                              <th scope="row">Genre</th>
                              <td>${newArrays[i].genre}</td>
                            </tr>
                            <tr>
                              <th scope="row">Sold</th>
                              <td>${newArrays[i].sold}</td>
                            </tr>
                            <tr>
                              <th scope="row">Count</th>
                              <td>${newArrays[i].count}</td>
                            </tr>
                            <tr>
                              <th scope="row">Price</th>
                              <td class="fs-6 text-danger">Php ${newArrays[i].price}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      </div>
                    </div>
                      </div> 
                    <!-- Button trigger modal -->
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-outline-primary" onclick="">
                      Add to cart
                    </button>
                  </div>              
              </div>
        </div><!--End Box -->`
      }



// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// let div3 = document.createElement('div');
// let div4 = document.createElement('div');
// let a1 = document.createElement('a');
// let img1 = document.createElement('img');
// let h6 = document.createElement('h6');
// div1.classList.add('col-12', 'col-md-6', 'col-lg-4');
// div2.classList.add('cards');
// img1.classList.add('card-img-top');
// div4.classList.add('m-2', 'p-2', 'shadow-lg', 'rounded-3', 'bg-light');
// h6.classList.add('card-title', 'text-center');
// img1.setAttribute('src','book_image/hxh.png', 'style','height: 15rem;');
// img1.setAttribute('style','height: 15rem;');
// img1.setAttribute('data-bs-toggle','tooltip'); 
// img1.setAttribute('data-bs-placement','right');
// img1.setAttribute('data-bs-title','Click for more details');
// h6.innerText='Hunter X Hunter';
// allBook.append(div1);
// div1.append(div4);
// div4.append(div2);
// div2.append(div3);
// div3.append(a1);
// a1.append(img1);
// div2.appendChild(h6);
// console.log(div1);



}
cardShow();

//  ALL BOOKS SORT TITLE ALPHABETICALLY
let showBooks = () => {
  

    // ALL BOOKS USING MAPPING
    let books = document.getElementById("allBook");
        return (books.innerHTML = book.map((i)=>{
          let {id,title,author,genre,count,sold,price,rent,image} = i;
          return `
          <!-- Box -->
                        <div id="" class="d-flex row justify-content-center rounded-3 m-1 mt-3 p-1 bg-light">
                          <div class="col-1 col-md-1 col-lg-1 text-start">
                              <img src="${image}" class="mx-auto" alt="" style="width: 80px; height: 80px;">
                          </div>
                          <div class="col-10 text-center">
                          <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">TITLE</th>
                              <th scope="col">AUTHOR</th>
                              <th scope="col">COUNT</th>
                              <th scope="col">RENT</th>
                              <th scope="col">SOLD</th>
                              <th scope="col">PRICE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">${title}</th>
                              <td>${author}</td>
                              <td>${count}</td>
                              <td>${rent}</td>
                              <td>${sold}</td>
                              <th class="text-danger">Php ${price}</th>
                            </tr>
                          </tbody>
                        </table>
                          </div>
                          <div class="col-1 d-flex justify-content-center align-content-center">
                          <button class ="bg-transparent border-0 text-color1" type="button" onclick ="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                          </svg>
                          </button>
                          </div>                    
                        </div><!-- End of box -->

          `
      })
        .join(""));
}
showBooks();

 // FOR SEARCH BAR

 

