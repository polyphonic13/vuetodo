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

    createData = function(source) {
      let data = {};
      for(let key in source) {
        if(Array.isArray(source[key])) {
          data[key] = [];
          source[key].forEach(function(el) {
              data[key].push(source[key]);
          });
        } else if(typeof(source[key]) === '') {
          data[key] = this.createData(source[key]);
        } else {
          data[key] = source[key];
        }
      }
      return data;
    };

}
