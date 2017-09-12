import $ from "jquery"; 

export default class Requestor {
    init = function(params) {
      if(params.url) {
        this.setUrl(params.url);
      }
    };

    setUrl = function(url) {
      this.url = url;
    };

    get = function(params) {
      let url = params.url || this.url;
      if(!url) {
        return;
      }

      $.ajax(
        url
      ).done(function(response) {
        params.done(response);
      });
    };

    post = function(params) {
      let url = params.url || this.url;

      if(!url || !params.data) {
        return;
      }

      let data = params.data;
      console.log('data = ', data, '\nstringified: ' + JSON.stringify(data));
      $.post(
        url,
        data
      ).done(function(response) {
          params.done(response);
      });
    };

}
