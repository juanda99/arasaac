import React, {Component, PropTypes} from 'react'
import {darkWhite, lightWhite} from 'material-ui/styles/colors'
import UnionEuropea from 'images/union-europea-logo2.png'
import GobiernoAragon from 'images/gobierno-aragon-logo.svg'
// import myStyle from 'theme/variables'
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
    const styles = {
      a: {
        color: darkWhite
      },
      copyright:{
        paddingTop: '10px'
      },
      p: {
        margin: '0 auto',
        maxWidth: 600,
        color: 'white',
        fontWeight: 'normal',
        fontSize: '15px'
      },
      img: {
        width: '100%'
      },
      logoUE: {
        width: '100%',
        position: 'relative',
        top: '-11px'
      }

    }
    return styles
  }
  render() {
    const styles = this.getStyles()
    return (
      <footer style={this.props.style} className='container-fluid'>
        <div className='row middle-sm middle-xs' style={styles.copyright}>
          <div className='col-md-7 col-xs-12'>
            <p style={styles.p}>
                    {'© ARASAAC - Gobierno de Aragón, 2016'}</p><p style={styles.p}>
                    {'Designed and built with all the love in the world by'} <a style={styles.a} href='https://github.com/orgs/Arasaac/people'>
                    {'the Arasaac team.'}</a></p>
            <p style={styles.p}>{'Code licensed MIT, docs'} <a style={styles.a} href='https://creativecommons.org/licenses/by/3.0/'>{'CC BY 3.0.'}</a>
            </p>
          </div>
          <div className='col-md-2 col-xs-6 first-md'>
            <img style={styles.img} src={GobiernoAragon} />
          </div>

          <div className='col-md-2 col-xs-6'>
            <img style={styles.logoUE} src={UnionEuropea} />
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
