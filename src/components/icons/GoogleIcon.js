import React from 'react'
import Google from 'svg-icons/google'
import Colors from 'material-ui/styles/colors';

const style = {
  top: 7,
  position: 'relative',
  width: 30,
  marginLeft: 25
}

const GoogleIcon = () => (
  <Google style={style} color={Colors.white}/>
)

export default GoogleIcon
