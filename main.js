// --- Complete Element Database (H to Xe) ---
const ELEMENTS = [
    { num: 1, sym: "H", name: "Hydrogen", row: 1, col: 1, state: "gas", block: "s", grp: "nonmetal", nobleCore: "", valN: 1 },
    { num: 2, sym: "He", name: "Helium", row: 1, col: 18, state: "gas", block: "s", grp: "noble", nobleCore: "", valN: 1 },
    { num: 3, sym: "Li", name: "Lithium", row: 2, col: 1, state: "solid", block: "s", grp: "alkali", nobleCore: "[He]", valN: 2 },
    { num: 4, sym: "Be", name: "Beryllium", row: 2, col: 2, state: "solid", block: "s", grp: "alkaline", nobleCore: "[He]", valN: 2 },
    { num: 5, sym: "B", name: "Boron", row: 2, col: 13, state: "solid", block: "p", grp: "metalloid", nobleCore: "[He]", valN: 2 },
    { num: 6, sym: "C", name: "Carbon", row: 2, col: 14, state: "solid", block: "p", grp: "nonmetal", nobleCore: "[He]", valN: 2 },
    { num: 7, sym: "N", name: "Nitrogen", row: 2, col: 15, state: "gas", block: "p", grp: "nonmetal", nobleCore: "[He]", valN: 2 },
    { num: 8, sym: "O", name: "Oxygen", row: 2, col: 16, state: "gas", block: "p", grp: "nonmetal", nobleCore: "[He]", valN: 2 },
    { num: 9, sym: "F", name: "Fluorine", row: 2, col: 17, state: "gas", block: "p", grp: "nonmetal", nobleCore: "[He]", valN: 2 },
    { num: 10, sym: "Ne", name: "Neon", row: 2, col: 18, state: "gas", block: "p", grp: "noble", nobleCore: "[He]", valN: 2 },
    { num: 11, sym: "Na", name: "Sodium", row: 3, col: 1, state: "solid", block: "s", grp: "alkali", nobleCore: "[Ne]", valN: 3 },
    { num: 12, sym: "Mg", name: "Magnesium", row: 3, col: 2, state: "solid", block: "s", grp: "alkaline", nobleCore: "[Ne]", valN: 3 },
    { num: 13, sym: "Al", name: "Aluminium", row: 3, col: 13, state: "solid", block: "p", grp: "post", nobleCore: "[Ne]", valN: 3 },
    { num: 14, sym: "Si", name: "Silicon", row: 3, col: 14, state: "solid", block: "p", grp: "metalloid", nobleCore: "[Ne]", valN: 3 },
    { num: 15, sym: "P", name: "Phosphorus", row: 3, col: 15, state: "solid", block: "p", grp: "nonmetal", nobleCore: "[Ne]", valN: 3 },
    { num: 16, sym: "S", name: "Sulfur", row: 3, col: 16, state: "solid", block: "p", grp: "nonmetal", nobleCore: "[Ne]", valN: 3 },
    { num: 17, sym: "Cl", name: "Chlorine", row: 3, col: 17, state: "gas", block: "p", grp: "nonmetal", nobleCore: "[Ne]", valN: 3 },
    { num: 18, sym: "Ar", name: "Argon", row: 3, col: 18, state: "gas", block: "p", grp: "noble", nobleCore: "[Ne]", valN: 3 },
    { num: 19, sym: "K", name: "Potassium", row: 4, col: 1, state: "solid", block: "s", grp: "alkali", nobleCore: "[Ar]", valN: 4 },
    { num: 20, sym: "Ca", name: "Calcium", row: 4, col: 2, state: "solid", block: "s", grp: "alkaline", nobleCore: "[Ar]", valN: 4 },
    { num: 21, sym: "Sc", name: "Scandium", row: 4, col: 3, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 22, sym: "Ti", name: "Titanium", row: 4, col: 4, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 23, sym: "V", name: "Vanadium", row: 4, col: 5, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 24, sym: "Cr", name: "Chromium", row: 4, col: 6, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 25, sym: "Mn", name: "Manganese", row: 4, col: 7, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 26, sym: "Fe", name: "Iron", row: 4, col: 8, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 27, sym: "Co", name: "Cobalt", row: 4, col: 9, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 28, sym: "Ni", name: "Nickel", row: 4, col: 10, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 29, sym: "Cu", name: "Copper", row: 4, col: 11, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 30, sym: "Zn", name: "Zinc", row: 4, col: 12, state: "solid", block: "d", grp: "transition", nobleCore: "[Ar]", valN: 4 },
    { num: 31, sym: "Ga", name: "Gallium", row: 4, col: 13, state: "solid", block: "p", grp: "post", nobleCore: "[Ar]", valN: 4 },
    { num: 32, sym: "Ge", name: "Germanium", row: 4, col: 14, state: "solid", block: "p", grp: "metalloid", nobleCore: "[Ar]", valN: 4 },
    { num: 33, sym: "As", name: "Arsenic", row: 4, col: 15, state: "solid", block: "p", grp: "metalloid", nobleCore: "[Ar]", valN: 4 },
    { num: 34, sym: "Se", name: "Selenium", row: 4, col: 16, state: "solid", block: "p", grp: "nonmetal", nobleCore: "[Ar]", valN: 4 },
    { num: 35, sym: "Br", name: "Bromine", row: 4, col: 17, state: "liquid", block: "p", grp: "nonmetal", nobleCore: "[Ar]", valN: 4 },
    { num: 36, sym: "Kr", name: "Krypton", row: 4, col: 18, state: "gas", block: "p", grp: "noble", nobleCore: "[Ar]", valN: 4 },
    { num: 37, sym: "Rb", name: "Rubidium", row: 5, col: 1, state: "solid", block: "s", grp: "alkali", nobleCore: "[Kr]", valN: 5 },
    { num: 38, sym: "Sr", name: "Strontium", row: 5, col: 2, state: "solid", block: "s", grp: "alkaline", nobleCore: "[Kr]", valN: 5 },
    { num: 39, sym: "Y", name: "Yttrium", row: 5, col: 3, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 40, sym: "Zr", name: "Zirconium", row: 5, col: 4, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 41, sym: "Nb", name: "Niobium", row: 5, col: 5, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 42, sym: "Mo", name: "Molybdenum", row: 5, col: 6, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 43, sym: "Tc", name: "Technetium", row: 5, col: 7, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 44, sym: "Ru", name: "Ruthenium", row: 5, col: 8, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 45, sym: "Rh", name: "Rhodium", row: 5, col: 9, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 46, sym: "Pd", name: "Palladium", row: 5, col: 10, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 47, sym: "Ag", name: "Silver", row: 5, col: 11, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 48, sym: "Cd", name: "Cadmium", row: 5, col: 12, state: "solid", block: "d", grp: "transition", nobleCore: "[Kr]", valN: 5 },
    { num: 49, sym: "In", name: "Indium", row: 5, col: 13, state: "solid", block: "p", grp: "post", nobleCore: "[Kr]", valN: 5 },
    { num: 50, sym: "Sn", name: "Tin", row: 5, col: 14, state: "solid", block: "p", grp: "post", nobleCore: "[Kr]", valN: 5 },
    { num: 51, sym: "Sb", name: "Antimony", row: 5, col: 15, state: "solid", block: "p", grp: "metalloid", nobleCore: "[Kr]", valN: 5 },
    { num: 52, sym: "Te", name: "Tellurium", row: 5, col: 16, state: "solid", block: "p", grp: "metalloid", nobleCore: "[Kr]", valN: 5 },
    { num: 53, sym: "I", name: "Iodine", row: 5, col: 17, state: "solid", block: "p", grp: "nonmetal", nobleCore: "[Kr]", valN: 5 },
    { num: 54, sym: "Xe", name: "Xenon", row: 5, col: 18, state: "gas", block: "p", grp: "noble", nobleCore: "[Kr]", valN: 5 }
];

