import {useState, memo, useEffect} from 'react';
import {TextInput} from 'react-native-paper';

function InputText({
  name,
  label,
  onPress,
  style,
  defaultValue,
  maxLength,
  updateFormValue,
  rightIcon = false,
  keyboard = 'default',
  error = false,
  disabled = false,
  multiline = 1,
}) {
  const [value, setValue] = useState();
  const [showPassword, setShowPassword] = useState(rightIcon);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const updateInputValue = val => {
    setValue(val);
    updateFormValue({name, value: val});
  };
  return (
    <TextInput
      mode="outlined"
      onPressIn={onPress}
      maxLength={maxLength}
      keyboardType={keyboard}
      label={label}
      value={value}
      error={error}
      secureTextEntry={showPassword}
      onChangeText={e => updateInputValue(e)}
      editable={!disabled}
      autoCapitalize="none"
      numberOfLines={multiline}
      multiline={multiline > 1 ? true : false}
      right={
        rightIcon &&
        (showPassword ? (
          <TextInput.Icon
            icon="eye"
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : (
          <TextInput.Icon
            icon="eye-off"
            onPress={() => setShowPassword(!showPassword)}
          />
        ))
      }
      style={{marginBottom: 15, ...style}}
    />
  );
}

export default memo(InputText);
