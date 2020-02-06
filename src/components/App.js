import React, { Component } from "react";
import { fetchImages } from "../fetcher";
import Searchbar from "./searchBar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    gallery: [],
    query: "",
    loading: true,
    page: 1,
    modal: false,
    largeImg: ""
  };

  componentDidMount() {
    this.getFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.query !== this.state.query && this.getFetch();
  }

  getFetch = async () => {
    try {
      const data = await fetchImages(this.state.query, this.state.page);
      this.setState({
        gallery: data,
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      gallery: [],
      query: e.target.elements[1].value,
      loading: true
    });
  };

  loadMoreImages = async () => {
    this.setState(prev => ({
      loading: true,
      page: prev.page + 1
    }));
    const nextPage = this.state.page + 1;

    try {
      const data = await fetchImages(this.state.query, nextPage);

      this.setState(prev => ({
        gallery: [...prev.gallery, ...data],
        loading: false
      }));

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    } catch (e) {
      console.log(e);
    }
  };

  openModal = event => {
    this.state.gallery.forEach(elem => {
      if (elem.id === Number(event.target.id)) {
        this.setState({
          modal: true,
          largeImg: elem.largeImageURL
        });
      }
    });

    window.onkeydown = this.closeModal;
  };

  closeModal = event => {
    if (event.code === "Escape" || event.target.id === "overlay") {
      this.setState({
        modal: false
      });
    }
  };

  render() {
    const { gallery, loading, modal, largeImg } = this.state;
    return (
      <>
        {loading && <Loader />}
        {modal ? <Modal img={largeImg} closeModal={this.closeModal} /> : null}
        <Searchbar onHandleSubmit={this.handleSubmit} />
        <ImageGallery data={gallery} openModal={this.openModal} />
        {gallery.length >= 12 ? (
          <Button onClickLoadMore={this.loadMoreImages} />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default App;
