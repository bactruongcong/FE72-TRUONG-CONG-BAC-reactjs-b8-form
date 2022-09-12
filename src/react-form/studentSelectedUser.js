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
        case "CREATE_STUDENT_SELECTED":
            return {...currentState, student: action.payload};
        case "UPUDATE_STUDENT_SELECTED":
            return {...currentState, student: {
                id: "",
                name: "",
                phone: "",
                email: "",
            }};
        default:
            return currentState;
    }
}
export default reducer;