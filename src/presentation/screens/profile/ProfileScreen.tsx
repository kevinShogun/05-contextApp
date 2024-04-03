import React from 'react';
import {Text, View} from 'react-native';
import {useProfileStore} from '../../store/profile-store';
import {styles} from '../../../config/app-theme';
import {Pressable} from 'react-native';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => useProfileStore.setState({name: 'Kevin garcia'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryBtn}
        onPress={() =>
          useProfileStore.setState({email: 'Kevingarcia@mail.com'})
        }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => changeProfile('Jhon Doe', 'jhondoe@mail.com')}>
        <Text>Cambiar a Jhon</Text>
      </Pressable>
    </View>
  );
};
