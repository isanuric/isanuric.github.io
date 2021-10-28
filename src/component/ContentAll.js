import React, { Component } from "react";
import Data from "./kant/Data";
import Post from "./Post";

// export default class ContentAll extends Component {
//   getCardsData = (data) => {
//     return <Post {...data} />;
//   };

//   render() {
//     return Data.map((data) => this.getCardsData(data));
//   }
// }

function ContentAll(props) {
  const getCardsData = (data) => {
    return <Post {...data} />;
  };

  return props.data.map((data) => getCardsData(data));
}

export default ContentAll;
