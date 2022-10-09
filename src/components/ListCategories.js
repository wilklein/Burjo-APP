import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import axios from 'axios';
import {API_URL} from "../utils/Constants";
import {ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils,faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";

const Icon =({nama})=>{
  if(nama === "Makanan") return  <FontAwesomeIcon icon={faUtensils} style={{marginRight:15}}/>
  if(nama === "Minuman") return  <FontAwesomeIcon icon={faCoffee} style={{marginRight: 8}}/>
  if(nama === "Cemilan") return  <FontAwesomeIcon icon={faCheese} style={{marginRight: 15}} />
  return  <FontAwesomeIcon icon={[faCheese]} className="mr-2" />
}

export default class ListCategories extends Component {
  constructor(props) {
    super(props)
    this.state = {
       categories:[]
    }
  }
      //component didmount untuk mendapatkan data API data categori disni tempat memanggil API 
      componentDidMount(){
        // api url di ambil di file constans
        axios.get(API_URL +'categories')
        .then(res => {
          // data responen ini yang di API, di masukan ke dalam variabel menus
          const categories = res.data;
          this.setState({ categories });
        })
        //kalau gagal maka jalankan printah ini
        .catch(error =>{
          console.log("====>gagal menGET data API")
        })
      }

  render() {
    // menampilkan data kategori data API yang berhasil di get
    const {categories} = this.state;
    // merupakan data kiriman dari app.js
    const {changeCategorie,categorieYangDipilih} = this.props
    return (
      <Col md={3} mt={5}>
      <ListGroup as="ul" className='px-2'>
      <ListGroup.Item as="li" active>List Kategori Produk</ListGroup.Item>
       {categories && categories.map((categorie)=>(
        // mengirim sebuah perintah untuk nantinya dikirm ke app.js untuk di eksekuisi disana dengan fungsi
        //onclick jadi ketika user mengklik pilihan menu isi value akan disi sesuai dengan categorie.nama 
        //lalu nilai value ini di kirim ke app.js 
        //lalu jika category yang dipilih sama dengan categori nama maka akan ada css aktif
         <ListGroup.Item as="li" key={categorie.id} onClick={()=> changeCategorie(categorie.nama)} 
         className={categorieYangDipilih === categorie.nama && "category-aktif"} style={ {cursor:'pointer' }}>
          {/* pemanggilan icons */}
         <h6> <Icon nama={categorie.nama}/>{categorie.nama}</h6> 
          </ListGroup.Item>
       ))}
    </ListGroup>
        <hr/>
      </Col>
    )
  }
}
