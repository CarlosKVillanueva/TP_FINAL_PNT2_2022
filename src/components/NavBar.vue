<template>

	<section class="src-components-nav-bar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">

			<a class="navbar-brand" href="#"><img alt="PetFam" src="../assets/Logo.svg"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
							Dropdown
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<button class="btn btn-custom my-2 mx-1 my-sm-0" type="submit">Registrarse</button>
					<button class="btn btn-custom my-2 mx-1 my-sm-0" type="submit">Ingresar</button>

				</form>
			</div>
		</nav>

	</section>

</template>

<script>

export default {
	name: 'src-components-nav-bar',
	props: [],
	mounted() {

	},
	data() {
		return {}
	},
	methods: {},
	computed: {}
}


</script>

<style scoped lang="css">
.src-components-nav-bar {

}

.btn-custom{
	background-color: #e75319;
	color: white;
}
</style>
