
import Card from './komponen/Card'
import "./App.css"


function App() {
  const galaksi = [
    {
      nama: "Bima Sakti",
      gambar: "https://asset.kompas.com/crops/OwmIzBmt1ZPqnYIkFKaL6Pl_1zY=/0x24:650x458/750x500/data/photo/2019/10/21/5dadb89d3de01.jpg",
      deskripsi: "Ditemukan pada 18 Juli 1783. Dalam galaksi ini ada planet Bumi yang dihuni manusia. Galaksi ini terdiri dari 400 miliar bintang lebih dengan garis tengah sekitar 130 ribu tahun cahaya.",
      propertiLain: "Berasal dari tokoh berkulit hitan dalam Pewayangan : Bima"
    },
    {
      nama: "Andromeda",
      gambar: "https://asset.kompas.com/crops/L5datmumIDBgUL3fL9qrywmqM7M=/0x0:780x390/780x390/data/photo/2013/08/20/0943463aliran-gas-magellan780x390.jpg",
      deskripsi: "Ditemukan pada awal 965 M dan ditemukan kembali pada 1612. Diameter : hampir 200 ribu tahun cahaya dan terletak sekitar 2.480.000 tahun cahaya dari Bumi",
      propertiLain: "disebut juga Andromeda Nebula"
    },
    {
      nama: "Magelan",
      gambar: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/13122059/small-magellan.jpg",
      deskripsi: "Galaksi ini dibagi 2 jenis, Awan Magellan Besar dan Kecil yang jaraknya 160.000 tahun cahaya. Magellan mengorbit pada satelit Galaksi Bima Sakti. Ukurannya mencapai 14.00 tahun cahaya",
      propertiLain: "Abad ke-20 diaki sebagai obyek pendampung galaksi Bima Sakti"
    },
    {
      nama: "Sombrero",
      gambar: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/13122049/sombrero-galaxy-300x168.jpg",
      deskripsi: "Bentuk galaksi ini adalah spiral dan terlihat seperti topi sombrero, maka dari itu dinamakan demikian. Nama lain dari Galaksi Sombrero ini adalah Messier 104 (M104), yang terletak di sekitar 28 juta tahun cahaya dari galaksi kita. Inti pada galaksi ini sangat cerah, yakni pada pusat tonjolannya yang besar dan di bagian tengah dikelilingi debut.",
      propertiLain: "Pada tonjolan besar tersebut diperkirakan sebagai pusat lubang hitam supermasif, sementara jalur debunya sangat menarik perhatian para astronom profesional."
    },
    {
      nama: "The Rose",
      gambar: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/13122034/the-rose-galaxy-240x300.jpg",
      deskripsi: "Sebenarnya, galaksi The Rose ini terdiri dari 2 galaksi yakni UGC 1810 dan UGC 1813. Pada UGC 1810 ini berukuran besar dan memiliki cakram yang membentuk menyerupai bunga mawar. Kemudian UGC 1810 yang berada di bawah UGC 1810 ini berbentuk lebih kecil dan bahkan menunjukkan tanda-tanda berbeda dari proses pembentukan bintang aktif pada umumnya.",
      propertiLain: "Galaksi ini disebut demikian sebab bentuknya seperti bunga mawar dan berada di rasi bintang Andromeda."
    }
  ]

   
  return (
    <>
    <div className="container">
        {/* // List Rendering */}
      {galaksi.map((value,index)=>{
        return <Card key ={index}  foto = {value.gambar} namaGalaksi = {value.nama} des= {value.deskripsi} />
       })}
    </div>
   </>
  )
}

export default App
