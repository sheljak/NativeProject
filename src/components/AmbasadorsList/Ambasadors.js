import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import AmbasadorButton from '../common/AmbasadorButton';

function AmbasadorsScreen(props) {
  const {navigation} = props;
  const [location] = useState(navigation.getParam('location', 'NO-Param'));
  const [users, setUsers] = useState(false);
  const chatScreen = 'Chat';

  const filteredUsersByLocation = props.users.ambasadors.data.users.filter(
    usersByLocation =>
      usersByLocation.country === location ||
      usersByLocation.region === location,
  );

  useEffect(() => {
    setUsers(filteredUsersByLocation);
  }, []);

  const ambasadors = [];

  users
    ? users.map(user => {
        ambasadors.push(
          <AmbasadorButton
            style={styles.btn}
            buttonViewStyle={styles.btnContainer}
            btnText={styles.btnText}
            userName={user.name}
            avatar={user.avatar.original}
            userId={user.id}
            key={user.id}
            nav={chatScreen}
          />,
        );
      })
    : null;
  return (
    <View style={styles.container}>
      <View style={styles.body}>{ambasadors}</View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    users: state.ambasadors,
  };
}

AmbasadorsScreen.navigationOptions = {
  title: 'List of Ambasadors',
};

export default connect(mapStateToProps)(AmbasadorsScreen);
