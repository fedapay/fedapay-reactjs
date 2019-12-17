import React, { Component } from 'react'

import FedaPayCheckoutComponent from 'fedapay-react'


export default class App extends Component {

  checkoutButtonOptions = {
        public_key: 'pk_sandbox_any5haoJcTgH3ja2EkCbsfam',
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
        public_key: 'pk_sandbox_any5haoJcTgH3ja2EkCbsfam',
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
        <FedaPayCheckoutComponent fedaCheckoutOptions={this.checkoutButtonOptions}>
            <button id="btn_id"> Click on me </button>
         </FedaPayCheckoutComponent>

         <FedaPayCheckoutComponent fedaCheckoutOptions={this.checkoutEmbedOptions} embeded="true">
            <div style={{height : 500, width: 500, backgroundColor: '#eee'}} id="container_id"></div>
         </FedaPayCheckoutComponent>
      </div>
    )
  }
}
