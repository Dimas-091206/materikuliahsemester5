# Praktikum 4: react Native Navigation #

## tujuan pembelajaran ##
Mahasiswa mampu:
1. Merancang dan menerapkan navigasi antar layar (screen) pada aplikasi react native.
2. Menggunakan Library react Navigation (Stack Navigator, Tab Naviator, Drawer Navigator).

## Alur Praktikum ##

### Langkah 1: Inisiasi Proyek dan install dependensi React native ###
1. Buka terinal atau cmd
2. ubah direktori kerja ke pertemuan 4
3. buat proyek baru mengggunakan perintah berikut:'npx create-expo-app ptmn4 --template blank'
4. masuk kedalam folder ptmn4
5. Install core navigation library 'npm install @react-navigation/native'
6. Install dependensi pendukung (wajib untuk Expo) 'npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated'

### Langkah 2: Membuat stack Navigator ###
1. Instalasi Pembuatan Stack: 'npm install @react-navigation/native-stack'
2. Membuat folder Layar (screens)
3. didalam folder screens buat file Login.js dan Signup.js
4. masukkan kode sesuai modul praktikum 4
5. sesuaikan file app.js dengan kode yang ada di modul
6. simpan dan install dependensi untuk web 'npx expo install react-dom react-native-web'
7. jalankan perintah npx expo start --web
8. konfirmasi bukti

<image src="iPhone-14-PRO-localhost-7-_2smfemm3g6n.gif" autoplay="true" ldioop="true" muted="true" width="40%"></image>

### Langkah 3: Bottom Tab Navigation ###

1. Install pustaka bottom tabs 'npm install @react-navigation/bottom-tabs'
2. membuat file baru (HomeScreen.js dan ProfileScreen.js) di dalam folder screen dan konfigurasi isi nya di modul
3. ubah isi app.js dengan kode yang ada di modul
4. bukti: 

<image src="iPhone-14-PRO-localhost-izn6wajr4h1aqk.gif" autoplay="true" ldioop="true" muted="true" width="40%"></image>

### Langkah 4: Drawer Navigation ###

1. Install Pustaka Drawer 'npm install @react-navigation/drawer'
2. Konfigurasi drawer (ubah isis App.js dengan kode yang ada dimodul)
3. Bukti:

<image src="iPhone-14-PRO-localhost-6cy20m19yu7su9.gif" autoplay="true" ldioop="true" muted="true" width="40%"></image>
