<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>
				<p>{{text | toUppercase | to-lowercase}}</p>
				<hr />
				<button @click="fruits.push('Berries')">Add New Item</button>
				<input v-model="filterText" />
				<ul>
					<li v-for="fruit in filteredFruits">{{ fruit }}</li>
				</ul>
				<hr />
				<app-list></app-list>
				<h1>Filters & Mixins Exercises</h1>
				<!-- Exercise 1) -->
				<!-- Build a local Filter which reverses the Text it is applied on -->
				<p>{{text | reverseText}}</p>
				<!-- Exercise 2 -->
				<!-- Build a global Filter which counts the length of a word and it appends it -->
				<!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
				<hr />
				<p>{{ text | countChars }}</p>
				<!-- Exercise 3 -->
				<!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
				<hr />
				<p>{{ reverseTextComputed }}</p>
				<p>{{ countCharsComputed }}</p>
				<!-- Exercise 4 -->
				<!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
				<hr />
				<p>{{ countCharsComputedMixin }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import List from './List.vue'
	import { fruitMixin } from './fruitMixin'
	import { countCharsMixin } from './countCharsMixin'

	export default {
		mixins: [fruitMixin, countCharsMixin],
		data() {
			return {
				text: 'Hello there, boy!',
			}
		},
		filters: { //local filters
			toUppercase(value) { // same as custom components
				return value.toUpperCase()
			},
			reverseText(value) {
				return value.split("").reverse().join("")
			}
		},
		components: {
			appList: List
		},
		computed: {
			reverseTextComputed() {
				return this.text.split("").reverse().join("")
			},
			countCharsComputed() {
				var charLen = this.text.split("").length
				return this.text + " (" + charLen + ")"
			}
		}
	}
</script>

<style>
</style>
