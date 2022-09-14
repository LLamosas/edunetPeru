import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './styles';
import Input from 'appComponents/Input';
import Button from 'appComponents/Button';
import Radio from 'appComponents/Radio';
import InputPassword from 'appComponents/Input/InputPassword';
import {TYPE_LOGIN} from './const';
import {LOGO_LOGIN} from './assets';

import {useLogin} from './use-login';
const LoginScreen = () => {
  const {
    typeLogin,
    user,
    password,
    dni,
    onSetDNI,
    onPressRadio,
    onSetUser,
    onSetPassword,
    onPressButton,
  } = useLogin();

  const renderInputs = () => {
    return typeLogin === TYPE_LOGIN.DOCENTE ? (
      <>
        <Input
          label="Correo electrónico"
          placeholder="Correo electrónico"
          value={user}
          onChangeText={text => onSetUser(text)}
          keyboardType="email-address"
        />
        <InputPassword
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          value={password}
          onChangeText={text => onSetPassword(text)}
        />
      </>
    ) : (
      <Input
        label="Número de DNI"
        placeholder="Ingrese su DNI"
        value={dni}
        onChangeText={text => onSetDNI(text)}
        keyboardType="number-pad"
      />
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <Image source={LOGO_LOGIN} style={styles.logo} />
          </View>
          <View style={styles.radioContainer}>
            <Radio
              selected={typeLogin === TYPE_LOGIN.DOCENTE}
              onPress={() => onPressRadio(TYPE_LOGIN.DOCENTE)}>
              <Text style={styles.textRadio}>Docentes</Text>
            </Radio>
            <Radio
              selected={typeLogin === TYPE_LOGIN.SUPERVISION}
              onPress={() => onPressRadio(TYPE_LOGIN.SUPERVISION)}>
              <Text style={styles.textRadio}>Supervisión</Text>
            </Radio>
            <Radio
              selected={typeLogin === TYPE_LOGIN.PADRE}
              onPress={() => onPressRadio(TYPE_LOGIN.PADRE)}>
              <Text style={styles.textRadio}>Padre</Text>
            </Radio>
          </View>
          {renderInputs()}
          <View style={styles.componentContainer}>
            <Button label="Ingresar" onPress={onPressButton} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
