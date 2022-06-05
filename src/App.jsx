import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats, Chat } from "./components/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  // 3
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question",
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };

  selectAnswer = (selectAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        this.displayNextQuestion(nextQuestionId);
        break;
      default:
        const chats = this.state.chats;

        chats.push({
          text: selectAnswer,
          type: "answer",
        });

        this.setState({
          chats: chats,
        });

        this.displayNextQuestion(nextQuestionId);
        break;
    }
  };

  // 2
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  // 1
  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
        </div>
      </section>
    );
  }
}

// export default App;
