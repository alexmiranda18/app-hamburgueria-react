import React, { useState, useEffect, } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import H1 from "../../components/Title"
import Button from "../../components/button"
import { Container, Image, Order, Description } from "./styles"
import Avatar from '../../assets/saco-principal.svg'
import Trash from '../../assets/Trash.svg'

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fethUsers() {
      const { data: newOrders } = await axios.get("http://localhost:3001/command");
      setOrders(newOrders);
    }
    fethUsers();
  }, []);


  async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/command/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId)
    console.log()

    setOrders(newOrders);
  }
  function goBackPage() {
    navigate('/');
  }
  return (
    <Container>
      <Image alt="saco pedido" src={Avatar} />
      <H1 isBack={true}>Pedidos</H1>
      <ul>
        {orders.map((order) => (
          <Order key={order.id}>
            <Description>{order.order}</Description>
            <Description isBack={true}>{order.clientName}</Description>
            <button onClick={() => deleteUser(order.id)}>
              <img src={Trash} alt="lata-de-lixo" />
            </button>
          </Order>
        ))}
      </ul>

      <Button isBack={true} onClick={goBackPage}>
        Voltar
      </Button>


    </Container>
  );
}
export default Orders