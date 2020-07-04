var placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...  

#### Inline Code:
  
Here is some code, \`<div></div>\`, between 2 backticks.

#### Code Block:
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**, _italic_ or **_both!_**.

You can either ~~cross stuff out~~.

Click [here](https://www.freecodecamp.com) to see the full markdown documentation.

> Block Quotes!

#### Lists:

- they can be unordered.
  - Bulleted.
    - With different indentation levels.
     

1. And there are numbererd lists too.
1. Starting from 1. 

- You can make them using dashes.
* Or asterisks.

#### Images:

![React Logo w/ Text](https://goo.gl/Umyytc)

By [ThiagoRamosCP](https://github.com/thiagoramoscp)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { className: "app-box" },
      React.createElement(Header, null),
      React.createElement("div", { className: "main-area" },
      React.createElement(Editor, null),
      React.createElement(Preview, null))));



  }}


const Header = props => {
  return (
    React.createElement("div", { className: "header" },
    React.createElement("h1", null, React.createElement("span", null, "<>"), " Markdown Previewer"),
    React.createElement("p", null, "Start typing to preview your markup!")));


};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      input: placeholder };

  }

  onChange(event) {
    this.setState({ input: event.target.value }, () => {
      let editorText = document.getElementById('editor').innerText;
      document.getElementById('preview').innerHTML = marked(this.state.input);
    });
  }
  componentWillMount() {
    this.setState({ input: placeholder }, () => {
      let editorText = document.getElementById('editor').innerText;
      document.getElementById('preview').innerHTML = marked(this.state.input);
    });
  }

  render() {
    return (
      React.createElement("div", { className: "editor" },
      React.createElement("textarea", { id: "editor", name: "text", rows: "15", value: this.state.input, onChange: this.onChange })));


  }}

const Preview = props => {
  return (
    React.createElement("div", { className: "preview", id: "preview" }));


};



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));


/* -- AUTO RESIZE TEXTAREA -- */

$("#editor").on("keyup input", function () {
  $(this).css("height", "auto").css("height", this.scrollHeight + (this.offsetHeight - this.clientHeight));
});