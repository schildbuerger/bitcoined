<template>
  <section class="section">
    <div class="container">
      <h1>FireGlossar</h1>
        <p v-for="item of glossar" v-bind:key="item">
          {{item.topic}}{{item.definition}}
        </p>
    </div>
  </section>
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'FireGlossar',
  data () {
    return {
      glossar: {}
    }
  },
  firebase: {
    glossar: {
      source: db.ref('glossar'),
      // Optional, allows you to handle any errors.
      cancelCallback (err) {
        console.error(err)
      }
    }
  }
}
</script>
