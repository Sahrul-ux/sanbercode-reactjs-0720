//soal 1
//Tulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.

/*
    Tulis code function di sini
*/
 
//console.log(halo()) // "Halo Sanbers!"

console.log("-----------------Jawaban no.1-------------")
function halo (){
	console.log("Hallo Sanbers!");
}
halo();

//soal 2
//Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.

/*
    Tulis code function di sini
*/
 
//var num1 = 12
//var num2 = 4
 
//var hasilKali = kalikan(num1, num2)
//console.log(hasilKali) // 48




console.log("--------------Jawaban no.2----------------")

function kalikan(a, b){
	hasilKali = a * b;
	return hasilKali;
}
//memanggil fungsi 
var num1 = 12;
var num2 = 4;

var hasilPerkalian = kalikan(num1, num2);
console.log(hasilPerkalian);

//soal 3
//Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

/* 
    Tulis kode function di sini
*/
 
//var name = "John"
//var age = 30
//var address = "Jalan belum jadi"
//var hobby = "Gaming"
 
//var perkenalan = introduce(name, age, address, hobby)
//console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

console.log("-------------Jawaban no.3-----------------")

function introduce (name, age, addres, hobby){
  var perkenalkan = "nama saya " + name + " usia saya " + age + " alamat saya di " + address + "dan saya punya hoby yaitu " + hobby;
  return perkenalkan
}
var name = "John"
var age = "30"
var address = "Jalan belum jadi"
var hobby = "Gaming"
console.log (introduce(name, age, address, hobby))
