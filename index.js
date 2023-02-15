const buttons= document.getElementsByClassName('button');

const bttnC= document.getElementById("bttn-C");
const bttnDiv= document.getElementById("bttn-div");
const bttnMul= document.getElementById("bttn-mul");
const bttnMinus= document.getElementById("bttn-minus");
const bttnPlus= document.getElementById("bttn-plus");
const bttnEqual= document.getElementById("bttn-equal");
const bttnDot= document.getElementById("bttn-dot");

const bttn1= document.getElementById("bttn-1");
const bttn2= document.getElementById("bttn-2");
const bttn3= document.getElementById("bttn-3");
const bttn4= document.getElementById("bttn-4");
const bttn5= document.getElementById("bttn-5");
const bttn6= document.getElementById("bttn-6");
const bttn7= document.getElementById("bttn-7");
const bttn8= document.getElementById("bttn-8");
const bttn9= document.getElementById("bttn-9");
const bttn0= document.getElementById("bttn-0");

const display= document.getElementById("calc");

let calculo="0-0";
display.innerHTML= calculo;

let cont=0;
let lastChar="";
let flag="resultado";

bttnC.addEventListener('click', e => {
    cont++;
    
    if(calculo.length>0){
        if(calculo=="Infinity" || calculo=="Error" || flag=="resultado"){
            calculo="";    
            flag="";
        }
        else
        calculo= calculo.slice(0, calculo.length-1);
    }

    setTimeout(() => {
        if(cont>0)
            cont=0
    }, 200);

    if(cont>1){
        cont=0;
        calculo="";
    }
    
    display.innerHTML= calculo;
});
bttnDiv.addEventListener('click', e => {

    if(lastChar != "/"){
        calculo= calculo.concat("/");
        display.innerHTML= calculo;

        lastChar="/";
    }
    
    flag="";
});
bttnMul.addEventListener('click', e => {

    if(lastChar != "*"){
        calculo= calculo.concat("*");
        display.innerHTML= calculo;

        lastChar="*";
    }

    flag="";
});
bttnMinus.addEventListener('click', e => {
    
    if(lastChar != "-"){
        calculo= calculo.concat("-");
        display.innerHTML= calculo;

        lastChar="-";
    }

    flag="";
});
bttnPlus.addEventListener('click', e => {
    
    if(lastChar != "+"){
        calculo= calculo.concat("+");
        display.innerHTML= calculo;

        lastChar="+";
    }

    flag="";
});

bttnDot.addEventListener('click', e => {
    
    if(lastChar != "."){
        calculo= calculo.concat(".");
        display.innerHTML= calculo;

        lastChar=".";
    }

});

bttn0.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("0");
    display.innerHTML= calculo;
    lastChar="";
});
bttn1.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("1");
    display.innerHTML= calculo;
    lastChar="";
});
bttn2.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("2");
    display.innerHTML= calculo;
    lastChar="";
});
bttn3.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("3");
    display.innerHTML= calculo;
    lastChar="";
});
bttn4.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("4");
    display.innerHTML= calculo;
    lastChar="";
});
bttn5.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("5");
    display.innerHTML= calculo;
    lastChar="";
});
bttn6.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("6");
    display.innerHTML= calculo;
    lastChar="";
});
bttn7.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("7");
    display.innerHTML= calculo;
    lastChar="";
});
bttn8.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("8");
    display.innerHTML= calculo;
    lastChar="";
});
bttn9.addEventListener('click', e => {
    if(flag=="resultado"){
        calculo="";
        display.innerHTML= calculo;
        flag="";
    }

    calculo= calculo.concat("9");
    display.innerHTML= calculo;
    lastChar="";
});

bttnEqual.addEventListener('click', e => {
    calculo=  Function("return " + calculo)() + "";
    console.log(calculo)

    if(calculo==="undefined"){
        calculo="";
        display.innerHTML= calculo;
    }

    else if(calculo==="NaN"){
        calculo="Error";
        display.innerHTML= calculo;
    }

    else{
        display.innerHTML= calculo;
    }

    flag="resultado";

});


window.addEventListener('keydown', e => {

    switch (e.key) {

        case 'Backspace':
            bttnC.click();
        break;
        
        case '1':
            bttn1.click();
        break;

        case '2':
            bttn2.click();
        break;

        case '3':
            bttn3.click();
        break;

        case '4':
            bttn4.click();
        break;

        case '5':
            bttn5.click();
        break;

        case '6':
            bttn6.click();
        break;

        case '7':
            bttn7.click();
        break;

        case '8':
            bttn8.click();
        break;

        case '9':
            bttn9.click();
        break;

        case '0':
            bttn0.click();
        break;

        case '/':
            bttnDiv.click();
        break;

        case '*':
            bttnMul.click();
        break;

        case '-':
            bttnMinus.click();
        break;

        case '+':
            bttnPlus.click();
        break;

        case 'Enter':
            bttnEqual.click();
        break;

        case '.':
            bttnDot.click();
        break;
    }
});