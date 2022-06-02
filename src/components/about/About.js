import React from 'react';
import './about.css';

import { FiChevronDown } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';

const About = () => {
	return (
		<div className="about">
			<div className="about_main">
				<div className="about_main-title">
					<h1>Värdegrund, identitet & kundlöfte</h1>
				</div>

				<div className="about_main-subtitle">
					<h3>
						Företaget Group har byggt sin identitet kring närhet till kunden och ett omfattande
						värdegrundsarbete. Namnet Företaget står för att komma nära kunden och förstå kundens behov,
						utmaningar, mål och kommunikation.
					</h3>
					<h3>
						För att skapa en tydlighet kring medarbetarnas agerande för att representera Företaget Group på
						bästa sätt har bolaget arbetat fram en intern modell. Den beskriver Företaget Groups
						grundläggande värden och karaktärsdrag, vilka behov organisationen avser att tillfredsställa hos
						kunden och på vilket sätt Företaget Group verkar för att uppfylla kundlöftet.
					</h3>
				</div>

				<div className="about_main-btn__container">
					<div className="about_main-btn">
						<text>STRATEGI</text>
						<FiChevronDown size={22} />
					</div>

					<div className="about_main-btn">
						<text>FINANSIELLA MÅL</text>
						<FiChevronDown size={22} />
					</div>

					<div className="about_main-btn">
						<text>HÅLLBARHET</text>
						<FiChevronDown size={22} />
					</div>

					<div className="about_main-btn">
						<text>POLICYS</text>
						<FiChevronDown size={22} />
					</div>
				</div>
			</div>

			<div className="about_sub">
				<div className="about_sub-section">
					<div className="about_sub-section__text-section">
						<h1>Om Företaget Group</h1>

						<p>
							Företaget Group AB (publ) är en helhetsleverantör av IT-lösningar vilket omfattar
							försäljning och leverans av paketerade prenumerationstjänster. Största delen av verksamheten
							bedrivs på den nordiska marknaden och består av paketerade IT-tjänster inom arbetsplats,
							nätverk och serverdrift. Bolagets tre primära målgrupper utgörs av små- och medelstora
							företag, offentlig sektor samt den privata skolsektorn med fokus på större nationella
							skolkoncerner.
						</p>
					</div>
				</div>

				<div className="about_sub-section">
					<div className="about_sub-section__text-section">
						<h1>Kundlöfte</h1>
						<p>
							Vi förstår, utvecklar och skapar positiv skillnad för vår kund. Vi vågar vara proaktiva och
							närvarande. Med vår ägarledda organitaion är vi snabba, flexibla och engagerade.
						</p>
					</div>
				</div>

				<div className="about_sub-section">
					<div className="about_sub-section__text-section">
						<h1>Vision och mission</h1>
						<p>
							Företaget Group skall vara den ledande nordiska leverantören av helhetslösningar inom IT och
							digitalisering med de nöjdaste kunderna och medarbetare inom bolagets målgrupper.
						</p>
					</div>
				</div>
			</div>

			<div className="about_sub" id="strategi">
				<div className="about_sub-section">
					<div className="about_sub-section__text-section">
						<h1>Om Företaget Group</h1>

						<p>
							Företaget Group AB (publ) är en helhetsleverantör av IT-lösningar vilket omfattar
							försäljning och leverans av paketerade prenumerationstjänster. Största delen av verksamheten
							bedrivs på den nordiska marknaden och består av paketerade IT-tjänster inom arbetsplats,
							nätverk och serverdrift. Bolagets tre primära målgrupper utgörs av små- och medelstora
							företag, offentlig sektor samt den privata skolsektorn med fokus på större nationella
							skolkoncerner.
						</p>
					</div>
				</div>

				<div className="about_sub-section">
					<div className="about_sub-section__text-section">
						<h1>Kundlöfte</h1>
						<p>
							Vi förstår, utvecklar och skapar positiv skillnad för vår kund. Vi vågar vara proaktiva och
							närvarande. Med vår ägarledda organitaion är vi snabba, flexibla och engagerade.
						</p>
					</div>
				</div>

				<div className="about_sub-section">
					<div className="about_sub-section__text-section">
						<h1>Vision och mission</h1>
						<p>
							Företaget Group skall vara den ledande nordiska leverantören av helhetslösningar inom IT och
							digitalisering med de nöjdaste kunderna och medarbetare inom bolagets målgrupper.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
