const addMoneyBtn = document.getElementById('addMoneyBtn');

addMoneyBtn.addEventListener('click', function(event){
    const bankNumberInput = document.getElementById('bankNumberInput');
    const bankNumberInputValue = bankNumberInput.value;
    const passNumberInput = document.getElementById('passNumberInput');
    const passNumberInputValue = passNumberInput.value;

    if(typeof parseFloat(bankNumberInputValue) === 'number' && passNumberInputValue === '1234'){
        const addAmountInput = document.getElementById('addAmountInput');
        const addAmountInputValue = parseFloat(addAmountInput.value);
        const myBalance = document.getElementById('myBalance').innerText;
        const myBalanceToNum = parseInt(myBalance);

        const addMoneyStatus = addAmountInputValue + myBalanceToNum;

        const updateMoney = document.getElementById('myBalance');
        updateMoney.innerText = addMoneyStatus;
    }else{
        alert('wrong');
    };
});

const cashOut = document.getElementById('cashOut');

cashOut.addEventListener('click', function(){
    window.location.href = './cashOut.html?#';
});

const logOutBtn = document.getElementById('logoutBtn');

logOutBtn.addEventListener('click', function(){
    window.location.href = './index.html';
});

const transferMoney = document.getElementById('transferMoney');

transferMoney.addEventListener('click', function(){
    window.location.href = './transferMoney.html?#';
});