function getValue() {
    var x = document.getElementById("myForm").elements[0].value;
    document.getElementById("demo").innerHTML = x;
    return x
  }

function main () {
    valueRaw = getValue()
    console.log(valueRaw)
}