// --- Subshell Definitions with Unique Colors ---
const SUBSHELLS = [
    { name: "1s", n: 1, capacity: 2, boxes: 1, type: "s", radius: 1.2, color: 0x87ceeb },
    { name: "2s", n: 2, capacity: 2, boxes: 1, type: "s", radius: 2.2, color: 0x2ecc71 },
    { name: "2p", n: 2, capacity: 6, boxes: 3, type: "p", radius: 3.5, color: 0xe74c3c },
    { name: "3s", n: 3, capacity: 2, boxes: 1, type: "s", radius: 4.8, color: 0xf1c40f },
    { name: "3p", n: 3, capacity: 6, boxes: 3, type: "p", radius: 6.2, color: 0x9b59b6 },
    { name: "4s", n: 4, capacity: 2, boxes: 1, type: "s", radius: 7.5, color: 0x1abc9c },
    { name: "3d", n: 3, capacity: 10, boxes: 5, type: "d", radius: 8.8, color: 0xe67e22 },
    { name: "4p", n: 4, capacity: 6, boxes: 3, type: "p", radius: 10.2, color: 0xff9ff3 },
    { name: "5s", n: 5, capacity: 2, boxes: 1, type: "s", radius: 11.5, color: 0x00d2d3 },
    { name: "4d", n: 4, capacity: 10, boxes: 5, type: "d", radius: 12.8, color: 0xfeca57 },
    { name: "5p", n: 5, capacity: 6, boxes: 3, type: "p", radius: 14.2, color: 0x54a0ff }
];

