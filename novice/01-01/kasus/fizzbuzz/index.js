var startingNumber = 1; // Angka awal
var maxLoop = 100; // Jumlah perulangan

// problem pertama
// for (var x = startingNumber; x <= maxLoop; x++){
//     var output = x; // Jika tidak divisible output angka
//     if (x % 5 === 0) output = "Buzz"; // Jika divisible oleh 5 dan kecuali divisible 3
//     if (x % 3 === 0) output = "Fizz"; // Jika divisible oleh 3
//     console.log(output); // Menampilkan ke konsol
// }

// problem kedua
for (var x = startingNumber; x <= maxLoop; x++){
    var output = x; // Jika tidak divisible output angka
    if (x % 5 === 0) output = "Buzz"; // Jika divisible oleh 5
    if (x % 3 === 0) output = (x % 5 === 0) ? "Fizz" + output : "Fizz"; // Jika divisible oleh 3 "Fizz", Jika divisible olh 3 & 5 "FizzBuzz"
    console.log(output); // Menampilkan ke konsol
}