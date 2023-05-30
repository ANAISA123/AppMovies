import React,{useEffect, useState} from "react";
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native'

const styles = StyleSheet.create({
    sliderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliderStyle: {
      height: 0,
    },
    carousel: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default Home