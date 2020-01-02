# FedaPay React

FedaPay CheckoutJs integration for React.js projects.

## Install
From a command terminal type the following
```
npm install fedapay-reactjs --save
```


## Add the CheckoutJs script
Add the checkout.js script in your index.html file.

```html
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
    <!-- Load the FedaPay checkout.js -->
    <script src="https://cdn.fedapay.com/checkout.js?v=1.1.2"></script>
  </body>
</html>
```

## Usage

```tsx
import React, { Component } from 'react';
import { FedaCheckoutButton, FedaCheckoutContainer } from 'fedapay-reactjs';

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

  render() {
    return (
      <div>
        <FedaCheckoutButton options={ this.checkoutButtonOptions } />
        <FedaCheckoutContainer options={ this.checkoutEmbedOptions }
          style={ { height: 500, width: 500, backgroundColor: '#eee' } } />
      </div>
    )
  }
}
