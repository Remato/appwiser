import React, {
  useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import { Container, TitleTextInput, TextInput, IconView } from './styles';

import Icon from 'react-native-vector-icons/Feather';

interface InputProps extends TextInputProps{
  name: string;
  error: boolean;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ error, name, ...rest }, ref) => {
  const inputElementRef = useRef<any>(null);

  const {
    registerField, defaultValue = '', fieldName,
  } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TitleTextInput>{name}</TitleTextInput>
      <Container >
        <TextInput
          error={error}
          isFocused={isFocused}
          ref={inputElementRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          keyboardAppearance="dark"
          placeholderTextColor="#989FDB"
          defaultValue={defaultValue}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        >
        </TextInput>
      </Container>
    </>
  );
};
export default forwardRef(Input);
