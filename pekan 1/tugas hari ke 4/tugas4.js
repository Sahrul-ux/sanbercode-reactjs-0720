console.log("---soal 1---")
//Pada tugas ini kamu diminta untuk melakukan looping dalam
// JavaScript dengan menggunakan syntax while. Untuk membuat 
//tantangan ini lebih menarik, kamu juga diminta untuk membuat 
//suatu looping yang menghitung maju dan menghitung mundur.
// Jangan lupa tampilkan di console juga judul ‘LOOPING PERTAMA’ dan ‘LOOPING KEDUA’.”

console.log("---jawaban 1---")

console.log("----LOOPING PETAMA---")

var deret = 0;
while(deret < 20) { // akan terus mengulang deret sampai 20
  deret+=2;
  console.log(deret  + ' - I love coding'); 
}

console.log("----LOOPING KEDUA---")

var deret = 22;
while(deret > 2){
	deret-=2;
	console.log(deret  + ' - I will become a fronted developer')
}

console.log("---soal no.2---")
//Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript 
//dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik,
// kamu juga diminta untuk memenuhi syarat tertentu yaitu:

//SYARAT:
//A. Jika angka ganjil maka tampilkan Santai
//B. Jika angka genap maka tampilkan Berkualitas
//C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
//console.log("---jawaban no.2---")
console.log("---jawaban no.2---")
var n = 20;
var x;

for (x = 1; x <= n ; x++){
	if(x%2 === 1){
		console.log(x+ ' -  Santai');
	}

	else if (x%2 === 0){
		console.log(x+ ' -  Berkualitas');	
	}
	else if (x%3 === 0 && x%2 === 1){
		console.log(x+ ' -  I Love Coding');
	}
}


console.log("---soal no.3---")
//Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) 
//dengan dimensi tinggi 7 dan alas 7. Looping boleh menggunakan syntax apa pun (while, for, do while).

console.log("---jawaban no.3---")

var a = '#';
for (var i = 1; i <= 7 ; i++){
	for(var j = 1; j <= i ; j++){
		a +='#';
	}
	a += "\n";
}
console.log(a);

console.log("---soal no.4---")
//buatlah variabel seperti di bawah ini

//var kalimat="saya sangat senang belajar javascript"
//ubah kalimat diatas menjadi array dengan output seperti di bawah ini

//["saya", "sangat", "senang", "belajar", "javascript"]



console.log("---jawaban no.4---")

var kalimat="saya sangat senang belajar javascript"
var saya = kalimat.split(" ")
console.log(saya)

console.log("---soal no.5---")

//buatlah variabel seperti di bawah ini

//var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
//urutkan array di atas dan tampilkan data seperti output di bawah ini:

//1. Mangga
//2. Apel
//3. Anggur
//4. Semangka
//5. Jeruk

console.log("---jawaban no.5---")

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
console.log(daftarBuah)
var slug = daftarBuah.join(" ")//merubah urutaan buah
console.log(slug)//merubah aray jadi string