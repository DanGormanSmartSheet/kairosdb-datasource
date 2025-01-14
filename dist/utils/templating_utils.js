System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var lodash_1, TemplatingUtils;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }
        ],
        execute: function () {
            TemplatingUtils = (function () {
                function TemplatingUtils(templateSrv, scopedVars) {
                    this.templateSrv = templateSrv;
                    this.scopedVars = scopedVars;
                }
                TemplatingUtils.prototype.replace = function (expression) {
                    var replacedExpression = this.templateSrv.replace(expression, this.scopedVars);
                    if (replacedExpression) {
                        var matchedMultiValues = replacedExpression.match(TemplatingUtils.MULTI_VALUE_REGEX);
                        if (!lodash_1.default.isNil(matchedMultiValues)) {
                            var replacedValues_1 = [replacedExpression];
                            matchedMultiValues.forEach(function (multiValue) {
                                if (multiValue.indexOf(TemplatingUtils.MULTI_VALUE_SEPARATOR) == -1) {
                                    return
                                }
                                var values = multiValue.replace(TemplatingUtils.MULTI_VALUE_BOUNDARIES, "")
                                    .split(TemplatingUtils.MULTI_VALUE_SEPARATOR);
                                replacedValues_1 = lodash_1.default.flatMap(values, function (value) {
                                    return replacedValues_1.map(function (replacedValue) {
                                        return replacedValue.replace(multiValue, value);
                                    });
                                });
                            });
                            return replacedValues_1;
                        }
                    }
                    return [replacedExpression];
                };
                TemplatingUtils.prototype.replaceAll = function (expressions) {
                    var _this = this;
                    return lodash_1.default.flatten(expressions.map(function (expression) { return _this.replace(expression); }));
                };
                TemplatingUtils.MULTI_VALUE_SEPARATOR = ",";
                TemplatingUtils.MULTI_VALUE_REGEX = /{.*?}/g;
                TemplatingUtils.MULTI_VALUE_BOUNDARIES = /[{}]/g;
                return TemplatingUtils;
            }());
            exports_1("TemplatingUtils", TemplatingUtils);
        }
    };
});
//# sourceMappingURL=templating_utils.js.map
