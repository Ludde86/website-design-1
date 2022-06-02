import React, { useState } from 'react';
import { Link, Routes } from 'react-router-dom';
import './header.css';

const Header = () => {
	const [ openSubNav, setOpenSubNav ] = useState(false);

	return (
		<div className="header">
			<nav className="header-logo">
				<Link to="/" className="header-logo_text">
					LOGO (Hem)
				</Link>
			</nav>

			<nav className="header-nav">
				<Link className="header-nav_link" to="/about" onClick={() => setOpenSubNav(true)}>
					Om Oss
				</Link>

				<Link className="header-nav_link" to="#">
					Bolagsstyrning
				</Link>
				<Link className="header-nav_link" to="#">
					Verksamhet
				</Link>
				<Link className="header-nav_link" to="#">
					IR
				</Link>
				<Link className="header-nav_link" to="#">
					Nyheter
				</Link>
				<Link className="header-nav_link" to="#">
					Kontakt
				</Link>
			</nav>

			{openSubNav ? (
				<div className="sub-nav">
					<div className="sub-nav__item">
						<span className="sub-nav__text" onClick={() => setOpenSubNav(false)}>
							Strategi
						</span>
					</div>
					<div className="sub-nav__item">
						<span className="sub-nav__text" onClick={() => setOpenSubNav(false)}>
							Koldioxidpåverkan
						</span>
					</div>
					<div className="sub-nav__item">
						<span className="sub-nav__text" onClick={() => setOpenSubNav(false)}>
							Utredningar
						</span>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Header;
