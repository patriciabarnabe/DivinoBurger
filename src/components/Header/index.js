/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import DateTime from '../DateTime';
import ButtonImg from '../ButtonImg';
import './header.scss';
import arrow from '../../img/arrow.png';
import logoutBtn from '../../img/logout.png'

export default function Header({ classBtn }) {

	const history = useHistory();

	const logout = () => {
		localStorage.clear()
		history.push('/')
	}

	const goBack = () => {
		history.push('/salao');

	}

	return (
		<header className="title-area">
			<div>
				<h1 className="uppercase">Divino Burger</h1>
				<DateTime />
			</div>

			<div>
				<ButtonImg src={arrow} alt="voltar" onClick={goBack} className={classBtn}/>
				<ButtonImg src={logoutBtn} alt="logout" onClick={logout}/>
			</div>
		</header>
	);
}
