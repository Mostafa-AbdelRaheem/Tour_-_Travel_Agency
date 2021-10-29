const icon = document.querySelector(".icon");
const search  = document.querySelector(".search-box");
const bar = document.querySelector("#bar");
const nav = document.querySelector(".navbar");
const cross = document.querySelector("#cross");
const vidBtn = document.querySelectorAll('.vid-btn');



icon.onclick = function() {

    search.classList.toggle('active');

}

bar.onclick = function(){
    bar.classList.toggle('fa-times');
    nav.classList.toggle('active');

}

vidBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.control .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})