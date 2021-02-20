import React, { useCallback, useState, useRef } from 'react';

import {
  TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/wall.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

//import api from '../../services/api';

import {
  BackgroundImage,
  Gradient,
  Title,
  InfoText,
  SignInBox,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);



  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await signIn({
        //   email: data.email,
        //   password: data.password,
        // });

      } catch (err) {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          console.log(err);

          if(!!errors.email){
            setEmailError(true);
          }

          if(!!errors.password){
            setPasswordError(true);
          }

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Gradient>
          <BackgroundImage source={logoImg} resizeMode="contain" />

          <SignInBox>
            <Title>
              Olá, seja
              {'\n'}
              bem-vindo!
            </Title>
            <InfoText>Para acessar a plataforma, faça seu login.</InfoText>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                error={emailError}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="E-MAIL"
                placeholder="user.name@mail.com"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                error={passwordError}
                ref={passwordInputRef}
                secureTextEntry
                name="SENHA"
                placeholder="*******"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button onPress={() => {
                formRef.current?.submitForm();
              }}
              >
                ENTRAR

              </Button>
            </Form>
          </SignInBox>

          <ForgotPassword onPress={() => { console.log('forgot'); }}>
            <ForgotPasswordText>
              Esqueceu seu login ou senha?
              {'\n'}
              Clique aqui
            </ForgotPasswordText>
          </ForgotPassword>

        </Gradient>
      </ScrollView>

    </KeyboardAvoidingView>
  );
};
export default SignIn;
