sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("btp.connectivity.productdemo.controller.View1", {
            onInit: function () {

            },
            onShowHello: function() {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sEmployee = this.getView().getModel("employee").getProperty("/Employees/Employee/1/name");
                var sMsg = oBundle.getText("helloMsg",[sEmployee]);
                MessageToast.show(sMsg);
            }
        });
    });
