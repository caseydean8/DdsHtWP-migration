import React from "react";
import vermOverhead from "../assets/verm-overhead-2020.png";
import top100 from "../assets/wine-en-top100.png";

const VermouthF = (
  <div className="vermouth-modal">
    <h2 className="modal-header">DAD'S HAT PENNSYLVANIA RYE VERMOUTH FINISH</h2>
    <p className="align-left">
      For our modern classic Vermouth Finish Rye, we've selected casks
      previously inhabited by Quady Winery's Vya Sweet Vermouth to create an
      amazing double finish rye. The process takes our classic rye, already
      matured for at least six months, and ages for an additional three months
      in select vermouth barrels. The warm, balanced flavor of American vermouth
      coupled with our smooth, spicy rye delivers an exceptional nose with a
      distinctive taste and character all its own.
    </p>
    {/* <hr className="modal-divider"></hr> */}
    <img className="modal-image" src={vermOverhead} alt="" />
    <img className="top-100" src={top100} alt="top 100 badge" />
    <p className="align-left">
      Named to{" "}
      <a
        href="http://www.winemag.com/buying-guide/dads-hat-pennsylvania-rye-whiskey-finished-in-vermouth-barrels"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#c5262e" }}
      >
        Wine Enthusiast magazine's
      </a>{" "}
      <strong>Top 100 Spirits list for 2015</strong>…&nbsp;“The only
      Pennsylvania-style rye actually made in Pennsylvania… The base rye has a
      bananas and honey character; this builds on it nicely with layers of
      raisin, figs, dates and caramel, finishing attractively spiced.”
    </p>
    {/* <hr className="modal-divider"></hr> */}
    <div className="tasting-notes">
      <div className="tasting-notes-text">
        <h1 className="tasting-notes-header ">Tasting Notes</h1>
        <p className="align-left">
          Deep reddish-brown hue yields to a rich nose of orange, cinnamon,
          pepper and vanilla - evolving as it opens. Leads with up-front spice
          to mid-palate dryness with the delicate finish of sweet vermouth on
          the back of the tongue. Round, complex flavor delivered in layers and
          demanding to be savored.
        </p>
      </div>
    </div>
  </div>
);

export default VermouthF;
