const initialState = {
    student: {
        id: "",
        name: "",
        phone: "",
        email: "",
    },
}
//tạo reducer
const reducer = function(currentState = initialState, action){
    // nhận action , chỉnh sửa currentState
    //return newState
    switch(action.type){
        case "UPDATE_STUDENT":
            return currentState;
         
        default:
            return currentState;
    }
}
export default reducer;