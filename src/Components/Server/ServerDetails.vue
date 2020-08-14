<template>
	<div class="col-xs-12 col-sm-6">
		<p style="fontWeight: bold">{{serverMessage}}</p>
		<p v-if="Object.keys(server).length !== 0">Server ID: {{server.id}}</p>
		<p v-if="Object.keys(server).length !== 0">Server Status: {{server.status}}</p>
		<button @click="resetStatus" v-if="Object.keys(server).length !== 0">Reset Server Status</button>
	</div>
</template>

<script>
	import { eventBus } from '../../main'
	export default {
		data() {
			return {
				serverMessage: 'Select a server to show details',
				server: {}
			}
		},
		created() {
			eventBus.$on('serverDetailChange', (server) => {
				this.serverMessage = 'Server details:'
				this.server = server
			})
		},
		methods: {
			resetStatus() {
				eventBus.changeStatus(this.server.id)
			}
		}
	}
</script>

<style>
</style>
