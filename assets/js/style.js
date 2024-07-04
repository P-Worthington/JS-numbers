function getValue(a) {
    var x = document.getElementById("myForm").elements[a].value;
    return x;
  };

function additionOperation (a, b) {
    result = a + b;
    return result;
};

function addition () {
    value1 = getValue(0);
    value2 = getValue(1);
    result = additionOperation (value1, value2);
    document.getElementById("query").innerHTML = `${value1} + ${value2} = ${result}`;
};