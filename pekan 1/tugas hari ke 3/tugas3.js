//soal 1

//buatlah variabel-variabel seperti di bawah ini

//var kataPertama = "saya";
//var kataKedua = "senang";
//var kataKetiga = "belajar";
//var kataKeempat = "javascript";
//gabungkan variabel-variabel tersebut agar menghasilkan output

//saya Senang belajar JAVASCRIPT

// jawaban 1
var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "JAVASCRIPT";

console.log(kataPertama.concat(kataKedua, kataKetiga, kataKeempat));

//soal 2

//buatlah variabel-variabel seperti di bawah ini

//var kataPertama = "1";
//var kataKedua = "2";
//var kataKetiga = "4";
//var kataKeempat = "5";
//ubah lah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output

//jawaban 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
hasil1= parseInt(kataPertama);
console.log(hasil1);
hasil2= parseInt(kataKedua);
console.log(hasil2);
hasil3= parseInt(kataKetiga);
console.log(hasil3);
hasil4= parseInt(kataKeempat);
console.log(hasil4);
var hasil5=hasil1 + hasil2 + hasil3 + hasil4;
console.log(hasil5);

//soal 3

//selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:

//Kata Pertama: wah
//Kata Kedua: javascript
//Kata Ketiga: itu
//Kata Keempat: keren
//Kata Kelima: sekali

//jawaban 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(3, 13);
var kataKetiga = kalimat.substring(14, 18);
var kataKeempat = kalimat.substring(18, 24);
var kataKelima	= kalimat.substring(25, 32);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal 4

//pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

//nilai >= 80 indeksnya A
//nilai >= 70 dan nilai < 80 indeksnya B
//nilai >= 60 dan nilai < 70 indeksnya c
//nilai >= 50 dan nilai < 60 indeksnya D
//nilai < 50 indeksnya E

// jawaban 4

var nilai= 75;

if (nilai >=80){
	grade = "A";
} else if (nilai >=70){
	grade = "B";
} else if (nilai >=60){
	grade = "C";
} else if (nilai >=50){	
	grade = "D";
} else {
	grade = "E";
}
console.log("grade: "+ grade);

//soal 5

//ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir
// anda dan buatlah switch case pada bulan, lalu muncul
// kan string nya dengan output seperti ini 22 Juli 2020 
//(isi di sesuaikan dengan tanggal lahir masing-masing)

//jawaban 5
var tanggal = 12;
var bulan = 2;
var tahun = 1991;
console.log (tanggal);
switch (bulan) {
  case 1:
    console.log("januari");
    break;
  case 2:
    console.log("februari");
    break;
  case 3:
    console.log("maret");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("mei");
    break;
  case 6:
    console.log("juni");
    break;
  case 7:
    console.log("juli");
    break;
  default:
  	console.log("Bulan Tidak diketahui")
}
console.log(tahun);