let selectedElement = ELEMENTS.find(e => e.sym === "N");
let activeConfig = [];
let currentViewMode = "quantum";

// --- Three.js Setup ---
const container = document.getElementById('viewport-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 22);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.9));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
dirLight.position.set(10, 15, 20);
scene.add(dirLight);

const atomGroup = new THREE.Group();
scene.add(atomGroup);

// --- Text Label Sprite Helper ---
function createTextSprite(text, colorStr = '#ffffff') {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.font = 'Bold 70px Arial';
    ctx.fillStyle = colorStr;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(1.5, 1.5, 1);
    return sprite;
}

// --- 3D Mesh Helpers ---

function createNucleus() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.8,
        metalness: 0.1,
        transparent: false,
        opacity: 1.0
    });
    return new THREE.Mesh(geometry, material);
}

function createAxes(length) {
    const axisGroup = new THREE.Group();

    // X Axis
    const xMat = new THREE.LineBasicMaterial({ color: 0xff3333, linewidth: 2 });
    const xGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-length, 0, 0),
        new THREE.Vector3(length, 0, 0)
    ]);
    axisGroup.add(new THREE.Line(xGeom, xMat));

    const xSprite = createTextSprite('X', '#ff3333');
    xSprite.position.set(length + 1.2, 0, 0);
    axisGroup.add(xSprite);

    // Y Axis
    const yMat = new THREE.LineBasicMaterial({ color: 0x33ff33, linewidth: 2 });
    const yGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -length, 0),
        new THREE.Vector3(0, length, 0)
    ]);
    axisGroup.add(new THREE.Line(yGeom, yMat));

    const ySprite = createTextSprite('Y', '#33ff33');
    ySprite.position.set(0, length + 1.2, 0);
    axisGroup.add(ySprite);

    // Z Axis
    const zMat = new THREE.LineBasicMaterial({ color: 0x3388ff, linewidth: 2 });
    const zGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -length),
        new THREE.Vector3(0, 0, length)
    ]);
    axisGroup.add(new THREE.Line(zGeom, zMat));

    const zSprite = createTextSprite('Z', '#3388ff');
    zSprite.position.set(0, 0, length + 1.2);
    axisGroup.add(zSprite);

    return axisGroup;
}

