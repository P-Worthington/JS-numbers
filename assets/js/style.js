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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randNumGenerator (number, rolls) {
    let testNum = number - 1;
    let x = getRandomInt(x);
    let result = x + 1;
    console.log(result)
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
}