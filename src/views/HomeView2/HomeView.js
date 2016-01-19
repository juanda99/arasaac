import React from 'react'
import { connect } from 'react-redux'
import {History} from 'react-router'
import HomeFeature from './HomeFeature'
import FullWidthSection from 'components/full-width-section'

import RaisedButton from 'material-ui/lib/raised-button'
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins'
import {Colors, Spacing, Typography, lightBaseTheme} from 'material-ui/lib/styles'
import LanguageSelector from 'components/LanguageSelector'
import { actions as localeActions } from 'redux/modules/locale'
import { defineMessages, FormattedMessage } from 'react-intl'
import WelcomeImage from './bienvenido.png'
import ArasaacLogo from './arasaac-logo.svg'
import GobiernoAragon from './gobierno-aragon-logo.svg'
import UnionEuropea from './union-europea-logo.png'
import SoftwareImage from './software.png'
import NewsImage from './news.png'
import PictogramsImage from './pictograms.png'


// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  locale: state.locale
})

const HomeView = React.createClass({

  mixins: [
    StylePropable,
    StyleResizable,
    History
  ],

  _getHomePageHero () {
    let styles = {
      root: {
        backgroundColor: Colors.lightGreen500,
        overflow: 'hidden'
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 225,
        width: 300
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 625
      },
      label: {
        color: lightBaseTheme.palette.primary1Color
      },
      githubStyle: {
        margin: '16px 32px 0px 8px'
      },
      demoStyle: {
        margin: '16px 32px 0px 32px'
      },
      h1: {
        color: Colors.darkWhite,
        fontWeight: Typography.fontWeightLight
      },
      h2: {
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0
      },
      nowrap: {
        whiteSpace: 'nowrap'
      },
      strong: {
        color: Colors.green900
      },
      taglineWhenLarge: {
        marginTop: 32
      },
      h1WhenLarge: {
        fontSize: 56
      },
      h2WhenLarge: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12
      }
    }

    styles.h2 = this.mergeStyles(styles.h1, styles.h2)

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.tagline = this.mergeStyles(styles.tagline, styles.taglineWhenLarge)
      styles.h1 = this.mergeStyles(styles.h1, styles.h1WhenLarge)
      styles.h2 = this.mergeStyles(styles.h2, styles.h2WhenLarge)
    }
    

    return (
      <FullWidthSection style={styles.root}>
        <img style={styles.svgLogo} src={ArasaacLogo} />
        <div style={styles.tagline}>
          <h1 style={styles.h1}>ARA<span style={styles.strong}>SAAC</span></h1>
          <h2 style={styles.h2}>
            Portal <span style={styles.strong}>Aragonés</span> de la Comunicación Aumentativa y Alternativa
          </h2>
          
        </div>
      </FullWidthSection>
    )
  },

  _getHomePurpose () {
    const styles = {
      root: {
        backgroundColor: Colors.grey200
      },
      content: {
        maxWidth: 700,
        padding: 0,
        margin: '0 auto',
        fontWeight: Typography.fontWeightLight,
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
        color: Typography.textDarkBlack
      }
    }

    return (
      <FullWidthSection
        style={styles.root}
        useContent={true}
        contentStyle={styles.content}
        contentType='p'
        className='home-purpose'>
        Arasaac es un proyecto del <a target='_blank' href='http://www.aragon.es/'>
        Gobierno de Aragón </a> financiado con fondos sociales europeos.
        El proyecto está en fase de desarrollo.
        <div class='row'>
        <div class='col-sm-4'>
        <img class='img-responsive' src={GobiernoAragon}/>
        </div>
        <div class='col-sm-4'>
        <img src={UnionEuropea}/>
        </div>
        </div>
      </FullWidthSection>
    )
  },

  _getHomeFeatures () {
    const styles = {maxWidth: 906}
    const {localeChange} = this.props

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
      <h1>Elige tu idioma</h1>
      <div>
        <img style={{width:'300px'}} 
          src={WelcomeImage}
                 alt='' />
      <LanguageSelector onChange={localeChange}/>
    </div>
        <HomeFeature
          heading='Pictogramas'
          route='/get-started'
          img={PictogramsImage}
          firstChild={true}/>
        <HomeFeature
          heading='Programas'
          route='/customization'
          img={SoftwareImage} />
        <HomeFeature
          heading='Portal de Arasaac'
          route='/components'
          img={NewsImage}
          lastChild={true}/>
      </FullWidthSection>
    )
  },

  _getHomeContribute () {
    const styles = {
      root: {
        backgroundColor: Colors.grey200,
        textAlign: 'center'
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: Typography.fontWeightLight,
        fontSize: 22
      },
      button: {
        marginTop: 32
      }
    }

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          Want to help make this <span style={styles.nowrap}>project awesome? </span>
          <span style={styles.nowrap}>Check out our repo.</span>
        </h3>
        <RaisedButton
          label='GitHub'
          primary={true}
          linkButton={true}
          href='https://github.com/callemall/material-ui'
          style={styles.button}/>
      </FullWidthSection>
    )
  },

  _onDemoClick () {
    this.history.pushState(null, '/components')
  },

  render () {
    const style = {
      paddingTop: Spacing.desktopKeylineIncrement
    }

    return (
      <div style={style}>
        {this._getHomePageHero()}
        {this._getHomePurpose()}
        {this._getHomeFeatures()}
        {this._getHomeContribute()}
      </div>
    )
  }

})

export default connect(mapStateToProps, localeActions)(HomeView)
