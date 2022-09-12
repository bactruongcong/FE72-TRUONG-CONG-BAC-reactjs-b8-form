import React, { useState } from 'react';
import {Card, Table, Button, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";

const {Search} = Input;
function UserList(props) {
    const studentList = useSelector(state => {
        
        if(state.fillter.name != ""){
          return state.student.studentList.filter(item => item.name.includes(state.fillter.name));
        }else{
            return state.student.studentList
        }
       
    });
    const [searchName, setSearchName] = useState("");
    const dispatch = useDispatch();
    function getSelectStudent(student){
        dispatch({
            type: "CREATE_STUDENT_SELECTED",
            payload: student,
        })
    }
    const columns = [
        {
            title: "Mã SV",
            dataIndex: "id",
        },
        {
            title: "Họ Tên",
            dataIndex: "name",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, student) => {
                return <>
                    <Button onClick={() => getSelectStudent(student)}>Chỉnh xửa</Button>
                    <Button onClick={() => deleteStudent(student.id)}>Xóa</Button>
                </>
                  
              
            }
        }
    ]
    function deleteStudent(id){
        dispatch({
            type: "DELETE_STUDENT",
            payload: id,
        })
    }
    function handleSearchOnchange(e){
        setSearchName(e.target.value);
        dispatch({
            type: "CREATE_STUDENT_FILLTER",
            payload: e.target.value,
        })
    }
    return (
        <Card 
        title="Danh sách sinh viên"
        headStyle={
            {
                backgroundColor: "#000000",
                color: "#fff",
            }
        }
        >
        <Search
        placeholder="Tìm kiếm theo họ tên sinh viên"
        allowClear
        onChange={handleSearchOnchange}
        style={{
            width: 200,
            textAlign: 'center',
        }}
        />
        <Table dataSource={studentList?.map( (student) =>{
            return {...student, key: student.id}
        } )} columns={columns} />
        </Card> 
    );

    }
export default UserList ;