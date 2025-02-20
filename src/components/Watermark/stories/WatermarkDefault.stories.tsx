import React from "react";
import {Watermark} from "fish-ui-xh";

const Default: React.FC = () => (
  <Watermark content="FishUI bubucuo">
    <div
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div> 公司账户余额：¥ 1,000,000.00 </div>
    </div>
  </Watermark>
);

export default Default;
