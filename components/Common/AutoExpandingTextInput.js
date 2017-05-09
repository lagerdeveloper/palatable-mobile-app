import React, { Component } from 'react';
import { TextInput } from 'react-native';

class AutoExpandingTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.initialHeight,
    };
  }

  render() {
    const { initialHeight, style, ...rest } = this.props;
    return (
      <TextInput
        {...rest}
        multiline
        onContentSizeChange={(event) => {
          this.setState({
            height: event.nativeEvent.contentSize.height,
          });
        }}
        style={[style, { height: Math.max(initialHeight, this.state.height) }]}
      />
    );
  }
}

export default AutoExpandingTextInput;
