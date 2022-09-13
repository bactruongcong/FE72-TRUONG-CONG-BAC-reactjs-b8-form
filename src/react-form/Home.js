import { Button } from 'antd';
import React, { useState } from 'react';
import Form from './Form';
import UserList from './UserList';
import {useDispatch, useSelector} from "react-redux";




function Home(props) {
    // const [studentList, setStudentList] = useState([]);
    const studentList = useSelector(state => state.student.studentList);
    const dispatch = useDispatch();

    // function createStudent(student){
    //     const foundStudent = studentList.find( (item) => {return item.id === student.id});
    //     if(foundStudent) return alert("Tài khoản tồn tại");
    //     dispatch({
    //         type: "CREATE_STUDENT",
    //         payload: student,
    //     })
     
    // }
    function deleteStudent(id){
        // const cloneStudentList = [...studentList];
        // const index = cloneStudentList.findIndex( (item) => {
        //     return item.id === id;
        // });
        // if(index === -1) return;
        // cloneStudentList.splice(index, 1);
        // setStudentList(cloneStudentList);
    }
    
  
    return (
        <div>
            <Form/>
            <UserList/>
        </div>
    );
}

export default Home;