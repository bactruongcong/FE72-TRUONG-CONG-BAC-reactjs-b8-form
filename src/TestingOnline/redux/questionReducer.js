
const initialstate = {
    questionList: [],

}

const reducer = function(currenState = initialstate, action){
    //nhan action , chinh sua state hien tai
    // return ve state moi 
    switch(action.type){
        case "UPDATE_QUESTION_LIST":
             currenState.questionList = action.payload;
             return {...currenState};
        default:
            return currenState;
    }

    
}
export default reducer;