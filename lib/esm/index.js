var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
/**
 * @class BaseComponent
 */
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseComponent.prototype.componentDidMount = function () {
        if (typeof FedaPay === 'undefined') {
            throw new Error('checkout.js script need to be included!');
        }
    };
    return BaseComponent;
}(React.Component));
export { BaseComponent };
/**
 * @class FedaCheckoutButton
 */
var FedaCheckoutButton = /** @class */ (function (_super) {
    __extends(FedaCheckoutButton, _super);
    function FedaCheckoutButton(props) {
        var _this = _super.call(this, props) || this;
        _this.buttonRef = React.createRef();
        return _this;
    }
    FedaCheckoutButton.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.initFedaPay();
    };
    FedaCheckoutButton.prototype.initFedaPay = function () {
        FedaPay.init(this.buttonRef, this.props.options);
    };
    FedaCheckoutButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("button", __assign({ ref: function (el) { return _this.buttonRef = el; } }, this.props), "Click to Pay"));
    };
    return FedaCheckoutButton;
}(BaseComponent));
export { FedaCheckoutButton };
/**
 * @class FedaCheckoutContainer
 */
var FedaCheckoutContainer = /** @class */ (function (_super) {
    __extends(FedaCheckoutContainer, _super);
    function FedaCheckoutContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = React.createRef();
        return _this;
    }
    FedaCheckoutContainer.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.initFedaPay();
    };
    FedaCheckoutContainer.prototype.initFedaPay = function () {
        this.props.options.container = this.containerRef;
        FedaPay.init(this.props.options);
    };
    FedaCheckoutContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", __assign({ ref: function (el) { return _this.containerRef = el; } }, this.props)));
    };
    return FedaCheckoutContainer;
}(BaseComponent));
export { FedaCheckoutContainer };
//# sourceMappingURL=index.js.map