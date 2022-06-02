import React from 'react';
import './home.css';

import { FiChevronRight } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';

const Home = () => {
	return (
		<div className="home">
			<div className="home_main">
				<div className="home_main-title">
					<h1>Don't think about IT.</h1>
					<h1>We do.</h1>
				</div>

				<div className="home_main-subtitle">
					<h3>
						Företaget Group AB (publ) är en helhetsleverantör av IT-lösningar vilket omfattar försäljning
						och leverans av paketerade prenumerationstjänster.
					</h3>
				</div>

				<div className="home_main-btn__container">
					<div className="home_main-btn">
						<text>SENASTE NYTT</text>
						<FiChevronRight size={22} />
					</div>

					<div className="home_main-btn">
						<text>H2–2021</text>
						<FiChevronRight size={22} />
					</div>
				</div>
			</div>

			<div className="home_sub">
				<div className="home_sub-section">
					<div className="home_sub-section__text-section">
						<h1>Företaget to Business</h1>

						<p>
							Målgruppen är små- och medelstora företag utan egen IT-avdelning eller med behov av IT-stöd.
							Framgångsfaktorer är en nära relation till kunden, kunskap om kundens verksamhet och
							IT-miljö samt möjligheten att erbjuda en helhetsleverans av IT-tjänster från en leverantör
							såsom serverdrift och underhåll kombinerat med hårdvara och licenspaketering.
						</p>

						<p>
							Syftet med paketeringen är att erbjuda en helhetstjänst där Företaget Group kan ta fullt
							ansvar och erbjuda fasta priser, flexibilitet och en hög servicenivå. Mängden kunder
							genererar en stabil återkommande intäkt där möjligheten till god marginal är stor.
						</p>
					</div>

					<div className="home_sub-section__btn">
						<text>Läs mer på Företaget.se</text>
						<BiChevronRight color="#002663" size={20} />
					</div>
				</div>

				<div className="home_sub-section">
					<div className="home_sub-section__text-section">
						<h1>Företaget to Education</h1>
						<p>
							Målgruppen är större privata nationella skolkoncerner utan egen IT-avdelning eller med behov
							av IT-stöd.
						</p>

						<p>
							Framgångsfaktorer är en nära relation, kunskap om kundens verksamhet och IT-miljö samt
							möjligheten att erbjuda en helhetsleverans av IT-tjänster. Volymen på varje kund (mellan 500
							och 50 000 användare) skapar stora möjligheter gällande merförsäljning där varje adderad
							tjänst genererar ytterligare intäkter.
						</p>
					</div>

					<div className="home_sub-section__btn">
						<text>Läs mer på Företaget.se</text>
						<BiChevronRight color="#002663" size={20} />
					</div>
				</div>

				<div className="home_sub-section">
					<div className="home_sub-section__text-section">
						<h1>Företaget to Public</h1>
						<p>
							Målgruppen är offentlig sektor som lyder under LOU – Lagen om offentlig upphandling där
							efterfrågande tjänster matchar Företaget Groups prenumerationstjänster eller strategiska
							affärsområden.
						</p>
						<p>
							Framgångsfaktorer är en nära relation med kunden innan, under och efter upphandlingen är
							genomförd.
						</p>
					</div>

					<div className="home_sub-section__btn">
						<text>Läs mer på Företaget.se</text>
						<BiChevronRight color="#002663" size={20} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
