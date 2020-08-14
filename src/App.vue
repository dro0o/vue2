<template>
	<div class="container">
		<app-header></app-header>
		<hr />
		<div class="row">
			<servers></servers>
			<app-server-details></app-server-details>
		</div>
		<hr />
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Header from './Components/Shared/Header.vue'
	import Footer from './Components/Shared/Footer.vue'
	import Servers from './Components/Server/Servers.vue'
	import ServerDetails from './Components/Server/ServerDetails.vue'

	export default {
		components: {
			appHeader: Header,
			Servers,
			'app-server-details': ServerDetails,
			'app-footer': Footer
		}
	}
</script>

<style>
	div.component {
		border: 1px solid black;
		padding: 30px;
	}
</style>
