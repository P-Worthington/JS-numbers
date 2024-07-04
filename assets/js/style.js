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