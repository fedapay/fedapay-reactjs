import * as React from 'react';
import { CheckoutOptions } from './checkout-options';


export interface CheckoutProps {
  fedacheckoutoptions : CheckoutOptions
}

/**
 * @class FedaPayCheckoutComponent
 */
export default class FedaPayCheckoutComponent
  extends React.Component<CheckoutProps> {
  componentDidMount(){
    if (typeof window['FedaPay'] === 'undefined') {
      throw new Error('checkout.js script need to be included!');
    }
  }
}
