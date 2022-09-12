import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title : string
};

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Yaaaaaaaaaaaay
      </Text>

      <Button title='send 1'/>
      <Button title='send 2'/>
      <Button title='send 3'/>
      <Button title='banana 99'/>

      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9887',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
  }
});
