<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <h1 class="title">Kryptowährungen</h1>
          <h2 class="subtitle">Glossar</h2>
          <div class="field">
            <p class="control has-icons-left">
              <input  class="input is-large" type="text" v-model="search" placeholder="Suchfilter..."/>
              <span class="icon is-small is-left">
                <i class="fas fa-filter"></i>
              </span>
            </p>
          </div>
          <div class="message" v-for='item in filteredList' :key='item'>
              <h3 class="message-header"> {{ item.name }} <span v-if="item.translation.length === 0"></span><span v-else>({{ item.translation }})</span></h3>
              <p class="has-text-left message-body"> {{ item.description }} </p>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'FireGlossar',
  data () {
    return {
      glossar: {},
      search: ''
    }
  },
  computed: {
    filteredList () {
      return this.glossar.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase()) || item.description.toLowerCase().includes(this.search.toLowerCase()) || item.translation.toLowerCase().includes(this.search.toLowerCase())
      })
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
