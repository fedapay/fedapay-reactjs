import * as React from 'react';
import CheckoutOptions from './checkout-options';
export interface Props {
    options: CheckoutOptions;
}
/**
 * @class BaseComponent
 */
export declare class BaseComponent extends React.Component<Props> {
    componentDidMount(): void;
}
/**
 * @class FedaCheckoutButton
 */
export declare class FedaCheckoutButton extends BaseComponent {
    buttonRef: any;
    constructor(props: Props);
    componentDidMount(): void;
    initFedaPay(): void;
    render(): React.JSX.Element;
}
/**
 * @class FedaCheckoutContainer
 */
export declare class FedaCheckoutContainer extends BaseComponent {
    containerRef: any;
    constructor(props: Props);
    componentDidMount(): void;
    initFedaPay(): void;
    render(): React.JSX.Element;
}
