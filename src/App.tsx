import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas>
      {/* 💡 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* 📦 */}
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* 🎥 */}
      <OrbitControls />
    </Canvas>
  )
}
