import DropDown from 'react-native-paper-dropdown';
import {useState} from 'react';
import {useTheme} from 'react-native-paper';
const Dropdown = ({label, name, value, updateFormValue, list, style}) => {
  const {colors} = useTheme();
  const [dropdown, setDropdown] = useState(false);
  return (
    <DropDown
      label={label}
      mode="outlined"
      visible={dropdown}
      showDropDown={() => setDropdown(true)}
      onDismiss={() => setDropdown(false)}
      value={value}
      setValue={value => {
        updateFormValue({name, value});
      }}
      list={list}
      dropDownContainerHeight={'100%'}
      dropDownItemTextStyle={{color: colors.onBackground}}
    />
  );
};

export default Dropdown;
