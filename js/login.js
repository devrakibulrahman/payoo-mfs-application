const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    const numberInput = document.getElementById('numberInput');
    const numInputValue = numberInput.value;
    const pinInput = document.getElementById('pinInput');
    const pinInputValue = pinInput.value;
    
    if(typeof parseInt(numInputValue) === 'number' && pinInputValue === '1234'){
        window.location.href = './home.html';
    }else{
        alert("wrong");
    };
});