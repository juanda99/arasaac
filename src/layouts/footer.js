import React, {Component, PropTypes} from 'react'
import {
  Colors
} from 'material-ui/lib/styles'
import UnionEuropea from 'images/union-europea-logo2.png'
import GobiernoAragon from 'images/gobierno-aragon-logo.svg'
import myStyle from 'theme/variables'
// import {defineMessages} from 'react-intl'
/* const messages = defineMessages({
  spanish: {
    id: 'languageSelector.spanish',
    description: 'Select language',
    defaultMessage: 'Spanish'
  },
  english: {
    id: 'languageSelector.english',
    description: 'Select language',
    defaultMessage: 'English'
  },
  french: {
    id: 'languageSelector.french',
    description: 'Select language',
    defaultMessage: 'French'
  },
  chooseLanguage: {
    id: 'languageSelector.choose',
    description: 'Select language',
    defaultMessage: 'Choose your language'
  }
}) */

class Footer extends Component {
  getStyles() {
    const darkWhite = Colors.darkWhite
    const styles = {
      row: {
        minHeight: myStyle.footer.height
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 450
      },
      img: {
        width: '100%'
      }
    }
    return styles
  }
  render() {
    const styles = this.getStyles()
    return (
      <footer style={this.props.style} className='container-fluid'>
        <div style={styles.row} className='row middle-xs middle-xs'>
          <div className='col-sm-7 col-xs-12'>
            <p style={styles.p}>
                    {'© ARASAAC - Gobierno de Aragón, 2016'}</p><p style={styles.p}>
                    {'Designed and built with all the love in the world by'} <a style={styles.a} href='https://github.com/orgs/Arasaac/people'>
                    {'the Arasaac team.'}</a></p>
            <p style={styles.p}>{'Code licensed MIT, docs'} <a style={styles.a} href='https://creativecommons.org/licenses/by/3.0/'>{'CC BY 3.0.'}</a>
            </p>
          </div>
          <div className='col-sm-2 col-xs-6 first-sm'>
            <img style={styles.img} src={GobiernoAragon} />
          </div>

          <div className='col-sm-2 col-xs-6'>
            <img style={styles.img} src={UnionEuropea} />
          </div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
  style: PropTypes.object
}

export default Footer
