const cashOutBtn = document.getElementById('cashOutBtn');

cashOutBtn.addEventListener('click', function(){
    const agentNumber = document.getElementById('agentNumber');
    const agentNumberValue = agentNumber.value;
    const passNumberInput = document.getElementById('passNumberInput');
    const passNumberInputValue = passNumberInput.value;
    
    if(typeof parseFloat(agentNumberValue) === 'number' && passNumberInputValue === '1234'){
        const amountInput = document.getElementById('amountInput');
        const amountInputValue = amountInput.value;
        const myBalance = document.getElementById('myBalance').innerText;
        const myBalanceToNum = parseFloat(myBalance);
        
        const cashOutStatus = myBalanceToNum - amountInputValue;
        
        const updateMoney = document.getElementById('myBalance');
        updateMoney.innerText = cashOutStatus;        
    }else{
        alert('wrong');
    }
});

const addMoney = document.getElementById('addMoney');

addMoney.addEventListener('click', function(){
    window.location.href = './addMoney.html?#';
});

const logOutBtn = document.getElementById('logoutBtn');

logOutBtn.addEventListener('click', function(){
    window.location.href = './index.html';
})