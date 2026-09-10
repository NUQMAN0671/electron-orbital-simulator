// --- Data Definitions ---
const ELEMENTS = {
  'H':  { name: 'Hydrogen', Z: 1, config: '1s¹', subshells: { '1s': 1 } },
  'He': { name: 'Helium', Z: 2, config: '1s²', subshells: { '1s': 2 } },
  'Li': { name: 'Lithium', Z: 3, config: '1s² 2s¹', subshells: { '1s': 2, '2s': 1 } },
  'C':  { name: 'Carbon', Z: 6, config: '1s² 2s² 2p²', subshells: { '1s': 2, '2s': 2, '2p': 2 } },
  'O':  { name: 'Oxygen', Z: 8, config: '1s² 2s² 2p⁴', subshells: { '1s': 2, '2s': 2, '2p': 4 } },
  'Ne': { name: 'Neon', Z: 10, config: '1s² 2s² 2p⁶', subshells: { '1s': 2, '2s': 2, '2p': 6 } }
};

// --- 3D Scene Setup ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05070a, 0.02);

const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 5, 12);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Groups
const atomGroup = new THREE.Group();
scene.add(atomGroup);

let electronObjects = [];

// --- Rendering Logic ---

function createNucleus(count) {
  const nucleusGroup = new THREE.Group();
  const sphereGeo = new THREE.SphereGeometry(0.25, 16, 16);
  const protonMat = new THREE.MeshPhongMaterial({ color: 0xff3e3e, roughness: 0.3 });
  const neutronMat = new THREE.MeshPhongMaterial({ color: 0x8b949e, roughness: 0.3 });

  for (let i = 0; i < count; i++) {
    // Proton
    const proton = new THREE.Mesh(sphereGeo, protonMat);
    proton.position.set((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6);
    nucleusGroup.add(proton);

    // Neutron
    const neutron = new THREE.Mesh(sphereGeo, neutronMat);
    neutron.position.set((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6);
    nucleusGroup.add(neutron);
  }
  return nucleusGroup;
}

function renderBohrModel(element) {
  electronObjects = [];
  const shells = [];
  
  // Separate electrons into shells (N=1, N=2)
  let count = element.Z;
  if (count > 0) shells.push(Math.min(count, 2));
  if (count > 2) shells.push(count - 2);

  shells.forEach((electronCount, shellIdx) => {
    const radius = (shellIdx + 1) * 3;

    // Orbit ring
    const ringGeo = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x30363d, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    atomGroup.add(ring);

    // Electrons
    const electronGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const electronMat = new THREE.MeshBasicMaterial({ color: 0x58a6ff });

    for (let i = 0; i < electronCount; i++) {
      const electron = new THREE.Mesh(electronGeo, electronMat);
      const angle = (i / electronCount) * Math.PI * 2;
      
      electronObjects.push({
        mesh: electron,
        radius: radius,
        angle: angle,
        speed: 0.02 / (shellIdx + 1)
      });
      
      atomGroup.add(electron);
    }
  });
}

function renderElectronCloud(element) {
  const particleCount = element.Z * 800;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  let idx = 0;
  let remaining = element.Z;

  // 1s subshell
  const n1 = Math.min(remaining, 2);
  for (let i = 0; i < n1 * 800; i++) {
    const r = Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);

    positions[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[idx * 3 + 2] = r * Math.cos(phi);

    colors[idx * 3] = 0.34;
    colors[idx * 3 + 1] = 0.65;
    colors[idx * 3 + 2] = 1.0;
    idx++;
  }
  remaining -= n1;

  // 2s and 2p subshells
  if (remaining > 0) {
    for (let i = 0; i < remaining * 800; i++) {
      const r = 2.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[idx * 3 + 2] = r * Math.cos(phi);

      colors[idx * 3] = 0.25;
      colors[idx * 3 + 1] = 0.72;
      colors[idx * 3 + 2] = 0.31;
      idx++;
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.6
  });

  const pointCloud = new THREE.Points(geometry, material);
  atomGroup.add(pointCloud);
}

function updateAtom() {
  // Clear previous models
  while (atomGroup.children.length > 0) {
    atomGroup.remove(atomGroup.children[0]);
  }

  const elemKey = document.getElementById('element-select').value;
  const modelType = document.getElementById('model-select').value;
  const element = ELEMENTS[elemKey];

  // Build Nucleus
  atomGroup.add(createNucleus(element.Z));

  // Build Model
  if (modelType === 'bohr') {
    renderBohrModel(element);
  } else {
    renderElectronCloud(element);
  }

  // Update UI Info
  document.getElementById('info-name').innerText = `${element.name} (${elemKey})`;
  document.getElementById('info-atomic-num').innerText = element.Z;
  document.getElementById('info-config').innerText = element.config;

  // Update Subshell Boxes
  const boxContainer = document.getElementById('subshell-boxes');
  boxContainer.innerHTML = '';

  const subshellCapacity = { '1s': 1, '2s': 1, '2p': 3 };

  Object.keys(subshellCapacity).forEach(subshell => {
    const count = element.subshells[subshell] || 0;
    const totalBoxes = subshellCapacity[subshell];

    const row = document.createElement('div');
    row.className = 'subshell-row';

    const label = document.createElement('span');
    label.className = 'subshell-label';
    label.innerText = subshell;
    row.appendChild(label);

    const boxesDiv = document.createElement('div');
    boxesDiv.className = 'orbital-boxes';

    let electronsLeft = count;
    for (let b = 0; b < totalBoxes; b++) {
      const box = document.createElement('div');
      box.className = 'box';

      if (electronsLeft >= 2) {
        box.innerText = '↮'; // Filled (paired)
        electronsLeft -= 2;
      } else if (electronsLeft === 1) {
        box.innerText = '↟'; // Half-filled
        electronsLeft -= 1;
      } else {
        box.innerText = ''; // Empty
      }

      boxesDiv.appendChild(box);
    }

    row.appendChild(boxesDiv);
    boxContainer.appendChild(row);
  });
}

// --- Animation Loop ---
function animate() {
  requestAnimationFrame(animate);

  // Animate Bohr orbits
  electronObjects.forEach(e => {
    e.angle += e.speed;
    e.mesh.position.x = Math.cos(e.angle) * e.radius;
    e.mesh.position.z = Math.sin(e.angle) * e.radius;
  });

  controls.update();
  renderer.render(scene, camera);
}

// --- Event Listeners ---
document.getElementById('element-select').addEventListener('change', updateAtom);
document.getElementById('model-select').addEventListener('change', updateAtom);

window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// Init
updateAtom();
animate();
