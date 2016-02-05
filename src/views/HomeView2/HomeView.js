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
import ArasaacLogo from './arasaac-logo.svg'
import SoftwareImage from './software.png'
import NewsImage from './news.png'
import PictogramsImage from './pictograms.png'

const messages = defineMessages({
  heading: {
    id: 'home.heading',
    description: 'Home heading',
    defaultMessage: '{aragones} portal of Augmentative and Alternative Communication'
  },
  aragonese: {
    id: 'home.aragonese',
    description: 'Home heading',
    defaultMessage: 'Aragonese'
  },
  pictograms: {
    id: 'home.pictograms',
    description: 'pictogramas',
    defaultMessage: 'Pictograms'
  },
  saac: {
    id: 'home.saac',
    description: 'banner',
    defaultMessage: 'What is SAAC?'
  },
  software: {
    id: 'home.software',
    description: 'Software',
    defaultMessage: 'Software'
  },
  news: {
    id: 'home.news',
    description: 'Arasaac news',
    defaultMessage: 'Arasaac news'
  },
  participate: {
    id: 'home.participate',
    description: 'Participate building Arasaac',
    defaultMessage: 'We are building Arasaac. Would you like to join us?'
  },
  contact: {
    id: 'home.contact',
    description: 'Contact button',
    defaultMessage: 'Contact us'
  }

})

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

  propTypes: {
    localeChange: React.PropTypes.func.isRequired
  },

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
    const {localeChange} = this.props
    var aragones = (<span style={styles.strong}><FormattedMessage {...messages.aragonese} /> </span>)
    return (
      <FullWidthSection style={styles.root}>
        <img style={styles.svgLogo} src={ArasaacLogo} />
        <div style={styles.tagline}>
          <h1 style={styles.h1}>ARA<span style={styles.strong}>SAAC</span></h1>
          <h2 style={styles.h2}>
            <FormattedMessage {...messages.heading} values={{aragones}} />
          </h2>
          <LanguageSelector style={styles.content} onChange={localeChange}/>
        </div>
      </FullWidthSection>
    )
  },

  _getHomeFeatures () {
    const styles = {maxWidth: 906}
    return (
      <FullWidthSection useContent={true} contentStyle={styles}>

        <HomeFeature
          heading={<FormattedMessage  {...messages.saac} />}
          route='/get-started'
          img={PictogramsImage}
          firstChild={true}/>
        <HomeFeature
          heading={<FormattedMessage {...messages.software} />}
          route='/customization'
          img={SoftwareImage} />
        <HomeFeature
          heading={<FormattedMessage  {...messages.news} />}
          route='/get-news'
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
        marginTop: 32,
        backgroundColor: Colors.green900
      }
    }

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          <FormattedMessage  {...messages.participate} />
        </h3>
        <RaisedButton
          label={<FormattedMessage  {...messages.contact} />}
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
        {this._getHomeFeatures()}
        {this._getHomeContribute()}
      </div>
    )
  }

})

export default connect(mapStateToProps, Object.assign({}, localeActions))(HomeView)