function createLobe(scale, rx, ry, rz, color) {
    const lobeGroup = new THREE.Group();

    const geometry = new THREE.SphereGeometry(scale, 32, 32);
    geometry.scale(1.3, 2.2, 1.3);
    geometry.translate(0, scale * 2.1, 0);

    const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.65,
        shininess: 60,
        side: THREE.DoubleSide,
        depthWrite: false
    });

    const positiveLobe = new THREE.Mesh(geometry, material);
    const negativeLobe = new THREE.Mesh(geometry, material);
    negativeLobe.rotation.z = Math.PI;

    lobeGroup.add(positiveLobe);
    lobeGroup.add(negativeLobe);
    lobeGroup.rotation.set(rx, ry, rz);

    return lobeGroup;
}

function createDSublevel(subInfo, count) {
    const group = new THREE.Group();
    const scale = subInfo.radius * 0.16;
    const mat = new THREE.MeshPhongMaterial({
        color: subInfo.color,
        transparent: true,
        opacity: 0.65,
        shininess: 60,
        side: THREE.DoubleSide,
        depthWrite: false
    });

    if (count >= 1) {
        const dz2Lobe = createLobe(scale * 1.1, Math.PI / 2, 0, 0, subInfo.color);
        const torusGeom = new THREE.TorusGeometry(scale * 1.8, scale * 0.5, 24, 36);
        const torusMesh = new THREE.Mesh(torusGeom, mat);
        group.add(dz2Lobe);
        group.add(torusMesh);
    }
    if (count >= 3) {
        const d4_1 = createLobe(scale, 0, 0, 0, subInfo.color);
        const d4_2 = createLobe(scale, 0, 0, Math.PI / 2, subInfo.color);
        group.add(d4_1);
        group.add(d4_2);
    }
    if (count >= 5) {
        const ddiag = createLobe(scale, 0, 0, Math.PI / 4, subInfo.color);
        const ddiag2 = createLobe(scale, 0, 0, -Math.PI / 4, subInfo.color);
        group.add(ddiag);
        group.add(ddiag2);
    }

    return group;
}

