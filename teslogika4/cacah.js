let input = prompt("Masukkan angka yang ingin dihitung: \n Inputan array dipisahkan tanda spasi ");
const inputArray = input.split(" ");
var intArray = [];
for (var i = 0; i < inputArray.length; i++)
    intArray.push(parseInt(inputArray[i]));
intArray = intArray.sort(function(a, b) { return a - b });
var min_num = intArray[0];
for (let i = 0; i < intArray.length; i++) {
    if (intArray.includes((min_num + 1))) {
        min_num = min_num + 1;
    }
    output = min_num + 1;

}
alert(output)