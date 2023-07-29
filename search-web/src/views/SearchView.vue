<template>
  <div>
    <search-bar-vue></search-bar-vue>
    <result-component></result-component>
  </div>
</template>

<script>
import SearchBarVue from '@/components/SearchBar.vue'
import ResultComponent from '@/components/ResultComponent.vue'
// @ is an alias to /src

export default {
  name: 'SearchView',
  components: {
    SearchBarVue,
    ResultComponent,
  }
}
</script>