import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/PacmanLoader";
import style from "./Loader.module.css";

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  margin: 0 auto;
  border-color: red;
  z-index: 30;
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
      <div className={style.sweetLoading}>
        <ClipLoader
          css={override}
          size={40}
          color={"#3f51b5"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
