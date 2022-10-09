import React from 'react'
import { Col,Card,Button } from 'react-bootstrap';
import {numberWithCommas} from '../utils/NumberFormat'
// class components
// menerima kiriman data API dari app js dengan pram menu
export const Menus = ({menu}) => {
  return (
    <Col md={4} xs={6} className="mb-4 mt-4 ">
      <Card className='shadow' >
      <Card.Img variant="top" src={
        "assets/images/"
        +menu.category.nama
        +"/"+menu.gambar}
         />
      <Card.Body>
        <Card.Title style={{fontSize: 15}}>{menu.nama} <strong>{menu.kode}</strong></Card.Title>
        <Card.Text>Rp.
        {numberWithCommas(menu.harga)}
        </Card.Text>
        <Button variant="primary">Beli</Button>
      </Card.Body>
    </Card>
</Col>
  )
}

export default Menus;