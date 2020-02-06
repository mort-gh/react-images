import React, { Component } from "react";
import { fetchImages } from "../fetcher";
import Searchbar from "./searchBar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Loader from "./loader/Loader";

class App extends Component {
  state = {
    gallery: [],
    query: "",
    loading: true,
    page: 1
  };

  async componentDidMount() {
    try {
      const data = await fetchImages(this.state.query, this.state.page);

      this.setState({
        gallery: data,
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        loading: true
      });

      try {
        const data = await fetchImages(this.state.query, this.state.page);
        this.setState({
          gallery: data,
          query: "",
          loading: false,
          page: 1
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log("e value", e.target.elements[1].value);

    this.setState({
      gallery: [],
      query: e.target.elements[1].value
    });
  };

  loadMoreImages = async () => {
    this.setState(prev => ({
      page: prev.page + 1
    }));
    const nextPage = this.state.page + 1;

    try {
      const data = await fetchImages(this.state.query, nextPage);
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
        <Searchbar onHandleSubmit={this.handleSubmit} />
        <ImageGallery data={gallery} />
        <Button onClickLoadMore={this.loadMoreImages} />
      </>
    );
  }
}

export default App;
