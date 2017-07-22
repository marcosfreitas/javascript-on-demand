var App = function(params) {
	'use strict';

	var app = {
		protocol : '',
		host : "",
		api : "",
		assets : "",
		instances : "",
		vendors : []
	},
	self = this;

	this.getInstances = function () {
		return app.instances;
	};

	this.getVendors = function () {
		return app.vendors;
	};

	this.setInstances = function(instances) {
		if (typeof instances !== 'undefined') {
			instances.forEach(function (value, index) {
				app.instances += value;
			}, this);
		}
		return this;
	};

	this.setVendors = function (vendors) {
		if (typeof vendors !== 'undefined') {
			vendors.forEach(function (value, index) {
				app.vendors.push(value);
			}, this);
		}

		return this;
	};

	(function(params, self){

		app.protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
		app.host = window.location.host;

		if (typeof params.host !== 'undefined') {
			// defining the correct path of localhost projects
			if (app.host.indexOf('localhost') >= 0) {
				app.host = params.host;
			}
		}

		if (typeof params.vendors !== 'undefined') {
			self.setVendors(params.vendors);
		}

		if (typeof params.instances !== 'undefined') {
			self.setInstances(params.instances);
		}

		app.assets = app.protocol + '//' + app.host + params.assets;
		app.api = app.protocol + '//' + app.host + params.api;

		return self;
	})(params, self);

};
