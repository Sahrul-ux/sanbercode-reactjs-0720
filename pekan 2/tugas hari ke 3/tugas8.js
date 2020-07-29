
console.log("-----------------Soal no.1-------------")
console.log("-----------------Jawaban no.1-------------")
console.log("-----------------pengggunaan const pada luas lingkaran :-------------")
console.log("")

const luasLingkaran = function(phi, r) {
  return phi * ( r * r );
};
console.log(luasLingkaran(3.14, 6));
console.log("-----------------Jawaban no.1-------------")
console.log("-----------------pengggunaan const pada keliling lingkaran :-------------")
console.log("")

const kelilingLingkaran = function(phi, r) {
  return 2 * phi * r ;
};
console.log(kelilingLingkaran(3.14, 6));


console.log("-----------------Jawaban no.1-------------")
console.log("-----------------pengggunaan let pada luas lingkaran :-------------")
console.log("")

let d = 14
let r = d/2
let luas = Math.PI * r * r
console.log(luas)
console.log(Math.round(luas))
console.log("-----------------Jawaban no.1-------------")
console.log("-----------------pengggunaan let pada keliling lingkaran :-------------")
console.log("")

let phi = 3.14
let a = 10
let keliling = 2 * phi * a
console.log(keliling)
console.log(Math.round(keliling))

console.log("-----------------soal no.2-------------")
console.log("-----------------Jawaban no.2-------------")
console.log("")
let kataPertama = 'saya'
let kataKedua = 'adalah'
let kataKetiga = 'seorang'
let kataKeempat = 'fronted'
let kataKelima = 'developer'
 
let theString = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima}`
console.log(theString)

console.log("-----------------soal no.3-------------")
console.log("-----------------Jawaban no.3-------------")
class buku {
	constructor(nama,jumlahHalaman,harga)
	{
		this.nama = nama;
		this.jumlahHalaman = jumlahHalaman;
        this.harga = harga;
	}
	
	bukuBaru()
	{
		let hlman = this.halaman <= 200;
		return jumlah;		
	}
	
	static jenisBuku(jumlahHalaman)
	{
		if (jumlahHalaman<200)
		{
			return 'bukuBaru';
		}
		else
		{
			return 'bukuJadul';
		}
	}
}

class komik extends buku{
	constructor(isColorfull)
	{
		if (jumlahHalaman<200)
		{
			return 'true';
		}
		else
		{
			return 'false';
		}
	}
}

	


