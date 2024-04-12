import {useState, useCallback} from 'react';
import {View} from 'react-native';
import {
  GiftedChat,
  Bubble,
  Send,
  MessageText,
  InputToolbar,
} from 'react-native-gifted-chat';
import {Screen} from '../../../Components/Screen';
import {useTheme, IconButton} from 'react-native-paper';
export default function CustomerService() {
  const {colors} = useTheme();
  const [messages, setMessages] = useState([]);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.primary,
          },
        }}
      />
    );
  };
  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <IconButton icon="send" size={25} iconColor={colors.primary} />
        </View>
      </Send>
    );
  };
  return (
    <Screen padding list>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderBubble={renderBubble}
        user={{_id: 1, name: 'User Test'}}
        renderSend={renderSend}
        alwaysShowSend
        textInputStyle={{color: colors.onBackground}}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: colors.background,
              marginTop: 5,
            }}
          />
        )}
      />
    </Screen>
  );
}
