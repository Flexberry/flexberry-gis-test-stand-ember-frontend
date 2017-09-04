import { Projection, Adapter } from 'ember-flexberry-data';
import config from '../config/environment';

export default Adapter.Odata.extend(Projection.AdapterMixin, {
  /**
    Host address to which all requests will be sent.

    @property host
    @type String
    @default config.APP.backendUrls.api
  */
  host: config.APP.backendUrls.api,

  /**
    Extends options for all asynchronous OData-requests.

    @method ajaxOptions
    @param {String} url Request URL.
    @param {String} type Request type (GET, POST, PUT, DELETE etc.).
    @param {Object} options Request options.
    @return {Object} Extended request options.
  */
  ajaxOptions(url, type, options) {
    let hash = this._super(url, type, options);

    // Force authentication data to be send in request headers.
    hash.xhrFields = {
      withCredentials: true
    };

    return hash;
  }
});
