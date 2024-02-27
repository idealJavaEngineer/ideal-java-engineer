import parse from "html-react-parser";

const TextEditorHtmlParser = ({ output }) => {
  return (
    <>
      <div className="ProseMirror">{parse(description)}</div>
    </>
  );
};

export default TextEditorHtmlParser;