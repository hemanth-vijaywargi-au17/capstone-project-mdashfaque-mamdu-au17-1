import React from "react";
import Output from 'editorjs-react-renderer';

function Article(props) {
  return <Output data={ props.data }  />;
}

export default Article;
