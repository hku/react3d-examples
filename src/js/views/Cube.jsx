import {Object3D} from "react3d";
import React from "react";
import {DoubleSide, BoxGeometry, MeshBasicMaterial, MeshPhongMaterial, Mesh} from "three"

const createCube = (wireframe, size) => {
		const geometry = new BoxGeometry( size, size, size );
		var material = wireframe? new MeshBasicMaterial( {color: 0xffffff, wireframe: true} ) : new MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: DoubleSide, flatShading: true } );
		var cube = new Mesh( geometry, material );
		cube.name = "cube";
	return cube;
}

class Cube extends Object3D {
	objContructor(props) {
		this.id = "cube";
		const {wireframe, size} = props;
		return createCube(wireframe,size);
	}
};

Cube.propTypes = {
	wireframe: React.PropTypes.bool,
	size: React.PropTypes.number
}
Cube.defaultProps = {
	wireframe: false,
	size: 10
}

Object3D.setTypes(Cube, {hasChild: true});

export default Cube;