import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  btn: {
    alignSelf: 'stretch',
    height: 80,
    borderWidth: 1,
    fontSize: 25,
    paddingLeft: 15,
    borderRadius: 2,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderRightWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  btnText: {
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 20,
  },
  btnContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default styles;
