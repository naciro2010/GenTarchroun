/**
 * Moteur 3D et fonctionnalités interactives
 * Three.js + Contrôles + Exports
 */

// ============================================================================
// MATÉRIAUX COMPLETS (SUITE) -  Catégories 5-15
// ============================================================================

const additionalMaterials = {
  // CATÉGORIE: ÉTANCHÉITÉ
  etancheite: {
    nom: 'Étanchéité et membranes',
    explication: 'Protection contre l\'eau et l\'humidité',
    items: {
      'bitume-app': {
        nom: 'Membrane bitume APP',
        explication: 'Rouleau bitume modifié polymère, soudé au chalumeau',
        epaisseur: '4mm + 4mm (bicouche)',
        presentation: 'Rouleaux 1m x 10m',
        usage: 'Étanchéité toitures terrasses',
        duree_vie: '15-20 ans',
        prix_m2: 95
      },
      'pvc-arme': {
        nom: 'Membrane PVC armée',
        explication: 'Film PVC renforcé par trame polyester, soudure air chaud',
        epaisseur: '1.2mm ou 1.5mm',
        avantages: 'Durable (25-30 ans), soudable, réparable',
        prix_m2: 125
      },
      'epdm': {
        nom: 'Membrane EPDM',
        explication: 'Caoutchouc synthétique élastique, collé ou lesté',
        epaisseur: '1.14mm',
        avantages: 'Très durable (50 ans), élastique, écologique',
        prix_m2: 145
      },
      'polyane': {
        nom: 'Polyane/Film polyéthylène',
        explication: 'Film plastique pour coupure capillarité et pare-vapeur',
        epaisseurs: '150 ou 200 microns',
        usage: 'Sous dalles, pare-vapeur',
        prix_m2: 3.5
      },
      'delta-ms': {
        nom: 'Delta MS (membrane drainage)',
        explication: 'Nappe à picots créant lame d\'air drainage murs enterrés',
        hauteur_picots: '8mm',
        usage: 'Drainage soubassements',
        prix_m2: 28
      }
    }
  },

  // CATÉGORIE: COUVERTURE
  couverture: {
    nom: 'Matériaux de couverture',
    explication: 'Revêtements extérieurs pour toitures inclinées',
    items: {
      'tuile-beton': {
        nom: 'Tuile béton',
        explication: 'Tuile moulée en mortier, économique et durable',
        modeles: ['Plate 33x42cm', 'Double romane', 'Méditerranée'],
        poids: '45 kg/m²',
        pente_min: '30%',
        prix_m2: 85,
        duree: '30-40 ans'
      },
      'tuile-terre-cuite': {
        nom: 'Tuile terre cuite',
        explication: 'Tuile traditionnelle cuite au four, esthétique et noble',
        types: ['Canal (arabe)', 'Plate', 'Mécanique'],
        poids: '40-60 kg/m²',
        avantages: 'Esthétique, longévité 50+ ans, écologique',
        prix_m2: 165
      },
      'bac-acier': {
        nom: 'Bac acier toiture',
        explication: 'Tôle profilée nervurée, industrielle et économique',
        epaisseurs: '0.63mm ou 0.75mm',
        finitions: ['Galvanisé', 'Prélaqué RAL'],
        avantages: 'Économique, rapide, grande portée',
        prix_m2: 75
      },
      'ardoise': {
        nom: 'Ardoise naturelle',
        explication: 'Pierre naturelle clivée en plaques, haut de gamme',
        dimensions: '32x22cm, 40x25cm',
        epaisseurs: '4-5mm',
        poids: '25 kg/m²',
        avantages: 'Esthétique, durée 100+ ans',
        prix_m2: 280
      },
      'shingle': {
        nom: 'Shingle bitumé',
        explication: 'Bardeaux bitume imprégnés de granulés colorés',
        presentation: 'Bardeaux 1m x 0.33m autoadhésifs',
        avantages: 'Pose simple, étanche, léger',
        usage: 'Toitures complexes, remises, économique',
        prix_m2: 45
      }
    }
  },

  // CATÉGORIE: MENUISERIES
  menuiseries: {
    nom: 'Menuiseries extérieures',
    explication: 'Fenêtres, portes, baies vitrées',
    items: {
      'pvc-standard': {
        nom: 'Fenêtre PVC standard',
        explication: 'Profilé PVC blanc, économique et isolant',
        vitrage: 'Double 4/12/4',
        performance: 'Uw=1.4 W/m².K',
        couleurs: 'Blanc, imitation bois',
        prix_m2: 850
      },
      'alu-rpt': {
        nom: 'Menuiserie aluminium RPT',
        explication: 'Alu avec Rupture Pont Thermique (barrette isolante)',
        vitrage: 'Double 4/16/4 argon',
        performance: 'Uw=1.6 W/m².K',
        avantages: 'Esthétique, finesse, durable',
        finitions: ['Anodisé', 'Thermolaqué RAL'],
        prix_m2: 1450
      },
      'bois-exotique': {
        nom: 'Menuiserie bois exotique',
        explication: 'Bois imputrescible (teck, moabi), haut de gamme',
        essences: ['Teck', 'Moabi', 'Iroko'],
        avantages: 'Naturel, isolant, esthétique noble',
        entretien: 'Lasure tous les 3-5 ans',
        prix_m2: 1850
      },
      'mixte-bois-alu': {
        nom: 'Menuiserie mixte bois-alu',
        explication: 'Bois intérieur (chaleur) + alu extérieur (protection)',
        performance: 'Uw=1.0 W/m².K',
        avantages: 'Meilleur des deux matériaux',
        prix_m2: 2200
      },
      'volets-roulants': {
        nom: 'Volets roulants',
        explication: 'Tablier enroulable dans coffre',
        motorisation: ['Manuel', 'Électrique filaire', 'Radio', 'Solaire'],
        materiaux: ['PVC', 'Aluminium'],
        prix_unite: 850
      }
    }
  },

  // CATÉGORIE: REVÊTEMENTS SOL
  revetements_sol: {
    nom: 'Revêtements de sol',
    explication: 'Finitions et habillage des sols',
    items: {
      'carrelage-gres': {
        nom: 'Carrelage grès cérame',
        explication: 'Carreaux céramique cuits haute température, très résistants',
        formats: ['30x30cm', '45x45cm', '60x60cm', '60x120cm'],
        finitions: ['Émaillé', 'Poli', 'Mat', 'Antidérapant'],
        usage: 'Intérieur/extérieur, toutes pièces',
        prix_m2: 180
      },
      'zellige': {
        nom: 'Zellige traditionnel marocain',
        explication: 'Carreaux émaillés assemblés en mosaïque géométrique',
        dimensions: '10x10cm',
        couleurs: ['Bleu', 'Vert', 'Blanc', 'Noir', 'Jaune'],
        usage: 'Sols, murs, fontaines, décorations',
        fabrication: 'Artisanale Fès',
        prix_m2: 450
      },
      'bejmat': {
        nom: 'Bejmat (tommettes marocaines)',
        explication: 'Carreaux terre cuite rectangulaires vernissés',
        dimensions: '15x5cm',
        finition: 'Émaillée brillante ou mate',
        usage: 'Sols traditionnels, patios',
        prix_m2: 320
      },
      'parquet-massif': {
        nom: 'Parquet bois massif',
        explication: 'Lames bois massif clouées ou collées',
        essences: ['Chêne', 'Hêtre', 'Bambou'],
        epaisseur: '14-23mm',
        finitions: ['Brut à vitrifier', 'Huilé', 'Verni usine'],
        prix_m2: 380
      },
      'parquet-contrecolle': {
        nom: 'Parquet contrecollé',
        explication: 'Multicouche: parement bois noble + âme composite',
        epaisseur: '10-15mm',
        avantages: 'Stable, pose simple, économique',
        prix_m2: 180
      },
      'beton-cire': {
        nom: 'Béton ciré',
        explication: 'Revêtement minéral lissé et ciré, aspect contemporain',
        epaisseur: '3mm',
        finitions: ['Mat', 'Satiné', 'Brillant'],
        couleurs: 'Large gamme teintée',
        prix_m2: 95
      },
      'tadelakt': {
        nom: 'Tadelakt marocain',
        explication: 'Enduit chaux poli au galet et ciré savon noir, étanche',
        epaisseur: '8-12mm',
        usage: 'Salles d\'eau, hammams, murs',
        finition: 'Polie brillante',
        avantages: 'Étanche, antibactérien, esthétique',
        prix_m2: 280
      }
    }
  },

  // CATÉGORIE: PLOMBERIE
  plomberie: {
    nom: 'Plomberie et sanitaires',
    explication: 'Réseaux eau et équipements',
    items: {
      'multicouche': {
        nom: 'Tube multicouche',
        explication: 'Tube alu + plastique pour eau chaude/froide',
        diametres: ['Ø16mm', 'Ø20mm', 'Ø26mm'],
        avantages: 'Souple, durable, raccords rapides',
        prix_ml: 18
      },
      'pvc-evacuation': {
        nom: 'PVC évacuation',
        explication: 'Tubes et raccords PVC pour eaux usées et pluviales',
        diametres: ['Ø32', 'Ø40', 'Ø50', 'Ø100', 'Ø125mm'],
        couleur: 'Gris',
        prix_ml: 12
      },
      'chauffe-eau-electrique': {
        nom: 'Chauffe-eau électrique',
        explication: 'Ballon stockage eau chaude avec résistance électrique',
        capacites: ['150L', '200L', '300L'],
        prix_unite: 2800
      },
      'chauffe-eau-solaire': {
        nom: 'Chauffe-eau solaire',
        explication: 'Capteurs solaires + ballon, économique à l\'usage',
        capacite: '200L + 2m² capteurs',
        economies: '60-80% facture ECS',
        prix_installation: 18000
      },
      'robinetterie-standard': {
        nom: 'Robinetterie standard',
        explication: 'Mitigeurs basiques chromés',
        types: ['Lavabo', 'Évier', 'Douche', 'Baignoire'],
        prix_unite: 350
      },
      'robinetterie-haut-gamme': {
        nom: 'Robinetterie design',
        explication: 'Mitigeurs thermostatiques, finitions premium',
        finitions: ['Chromé', 'Noir mat', 'Or rosé', 'Inox brossé'],
        marques: ['Grohe', 'Hansgrohe', 'Axor'],
        prix_unite: 1200
      }
    }
  },

  // Plus de catégories: électricité, peintures, façades, décoration, etc.
};

