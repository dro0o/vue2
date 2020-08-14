<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User Name: {{ switchName() }}</p>
		<p>User Age: {{ userAge }}</p>
		<button @click="resetFn()">Reset Name</button>
	</div>
</template>

<script>
	import { eventBus } from '../main'
	export default {
		props: {
			name: {
				type: String,
				required: false,
				default: 'Andrew'
			},
			resetFn: Function,
			userAge: Number,
		},
		methods: {
			switchName() {
				return this.name
					.split("")
					.reverse()
					.join("")
			},
			resetName() {
				this.name = 'Andrew'
				this.$emit('nameWasReset', this.name)
			}
		},
		created() {
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age
			})
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcoral;
	}
</style>
