import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import { Input, Select, Button } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import style from "./form.module.css";


function Form(props){
    const [user, setUser] = useState([
        {
            id: "",
            username: "",
            password:"",
            name: "",
            email: "",
            phone: "",
            role: "",
        },
        
    ]);
    useEffect(() =>{
        if(!props.selectedUser) return;
        if(props.selectedUser.id === user.id) return;
        setUser(props.selectedUser); 
    }, [props.selectedUser])
    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value});
    }
    function handleSelect(name,value){
        setUser({...user, [name]: value});
    }
    function handleSubmit(e){ 
      e.preventDefault();
      if(props.selectedUser){
        props.updateUser(user);
       
      }else{
        props.createUser({...user, id: Math.floor(Math.random()*100 + 1)});
        
        }
    resetForm();
    }
    function resetForm(){
        setUser({
            id: "",
            username: "",
            password:"",
            name: "",
            email: "",
            phone: "",
            role: "",
        });
    }
    return <Card
    title="Form Sign Up"
    headStyle={{
        backgroundColor: "#000000",
        color: "#fff"
    }}
  >
    <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formGroup}>
            <label>Tài khoản</label>
            <Input value={user.username}name="username" onChange={handleChange} placeholder="Nhập tài khoản" prefix={<UserOutlined />}/>
        </div>
        <div className={style.formGroup}>
            <label>Mật khẩu</label>
            <Input value={user.password} name="password" onChange={handleChange} placeholder="Mật khẩu" type="password" prefix={<UserOutlined />}/>
        </div>
        <div className={style.formGroup}>
            <label>Số điện thoại</label>
            <Input value={user.phone} name="phone" onChange={handleChange} placeholder="Số điện thoại" prefix={<UserOutlined />}/>
        </div>
        <div className={style.formGroup}>
            <label>Email</label>
            <Input value={user.email} name="email" onChange={handleChange} placeholder="Email" prefix={<UserOutlined />}/>
        </div>
        <div className={style.formGroup}>
            <label>Họ tên</label>
            <Input  value={user.name} name="name" onChange={handleChange} placeholder="Họ tên" prefix={<UserOutlined />}/>
        </div>
        <div className={style.formGroup}>
            <label>Mã loại người dùng</label>
            <Select value={user.role} onChange={(val) => handleSelect("role",val)}style={{
                width: 300,
            }}>
                <Select.Option value="Khách hàng">Khách hàng</Select.Option>
                <Select.Option value="Quản trị">Quản trị</Select.Option>
            </Select>
        </div>
        <div className={style.btn}>
             <Button htmlType="submit" type="primary">Submit</Button>
             <Button onClick={resetForm} type="default">Reset</Button>
        </div>
    </form>
  </Card>
}

export default Form;