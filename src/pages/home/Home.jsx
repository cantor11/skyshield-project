import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Header from "../../components/header/Header";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import HomeText from "./world/HomeText";
import BuildingsScenario from "./world/BuildingsScenario";
import SmokeScenario from "./world/SmokeScenario";

//import { Perf } from "r3f-perf"; //performance stats

/**
 * Home Component
 * 
 * This functional React component sets up a 3D scene using `@react-three/fiber` 
 * to visualize the introduction and summary of the page focused on air-related 
 * environmental issues. It incorporates a `Header` for navigation and utilizes 
 * `Suspense` for lazy loading of components like `Controls` and `Lights`. 
 * The scene aims to enhance user engagement and understanding of environmental topics.
 */

const Home = () => {
  const cameraSettings = {
    position: [0, 100, 100],
  };

  return (
    <>
    <Header />
      <div className="container">
        <Canvas camera={cameraSettings}>
          <Suspense fallback={null}>
            <Controls />
            <Lights />
          </Suspense>
          <BuildingsScenario />
          <SmokeScenario />
          <HomeText position={[0,0,0]} />
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Home;