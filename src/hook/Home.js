import React, { useEffect, useState } from "react";
import Form from "./Form";
import UserList from "./UserList";

function Home(){
    // const userList = [
    //     {
    //         id: 1, 
    //         key: 1,
    //         username: "bac",
    //         name: "Bac Truong",
    //         phone: "12345",
    //         email: "congbac@gmail.com",
    //         role: "khachhang",
    //     },
    //     {
    //         id: 2, 
    //         key: 2,
    //         username: "Hong",
    //         name: "Hong Loan",
    //         phone: "33445555",
    //         email: "hoangloan@gmail.com",
    //         role: "quantri",
    //     }
    // ];
    const [userList, setStateUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    // = > [state, setState]

    //didmount, didupdate, willunmount
    // useEffect( () => {
    //     console.log('test useEffect');
    // });
    function createUser(user){
            const foundUser = userList.find((item) => {
               return item.username === user.username;
            })
        if(foundUser) return alert("Ten tai khoan da ton tai");
        setStateUserList([...userList,user]);
   
    }
    function deleteUser(id){
        const cloneUserList = [...userList];
        const index = cloneUserList.findIndex((user) => user.id === id);
        if (index === -1) return;
        cloneUserList.splice(index, 1);

        setStateUserList(cloneUserList);
    }
    function getUpdateUser(user){
        setSelectedUser(user);
    }
    function updateUser(user){
        const cloneUserList = [...userList];
        const index = cloneUserList.findIndex((item) => item.id === user.id);
        if (index === -1) return;
        cloneUserList[index] = user;
        setStateUserList(cloneUserList);
        setSelectedUser(null);
    }
    return (
        <div>
            <Form  updateUser = {updateUser} selectedUser ={selectedUser} createUser = {createUser}/>
            <UserList getUpdateUser ={getUpdateUser} users = {userList} deleteUser = {deleteUser}/>
        </div>
    )
}

export default Home;