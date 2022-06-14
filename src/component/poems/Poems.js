import React from "react";
import Footer from "../Footer";
import PoemsBerlin from "./PoemsBerlin";
import PoemsStuttgart from "./PoemsStuttgart";


export default function Poems() {
  return (
    window.scrollTo(0, 0),
      <>
        <PoemsBerlin />
        <PoemsStuttgart />
        <Footer />
      </>
    )
}
