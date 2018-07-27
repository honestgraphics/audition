import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';
class ContactModal extends React.Component {
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

ContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ContactModal;