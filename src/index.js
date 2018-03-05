import React from "react";
import { render } from "react-dom";
import "./index.css";

const Student = props => {
  return (
    <li>
      <span />
      <span>{props.rating}</span>
      <span />
      <span>{props.name}</span>}
      <button onclick={() => props.inc(props.name)}>+</button>
      <button>-</button>
    </li>
  );
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newStudent: "",
      students: [
        { name: "a", rating: 2 },
        { name: "b", rating: 3 },
        { name: "c", rating: 4 }
      ]
    };
  }
  renderStudents() {
    const students = this.state.students;
    const studentsHtml = students.map(student => {
      return <Student key={student.name} inc={this.increment} {...student} />;
    });
    return studentsHtml;
  }
  increment = name => {
    const index = this.state.students.findIndex(
      student => student.name === name
    );
    if (index < 0) {
      return;
    }
    const student = this.state.students[index];
    student.rating = student.rating + 1;
    this.setstate.students[index] = student;
    this.setstate({ students: this.state.students });
  };
  onChange = event => {
    const newStudent = event.target.value;
    this.setState({ newStudent });
  };
  onSubmit = event => {
    event.preventDefault();
    const name = this.state.newStudent;
    const rating = 0;
    const student = { name, rating };
    const students = [...this.state.students, student];
    this.setState({ students });
  };
  render() {
    return (
      <div className="wrappar">
        <div>
          <div className="section">student rate app</div>
          <div className="section">search</div>
          <div className="section">
            <ul>{this.renderStudents()}</ul>
          </div>
          <div className="section">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                onChange={this.onChange}
                value={this.state.newStudent}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
