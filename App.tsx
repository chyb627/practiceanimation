import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigation';
import { RootNavigation } from './src/navigation/RootNavigation';
import store from './src/store/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
