import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    signedIn: state.user.get('signedIn'),
  };
}

class AddRecipeButton extends Component {
  onPressHandler() {
    if (this.props.signedIn) {
      return this.props.navigate('newRecipe');
    }
    return this.props.navigate('SignUp');
  }

  render() {
    return (
      <TouchableHighlight style={{ marginRight: 20 }} onPress={this.onPressHandler.bind(this)}>
        <Icon
          name="ios-add"
          size={28}
          color="blue"
        />
      </TouchableHighlight>
    );
  }
}

export default connect(mapStateToProps, null)(AddRecipeButton);
