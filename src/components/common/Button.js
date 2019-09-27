import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {withNavigation} from 'react-navigation';
import TextStyles from '../../helpers/TextStyles';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
});

const Button = props => (
  <TouchableOpacity
    {...props}
    style={[styles.button, props.style]}
    onPress={() => {
      if (props.location) {
        props.navigation.navigate(props.nav, {
          location: props.location,
        });
      } else {
        Alert.alert(props.title + ' ' + 'field is empty...');
      }
    }}>
    <Text style={[TextStyles.fieldTitle, props.textStyle]}>{props.title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default withNavigation(Button);
