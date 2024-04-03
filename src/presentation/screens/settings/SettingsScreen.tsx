import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';

export const SettingsScreen = () => {
  const increaseBy = useCounterStore(state => state.increaseBy);
  const count = useCounterStore(state => state.count);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter ${count}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count} </Text>

      <Pressable style={styles.primaryBtn} onPress={() => increaseBy(1)}>
        <Text> + 1 </Text>
      </Pressable>

      <Pressable style={styles.primaryBtn} onPress={() => increaseBy(-1)}>
        <Text> - 1</Text>
      </Pressable>
    </View>
  );
};
