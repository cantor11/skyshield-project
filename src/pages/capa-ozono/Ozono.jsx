import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Factory from "./world/Factory";
import Header from "../../components/header/Header";
import "./Ozono.css";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import IntroductionText from "./world/IntroductionText";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import SmokeScenario from "./world/SmokeScenario";
import Staging from "./world/Staging";

/**
 * This component defines a 3D webpage layout focusing on environmental issues, specifically air pollution
 * and smog, using React Three Fiber. It renders a scene with elements like factory buildings, smog, 
 * and introductory text to highlight the air pollution problem.
 * 
 * Components included:
 * - Header: Displays a header at the top of the page.
 * - KeyboardControls: Handles user keyboard interactions for navigation.
 * - Canvas: Sets up the 3D rendering environment with specific lighting, controls, and scenarios.
 */

const Ozono = () => {
  // Sets initial camera position to emphasize elements in the scene
  const cameraSettings = {
    position: [-15, 2, 2],
  };

  // Configures keyboard controls for user navigation within the scene
  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] }, // Move forward
      { name: "escape", keys: ["Escape"] },            // Escape to release focus
    ],
    []
  );

  return (
    <>
      <Header /> {/* Renders the page header */}
      <div className="container">
        {/* Initializes keyboard controls for 3D navigation */}
        <KeyboardControls map={map}>
          {/* Canvas for the 3D scene with shadows and camera settings */}
          <Canvas shadows camera={cameraSettings}>
            <Suspense fallback={null}> {/* Loads complex elements with a fallback */}
              <Controls /> {/* Enables user camera control */}
              <Lights /> {/* Adds lighting to the scene */}
            </Suspense>
            <Factory /> {/* 3D model of a factory, representing industrial pollution */}
            <SmokeScenario /> {/* Scenario simulating smoke/smog effects */}
            <IntroductionText /> {/* Introductory text describing the air pollution issue */}
            <Staging /> {/* Background and environment settings */}
          </Canvas>
          <Loader /> {/* Shows a loading indicator while the scene loads */}
        </KeyboardControls>
      </div>
    </>
  );
};

export default Ozono;