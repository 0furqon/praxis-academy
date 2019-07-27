var size = 8;       // Ukuran chess board
var board = "";     // Output

for (var y = 0; y < size; y++){             // loop horizontal
    for (var x = 0; x < size; x++){         // loop vertical
        // ubah algoritma jika ganti baris
        if (y % 2 === 0){
            board += (x % 2 === 0) ? " " : "#"; // print bergantian tanda '#' dan spasi
        } else {
            board += (x % 2 === 0) ? "#" : " ";
        }
    }
    board += '\n';
}

console.log(board);