import React, { useEffect, useRef, useState , Suspense} from "react";
import { Canvas, useFrame , useLoader } from "@react-three/fiber";
import Controls from "./Controls"
import * as THREE from "three";
import styles from "../styles/Components/Grid3d.module.css";
import Mesa from './jsObj/Mesa'
import Casa from './jsObj/Casa'
import Home from './jsObj/Home'
import Laptop from './jsObj/Laptop'
import Logo from './jsObj/Logo'

export default function Grid3d(props) {
    const objectLink = props.objectLink;

    function dToR(degrees) {
        return degrees*3.14/180;
    }


    return (
        <div
            className={styles.box}
        >
            <Canvas camera={{
                position: [ 0, 400, 0],
            }}>

                <Sol
                   position = {[20,10,10]}
                />
                <Suspense fallback={null}>
                    <Mesa
                    position = {[50,-55,-70]}
                    rotation = {[dToR(180),dToR(0),dToR(0)]}
                    />
                    <Casa
                    rotation = {[dToR(180),dToR(0),dToR(0)]}
                    />
                    <Logo
                     position = {[-110,20, -115]}
                     rotation = {[dToR(180),dToR(0),dToR(0)]}
                    />
                    <Home
                     position = {[200,-30,90]}
                     rotation = {[dToR(180),dToR(0),dToR(0)]}
                    />
                    <Laptop
                        scale = {15}
                        position = {[50,-30,-90]}
                        rotation = {[dToR(0),dToR(90),dToR(0)]}
                    />
                </Suspense>
                <Controls/>
            </Canvas>
        </div>
    );
}

function Sol(props){
    return(
        <mesh {...props}>
            <directionalLight
                intensity={1}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
            
            <meshPhongMaterial emissive='yelow'/>
        </mesh>
    )
}