// --- 3D Scene Reconstruction ---
function build3DScene() {
    while (atomGroup.children.length > 0) {
        atomGroup.remove(atomGroup.children[0]);
    }

    const showValenceOnly = document.getElementById('chk-valence').checked;

    let maxRadius = 3;
    activeConfig.forEach(sub => {
        if (!sub.visible || sub.count === 0) return;
        if (showValenceOnly && sub.n !== selectedElement.valN) return;

        if (currentViewMode === "quantum") {
            const subInfo = SUBSHELLS.find(s => s.name === sub.name);
            if (subInfo && subInfo.radius > maxRadius) {
                maxRadius = subInfo.radius;
            }
        } else {
            const ringRadius = sub.n * 2.5 + 1.5;
            if (ringRadius > maxRadius) {
                maxRadius = ringRadius;
            }
        }
    });

    const dynamicAxisLength = maxRadius + 2.5;
    atomGroup.add(createAxes(dynamicAxisLength));
    atomGroup.add(createNucleus());

    if (currentViewMode === "quantum") {
        activeConfig.forEach(sub => {
            if (!sub.visible || sub.count === 0) return;
            if (showValenceOnly && sub.n !== selectedElement.valN) return;

            const subInfo = SUBSHELLS.find(s => s.name === sub.name);
            if (!subInfo) return;

            if (subInfo.type === 's') {
                const fillRatio = sub.count / sub.capacity;
                const radiusScale = fillRatio === 0.5 ? 0.28 : 0.38;
                const opacityVal = fillRatio === 0.5 ? 0.22 : 0.35;

                const geom = new THREE.SphereGeometry(subInfo.radius * radiusScale, 32, 32);
                const mat = new THREE.MeshPhongMaterial({
                    color: subInfo.color,
                    transparent: true,
                    opacity: opacityVal,
                    shininess: 90,
                    depthWrite: false
                });
                atomGroup.add(new THREE.Mesh(geom, mat));
            } 
            else if (subInfo.type === 'p') {
                const lobeSize = subInfo.radius * 0.22;
                if (sub.count >= 1) atomGroup.add(createLobe(lobeSize, 0, 0, Math.PI / 2, subInfo.color));
                if (sub.count >= 2) atomGroup.add(createLobe(lobeSize, 0, 0, 0, subInfo.color));
                if (sub.count >= 3) atomGroup.add(createLobe(lobeSize, Math.PI / 2, 0, 0, subInfo.color));
            }
            else if (subInfo.type === 'd') {
                atomGroup.add(createDSublevel(subInfo, sub.count));
            }
        });
    } else {
        const shells = {};
        activeConfig.forEach(sub => {
            if (!sub.visible) return;
            if (showValenceOnly && sub.n !== selectedElement.valN) return;
            shells[sub.n] = (shells[sub.n] || 0) + sub.count;
        });

        Object.keys(shells).forEach(nStr => {
            const n = parseInt(nStr);
            const count = shells[n];
            const radius = n * 2.5 + 1.5;

            const ringGeom = new THREE.RingGeometry(radius - 0.05, radius + 0.05, 64);
            const ringMat = new THREE.MeshBasicMaterial({ color: 0x58a6ff, side: THREE.DoubleSide });
            const ringMesh = new THREE.Mesh(ringGeom, ringMat);
            ringMesh.rotation.x = Math.PI / 2;
            atomGroup.add(ringMesh);

            for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2;
                const eGeom = new THREE.SphereGeometry(0.2, 16, 16);
                const eMat = new THREE.MeshPhongMaterial({ color: 0x00ffff, emissive: 0x00aaaa });
                const eMesh = new THREE.Mesh(eGeom, eMat);

                eMesh.position.set(
                    radius * Math.cos(angle),
                    0,
                    radius * Math.sin(angle)
                );
                atomGroup.add(eMesh);
            }
        });
    }
}

// --- Electron Config Calculation ---
function calculateConfig(z) {
    let remaining = z;
    activeConfig = [];

    SUBSHELLS.forEach(sub => {
        if (remaining <= 0) return;
        const count = Math.min(remaining, sub.capacity);
        activeConfig.push({
            name: sub.name,
            n: sub.n,
            count: count,
            boxes: sub.boxes,
            capacity: sub.capacity,
            visible: true
        });
        remaining -= count;
    });
}

// --- UI Rendering ---

function renderPeriodicTable() {
    const tableEl = document.getElementById('periodic-table');
    tableEl.innerHTML = '';
    const colorMode = document.getElementById('color-mode-select').value;

    ELEMENTS.forEach(elem => {
        const btn = document.createElement('div');
        let colorClass = "";

        if (colorMode === "state") {
            colorClass = `c-${elem.state}`;
        } else if (colorMode === "block") {
            colorClass = `c-block-${elem.block}`;
        } else if (colorMode === "group") {
            colorClass = `c-grp-${elem.grp}`;
        }

        btn.className = `elem-btn ${colorClass} ${elem.num === selectedElement.num ? 'active' : ''}`;
        btn.style.gridRow = elem.row;
        btn.style.gridColumn = elem.col;
        btn.innerHTML = `<span class="num">${elem.num}</span><span class="sym">${elem.sym}</span>`;
        btn.onclick = () => selectElement(elem);
        tableEl.appendChild(btn);
    });
}

