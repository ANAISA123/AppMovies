import React, { useEffect, useState } from "react";
import { SliderBox } from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {
  getAdventureMovies,
  getUpcomingMovies,
  getMusicMovies,
  getDramaMovies,
  getHorrorMovies,
  getActionMovies,
  getComedyMovies,
} from "../services/service";

const dimensions = Dimensions.get('screen');

const Home = ({ navigation }) => {
  const [moviesImages, setMoviesImages] = useState();
  const [adventureMovies, setAdventureMovies] = useState();
  const [musicMovies, setMusicMovies] = useState();
  const [dramaMovies, setDramaMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getAdventureMovies(),
      getUpcomingMovies(),
      getMusicMovies(),
      getDramaMovies(),
      getHorrorMovies(),
      getActionMovies(),
      getComedyMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(([
        upcomingMoviesData,
        adventureMoviesData,
        musicMoviesData,
        dramaMoviesData,
        horrorMoviesData,
        actionMoviesData,
        comedyMoviesData,
      ]) => {
        const moviesImagesArray = [];
        upcomingMoviesData.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });

        setMoviesImages(moviesImagesArray);
        setAdventureMovies(adventureMoviesData);
        setMusicMovies(musicMoviesData);
        setDramaMovies(dramaMoviesData);
        setHorrorMovies(horrorMoviesData);
        setActionMovies(actionMoviesData);
        setComedyMovies(comedyMoviesData);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      {/* Upcoming Movies */}
      {loaded && !error && (
        <ScrollView style={styles.container}>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          {/* Popular Movies */}
          {adventureMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Aventura'}
                content={adventureMovies}
              />
            </View>
          )}
          {/* Romance Movies */}
          {musicMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Musicales'}
                content={musicMovies}
              />
            </View>
          )}
          {/* Drama Movies */}
          {dramaMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Dramas'}
                content={dramaMovies}
              />
            </View>
          )}
          {/* Horror Movies */}
          {horrorMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Terror'}
                content={horrorMovies}
              />
            </View>
          )}
          {/* Action Movies */}
          {actionMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Acción'}
                content={actionMovies}
              />
            </View>
          )}
          {/* Comedy Movies */}
          {comedyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Comedias'}
                content={comedyMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e5e5e',
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e5e5e',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e5e5e',
  },
});

export default Home;
