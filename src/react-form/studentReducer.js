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
            if(index2 === -1) return alert("Khong co id");
            cloneStudentList2[index2] = action.payload.student;
            return {...currentState, studentList: cloneStudentList2};   
        default:
            return currentState;
    }
}
export default reducer;