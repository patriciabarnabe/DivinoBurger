/* eslint-disable react/prop-types */

import React from 'react';
import './buttonImg.scss';

export default function ButtonImg({
	className, onClick, src, alt
}) {


	return (
		<button onClick={onClick} className={className}>
			<img src={src} alt={alt} />
		</button>
	)
};
