import React from 'react';
import { Link, Routes } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<div className="header">
			<nav className="header-logo">
				<Link to="/" className="header-logo_text">
					LOGO
				</Link>
			</nav>

			<nav className="header-nav">
				<Link className="header-nav_link" to="/about">
					Om Oss
				</Link>

				<Link className="header-nav_link" to="/about">
					Bolagsstyrning
				</Link>
				<Link className="header-nav_link" to="/about">
					Verksamhet
				</Link>
				<Link className="header-nav_link" to="/about">
					IR
				</Link>
				<Link className="header-nav_link" to="/about">
					Nyheter
				</Link>
				<Link className="header-nav_link" to="/about">
					Kontakt
				</Link>
			</nav>
		</div>
	);
};

export default Header;
