import React, {useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {connect} from 'react-redux';

function ChatScreen(props) {
  const {navigation} = props;
  const [userId] = useState(navigation.getParam('userId', 'NO-Param'));
  const [message, setMessage] = useState([]);

  const user = props.users.ambasadors.data.users.filter(
    usersById => usersById.id === userId,
  )[0];

  const mess = [
    {
      _id: 1,
      text: user.introduction,
      createdAt: new Date(),
      user: {
        _id: user.id,
        name: user.name,
        avatar: user.avatar.original,
      },
    },
  ];

  useEffect(() => {
    setMessage(mess);
  }, []);

  onSend = (messages = []) => {
    setMessage(GiftedChat.append(message, messages));
  };

  return (
    <GiftedChat
      messages={message}
      onSend={messages => this.onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    users: state.ambasadors,
  };
}

ChatScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Chat with' + ' ' + navigation.getParam('userName', 'User'),
  };
};

export default connect(mapStateToProps)(ChatScreen);
