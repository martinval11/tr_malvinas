import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Facebook, Instagram } from "react-bootstrap-icons";

import styles from "./Home.module.css";
import Video from "./components/Video";

ChartJS.register(
	BarElement,
	Title,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "",
		},
	},
};

const labels = ["Muertos", "Suicidios", "Heridos"];

export const data = {
	labels,
	datasets: [
		{
			label: "Argentina",
			data: [649, 1877, 1657],
			backgroundColor: "rgba(99, 198, 255, 0.5)",
		},

		{
			label: "Gran Bretaña",
			data: [255, 250, 775],
			backgroundColor: "rgba(255, 8, 0, 0.5)",
		},
	],
};

const App = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.header}>
				<h1 className={styles.title}>Vídeos de Malvinas</h1>
			</nav>

			<main className={styles.main}>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h2>Discurso de Galtieri</h2>
						<Video link="https://www.youtube.com/embed/QFp5X1KzPGU" />
					</div>

					<div className={styles.card}>
						<h2>Hundimiento del Ara General Belgrano</h2>
						<Video link="https://www.youtube.com/embed/27zg3sWk_lQ" />
					</div>

					<div className={styles.card}>
						<h2>Documental de Malvinas</h2>
						<Video link="https://www.youtube.com/embed/bNI59kQG7Ow" />
					</div>

					<div className={styles.card}>
						<h2>Cortometraje de Malvinas</h2>
						<Video link="https://www.youtube.com/embed/yW0hhriJ-Ew?start=27" />
					</div>

					<div className={styles.card}>
						<h2>Documental de la dictadura</h2>
						<Video link="https://www.youtube.com/embed/ufzoqg3lIkY" />
					</div>

					<div className={styles.card}>
						<h2>
							Canción {'"'}No Bombardeen Buenos Aires{'"'} de Charly Garcia
						</h2>
						<Video link="https://www.youtube.com/embed/q7fXoJZLzY0" />
					</div>
				</div>

				<section className={styles.charts}>
					<h2>Estadísticas</h2>
					<Bar options={options} data={data} />
					<div>
						<span>
							Datos extraídos de{" "}
							<a
								href="https://www.infobae.com/politica/2022/04/02/guerra-de-malvinas-el-70-de-los-combatientes-argentinos-tenia-menos-de-25-anos/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Infobae
							</a>
						</span>
					</div>
				</section>

				<div className={styles.photos}>
					<h2>Fotos</h2>
					<div id={styles.images} className={styles.imagesMoreHeight}>
						<img src="img/1.webp" loading="lazy" />
						<img src="img/2.webp" loading="lazy" />
						<img src="img/3.webp" loading="lazy" />
					</div>

					<div id={styles.images}>
						<img src="img/4.webp" loading="lazy" />
						<img src="img/5.webp" loading="lazy" />
						<img src="img/6.webp" loading="lazy" />
						<img src="img/7.webp" loading="lazy" />
					</div>
				</div>

				<div className={styles.photos}>
					<h2>Mapa de las islas Malvinas</h2>
					<img src="img/malvinas.webp" alt="Mapa de las islas Malvinas" loading="lazy" />
				</div>
			</main>

			<footer className={styles.footer}>
				<h3>Redes Sociales de la EESº77</h3>
				<div className={styles.footerLinks}>
					<a
						href="https://instagram.com/secundaria77mardelplata?igshid=YmMyMTA2M2Y"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram /> Instagram
					</a>
					<a
						href="https://www.facebook.com/groups/423827537724306/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Facebook /> Facebook
					</a>
				</div>
			</footer>
		</div>
	);
};

export default App;
