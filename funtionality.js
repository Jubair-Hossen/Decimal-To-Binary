var decimalNumber = document.querySelector("#decimalNumber");
var binaryNumber = document.querySelector('#binaryNumber');
decimalNumber.addEventListener('input', convertor);




function convertor(e) {
    e.preventDefault();
    if (decimalNumber.value == "" || decimalNumber.value == "0") {
        binaryNumber.innerHTML = "0";
    }
    else if (parseInt(decimalNumber.value) < 0) {
        var decimalNumberValue = parseInt(decimalNumber.value) * (-1);
        var binaryNumberValue = "";
        while (decimalNumberValue > 0) {
            if (decimalNumberValue % 2 == 0) {
                decimalNumberValue = decimalNumberValue / 2;
                var bagshes = "0";
            }
            else {
                decimalNumberValue = (decimalNumberValue - 1) / 2;
                bagshes = "1";
            }
            binaryNumberValue = bagshes + binaryNumberValue;
        }
        binaryNumber.innerHTML = "-" + binaryNumberValue;
    }
    else {
        var decimalNumberValue = parseInt(decimalNumber.value);
        var binaryNumberValue = "";
        while (decimalNumberValue > 0) {
            if (decimalNumberValue % 2 == 0) {
                decimalNumberValue = decimalNumberValue / 2;
                var bagshes = "0";
            }
            else {
                decimalNumberValue = (decimalNumberValue - 1) / 2;
                var bagshes = "1";
            }
            binaryNumberValue = bagshes + binaryNumberValue;
            console.log(decimalNumberValue, bagshes)
        }
        binaryNumber.innerHTML = binaryNumberValue;
    }

}


