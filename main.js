const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;
btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
       const btnClass = e.currentTarget.classList;
       
       if(btnClass.contains('increase')){
            count++;
       }
        else if(btnClass.contains('decrease')){
            count--;
       }
        else{
            count = 0;
       }
       if(count > 0){
            value.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }
       value.textContent = count;
       
    })
});