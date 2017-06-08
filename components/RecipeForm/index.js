import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import AutoExpandingTextInput from '../Common/AutoExpandingTextInput';
import Swiper from '../Common/Swiper';
import styles from './styles';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      activeTime: 0,
      prepTIme: 0,
    };
  }

  render() {
    return (
      <Swiper>
        <View style={styles.slide}>
          <Text>First Slide</Text>
          <TextInput
            autoCapitalize="words"
            onChangeText={text => this.setState({ title: text })}
            placeholder="Title (ex. German Chocolate Cake)"
            placeholderTextColor='grey'
            style={styles.titleInput}
          />
          <AutoExpandingTextInput
            initialHeight={30}
            style={styles.titleInput}
            placeholder="Description"
            placeholderTextColor='grey'
          />
        </View>
        <View style={styles.slide}>
          <Text>Second Slide</Text>
        </View>
      </Swiper>
    );
  }
}

export default RecipeForm;
