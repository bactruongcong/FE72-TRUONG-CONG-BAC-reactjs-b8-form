import React from 'react';
import {Card, Table, Button} from 'antd';
import {useDispatch, useSelector} from "react-redux";

function UserList(props) {
    const studentList = useSelector(state => state.student.studentList);
    const dispatch = useDispatch();
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
                    <Button>Chỉnh xửa</Button>
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
    
        <Table dataSource={studentList.map( (student) =>{
            return {...student, key: student.id}
        } )} columns={columns} />
        </Card> 
    );

    }
export default UserList ;