<template>
	<div>
		<div class="container mt-5">
			<div class="col-12 m-auto">
				<div class="d-flex justify-content-between align-items-center">
					<div class="d-flex flex-column mr-5">
						<h2 class="titulo-arriba">Tu mascota es parte de nuestra familia</h2>
						<img
							class="patita"
							src="../assets/Vector.svg"
							alt="perro animado"
							srcset=""
						/>
						<p class="small mt-3 ">Tratamos a tu mascota como si fuera nuestra propia familia con el mejor servicio y paquetes especiales.</p>
						<button type="button" class="btn btn-custom btn-lg btn-block">Reserva un turno</button>

					</div>

					<img
						src="../assets/HeroImage.svg"
						alt="perro animado"
						srcset=""
					/>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "HomeView",
};
</script>

<style scoped>

h2 {
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	font-size: 48px;
}

.btn-custom {
	background: linear-gradient(180deg, #E29960 0%, #E5561C 100%);
	color: #f1f1f1;
	border-radius: 15px;
	font-family: "Roboto", sans-serif;
}

html {
	background: #FCF1E7;
}

.patita {
	position: absolute;
	left: 0;
	right: 0;
	top: 25.4%;
	bottom: -25.4%;
	/*primaryClaro*/
	transform: rotate(-14.71deg);
}

.titulo-arriba {
	z-index: 10;
}
</style>
