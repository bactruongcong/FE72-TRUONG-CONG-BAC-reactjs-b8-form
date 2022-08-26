import React from "react";
import UserItem from "./UserItem";
import {Card, Table, Button} from "antd";

function UserList(props){
    
    const columns = [
        {
            title: "STT",
            dataIndex: "id",
        },
        {
            title: "Tài Khoản",
            dataIndex: "username",
        },
        {
            title: "Họ Tên",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
        },
        {
            title: "Mã loại người dùng",
            dataIndex: "role",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, user) => {
                return <>
                <Button onClick={() => props.getUpdateUser(user)}>Chỉnh Sửa</Button>
                <Button onClick={() => props.deleteUser(user.id)}>Xóa</Button>
                </>
            }
        }
    ]
    return (
        <Card 
        title="Danh sách người dùng"
        headStyle={{
            backgroundColor: "#000000",
            color: "#fff"
        }}>
            <Table dataSource={props.users.map((user) =>{
                return ({...user, key: user.id})
            })} columns={columns} />
        </Card>
    )
}

export default UserList;