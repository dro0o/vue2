<template>
	<div>
		<!-- <app-server-status v-for="server in 5" :key="server in 5"></app-server-status> -->
		<app-header />
		<hr />
		<!-- <div class="row"> -->
		<app-servers />
		<app-server-details />
		<!-- </div> -->
		<hr />
		<app-footer />
	</div>
</template>
<script>
	// Local component import where needed
	import Header from "./Shared/Header"
	import Servers from "./Server/Servers"
	import ServerDetails from "./Server/ServerDetails"
	import Footer from "./Shared/Footer"

	export default {
		components: {
			appHeader: Header,
			appServers: Servers,
			appServerDetails: ServerDetails,
			appFooter: Footer,
		},
	}
</script>
