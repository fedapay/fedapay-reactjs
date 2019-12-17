import * as React from 'react';
import { CheckoutOptions } from './checkout-options';

/**
 * @class FedaPayCheckoutComponent
 */
interface Props {
  fedaCheckoutOptions : CheckoutOptions,
  embeded: boolean
}
export default class FedaPayCheckoutComponent extends React.Component<Props> {

  childElement: any;

  componentDidMount(){
    if (typeof window['FedaPay'] === 'undefined') {
      console.error('checkout.js script need to be included!');
    } else {
      try {
        this.initFedaPay();
      } catch(e){
        console.error(e);
      }
    }
  }

  initFedaPay() {
    const FedaPay = window['FedaPay'];

    if (this.props.children instanceof Array || !this.props.children) {
      console.error('Exactly one Element should be included as FedaPayCheckoutComponent child !');
    } else {
      this.childElement = this.props.children;

      if (!this.childElement.props.id) {
        throw new Error('The child Element should have an id');
      }

      const childElementId = `#${this.childElement.props.id}`;
      if (this.props.embeded) {
          this.props.fedaCheckoutOptions.container = childElementId;
          FedaPay.init(this.props.fedaCheckoutOptions);
      } else {
        FedaPay.init(childElementId, this.props.fedaCheckoutOptions);
      }
    }
  }

  render() {
    return (this.props.children)
  }
}
