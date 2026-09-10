import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ========== SETUP ==========
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(5, 3.5, 6);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 2.2;
controls.maxDistance = 18;

scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const dir = new THREE.DirectionalLight(0xffffff, 0.95);
dir.position.set(5, 8, 5);
scene.add(dir);
const dir2 = new THREE.DirectionalLight(0x93c5fd, 0.3);
dir2.position.set(-5, -3, -4);
scene.add(dir2);

const axes = new THREE.AxesHelper(1.6);
axes.material.opacity = 0.25;
axes.material.transparent = true;
scene.add(axes);

// ========== STATE ==========
let mainMode = 'orbital';
let mode = 'ground';
let hybridType = 'sp3';
let currentMol = 'ch4';
let showBonds = true;
let showMolOrbitals = false;
let sizeScale = 1.0;
let animating = false;

const rootGroup = new THREE.Group();
scene.add(rootGroup);

// ========== HELPERS ==========
function disposeObject(obj) {
  obj.traverse(c => {
    if (c.geometry) c.geometry.dispose();
    if (c.material) {
      if (Array.isArray(c.material)) c.material.forEach(m => m.dispose());
      else c.material.dispose();
    }
  });
}

function clearScene() {
  while (rootGroup.children.length) {
    const o = rootGroup.children[0];
    rootGroup.remove(o);
    disposeObject(o);
  }
}

function createSphere(r, color, opacity = 0.85) {
  const mat = new THREE.MeshPhongMaterial({
    color, transparent: opacity < 1, opacity, shininess: 50
  });
  return new THREE.Mesh(new THREE.SphereGeometry(r, 28, 28), mat);
}

function createPOrbital(axis = 'z', color = 0xf87171, scale = 1) {
  const g = new THREE.Group();
  const r = 0.36 * scale;
  const d = 0.52 * scale;
  const mat = new THREE.MeshPhongMaterial({
    color, transparent: true, opacity: 0.58, shininess: 30, side: THREE.DoubleSide
  });
  const l1 = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 22), mat);
  const l2 = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 22), mat.clone());
  if (axis === 'x') { l1.position.x = d; l2.position.x = -d; }
  else if (axis === 'y') { l1.position.y = d; l2.position.y = -d; }
  else { l1.position.z = d; l2.position.z = -d; }
  g.add(l1, l2);
  return g;
}

function createHybridOrbital(dir, color = 0x60a5fa, scale = 1) {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({
    color, transparent: true, opacity: 0.6, shininess: 35, side: THREE.DoubleSide
  });
  const main = new THREE.Mesh(new THREE.SphereGeometry(0.40 * scale, 26, 26), mat);
  main.position.copy(dir.clone().multiplyScalar(0.50 * scale));
  const small = new THREE.Mesh(new THREE.SphereGeometry(0.16 * scale, 18, 18), mat.clone());
  small.position.copy(dir.clone().multiplyScalar(-0.26 * scale));
  g.add(main, small);
  return g;
}

function createBond(p1, p2, radius = 0.08, color = 0xf97316) {
  const dir = new THREE.Vector3().subVectors(p2, p1);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, 12);
  const mat = new THREE.MeshPhongMaterial({ color, shininess: 40 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(p1).add(p2).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}

function createDoubleBond(p1, p2, radius = 0.055) {
  const g = new THREE.Group();
  const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
  let up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(dir.dot(up)) > 0.9) up = new THREE.Vector3(1, 0, 0);
  const side = new THREE.Vector3().crossVectors(dir, up).normalize().multiplyScalar(0.09);
  g.add(createBond(p1.clone().add(side), p2.clone().add(side), radius, 0xf97316));
  g.add(createBond(p1.clone().sub(side), p2.clone().sub(side), radius, 0xf97316));
  return g;
}

function createTripleBond(p1, p2, radius = 0.045) {
  const g = new THREE.Group();
  const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
  let up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(dir.dot(up)) > 0.9) up = new THREE.Vector3(1, 0, 0);
  const side = new THREE.Vector3().crossVectors(dir, up).normalize().multiplyScalar(0.1);
  g.add(createBond(p1, p2, radius, 0xf97316));
  g.add(createBond(p1.clone().add(side), p2.clone().add(side), radius, 0xf97316));
  g.add(createBond(p1.clone().sub(side), p2.clone().sub(side), radius, 0xf97316));
  return g;
}

// Directions
const SP3_DIRS = [
  new THREE.Vector3(1, 1, 1).normalize(),
  new THREE.Vector3(1, -1, -1).normalize(),
  new THREE.Vector3(-1, 1, -1).normalize(),
  new THREE.Vector3(-1, -1, 1).normalize()
];
const SP2_DIRS = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-0.5, 0.866, 0),
  new THREE.Vector3(-0.5, -0.866, 0)
];
const SP_DIRS = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-1, 0, 0)
];

