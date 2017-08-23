export default class Requestor {
    init = function(params) {
      if(params.url) {
        setUrl(url);
      }
    };

    setUrl = function(url) {
      this.url = url;
    };

    get = function(params) {
      var url = params.url || this.url;
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
      // console.log('Requestor/post, params = ', params);
      var url = params.url || this.url;

      if(!url || !params.data) {
        return;
      }

      var data = params.data;

      // console.log('\turl = ' + url + '\n\tdata = ', data);

      $.post(
        url,
        data
      ).done(function(response) {
          params.done(response);
      });
    };
}
