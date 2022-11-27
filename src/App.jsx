import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Ground from "./components/ground";
import FPV from "./components/FPV";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 255, 20]} />
        <ambientLight intensity={0.3} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
