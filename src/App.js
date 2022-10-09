import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {NavbarComponents} from "./components";
import {
  BrowserRouter,
} from "react-router-dom";
//class components ketik rcc
export default class App extends Component {

    //buat constructur rconst
    // constructor(props) {
    //   super(props)
    // // data default yang ditampilkan yaitu Makanan 
    //   this.state = {
    //     menus:[],
    //     categorieYangDipilih: 'Makanan'
    //   }
    // }
    // //component didmount disni tempat memanggil API 
    // componentDidMount(){
    //   // api url di ambil di file constans yang pertama kali dijalankan pada state categorieYangDipilih
    //   axios.get(API_URL+'products?category.nama='+this.state.categorieYangDipilih)
    //   .then(res => {
    //     // data responen ini yang di API, di masukan ke dalam variabel menus
    //     const menus = res.data;
    //     this.setState({ menus });
    //   })
    //   //kalau gagal maka jalankan printah ini
    //   .catch(error =>{
    //     console.log("====>gagal menGET data API")
    //   })
    // }

    // //fungsi menangkap value yang dikirimkan dan menggubah isi dari this.state yang sebelumnya makanan
    // //menjadi isi value yang di tangkap
    // changeCategorie =(value)=>{
    //   this.setState({
    //     categorieYangDipilih: value,
    //     menus:[]
    //   })
    //   //lalu setelah berhasil mendapatkan isi value terbaru dari this.state categorieYangDipilih maka get
    //   // data API lagi sesuai dengan isi value
    //   axios.get(API_URL+'products?category.nama='+value)
    //   .then(res => {
    //     // data responen ini yang di API, di masukan ke dalam variabel menus
    //     const menus = res.data;
    //     this.setState({ menus });
    //   })
    //   //kalau gagal maka jalankan printah ini
    //   .catch(error =>{
    //     console.log("====>gagal menGET data API")
    //   })
    // }
  render() {
    //untuk menampilkan data api ke HTML
    // const {menus,categorieYangDipilih}=this.state;
    return (
    <div>
          {/* {console.log(this.state.menus)} */}

          <BrowserRouter>
          <NavbarComponents>
          </NavbarComponents>
          </BrowserRouter>
    </div>
    )
  }
}