function renderRightDiagram() {
    const container = document.getElementById('diagram-container');
    container.innerHTML = '';
    const showValenceOnly = document.getElementById('chk-valence').checked;

    activeConfig.forEach((sub, idx) => {
        const isValence = sub.n === selectedElement.valN;
        if (showValenceOnly && !isValence) return;

        const row = document.createElement('div');
        row.className = `shell-row ${isValence ? 'valence-highlight' : ''}`;

        const toggleDiv = document.createElement('label');
        toggleDiv.className = 'shell-toggle';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = sub.visible;
        checkbox.onchange = (e) => {
            activeConfig[idx].visible = e.target.checked;
            build3DScene();
        };

        const label = document.createElement('span');
        label.className = 'shell-label';
        label.innerText = sub.name;

        toggleDiv.appendChild(checkbox);
        toggleDiv.appendChild(label);
        row.appendChild(toggleDiv);

        const boxesGroup = document.createElement('div');
        boxesGroup.className = 'boxes-group';

        let counts = new Array(sub.boxes).fill(0);
        let remaining = sub.count;
        
        for (let i = 0; i < sub.boxes && remaining > 0; i++) { counts[i]++; remaining--; }
        for (let i = 0; i < sub.boxes && remaining > 0; i++) { counts[i]++; remaining--; }

        counts.forEach(c => {
            const box = document.createElement('div');
            box.className = 'orbital-box';
            if (c === 1) box.innerHTML = '↿';
            else if (c === 2) box.innerHTML = '↿⇂';
            boxesGroup.appendChild(box);
        });

        row.appendChild(boxesGroup);
        container.appendChild(row);
    });

    const isCondensed = document.getElementById('chk-condensed').checked;
    let shorthandHtml = "";

    if (isCondensed && selectedElement.nobleCore) {
        const coreMap = { "[He]": 2, "[Ne]": 10, "[Ar]": 18, "[Kr]": 36 };
        const coreZ = coreMap[selectedElement.nobleCore] || 0;
        
        let subSum = 0;
        const outerConfig = activeConfig.filter(c => {
            subSum += c.count;
            return subSum > coreZ;
        });

        shorthandHtml = `<b>${selectedElement.nobleCore}</b> ` + outerConfig.map(c => `${c.name}<sup>${c.count}</sup>`).join(' ');
    } else {
        shorthandHtml = activeConfig.map(c => `${c.name}<sup>${c.count}</sup>`).join(' ');
    }

    document.getElementById('shorthand-text').innerHTML = shorthandHtml;
}

function selectElement(elem) {
    selectedElement = elem;
    document.getElementById('element-title').innerText = `${elem.name} (${elem.num})`;
    
    calculateConfig(elem.num);
    renderPeriodicTable();
    renderRightDiagram();
    build3DScene();
}

// --- Collapsible Drawer Handler ---
const ptableDrawer = document.getElementById('ptable-drawer');
const toggleBtn = document.getElementById('ptable-toggle-btn');
const drawerIcon = document.getElementById('drawer-icon');

toggleBtn.addEventListener('click', () => {
    ptableDrawer.classList.toggle('collapsed');
    const isCollapsed = ptableDrawer.classList.contains('collapsed');
    drawerIcon.innerText = isCollapsed ? '▲' : '▼';

    setTimeout(() => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }, 320);
});

// --- Event Listeners ---
document.getElementById('color-mode-select').addEventListener('change', renderPeriodicTable);
document.getElementById('chk-condensed').addEventListener('change', renderRightDiagram);
document.getElementById('chk-valence').addEventListener('change', () => {
    renderRightDiagram();
    build3DScene();
});

document.getElementById('btn-mode-quantum').addEventListener('click', () => {
    currentViewMode = "quantum";
    document.getElementById('btn-mode-quantum').classList.add('active');
    document.getElementById('btn-mode-bohr').classList.remove('active');
    build3DScene();
});

document.getElementById('btn-mode-bohr').addEventListener('click', () => {
    currentViewMode = "bohr";
    document.getElementById('btn-mode-bohr').classList.add('active');
    document.getElementById('btn-mode-quantum').classList.remove('active');
    build3DScene();
});

// Initial Setup
selectElement(selectedElement);

function animate() {
    requestAnimationFrame(animate);
    atomGroup.rotation.y += 0.004;
    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
});

animate();
