import React, { Component } from 'react';
import { Text, ActivityIndicator, Image, View } from 'react-native';
import { BACKEND_URL } from '../../constants/urls';
import styles from './styles';

class Home extends Component {
  componentDidMount() {
    this.props.fetchFeaturedRecipes();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <ActivityIndicator
          animating
          size="large"
          style={styles.isFetching}
        />
      );
    } else if (this.props.featuredRecipes) {
      return (
        <Image
          style={{ width: 200, height: 200, alignSelf: 'center', margin: 20 }}
          source={{ uri: `${BACKEND_URL}${this.props.featuredRecipes[1].image.url}` }}
        />
      );
    } else if (this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{this.props.error.message}</Text>
        </View>
      );
    }
    return <Text>There was an internal error!</Text>;
  }
}

export default Home;
