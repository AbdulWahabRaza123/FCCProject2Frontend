import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState(
    "# Welcome to my React Markdown Previewer!"
  );
  return (
    <>
      <div className="mt-5 text-center">
        <textarea
          id="editor"
          value={markdown}
          onChange={(event) => {
            setMarkdown(event.target.value);
          }}
          rows="10"
          cols="100"
        >
          Hello World
        </textarea>
      </div>
      <div id="preview" className="mt-1">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};
export default App;
