const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var data = [
    {
        img:"./img/project-1.webp",
        line:"Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    },
    {
        img:"./img/project-2.webp",
        line:"Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    },
    {
        img:"./img/project-3.webp",
        line:"We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    },
]

var folt = document.querySelector("#flot-img")
document.querySelector("#elem-continer").addEventListener("mouseenter",function(){
    folt.style.display = "block";
})
document.querySelector("#elem-continer").addEventListener("mouseleave",function(){
    folt.style.display = "none";
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-img")
        folt.style.backgroundImage= `url(${img})`;
    })
})


var h1s = document.querySelectorAll(".btns h1");
var output = document.querySelector("#output");
var pro = document.querySelector("#heading-img");
h1s.forEach(function(h1,indx){
    h1.addEventListener("click",function(){
        changeColor(this);
        output.textContent = `${data[indx].line}`;
        pro.style.backgroundImage = `url(${data[indx].img})`;
    });
})

function changeColor(btn){
    var btns = document.querySelectorAll("h1");
    btns.forEach(function(b){
        b.classList.remove("clic");
    })
    btn.classList.add("clic");
}


function swiperAnimaction(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
      });
}
swiperAnimaction();
var mouse = document.querySelector("#mouse")
var swiper = document.querySelector(".swiper-wrapper")
swiper.addEventListener("mousemove",function(dets){
    mouse.style.top = `${dets.clientY}px`
    mouse.style.left = `${dets.clientX}px`
    mouse.style.display = "block";
    mouse.style.opacity = "1";

})
swiper.addEventListener("mouseleave",function(){
    mouse.style.display = "none";
    mouse.style.opacity = "0";
})

var menu = document.querySelector("#menu")
var src = document.querySelector("#full-Scr")
var navImg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        src.style.top = "0";
        navImg.style.opacity = "0";
        flag = 1
    }else{
        src.style.top = "-100%";
        navImg.style.opacity = "1";
        flag=0;
    }

})

var elms = document.querySelectorAll(".elem");
var elmImg = document.querySelectorAll(".elem img");

elms.forEach(function (e, ind) {
    var img = e.getAttribute("data-img");

    var currentImg = elmImg[ind];
    currentImg.setAttribute("src", img);
    console.log(img);
});


var loder = document.querySelector("#loder");
document.addEventListener("onload",
    setTimeout(function(){
        loder.style.top = "-100vh"
        },4200)
)