// ========== BUILD ORBITAL MODE ==========
function buildGround() {
  clearScene();
  const s = sizeScale;
  rootGroup.add(createSphere(0.52 * s, 0x60a5fa, 0.42));
  rootGroup.add(createPOrbital('x', 0xf87171, s));
  rootGroup.add(createPOrbital('y', 0x4ade80, s));
  rootGroup.add(createPOrbital('z', 0xfbbf24, s));
}

function buildHybrid() {
  clearScene();
  const s = sizeScale;
  if (hybridType === 'sp3') {
    const cols = [0x60a5fa, 0x93c5fd, 0x3b82f6, 0x2563eb];
    SP3_DIRS.forEach((d, i) => rootGroup.add(createHybridOrbital(d, cols[i], s)));
  } else if (hybridType === 'sp2') {
    const cols = [0x60a5fa, 0x93c5fd, 0x3b82f6];
    SP2_DIRS.forEach((d, i) => rootGroup.add(createHybridOrbital(d, cols[i], s)));
    rootGroup.add(createPOrbital('z', 0xfbbf24, s * 0.95));
  } else {
    const cols = [0x60a5fa, 0x3b82f6];
    SP_DIRS.forEach((d, i) => rootGroup.add(createHybridOrbital(d, cols[i], s)));
    rootGroup.add(createPOrbital('y', 0x4ade80, s * 0.9));
    rootGroup.add(createPOrbital('z', 0xfbbf24, s * 0.9));
  }
}

// ========== BUILD MOLECULES ==========
function buildMolecule() {
  clearScene();
  const s = sizeScale;
  const C_COLOR = 0x64748b;
  const H_COLOR = 0xe2e8f0;
  const O_COLOR = 0xef4444;
  const N_COLOR = 0x3b82f6;
  const bondR = 0.07 * s;

  if (currentMol === 'ch4') {
    const C = new THREE.Vector3(0, 0, 0);
    const Hs = SP3_DIRS.map(d => d.clone().multiplyScalar(1.15 * s));
    rootGroup.add(createSphere(0.32 * s, C_COLOR));
    Hs.forEach(h => {
      const sphere = createSphere(0.18 * s, H_COLOR);
      sphere.position.copy(h);
      rootGroup.add(sphere);
      if (showBonds) rootGroup.add(createBond(C, h, bondR));
    });
    if (showMolOrbitals) {
      SP3_DIRS.forEach(d => rootGroup.add(createHybridOrbital(d, 0x60a5fa, s * 0.7)));
    }
  }
  else if (currentMol === 'c2h4') {
    const C1 = new THREE.Vector3(-0.7 * s, 0, 0);
    const C2 = new THREE.Vector3(0.7 * s, 0, 0);
    const H1 = new THREE.Vector3(-1.25 * s, 0.95 * s, 0);
    const H2 = new THREE.Vector3(-1.25 * s, -0.95 * s, 0);
    const H3 = new THREE.Vector3(1.25 * s, 0.95 * s, 0);
    const H4 = new THREE.Vector3(1.25 * s, -0.95 * s, 0);

    const c1s = createSphere(0.30 * s, C_COLOR); c1s.position.copy(C1); rootGroup.add(c1s);
    const c2s = createSphere(0.30 * s, C_COLOR); c2s.position.copy(C2); rootGroup.add(c2s);
    [H1, H2, H3, H4].forEach(h => {
      const hs = createSphere(0.17 * s, H_COLOR);
      hs.position.copy(h);
      rootGroup.add(hs);
    });
    if (showBonds) {
      rootGroup.add(createDoubleBond(C1, C2, 0.055 * s));
      rootGroup.add(createBond(C1, H1, bondR));
      rootGroup.add(createBond(C1, H2, bondR));
      rootGroup.add(createBond(C2, H3, bondR));
      rootGroup.add(createBond(C2, H4, bondR));
    }
    if (showMolOrbitals) {
      const pz1 = createPOrbital('z', 0xfbbf24, s * 0.7); pz1.position.copy(C1);
      const pz2 = createPOrbital('z', 0xfbbf24, s * 0.7); pz2.position.copy(C2);
      rootGroup.add(pz1, pz2);
    }
  }
  else if (currentMol === 'c2h2') {
    const C1 = new THREE.Vector3(-0.65 * s, 0, 0);
    const C2 = new THREE.Vector3(0.65 * s, 0, 0);
    const H1 = new THREE.Vector3(-1.55 * s, 0, 0);
    const H2 = new THREE.Vector3(1.55 * s, 0, 0);

    const c1s = createSphere(0.28 * s, C_COLOR); c1s.position.copy(C1); rootGroup.add(c1s);
    const c2s = createSphere(0.28 * s, C_COLOR); c2s.position.copy(C2); rootGroup.add(c2s);
    const h1s = createSphere(0.16 * s, H_COLOR); h1s.position.copy(H1); rootGroup.add(h1s);
    const h2s = createSphere(0.16 * s, H_COLOR); h2s.position.copy(H2); rootGroup.add(h2s);

    if (showBonds) {
      rootGroup.add(createTripleBond(C1, C2, 0.04 * s));
      rootGroup.add(createBond(C1, H1, bondR));
      rootGroup.add(createBond(C2, H2, bondR));
    }
    if (showMolOrbitals) {
      const py1 = createPOrbital('y', 0x4ade80, s * 0.65); py1.position.copy(C1);
      const pz1 = createPOrbital('z', 0xfbbf24, s * 0.65); pz1.position.copy(C1);
      const py2 = createPOrbital('y', 0x4ade80, s * 0.65); py2.position.copy(C2);
      const pz2 = createPOrbital('z', 0xfbbf24, s * 0.65); pz2.position.copy(C2);
      rootGroup.add(py1, pz1, py2, pz2);
    }
  }
  else if (currentMol === 'h2o') {
    const O = new THREE.Vector3(0, 0.15 * s, 0);
    const angle = 104.5 * Math.PI / 180;
    const H1 = new THREE.Vector3(Math.sin(angle / 2) * 1.0 * s, -0.55 * s, 0);
    const H2 = new THREE.Vector3(-Math.sin(angle / 2) * 1.0 * s, -0.55 * s, 0);

    const os = createSphere(0.34 * s, O_COLOR); os.position.copy(O); rootGroup.add(os);
    const h1s = createSphere(0.17 * s, H_COLOR); h1s.position.copy(H1); rootGroup.add(h1s);
    const h2s = createSphere(0.17 * s, H_COLOR); h2s.position.copy(H2); rootGroup.add(h2s);
    if (showBonds) {
      rootGroup.add(createBond(O, H1, bondR));
      rootGroup.add(createBond(O, H2, bondR));
    }
  }
  else if (currentMol === 'nh3') {
    const N = new THREE.Vector3(0, 0.2 * s, 0);
    const Hs = [
      new THREE.Vector3(0.95 * s, -0.45 * s, 0),
      new THREE.Vector3(-0.48 * s, -0.45 * s, 0.82 * s),
      new THREE.Vector3(-0.48 * s, -0.45 * s, -0.82 * s)
    ];
    const ns = createSphere(0.32 * s, N_COLOR); ns.position.copy(N); rootGroup.add(ns);
    Hs.forEach(h => {
      const hs = createSphere(0.17 * s, H_COLOR); hs.position.copy(h); rootGroup.add(hs);
      if (showBonds) rootGroup.add(createBond(N, h, bondR));
    });
  }
  else if (currentMol === 'co2') {
    const C = new THREE.Vector3(0, 0, 0);
    const O1 = new THREE.Vector3(-1.3 * s, 0, 0);
    const O2 = new THREE.Vector3(1.3 * s, 0, 0);
    rootGroup.add(createSphere(0.30 * s, C_COLOR));
    const o1s = createSphere(0.32 * s, O_COLOR); o1s.position.copy(O1); rootGroup.add(o1s);
    const o2s = createSphere(0.32 * s, O_COLOR); o2s.position.copy(O2); rootGroup.add(o2s);
    if (showBonds) {
      rootGroup.add(createDoubleBond(C, O1, 0.05 * s));
      rootGroup.add(createDoubleBond(C, O2, 0.05 * s));
    }
  }
}

