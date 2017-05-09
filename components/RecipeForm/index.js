import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import AutoExpandingTextInput from '../Common/AutoExpandingTextInput';
import styles from './styles';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView pagingEnabled horizontal>
          <View style={styles.slide}>
            <Text>First Slide</Text>
            <AutoExpandingTextInput
              initialHeight={30}
              style={styles.titleInput}
            />
            <TextInput
              autoCapitalize="words"
              onChangeText={text => this.setState({ title: text })}
              placeholder="Title (ex. German Chocolate Cake)"
              style={styles.titleInput}
            />
          </View>
          <View style={styles.slide}>
            <Text>Second Slide</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RecipeForm;
