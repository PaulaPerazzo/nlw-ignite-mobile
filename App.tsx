// Cqz2pvPVwdVen8eOUrHe72

import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_900Black} from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import './src/services/notificatiosConfigs';
import { getPushNotificationToken } from './src/services/getPushNptificationToken';

import * as Notifications from 'expo-notifications';

export default function App() {
  const getNotification = useRef<Subscription>();
  const responseNotification = useRef<Subscription>();
  
  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotification.current = Notifications
      .addNotificationReceivedListener(notification => {
        console.log(notification);
      });

      responseNotification.current = Notifications
        .addNotificationReceivedListener(response => {
          console.log(response);
      });

      return () => {
        if (getNotification.current && responseNotification) {
          Notifications.removeNotificationSubscription(getNotification.current);
          Notifications.removeNotificationSubscription(responseNotification.current);
        };
      };
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  });

  return (
    <Background >
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent/>
      { fontsLoaded ?  <Routes/> : <Loading/>}

    </Background>
  );
};
