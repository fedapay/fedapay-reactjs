/**
 * @class FedaCheckoutComponent
 */
import * as React from 'react';
export declare type Props = {
    data_public_key: string;
    data_transaction_amount: string;
    data_transaction_description: string;
    data_currency_iso: string;
    data_button_text?: string;
    data_button_class?: string;
    data_widget_description?: string;
    data_widget_image?: string;
    data_widget_title?: string;
    compte_type?: string;
};
export default class FedaCheckoutComponent extends React.Component<Props> {
    componentDidMount(): void;
    render(): JSX.Element;
}
