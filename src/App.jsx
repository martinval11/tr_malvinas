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
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Home.module.css';
import Video from './components/Video';

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
			position: 'top',
		},
		title: {
			display: true,
			text: '',
		},
	},
};

const labels = [['Muertos', 'en Combate'], 'Suicidios', 'Heridos'];

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

const App = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.header}>
				<h1 className={styles.title}>Contenido Digital de Malvinas</h1>
			</nav>

			<main className={styles.main}>
				<div className={styles.grid}>
					<div className={styles.card}>
						<div>
							<h2>Discurso de Galtieri</h2>
						</div>
						<Video link='QFp5X1KzPGU' />
					</div>

					<div className={styles.card}>
						<div>
							<h2>Hundimiento del Ara General Belgrano</h2>
						</div>
						<Video link='27zg3sWk_lQ' />
					</div>

					<div className={styles.card}>
						<div>
							<h2>Documental de Malvinas</h2>
						</div>
						<Video link='bNI59kQG7Ow' />
					</div>

					<div className={styles.card}>
						<div>
							<h2>Cortometraje de Malvinas</h2>
						</div>
						<Video link='yW0hhriJ-Ew' />
					</div>

					<div className={styles.card}>
						<div>
							<h2>Documental de la dictadura</h2>
						</div>
						<Video link='ufzoqg3lIkY' />
					</div>

					<div className={styles.card}>
						<div>
							<h2>
								Canción “No Bombardeen Buenos Aires“ de Charly Garcia
							</h2>
						</div>
						<Video link='q7fXoJZLzY0' />
					</div>
				</div>

				<section className={styles.charts}>
					<h2>Estadísticas</h2>
					<Bar
						options={options}
						data={data}
					/>
					<div>
						<span>
							Datos extraídos de{' '}
							<a
								href='https://www.infobae.com/politica/2022/04/02/guerra-de-malvinas-el-70-de-los-combatientes-argentinos-tenia-menos-de-25-anos/'
								target='_blank'
								rel='noopener noreferrer'>
								Infobae
							</a>
						</span>
					</div>
				</section>

				<div className={styles.mapContainer}>
					<h2>Mapa de las islas Malvinas</h2>
					<iframe src="https://padlet.com/Nick/malvinas-gjebzesdysirfwgl" loading='lazy'></iframe>
				</div>

				<div className={styles.photos}>
					<h2>Fotos</h2>

					<Carousel className={styles.ownCarousel}>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='img/2.webp'
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>Fotos y documentos de la época</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='img/3.webp'
								alt='Second slide'
							/>

							<Carousel.Caption>
								<h3>Maqueta y obras de la EESº77 (2022)</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='img/4.webp'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Títulos y trofeos de los excombatientes</h3>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className='d-block w-100'
								src='img/5.webp'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Recuerdos de la época</h3>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className='d-block w-100'
								src='img/6.webp'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Recuerdos de la época (2)</h3>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className='d-block w-100'
								src='img/7.webp'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Recuerdos de la época (3)</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>

					<img
						className={styles.conexionMalvinas}
						src='img/conexion-malvinas.webp'
						alt='Conexión Málvinas'
					/>
				</div>
			</main>

			<footer className={styles.footer}>
				<h3>Redes Sociales de la EESº77</h3>
				<div className={styles.footerLinks}>
					<a
						href='https://instagram.com/secundaria77mardelplata?igshid=YmMyMTA2M2Y'
						target='_blank'
						rel='noopener noreferrer'
						title='Instagram de la EESº77'>
						<Instagram /> Instagram
					</a>
					<a
						href='https://www.facebook.com/groups/423827537724306/'
						target='_blank'
						rel='noopener noreferrer'
						title='Facebook de la EESº77'>
						<Facebook /> Facebook
					</a>
				</div>
			</footer>
		</div>
	);
};

export default App;
