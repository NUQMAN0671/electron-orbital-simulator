// --- 1. FULL 118 ELEMENT DATASET ---
const ELEMENTS = [
  { z: 1, sym: "H", name: "Hydrogen", config: ["1s1"] },
  { z: 2, sym: "He", name: "Helium", config: ["1s2"] },
  { z: 3, sym: "Li", name: "Lithium", config: ["1s2", "2s1"] },
  { z: 4, sym: "Be", name: "Beryllium", config: ["1s2", "2s2"] },
  { z: 5, sym: "B", name: "Boron", config: ["1s2", "2s2", "2p1"] },
  { z: 6, sym: "C", name: "Carbon", config: ["1s2", "2s2", "2p2"] },
  { z: 7, sym: "N", name: "Nitrogen", config: ["1s2", "2s2", "2p3"] },
  { z: 8, sym: "O", name: "Oxygen", config: ["1s2", "2s2", "2p4"] },
  { z: 9, sym: "F", name: "Fluorine", config: ["1s2", "2s2", "2p5"] },
  { z: 10, sym: "Ne", name: "Neon", config: ["1s2", "2s2", "2p6"] },
  { z: 11, sym: "Na", name: "Sodium", config: ["1s2", "2s2", "2p6", "3s1"] },
  { z: 12, sym: "Mg", name: "Magnesium", config: ["1s2", "2s2", "2p6", "3s2"] },
  { z: 13, sym: "Al", name: "Aluminium", config: ["1s2", "2s2", "2p6", "3s2", "3p1"] },
  { z: 14, sym: "Si", name: "Silicon", config: ["1s2", "2s2", "2p6", "3s2", "3p2"] },
  { z: 15, sym: "P", name: "Phosphorus", config: ["1s2", "2s2", "2p6", "3s2", "3p3"] },
  { z: 16, sym: "S", name: "Sulfur", config: ["1s2", "2s2", "2p6", "3s2", "3p4"] },
  { z: 17, sym: "Cl", name: "Chlorine", config: ["1s2", "2s2", "2p6", "3s2", "3p5"] },
  { z: 18, sym: "Ar", name: "Argon", config: ["1s2", "2s2", "2p6", "3s2", "3p6"] },
  { z: 19, sym: "K", name: "Potassium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s1"] },
  { z: 20, sym: "Ca", name: "Calcium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2"] },
  { z: 21, sym: "Sc", name: "Scandium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d1"] },
  { z: 22, sym: "Ti", name: "Titanium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d2"] },
  { z: 23, sym: "V", name: "Vanadium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d3"] },
  { z: 24, sym: "Cr", name: "Chromium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s1", "3d5"] },
  { z: 25, sym: "Mn", name: "Manganese", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d5"] },
  { z: 26, sym: "Fe", name: "Iron", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d6"] },
  { z: 27, sym: "Co", name: "Cobalt", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d7"] },
  { z: 28, sym: "Ni", name: "Nickel", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d8"] },
  { z: 29, sym: "Cu", name: "Copper", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s1", "3d10"] },
  { z: 30, sym: "Zn", name: "Zinc", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10"] },
  { z: 31, sym: "Ga", name: "Gallium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p1"] },
  { z: 32, sym: "Ge", name: "Germanium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p2"] },
  { z: 33, sym: "As", name: "Arsenic", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p3"] },
  { z: 34, sym: "Se", name: "Selenium", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p4"] },
  { z: 35, sym: "Br", name: "Bromine", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p5"] },
  { z: 36, sym: "Kr", name: "Krypton", config: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6"] },
  { z: 37, sym: "Rb", name: "Rubidium", config: ["5s1"] },
  { z: 38, sym: "Sr", name: "Strontium", config: ["5s2"] },
  { z: 39, sym: "Y", name: "Yttrium", config: ["5s2", "4d1"] },
  { z: 40, sym: "Zr", name: "Zirconium", config: ["5s2", "4d2"] },
  { z: 41, sym: "Nb", name: "Niobium", config: ["5s1", "4d4"] },
  { z: 42, sym: "Mo", name: "Molybdenum", config: ["5s1", "4d5"] },
  { z: 43, sym: "Tc", name: "Technetium", config: ["5s2", "4d5"] },
  { z: 44, sym: "Ru", name: "Ruthenium", config: ["5s1", "4d7"] },
  { z: 45, sym: "Rh", name: "Rhodium", config: ["5s1", "4d8"] },
  { z: 46, sym: "Pd", name: "Palladium", config: ["4d10"] },
  { z: 47, sym: "Ag", name: "Silver", config: ["5s1", "4d10"] },
  { z: 48, sym: "Cd", name: "Cadmium", config: ["5s2", "4d10"] },
  { z: 49, sym: "In", name: "Indium", config: ["5s2", "4d10", "5p1"] },
  { z: 50, sym: "Sn", name: "Tin", config: ["5s2", "4d10", "5p2"] },
  { z: 51, sym: "Sb", name: "Antimony", config: ["5s2", "4d10", "5p3"] },
  { z: 52, sym: "Te", name: "Tellurium", config: ["5s2", "4d10", "5p4"] },
  { z: 53, sym: "I", name: "Iodine", config: ["5s2", "4d10", "5p5"] },
  { z: 54, sym: "Xe", name: "Xenon", config: ["5s2", "4d10", "5p6"] },
  { z: 55, sym: "Cs", name: "Cesium", config: ["6s1"] },
  { z: 56, sym: "Ba", name: "Barium", config: ["6s2"] },
  { z: 57, sym: "La", name: "Lanthanum", config: ["6s2", "5d1"] },
  { z: 58, sym: "Ce", name: "Cerium", config: ["6s2", "4f1", "5d1"] },
  { z: 59, sym: "Pr", name: "Praseodymium", config: ["6s2", "4f3"] },
  { z: 60, sym: "Nd", name: "Neodymium", config: ["6s2", "4f4"] },
  { z: 61, sym: "Pm", name: "Promethium", config: ["6s2", "4f5"] },
  { z: 62, sym: "Sm", name: "Samarium", config: ["6s2", "4f6"] },
  { z: 63, sym: "Eu", name: "Europium", config: ["6s2", "4f7"] },
  { z: 64, sym: "Gd", name: "Gadolinium", config: ["6s2", "4f7", "5d1"] },
  { z: 65, sym: "Tb", name: "Terbium", config: ["6s2", "4f9"] },
  { z: 66, sym: "Dy", name: "Dysprosium", config: ["6s2", "4f10"] },
  { z: 67, sym: "Ho", name: "Holmium", config: ["6s2", "4f11"] },
  { z: 68, sym: "Er", name: "Erbium", config: ["6s2", "4f12"] },
  { z: 69, sym: "Tm", name: "Thulium", config: ["6s2", "4f13"] },
  { z: 70, sym: "Yb", name: "Ytterbium", config: ["6s2", "4f14"] },
  { z: 71, sym: "Lu", name: "Lutetium", config: ["6s2", "4f14", "5d1"] },
  { z: 72, sym: "Hf", name: "Hafnium", config: ["6s2", "4f14", "5d2"] },
  { z: 73, sym: "Ta", name: "Tantalum", config: ["6s2", "4f14", "5d3"] },
  { z: 74, sym: "W", name: "Tungsten", config: ["6s2", "4f14", "5d4"] },
  { z: 75, sym: "Re", name: "Rhenium", config: ["6s2", "4f14", "5d5"] },
  { z: 76, sym: "Os", name: "Osmium", config: ["6s2", "4f14", "5d6"] },
  { z: 77, sym: "Ir", name: "Iridium", config: ["6s2", "4f14", "5d7"] },
  { z: 78, sym: "Pt", name: "Platinum", config: ["6s1", "4f14", "5d9"] },
  { z: 79, sym: "Au", name: "Gold", config: ["6s1", "4f14", "5d10"] },
  { z: 80, sym: "Hg", name: "Mercury", config: ["6s2", "4f14", "5d10"] },
  { z: 81, sym: "Tl", name: "Thallium", config: ["6s2", "4f14", "5d10", "6p1"] },
  { z: 82, sym: "Pb", name: "Lead", config: ["6s2", "4f14", "5d10", "6p2"] },
  { z: 83, sym: "Bi", name: "Bismuth", config: ["6s2", "4f14", "5d10", "6p3"] },
  { z: 84, sym: "Po", name: "Polonium", config: ["6s2", "4f14", "5d10", "6p4"] },
  { z: 85, sym: "At", name: "Astatine", config: ["6s2", "4f14", "5d10", "6p5"] },
  { z: 86, sym: "Rn", name: "Radon", config: ["6s2", "4f14", "5d10", "6p6"] },
  { z: 87, sym: "Fr", name: "Francium", config: ["7s1"] },
  { z: 88, sym: "Ra", name: "Radium", config: ["7s2"] },
  { z: 89, sym: "Ac", name: "Actinium", config: ["7s2", "6d1"] },
  { z: 90, sym: "Th", name: "Thorium", config: ["7s2", "6d2"] },
  { z: 91, sym: "Pa", name: "Protactinium", config: ["7s2", "5f2", "6d1"] },
  { z: 92, sym: "U", name: "Uranium", config: ["7s2", "5f3", "6d1"] },
  { z: 93, sym: "Np", name: "Neptunium", config: ["7s2", "5f4", "6d1"] },
  { z: 94, sym: "Pu", name: "Plutonium", config: ["7s2", "5f6"] },
  { z: 95, sym: "Am", name: "Americium", config: ["7s2", "5f7"] },
  { z: 96, sym: "Cm", name: "Curium", config: ["7s2", "5f7", "6d1"] },
  { z: 97, sym: "Bk", name: "Berkelium", config: ["7s2", "5f9"] },
  { z: 98, sym: "Cf", name: "Californium", config: ["7s2", "5f10"] },
  { z: 99, sym: "Es", name: "Einsteinium", config: ["7s2", "5f11"] },
  { z: 100, sym: "Fm", name: "Fermium", config: ["7s2", "5f12"] },
  { z: 101, sym: "Md", name: "Mendelevium", config: ["7s2", "5f13"] },
  { z: 102, sym: "No", name: "Nobelium", config: ["7s2", "5f14"] },
  { z: 103, sym: "Lr", name: "Lawrencium", config: ["7s2", "5f14", "7p1"] },
  { z: 104, sym: "Rf", name: "Rutherfordium", config: ["7s2", "5f14", "6d2"] },
  { z: 105, sym: "Db", name: "Dubnium", config: ["7s2", "5f14", "6d3"] },
  { z: 106, sym: "Sg", name: "Seaborgium", config: ["7s2", "5f14", "6d4"] },
  { z: 107, sym: "Bh", name: "Bohrium", config: ["7s2", "5f14", "6d5"] },
  { z: 108, sym: "Hs", name: "Hassium", config: ["7s2", "5f14", "6d6"] },
  { z: 109, sym: "Mt", name: "Meitnerium", config: ["7s2", "5f14", "6d7"] },
  { z: 110, sym: "Ds", name: "Darmstadtium", config: ["7s2", "5f14", "6d8"] },
  { z: 111, sym: "Rg", name: "Roentgenium", config: ["7s2", "5f14", "6d9"] },
  { z: 112, sym: "Cn", name: "Copernicium", config: ["7s2", "5f14", "6d10"] },
  { z: 113, sym: "Nh", name: "Nihonium", config: ["7s2", "5f14", "6d10", "7p1"] },
  { z: 114, sym: "Fl", name: "Flerovium", config: ["7s2", "5f14", "6d10", "7p2"] },
  { z: 115, sym: "Mc", name: "Moscovium", config: ["7s2", "5f14", "6d10", "7p3"] },
  { z: 116, sym: "Lv", name: "Livermorium", config: ["7s2", "5f14", "6d10", "7p4"] },
  { z: 117, sym: "Ts", name: "Tennessine", config: ["7s2", "5f14", "6d10", "7p5"] },
  { z: 118, sym: "Og", name: "Oganesson", config: ["7s2", "5f14", "6d10", "7p6"] }
];

// --- 2. GRID POSITION CALCULATOR ---
function getElementGridPosition(z) {
  if (z === 1) return { row: 1, col: 1 };
  if (z === 2) return { row: 1, col: 18 };

  if (z >= 3 && z <= 4) return { row: 2, col: z - 2 };
  if (z >= 5 && z <= 10) return { row: 2, col: z + 8 };
  if (z >= 11 && z <= 12) return { row: 3, col: z - 10 };
  if (z >= 13 && z <= 18) return { row: 3, col: z };

  if (z >= 19 && z <= 36) return { row: 4, col: z - 18 };
  if (z >= 37 && z <= 54) return { row: 5, col: z - 36 };

  if (z >= 55 && z <= 56) return { row: 6, col: z - 54 };
  if (z >= 72 && z <= 86) return { row: 6, col: z - 68 };

  if (z >= 87 && z <= 88) return { row: 7, col: z - 86 };
  if (z >= 104 && z <= 118) return { row: 7, col: z - 100 };

  if (z >= 57 && z <= 71) return { row: 9, col: z - 53 };
  if (z >= 89 && z <= 103) return { row: 10, col: z - 85 };

  return { row: 1, col: 1 };
}

// --- 3. STATE MANAGEMENT ---
let currentElement = ELEMENTS[0];
let currentMode = "orbital";
let selectedOrbitalFilter = "ALL";

// --- 4. THREE.JS INITIALIZATION ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d1117);

const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 5, 15);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

const atomGroup = new THREE.Group();
scene.add(atomGroup);

// --- 5. 3D GEOMETRY GENERATORS ---
function clearScene() {
  while (atomGroup.children.length > 0) {
    const obj = atomGroup.children[0];
    atomGroup.remove(obj);
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
      else obj.material.dispose();
    }
  }
}

function createNucleus(size = 0.5) {
  const geo = new THREE.SphereGeometry(size, 32, 32);
  const mat = new THREE.MeshStandardMaterial({ color: 0xff4d4d, roughness: 0.3, metalness: 0.2 });
  return new THREE.Mesh(geo, mat);
}

function createSOrbital(n, color = 0x58a6ff) {
  const radius = n * 1.2;
  const geo = new THREE.SphereGeometry(radius, 32, 32);
  const mat = new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide
  });
  return new THREE.Mesh(geo, mat);
}

function createPOrbital(n, axis = 'z') {
  const group = new THREE.Group();
  const radius = n * 0.8;
  const geo = new THREE.SphereGeometry(radius, 32, 32);

  const matPos = new THREE.MeshStandardMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.45 });
  const matNeg = new THREE.MeshStandardMaterial({ color: 0xffa657, transparent: true, opacity: 0.45 });

  const lobePos = new THREE.Mesh(geo, matPos);
  const lobeNeg = new THREE.Mesh(geo, matNeg);

  const offset = radius * 0.9;

  if (axis === 'z') {
    lobePos.position.z = offset;
    lobeNeg.position.z = -offset;
    lobePos.scale.set(0.7, 0.7, 1.2);
    lobeNeg.scale.set(0.7, 0.7, 1.2);
  } else if (axis === 'x') {
    lobePos.position.x = offset;
    lobeNeg.position.x = -offset;
    lobePos.scale.set(1.2, 0.7, 0.7);
    lobeNeg.scale.set(1.2, 0.7, 0.7);
  } else if (axis === 'y') {
    lobePos.position.y = offset;
    lobeNeg.position.y = -offset;
    lobePos.scale.set(0.7, 1.2, 0.7);
    lobeNeg.scale.set(0.7, 1.2, 0.7);
  }

  group.add(lobePos);
  group.add(lobeNeg);
  return group;
}

const bohrElectrons = [];
function buildBohrModel(element) {
  clearScene();
  bohrElectrons.length = 0;

  atomGroup.add(createNucleus(0.6));

  let totalElectrons = element.z;
  const shellLimits = [2, 8, 8, 18, 18, 32, 32];
  let shellIndex = 0;

  while (totalElectrons > 0) {
    const electronsInShell = Math.min(totalElectrons, shellLimits[shellIndex]);
    const radius = (shellIndex + 1) * 1.8;

    const ringGeo = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x30363d, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    atomGroup.add(ring);

    for (let i = 0; i < electronsInShell; i++) {
      const angle = (i / electronsInShell) * Math.PI * 2;
      const eGeo = new THREE.SphereGeometry(0.15, 16, 16);
      const eMat = new THREE.MeshStandardMaterial({ color: 0x58a6ff, emissive: 0x1f6feb });
      const electron = new THREE.Mesh(eGeo, eMat);

      electron.userData = { radius, angle, speed: 0.02 / (shellIndex + 1) };
      atomGroup.add(electron);
      bohrElectrons.push(electron);
    }

    totalElectrons -= electronsInShell;
    shellIndex++;
  }
}

function buildOrbitalView(element) {
  clearScene();
  atomGroup.add(createNucleus(0.4));

  const axes = ['x', 'y', 'z'];

  element.config.forEach(subshell => {
    const n = parseInt(subshell[0]);
    const type = subshell[1];
    const count = parseInt(subshell[2]);

    if (selectedOrbitalFilter !== "ALL" && !subshell.startsWith(selectedOrbitalFilter)) {
      return;
    }

    if (type === 's') {
      atomGroup.add(createSOrbital(n));
    } else if (type === 'p') {
      for (let i = 0; i < Math.min(count, 3); i++) {
        atomGroup.add(createPOrbital(n, axes[i]));
      }
    }
  });
}

function updateRender() {
  if (currentMode === "bohr") {
    buildBohrModel(currentElement);
  } else {
    buildOrbitalView(currentElement);
  }
  
  document.getElementById('element-display').innerText = `${currentElement.name} (${currentElement.sym})`;
  document.getElementById('details-display').innerText = `Atomic Number: ${currentElement.z}`;
}

// --- 6. UI RENDER & EVENTS ---
function initUI() {
  const grid = document.getElementById('periodic-table');
  grid.innerHTML = "";

  for (let r = 1; r <= 10; r++) {
    if (r === 8) {
      for (let c = 1; c <= 18; c++) {
        const gap = document.createElement('div');
        gap.className = 'element-btn empty';
        gap.style.height = '6px';
        grid.appendChild(gap);
      }
      continue;
    }

    for (let c = 1; c <= 18; c++) {
      const elementData = ELEMENTS.find(e => {
        const pos = getElementGridPosition(e.z);
        return pos.row === r && pos.col === c;
      });

      const btn = document.createElement('div');
      
      if (elementData) {
        btn.className = `element-btn ${elementData.z === currentElement.z ? 'active' : ''}`;
        btn.innerText = elementData.sym;
        btn.title = `${elementData.name} (Z=${elementData.z})`;
        btn.onclick = () => {
          document.querySelectorAll('.element-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentElement = elementData;
          selectedOrbitalFilter = "ALL";
          renderConfigUI();
          updateRender();
        };
      } else {
        btn.className = 'element-btn empty';
      }
      grid.appendChild(btn);
    }
  }

  document.getElementById('mode-select').onchange = (e) => {
    currentMode = e.target.value;
    updateRender();
  };

  renderConfigUI();
}

function renderConfigUI() {
  const configStr = document.getElementById('config-string');
  const chipsContainer = document.getElementById('orbital-chips');

  configStr.innerText = currentElement.config.join(" ");
  chipsContainer.innerHTML = "";

  const allChip = document.createElement('div');
  allChip.className = `orbital-chip ${selectedOrbitalFilter === "ALL" ? 'active' : ''}`;
  allChip.innerText = "Show All";
  allChip.onclick = () => {
    selectedOrbitalFilter = "ALL";
    renderConfigUI();
    updateRender();
  };
  chipsContainer.appendChild(allChip);

  currentElement.config.forEach(sub => {
    const label = sub.substring(0, 2);
    const chip = document.createElement('div');
    chip.className = `orbital-chip ${selectedOrbitalFilter === label ? 'active' : ''}`;
    chip.innerText = sub;
    chip.onclick = () => {
      selectedOrbitalFilter = label;
      renderConfigUI();
      updateRender();
    };
    chipsContainer.appendChild(chip);
  });
}

// --- 7. ANIMATION LOOP & RESIZE ---
function animate() {
  requestAnimationFrame(animate);

  atomGroup.rotation.y += 0.003;

  if (currentMode === "bohr") {
    bohrElectrons.forEach(e => {
      e.userData.angle += e.userData.speed;
      e.position.x = Math.cos(e.userData.angle) * e.userData.radius;
      e.position.z = Math.sin(e.userData.angle) * e.userData.radius;
    });
  }

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// App Initialization
initUI();
updateRender();
animate();
