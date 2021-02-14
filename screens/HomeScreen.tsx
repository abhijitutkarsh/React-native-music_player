import * as React from 'react';
import { StyleSheet ,Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';

// const album ={
//   id:'l',
//   imageUri:'https://th.bing.com/th/id/OIP.HIjF8b6rqQ-Zl3Ba5-vUnwHaEK?pid=ImgDet&rs=1',
//   artistsHeadline: 'Taylor Swift, Cardi Objective C ,Avicii'
// }
const AlbumCategory = {
  id :'1',
  title: 'Happy Vibes',
  albums:[
  {
    id:'1',
    imageUrl:'https://th.bing.com/th/id/OIP.HIjF8b6rqQ-Zl3Ba5-vUnwHaEK?pid=ImgDet&rs=1',
    artistsHeadline: 'Taylor Swift, Cardi Objective C ,Avicii'
  }, {
    id:'2',
    imageUrl:'https://i.ytimg.com/vi/zM9Z2rzAvBI/maxresdefault.jpg',
    artistsHeadline: 'Post Malone, Drake, Eminem'
  }, {
    id:'3',
    imageUrl:'https://i.pinimg.com/564x/d7/d0/8c/d7d08ce3f71de9726e4e1be381ceec17.jpg',
    artistsHeadline: 'Journey, Escape, Avicii'
  }, {
    id:'4',
    imageUrl:'https://static.billboard.com/files/media/Maroon-5-Three-Little-Birds-screenshot-2018-billboard-1548-compressed.jpg',
    artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov'
  }
  ]
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory 
      title={albumCategory.title} 
      albums={AlbumCategory.albums} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
