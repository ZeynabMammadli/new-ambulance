$('.banner-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.ambulance-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    nav: true,
    navText: ["<img src='img/leftox.svg'>","<img src='img/leftox.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.doctor-owl').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ["<img src='img/leftox.svg'>","<img src='img/leftox.svg'>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:1
        },
        1000:{
            items:4
            
        }
    }
})


$('.feedback-owl ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='img/leftox.svg'>","<img src='img/leftox.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
