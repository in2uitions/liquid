import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Image } from "@react-three/drei";
import styles from "../styles/FullScreen.module.css";

function Images() {
  const data = useScroll();
  const group = useRef();

  useFrame(() => {
    group.current.children[0].material.zoom =
      1 - data.range(1.6 / 2.6, 1 / 2.5) / 1.07;
    // group.current.position.z = 10 - window.scrollY;
  });

  return (
    <group ref={group}>
      <Image position={[-1, 1, 0]} scale={[70, 32, 1]} url="/gradient.jpeg" />
    </group>
  );
}

export default function FullScreen() {
  return (
    <Canvas className={styles.container}>
      <Suspense fallback={null}>
        <ScrollControls pages={1}>
          <Images />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
