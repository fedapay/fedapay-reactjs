import * as React from 'react';
import { CheckoutOptions } from './checkout-options';
/**
 * @class FedaPayCheckoutComponent
 */
interface Props {
    fedaCheckoutOptions: CheckoutOptions;
    embeded: boolean;
}
export default class FedaPayCheckoutComponent extends React.Component<Props> {
    childElement: any;
    componentDidMount(): void;
    initFedaPay(): void;
    render(): React.ReactNode;
}
export {};
