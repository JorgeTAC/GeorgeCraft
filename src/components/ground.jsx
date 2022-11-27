import { usePlane } from "@react-three/cannon";
import { textures } from "../assets/images/textures";

export default function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));
  console.log("Ground", textures);
  textures.ground.repeat.set(100, 100);
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={textures.ground} />
    </mesh>
  );
}
