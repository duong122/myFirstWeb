var  hienThiRauCu = document.getElementsByClassName('ti-widget-alt')[0];
var hienThiHaiSan = document.getElementsByClassName('ti-widget-alt')[1];
var navRauCu = document.getElementsByClassName('sub_nav_rau_cu')[0];
var navHaiSan = document.getElementsByClassName('sub_nav_hai_san')[0];
var rauCu = document.getElementById('rau_cu');

hienThiRauCu.addEventListener('click', function(){
    if(navRauCu.style.display == 'none')
        navRauCu.style.display = 'block';
    else
        navRauCu.style.display = 'none';
});
hienThiHaiSan.addEventListener('click', function(){
    if(navHaiSan.style.display == 'none')
        navHaiSan.style.display = 'block';
    else
        navHaiSan.style.display = 'none';
});

