const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const amountValue = document.querySelector('#amountValue');
const amountPrice = document.querySelector('#amountPrice');

const startPrice = 0.16;
amountPrice.textContent = String(startPrice);
// Nft counter
increase.addEventListener('click', () => {
  if(amountValue.value <= 19){
    let value = 0;
    amountValue.value = parseInt(amountValue.value) + 1;
    value = startPrice * +amountValue.value;
    amountPrice.innerHTML = value.toFixed(2);
    if (amountValue.value <= 1) decrease.style.opacity = 0.4;
    else decrease.style.opacity = 1;
    if(amountValue.value == 20){
      increase.style.opacity = .4;
    }else{
      increase.style.opacity = 1;
    }
  }
});

decrease.addEventListener('click', () => {
  increase.style.opacity = 1;
  if (amountValue.value <= 1) decrease.style.opacity = 0.4;
  else {
    let value = 0;
    amountValue.value = parseInt(amountValue.value) - 1;
    value = startPrice * +amountValue.value;
    amountPrice.innerHTML = value.toFixed(2);
    decrease.style.opacity = 1;
  }
  amountValue.value <= 1
    ? (decrease.style.opacity = 0.4)
    : (decrease.style.opacity = 1);
});

