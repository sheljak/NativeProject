import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';
import {withNavigation} from 'react-navigation';

class LocationPicker extends Component {
  constructor(props) {
    const locations = require('../../assets/countries/countries.json');
    super(props);
    this.state = {
      selectedCountry: '',
      selectedRegion: '',
      locationList: locations,
    };
  }

  buildCountriesList() {
    const countriesList = this.state.locationList.map(country => {
      return (
        <Picker.Item
          label={country.countryName}
          value={country.countryShortCode}
          key={country.countryShortCode}
        />
      );
    });
    return countriesList;
  }

  buildRegionsList() {
    const countryFiltered = this.state.locationList.filter(country => {
      return country.countryShortCode === this.state.selectedCountry;
    })[0];
    const regionList = [];

    if (typeof countryFiltered !== 'undefined') {
      countryFiltered.regions.map(region => {
        regionList.push(
          <Picker.Item
            label={region.name}
            value={region.name}
            key={region.name}
          />,
        );
      });
    }
    return regionList;
  }

  render() {
    return (
      <View>
        <Picker
          style={styles.picker}
          selectedValue={this.state.selectedCountry}
          onValueChange={itemValue => {
            this.setState(
              {
                selectedCountry: itemValue,
                selectedRegion: '',
              },
              () => {
                this.props.parentCallback(
                  this.state.selectedCountry,
                  this.state.selectedRegion,
                );
              },
            );
          }}>
          <Picker.Item label="Select country..." value="" />
          {this.buildCountriesList()}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={this.state.selectedRegion}
          onValueChange={itemValue => {
            this.setState(
              {
                selectedRegion: itemValue,
              },
              () => {
                this.props.parentCallback(
                  this.state.selectedCountry,
                  this.state.selectedRegion,
                );
              },
            );
          }}>
          <Picker.Item label="Select region..." value="" />
          {this.buildRegionsList()}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    marginHorizontal: 15,
  },
  text: {
    fontFamily: 'sans-serif-light',
    alignSelf: 'center',
  },
});

export default withNavigation(LocationPicker);
