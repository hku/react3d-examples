import React from "react"
import ReactDOM from "react-dom"

import {Scene, Camera, PointLight, Object3D, OrbitControls, Tween} from "@kunhuang09/react3d"
import Cube from "./views/Cube.jsx"
import Dodecahedron from "./views/Dodecahedron.jsx"


class Root extends React.Component {
		constructor(props) {
			super(props)
			this.state = {x:-10, y:-15}
			this.onClickBtn = this.onClickBtn.bind(this);
		}
		onClickBtn(){
			const x = this.state.x;
			if (x == -10) {
				this.setState({x: 10, y:-15})
			} else {
				this.setState({x: -10, y:-15})
			}
		}
		render(){
			const [width, height] = [500, 500];
			return <Scene width={width} height={height} style={{display:"block", margin: 0, cursor:"pointer"}}>
				<button onClick= {this.onClickBtn}>tween animation</button>
				<Camera fov={80} aspect={width/height} near={0.1} far={50} z={30}>
					<OrbitControls/>
				</Camera>
				<PointLight y={200}/>
				<PointLight x={100} y={200} z={100}/>
				<PointLight x={-100} y={-200} z={-100}/>
				<Object3D update={obj => {
					obj.rotation.x += 0.005;
					obj.rotation.y += 0.005;
				}}>
					<Cube/>
					<Cube wireframe={true}/>
				</Object3D>
				<Tween data={this.state} view = {v => <Dodecahedron x={v.x} y={v.y}/>}/>
			</Scene>
		}	
}

ReactDOM.render(<Root/>, document.getElementById('content') )