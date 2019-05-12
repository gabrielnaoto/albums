import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumCard = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailImageContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnailImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={styles.artwork}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailImage: {
    height: 50,
    width: 50
  },
  artwork: {
    height: 300,
    flex: 1,
    width: null
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 18,
  }

};

export default AlbumCard;