// ========== UPDATE VIEW ==========
function updateView() {
  if (mainMode === 'orbital') {
    if (mode === 'ground') buildGround();
    else buildHybrid();
  } else {
    buildMolecule();
  }
  updateLabels();
}

function updateLabels() {
  const overlay = document.getElementById('overlay-label');
  const info = document.getElementById('info-box');
  const desc = document.getElementById('desc-box');
  const geo = document.getElementById('geo-box');

  if (mainMode === 'orbital') {
    if (mode === 'ground') {
      overlay.textContent = 'Ground State — 2s + 2pₓ + 2pᵧ + 2p_z';
      info.innerHTML = `<strong>Ground State (Karbon)</strong><br>• 2s : sfera<br>• 2pₓ, 2pᵧ, 2p_z : dumbbell<br>Empat orbital berasingan.`;
      desc.innerHTML = `Dalam <strong>ground state</strong>, orbital 2s dan 2p mempunyai tenaga dan bentuk berbeza. Hybridization diperlukan untuk ikatan setara.`;
      geo.innerHTML = `<strong>Sebelum Hybridization</strong><br>Orbital tidak setara<br>Tidak sesuai untuk 4 ikatan sama`;
    } else {
      const labels = {
        sp3: 'sp³ Hybridized — 4 orbital tetrahedral (109.5°)',
        sp2: 'sp² Hybridized — 3 orbital + 1 p unhybridized (120°)',
        sp:  'sp Hybridized — 2 orbital + 2 p unhybridized (180°)'
      };
      overlay.textContent = labels[hybridType];
      if (hybridType === 'sp3') {
        info.innerHTML = `<strong>sp³</strong><br>1×2s + 3×2p → 4 orbital sp³<br>Semua setara, tetrahedral`;
        desc.innerHTML = `Empat orbital hybrid sp³ menunjuk ke sudut tetrahedron. Menerangkan bentuk CH
