import React, { useState, useRef } from "react";
import { useNavigate } from "react-router"
import H1 from '../../components/Title'
import Button from '../../components/button';
import axios from 'axios';
import { Container, InputLabel, Input, Image, ContainerItens,StyledInput } from "./styles";
import Principal from '../../assets/principal.svg';


const App = () => {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  const InputPedido = useRef();
  const InputName = useRef()


  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/command", { order: InputPedido.current.value, clientName: InputName.current.value });
console.log()
    setOrders([...orders, newOrder]);
    navigate('/order');
  }

  return (
    <Container>
      <Image alt="Logo principal burguer" src={Principal} />

      <ContainerItens isBlur={true}>
        <H1>Faça seu pedido!</H1>

        <InputLabel className="left-align">Pedido</InputLabel>
        <StyledInput ref={InputPedido} placeholder="Faça seu pedido aqui!" />

        <InputLabel className="left-align">Nome do Cliente</InputLabel>
        <Input ref={InputName} placeholder="Seu Nome!" />

        <Button onClick={addNewOrder}>
          Novo Pedido
        </Button>
      </ContainerItens>

    </Container>
  );
}
export default App