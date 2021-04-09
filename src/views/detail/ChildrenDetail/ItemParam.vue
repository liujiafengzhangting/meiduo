<template>
  <div>
    <table v-for='(table, id) in info.tables' :key='id' class='params' cellpadding='10px'>
      <tr v-for='(items, id) in table' :key='id'>
        <td v-for='(item, id) in items' :key='id'>{{item}}</td>
      </tr>
    </table>
    <table class='subparam' cellpadding='10px'>
      <tr v-for='(table, id) in info.itemparams' :key='id'>
        <td>{{table.key}}</td>
        <td class='right'>{{table.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .params {
    width: 90%;
    padding: 20px 0px 10px;
    border-top: 2px solid #ccc;
    margin: 0px 10px;
  }
  .params tr{
    display: flex;
  }
  .params tr td {
    flex: 1;
  }
  .subparam {
    margin: 0px 10px;
    width: 90%;
    border-collapse: collapse;
    border-top: 2px solid #ccc;
    
  }
  .subparam td {
    border-top: 1px solid #ccc;
    font-size: 14px;
  }
  .subparam .right {
    color: rgb(238, 106, 128);
  }
  .showborder {
    border-bottom: 0px;
  }
</style>
