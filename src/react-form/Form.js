import React, { useState } from 'react';
import {Card, Input, Button} from 'antd';
import style from './style.module.css';
import {useDispatch, useSelector} from "react-redux";

function Form(props) {
    const studentList = useSelector(state => state.student.studentList);    
    const dispatch = useDispatch();
    const [student, setStudent] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
    });
    function handleChange(e){
       setStudent({...student, [e.target.name] : e.target.value}); 
            // dispatch({
            //     type: "UPDATE_STUDENT",
            //     payload: {...student,[e.target.name] : e.target.value},
                
            // })
    }
    function handleSubmit(){
     const foundStudent = studentList.find( (item) => {return item.id === student.id});
            if(foundStudent) return alert("Tài khoản tồn tại");
            dispatch({
                type: "CREATE_STUDENT",
                payload: student,
            })
    }
   
    return (
        <Card 
        title="Thông tin sinh viên"
        headStyle={
            {
                backgroundColor: "#000000",
                color: "#fff",
            }
        }
        >
            <form className={style.formGroup}>
                <div className={style.formItem}>
                    <label>Mã SV</label>
                    <Input name="id" onChange={handleChange} placeholder="Nhập mã sinh viên"></Input>
                </div>
                <div className={style.formItem}>
                    <label>Họ Tên</label>
                    <Input name="name" onChange={handleChange} placeholder="Nhập họ tên"></Input>
                </div>
                <div className={style.formItem}>
                    <label>Số điện thoại</label>
                    <Input  name="phone" onChange={handleChange} placeholder="Nhập số điện thoại"></Input>
                </div>
                <div className={style.formItem}>
                    <label>Email</label>
                    <Input name="email" onChange={handleChange} placeholder="Nhập Email"></Input>
                </div>
                <div className={`${style.btn} + ${style.formItem}`}>
                <Button onClick={handleSubmit} type="primary">Thêm sinh viên</Button>
                </div>
                
            </form>
        
        </Card>
    );
}

export default Form;