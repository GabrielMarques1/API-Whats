import { useState } from 'react';
import { Button, Linking, View, StyleSheet, Text, TextInput } from 'react-native';

export const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onNumberChange = (number) => {
    setPhoneNumber(number);
    if (!number.startsWith('55') || number.length > 11) {
      setErrorMessage('O número deve começar com 55 e ter no máximo 11 dígitos');
    } else {
      setErrorMessage('');
    }
  };

  const sendWhatsAppMessage = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length <= 11) {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      Linking.openURL(url);
    } else {
      setErrorMessage('O número deve começar com 55 e ter no máximo 11 dígitos');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Número (Ex: 5588999991234)"
        value={phoneNumber}
        onChangeText={onNumberChange}
      />
      <TextInput
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
      />
      <Text style={styles.error}>{errorMessage}</Text>
      <Button title="Enviar mensagem" onPress={sendWhatsAppMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  error: {
    color: 'red',
  },
});
