import React from "react";
import ReactDOM from "react-dom";
import Header from "./componets/header";
import NewSList from "./componets/news_list";

const App = () => {
  return (
      <>
      <Header/>
      <h1>Hello There!</h1>
      <NewSList/>
      </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));
 