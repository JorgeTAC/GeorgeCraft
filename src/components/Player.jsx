import { useThree, useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export default function Player() {
  const { camera } = useThree();
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 5, 0],
  }));
  const vel = useRef([0, 5, 0]);
  const pos = useRef([0, 5, 0]);

  useEffect(() => {
    api.position.subscribe((position) => {
      pos.current = position;
    });
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((velocity) => {
      vel.current = velocity;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(new Vector3(...pos.current));
    api.velocity.set(0, 0, -1);
    /*     api.velocity.set([0, 0, -1]);
     */
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
