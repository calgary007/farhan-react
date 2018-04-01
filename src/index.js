import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

// Part 21-30
// Part 21: Create a Stateful Component
class StatefullComponent extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      name: "Farhan",
      company: "TCS"
    }

	}
  render() {
    return (
	    <div>
	    	<h3>My Name is :{this.state.name}</h3>
        <p>I work for {this.state.company}</p>
	    </div>
    );
  }
};

// Now lets render it
ReactDOM.render(<StatefullComponent />, document.getElementById('part21'));

// Part 22: Render State in the User Interface
class StateinUserInterface extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      name: "Farhan",
      company: "TCS"
    }

	}
  render() {
    return (
	    <div>
	    	<h3>{this.state.name}</h3>
	    </div>
    );
  }
};
// Now lets render it
ReactDOM.render(<StateinUserInterface />, document.getElementById('part22'));
// Part 23: Render State in the User Interface Another Way
class StateAnotherWay extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      name: "Farhan",
      company: "TCS"
    }

	}
  render() {
    const name = this.state.name
    return (
	    <div>
	    	<h3>{name}</h3>
	    </div>
    );
  }
};

// Now lets render it
ReactDOM.render(<StateinUserInterface />, document.getElementById('part23'));

//Part 24: Set State with this.setState
class StateThisStateChallenge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Top Secret'
		};
		this.click = this.click.bind(this);
	}
	click() {
		// change code below this line
    this.setState({
      name: 'Farhan'
    })
	  // change code above this line
	}
	render() {
  	return (
	    <div>
        <button onClick = {this.click}>Click me to see my name</button>
        <h1>{this.state.name}</h1>
	    </div>
    );
  }
};


// Now lets render it
ReactDOM.render(<StateThisStateChallenge />, document.getElementById('part24'));

//Part 25: Bind 'this' to a Class Method
class BindThisToClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemCount: 0
		};
    this.addItem = this.addItem.bind(this);
	}
	addItem() {
		this.setState({
			itemCount: this.state.itemCount + 1
		});
	}
	render() {
  	return (
	    <div>
        <button onClick = {this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
	    </div>
    );
  }
};
// Now lets render it
ReactDOM.render(<BindThisToClass />, document.getElementById('part25'));

//Part 26: Bind 'this' with an ES6 Arrow Function
class BindThisToArrow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      message: 'Hello!'
    };
	}
	setMessage = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }
  render() {
  	return (
	    <div>
        <button onClick = {this.setMessage}>Click Me</button>
        <h1>{this.state.message}</h1>
	    </div>
    );
  }
};
// Now lets render it
ReactDOM.render(<BindThisToArrow />, document.getElementById('part26'));

//Part 27: Use State to Toggle an Element
class ToggleVisibility extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
    //this.toggleVisibility = this.toggleVisibility.bind(this);
	}
	toggleVisibility = () => {
    this.state.visibility ? this.setState ({visibility: false}) : this.setState ({visibility: true})
  }

	render() {
		if (this.state.visibility) {
	  	return (
		    <div>
	        <button onClick = {this.toggleVisibility}>Click Me</button>
	        <h1>Now you see me!</h1>
		    </div>
	    );
  	} else {
  		return (
		    <div>
	        <button onClick = {this.toggleVisibility}>Click Me</button>
		    </div>
	    );
  	}
  }
};
// Now lets render it
ReactDOM.render(<ToggleVisibility />, document.getElementById('part27'));

//Part 28: Write a Simple Counter
class SimpleCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
  reset = () => {
    this.setState({
    	count: 0
  	});
  }
	increment = () => {
    this.setState({
    	count: this.state.count + 1
  	});
  }
  decrement = () => {
    this.setState({
    	count: this.state.count - 1
  	});
  }
	render() {
  	return (
	    <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
	    </div>
    );
  }
};
// Now lets render it
ReactDOM.render(<SimpleCounter />, document.getElementById('part28'));

//Part 29: Create a Controlled Input
class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}
	// change code below this line
	handleInput = (e) => {
    this.setState({
      input: e.target.value
    });
  }
	// change code above this line
	render() {
  	return (
	    <div>
        <input onChange={this.handleInput} value={this.state.input} />
        <p>Input: {this.state.input}</p>
	    </div>
    );
  }
};
// Now lets render it
ReactDOM.render(<ControlledInput />, document.getElementById('part29'));

//Part 30: Create a Controlled Form
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			submit: ''
		};
	}
	handleChange = (event) => {
		this.setState({
			input: event.target.value
		});
	}
	handleSubmit = (event) => {
		event.preventDefault()
    this.setState({
      submit: this.state.input
    });
	}
	render() {
  	return (
  		<div>
		    <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input}/>
	        <button type='submit'>Submit!</button>
		    </form>
        <h1>{this.state.submit}</h1>
		  </div>
    );
  }
};
// Now lets render it
ReactDOM.render(<MyForm />, document.getElementById('part30'));

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