// ============================================================================
// MOTEUR 3D AVEC THREE.JS
// ============================================================================

class Configurator3D {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.currentModel = null;
    this.lights = [];
    this.mode = 'day'; // day, night, urban

    this.init();
  }

  init() {
    // Configuration Three.js
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.Fog(0x87CEEB, 50, 200);

    // Caméra perspective
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
    this.camera.position.set(30, 25, 30);
    this.camera.lookAt(0, 0, 0);

    // Renderer WebGL
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true // Pour exports screenshots
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Contrôles OrbitControls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2.1; // Limite bas
    this.controls.minDistance = 10;
    this.controls.maxDistance = 100;

    // Sol/Terrain
    this.createGround();

    // Éclairage
    this.setupLighting();

    // Grid helper
    const grid = new THREE.GridHelper(100, 50, 0x888888, 0xcccccc);
    this.scene.add(grid);

    // Axes helper (debug)
    // const axes = new THREE.AxesHelper(20);
    // this.scene.add(axes);

    // Responsive
    window.addEventListener('resize', () => this.onWindowResize());

    // Animation loop
    this.animate();
  }

  createGround() {
    const groundGeometry = new THREE.PlaneGeometry(200, 200);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x7cac48,
      roughness: 0.8,
      metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  setupLighting() {
    // Lumière ambiante
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambient);
    this.lights.push(ambient);

    // Soleil directionnel avec ombres
    const sun = new THREE.DirectionalLight(0xfff5e6, 0.8);
    sun.position.set(50, 80, 30);
    sun.castShadow = true;
    sun.shadow.camera.left = -50;
    sun.shadow.camera.right = 50;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -50;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 200;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    this.scene.add(sun);
    this.lights.push(sun);

    // Lumière hémisphérique (ciel/sol)
    const hemi = new THREE.HemisphereLight(0x87CEEB, 0x545454, 0.3);
    this.scene.add(hemi);
    this.lights.push(hemi);
  }

  loadModel(modelId) {
    // Supprimer modèle précédent
    if (this.currentModel) {
      this.scene.remove(this.currentModel);
    }

    const modelData = buildingModels[modelId];
    if (!modelData) return;

    const group = new THREE.Group();
    const geom = modelData.geometrie;

    // Créer géométrie selon forme
    if (modelData.geometrie.forme === 'rectangulaire') {
      this.createRectangularBuilding(group, modelData);
    } else if (modelData.geometrie.forme === 'carree') {
      this.createPatioBuilding(group, modelData);
    }

    this.currentModel = group;
    this.scene.add(group);

    // Centrer caméra
    this.centerCamera(group);
  }

  createRectangularBuilding(group, data) {
    const { longueur, largeur, hauteur } = data.geometrie;
    const niveaux = data.niveaux;

    // Fondations (visible partiel)
    const fondationGeom = new THREE.BoxGeometry(longueur + 1, 1.5, largeur + 1);
    const fondationMat = new THREE.MeshStandardMaterial({ color: 0x6b5b4a });
    const fondation = new THREE.Mesh(fondationGeom, fondationMat);
    fondation.position.y = -0.5;
    fondation.receiveShadow = true;
    group.add(fondation);

    // Corps principal
    const corpsGeom = new THREE.BoxGeometry(longueur, hauteur, largeur);
    const corpsMat = new THREE.MeshStandardMaterial({
      color: 0xe8d5b5,
      roughness: 0.7,
      metalness: 0.1
    });
    const corps = new THREE.Mesh(corpsGeom, corpsMat);
    corps.position.y = hauteur / 2;
    corps.castShadow = true;
    corps.receiveShadow = true;
    group.add(corps);

    // Fenêtres
    this.addWindows(group, longueur, largeur, hauteur, niveaux);

    // Toiture
    if (data.geometrie.toiture === 'inclinee') {
      this.addSlopedRoof(group, longueur, largeur, hauteur);
    } else {
      this.addFlatRoof(group, longueur, largeur, hauteur);
    }
  }

  createPatioBuilding(group, data) {
    const { dimension, patioSize, hauteur } = data.geometrie;

    // Murs extérieurs (4 côtés avec ouverture patio)
    const murEpaisseur = 0.4;
    const murMat = new THREE.MeshStandardMaterial({
      color: 0xd4a76a,
      roughness: 0.8
    });

    // Créer les 4 murs
    ['nord', 'sud', 'est', 'ouest'].forEach((cote, i) => {
      const isNordSud = i < 2;
      const len = isNordSud ? dimension : dimension;
      const murGeom = new THREE.BoxGeometry(
        isNordSud ? len : murEpaisseur,
        hauteur,
        isNordSud ? murEpaisseur : len
      );
      const mur = new THREE.Mesh(murGeom, murMat);

      const offset = dimension / 2;
      if (cote === 'nord') mur.position.set(0, hauteur/2, offset);
      if (cote === 'sud') mur.position.set(0, hauteur/2, -offset);
      if (cote === 'est') mur.position.set(offset, hauteur/2, 0);
      if (cote === 'ouest') mur.position.set(-offset, hauteur/2, 0);

      mur.castShadow = true;
      mur.receiveShadow = true;
      group.add(mur);
    });

    // Sol patio
    const patioGeom = new THREE.PlaneGeometry(patioSize, patioSize);
    const patioMat = new THREE.MeshStandardMaterial({
      color: 0xf5e6d3,
      roughness: 0.4
    });
    const patio = new THREE.Mesh(patioGeom, patioMat);
    patio.rotation.x = -Math.PI / 2;
    patio.position.y = 0.05;
    patio.receiveShadow = true;
    group.add(patio);

    // Colonnes intérieures
    this.addPatioColumns(group, patioSize);
  }

  addWindows(group, longueur, largeur, hauteur, niveaux) {
    const fenetreW = 1.2;
    const fenetreH = 1.5;
    const fenetreMat = new THREE.MeshStandardMaterial({
      color: 0x6ba3d4,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      metalness: 0.8
    });

    // Calculer nombre de niveaux
    let numNiveaux = 1;
    if (niveaux.includes('+1')) numNiveaux = 2;
    if (niveaux.includes('+2')) numNiveaux = 3;
    if (niveaux.includes('+3')) numNiveaux = 4;

    const hauteurNiveau = hauteur / numNiveaux;

    // Fenêtres façade avant (Z+)
    for (let n = 0; n < numNiveaux; n++) {
      const y = hauteurNiveau * n + hauteurNiveau / 2;
      for (let i = 0; i < 3; i++) {
        const x = -longueur/3 + i * longueur/3;
        const fenGeom = new THREE.BoxGeometry(fenetreW, fenetreH, 0.1);
        const fen = new THREE.Mesh(fenGeom, fenetreMat);
        fen.position.set(x, y, largeur/2 + 0.05);
        group.add(fen);
      }
    }

    // Fenêtres côtés
    for (let n = 0; n < numNiveaux; n++) {
      const y = hauteurNiveau * n + hauteurNiveau / 2;
      for (let i = 0; i < 2; i++) {
        const z = -largeur/4 + i * largeur/2;
        const fenGeom = new THREE.BoxGeometry(0.1, fenetreH, fenetreW);
        const fen = new THREE.Mesh(fenGeom, fenetreMat);
        fen.position.set(longueur/2 + 0.05, y, z);
        group.add(fen);
      }
    }
  }

  addFlatRoof(group, longueur, largeur, hauteur) {
    const toitGeom = new THREE.BoxGeometry(longueur + 0.2, 0.3, largeur + 0.2);
    const toitMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.9
    });
    const toit = new THREE.Mesh(toitGeom, toitMat);
    toit.position.y = hauteur + 0.15;
    toit.castShadow = true;
    toit.receiveShadow = true;
    group.add(toit);

    // Acrotère (garde-corps terrasse)
    const acrotereH = 0.8;
    const acrotereMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const acrotereE = 0.15;

    ['avant', 'arriere', 'gauche', 'droite'].forEach((cote, i) => {
      const isAvantArriere = i < 2;
      const acrGeom = new THREE.BoxGeometry(
        isAvantArriere ? longueur + 0.4 : acrotereE,
        acrotereH,
        isAvantArriere ? acrotereE : largeur + 0.4
      );
      const acr = new THREE.Mesh(acrGeom, acrotereMat);
      acr.castShadow = true;

      const offset = (isAvantArriere ? largeur : longueur) / 2 + 0.1;
      if (cote === 'avant') acr.position.set(0, hauteur + acrotereH/2, offset);
      if (cote === 'arriere') acr.position.set(0, hauteur + acrotereH/2, -offset);
      if (cote === 'gauche') acr.position.set(-offset, hauteur + acrotereH/2, 0);
      if (cote === 'droite') acr.position.set(offset, hauteur + acrotereH/2, 0);

      group.add(acr);
    });
  }

  addSlopedRoof(group, longueur, largeur, hauteur) {
    const pente = 0.35; // 35%
    const hauteurPente = (largeur / 2) * pente;

    const roofGeom = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Triangle avant
      -longueur/2, hauteur, -largeur/2,
      longueur/2, hauteur, -largeur/2,
      0, hauteur + hauteurPente, 0,

      // Triangle arrière
      -longueur/2, hauteur, largeur/2,
      longueur/2, hauteur, largeur/2,
      0, hauteur + hauteurPente, 0
    ]);

    roofGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    roofGeom.computeVertexNormals();

    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x8B4513,
      side: THREE.DoubleSide
    });
    const roof = new THREE.Mesh(roofGeom, roofMat);
    roof.castShadow = true;
    group.add(roof);
  }

  addPatioColumns(group, patioSize) {
    const colH = 3;
    const colR = 0.15;
    const colGeom = new THREE.CylinderGeometry(colR, colR, colH, 12);
    const colMat = new THREE.MeshStandardMaterial({ color: 0xd4a76a });

    const positions = [
      [-patioSize/3, patioSize/3],
      [patioSize/3, patioSize/3],
      [-patioSize/3, -patioSize/3],
      [patioSize/3, -patioSize/3]
    ];

    positions.forEach(([x, z]) => {
      const col = new THREE.Mesh(colGeom, colMat);
      col.position.set(x, colH/2, z);
      col.castShadow = true;
      group.add(col);
    });
  }

  centerCamera(object) {
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const distance = maxDim * 1.8;

    this.camera.position.set(
      center.x + distance * 0.6,
      center.y + distance * 0.5,
      center.z + distance * 0.6
    );

    this.controls.target.copy(center);
    this.controls.update();
  }

  // SIMULATION ÉCLAIRAGE
  setLightingMode(mode) {
    this.mode = mode;

    if (mode === 'day') {
      this.scene.background = new THREE.Color(0x87CEEB);
      this.lights[0].intensity = 0.4; // ambient
      this.lights[1].intensity = 0.8; // sun
      this.lights[1].color.setHex(0xfff5e6);
      this.lights[1].position.set(50, 80, 30);
    } else if (mode === 'night') {
      this.scene.background = new THREE.Color(0x0a0a20);
      this.lights[0].intensity = 0.1;
      this.lights[1].intensity = 0.3; // moon
      this.lights[1].color.setHex(0xa0c8ff);
      this.lights[1].position.set(-30, 50, -40);
    } else if (mode === 'sunset') {
      this.scene.background = new THREE.Color(0xff6b35);
      this.lights[0].intensity = 0.3;
      this.lights[1].intensity = 0.6;
      this.lights[1].color.setHex(0xff8c42);
      this.lights[1].position.set(-60, 20, 20);
    }
  }

  // EXPORTS
  exportPNG(filename = 'projet_3d.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.renderer.domElement.toDataURL('image/png');
    link.click();
  }

  exportJPG(filename = 'projet_3d.jpg') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.renderer.domElement.toDataURL('image/jpeg', 0.95);
    link.click();
  }

  exportGLTF(filename = 'projet_3d.gltf') {
    // Nécessite GLTFExporter de Three.js
    const exporter = new THREE.GLTFExporter();
    exporter.parse(
      this.scene,
      (gltf) => {
        const blob = new Blob([JSON.stringify(gltf)], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = filename;
        link.href = URL.createObjectURL(blob);
        link.click();
      },
      { binary: false }
    );
  }

  onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

// ============================================================================
// EXPORT PDF PROFESSIONNEL
// ============================================================================

function exportPDF(modelData, configuratorState) {
  // Utiliser jsPDF pour générer PDF professionnel
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Page 1: Couverture
  doc.setFontSize(24);
  doc.text('Projet de Construction', 105, 40, { align: 'center' });
  doc.setFontSize(16);
  doc.text(modelData.nom, 105, 55, { align: 'center' });
  doc.setFontSize(12);
  doc.text(`Surface: ${modelData.surface} m²`, 105, 70, { align: 'center' });
  doc.text(`Budget estimé: ${modelData.estimation.toLocaleString('fr-MA')} MAD`, 105, 80, { align: 'center' });
  doc.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 105, 95, { align: 'center' });

  // Page 2: Spécifications techniques
  doc.addPage();
  doc.setFontSize(18);
  doc.text('Spécifications Techniques', 20, 20);

  let y = 35;
  const specs = modelData.specifications;

  // Fondations
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('FONDATIONS', 20, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.text(`Type: ${specs.fondations.type}`, 25, y);
  y += 6;
  doc.text(`${specs.fondations.explication}`, 25, y);
  y += 10;

  // Plus de détails...

  // Sauvegarder
  doc.save(`projet_${modelData.id}_${Date.now()}.pdf`);
}
