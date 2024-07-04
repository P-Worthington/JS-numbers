function getValue(a) {
    let x = document.getElementById("myForm").elements[a].value;
    x = Number(x);
    if (isNaN(x) === true) {
        alert('Please input a number');
    } else {
        return x;
    };
};

function valueRandomNumber(a) {
    let x = document.getElementById("randNum").elements[a].value;
    x = Number(x);
    if (isNaN(x) === true) {
        alert('Please input a number');
    } else {
        return x;
    };
};

function randNumGenerator (number, rolls) {
    number = Number(number)
    let result = ""
    i = 0
    while (i < rolls) {
        a = Math.floor(Math.random() * number);
        a += 1
        result = result.concat(`${a}, `);
        i += 1
    }
    return result
}

function additionOperation (a, b) {
    result = a + b;
    return result;
};

function subtractionOperation (a, b) {
    result = a - b;
    return result;
};

function multiplicationOperation (a, b) {
    result = a * b;
    return result;
};

function divisionOperation (a, b) {
    result = a / b;
    return result;
};

function exponentialOperation (a, b) {
    result = a ** b;
    return result;
};

function removeWS () {
    let x = document.getElementById("stringRev").elements[0].value;
    result = x.replace(/\s/g, "");
    return result;
}

function flipString (str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let flipped = reverseArray.join("");
    return flipped
}

function checkPalindrome (a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

/**Onclick functions  */

function addition () {
    value1 = getValue(0);
    value2 = getValue(1);
    result = additionOperation (value1, value2);
    document.getElementById("query").innerHTML = `${value1} + ${value2} = ${result}`;
};

function subtraction () {
    value1 = getValue(0);
    value2 = getValue(1);
    result = subtractionOperation (value1, value2);
    document.getElementById("query").innerHTML = `${value1} - ${value2} = ${result}`;
}

function multiplication () {
    value1 = getValue(0);
    value2 = getValue(1);
    result = multiplicationOperation (value1, value2);
    document.getElementById("query").innerHTML = `${value1} x ${value2} = ${result}`;
}

function division () {
    value1 = getValue(0);
    value2 = getValue(1);
    result = divisionOperation (value1, value2);
    document.getElementById("query").innerHTML = `${value1} / ${value2} = ${result}`;
}

function exponential () {
    value1 = getValue(0);
    value2 = getValue(1);
    result = exponentialOperation (value1, value2);
    document.getElementById("query").innerHTML = `${value1} ^ ${value2} = ${result}`;
}

function randomNum () {
    rand = valueRandomNumber(0);
    rolls = valueRandomNumber(1);
    result = randNumGenerator(rand, rolls);
    document.getElementById("randAns").innerHTML = `${result}`;
}

function stringReverse () {
    input = document.getElementById("stringRev").elements[0].value;
    resultNoWhite = removeWS();
    flipped = flipString(resultNoWhite);
    result = checkPalindrome(resultNoWhite, flipped)
    if (result === true) {
        document.getElementById("palindromeAns").innerHTML = `${input} - is a palindrome.`;
    } else {
        document.getElementById("palindromeAns").innerHTML = `${input} - is NOT a palindrome.`;
    }
}

function countUp () {
    var sec = -1;
    function pad(val) { return val > 9 ? val : "0" + val; }
        setInterval(function () {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10) % 60));
            $("#hours").html(pad(parseInt(sec / 3600, 10)));
        }, 1000);
}
