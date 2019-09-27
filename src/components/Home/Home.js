import React, {useEffect, useState} from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchAmbasadors} from '../../actions/Ambasadors';
import styles from './styles';
import Button from '../common/Button';

import LocationPicker from '../common/LocationPicker';

function HomeScreen(props) {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    props.fetchAmbasadors();
  }, []);

  callback = (countrySelect, regionSelect) => {
    setCountry(countrySelect);
    setRegion(regionSelect);
  };

  const countryButton = 'Search by Country';
  const regionButton = 'Search by Region';
  const ambasadorsScreen = 'Ambasarors';

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
        <View>
          <LocationPicker parentCallback={this.callback} />

          <View style={styles.btnContainer}>
            <Button
              title={countryButton}
              nav={ambasadorsScreen}
              location={country}
              style={styles.btn}
              textStyle={styles.btnText}
            />
            <Button
              title={regionButton}
              nav={ambasadorsScreen}
              location={region}
              style={styles.btn}
              textStyle={styles.btnText}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function mapStateToProps(state) {
  return {
    ambasadors: state.ambasadors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({fetchAmbasadors}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
