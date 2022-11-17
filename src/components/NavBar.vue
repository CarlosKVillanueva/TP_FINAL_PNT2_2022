<template>

	<section class="src-components-nav-bar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">

			<router-link to="/home"><a class="navbar-brand" href="#"><img alt="PetFam" src="../assets/Logo.svg"> <span class="logo_pet">Pet</span><span class="logo_fam">Fam</span></a></router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item active">
						<router-link to="/home" class="nav-link">
							<a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
						</router-link>
					</li>
					<li class="nav-item active">
						<router-link to="/turnos" class="nav-link">
							<a class="nav-link" href="#">Turnos<span class="sr-only">(current)</span></a>
						</router-link>
					</li>
					<li class="nav-item active">
						<router-link to="/familiares" class="nav-link">
							<a class="nav-link" href="#">Familiares<span class="sr-only">(current)</span></a>
						</router-link>
					</li>
					<li class="nav-item active" >
						<router-link to="/mascotas" class="nav-link">
							<a class="nav-link" href="#">Mascotas<span class="sr-only">(current)</span></a>
						</router-link>
					</li>
				</ul>
			</div>
				<form class="form-inline my-2 my-lg-0">
					<button class="btn my-2 mx-1 my-sm-0" style="color: #E5561C; " type="submit">Iniciar sesión</button>
					<button class="btn btn-custom my-2 mx-1 my-sm-0" type="submit">Registrarte</button>
				</form>
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
nav {
	background: #FCF1E7 !important;
}

.btn-custom {
	background-color: #e75319;
	color: white;
	border-radius: 9px;
	font-family: "Roboto", sans-serif;
}

.logo_pet {
	color: #E5561C;
	font-family: "Roboto", sans-serif;
	font-size: larger;
	font-weight: bolder;
}

.logo_fam {
	color: #4390B0;
	font-family: "Roboto", sans-serif;
	font-size: larger;
	font-weight: bold;

}
</style>
