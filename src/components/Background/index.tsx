import React from 'react';
import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Prpos {
    children: React.ReactNode;
};

export function Background({ children }: Prpos) {
  return (
    <ImageBackground 
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.container}
    >
        {children}
    </ImageBackground>
  );
};
