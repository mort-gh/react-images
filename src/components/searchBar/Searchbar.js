import React from "react";
import css from "./Searchbar.module.css";

const Searchbar = ({ onHandleSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form onSubmit={onHandleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}></span>
        </button>

        <input
          className={css.SearchFormInput}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

// {gallery.length >= 12 ? (
//   <Button onClickLoadMore={this.loadMoreImages} />
// ) : (
//   <div></div>
// )}
