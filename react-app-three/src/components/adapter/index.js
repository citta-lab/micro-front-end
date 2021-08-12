import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../Example';

/**
 * ReactDOM.render(<Example />, document.getElementById('root')); is how react injects the
 * react to HTML DOM. you can see this in src/index.js which is generated from CRA scaffold.
 * So we are doing the same but wrapped with in define.
 */

define(function(){
    const AppThreeAdapter = function () {};

    AppThreeAdapter.prototype.showModal = function(targetNode, props) {
        ReactDOM.render(<Example />),targetNode
    };

    return AppThreeAdapter;
})

