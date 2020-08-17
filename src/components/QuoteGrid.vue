<template>
	<div class="row">
		<app-quote v-for="(quote, i) in quotes" :key="i" @click.native="deleteQuote(i)">{{ quote }}</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote'
	export default {
		props: ['quotes'],
		components: {
			appQuote: Quote
		},
		methods: {
			deleteQuote(index) {
				this.$emit('quoteDeleted', index)
			}
		}
	}
</script>

<style scoped></style>