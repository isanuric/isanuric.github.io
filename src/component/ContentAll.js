import React from "react";
import Post from "./Post";

export default function ContentAll(props) {
  return props.data.map((data) => <Post {...data} />);
}
