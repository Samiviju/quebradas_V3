import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: 170,
    left: 50
  },

  grafite1: {
    left: 160,
    top: 65
  },


  backgroudFundo: {
    height: 210,
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  bemVindo: {
    fontSize: 27.5,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 90,
    fontFamily: 'Roboto'

  },

  containerLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75
  },

  textLogin: {
    fontSize: 24.42,
    fontWeight: 'bold',
  },

  containerInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    height: 50,
    width: 232,
    margin: 12,
    borderWidth: 1.86,
    borderColor: '#D9D9D9',
    borderRadius: 9.28,
    padding: 10,
  },

  butao: {
    backgroundColor: '#B400C6',
    width: 232,
    height: 46.47,
    display: "flex",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00000'
  },

  grafite2: {
    bottom: -74
  }
});