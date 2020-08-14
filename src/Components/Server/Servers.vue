<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<app-server-item v-for="(server, index) in servers" :key="index" :server="servers[index]"></app-server-item>
		</ul>
	</div>
</template>

<script>
	import ServerItem from './ServerItem'
	import { eventBus } from '../../main'
	export default {
		components: {
			appServerItem: ServerItem
		},
		data() {
			return {
				servers: [
					{ id: 1, status: 'Normal' },
					{ id: 2, status: 'Critical' },
					{ id: 3, status: 'Unknown' },
					{ id: 4, status: 'Critical' },
				]
			}
		},
		created() {
			eventBus.$on('serverStatusChange', (id) => {
				var newServerArray = this.servers
				for (let i = 0;i < newServerArray.length;i++) {
					if (newServerArray[i].id === id) {
						newServerArray[i].status = 'Normal'
						break
					} else {
						continue
					}
				}
				this.servers = newServerArray
			})
		}
	}
</script>

<style>
</style>
