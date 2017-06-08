import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 0 };
  }

  calcPageIndex(e) {
    const pageIndex = e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width;
    this.setState({ pageIndex: Math.round(pageIndex) });
  }

  renderPagination() {
    let pageButtons = [];
    const numChildren = React.Children.count(this.props.children);
    for (let i = 0; i < numChildren; i++) {
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
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          onScroll={e => this.calcPageIndex(e)}
        >
          {this.props.children}
        </ScrollView>
        {this.renderPagination()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    margin: 2,
    backgroundColor: 'red',
  },
  normalDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
    borderColor: 'red',
  },
});

export default Swiper;
