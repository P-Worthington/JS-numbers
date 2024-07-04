function getValue(a) {
    var x = document.getElementById("myForm").elements[a].value;
    x = Number(x);
    if (isNaN(x) === true) {
        alert('Please input a number');
    } else {
        return x;
    };
};

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