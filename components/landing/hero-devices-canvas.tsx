'use client';
import {useMemo} from 'react';
import {Canvas} from '@react-three/fiber';
import {Center,ContactShadows,useGLTF} from '@react-three/drei';
import * as THREE from 'three';
type Vec3 = [number, number, number];
type NormalizeAxis = 'x' | 'y';
const REAL_SIZES = { monitor: 0.62, laptop: 0.36, tablet: 0.27, phone: 0.16 } as const;
const EMPTY_SCREEN_COLOR = '#0d1526';
function useMutedScene(scene: THREE.Object3D): THREE.Object3D {
  return useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((obj: THREE.Object3D) => {
      const mesh = obj as unknown as THREE.Mesh;
      const material = (mesh as unknown as { material?: unknown }).material;
      const materials = Array.isArray(material) ? material : material ? [material] : [];
      for (const entry of materials) {
        const mat = entry as THREE.MeshStandardMaterial & { emissive?: THREE.Color; emissiveIntensity?: number };
        if (mat && typeof mat === 'object' && 'emissive' in mat && mat.emissive) {
          mat.emissive.set('#000000');
          mat.emissiveIntensity = 0;
          const name = (mat.name ?? '').toLowerCase();
          const looksLikeScreen =
            name.includes('screen') ||
            name.includes('display') ||
            name.includes('lcd') ||
            name.includes('glass') ||
            name.includes('monitor');
          const color = (mat as unknown as { color?: THREE.Color }).color;
          const isBrightBlue = color
            ? color.r > 0.25 && color.b > 0.45 && color.b > color.r
            : false;
          if (looksLikeScreen || isBrightBlue) {
            if (color) color.set(EMPTY_SCREEN_COLOR);
            mat.roughness = 0.92;
            mat.metalness = 0;
          }
        }
      }
    });
    return clone;
  }, [scene]);
}
function Device({src,size,axis,position,rotation}:{src:string;size:number;axis:NormalizeAxis;position:Vec3;rotation:Vec3}){const gltf=useGLTF(src);const muted=useMutedScene(gltf.scene);const s=useMemo(()=>{const box=new THREE.Box3().setFromObject(muted);const v=new THREE.Vector3();box.getSize(v);const dim=axis==='x'?v.x:v.y;if(dim<=0)return 1;return size/dim;},[muted,size,axis]);return(<group position={position} rotation={rotation}><Center><primitive object={muted} scale={s}/></Center></group>);}
function Rig(){return(<group rotation={[0,-0.32,0]} position={[0,-0.02,0]}>
<group position={[-0.05,0.28,-0.3]} rotation={[0.04,-0.05,0]}><Device src='/models/monitor.glb' size={REAL_SIZES.monitor} axis='x' position={[0,0,0]} rotation={[0,0,0]}/></group>
<group position={[-0.27,0.02,0.12]} rotation={[0,0.32,0]}><Device src='/models/laptop.glb' size={REAL_SIZES.laptop} axis='x' position={[0,0,0]} rotation={[0,0,0]}/></group>
<group position={[0.09,0.1,0.14]} rotation={[-0.18,-0.28,0.05]}><Device src='/models/tablet.glb' size={REAL_SIZES.tablet} axis='x' position={[0,0,0]} rotation={[0,0,0]}/></group>
<group position={[0.33,0.07,0.22]} rotation={[0,-0.28,0.04]}><Device src='/models/phone.glb' size={REAL_SIZES.phone} axis='y' position={[0,0,0]} rotation={[0,0,0]}/></group></group>);}
function webglAvailable():boolean{
try{const c=document.createElement('canvas');const a=c.getContext('webgl2');const b=c.getContext('webgl');return a?true:(b?true:false);}
catch{return false;}}
function checkClient():boolean{
const w=typeof window;
const d=typeof document;
const okW=w==='object';
const okD=d==='object';
if(okW){return okD;}
return false;}
function checkSupported():boolean{
const client=checkClient();
if(client===false){return false;}
return webglAvailable();}
export function HeroDevicesCanvas(){const supported=useMemo(checkSupported,[]);if(supported===false){return(
<div role='img' aria-label='Dispositivos: computadora, laptop, tablet y celular' className='flex h-[320px] w-full items-end justify-center gap-4 sm:h-[380px]'>
<div className='flex w-16 flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2 text-center text-[10px] font-semibold text-white'><span aria-hidden='true' className='block h-10 w-full rounded bg-black/60'/>Monitor 24</div>
<div className='flex w-16 flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2 text-center text-[10px] font-semibold text-white'><span aria-hidden='true' className='block h-10 w-full rounded bg-black/60'/>Laptop 14</div>
<div className='flex w-16 flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2 text-center text-[10px] font-semibold text-white'><span aria-hidden='true' className='block h-10 w-full rounded bg-black/60'/>Tablet 10.9</div>
<div className='flex w-16 flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2 text-center text-[10px] font-semibold text-white'><span aria-hidden='true' className='block h-10 w-full rounded bg-black/60'/>Celular 6.1</div>
</div>);}return(<div className='h-[320px] w-full sm:h-[400px] lg:h-[440px]'>
<Canvas dpr={[1,1.75]} camera={{position:[0.6,0.42,1.55],fov:32}} gl={{antialias:true,powerPreference:'high-performance'}} shadows={true}>
<ambientLight intensity={0.75}/><directionalLight position={[1.4,2.2,1.6]} intensity={1.6} castShadow={true} shadow-mapSize={[1024,1024]}/><directionalLight position={[-1.5,0.9,-0.8]} intensity={0.45}/><Rig/>
<ContactShadows position={[0,-0.1,0]} opacity={0.42} scale={2.4} blur={2.6} far={0.9} resolution={512} color='#081226'/></Canvas></div>);}
useGLTF.preload('/models/monitor.glb');
useGLTF.preload('/models/laptop.glb');
useGLTF.preload('/models/tablet.glb');
useGLTF.preload('/models/phone.glb');




