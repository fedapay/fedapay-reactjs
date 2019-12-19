import * as React from 'react';
import FedaPayCheckoutComponent, { CheckoutProps } from './index';

/**
 * @class FedaPayCheckoutComponent
 */
export default class FedaCheckoutButton extends FedaPayCheckoutComponent {

  buttonRef: any;

  constructor(props: CheckoutProps) {
    super(props);
    this.buttonRef=React.createRef();
  }

  componentDidMount(){
    try {
      this.initFedaPay();
    } catch(e){
      console.error(e);
    }
  }

  initFedaPay() {
    const FedaPay = window['FedaPay'];
    FedaPay.init(this.buttonRef, this.props.fedacheckoutoptions);
  }


  render() {

    return (
      <button
      ref={el=> this.buttonRef = el}
      {...this.props}
      >Click</button>
    )
  }
}
