import { createRef, createElement, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var FedaPayCheckoutComponent = /** @class */ (function (_super) {
    __extends(FedaPayCheckoutComponent, _super);
    function FedaPayCheckoutComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FedaPayCheckoutComponent.prototype.componentDidMount = function () {
        if (typeof window['FedaPay'] === 'undefined') {
            throw new Error('checkout.js script need to be included!');
        }
    };
    return FedaPayCheckoutComponent;
}(Component));
//# sourceMappingURL=index.js.map

/**
 * @class FedaPayCheckoutComponent
 */
var FedaCheckoutButton = /** @class */ (function (_super) {
    __extends(FedaCheckoutButton, _super);
    function FedaCheckoutButton(props) {
        var _this = _super.call(this, props) || this;
        _this.buttonRef = createRef();
        return _this;
    }
    FedaCheckoutButton.prototype.componentDidMount = function () {
        try {
            this.initFedaPay();
        }
        catch (e) {
            console.error(e);
        }
    };
    FedaCheckoutButton.prototype.initFedaPay = function () {
        var FedaPay = window['FedaPay'];
        FedaPay.init(this.buttonRef, this.props.fedacheckoutoptions);
    };
    FedaCheckoutButton.prototype.render = function () {
        var _this = this;
        return (createElement("button", __assign({ ref: function (el) { return _this.buttonRef = el; } }, this.props), "Click"));
    };
    return FedaCheckoutButton;
}(FedaPayCheckoutComponent));
//# sourceMappingURL=FedaCheckoutButton.js.map

/**
 * @class FedaPayCheckoutComponent
 */
var FedaCheckoutContainer = /** @class */ (function (_super) {
    __extends(FedaCheckoutContainer, _super);
    function FedaCheckoutContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = createRef();
        return _this;
    }
    FedaCheckoutContainer.prototype.componentDidMount = function () {
        try {
            this.initFedaPay();
        }
        catch (e) {
            console.error(e);
        }
    };
    FedaCheckoutContainer.prototype.initFedaPay = function () {
        var FedaPay = window['FedaPay'];
        this.props.fedacheckoutoptions.container = this.containerRef;
        FedaPay.init(this.props.fedacheckoutoptions);
    };
    FedaCheckoutContainer.prototype.render = function () {
        var _this = this;
        return (createElement("div", __assign({ ref: function (el) { return _this.containerRef = el; } }, this.props)));
    };
    return FedaCheckoutContainer;
}(FedaPayCheckoutComponent));

export { FedaPayCheckoutComponent, FedaCheckoutButton, FedaCheckoutContainer };
//# sourceMappingURL=index.es.js.map
