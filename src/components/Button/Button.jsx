import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onNextPage}
        className={css.Button}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onNextPage: PropTypes.func,
};
