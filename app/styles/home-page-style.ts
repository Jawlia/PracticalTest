import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const HomePageStyle = StyleSheet.create<{
  mainContainerStyle: ViewStyle;
  inputStyle: TextStyle;
  buttonTextStyle: TextStyle;
  buttonContainerStyle: ViewStyle;
  todoLabelStyle: TextStyle;
  listStyle: ViewStyle;
  listItemTextStyle: TextStyle;
}>({
  mainContainerStyle: {
    alignItems: 'center',
    paddingTop: 50,
  },

  inputStyle: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 7,
    width: '80%',
    fontSize: 16,
  },

  buttonContainerStyle: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 32,
    elevation: 2,
    shadowOpacity: 0.5,
    backgroundColor: '#4f8fff',
  },

  buttonTextStyle: {
    fontWeight: 'bold',
  },

  todoLabelStyle: {
    width: '80%',
    marginTop: 24,
    fontWeight: 'bold',
  },

  listStyle: {
    width: '80%',
    marginTop: 12,
  },

  listItemTextStyle: {
    width: '100%',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 7,
    marginVertical: 5,
  },
});
