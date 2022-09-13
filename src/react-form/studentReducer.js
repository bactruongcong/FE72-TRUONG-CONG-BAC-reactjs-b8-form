const initialState = {
    studentList: [],
}

//tạo reducer
const reducer = function(currentState = initialState, action){
    // nhận action , chỉnh sửa currentState
    //return newState
    switch(action.type){
        case "CREATE_STUDENT":
            const newList = [...currentState.studentList]
            newList.push(action.payload);
            return {...currentState, studentList: newList};
        case "DELETE_STUDENT":
            const cloneStudentList = [...currentState.studentList]
            const index = cloneStudentList.findIndex( (item) => {
                return item.id === action.payload;
            });
            if(index === -1) return;
            cloneStudentList.splice(index, 1);
            return {...currentState, studentList: cloneStudentList};    
        case "UPDATE_STUDENT":
            const cloneStudentList2 = [...currentState.studentList]
            const index2 = cloneStudentList2.findIndex( (item) => {
                return item.id === action.payload.id;
            });
            if(index2 === -1) return;
            console.log(action.payload.student.id);
            const {name, phone, email} = action.payload.student;
            cloneStudentList2[index2] = {...cloneStudentList2[index2],name,phone,email};
            
            return {...currentState, studentList: cloneStudentList2};   
        default:
            return currentState;
    }
}
export default reducer;