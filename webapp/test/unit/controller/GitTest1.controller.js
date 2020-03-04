/*global QUnit*/

sap.ui.define([
	"com/sap/GitTest/controller/GitTest1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GitTest1 Controller");

	QUnit.test("I should test the GitTest1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});