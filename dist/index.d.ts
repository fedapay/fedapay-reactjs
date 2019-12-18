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
    buttonRef: any;
    constructor(props: Props);
    componentDidMount(): void;
    initFedaPay(): void;
    render(): JSX.Element | "";
}
export {};
