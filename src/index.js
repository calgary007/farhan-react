import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const heading = <h1>This is part1</h1>;
const detail = <div>
  <p>This is first paragraph for part2</p>
  <p>This is second paragraph for part2</p>
</div>

const part3 = React.createElement(
  'h3',
  {className: 'greeting' /* this is a comment*/},
  'I am part3 I have a hidden comment'
);

const part4 = <div>I am part 4, but you couldn't have seen previous parts without me</div>;

const part5 = <div className="border">part 5 with a class</div>;

const part6 = <div>In JSX all tags must be closed. self closing tags like &lt;br&gt; must be writtne with a slash like &lt;br /&gt; Now we will put some line breaks<br /> <br /> end of part 6</div>

const Part7 = function () {
  return (
    <div>Part7 this returns a div</div>
  )
};

class Part8 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>It returns this div</div>
    )
  }
};

const ListComponent = () => {
  return (
    <ul>
      <li> list element 1</li>
      <li> second list element</li>
      <li>third list element</li>
    </ul>
  )
}

class Part9 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h2>It returns this div</h2>
        <p> this is a paragraph </p>
        <ListComponent />
      </div>
    )
  }
};

const NestedFunction = () => {
  return (
    <ListComponent />
  )
};

class NestedFunctionClass extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div> I have a nested function inside </div>
        <NestedFunction />
      </div>
    )
  }
}

ReactDOM.render(
  heading,
  document.getElementById('part1')
);

ReactDOM.render(
  detail,
  document.getElementById('part2')
);

ReactDOM.render(
  part3,
  document.getElementById('part3')
);

ReactDOM.render(
  part4,
  document.getElementById('part4')
);

ReactDOM.render(
  part5,
  document.getElementById('part5')
);

ReactDOM.render(
  part6,
  document.getElementById('part6')
);

ReactDOM.render(
  Part7,
  document.getElementById('part7')
);

ReactDOM.render(
  Part8,
  document.getElementById('part8')
);