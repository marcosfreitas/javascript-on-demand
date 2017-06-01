class App {

	constructor(params) {

		this.app = {
			protocol : '',
			host : "",
			api : "",
			assets : "",
			instances : "",
			vendors : []
		};

        this.app.protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
        this.app.host = window.location.host;

		if (typeof params.host !== 'undefined') {

			// defining the correct path of localhost projects
			if (this.app.host.indexOf('localhost') >= 0) {
				this.app.host = params.host;

			}
		}

		if (typeof params.vendors !== 'undefined') {

			this.setVendors(params.vendors);
		}

		if (typeof params.instances !== 'undefined') {

			this.setInstances(params.instances);
		}

		this.app.assets = this.app.protocol + '//' + this.app.host + params.assets;
		this.app.api = this.app.protocol + '//' + this.app.host + params.api;

		return this;

	};

	getInstances() {
		return this.app.instances;
	};

	getVendors() {
		return this.app.vendors;
	};

	setInstances(instances) {
		if (typeof instances !== 'undefined') {
			instances.forEach(function (value, index) {
				this.app.instances += value;
			}, this);
		}
		return this;
	};

	setVendors(vendors) {
		if (typeof vendors !== 'undefined') {
			vendors.forEach(function (value, index) {
				this.app.vendors.push(value);
			}, this);
		}

		return this;
	};
}
