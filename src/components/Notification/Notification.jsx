import css from './Notification.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return <h2 className={css.notification}>{this.props.message}</h2>;
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
