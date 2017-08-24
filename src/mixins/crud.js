import Requestor from '../services/requestor';

export default {
  data() {
    return {
      requestor: new Requestor()
    }
  },
  methods: {
    list: function(url, done) {
      this.get(url, done);
    },
    view: function(url, done) {
      this.get(url, done);
    },
    create: function(url, data, done) {
      this.post(url, data, done);
    },
    update: function(url, data, done) {
      this.post(url, data, done);
    },
    delete: function(url, id, done) {
      this.requestor.delete({
        url: url,
        id: id,
        done: done
      });
    },
    get: function(url, done) {
      this.requestor.get({
        url: url,
        done: done
      });
    },
    post: function(url, data, done) {
      data = data || {};
      this.requestor.post({
        url: url,
        data: data,
        done: done
      });
    }
  }
}
