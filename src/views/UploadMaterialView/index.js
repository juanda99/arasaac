import React from 'react'
import {MaterialForm} from 'components/materials'
import FullWidthSection from 'components/full-width-section'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  appUploadMaterial: {
    id: 'appuploadmaterial.title',
    description: 'Title for share material view',
    defaultMessage: 'Share your material with other Arasaac users'
  }
})

const UploadMaterialView = () => {
  return (
    <FullWidthSection useContent={true}>
      <div className='row'>
        <h1>{<FormattedMessage {...messages.appUploadMaterial} />}</h1>
      </div>
      <MaterialForm />
    </FullWidthSection>
  )
}

export default UploadMaterialView
