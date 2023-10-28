import React, { useState } from "react";
import {
  BsTextLeft,
  BsTextRight,
  BsTextCenter,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
} from "react-icons/bs";

export default function Textediter() {
  let [a, b] = useState(" ");

  function valuechanged(event) {
    b(event.target.value);
  }

  let upperCase = () => {
    let upperCase = a.toUpperCase()
    b(upperCase)
    setTimeout(()=>{
      alert("Text has been changed in UpperCase")
    },1000)
  };

  let lowerCase = () => {
    let lowerCase = a.toLowerCase();
    b(lowerCase)
    setTimeout(()=>{
      alert("Text has been changed in lowerCase")
    },1000)
  };

  let properCase = () => {
    let properCase = a.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    b(properCase)
    setTimeout(()=>{
      alert("Text has been changed in properCase")
    },1000)
  };

  function spaceRemove() {
    let spaceRemove = a.trim().split(/ +/).join(" ");
    b(spaceRemove);
    setTimeout(()=>{
      alert("Extra space has been removed")
    },1000)
  }

  function clearText() {
    b("");
    setTimeout(()=>{
      alert("Text Clear")
    },1000)
  }

  let [pretext, posttext] = useState({
    textAlign: "left",
    fontWeigth: "normal",
  });

  let textleft = () => {
    if (pretext.textAlign == "right" || pretext.textAlign == "center") {
      posttext({
        textAlign: "left",
      });
    }
    setTimeout(()=>{
      alert("TextAlign left")
    },1000)
  };

  let textright = () => {
    if (pretext.textAlign == "left" || pretext.textAlign == "center") {
      posttext({
        textAlign: "right",
      });
    }
    setTimeout(()=>{
      alert("TextAlign right")
    },1000)
  };

  let textcenter = () => {
    if (pretext.textAlign == "left" || pretext.textAlign == "right") {
      posttext({
        textAlign: "center",
      });
    }
    setTimeout(()=>{
      alert("TextAlign center")
    },1000)
  };

  let textbold = () => {
    if (pretext.fontStyle != "bold") {
      posttext({
        fontStyle: "bold",
      });
    } else {
      posttext({
        fontStyle: "normal",
      });
    }
    setTimeout(()=>{
      alert("Text bold")
    },1000)
  };

  let textitalic = () => {
    if (pretext.fontStyle != "italic") {
      posttext({
        fontStyle: "italic",
      });
    } else {
      posttext({
        fontStyle: "normal",
      });
    }
    setTimeout(()=>{
      alert("Text italic")
    },1000)
  };

  let textunderline = () => {
    if (pretext.textDecorationLine != "underline") {
      posttext({
        textDecorationLine: "underline",
      });
    } else {
      posttext({
        textDecorationLine: "none",
      });
    }
    setTimeout(()=>{
      alert("Text underline")
    },1000)
  };

  return (
    <div>
      <div className="header">
        <h1>Text Formatter</h1>
      </div>
      <div className="section">
        <div className="buttonsec">
          <button type="button" class="btn btn-success" onClick={upperCase}>
            UpperCase
          </button>
          <button type="button" class="btn btn-primary" onClick={lowerCase}>
            LowerCase
          </button>
          <button type="button" class="btn btn-info" onClick={properCase}>
            Proper
          </button>
          <button type="button" class="btn btn-danger" onClick={spaceRemove}>
            Remove Space
          </button>
          <button type="button" class="btn btn-warning" onClick={clearText}>
            Clear
          </button>
        </div>
        <div className="icons">
          <span>
            <BsTextLeft className="icone textleft" onClick={textleft} />
          </span>
          <span>
            <BsTextRight className="icone textright" onClick={textright} />
          </span>
          <span>
            <BsTextCenter className="icone textcenter" onClick={textcenter} />
          </span>
          <span>
            <BsTypeBold className="icone textbold" onClick={textbold} />
          </span>
          <span>
            <BsTypeItalic className="icone textitalic" onClick={textitalic} />
          </span>
          <span>
            <BsTypeUnderline
              className="icone textunderline" onClick={textunderline}/>
          </span>
        </div>
      </div>
      <div className="section1">
        <div className="textbox">
          <h3>Text Area</h3>
          <textarea
            name="textfield"
            cols="60"
            rows="15"
            className="px-2"
            style={pretext}
            value={a}
            onChange={valuechanged}
          ></textarea>
        </div>
        <div className="previewbox">
          <h3>Preview Area</h3>
          <p className="px-2" style={pretext}>
            {a}
          </p>
        </div>
      </div>
      <div className="footer">
        <h5>
          Letter Count:-{a.length}
        </h5>
        <h5>
          Words Count:-
          {a.split(" ").length == 1
            ? a.split(" ").length - 1
            : a.split(" ").length - 1}
        </h5>
        <h5>
          Sentense Count:-
          {a.split(".").length == 1
            ? a.split(".").length - 1
            : a.split(".").length - 1}
        </h5>
        <h5>
          Writing Speed:-
          {0.25 * a.split(" ").length == 0.25
            ? 0.25 * a.split(" ").length - 0.25
            : 0.25 * a.split(" ").length - 0.25}
        </h5>
      </div>
    </div>
  );
}
