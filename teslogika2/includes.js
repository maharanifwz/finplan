let input = prompt("Masukkan inputan")
var words = input.replace(/\./g, '').toLowerCase().split(" ");
// alert(words)
var output = []
for (var i = 0; i < words.length; i++) {
    // console.log(words[i])
    if (words[i] === 'sang') {
        if (words[i + 1] === 'gajah') {
            output.push('sang gajah')
        }
    } else if (words[i] === 'serigala') {
        output.push('serigala')
    } else if (words[i] === 'harimau') {
        output.push('harimau')
    }
}
alert(output + " ")