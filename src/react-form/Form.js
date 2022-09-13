import React, { useEffect, useState } from 'react';
import {Card, Input, Button} from 'antd';
import style from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import * as yup from 'yup';
import isEmpty from 'lodash.isempty';

const userSchema = yup.object().shape({
        id: yup.string().required("*Vui lòng nhập mã sinh viên "),
        name: yup.string().required("*Vui lòng nhập họ tên").matches(/^[A-Za-z-\s]+$/g, "*Họ tên phải nhập chữ"),
        phone: yup.string().required("*Vui lòng nhập phone").matches(/^[0-9]+$/g, "*Nhập định dạng số"),
        email: yup.string().required("*Vui lòng nhập email").email("Email không đúng định dạng abc@gmail.com"),
});

function Form(props) {
    const studentList = useSelector(state => state.student.studentList);   
    const studentSelected = useSelector(state => state.studentSelect.student);    
    const dispatch = useDispatch();
    const [error, setError] = useState([]);
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
   async function handleSubmit(e){
        e.preventDefault();
        const isval = await validateForm();
        if(!isval) return;
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
            setError([]);
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
            setError([]);
        }
    }
    async function validateForm(){
        const validationErrors = {};
        try{
            await userSchema.validate(student, {abortEarly: false});
        }catch(err){
            const errorObjec = {...err};
            errorObjec.inner.forEach( validationError => {
                if(validationErrors[validationError.path]) return;
                validationErrors[validationError.path] = validationError.message;
            });
           setError(validationErrors);
        }
        return isEmpty(validationErrors);
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
                    {studentSelected.id =="" ?  <Input value={student.id} name="id" onChange={handleChange}  placeholder="Nhập mã sinh viên"></Input> :  <Input value={student.id} name="id" onChange={handleChange} disabled placeholder="Nhập mã sinh viên"></Input>} 
                   
                    <span style={{ color: 'red'}}>{error.id}</span>
                </div>
                <div className={style.formItem}>
                    <label>Họ Tên</label>
                    <Input value={student.name} name="name" onChange={handleChange} placeholder="Nhập họ tên"></Input>
                    <span style={{ color: 'red'}}>{error.name}</span>
                </div>
                <div className={style.formItem}>
                    <label>Số điện thoại</label>
                    <Input  value={student.phone} name="phone" onChange={handleChange} placeholder="Nhập số điện thoại"></Input>
                    <span style={{ color: 'red'}}>{error.phone}</span>
                </div>
                <div className={style.formItem}>
                    <label>Email</label>
                    <Input  value={student.email} name="email" onChange={handleChange} placeholder="Nhập Email"></Input>
                    <span style={{ color: 'red'}}>{error.email}</span>
                </div>
                <div className={`${style.btn} + ${style.formItem}`}>
                <Button htmlType="submit" type="primary">{studentSelected.id != "" ? "CẬP NHẬT THÔNG TIN" : "THÊM SINH VIÊN"}</Button>
                </div>
                
            </form>
        
        </Card>
    );
}

export default Form;