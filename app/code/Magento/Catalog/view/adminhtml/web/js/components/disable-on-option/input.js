/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'Magento_Ui/js/form/element/abstract',
    'Magento_Catalog/js/components/disable-on-option/strategy'
], function (Element, strategy) {
    'use strict';

    return Element.extend(strategy);
});