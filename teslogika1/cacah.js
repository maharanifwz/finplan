let n = prompt("Masukkan angka yang ingin dihitung:");
var output = [];
    for (let i = 1; output.length < n; i++) {
        if (i % 3 === 0 && i % 7 === 0){
            output.push('Z')
        }
        else if(i % 3 === 0 || i % 7 === 0) {
            output.push(i)
        }
    }
    alert(output)