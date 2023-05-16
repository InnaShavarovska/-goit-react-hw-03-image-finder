import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.props.onSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <span className={css.SearchForm__button__label}>Search</span>
          </button>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.SearchForm__input}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
