const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function(){
    window.location.href = "/index.html";
});

const addMoney = document.getElementById('add-money');

addMoney.addEventListener('click', function(){
    window.location.href = "./addMoney.html?#";
});

const cashOut = document.getElementById('cash-out');

cashOut.addEventListener('click', function(){
    window.location.href = "./cashOut.html?#";
});