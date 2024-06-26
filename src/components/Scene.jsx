import {
  Environment,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Audifonos from "./Audifonos";
import ExplosionConfetti from "./Confetti";

const Scene = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    const btnComprar = document.querySelector(".comprar");

    btnComprar.addEventListener("click", () => {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
    });
  }, []);

  
  return (
    <>
      <Canvas camera={{ fov: 65, position: [0, 0, 8.3] }} >
        <ScrollControls pages={12} damping={0.25} onTouchMove={(e) => e.stopPropagation()}>
            <Audifonos />
          <Environment files={"./models/abandoned_tiled_room_1k.hdr"} />
        </ScrollControls>
        {showConfetti && <ExplosionConfetti />}
      </Canvas>
    </>
  );
};

export default Scene;
