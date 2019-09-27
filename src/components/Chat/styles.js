import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingTop: 40,
  },
  logoContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 40,
    paddingBottom: '30%',
  },
  btn: {
    padding: 20,
    backgroundColor: 'orange',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 12,
  },
  btnText: {
    color: '#fff',
    fontSize: 18
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    width: 250,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

export default styles;
