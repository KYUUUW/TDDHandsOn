import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import commentComposerFactory from "./commentComposerFactory";
import compositeContentRefinerFactory from './content-refiners/compositeContentRefinerFactory';
import compactWhiteSpacecs from "./content-refiners/compactWhiteSpace";
import trimWhitespaces from "./content-refiners/trimWhitespaces";

const commentRefiner = compositeContentRefinerFactory([
  compactWhiteSpacecs,
  trimWhitespaces
])

ReactDOM.render(
  <React.StrictMode>
    <App commentComposer={commentComposerFactory(commentRefiner)} />
  </React.StrictMode>,
  document.getElementById("root")
);
