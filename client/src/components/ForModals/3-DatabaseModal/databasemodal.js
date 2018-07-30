import React from 'react';
import PropTypes from 'prop-types';


class DatabaseModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    return (
      <div className="backdrop">
        <div className="editmodal">
          {this.props.children}
        </div>
      </div>
    );
  }
}

DatabaseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default DatabaseModal;