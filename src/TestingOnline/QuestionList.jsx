import React, { PureComponent } from "react";
import FillInBlank from "./FillInBlank";
import MultipleChoice from "./MultipleChoice";
import { connect } from "react-redux";

export class QuestionList extends PureComponent {
  render() {
    console.log("render question list");
    return (
      <div>
        {this.props.questionList?.map((item, index) => {
          if (item.questionType === 1) {
            return (
              <MultipleChoice key={item.id} question={item} index={index + 1} />
            );
          }
          return (
            <FillInBlank key={item.id} question={item} index={index + 1} />
          );
        })}
        {this.props.anwserList.map( (item) => {
          return <div>
            <h1>{item.questionId}</h1>
          </div>
        })}
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    //propName: state
    questionList: state.question.questionList,
    anwserList: state.anwser.testAnwsers,

  }
}
export default connect(mapStateToProps)(QuestionList);

// class Student {
//   constructor() {
//     this.fullName = "hieu";
//   }

//   static showName() {
//     console.log(this.fullName);
//   }
// }

// Student.showName();

// var studen1 = new Student();
