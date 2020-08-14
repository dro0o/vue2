<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<!-- <button @click="selectedComponent = 'appQuote'">Quote</button>
				<button @click="selectedComponent = 'appAuthor'">Author</button>
				<button @click="selectedComponent = 'appNew'">New</button>
				<hr />
				<p>{{selectedComponent}}</p>
				<keep-alive>
					<component :is="selectedComponent">
						<p>Default Content</p>
					</component>
				</keep-alive>-->
				<!-- <app-quote>
					<h2 slot="title">{{quoteTitle}}</h2>
					<p>A wonderful quote</p>
				</app-quote>-->
				<br />
				<button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
				<button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
				<button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
				<hr />
				<keep-alive>
					<component :is="selectedComponent">
						<h2>Well hello there...</h2>
					</component>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
	import Quote from './components/Quote'
	import Author from './components/Author'
	import New from './components/New'
	import Blue from './components/Blue.vue'
	import Green from './components/Green.vue'
	import Red from './components/Red.vue'
	export default {
		components: {
			appQuote: Quote,
			appAuthor: Author,
			appNew: New,
			appBlue: Blue,
			appGreen: Green,
			appRed: Red
		},
		data() {
			return {
				quoteTitle: 'The Quote',
				selectedComponent: 'appBlue'
			}
		}
	}
</script>

<style>
	h2 {
		color: teal;
	}
</style>
