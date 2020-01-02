import * as React from 'react';
import CheckoutOptions from './checkout-options';

export interface Props {
  options: CheckoutOptions
}

/**
 * @class BaseComponent
 */
export class BaseComponent extends React.Component<Props> {
  componentDidMount() {
    if (typeof FedaPay === 'undefined') {
      throw new Error('checkout.js script need to be included!');
    }
  }
}

/**
 * @class FedaCheckoutButton
 */
export class FedaCheckoutButton extends BaseComponent {
  buttonRef: any;

  constructor(props: Props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    super.componentDidMount();
    this.initFedaPay();
  }

  initFedaPay() {
    FedaPay.init(this.buttonRef, this.props.options);
  }

  render() {
    return (
      <button ref={el => this.buttonRef = el} {...this.props}>
        Click to Pay
      </button>
    )
  }
}

/**
 * @class FedaCheckoutContainer
 */
export class FedaCheckoutContainer extends BaseComponent {
  containerRef: any;

  constructor(props: Props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    super.componentDidMount();
    this.initFedaPay();
  }

  initFedaPay() {
    this.props.options.container = this.containerRef;
    FedaPay.init(this.props.options);
  }

  render() {
    return (
      <div ref={el => this.containerRef = el} {...this.props}></div>
    )
  }
}
