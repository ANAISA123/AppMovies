import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
  View,
  Modal,
  Pressable,
} from 'react-native';
import PlayButton from '../components/PlayButton';
import StarRating from 'react-native-star-rating';
import { getMovie } from '../services/service';
import dateFormat from 'dateformat';
import VideoD from '../components/VideoD';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import StopButton from '../components/StopButton';


const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  const videoStop = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <React.Fragment>
      {loaded && (
        <View style={styles.container}>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={
                movieDetail.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetail.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.content}>
              <View style={styles.playButton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetail.title}</Text>
              {movieDetail.genres && (
                <View style={styles.genresContainer}>
                  {movieDetail.genres.map(genre => {
                    return (
                      <Text style={styles.genre} key={genre.id}>
                        {genre.name}
                      </Text>
                    );
                  })}
                </View>
              )}
              <StarRating
                disabled={true}
                maxStars={5}
                starSize={40}
                rating={movieDetail.vote_average / 2}
                fullStarColor={'green'}
              />
              <Text style={styles.overview}>{movieDetail.overview}</Text>

              <Text style={styles.release}>
                {'Release date: ' +
                  dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType="slide"
            visible={modalVisible}>
            <View style={styles.videoModal}>
             
              {/* <VideoD onClose={videoShown} /> */}
             {/* <VideoPlayer
             source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}/> */}
             <Pressable>
              <Text></Text>
              <StopButton handlePress={videoStop} />
             </Pressable>
              
            </View>
          </Modal>
        </View>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e5e5e',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Cochin',
    color: 'white',
    textShadowColor: '#95db7d', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
    textAlign:'center',
    marginHorizontal: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'white',
  },
  overview: {
    padding: 15,
    fontFamily: 'Cochin',
    textAlign: 'justify',
    color: 'white',
    marginVertical: 10, 
    marginHorizontal: 20, 
  },
  release: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: 'white',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e5e5e',
  },
});

export default Detail;
