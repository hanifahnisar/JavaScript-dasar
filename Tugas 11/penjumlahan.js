// Ambil elemen inputan
const inputBilangan1 = document.getElementById('bilangan1');
const inputBilangan2 = document.getElementById('bilangan2');
const hasilPenjumlahan = document.getElementById('hasil');

// Fungsi untuk menghitung penjumlahan
function hitungPenjumlahan() {
  const bilangan1 = parseFloat(inputBilangan1.value) || 0;
  const bilangan2 = parseFloat(inputBilangan2.value) || 0;

  const jumlah = bilangan1 + bilangan2;

  hasilPenjumlahan.textContent = jumlah;
}

// Tambahkan event onchange pada kedua input
inputBilangan1.addEventListener('change', hitungPenjumlahan);
inputBilangan2.addEventListener('change', hitungPenjumlahan);