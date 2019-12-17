# FedaPay React

FedaPay CheckoutJs integration for React.js projects.

## Install
From a command terminal type the following
```
npm install fedapay-react --save
```


## Add the CheckoutJs script
Add the checkout.js script in your index.html file.
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Fedapay Checkout React.JS Plugin</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>

    <div id="root"></div>

    <script src="https://cdn.fedapay.com/checkout.js?v=1.1.2"></script>
  </body>
</html>
```

## Usage

```JavaScript
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
