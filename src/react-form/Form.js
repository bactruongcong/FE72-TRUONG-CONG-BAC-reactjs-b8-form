import React, { useEffect, useState } from 'react';
import {Card, Input, Button} from 'antd';
import style from './style.module.css';
import {useDispatch, useSelector} from "react-redux";

function Form(props) {
    const studentList = useSelector(state => state.student.studentList);   
    const studentSelected = useSelector(state => state.studentSelect.student);    
    const dispatch = useDispatch();
    const [student, setStudent] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
    });
    useEffect(() => {
     setStudent(studentSelected);
    },[studentSelected]);
    function handleChange(e){
       setStudent({...student, [e.target.name] : e.target.value}); 
            // dispatch({
            //     type: "UPDATE_STUDENT",
            //     payload: {...student,[e.target.name] : e.target.value},
                
            // })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(studentSelected.id != "" ){
             dispatch({
                type: "UPDATE_STUDENT",
                payload: {id: studentSelected.id, student: student},
                
            })
            setStudent({
                id: "",
                name: "",
                phone: "",
                email: "",
            });
            dispatch({
                type: "UPUDATE_STUDENT_SELECTED",       
            })
            
        }else{
            const foundStudent = studentList.find( (item) => {return item.id === student.id});
            if(foundStudent) return alert("Tài khoản tồn tại");
            dispatch({
                type: "CREATE_STUDENT",
                payload: student,
            })
            setStudent({
                id: "",
                name: "",
                phone: "",
                email: "",
            });
        }
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
            <form onSubmit={handleSubmit} className={style.formGroup}>
                <div className={style.formItem}>
                    <label>Mã SV</label>
                    <Input value={student.id} name="id" onChange={handleChange} placeholder="Nhập mã sinh viên"></Input>
                </div>
                <div className={style.formItem}>
                    <label>Họ Tên</label>
                    <Input value={student.name} name="name" onChange={handleChange} placeholder="Nhập họ tên"></Input>
                </div>
                <div className={style.formItem}>
                    <label>Số điện thoại</label>
                    <Input  value={student.phone} name="phone" onChange={handleChange} placeholder="Nhập số điện thoại"></Input>
                </div>
                <div className={style.formItem}>
                    <label>Email</label>
                    <Input  value={student.email} name="email" onChange={handleChange} placeholder="Nhập Email"></Input>
                </div>
                <div className={`${style.btn} + ${style.formItem}`}>
                <Button htmlType="submit" type="primary">{studentSelected.id != "" ? "CẬP NHẬT THÔNG TIN" : "THÊM SINH VIÊN"}</Button>
                </div>
                
            </form>
        
        </Card>
    );
}

export default Form;