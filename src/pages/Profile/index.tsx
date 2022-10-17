import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../../App';
import {useAlert} from '../../hooks/useAlert';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28203e',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginVertical: 16,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile: React.FC<Props> = ({navigation}) => {
  const {alert} = useAlert();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu perfil</Text>

      <Button
        color="lightgray"
        title="Ver configurações"
        onPress={() => navigation.navigate('Settings')}
      />

      <Button
        color="lightgray"
        title="Testar Modal"
        onPress={() =>
          alert({
            title: 'Sucesso! Eu estou sim funcionando',
            message: 'Viu como e fácil usar o modal?',
          })
        }
      />
    </View>
  );
};

export default Profile;
