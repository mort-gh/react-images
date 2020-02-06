import React, { Component } from "react";
import { fetchImages } from "../fetcher";
import Searchbar from "./searchBar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Loader from "./loader/Loader";

class App extends Component {
  state = {
    gallery: [],
    loading: true,
    page: 1
  };

  async componentDidMount() {
    try {
      const data = await fetchImages("car", 1);

      this.setState({
        gallery: data,
        loading: false
      });

      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("prevProps, prevState", prevProps, prevState);
  }

  loadMoreImages = async () => {
    this.setState(prev => ({
      page: prev.page + 1
    }));
    const nextPage = this.state.page + 1;

    try {
      const data = await fetchImages("car", nextPage);
      this.setState({
        gallery: data
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { gallery, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
        <Searchbar />
        <ImageGallery data={gallery} />
        <Button onClickLoadMore={this.loadMoreImages} />
      </>
    );
  }
}

export default App;
