import { Object3DNode, MaterialNode, LightNode } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
      directionalLight: LightNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
      pointLight: LightNode<THREE.PointLight, typeof THREE.PointLight>
      meshStandardMaterial: MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
      meshBasicMaterial: MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>
      boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
      sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>
      group: Object3DNode<THREE.Group, typeof THREE.Group>
      points: Object3DNode<THREE.Points, typeof THREE.Points>
      bufferGeometry: Object3DNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
      bufferAttribute: Object3DNode<THREE.BufferAttribute, typeof THREE.BufferAttribute>
      pointsMaterial: MaterialNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>
    }
  }
}