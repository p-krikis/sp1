import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import "../styles/viewer-3d.css";

interface SceneProps {
    model: string;
}

function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center>{progress} % loaded</Html>
}

const Scene: React.FC<SceneProps> = ({model}) => {
  const gltf1 = useLoader(GLTFLoader, '/models/FA18alt.glb')
  const gltf2 = useLoader(GLTFLoader, '/models/testModel1.glb')
  const gltf3 = useLoader(GLTFLoader, '/models/testModel2.glb')

  const renderModel = () => {
    switch (model) {
      case "model1":
        return (
          <Suspense fallback={<Loader />}>
          <Canvas camera={{ position: [9, 6, -9] }} shadows>
            <primitive object={gltf1.scene} position={[0, 1, 0]} children-0-castShadow />
              <directionalLight position={[-7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.25} />
              <directionalLight position={[7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.25} />
              <directionalLight color="#ff0000" position={[0, -1, -4.4]} castShadow intensity={Math.PI * 0.65} />
            <OrbitControls target={[0, 1, 0]} />
          </Canvas>
        </Suspense>
        );
      case "model2":
        return (
          <Suspense fallback={<Loader />}>
            <Canvas camera={{ position: [2, 6, -2] }} shadows>
              <primitive object={gltf2.scene} position={[0, 1, 0]} children-0-castShadow />
                <directionalLight position={[-7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.5} />
                <directionalLight position={[7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.5} />
                <directionalLight position={[0, -1, -4.4]} castShadow intensity={Math.PI * 0.65} />
              <OrbitControls target={[0, 1, 0]} />
            </Canvas>
          </Suspense>
        );
        case "model3":
          return (
            <Suspense fallback={<Loader />}>
              <Canvas camera={{ position: [2, 6, -2] }} shadows>
                <primitive object={gltf3.scene} position={[0, 1, 0]} children-0-castShadow />
                  <directionalLight position={[-7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.5} />
                  <directionalLight position={[7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.5} />
                  <directionalLight position={[0, -1, -4.4]} castShadow intensity={Math.PI * 0.65} />
                <OrbitControls target={[0, 1, 0]} />
              </Canvas>
            </Suspense>
          );
      default:
        return (
          <Suspense fallback={<Loader />}>
          <Canvas camera={{ position: [9, 6, -9] }} shadows>
            <primitive object={gltf1.scene} position={[0, 1, 0]} children-0-castShadow />
              <directionalLight position={[-7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.25} />
              <directionalLight position={[7.5, 6.0, 4.4]} castShadow intensity={Math.PI * 0.25} />
              <directionalLight color="#ff0000" position={[0, -1, -4.4]} castShadow intensity={Math.PI * 0.65} />
              <directionalLight color="#ff0000" position={[0, 1, 4.4]} castShadow intensity={Math.PI * 0.65} />
            <OrbitControls target={[0, 1, 0]} />
          </Canvas>
        </Suspense>
        );
    }
  }

  return (
    <div className='meshDisplayBox'>
      {renderModel()}
    </div>
  );
};

export default Scene;