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

  buttonRef: any;

  constructor(props: Props) {
    super(props);
    this.buttonRef=React.createRef();

  }

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

    if (this.props.embeded) {
      //this.props.fedaCheckoutOptions.container = this.props.container;
      FedaPay.init(this.props.fedaCheckoutOptions);
    } else {
      FedaPay.init(this.buttonRef, this.props.fedaCheckoutOptions);
    }
  }

  render() {
    return ( !this.props.embeded? <button ref={el=> this.buttonRef = el}>Click</button> : '' )
  }
}
