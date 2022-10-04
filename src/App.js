import styles from './Home.module.css';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Facebook, Instagram } from 'react-bootstrap-icons';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: '',
		},
	},
};

const labels = ['Muertos', 'Suicidios', 'Heridos'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Argentina',
			data: [649, 1877, 1657],
			backgroundColor: 'rgba(99, 198, 255, 0.5)',
		},

		{
			label: 'Gran Bretaña',
			data: [255, 250, 775],
			backgroundColor: 'rgba(255, 8, 0, 0.5)',
		},
	],
};

export default function App() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Vídeos de Malvinas</h1>

				<div className={styles.grid}>
					<div className={styles.card}>
						<h2>Discurso de Galtieri</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/QFp5X1KzPGU'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Hundimiento del Ara General Belgrano</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/27zg3sWk_lQ'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Documental de Malvinas</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/bNI59kQG7Ow'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Cortometraje de Malvinas</h2>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/yW0hhriJ-Ew?start=27'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Documental de la dictadura</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/ufzoqg3lIkY'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>
							Canción {'"'}No Bombardeen Buenos Aires{'"'} de Charly Garcia
						</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/q7fXoJZLzY0'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</div>

				<section className={styles.charts}>
					<h2>Estadísticas</h2>
					<Bar options={options} data={data} />
					<div>
						<span>
							Datos extraídos de{' '}
							<a
								href='https://www.infobae.com/politica/2022/04/02/guerra-de-malvinas-el-70-de-los-combatientes-argentinos-tenia-menos-de-25-anos/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Infobae
							</a>
						</span>
					</div>
				</section>
			</main>

      <footer className={styles.footer}>
        <h3>Redes Sociales de la EESº77</h3>
				<div className="center">
        <a href="www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram />{' '}Instagram</a>
        <a href="https://www.facebook.com/groups/423827537724306/" target="_blank" rel="noopener noreferrer"><Facebook />{' '}Facebook</a>
				</div>
				<br />
        <span className={styles.madeby}>Hecho por Martín Valdez</span>
      </footer>
		</div>
	);
}
