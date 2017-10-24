import React from 'react';
import PropTypes from 'prop-types';

import ListTitleFormContainer from './ListTitleFormContainer';
import ListTitle from './ListTitle';

class ToggleableListTitle extends React.Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  state = {
    title: this.props.title || '',
    showForm: false,
  };

  handleTitleClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true,
    });
  };

  handleSave = (title) => {
    this.setState({
      showForm: false,
      title: title,
    });
  };

  render() {
    const title = this.state.title;
    const id = this.props.id;

    if (this.state.showForm) {
      return (
        <ListTitleFormContainer
          id={id}
          title={title}
          onSave={this.handleSave}
        />
      );
    } else {
      return (
        <ListTitle
          title={title}
          onClick={this.handleTitleClick}
        />
      );
    }
  }
}

export default ToggleableListTitle;
