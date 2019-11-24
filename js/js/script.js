var currentUrl = new URL(window.location.href);

var params = currentUrl.search;
var queryParams = new URLSearchParams(params);

var userName = atob(queryParams.get('name'));
var user = document.querySelector('#user');
user.children[0].innerHTML = 'Welcome, ' +  userName;

var navItem = document.querySelectorAll('.nav-item');

navItem[0].addEventListener('click',handleClickItems);
navItem[1].addEventListener('click',handleClickItems);

drawDonutChart();

function handleClickItems(e){
    let target = e.target;

    if(e.target.parentNode == navItem[1]){
        let classList = target.classList;
        navItem[0].children[0].classList.contains('status') && navItem[0].children[0].classList.remove('status');
        !classList.contains('status') && classList.add('status');
    }else if(e.target.parentNode == navItem[0]){
        let classList = target.classList;
        navItem[1].children[0].classList.contains('status') && navItem[1].children[0].classList.remove('status');
        !classList.contains('status') && classList.add('status');
    }else{
        console.log('zxvzxcv');
    }
}

