# Milestone02_K13

## DoR
Merupakan solusi dari masalah yang kami, Kelompok 13, temukan dari lingkungan sekitar kami. DoR merupakan singkatan dari Dosen Review, dimana solusi kami adalah dalam bentuk produk sebuah website. DoR diciptakan untuk mewadahi informasi tentang dosen yang dapat membantu pembelajaran mahasiswa, seperti metode pembelajaran dosen tersebut, tugas yang biasanya ia berikan, dan sebagainya. Kami harap, dengan adanya DoR, informasi mengenai hal - hal tersebut dapat diakses dengan mudah untuk seluruh mahasiswa sehingga dapat membuat mahasiswa lebih siap dalam menghadapi mata kuliah yang bersangkutan.

## Anggota Kelompok :
| Nama Anggota   | NIM | Kontribusi |
| :---        |    :----:   | :---: |
| Dwicakra Danielle      | 16521135 | PowerPoint |
| Marcel Ryan Antony   | 16521343 | PowerPoint |
| Raden Dizi Assyafadi Putra | 16521456 | UI & Frontend |
| Gracia Theophilia | 16521430 | PowerPoint |
| Fahrian Afdholi | 16521492 | PowerPoint |
| Farah Kharana Haniifah | 16521288 | About Page Content |
| Dzikri Muhammad Raditya Putra | 16521360 | |
| Sulthan Dzaky Alfaro | 16521357 | |
| Raditya Naufal Abiyu | 16521534 | Prototype & design |
| Muhammad Bangkit Dwi Cahyono | 16521149 | Frontend & Backend |
| Muhammad Haidar Akita Tresnadi | 16521522 | Powerpoint & Handle 404, routes error |
| Iskandar Muda Rizky Parlambang | 16521440 | Powerpoint |
| Tara Chandani Haryono | 16521428 | Powerpoint |
| Fajar Maulana H | 16521104 | Markdown |

## Code Structure (*Penting untuk panitia SPARTA)
Untuk updated code dapat dilihat di branch ```frontend``` dan branch ```backend``` dikarenakan src dalam bentuk folder, sulit untuk dimerge.

## Server (Conect to MongoDB):
- https://back-end-dor.herokuapp.com/
- https://back-end-dor.herokuapp.com/posts

## Application:
- https://dosenreview.herokuapp.com/

## PowerPoint : 
- https://itbdsti-my.sharepoint.com/:p:/g/personal/18221092_mahasiswa_itb_ac_id/ESQLlDFb0pVLhI4BJfiAzPABu7qqrYPXlwBB3XB-frg8Lg?e=L5VMeX

## Working Prototype : 
- https://www.figma.com/proto/x3EjwJEqmLBtAxVq5ue6K1/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2

## Implementasi Solusi :
Solusi yang kami buat merupakan website yang menampilkan ulasan dan opini yang telah mahasiswa rasakan saat belajar
bersama dosen terkait.

![alt text](https://github.com/bangkitdc/Milestone02_K13/blob/main/src/client/public/ss%20dor.jpg?raw=true)

Pada tampilan pertama, terdapat logo dari kelompok kami dan tombol sign in untuk melakukan sign in. Sebelum sign in,
user hanya bisa melakukan fitur pencarian nama dosen dan tags. Pencarian nama dosen mempermudah user untuk mengetahui 
ulasan dan opini mahasiswa terkait dosen tertentu sesuai dengan kata kunci yang diketik pada kolom pencarian sedangkan 
fitur tag mempermudah pencarian dosen berdasarkan tags seperti #fisika, #mtk, #cowo, dan lain lain.

![alt text](https://github.com/bangkitdc/Milestone02_K13/blob/main/src/client/public/ss%20loginpge%20dor.jpg?raw=true)
 
Seperti fitur login pada umumnya, user di minta untuk memasukkan email dan password. User juga bisa menggunakan
akun google sebagai alternatif. Untuk user yang belum mempunyai akun, bisa membuat akun terlebih dahulu dengan 
mengklik tombol sign up.


![alt text](https://github.com/bangkitdc/Milestone02_K13/blob/main/src/client/public/ss%20loginpge%20dor%202.jpg?raw=true)

Dalam form signup, user diminta untuk memasukkan nama depan dan belakang user, lalu email user serta password
yang ingin digunakan.

![alt text](https://github.com/bangkitdc/Milestone02_K13/blob/main/src/client/public/ss%20dor%202.jpg?raw=true)

Setelah login, muncul fitur baru yaitu membuat ulasan di bawah tulisan creating dosen dengan kolom Dosen* sebagai
nama dosen, deskripsi atau opini yang ingin diberikan, dan tags. Tombol choose file digunankan untuk mengupload
foto dosen terkait. Setelah semua kolom terisi, tekan tombol submit sehingga dapat terupload pada website.

