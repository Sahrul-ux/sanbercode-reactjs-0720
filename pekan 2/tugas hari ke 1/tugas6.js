
console.log("--------soal no.1----------")
//ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir

//var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]


console.log("--------jawban no.1----------")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
  nama : "Asep",
  jenisKelamin : "laki-laki",
  hobi : "baca buku",
  tahunLahir : 1992
}
console.log(objDaftarPeserta)

console.log("--------soal no.2----------")
console.log("--------jawban no.2----------")
 
var buah = [{nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000},
           {nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000}, 
           {nama: "semangka", warna: "hijau & merah", adaBijinya: "ada", harga: 10000},
           {nama: "pisang", warna: "kuning", adaBijinya: "tidak", harga: 5000}]
console.log(buah[0])


console.log("--------soal no.3----------")
console.log("--------jawban no.3----------")

function dataFilm(nama, durasi, genre, tahun) {
  this.nama = nama;
  this.durasi = durasi;
  this.genre = genre;
  this.tahun = tahun;
}

var dataFilm = new dataFilm('Boboho', '1 jam', "mandarin", 1993);
console.log(dataFilm)

console.log("--------jawban no.3----------")

console.log("--------release 0----------")


class Animal {
    constructor(legs, cold_blooded) {
        this.legs = 4
        this.cold_blooded = false
    }
}
var sheep = new Animal ("shaun");
console.log(sheep.legs)
console.log(sheep.cold_blooded)

console.log("--------release 1----------")

class Animal {
    constructor(yell, jump) {
        this.yell = "Auoooo"
        this.jump = "hop hop"
    }
}
class sungokong = new Ape ("kera sakti")
var legs = new legs ("2");
var yell = new yell ("Auoooo");


class kodok = new frog ("buduk");
var legs = new legs ("2");
var jump = new jump ("hop hop");
                     
console.log()





console.log("--------soal no.4----------")
console.log("--------jawban no.4----------")

class Clock {
    constructor ({ template}){
       clock(){
        var timer;

        function render() {
          var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 

