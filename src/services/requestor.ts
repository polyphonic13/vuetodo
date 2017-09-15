import Vue from 'vue';
import Component from 'vue-class-component';
import axios, {AxiosResponse} from 'axios';

interface RequestParams {
  data: any;
  url: string;
  done: Function;
}

@Component({

})
export class Requestor extends Vue {

  public url: string;
  protected axios;
  
  constructor() {
    super();
    this.axios = axios;
  }

  public get(params: RequestParams): void {
    let data = params.data || {};
    let url = params.url || this.url;
    
    if(!url) {
      return;
    }

    axios
      .get(url, data)
      .then((response: AxiosResponse) => {
        params.done(response);
      })
      .catch(error => {
        console.log(error)
      });

  }

  public post(params: RequestParams): void {
    let url = params.url || this.url;
    
    if(!url || !params.data) {
      return;
    }

    let data = params.data;
    console.log('data = ', data, '\nstringified: ' + JSON.stringify(data));

    axios
      .post(url, data)
      .then((response: AxiosResponse) => {
        params.done(response);
      })
      .catch(error => {
        console.log(error);
      });
    
  }
}
