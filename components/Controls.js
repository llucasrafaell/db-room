import React, { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { extend, useThree } from "@react-three/fiber";
extend({ OrbitControls });

export default function Controls() {
  const { camera, gl } = useThree();

  return <orbitControls args={[camera, gl.domElement]} />;
}