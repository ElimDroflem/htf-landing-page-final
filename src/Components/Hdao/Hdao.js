import React from "react";
import "../../style.css";
import "./hdao.css";

const Hdao = () => {
  return (
    <div className="hdao">
      <div className="hdao--container">
        <div className="hdao--container--left">
          <p className="hdao--title">
            About humanDAO: Improving Lives Through Crypto
          </p>
          <p className="hdao--text">
            humanDAO, founded in 2021, is a community- funded, social impact
            DAO. Our mission to create innovative solutions and forge meaningful
            partnerships has led us to collaborate with industry-leading NFT
            projects like Moonbirds, web3 projects such as BanklessDAO, and
            immersive web3 games like Thetan Arena. We are driven by a passion
            for empowering underserved communities, leveraging cutting- edge
            technology, and making a lasting impact on the world.
          </p>
        </div>

        <img className="hdao--img" alt="Hdao img" src="/img/hdao-img.png" />
      </div>
    </div>
  );
};

export default Hdao;
