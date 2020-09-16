import React, { Component } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import PropTypes from 'prop-types';
import { tagPropType } from '../utils/helper.js'
import 'react-toastify/dist/ReactToastify.css';

export default class Toast extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      toastType,
      message,
    } = this.props;

    var notify;

    const notifyOptions = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      draggable: true,
      newestOnTop: false,
      rtl: false,
      transition: Slide
    }

    if (toastType === 'info') {
      notify = () => toast.info(message, notifyOptions);
    } else if (toastType === 'success') {
      notify = () => toast.success(message, notifyOptions);
    } else if (toastType === 'warning') {
      notify = () => toast.warning(message, notifyOptions);
    } else if (toastType === 'error') {
      notify = () => toast.error(message, notifyOptions);
    }

    notify();

    return (
      <div>
        <ToastContainer />
      </div>
    );

  }
}

export const sharedPropTypes = {
  align: PropTypes.oneOf(['', 'left', 'center', 'right']),
  color: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string
}

Toast.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  accentColor: PropTypes.string,
  ...sharedPropTypes
}

Toast.defaultProps = {
  tag: 'div'
}