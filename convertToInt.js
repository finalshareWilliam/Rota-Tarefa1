function getValue(s) {

    var num = 0;

    if(s == 'I') { num = 1 }
    else if(s == 'V') { num = 5 }
    else if(s == 'X') { num = 10 }
    else if(s == 'L') { num = 50 }
    else if(s == 'C') { num = 100 }
    else if(s == 'D') { num = 500 }
    else if(s == 'M') { num = 1000 }

    return num;
}

function toNumber() {

    var total = 0;
    var romNum = document.getElementById('choice1').value
    var number;


    while(romNum != "") {

        if(getValue(romNum.charAt(0)) >= getValue(romNum.charAt(1)) || romNum.length == 1) {

            number = getValue(romNum.charAt(0));
            total += number;

            var temp = romNum.slice(1);
            romNum = temp;
        }
        else {

            number = getValue(romNum.charAt(1)) - getValue(romNum.charAt(0));
            total += number;

            var temp = romNum.slice(2);
            romNum = temp;
        }

    }

    document.getElementById('result1').innerHTML = total;
}