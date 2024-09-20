
const transferMoneyBtn = document.getElementById('transferMoneyBtn');

transferMoneyBtn.addEventListener('click', function(){
    const userNumber = document.getElementById('userNumber');
    const userNumberValue = parseInt(userNumber.value);
    const passNumberInput = document.getElementById('passNumberInput');
    const passNumberInputValue = passNumberInput.value;
    
    if(typeof userNumberValue === 'number' && passNumberInputValue === '1234'){
        const myBalance = document.getElementById('myBalance').innerText;
        const myBalanceToNum = parseInt(myBalance);
        const amountInput = document.getElementById('amountInput');
        const amountInputValue = parseFloat(amountInput.value);
        
        const updateMoney = document.getElementById('myBalance');
        updateMoney.innerText = myBalanceToNum - amountInputValue;
        
    }else{
        alert('wrong');
    }
    
});

const cashOut = document.getElementById('cashOut');

cashOut.addEventListener('click', function(){
    window.location.href = './cashOut.html?#';
});

const addMoney = document.getElementById('addMoney');

addMoney.addEventListener('click', function(){
    window.location.href = './addMoney.html?#';
});

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function(){
    window.location.href = './index.html?#';
});