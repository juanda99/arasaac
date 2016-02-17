import React, {Component} from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  bingo: {
    id: 'bingo.title',
    description: 'h1 bingo webpage',
    defaultMessage: 'Bingo'
  }
})

export class BingoView extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1><FormattedMessage {...messages.bingo} /></h1>
        <hr />
      </div>
    )
  }
}

export default BingoView
