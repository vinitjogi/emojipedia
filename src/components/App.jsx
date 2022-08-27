import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"
import Footer from "./Footer";


function createCard(emojipedia){

  return (
    <Card
      key = {emojipedia.id}
      emoji = {emojipedia.emoji}
      name = {emojipedia.name}
      description = {emojipedia.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1><span>emojipedia</span></h1>
      <div className="container">
        {emojipedia.map(createCard)};
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
