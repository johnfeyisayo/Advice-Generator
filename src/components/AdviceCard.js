import React, { useState, useEffect } from "react";
import axios from "axios";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advise = await response.data.slip;
    setAdvice(advise);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="card">
      <p>ADVICE #{advice.id}</p>
      <h2>{advice.advice}</h2>
      <img src={dividerDesktop} className="divider-desktop" alt="" />
      <img src={dividerMobile} className="divider-mobile" alt="" />
      <div
        className="dice"
        role="button"
        tabIndex={0}
        onClick={getAdvice}
        onKeyDown={getAdvice}
      >
        <img src={dice} alt="" />
      </div>
    </div>
  );
}

export default AdviceCard;
