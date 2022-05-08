const calc = document.querySelector('.calc');
const display = document.querySelector('.num');
const zero = document.querySelector('.zero1');
const darkMode = document.querySelector('.checkbox');
const lastResult = document.querySelector('.container');
const lastEqual = document.querySelector('.history');

let history = [];

calc.addEventListener('click', function(e) {
    if(!e.target.classList.contains('btn')) return;

    switch(e.target.innerText){
        case 'AC':
            zero.style.display = "block";
            display.style.display = "none";
            display.innerText = '';
            break;

        case 'C':
            // lastHistory();
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                if(display.textContent.length == 0){
                    // console.log(display.textContent.length,'huh');
                    zero.style.display = "block";
                    display.style.display = "none";
                }
                
            }
            break;
        
        case '=':
            try{
                display.innerText = eval(display.innerText);
                calculation(display.innerText);
                // console.log(display.innerText,'int');
            } catch {
                display.innerText = 'Error!';
            }

            // addHistory();
            break;

        default:
            zero.style.display = "none";
            display.style.display = "block";
            display.innerText += e.target.innerText;
            console.log('target',)
            if(display.textContent.length >= 10){
                display.style.fontSize = "2rem";
                if(display.textContent.length >= 15){
                    display.style.fontSize = "1.5rem";
                    if(display.textContent.length >= 20){
                        display.style.fontSize = "1.2rem";
                    }
                }
            }else if(display.textContent.length < 10){
                display.style.fontSize = "3rem";
            }
            
            // console.log(display.textContent.length,'რაოდენობა');
            
    }

});

// document.querySelector('.checkbox').onclick = () => {
//     document.querySelector('.calc').classList.toggle('active');
//     document.querySelector('.calc_screen').classList.toggle('active');
//     document.querySelectorAll('.btn').forEach((itme) => {
//         itme.classList.toggle('active');
//     });


//     console.log()

// }

function lastHistory(){
    console.log('equal');
    lastEqual.classList.toggle('active');
    
}

function calculation(x){
    para = document.createElement('h2');
    data = eval(x);
    para.innerHTML = data;
    lastResult.appendChild(para);
    console.log('calc',x, eval(x) );
    return eval(x);
    
}

function addHistory(){
    history += eval(display.innerText) + ', ';
    lastResult.innerHTML = history;
    console.log('add history');
    console.log(history);

}

function renderHistory(){
   
}



// სქროლი
// დამრგვალება
// ფონტის ზომის კლება - length