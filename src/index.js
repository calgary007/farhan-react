import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

// Part - 11: Compose React Components
// lets do some deep nesting 

class Mammals extends React.Component {
  render() {
    return (
      <div>
        <h3>Mammals:</h3>
          <h4> Meat Eaters </h4>
          <MeatEaters/>
          <h4> Vegetarians </h4>
          <Vegetarians />

	   	  { /* change code above this line */ }
      </div>
		)
	}
};

class Reptiles extends React.Component {
  render() {
    return (
      <div>
        <h3>Reptiles:</h3>
        <ul>
        <li>Turtle</li>
        <li>Crocodile</li>  
        </ul>
      </div>
		)
	}
};

const MeatEaters = () => {
  return (
    <ul>
      <li>Tiger</li>
      <li>Hawk</li>
      <li>Farhan</li>
      <li>Shark</li>
    </ul>
  )
}

const Vegetarians = () => {
  return (
    <ul>
      <li>Cow</li>
      <li>Sakshi</li>
      <li>Goat</li>
    </ul>
  )
}

class Animals extends React.Component{
  render() {
    return(
      <div>
        <h2>Animals</h2>
          <Mammals />
          <Reptiles />
      </div>
    )
  }
};

//now lets render it
ReactDOM.render(<Animals />,  document.getElementById('part11'));


// Part - 12: Render a Class Component to the DOM
// basically we have been doing this all along. in part-11 we have done this already
// lets make a simple component while we are at it

class Heading extends React.Component {
  render() {
    return(
      <h2>Heading for the info block</h2>
    );
  }
};

class Paragraph extends React.Component {
  render() {
    return(
      <p>This is the paragraphfor the info block</p>
    );
  }
};

class Cta extends React.Component {
  render() {
    return(
      <button>Info Block Button</button>
    )
  }
}


class InfoBlock extends React.Component {
  render() {
    return(
      <div> 
        {/*Must be wrapped in something because Adjacent JSX elements must be wrapped in an enclosing tag*/}
        <Heading />
        <Paragraph />
        <Cta />
      </div>
    )
  }
}

// Now lets render it
ReactDOM.render(<InfoBlock />, document.getElementById('part12'));
// Part - 13: Write a React Component from Scratch
// this has been done in above parts
const repeated = "This part was covered in previous examples"
ReactDOM.render(repeated, document.getElementById('part13'));
//Part - 14: Pass Props to a Stateless Functional Component
const HeadingFunction = (props) =>{
  const {level, text} = props.headingData;
  const TagName = 'h' + level;
  return(
    <TagName>{text}</TagName>
  )
}

class HeadingClass extends React.Component{
  render (){
    const data = {
      text: "Some Heading Text",
      level: 4
    };    
    return(
      <div>
        <HeadingFunction headingData={data} />
      </div>
    )
    
  }
}
// Now lets render it
ReactDOM.render(<HeadingClass />, document.getElementById('part14'));

//Part - 15: Pass an Array as Props
// basically something similar to above we did in 14

const ArrayExample = (props) =>{
  const passedArray = props.data.join(', ')
  return(
    <div>{passedArray}</div>
  )
}

class ArrayExampleClass extends React.Component{
  render (){
    /*this time rather than defining a constant we will pass it directly*/
    return(
      <ArrayExample data={['Farhan', 'Tiger', 'Hawk', 'Shark']} />
    )
  }
}

// Now lets render it
ReactDOM.render(<ArrayExampleClass />, document.getElementById('part15'));


// Part-16 Use Default Props
const HeadingFunctionWithDefaultLevel = (props) =>{
  const Tag = 'h' + props.level;
  return(
    <Tag>{props.text}</Tag>
  )
}
HeadingFunctionWithDefaultLevel.defaultProps = {
  level: 2
}
//now lets render it

ReactDOM.render(<HeadingFunctionWithDefaultLevel text="I am a heading my default level is 2"/>,document.getElementById('part16'))

//Part-17 Override Default Props
//lets just override the default heading level in previous example
//lets redner it
ReactDOM.render(<HeadingFunctionWithDefaultLevel level={3} text="I am a heading my default level is changed"/>,document.getElementById('part17'))

//Part-18 Use PropTypes to Define the Props You Expect
// for the headingfunction we require that level must be a number between 1-6
// text must be a string and is required

HeadingFunctionWithDefaultLevel.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  text: PropTypes.string.isRequired
}
// if we try to render it without the text it will be error, so lets render it with correct data
ReactDOM.render(<HeadingFunctionWithDefaultLevel level={4} text="I won't render if i had a problem"/>,document.getElementById('part18'))

//Part 19 Access Props Using this.props
//lets set a prop in a class and then access it in other class

class IwillTakeValue extends React.Component{
  render() {
    return(
      <div>I was passed this date value <b>{this.props.date}</b> from another place</div>
    )
  }
}

class IwillPassValue extends React.Component{
  render(){
    return(
      <IwillTakeValue date={Date()} />
    )
  }
}

//lets render it
ReactDOM.render(<IwillPassValue />,document.getElementById('part19'))


//Part 20 Review Using Props with Stateless Functional Components
// this was just review and all the previous examples cover it

const covered = "This was covered in previous exercises"

//lets render it
ReactDOM.render(covered, document.getElementById('part20'))


const part1 = <h1>This is part1</h1>;
const part2 = <div>
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
  render() {
    return (
      <div>
        <div> I have a nested function inside </div>
        <NestedFunction />
      </div>
    )
  }
}



ReactDOM.render(part1, document.getElementById('part1'));
ReactDOM.render(part2, document.getElementById('part2'));
ReactDOM.render(part3, document.getElementById('part3'));
ReactDOM.render(part4, document.getElementById('part4'));
ReactDOM.render(part5, document.getElementById('part5'));
ReactDOM.render(part6, document.getElementById('part6'));

ReactDOM.render(<Part7 />, document.getElementById('part7'));
ReactDOM.render(<Part8 />,  document.getElementById('part8'));
ReactDOM.render(<Part9 />,  document.getElementById('part9'));
ReactDOM.render(<NestedFunctionClass />,  document.getElementById('part10'));