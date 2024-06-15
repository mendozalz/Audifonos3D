import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Audifonos from "./Audifonos";
import ExplosionConfetti from "./Confetti";

const Scene = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const btnComprarAhora = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  useEffect(() => {
    const btnComprar = document.querySelector(".comprar");

    btnComprar.addEventListener("click", () => {
      setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
      console.log("click");
    });
  }, []);

  return (
    <>
      <Canvas camera={{ fov: 65, position: [0, 0, 8.3] }}>
        <ScrollControls pages={12} damping={0.25}>
          <Audifonos />
          <Environment files={"./models/abandoned_tiled_room_1k.hdr"} />
        </ScrollControls>
        {showConfetti && <ExplosionConfetti />}
      </Canvas>
    </>
  );
};

export default Scene;
