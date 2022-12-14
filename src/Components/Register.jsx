import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './register.css';
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import { Box} from "@mui/system";
import Footer from './Footer';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function Register() {
  const { Option } = Select;
const { id } = useParams();
const {data,error,loading}=useFetch(`http://localhost:8880/randonnes/rando`,"GET")
const [selected, setSelected] = useState(id)
const navigate =useNavigate();
const onSubmit=async(values)=>{
console.log(values)
try{
const res=  await axios.post(`http://localhost:8880/randonnes/particip`,{
    titleRando: values.hike,
    name: values.fullName,
    dataNais: values.dob,
    isNew: 1,
    numTelUser: values.tel,
    emailUser: values.email
  });
  if(res.status==200)
  { navigate('/');
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'inscription valide',
    showConfirmButton: false,
    timer: 1500
  })
}
} catch (err) {
  console.log(err);
}

}
  return (
    <div className="App bg" >
     <Navbar />
      <header className="App-header ">
      <Box sx={{ backgroundColor: "#FFF", minHeight: "120%",minWidth:"60vh",padding:"35px",
     borderRadius: "10px"}}>
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={onSubmit}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
      <Form.Item name="hike" label="Randonnee" requiredMark="optional">
            <Select defaultValue={id} placeholder="Choisir une randonnee">
            {data && data.map((hike) =><Select.Option value={hike.titreRandonnee}>{hike.titreRandonnee}</Select.Option>)}
            </Select>
        </Form.Item>
          <Form.Item
            name="fullName"
            label="Nom Complete"
            rules={[
              {
                required: true,
                message: "SVP entrer votre nom",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="saisie votre nom" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "SVL saisie votre nom",
              },
              { type: "email", message: "entrer un email valide" },
            ]}
            hasFeedback
          >
            <Input placeholder="saisie un email" />
          </Form.Item>
          <Form.Item
            name="tlf"
            label="numero de telephone"
            rules={[
              {
                required: true,
                message: "SVL saisie votre num de telephone",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="saisie votre num" />
          </Form.Item>

       
          <Form.Item name="gender" label="Sex" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "Pour continuer, vous devez accepter nos termes et conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Acceptez notre <a href="#">Termes et Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Enregistrer
            </Button>
          </Form.Item>
        </Form>
        </Box>
      </header>
    <Box style={{
      backgroundColor:"#FFF" 
    }}>
    <Footer />
    </Box>
    </div>
    
  );
}

export default Register;