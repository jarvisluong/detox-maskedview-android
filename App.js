/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, StatusBar, Button, Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';

const App = () => {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Increment"
          onPress={() => setAmount((prev) => prev + 1)}
          testID="increment-btn"
        />
        <Text testID="amount-label">{amount}</Text>
        <MaskedView
          style={{marginTop: 20}}
          maskElement={
            <View
              style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
          }>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'blue',
            }}
          />
        </MaskedView>
      </SafeAreaView>
    </>
  );
};

export default App;
