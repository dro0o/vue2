<template>
	<div>
		<label>Full Name:</label>
		<div>
			<label for="fName">First</label>
			<input type="fName" id="fName" v-model="value.first" />
		</div>
		<div>
			<label for="lName">Last</label>
			<input type="text" id="lName" v-model="value.last" />
		</div>
	</div>
</template>

<script>
	export default {
		props: ['value'],
		methods: {
			sendName() {
				this.$emit('input', value)
			}
		}
	}
</script>