import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ImageBackground } from 'react-native';
import { Separator, Button } from '../components/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';

class Homepage extends Component {
  navigateToListArticle = () => {
    this.props.navigation.navigate('Article');
  };

  render() {
    const fullName = "Achmad chairul irfansyah";
    const nim = "1203210006";
    const address = "Canggu-jetis, Mojokerto";
    const kampus = "Telkom University";

    return (
      <View style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <ImageBackground
          source={require('../assets/wallpaperflare.com_wallpaper.jpg')}
          style={{ flex: 0.5 }}
          resizeMode={'cover'}
          imageStyle={{ borderRadius: 50 }}
        >
          <View style={{ flex: 0. }}></View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#00000' }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={require('../assets/foto.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                borderWidth: 3,
                borderColor: '#000000',
                position: 'absolute',
                zIndex: 2
              }}
            />
          </View>
          <View style={{ marginTop: 70 }}>
            <Text style={styles.nama}>{fullName}</Text>
            <Text style={styles.desc}>{nim}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/logoif.png')}
                style={{
                  resizeMode: 'contain',
                  width: 200,
                  height: 100,
                }}
              />
            </View>
            <View style={{ marginLeft: 125 }}>
              <View style={styles.Listsosmed}>
                <View style={styles.iconstyles}>
                  <Icon name="whatsapp" size={25} color="#212121" />
                </View>
                <View style={styles.content}>
                  <Text style={styles.keterangan}>+62-8785-5724-322</Text>
                </View>
              </View>
              <View style={styles.Listsosmed}>
                <View style={styles.iconstyles}>
                  <Icon name="map-marker-alt" size={25} color="#212121" />
                </View>
                <View style={styles.content}>
                  <Text style={styles.keterangan}>{address}</Text>
                </View>
              </View>
              <View style={styles.Listsosmed}>
                <View style={styles.iconstyles}>
                  <Icon name="university" size={25} color="#212121" />
                </View>
                <View style={styles.content}>
                  <Text style={styles.keterangan}>{kampus}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 30 }}>
            <TouchableOpacity style={styles.iconButton} onPress={() => Linking.openURL('https://www.facebook.com/fadhlanfsj/')}>
              <Icon name="facebook-square" size={25} color="#212121" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => Linking.openURL('https://www.instagram.com/chairul_irfansyah/')}>
              <Icon name="instagram" size={25} color="#212121" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => Linking.openURL('https://www.linkedin.com/in/your-linkedin-profile/')}>
              <Icon name="linkedin" size={25} color="#212121" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <Button
            text="List Article"
            onPress={this.navigateToListArticle}
            style={styles.listarticle} // Apply a custom style here
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Homepage;

const styles = {
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginTop: 10,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
  },
  Listsosmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  keterangan: {
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  iconstyles: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  betweenicons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#008744',
    borderRadius: 50,
  },
};
