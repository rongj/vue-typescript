<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'Vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
	created () {

	}
}
</script>

<style lang="scss">
    // @import 'assets/scss/mixin';
</style>