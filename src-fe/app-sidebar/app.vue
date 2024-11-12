<template>
	<div class="side-nav expand-lg">
		<div class="side-nav-inner">
			<ul class="side-nav-menu scrollable">
				<li class="nav-item">
					<a href="/guru">
						<span class="icon-holder">
							<i class="fa fa-user-o" aria-hidden="true"></i>
						</span>
						<span class="title">Pengajar/Guru</span>
					</a>
					<a href="/murid">
						<span class="icon-holder">
							<i class="fa fa-user-circle" aria-hidden="true"></i>				
						</span>
						<span class="title">Murid</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			current() {
				return location.pathname.replace('/', '');
			},
		},
		beforeMount() {},
	};
</script>
<style scoped>
	.active-menu {
		background-color: rgba(36, 213, 216, 0.3);
	}
	.active-menu span {
		color: white;
	}
</style>
