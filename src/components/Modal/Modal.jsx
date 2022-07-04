import { BackDrop, ModalWindow } from './styled.module';
import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  handleBackdropclick = e => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };

  render() {
    console.log(this.props.data);
    return (
      <BackDrop className="overlay" onClick={this.handleBackdropclick}>
        <ModalWindow className="modal">
          <img
            src={this.props.data.largeImageURL}
            alt={this.props.data.tags}
            width="1000"
          />
        </ModalWindow>
      </BackDrop>
    );
  }
}
