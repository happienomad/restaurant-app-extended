import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuItem = (props) => {

	const getImageName = () => {
		var regex = /^(\w+)-(\w+)-(\w+)-(\w+)$/g;
		if (props.image.match(regex)) {
			return props.image.replace(regex, '$2-$3.$4');
		} else {
			return props.image;
		}
	}
	return (
		<NavLink activeClassName="active" exact className="menu-item flex flex-row justify-end" to={props.link}>
			<div className="flex flex-col items-center">
				<div className="carousel-image">
					<img alt={props.name} src={`/images/${getImageName()}`} />
				</div>
				<div>{props.name}</div>
			</div>
		</NavLink>
	);
}

export default MenuItem;