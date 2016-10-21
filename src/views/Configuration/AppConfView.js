import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import FullWidthSection from 'components/full-width-section'
import PictogramsFiltersConf from './PictogramsFiltersConf'

const messages = defineMessages({
  appConfiguration: {
    id: 'appconf.title',
    description: 'Title for Arasaac configuration view',
    defaultMessage: 'Arasaac configuration'
  }
})

const AppConfView = () => {
  return (
    <FullWidthSection useContent={true}>
      <div className='row'>
        <h1>{<FormattedMessage {...messages.appConfiguration} />}</h1>
      </div>
      <PictogramsFiltersConf />
    </FullWidthSection>
  )
}

export default AppConfView
