import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { DuoCard, DuoCardProps } from '../../components/DuoCard';


export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetch(`http://192.168.15.35:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Entypo 
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}  
            />
          </TouchableOpacity>

          <Image 
            source={logoImg}  
            style={styles.logo}
          />

          <View style={styles.right}/>
        </View>

        <Image 
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="contain"
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard data={item} onConnect={() => {}}/>
          )}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>
              Não há anúncios publicados para esse jogo ainda
            </Text>
          )}
        />


      </SafeAreaView>
    </Background>
  );
};
