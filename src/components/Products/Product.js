import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import {Hasil,ListCategories, Menus} from "../../components";
import {API_URL} from "../../utils/Constants";
import axios from 'axios';
export default class Product extends Component {
     //buat constructur rconst
     constructor(props) {
        super(props)
      // data default yang ditampilkan yaitu Makanan 
        this.state = {
          menus:[],
          categorieYangDipilih: 'Makanan'
        }
      }
      //component didmount disni tempat memanggil API 
      componentDidMount(){
        // api url di ambil di file constans yang pertama kali dijalankan pada state categorieYangDipilih
        axios.get(API_URL+'products?category.nama='+this.state.categorieYangDipilih)
        .then(res => {
          // data responen ini yang di API, di masukan ke dalam variabel menus
          const menus = res.data;
          this.setState({ menus });
        })
        //kalau gagal maka jalankan printah ini
        .catch(error =>{
          console.log("====>gagal menGET data API")
        })
      }
  
      //fungsi menangkap value yang dikirimkan dan menggubah isi dari this.state yang sebelumnya makanan
      //menjadi isi value yang di tangkap
      changeCategorie =(value)=>{
        this.setState({
          categorieYangDipilih: value,
          menus:[]
        })
        //lalu setelah berhasil mendapatkan isi value terbaru dari this.state categorieYangDipilih maka get
        // data API lagi sesuai dengan isi value
        axios.get(API_URL+'products?category.nama='+value)
        .then(res => {
          // data responen ini yang di API, di masukan ke dalam variabel menus
          const menus = res.data;
          this.setState({ menus });
        })
        //kalau gagal maka jalankan printah ini
        .catch(error =>{
          console.log("====>gagal menGET data API")
        })
      }
  render() {
    //untuk menampilkan data api ke HTML
    const {menus,categorieYangDipilih}=this.state;
    return (
    <div>
          {/* {console.log(this.state.menus)} */}
        <Row className='mt-4' >
          {/*setlah mendapatkan value dari listcategory selanjutnya  mengoper isi value tersebut ke
          fungsi categorieYangDipilih dan membuat sebuah prop changeCategorie untuk dikirim
          ke listcategory */}
        <ListCategories changeCategorie={this.changeCategorie} categorieYangDipilih={categorieYangDipilih}></ListCategories>
        <Col>
        <h4>Daftar Produk</h4>
        {/*  */}
        <Row>
          {
            // ARTI && JIKA MENUS ITU ADA MAKA KITA AKAN MAPING MENUSNYA
            menus && menus.map((menu)=> (
            //  menggirim kan data ke componenets menu
            <Menus
             key={menu.id}
             menu={menu}>
             </Menus>
            ))}
        </Row>
        <hr/>
        </Col>
        <Hasil></Hasil>
        </Row>
    </div>
    )
  }
}
