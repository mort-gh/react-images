import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/PacmanLoader";

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={40}
          //size={"150px"} this also works
          color={"#3f51b5"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
