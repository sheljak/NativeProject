import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Avatar} from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
});

const AmbasadorButton = props => (
  <TouchableOpacity
    {...props}
    style={[styles.button, props.style]}
    onPress={() => {
      props.navigation.navigate(props.nav, {
        userName: props.userName,
        userId: props.userId,
      });
    }}>
    <View style={props.buttonViewStyle}>
      <Avatar rounded size="medium" source={{uri: props.avatar}} />
      <Text style={props.btnText}>{props.userName}</Text>
    </View>
  </TouchableOpacity>
);

AmbasadorButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

AmbasadorButton.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default withNavigation(AmbasadorButton);
