// 1. Buat 2 buah looping menggunakan for loop!
// 2. Buat 2 buah looping menggunakan for while!
// 3. Buat 2 buah looping menggunakan for do-while!
// 4. Buat 1 buah looping untuk mengeluarkan nilai dari sebuah array!

console.log('====== for ======')

for (let i = 1; i < 11; i++){
    console.log('mari berhitung 1 sampai 10', [i]);
}

for (let i = 1; i < 11; i++){
    console.log('Password yang anda masukkan tidak sesuai dengan username', [i]);
}

console.log('====== while ======') 
let i = 5;

while (i <= 10) {
    console.log('Vespa Klasik', [i]);
    i++;
}

while (i < 16) {
    console.log('Vespa Matic', [i]);
    i++;
}

console.log('====== do while ======')
do {
    console.log('LIVERPOOL FC');
    i++;
} while(i <= 5);

do {
    console.log('The Beatles');
    i++;
} while(i < 25);

console.log('====== mengeluarkan nilai ======')
let vespaClassic = ['Kongo','Super','Sprint','Strada'];
for (let i = 0; i < vespaClassic.length; i++){
    console.log(vespaClassic[i]);
}



