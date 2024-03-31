import {useState, memo} from 'react';
import {TextInput} from 'react-native-paper';

function InputText({
  name,
  label,
  style,
  defaultValue,
  updateFormValue,
  rightIcon = false,
  keyboard = 'default',
  error = false,
  disabled = false,
}) {
  const [value, setValue] = useState(defaultValue);
  const [showPassword, setShowPassword] = useState(rightIcon);

  const updateInputValue = val => {
    setValue(val);
    updateFormValue({name, value: val});
  };
  return (
    <TextInput
      mode="outlined"
      keyboardType={keyboard}
      label={label}
      value={value}
      error={error}
      secureTextEntry={showPassword}
      onChangeText={e => updateInputValue(e)}
      editable={!disabled}
      autoCapitalize="none"
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
