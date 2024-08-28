import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="left">
        <div className="text">
          <h1>Better living through science</h1>
          <p>Heart, Gut, Brain and cholestrol wellness</p>
          <button className="supplyButton">Shop All Supplements</button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://s3-alpha-sig.figma.com/img/f6ca/cd27/4bc68a8f6b8c5dc276eb492fddbbf61e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-GMKcONG8WLfpN1HksHe6z2s-Ars9xezXa9mK04-63~Xs8w4M3rC5K4xv-rmGKdwPZxtNDG-SFzrrjP2bfY0gh286IaGy-RAng6aql2g1b9WsGf3fupjzshr7~ztzPmpc3bpLv05DW2Qlxhb9qq7dxpUk5QjzdIsZDuUh9aUgkAnxTllpIxVZKlwc5mwRRaJcecywP2GV20K2onOLpCVjdkICbGWhrBRqN8YWJhqrw0uESqKxvmUOFdfsGarH2DEf9rCRL7UCCqsVfddEgpUxGHJdndK3w3ITieSPN2WfSR23K7bx15IAUPLoMwrZgkdQnKN0k~AoVd~Ds6zzEeWA__"
          alt="banner"
          className="bannerImg"
        />
      </div>
    </div>
  );
}
