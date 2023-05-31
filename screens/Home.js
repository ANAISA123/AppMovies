import React,{useEffect, useState} from "react";
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import {
  getPopularMovies, 
  getComedyMovies, 
  getMisteryMovies,
  getFantasyMovies, 
  getActionMovies,
  getRomanceMovies, 
  getHorrorMovies, } from '../services/service';

import { SliderBox } from "react-native-image-slider-box";
import react from "react";
import List from '../components/List';
import Error from '../components/Error';

const dimentions = Dimensions.get('screen')

const Home = ({navigation}) => {
  {/*Hooks para los estados de las categorías  */}
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [misteryMovies, setMisteryMovies] = useState();
  const [fantasyMovies, setFantasyMovies] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [romanceMovies, setRomanceMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();

  {/*Hooks para el manejo de los errores y carga  */}
  const [error, setError] = useState();
  const [loaded, setLoaded] = useState();

  const getData = () => {
    return Promise.all ([
      getPopularMovies(),
      getComedyMovies(), 
      getMisteryMovies(),
      getFantasyMovies(), 
      getActionMovies(),
      getRomanceMovies(), 
      getHorrorMovies(), 
    ])
  }

  useEffect(() => {
    getData()
    .then(
        ([
          PopularMovies,
          ComedyMovies,
          MisteryMovies,
          FantasyMovies,
          ActionMovies,
          RomanceMovies,
          HorrorMovies,
        ]) => {
            const moviesImagesArray = []
            PopularMovies.forEach(movie => {
              moviesImagesArray.push(
                  'https://image.tmdb.org/t/p/w500' + movie.poster_path,
              )
            })
            {/*Modificando los estados */}
            setMoviesImages(moviesImagesArray);
            setPopularMovies(popularMovies);
            setComedyMovies(comedyMovies);
            setMisteryMovies(misteryMovies);
            setFantasyMovies(fantasyMovies);
            setActionMovies(actionMovies);
            setRomanceMovies(romanceMovies);
            setHorrorMovies(horrorMovies);
        },
    )
        .catch(() => {
          setError(true)
        })

        .finally(() => {
          setLoaded(true)
        })

  },[])

  return(
    <react.Fragment>
      {/* Upcoming Movies */}
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style = {styles.sliderContainer}>
                <SliderBox
                   images={moviesImages}
                   dotStyle={styles.sliderStyle}
                   sliderBoxHeight={dimentions.height / 1.5}
                   autoplay={true}
                   circleLoop={true}
                />
            </View>  
          )}

          {/* Popular Movies */}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas más populares entre el público'}
                content={popularMovies}
              />
            </View>
          )}
          {/* Comedy Movies*/}
          {comedyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas Cómicas'}
                content={comedyMovies}
              />
            </View>
          )}
          {/* Mistery Movies */}
          {misteryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas de Misterio'}
                content={misteryMovies}
              />
            </View>
          )}
          {/* Fantasy Movies */}
          {fantasyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas de fantasía'}
                content={fantasyMovies}
              />
            </View>
          )}
          
           {/* Action Movies */}
           {actionMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Peliculas de Acción'}
                content={actionMovies}
              />
            </View>
          )}
          
           {/* Romance Movies */}
           {romanceMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas Románticas'}
                content={romanceMovies}
              />
            </View>
          )}
          
           {/* Horror Movies */}
           {horrorMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas de Terror'}
                content={horrorMovies}
              />
            </View>
          )}

        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </react.Fragment>
  )

}


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