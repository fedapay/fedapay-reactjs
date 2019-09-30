/**
 * @class FedaCheckoutComponent
 */

import * as React from 'react'


export type Props = { 
  data_public_key : string,
  data_transaction_amount : string,
  data_transaction_description : string,
  data_currency_iso : string,

  data_button_text ? : string,
  data_button_class ? : string,
  data_widget_description ? : string,
  data_widget_image ? : string,
  data_widget_title ? : string,
  compte_type ? : string;
}

export default class FedaCheckoutComponent extends React.Component<Props> {
  
  componentDidMount(){
    
    let scriptTag = document.createElement('script');
    
    scriptTag.src = (this.props.compte_type == "Live") ? 'https://checkout.fedapay.com/js/checkout.js' : 'https://sandbox-checkout.fedapay.com/js/checkout.js';

    scriptTag.setAttribute('data-public-key',this.props.data_public_key);
    scriptTag.setAttribute('data-transaction-amount',this.props.data_transaction_amount);
    scriptTag.setAttribute('data-transaction-description',this.props.data_transaction_description);
    scriptTag.setAttribute('data-currency-iso',this.props.data_currency_iso);

    //optionnal parameters
    scriptTag.setAttribute('data-button-text',this.props.data_button_text || ` Payer ${this.props.data_transaction_amount} F CFA`);
    scriptTag.setAttribute('data-button-class',this.props.data_button_class || "btn btn-secondary");
    scriptTag.setAttribute('data-widget-description',this.props.data_widget_description || "Votre boutique 100% africaine");
    scriptTag.setAttribute('data-widget-image',this.props.data_widget_image || "https://sandbox-checkout.fedapay.com/img/marketplace.svg");
    scriptTag.setAttribute('data-widget-title',this.props.data_widget_title || "Afrimarket");
    
    document.getElementById('checkout-box')!.appendChild(scriptTag); 
 
}
  
  render() {

    return (
      <div id="checkout-box"> </div>
    )
  }
}
