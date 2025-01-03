/**
 * Lights component defines the lighting setup for the 3D scene.
 * It adds ambient light and point ligth to the scene to provide basic illumination.
 */

const SmogLights = () => {

  return (
    <>
    <ambientLight intensity={0.34} />
    <pointLight
      color="#ffffff" // White light for a moon-like glow
      intensity={19} // Adjust intensity as needed
      distance={1300} // How far the light reaches
      decay={0.36} // Controls the rate at which the light diminishes
      position={[-530, 300, -310]} // Centered on the moon's position
      shadow-mapSize={[920, 920]} // Size of range
      shadow-camera-far={50} // How far we can see the shadows
      castShadow // It allows mesh to cast shadow
    />

    <pointLight
      color="#ffffff" // White light for a moon-like glow
      intensity={1} // Adjust intensity as needed
      distance={150} // How far the light reaches
      decay={0.36} // Controls the rate at which the light diminishes
      position={[-25, 30, 275]} // Centered on the moon's position
      castShadow // It allows mesh to cast shadow
    />
    </>
  )
};

export default SmogLights;