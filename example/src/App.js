import React, { Component } from 'react'

import FedaCheckoutComponent from 'fedacheckout-react'



export default class App extends Component {
  render () {
    return (
      <div>
         <FedaCheckoutComponent
            data_public_key="pk_sandbox_any5haoJcTgH3ja2EkCbsfam"
            data_transaction_amount="5"
            data_transaction_description="Première transaction"
            data_currency_iso="XOF"
            data_button_class="btn btn-secondary"
          />
      </div>
    )
  }
}
