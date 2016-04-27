import React from 'react'
import Facebook from 'svg-icons/facebook'
import Colors from 'material-ui/lib/styles/colors'

const style = {
  top: 7,
  position: 'relative',
  width: 30,
  marginLeft: 40
}

const FacebookIcon = () => (
  <Facebook style={style} color={Colors.white}/>
)

export default FacebookIcon
