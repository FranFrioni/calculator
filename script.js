const input = document.getElementById("input");
let number1 = "", number2 = "", flag = false, operation = "", finished = false;


function add(){
    if (!finished){
        if (number1 === ""){
            number1 = input.value;
            operation = "+";
            input.value = "";
        } else {
            if (operation !== "+"){
                number2 = input.value;
                if(operation === "-"){
                    input.value = parseFloat(number1) - parseFloat(number2);
                    number1 = parseFloat(number1) - parseFloat(number2);
                    flag = true;
                } else if (operation === "*"){
                    input.value = parseFloat(number1) * parseFloat(number2);
                    number1 = parseFloat(number1) * parseFloat(number2);
                    flag = true;
                } else if (operation === "/"){
                    input.value = parseFloat(number1) / parseFloat(number2);
                    number1 = parseFloat(number1) / parseFloat(number2);
                    flag = true;
                }
                operation = "+";
            } else if (!flag){
                number2 = input.value;
                input.value = parseFloat(number1) + parseFloat(number2);
                number1 = parseFloat(number1) + parseFloat(number2);
                flag = true;
            }
        }
    }
}
function substract(){
    if (!finished){
        if (number1 === ""){
            number1 = input.value;
            operation = "-";
            input.value = "";
        } else {
            if (operation !== "-"){
                number2 = input.value;
                if(operation === "+"){
                    input.value = parseFloat(number1) + parseFloat(number2);
                    number1 = parseFloat(number1) + parseFloat(number2);
                    flag = true;
                } else if (operation === "*"){
                    input.value = parseFloat(number1) * parseFloat(number2);
                    number1 = parseFloat(number1) * parseFloat(number2);
                    flag = true;
                } else if (operation === "/"){
                    input.value = parseFloat(number1) / parseFloat(number2);
                    number1 = parseFloat(number1) / parseFloat(number2);
                    flag = true;
                }
                operation = "-";
            } else if (!flag){
                number2 = input.value;
                input.value = parseFloat(number1) - parseFloat(number2);
                number1 = parseFloat(number1) - parseFloat(number2);
                flag = true;
            }
        }
    }
}
function multiply(){
    if (!finished){
        if (number1 === ""){
            number1 = input.value;
            operation = "*";
            input.value = "";
        } else {
            if (operation !== "*"){
                number2 = input.value;
                if(operation === "+"){
                    input.value = parseFloat(number1) + parseFloat(number2);
                    number1 = parseFloat(number1) + parseFloat(number2);
                    flag = true;
                } else if (operation === "-"){
                    input.value = parseFloat(number1) - parseFloat(number2);
                    number1 = parseFloat(number1) - parseFloat(number2);
                    flag = true;
                } else if (operation === "/"){
                    input.value = parseFloat(number1) / parseFloat(number2);
                    number1 = parseFloat(number1) / parseFloat(number2);
                    flag = true;
                }
                operation = "*";
            }else if (!flag){
                number2 = input.value;
                input.value = parseFloat(number1) * parseFloat(number2);
                number1 = parseFloat(number1) * parseFloat(number2);
                flag = true;
            }
        }
    }
}
function divide(){
    if (!finished){
        if (number1 === ""){
            number1 = input.value;
            operation = "/";
            input.value = "";
        } else {
            if (operation !== "/"){
                number2 = input.value;
                if(operation === "+"){
                    input.value = parseFloat(number1) + parseFloat(number2);
                    number1 = parseFloat(number1) + parseFloat(number2);
                    flag = true;
                } else if (operation === "-"){
                    input.value = parseFloat(number1) - parseFloat(number2);
                    number1 = parseFloat(number1) - parseFloat(number2);
                    flag = true;
                } else if (operation === "*"){
                    input.value = parseFloat(number1) * parseFloat(number2);
                    number1 = parseFloat(number1) * parseFloat(number2);
                    flag = true;
                }
                operation = "/";
            }else if (!flag){
                number2 = input.value;
                input.value = parseFloat(number1) / parseFloat(number2);
                number1 = parseFloat(number1) / parseFloat(number2);
                flag = true;
            }
        }
    }
}
function equals(){
    if (!finished){
        if (number1 !== "" && input.value !== "" && !flag){
            if (operation === "+"){
                input.value = parseFloat(number1) + parseFloat(input.value);
            } else if (operation === "-"){
                input.value = parseFloat(number1) - parseFloat(input.value);
            } else if (operation === "*"){
                input.value = parseFloat(number1) * parseFloat(input.value);
            } else if (operation === "/"){
                input.value = parseFloat(number1) / parseFloat(input.value);
            }
            number1 = "";
            finished = true;
        }
    } else {
        input.value = "";
    }
}
function buttonC(){
    number1 = "", number2 = "", flag = false, operation = "", finished = false, input.value = "";
}
function buttonDot(){
    if (input.value === ""){
        input.value += "0.";
    } else if (!(input.value).includes(".")){
        input.value += ".";
    }
}

function button0(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 0;
}
function button1(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 1;
}
function button2(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 2;
}
function button3(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 3;
}
function button4(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 4;
}
function button5(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 5;
}
function button6(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 6;
}
function button7(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 7;
}
function button8(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 8;
}
function button9(){
    if (finished){
        input.value = "";
        finished = false;
    } else if (flag){
        input.value = "";
        flag = false;
    }
    input.value += 9;
}