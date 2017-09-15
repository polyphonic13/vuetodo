import { Component, Prop, Vue } from 'vue-property-decorator';

import Requestor from '../services/requestor';
import RequestParams from '../models/request-params';


@Component({})
export default class Crud extends Vue {
  requestor: Requestor;

    list(url, data, done): void {
      this.get(url, data, done);
    }
    view(url, data, done): void {
      this.get(url, data, done);
    }
    create(url, data, done): void {
      this.post(url, data, done);
    }
    update(url, data, done): void {
      this.post(url, data, done);
    }
    get(url, data, done): void {
      let params = new RequestParams(url, data, done);
      this.requestor.get(params);
    }
    post(url, data, done): void {
      let params = new RequestParams(url, data, done);
      this.requestor.post(params);
    }
}
