import { TextInput, View } from 'react-native';

export const ChildComponent = ({ number, message, onNumberChange, onMessageChange }) => {
  return (
    <View>
      <TextInput
        placeholder="Número (Ex: 5588999991234)"
        value={number}
        onChangeText={onNumberChange}
      />
      <TextInput
        placeholder="Mensagem"
        value={message}
        onChangeText={onMessageChange}
      />
    </View>
  );
};
