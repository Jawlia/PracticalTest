import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, FlatList} from 'react-native';
import {HomePageStyle as styles} from '../styles/home-page-style';

export const HomePage = () => {
  const [todoList, setTodoList] = useState([]);
  const [textValue, setTextValue] = useState('');

  const flatListItem = ({item}) => {
    return <Text style={styles.listItemTextStyle}>{item}</Text>;
  };

  const onButtonPress = () => {
    const updatedArray = todoList.concat(textValue);
    setTodoList(updatedArray);
    setTextValue('');
  };

  return (
    <View style={styles.mainContainerStyle}>
      <TextInput
        onChangeText={text => setTextValue(text)}
        value={textValue}
        placeholder="Enter Todo"
        style={styles.inputStyle}
      />

      <TouchableOpacity
        disabled={textValue.length === 0}
        onPress={onButtonPress}
        style={[
          styles.buttonContainerStyle,
          {backgroundColor: textValue.length === 0 ? 'grey' : '#4f8fff'},
        ]}>
        <Text
          style={[
            styles.buttonTextStyle,
            {color: textValue.length === 0 ? '#c8c8c8' : 'white'},
          ]}>
          Add Todo
        </Text>
      </TouchableOpacity>
      <Text style={styles.todoLabelStyle}>ToDo List :-</Text>
      <FlatList
        style={styles.listStyle}
        data={todoList}
        renderItem={flatListItem}
      />
    </View>
  );
};
