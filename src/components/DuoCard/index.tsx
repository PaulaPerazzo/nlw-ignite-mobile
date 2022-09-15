import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { GameController } from 'phosphor-react-native'

import { styles } from './styles';

export interface DuoCardProps {
    id: string,
    minEnd: string,
    minStart: string,
    name: string,
    useVoice: boolean,
    weekDays: string[],
    yearsPlaying: number,
};

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
};

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
        <DuoInfo 
            label='Nome'
            value={data.name}
        />
        <DuoInfo 
            label='Anos de jogo'
            value={`${data.yearsPlaying} ano(s)`}
        />
        <DuoInfo 
            label='Disponibilidade'
            value={`${data.weekDays.length} dias \u2022 ${data.minStart}:00 - ${data.minEnd}:00`}
        />
        <DuoInfo 
            label='Chamada de áudio'
            value={data.useVoice ? "Sim" : "Não"}
            ColorValue={data.useVoice ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity style={styles.button} onPress={onConnect}>
            <GameController color={THEME.COLORS.TEXT} size={20}/>

            <Text style={styles.buttonTitle}>Conectar</Text>
        </TouchableOpacity>
    </View>
  );
};
