<template>
  <h1>hello temp template</h1>
</template>
<script type="text/javascript">
import Requestor from './services/requestor';
let apiUrl = 'http://localhost:8997/api/';
let apis = {
  todo: 'todos/',
  todoDelete: 'todos/delete/'
};
let requestor = new Requestor();

export default {
  name: 'temp',
  mounted: function() {
    console.log('mounted');
    var done = function(context) {
      return function(response) {
        context.records = response.data;
        console.log('app js mounted, records = ', context.records);
      };
    }(this);

    requestor.get({
      url: apiUrl + apis.todo,
      done: done
    });
  }
}
</script>
<style></style>
