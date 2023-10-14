import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const customStyle = {
  fontFamily: "monospace",
  fontSize: "14px",
  background: "#1e1e1e", // Background color
  color: "#d4d4d4", // Text color
};

function CCodeEditor() {
  const [code, setCode] = useState(
    'int main() {\n\tprintf("Hello, World!");\n\treturn 0;\n}'
  );

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <h2>C Code Editor</h2>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows={10}
        cols={40}
        style={{ fontFamily: "monospace" }}
      />
      <h3>Code Preview:</h3>
      <SyntaxHighlighter language="c" style={customStyle}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CCodezsditor;
