import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import AutoExpandingTextInput from '../Common/AutoExpandingTextInput';
import styles from './styles';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.calcPageIndex = this.calcPageIndex.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.state = {
      pageIndex: 0,
      title: '',
    };
  }

  calcPageIndex(e) {
    const pageIndex = e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width;
    this.setState({ pageIndex: Math.round(pageIndex) });
  }

  renderPagination() {
    let pageButtons = [];
    for (let i = 0; i < 2; i++) {
      if (i === this.state.pageIndex) {
        pageButtons.push(<View key={i} style={styles.activeDot} />);
      } else {
        pageButtons.push(<View key={i} style={styles.normalDot} />);
      }
    }
    return (
      <View style={styles.paginationContainer}>
        {pageButtons}
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1000}
          onScroll={e => this.calcPageIndex(e)}
        >
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
        </ScrollView>
        {this.renderPagination()}
      </View>
    );
  }
}

export default RecipeForm;
