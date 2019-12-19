import * as React from 'react';
import FedaPayCheckoutComponent, { CheckoutProps } from './index';

/**
 * @class FedaPayCheckoutComponent
 */
export default class FedaCheckoutContainer extends FedaPayCheckoutComponent {

  containerRef: any;

  constructor(props: CheckoutProps) {
    super(props);
    this.containerRef=React.createRef();
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
    this.props.fedacheckoutoptions.container = this.containerRef;
    FedaPay.init(this.props.fedacheckoutoptions);
  }

  render() {
    return (
      <div
      ref={el=> this.containerRef = el}
      {...this.props}
      ></div>
    )
  }
}
