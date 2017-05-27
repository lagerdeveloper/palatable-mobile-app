import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    error: state.user.get('error'),
  };
}

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => { dispatch({ type: 'CLEAR_ERRORS' }) },
});

class CloseScreenButton extends Component {
  onPressHandler() {
    this.props.goBack();
    if (this.props.error) {
      this.props.clearErrors();
    }
  }

  render() {
    return (
      <TouchableHighlight style={{ marginLeft: 20 }} onPress={this.onPressHandler.bind(this)}>
        <Icon
          name='ios-close'
          size={30}
          color='blue'
        />
      </TouchableHighlight>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseScreenButton);
