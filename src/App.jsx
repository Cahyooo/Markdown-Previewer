import { useState } from "react";
import "./style.css";
import { marked } from "marked";

function App() {
  const defaultEditorValue = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Headereee?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  marked.setOptions({
    breaks: true,
  });
  const [editor, setEditor] = useState(defaultEditorValue);

  const markedValue = marked.parse(editor);

  return (
    <main className="mx-auto p-2">
      <div className="d-flex flex-column">
        <label htmlFor="editor">Editor</label>
        <textarea
          name="editor"
          id="editor"
          onChange={(event) => {
            setEditor(event.target.value);
          }}
          value={editor}
        ></textarea>
      </div>

      <div id="preview" dangerouslySetInnerHTML={{ __html: markedValue }}></div>
    </main>
  );
}

export default App;
