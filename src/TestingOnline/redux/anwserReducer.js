const initialstate = {
    testAnwsers: [],
};

const reducer = function (currenState = initialstate, action){
    switch (action.type){
        case "UPDATE_ANSWER":
            const cloneTestAnwser = [...currenState.testAnwsers];
            const foundAnswer = cloneTestAnwser.find(
                (item) => item.questionId === action.payload.questionId
            );
            if(foundAnswer){
                foundAnswer.answerId = action.payload.answerId;
            }else{
                cloneTestAnwser.push(action.payload);
            }
            return {...currenState, testAnwsers: cloneTestAnwser};
        default:
            return currenState;
    }
}
export default reducer;