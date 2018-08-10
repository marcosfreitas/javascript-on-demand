/**
 * @version 3.0.0
 * @major @bugfix autofix url format, removed assets and api suffixes
 * @param {*} params 
 */

var App = function(params) {
	'use strict';

	this.app = {
		protocol : '',
		host : "",
		instances : "",
		vendors : []
	},
	self = this;

	this.getInstances = function () {
		return self.app.instances;
	};

	this.getVendors = function () {
		return self.app.vendors;
	};

	this.setInstances = function(instances) {
		if (typeof instances !== 'undefined') {
			instances.forEach(function (value, index) {
				self.app.instances += value;
			}, this);
		}
		return this;
	};

	this.setVendors = function (vendors) {
		if (typeof vendors !== 'undefined') {
			vendors.forEach(function (value, index) {

				// for api calls
				if (typeof value === 'object') {
					// can define multiple api urls by value
					value.forEach(function(url, i) {
						if (!self.isURL(url)) {
							// fix internal api url
							value = self.app.host + value;
						}
					}, this);
				} else if (!self.isURL(value)) {
					// fix internal asset url
					value = self.app.host + value;
				}

				self.app.vendors.push(value);

			}, this);
		}

		return this;
	};

	this.isURL = function(url) {
		var pattern = /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
		if(!pattern.test(url) && url.indexOf('http://localhost') < 0 ) {
			return false;
		}
		return true;
	}

	this.app.protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
	this.app.host = this.app.protocol + '//' + window.location.host + '/';

	if (typeof params.vendors !== 'undefined') {
		this.setVendors(params.vendors);
	}

	if (typeof params.instances !== 'undefined') {
		this.setInstances(params.instances);
	}
	
	return this;

};
