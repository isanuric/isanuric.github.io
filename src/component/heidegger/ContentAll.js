import React from "react";
import Post from "./Post";

function ContentAll(props) {
  const getCardsData = (data) => {
    return <Post {...data} />;
  };

  return props.data.map((data) => getCardsData(data));
}

export default ContentAll;
