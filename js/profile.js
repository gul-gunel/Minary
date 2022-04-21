/* PROFILE */

let nftsp = document.getElementById('nftsp');
let imgp = ["nfts-2.png","nfts-2.png","nfts-2.png","nfts-2.png","nfts-1.png","nfts-1.png","nfts-1.png","nfts-1.png","nfts-1.png"]
let titlep = ["Bored Pirate Monkey","title-1","title-2","title-3","title-4","title-5","title-6","title-7","title-8"];
let pricep = [20,30,40,50,60,70,80,90,10];
let pricep2 = ["150.000,00","150.000,00","150.000,00","190.000,00","150.000,00","150.000,00","140.000,00","150.000,00","150.000,00"];
let adminp = ["Admin1","Admin2","Admin3","Admin4","Admin5","Admin6","Admin7","Admin8","Admin9"];
let adminImgp= ["admin.jpg","admin.jpg","admin.jpg","admin.jpg","admin.jpg","admin.jpg","admin.jpg","admin.jpg","admin.jpg"];


for (let j=0; j<titlep.length; j++){
  nftsp.innerHTML += `
  <div class="">
  <div class="card anim-${j}">
    <a href="#"><img src="img/p/${imgp[j]}" class="card-img-top img-fluid" alt="..."></a>
    <i id="dheart" class="far fa-heart fa-2x" onclick="toggleClass(this)"></i>
    <div class="card-body">						
      <div class="row mb-1" style="line-height: 3;">
        <h6 class="card-title col-lg-7 col-md-6 col-sm-6"><a href="#"> ${titlep[j]} </a>
        </h6>
        <div class="col-lg-5 col-md-6 col-sm-6 text-end">
          <a href="#" class="icon-border px-2 py-1">
            <img class="nfts_icon1" src="img/p/icon_bsc.png" alt=""> Bsc
          </a>
        </div>
      </div>						
      <div class="row g-0">
        <div class="col-5 mb-0 pb-0">
          <p class="mb-1 ms-4 ps-2 fst-italic font-size">Price</p>
          <p class="mb-1 font-size">
            <img class="img-fluid" src="img/p/icon-bnb.png" alt="">
            ${pricep[j]} BNB
          </p>
          <p class="mb-1 ms-4 ps-1 text-muted">
            ~ $${pricep2[j]}
          </p>
        </div>
        <div class="col-1 line-box">
          <div class="line"></div>
        </div>
        <div class="col-6">
          <p class="fst-italic font-size mb-1">Created by</p>
          <div class="row g-0">
            <div class="col-6">
              <a href="#"><img class="img-fluid img_admin" src="img/p/${adminImgp[j]}"
                  alt=""></a>
            </div>
            <div class="col-6 d-flex align-items-center ps-0 font-size">
              <a href="#">${adminp[j]}</a>
            </div>
          </div>
        </div>
      </div>									
    </div>
  </div>				
</div>
  `
}


ScrollReveal().reveal('.anim-1', {delay:200});
ScrollReveal().reveal('.anim-2', {delay:400});
ScrollReveal().reveal('.anim-3', {delay:600});
ScrollReveal().reveal('.anim-4', {delay:800});
ScrollReveal().reveal('.anim-5', {delay:1000});
ScrollReveal().reveal('.anim-6', {delay:1200});
ScrollReveal().reveal('.anim-7', {delay:1400});
ScrollReveal().reveal('.anim-8', {delay:1600});
ScrollReveal().reveal('.anim-9', {delay:1800});