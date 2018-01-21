import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
      [
        {
          "id":1,
          "name":"Cameron",
          "age":"21"
        },
        {
          "id":2,
          "name":"Janneke",
          "age":"21"
        },
        {
          "id":3,
          "name":"Sabine",
          "age":"15?"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i}
              data = {person} />)}
          </tbody>
        </table>
        <StateContent/>
        <PropsContent/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    var headingStyle = {
      fontSize: 100,
      color: '#0000FF'
    }
    return(
      <div>
        <h1 style = {headingStyle}>Welcome to GTEV Hudsontaler</h1>
        </div>
    );
  }
}

class Content extends React.Component {
  render() {
    var i = 2;
    return(
      <div>
        <h2>Introduction</h2>
        <p data-anAttribute = "value">We do dancing things</p>
        <p>{1+1}</p>
        <p>{i == 1 ? 'True!' : 'False...'}</p>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class StateContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "State Header",
      content: "State Content"
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.header}</h2>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

class PropsContent extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.headerProp}</h2>
        <p>{this.props.contentProp}</p>
      </div>
    );
  }
}
export default App;
