import {Object3D} from "react3d";
import React from "react";
import {DoubleSide, DodecahedronGeometry, MeshBasicMaterial, MeshPhongMaterial, Mesh} from "three"



const createDodecahedron = (wireframe, radius) => {
		const geometry = new DodecahedronGeometry(radius);
		var material = wireframe? new MeshBasicMaterial( {color: 0xffffff, wireframe: true} ) : new MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: DoubleSide, flatShading: true } );
		var cube = new Mesh( geometry, material );
		cube.name = "dodecahedron";
	return cube;
}

class Dodecahedron extends Object3D {
	objContructor(props) {
		this.id = "dodecahedron";
		const {wireframe, radius, x, y} = props;
		const obj = createDodecahedron(wireframe,radius);
		obj.position.set(x, y, 0);
		return obj
	}
	objDidUpdate(preProps){
		const {x, y} = this.props;
		const {x: _x, y: _y} = preProps;
		this.obj.position.x = x;
		this.obj.position.y = y;
	}
};

Dodecahedron.propTypes = {
	wireframe: React.PropTypes.bool,
	radius: React.PropTypes.number
}

Dodecahedron.defaultProps = {
	wireframe: false,
	radius: 2
}

Object3D.setTypes(Dodecahedron, {hasChild: true});

export default Dodecahedron;