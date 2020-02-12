import React from 'react';

const GridItem = (props) => {

	const getImageName = () => {
		var regex = /^(\w+)-(\w+)-(\w+)-(\w+)$/g;
		if (props.image.match(regex)) {
			return '/images/' + props.image.replace(regex, '$2-$3.$4');
		} else {
			return props.image;
		}
	}

	const formatText = () => {
		const [first, ...rest] = props.name.split(' ');
		return [first, <br key={'br' + props.id} />, rest.join(' ')];
	}

	return (
		<div>
			<div className="_image">
				<img alt={props.name} src={getImageName()} />
			</div>
			<div>
				<p className="_content">{formatText()}</p>
			</div>
			<div className="flex flex-row justify-end">
				<div className="chevron"></div>
			</div>
		</div>
	)
}

export default GridItem;