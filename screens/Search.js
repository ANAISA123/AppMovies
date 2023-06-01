import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { searchMovieTv } from '../services/service';
import Card from '../components/Card';
import Error from '../components/Error';

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onSubmit = (query) => {
    Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={'Busca una película de tu preferencia'}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <TouchableOpacity onPress={() => { onSubmit(text); }}>
          <Icon name={'search-outline'} size={30} color={Colors.white}/>
        </TouchableOpacity>
      </View>

      <View style={styles.searchItems}>
        {/* Searched items results */}
        {searchResults && searchResults.length > 0 && (
          <FlatList
            numColumns={2}
            data={searchResults}
            renderItem={({ item }) => (
              <Card navigation={navigation} item={item} />
            )}
            keyExtractor={item => item.id}
          />
        )}

        {/* When searched but no results */}
        {searchResults && searchResults.length === 0 && (
          <View style={styles.noResults}>
            <Text>No se encuentran resultados bajo ese criterio.</Text>
            <Text>Prueba con otras palabras.</Text>
          </View>
        )}

        {/* When nothing is searched */}
        {!searchResults && (
          <View style={styles.empty}>
            <Text>Escribe algo para iniciar tu búsqueda</Text>
          </View>
        )}

        {/* Error */}
        {error && <Error />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e5e5e',
  },
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    padding: 15,
    paddingTop: 60,
    paddingLeft: 35,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight:10,
    paddingLeft: 10
  },
  searchItems: {
    padding: 5,
    alignItems: 'center',
  },
  noResults: {
    paddingTop: 20,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

const Colors = {
  background: '#1E1E1E',
  black: '#000000',
  white: '#ffffff',
  lightGray: '#ccc',
  primary: '#4481FC',
  danger: '#F5365C',
};
export default Search;
