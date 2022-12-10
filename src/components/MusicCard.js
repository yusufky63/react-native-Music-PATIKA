import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './MusicCard.style';

function MusicCard({data}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: data.imageUrl}} />
      <View style={styles.main_container}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.inner_container}>
          <Text style={styles.artist}>{data.artist}</Text>
          <Text style={styles.year}>{data.year}</Text>
        </View>
        {data.isSoldOut && <Text style={styles.soldout}>TÜKENDİ</Text>}
      </View>
    </View>
  );
}

export default MusicCard;
