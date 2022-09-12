const initialState = {
    name: ""
}
//tạo reducer
const reducer = function(currentState = initialState, action){
    // nhận action , chỉnh sửa currentState
    //return newState
    switch(action.type){
        case "CREATE_STUDENT_FILLTER":
            return {...currentState, name: action.payload};
        default:
            return currentState;
    }
}
export default reducer;