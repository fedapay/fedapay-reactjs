import React, { Component } from 'react'
import {FedaCheckoutButton, FedaCheckoutContainer} from 'fedapay-react'

export default class App extends Component {

  PUBLIC_KEY = 'pk_sandbox_XXXXXX';

  checkoutButtonOptions = {
        public_key: this.PUBLIC_KEY,
        transaction: {
            amount: 100,
            description: 'Airtime'
        },
        currency: {
            iso: 'XOF'
        },
        button: {
            class: 'btn btn-primary',
            text: 'Payer 100 FCFA'
        },
        onComplete(resp) {
            const FedaPay = window['FedaPay'];
            if (resp.reason === FedaPay.DIALOG_DISMISSED) {
                alert('Vous avez fermé la boite de dialogue');
            } else {
                alert('Transaction terminée: ' + resp.reason);
            }

            console.log(resp.transaction);
        }
    };

    checkoutEmbedOptions = {
        public_key: this.PUBLIC_KEY,
        transaction: {
            amount: 100,
            description: 'Airtime'
        },
        currency: {
            iso: 'XOF'
        }
    };
  render () {
    return (
      <div>
        <FedaCheckoutButton fedacheckoutoptions={this.checkoutButtonOptions} />

        <FedaCheckoutContainer
          fedacheckoutoptions={this.checkoutEmbedOptions}
          style={{height : 500, width: 500, backgroundColor: '#eee'}}
        />
      </div>
    )
  }
}
