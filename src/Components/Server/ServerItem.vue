<template>
	<li class="list-group-item" @click="showDetail" style="cursor: pointer">Server #{{ server.id }}</li>
</template>

<script>
	import { eventBus } from '../../main'
	export default {
		props: {
			server: Object
		},
		methods: {
			showDetail() {
				eventBus.changeDetails(this.server)
			}
		}
	}
</script>