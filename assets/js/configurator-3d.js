/**
 * Configurateur 3D Interactif - DarSimul Maroc
 * Système complet de visualisation et simulation de construction
 * Three.js + WebGL
 */

// ============================================================================
// MODÈLES PRÉ-DÉFINIS AVEC SPÉCIFICATIONS TECHNIQUES DÉTAILLÉES
// ============================================================================

const buildingModels = {
  'villa-r1': {
    id: 'villa-r1',
    nom: 'Villa R+1 Contemporaine',
    description: 'Villa moderne deux niveaux avec terrasse accessible',
    surface: 240,
    niveaux: 'R+1',
    chambres: 4,
    salons: 2,
    estimation: 1248000,

    // SPÉCIFICATIONS TECHNIQUES DÉTAILLÉES
    specifications: {
      fondations: {
        type: 'Semelles isolées',
        explication: 'Fondations ponctuelles sous chaque poteau, adaptées aux sols de bonne portance',
        profondeur: '1.20m minimum',
        dimensions: '1.5m x 1.5m x 0.40m (moyenne)',
        ferraillage: {
          acierType: 'HA (Haute Adhérence)',
          diametre: 'Ø16mm à Ø20mm',
          description: 'Barres nervurées pour meilleure adhérence au béton',
          quantite: '120 kg/m³ de béton',
          norme: 'NM 01.4.050 (aciers soudables)'
        },
        beton: {
          dosage: '350 kg/m³',
          resistance: 'C25/30 (25 MPa)',
          classe: 'XC2 (corrosion carbonatation)',
          volume: '28 m³'
        }
      },

      structure: {
        type: 'Portiques béton armé',
        explication: 'Ossature de poteaux et poutres formant des cadres rigides',
        poteaux: {
          section: '30cm x 30cm',
          hauteur: '3.20m par niveau',
          nombre: 16,
          ferraillage: {
            longitudinal: '8Ø16mm (aciers principaux verticaux)',
            transversal: 'Cadres Ø8mm tous les 15cm',
            explication: 'Cadres: armatures en forme de rectangle qui empêchent le flambement'
          },
          beton: 'C25/30'
        },
        poutres: {
          section: '30cm x 40cm',
          portee: '4.50m moyenne',
          ferraillage: {
            superieur: '4Ø16mm (zone compression)',
            inferieur: '6Ø20mm (zone traction)',
            cadres: 'Ø8mm tous les 20cm',
            explication: 'Plus d\'acier en bas car la poutre fléchit comme une branche d\'arbre'
          }
        },
        chainages: {
          horizontal: '25cm x 25cm à chaque niveau',
          vertical: 'Dans tous les angles et intersections',
          explication: 'Ceintures de béton armé qui solidarisent tous les éléments',
          ferraillage: '4Ø12mm + cadres Ø6mm tous les 20cm'
        }
      },

      planchers: {
        type: 'Hourdis béton',
        explication: 'Système de plancher avec poutrelles et corps creux (hourdis)',
        composition: [
          'Poutrelles précontraintes: poutres en T espacées de 60cm',
          'Hourdis: blocs creux en béton 20cm qui servent de coffrage et isolation',
          'Dalle compression: 5cm de béton coulé sur place avec treillis soudé',
          'Chape finition: 3-4cm pour nivellement et pose carrelage'
        ],
        epaisseur: '20+5 = 25cm total',
        charge: '250 kg/m² (usage habitation)',
        portee: '5.00m',
        ferraillage: {
          poutrelles: '3Ø8mm précontraints',
          dalle: 'Treillis soudé ST25 (maillage 15x15cm Ø5mm)',
          explication: 'Treillis: grillage métallique soudé qui arme la dalle de compression'
        }
      },

      toiture: {
        type: 'Terrasse accessible',
        explication: 'Toit plat en béton permettant l\'aménagement d\'un espace extérieur',
        structure: 'Dalle pleine 15cm + forme de pente 8cm',
        pente: '2% (2cm par mètre) pour évacuation eaux',
        etancheite: [
          '1. Dalle béton armé 15cm (support structurel)',
          '2. Forme de pente en béton léger (drainage)',
          '3. Primaire d\'accrochage (préparation surface)',
          '4. Membrane bitume APP 4mm (étanchéité principale)',
          '5. Isolation thermique polyuréthane 6cm (R=2.7)',
          '6. Protection: carrelage grès cérame 2cm sur plots'
        ],
        ferraillage: {
          dalle: 'Double nappe Ø10mm tous les 15cm en x et y',
          explication: 'Deux grilles d\'acier (haut et bas) pour résister flexion et températures'
        },
        evacuation: 'Descentes EP Ø100mm (6 unités)'
      },

      voiles: {
        facade: {
          type: 'Parpaing creux 20cm',
          explication: 'Blocs de béton creux assemblés au mortier',
          dimensions: '20x20x50cm',
          resistance: 'B40 (4 MPa)',
          isolation: 'Polystyrène expansé 5cm (R=1.4) + enduit',
          finition: 'Enduit monocouche taloché 15mm'
        },
        refends: {
          type: 'Parpaing 15cm',
          explication: 'Murs intérieurs de séparation',
          isolation: 'Laine minérale 8cm pour acoustique (cloisons chambres)'
        },
        chainages: 'Tous les 3m en vertical et à chaque niveau en horizontal'
      }
    },

    // Plans de pièces
    pieces: [
      { nom: 'Salon principal', surface: 45, niveau: 'RDC' },
      { nom: 'Cuisine équipée', surface: 20, niveau: 'RDC' },
      { nom: 'Chambre parentale', surface: 25, niveau: 'R+1' },
      { nom: 'Chambre 1', surface: 18, niveau: 'R+1' },
      { nom: 'Chambre 2', surface: 18, niveau: 'R+1' },
      { nom: 'Chambre 3', surface: 16, niveau: 'R+1' }
    ],

    geometrie: {
      longueur: 16,
      largeur: 10,
      hauteur: 7.4,
      forme: 'rectangulaire'
    }
  },

  'riad-patio': {
    id: 'riad-patio',
    nom: 'Riad Traditionnel avec Patio',
    description: 'Architecture marocaine traditionnelle autour d\'un patio central',
    surface: 180,
    niveaux: 'R+1',
    chambres: 3,
    patio: true,
    estimation: 876000,

    specifications: {
      fondations: {
        type: 'Semelles filantes',
        explication: 'Fondations continues sous tous les murs porteurs (traditionnel)',
        profondeur: '1.00m',
        largeur: '60cm',
        ferraillage: {
          acierType: 'HA',
          longitudinal: '6Ø14mm (3 en haut, 3 en bas)',
          transversal: 'Cadres Ø8mm tous les 25cm',
          description: 'Ferraillage continu comme une poutre horizontale'
        },
        beton: {
          dosage: '300 kg/m³',
          resistance: 'C20/25',
          volume: '22 m³'
        }
      },

      structure: {
        type: 'Murs porteurs + Arcades',
        explication: 'Système traditionnel: murs épais qui supportent les charges + arcs décoratifs',
        mursPorteurs: {
          epaisseur: '40cm (double paroi)',
          materiaux: 'Pierre + brique terre cuite',
          hauteur: '3.50m',
          ferraillage: 'Chaînages béton armé 20x20cm tous les 2.5m',
          explication: 'Les murs épais assurent la stabilité et l\'inertie thermique'
        },
        arcades: {
          type: 'Arcs outrepassés (fer à cheval)',
          portee: '2.50m',
          materiaux: 'Brique pleine + plâtre sculpté',
          explication: 'Forme caractéristique de l\'architecture marocaine, répartit les charges'
        },
        colonnes: {
          nombre: 8,
          section: 'Ø30cm (cylindrique)',
          hauteur: '3.00m',
          materiaux: 'Béton armé habillé zellige',
          ferraillage: '8Ø12mm + spirales Ø6mm tous les 10cm'
        }
      },

      planchers: {
        type: 'Solives bois + plancher',
        explication: 'Système traditionnel marocain avec poutres en bois apparent',
        composition: [
          'Solives principales cèdre 20x25cm espacées 80cm',
          'Solives secondaires 10x15cm espacées 40cm',
          'Plancher bois 2.5cm ou hourdis légers',
          'Chape légère 4cm + carrelage zellige'
        ],
        portee: '4.50m',
        charge: '200 kg/m² (usage habitation)',
        traitement: 'Bois traité xylophène (insectes + humidité)'
      },

      toiture: {
        type: 'Terrasse avec ouverture patio',
        explication: 'Toit plat avec ouverture centrale pour le patio (ciel ouvert)',
        patio: {
          ouverture: '5m x 5m',
          explication: 'Espace central à ciel ouvert, cœur du riad pour lumière et ventilation',
          protection: 'Garde-corps fer forgé 1.10m + gouttière périphérique'
        },
        etancheite: [
          '1. Dalle béton 12cm',
          '2. Forme pente 2%',
          '3. Étanchéité bitume double couche',
          '4. Zellige traditionnel sur mortier de pose',
          '5. Décorations: mosaïques géométriques'
        ],
        evacuation: 'Système traditionnel vers patio puis canalisations'
      },

      voiles: {
        facade: {
          type: 'Mur mixte pierre/brique',
          composition: [
            'Parement extérieur: pierre de taille 15cm',
            'Mur porteur: brique terre cuite 20cm',
            'Isolation: liège expansé 5cm (matériau local)',
            'Parement intérieur: tadelakt ou zellige'
          ],
          explication: 'Double peau pour isolation et esthétique traditionnelle'
        },
        moucharabiehs: {
          explication: 'Grilles en bois sculpté pour fenêtres: ventilation + intimité + esthétique',
          materiaux: 'Cèdre du Moyen Atlas sculpté',
          epaisseur: '8cm (ajouré 40%)'
        }
      },

      decorations: {
        zellige: {
          surface: '120m²',
          explication: 'Mosaïque de céramique émaillée assemblée en motifs géométriques',
          zones: 'Fontaine patio, soubassements, colonnes',
          couleurs: 'Bleu, vert, blanc, noir (palette traditionnelle)'
        },
        tadelakt: {
          surface: '80m²',
          explication: 'Enduit à la chaux poli et ciré, étanche et brillant',
          zones: 'Salles d\'eau, hammam',
          technique: 'Application 3 couches + polissage galet + savon noir'
        },
        gypserie: {
          surface: '40m²',
          explication: 'Sculptures en plâtre avec motifs géométriques et calligraphie',
          zones: 'Arcs, plafonds, frises murales'
        }
      }
    },

    pieces: [
      { nom: 'Patio central', surface: 25, niveau: 'RDC', openSky: true },
      { nom: 'Salon marocain', surface: 30, niveau: 'RDC' },
      { nom: 'Salle à manger', surface: 20, niveau: 'RDC' },
      { nom: 'Chambre 1', surface: 22, niveau: 'R+1' },
      { nom: 'Chambre 2', surface: 20, niveau: 'R+1' },
      { nom: 'Chambre 3', surface: 18, niveau: 'R+1' }
    ],

    geometrie: {
      forme: 'carree',
      dimension: 13.5,
      patioSize: 5,
      hauteur: 8.2
    }
  },

  'villa-r2': {
    id: 'villa-r2',
    nom: 'Villa R+2 Standing',
    description: 'Villa de standing trois niveaux avec terrasse panoramique',
    surface: 320,
    niveaux: 'R+2',
    chambres: 5,
    salons: 2,
    estimation: 1856000,

    specifications: {
      fondations: {
        type: 'Radier général',
        explication: 'Dalle de fondation sous toute la surface du bâtiment, pour sols moyennement portants',
        epaisseur: '40cm',
        surface: '200m² (emprise au sol)',
        ferraillage: {
          acierType: 'HA',
          inferieurs: 'Nappe Ø16mm tous les 15cm (x et y)',
          superieurs: 'Nappe Ø12mm tous les 20cm (x et y)',
          relevés: 'Ø14mm tous les angles et poteaux',
          description: 'Double ferraillage pour résister aux deux sens de flexion',
          quantite: '95 kg/m³'
        },
        beton: {
          dosage: '350 kg/m³',
          resistance: 'C30/37',
          classe: 'XC2/XC3',
          volume: '80 m³',
          adjuvant: 'Hydrofuge de masse (imperméabilisation)'
        },
        soubassement: {
          hauteur: '80cm',
          explication: 'Mur périphérique enterré qui rehausse le niveau + drainage',
          drainage: 'Drain agricole Ø100mm + géotextile + gravier 40/60'
        }
      },

      structure: {
        type: 'Voiles + Poteaux BA',
        explication: 'Système mixte: murs en béton (voiles) + poteaux pour grandes portées',
        voilesBeton: {
          epaisseur: '18cm',
          hauteur: '3.20m par niveau',
          position: 'Cages d\'escaliers, ascenseur, façades pignons',
          ferraillage: {
            vertical: 'Ø12mm tous les 20cm',
            horizontal: 'Ø10mm tous les 20cm',
            description: 'Double nappe (deux grilles) pour rigidifier le bâtiment',
            treillis: 'Treillis soudé PAF Ø8mm (Panneau Armature Façade)'
          },
          explication: 'Voiles: murs en béton armé qui résistent au vent et séismes'
        },
        poteaux: {
          section: '35cm x 35cm (renforcés pour 3 niveaux)',
          nombre: 20,
          ferraillage: {
            longitudinal: '8Ø20mm',
            transversal: 'Cadres Ø10mm tous les 12cm en zone critique (jonctions)',
            zone_courante: 'Cadres Ø8mm tous les 20cm',
            explication: 'Plus de cadres près des jonctions car les contraintes sont maximales'
          }
        },
        noyauCentral: {
          explication: 'Bloc central en béton armé contenant escalier + ascenseur',
          dimensions: '4m x 5m',
          epaisseur: '20cm',
          role: 'Contreventement principal (résistance aux forces horizontales)'
        }
      },

      planchers: {
        type: 'Dalle pleine',
        explication: 'Dalle en béton armé coulée sur place, plus résistante que hourdis',
        epaisseur: {
          courante: '16cm',
          balcons: '14cm (porte-à-faux)',
          terrasse: '18cm'
        },
        ferraillage: {
          inferieurs: 'Ø12mm tous les 15cm (traction)',
          superieurs: 'Ø10mm tous les 20cm (retrait-température)',
          appuis: 'Renfort Ø14mm sur 1m de largeur',
          chapeaux: 'Aciers supérieurs au-dessus des appuis (zones en traction)',
          explication: 'Chapeau: ferraillage en U inversé au-dessus des poutres'
        },
        beton: {
          dosage: '350 kg/m³',
          resistance: 'C25/30',
          adjuvant: 'Plastifiant (meilleure mise en œuvre)'
        },
        portee: '6.00m (grandes pièces standing)'
      },

      toiture: {
        type: 'Terrasse accessible panoramique',
        explication: 'Grande terrasse aménagée avec vue 360° et équipements',
        surface: '120m²',
        structure: 'Dalle pleine 18cm + relevés d\'étanchéité 60cm',
        equipements: [
          'Cuisine d\'été couverte (pergola)',
          'Jacuzzi (renfort structure 800kg)',
          'Salon de jardin fixe',
          'Panneaux solaires 6kWc (production électrique)',
          'Ballon solaire 300L (eau chaude)'
        ],
        etancheite: [
          '1. Dalle béton armé 18cm',
          '2. Isolant PIR 10cm (R=4.5) - haute performance',
          '3. Pare-vapeur aluminium',
          '4. Forme de pente béton léger 2%',
          '5. Primaire d\'accrochage bitumineux',
          '6. Membrane PVC armé 1.5mm (durée 25 ans)',
          '7. Plots réglables + dalles grès cérame 60x60cm'
        ],
        gardeCorps: {
          hauteur: '1.10m (norme)',
          type: 'Inox 316 + verre feuilleté 10mm',
          explication: 'Verre pour vue dégagée, inox pour durabilité face aux intempéries'
        }
      },

      voiles: {
        facade: {
          type: 'Mur double peau',
          composition: [
            '1. Parement brique de parement 12cm (esthétique)',
            '2. Lame d\'air 4cm (ventilation + rupture thermique)',
            '3. Isolation laine roche 10cm (R=3.2)',
            '4. Mur porteur parpaing 20cm',
            '5. Enduit intérieur 15mm + peinture'
          ],
          performance: 'R=3.5 (isolation renforcée)',
          explication: 'Double mur avec isolation et lame d\'air pour performance thermique optimale'
        },
        baiesVitrees: {
          type: 'Aluminium à rupture de pont thermique',
          vitrage: 'Double vitrage 4/16/4 argon (U=1.1 W/m².K)',
          surface: '65m² (30% façade)',
          explication: 'Rupture pont thermique: séparation isolante entre alu intérieur/extérieur'
        }
      },

      systemesSpeciaux: {
        ascenseur: {
          type: 'Électrique gearless (sans machinerie)',
          charge: '630kg (8 personnes)',
          arrêts: '4 (SS + RDC + R+1 + R+2)',
          cuvette: 'Fosse 1.40m + local machinerie 2.5m²',
          alimentation: 'Triphasé 400V + secours batterie'
        },
        vmc: {
          type: 'VMC double flux (récupération chaleur)',
          débit: '450 m³/h',
          rendement: '92% (récupération énergie)',
          explication: 'Renouvelle l\'air en récupérant la chaleur/fraîcheur'
        },
        climatisation: {
          type: 'Multi-split inverter gainable',
          puissance: '18kW (froid)',
          splits: '6 zones indépendantes',
          classe: 'A+++ (haute efficacité)'
        }
      }
    },

    pieces: [
      { nom: 'Grand salon', surface: 50, niveau: 'RDC' },
      { nom: 'Salle à manger', surface: 30, niveau: 'RDC' },
      { nom: 'Cuisine ouverte', surface: 25, niveau: 'RDC' },
      { nom: 'Bureau', surface: 18, niveau: 'RDC' },
      { nom: 'Suite parentale + dressing', surface: 40, niveau: 'R+1' },
      { nom: 'Chambre 1', surface: 22, niveau: 'R+1' },
      { nom: 'Chambre 2', surface: 20, niveau: 'R+1' },
      { nom: 'Chambre 3', surface: 20, niveau: 'R+2' },
      { nom: 'Chambre 4', surface: 18, niveau: 'R+2' },
      { nom: 'Terrasse panoramique', surface: 120, niveau: 'R+2' }
    ],

    geometrie: {
      longueur: 18,
      largeur: 12,
      hauteur: 10.8,
      forme: 'rectangulaire',
      sousSol: false
    }
  },

  'maison-eco': {
    id: 'maison-eco',
    nom: 'Maison Économique Optimisée',
    description: 'Maison compacte et économique sans compromis sur la qualité',
    surface: 120,
    niveaux: 'RDC',
    chambres: 3,
    salons: 1,
    estimation: 492000,

    specifications: {
      fondations: {
        type: 'Semelles continues économiques',
        explication: 'Fondations optimisées avec semelles sous murs porteurs uniquement',
        profondeur: '0.80m',
        largeur: '50cm',
        ferraillage: {
          acierType: 'HA',
          longitudinal: '4Ø12mm (2 en haut, 2 en bas)',
          transversal: 'Cadres Ø6mm tous les 30cm',
          quantite: '60 kg/m³ (optimisé)',
          description: 'Ferraillage minimum réglementaire pour économie'
        },
        beton: {
          dosage: '300 kg/m³',
          resistance: 'C20/25',
          volume: '12 m³',
          provenance: 'Béton chantier (bétonnière) pour économie'
        }
      },

      structure: {
        type: 'Murs porteurs parpaing',
        explication: 'Structure économique traditionnelle: les murs supportent tout (pas de poteaux)',
        murs: {
          porteurs: {
            epaisseur: '20cm',
            materiaux: 'Parpaing creux B40',
            hauteur: '3.00m (optimisé)',
            chainages: {
              horizontal: '15cm x 20cm tous les niveaux',
              vertical: 'Angles et intersections uniquement',
              ferraillage: '4Ø10mm + cadres Ø6mm/25cm',
              explication: 'Chaînages minimum pour solidariser la structure'
            }
          },
          cloisons: {
            epaisseur: '10cm',
            materiaux: 'Parpaing creux ou brique creuse 10cm',
            explication: 'Murs de séparation non porteurs, plus fins pour économie'
          }
        },
        optimisation: 'Plan compact (forme simple) pour minimiser linéaires murs'
      },

      planchers: {
        type: 'Dalle terre-plein',
        explication: 'Dalle coulée directement sur le sol (pas de vide sanitaire) - économie max',
        composition: [
          '1. Décapage terre végétale 20cm',
          '2. Hérisson pierre concassée 30cm (drainage + stabilité)',
          '3. Polyane 200 microns (coupure capillarité)',
          '4. Dalle béton armé 12cm',
          '5. Chape mortier 3cm + carrelage économique'
        ],
        ferraillage: {
          type: 'Treillis soudé simple nappe',
          maillage: 'ST15 (Ø5mm / 20x20cm)',
          explication: 'Ferraillage léger suffisant pour dalle sur terre-plein'
        },
        beton: {
          dosage: '300 kg/m³',
          resistance: 'C20/25',
          epaisseur: '12cm',
          economie: 'Pas de coffrage ni étaiement = économie 40%'
        }
      },

      toiture: {
        type: 'Charpente bois + tuiles',
        explication: 'Toiture traditionnelle inclinée, plus économique que terrasse béton',
        charpente: {
          type: 'Fermettes industrielles préfabriquées',
          essence: 'Sapin traité classe 2',
          entraxe: '60cm',
          portee: '8.00m (sans mur intermédiaire)',
          section: {
            arbaletrier: '6cm x 15cm (rampants)',
            entrait: '6cm x 12cm (base)',
            poinçon: '6cm x 10cm (vertical central)'
          },
          explication: 'Fermette: triangle préfabriqué, économique et rapide à poser',
          economie: 'Préfabrication = -35% vs charpente traditionnelle'
        },
        couverture: {
          type: 'Tuiles béton',
          modele: 'Plate 33cm x 42cm',
          pente: '35% (19°)',
          quantite: '13 tuiles/m²',
          couleur: 'Rouge naturel',
          economie: 'Tuile béton = -50% vs tuile terre cuite',
          duree: '30 ans'
        },
        isolation: {
          type: 'Laine de verre déroulée',
          epaisseur: '20cm (R=5.0)',
          pose: 'Entre fermettes',
          pare_vapeur: 'Film polyéthylène 200 microns',
          economie: 'Isolation rampants = -30% vs isolation terrasse'
        },
        zinguerie: {
          gouttieres: 'PVC Ø25 demi-ronde (économique)',
          descentes: 'PVC Ø80',
          faitiere: 'Tuiles faîtières béton à emboîtement'
        }
      },

      voiles: {
        facade: {
          type: 'Simple paroi optimisée',
          composition: [
            '1. Mur parpaing creux 20cm',
            '2. Isolation polystyrène 4cm (R=1.15)',
            '3. Enduit ciment taloché 15mm',
            '4. Peinture acrylique façade'
          ],
          menuiseries: {
            type: 'PVC blanc standard',
            vitrage: 'Simple vitrage 4mm (climat doux) ou double 4/12/4',
            volets: 'Roulants PVC manuel',
            economie: 'PVC = -40% vs alu, volets manuels = -60% vs motorisés'
          }
        },
        interieur: {
          finitions: 'Enduit plâtre lissé + peinture glycéro lavable',
          plinthes: 'MDF 6cm blanc',
          portes: 'Isoplane plaquée 73cm standard'
        }
      },

      equipements: {
        electricite: {
          puissance: 'Monophasé 9kVA',
          tableau: '2 rangées 18 modules',
          circuits: 'Minimum réglementaire NF C 15-100',
          appareillage: 'Legrand Mosaic blanc (économique)',
          economie: 'Installation standard sans domotique'
        },
        plomberie: {
          eau_froide: 'Multicouche Ø16-20mm',
          eau_chaude: 'Chauffe-eau électrique 150L (économique)',
          evacuation: 'PVC Ø32-100mm',
          sanitaires: 'Gamme standard (Grohe Start, Roca Victoria)',
          economie: 'Pas de système solaire ni adoucisseur'
        },
        chauffage: {
          type: 'Pas de chauffage central',
          appoint: 'Chauffages électriques mobiles au besoin',
          economie: 'Installation simple = -85% vs chauffage central'
        }
      },

      optimisations: [
        'Forme rectangulaire simple: minimise linéaires murs et toiture',
        'Plan compact: réduit surfaces déperditions thermiques',
        'Couloir traversant: ventilation naturelle (pas de VMC)',
        'Mono-niveau: pas d\'escalier ni structure multicouche',
        'Toiture 2 pans simples: pas de noues ni géométrie complexe',
        'Fondations continues: pas de longrines entre semelles',
        'Menuiseries standard: dimensions courantes stock',
        'Carrelage économique: grès émaillé 30x30cm tons clairs'
      ]
    },

    pieces: [
      { nom: 'Salon/séjour', surface: 35, niveau: 'RDC' },
      { nom: 'Cuisine', surface: 12, niveau: 'RDC' },
      { nom: 'Chambre parentale', surface: 16, niveau: 'RDC' },
      { nom: 'Chambre 1', surface: 12, niveau: 'RDC' },
      { nom: 'Chambre 2', surface: 12, niveau: 'RDC' },
      { nom: 'SDB', surface: 6, niveau: 'RDC' }
    ],

    geometrie: {
      longueur: 12,
      largeur: 8,
      hauteur: 6.5,
      forme: 'rectangulaire',
      toiture: 'inclinee'
    }
  },

  'immeuble-r3': {
    id: 'immeuble-r3',
    nom: 'Immeuble R+3 Locatif',
    description: 'Immeuble résidentiel 4 niveaux avec 6 appartements',
    surface: 400,
    niveaux: 'R+3',
    appartements: 6,
    estimation: 2464000,

    specifications: {
      fondations: {
        type: 'Pieux + Longrines',
        explication: 'Fondations profondes pour sol peu portant ou charge importante',
        pieux: {
          type: 'Pieux forés tubés Ø40cm',
          profondeur: '6.00m (couche résistante)',
          nombre: 24,
          capacite: '80 tonnes chacun',
          ferraillage: '10Ø16mm + spirales Ø8mm/15cm',
          beton: 'C30/37 (résistance haute)',
          explication: 'Pieu: cylindre béton armé profond ancré dans sol résistant'
        },
        longrines: {
          section: '30cm x 50cm',
          role: 'Relier les têtes de pieux et répartir charges',
          ferraillage: {
            superieurs: '3Ø16mm',
            inferieurs: '5Ø20mm',
            cadres: 'Ø10mm tous les 15cm',
            explication: 'Longrines travaillent comme poutres inversées entre pieux'
          },
          portee: '4.00m entre pieux'
        },
        dallage: {
          type: 'Dallage désolidarisé sur hérisson',
          explication: 'Dalle indépendante de la structure, posée sur remblai compacté',
          epaisseur: '15cm',
          armature: 'Treillis soudé ST25',
          joint: 'Joints de fractionnement tous les 5m'
        }
      },

      structure: {
        type: 'Ossature béton armé contreventée',
        explication: 'Structure poteaux-poutres + voiles de contreventement (anti-vent/séisme)',
        poteaux: {
          section: '40cm x 40cm (forte charge 4 niveaux)',
          nombre: 24,
          ferraillage: {
            longitudinal: '12Ø20mm (section acier 3.8%)',
            cadres: 'Ø10mm tous les 10cm en zone critique',
            zone_courante: 'Ø8mm tous les 15cm',
            explication: 'Taux de ferraillage élevé pour résister charges verticales importantes'
          },
          beton: 'C30/37 (haute résistance)'
        },
        poutres: {
          principales: '35cm x 50cm',
          secondaires: '30cm x 40cm',
          portee: '5.50m',
          ferraillage: {
            travee: '4Ø20mm inférieurs + 2Ø16mm supérieurs',
            appuis: '6Ø20mm supérieurs (chapeaux)',
            cadres: 'Ø10mm espacés 15cm → 10cm → 15cm',
            explication: 'Espacement réduit près appuis (zone effort tranchant max)'
          }
        },
        voilesContreventement: {
          nombre: 3,
          position: 'Cage escalier + 2 pignons',
          epaisseur: '20cm',
          hauteur: '14.00m (4 niveaux d\'un seul tenant)',
          ferraillage: {
            vertical: 'Ø14mm tous les 15cm',
            horizontal: 'Ø12mm tous les 15cm',
            type: 'Double nappe',
            renfort_angles: 'Épingles Ø12mm',
            explication: 'Voile = mur rigide qui reprend efforts horizontaux (vent 150km/h, séisme)'
          }
        }
      },

      planchers: {
        type: 'Dalles pleines précontraintes',
        explication: 'Dalles avec câbles tendus pour permettre grandes portées sans poutres',
        epaisseur: '20cm (forte charge)',
        portee: '7.00m (espaces libres grands)',
        precontrainte: {
          type: 'Post-tension par câbles',
          cables: 'Torons Ø15mm tendus à 150kN',
          nombre: 'Espacés de 80cm',
          explication: 'Câbles métalliques tendus après coulage qui compriment le béton',
          avantage: 'Portée +40%, épaisseur -25% vs dalle classique'
        },
        ferraillage_passif: {
          inferieurs: 'Ø12mm tous les 20cm (complément)',
          superieurs: 'Ø10mm tous les 25cm',
          chapeaux: 'Ø14mm sur 1.5m aux appuis'
        },
        charge: '350 kg/m² (usage locatif collectif)',
        isolation: {
          phonique: 'Dalle flottante avec résilient 3cm (IIC 58dB)',
          explication: 'Chape désolidarisée par bande élastique = isolation acoustique'
        }
      },

      toiture: {
        type: 'Toiture-terrasse technique',
        explication: 'Toit plat avec équipements techniques collectifs',
        structure: 'Dalle pleine 20cm + acrotères 60cm',
        equipements: [
          'Local technique ascenseur 8m²',
          'Climatisation collective (groupes extérieurs)',
          'Antennes satellites et TNT',
          'Panneaux solaires 15kWc (parties communes)',
          'Réservoirs eau 2x3000L (pression étages)'
        ],
        etancheite: [
          '1. Dalle béton précontrainte 20cm',
          '2. Isolation PIR 12cm (R=5.4)',
          '3. Pare-vapeur bitume APP 3mm',
          '4. Forme de pente béton léger 1.5%',
          '5. Étanchéité bicouche soudée APP 4+4mm',
          '6. Protection gravillons 5cm (ballast)',
          '7. Dalles béton sur plots pour circulations techniques'
        ],
        evacuation: {
          descentes: 'Ø125mm (4 unités)',
          trop_plein: 'Évacuation secours Ø100mm',
          explication: 'Double système évacuation pour sécurité (pluies intenses)'
        },
        acces: 'Escalier + trappe accès technique 80x120cm'
      },

      voiles: {
        facade: {
          type: 'Mur rideau partiel + menuiseries alu',
          explication: 'Mur léger non porteur accroché à la structure',
          composition: [
            '1. Structure alu laquée',
            '2. Isolation laine roche 10cm',
            '3. Bardage composite Alucobond 4mm',
            '4. Baies vitrées alu anodisé',
            '5. Double vitrage VIR 4/16/4 argon (U=1.0)'
          ],
          garde_corps: {
            type: 'Verre feuilleté 12mm sur platines inox',
            hauteur: '1.10m (norme)',
            explication: 'Verre feuilleté: 2 plaques collées = sécurité (ne se brise pas)'
          }
        },
        refends: {
          type: 'Séparatifs acoustiques renforcés',
          composition: [
            '1. Parpaing de 20cm rempli mortier',
            '2. Complexe acoustique: laine minérale 10cm + placo 2x13mm',
            '3. Vide d\'air 2cm (rupture pont phonique)'
          ],
          performance: 'Rw=58dB (réglementation collective 53dB)',
          explication: 'Réduction 58dB: conversation normale inaudible entre appartements'
        }
      },

      equipements: {
        ascenseur: {
          nombre: 1,
          type: 'Électrique traction (câbles)',
          charge: '630kg (8 personnes)',
          vitesse: '1.0 m/s',
          arrêts: 5,
          cuvette: '1.50m',
          local_machinerie: 'En toiture 10m²',
          secours: 'Batterie + descente manuelle',
          explication: 'Obligatoire R+3 selon DTU 65.10'
        },
        ventilation: {
          type: 'VMC collective hygroréglable',
          extraction: 'Gaines collectives isolées Ø160mm',
          bouches: 'Hygroréglables (débit auto selon humidité)',
          caisson: '3500m³/h en toiture',
          explication: 'Système mutualisé = économie maintenance + énergie'
        },
        chauffage: {
          type: 'Chaudière gaz collective',
          puissance: '150kW',
          distribution: 'Colonne montante + compteurs individuels',
          regulation: 'Thermostat dans chaque logement',
          production_ecs: 'Ballon 1000L + appoint solaire'
        },
        securite: {
          incendie: [
            'Extincteurs tous les 15m',
            'Détecteurs ioniques dans parties communes',
            'Éclairage sécurité sur batteries',
            'Porte CF 1h cage escalier',
            'Désenfumage naturel toiture'
          ],
          explication: 'CF = Coupe-Feu, résiste au feu pendant 1 heure'
        },
        digicode: 'Portier vidéo Urmet avec badges',
        boites_lettres: 'Batterie 6 boîtes normalisées PTT'
      }
    },

    pieces: [
      { nom: 'Appt 1 - F3', surface: 75, niveau: 'RDC' },
      { nom: 'Appt 2 - F2', surface: 55, niveau: 'RDC' },
      { nom: 'Appt 3 - F3', surface: 75, niveau: 'R+1' },
      { nom: 'Appt 4 - F2', surface: 55, niveau: 'R+1' },
      { nom: 'Appt 5 - F3', surface: 75, niveau: 'R+2' },
      { nom: 'Appt 6 - F2', surface: 55, niveau: 'R+2' }
    ],

    geometrie: {
      longueur: 20,
      largeur: 12,
      hauteur: 14.4,
      forme: 'rectangulaire',
      ascenseur: true
    }
  }
};

// ============================================================================
// BIBLIOTHÈQUE COMPLÈTE DE MATÉRIAUX (150+)
// ============================================================================

const materialsLibrary = {
  // CATÉGORIE: BÉTONS ET MORTIERS
  betons: {
    nom: 'Bétons et Mortiers',
    explication: 'Matériaux de base pour structure et maçonnerie',
    items: {
      'c20-25': {
        nom: 'Béton C20/25',
        explication: 'Béton standard pour fondations et dallages (20 MPa résistance à 28 jours)',
        dosage: '300 kg ciment/m³',
        resistance: '20 MPa',
        usage: 'Fondations, longrines, dallages',
        prix_m3: 950,
        fournisseurs: ['LafargeHolcim', 'Ciments du Maroc']
      },
      'c25-30': {
        nom: 'Béton C25/30',
        explication: 'Béton armé courant pour éléments structuraux (25 MPa)',
        dosage: '350 kg ciment/m³',
        resistance: '25 MPa',
        usage: 'Poteaux, poutres, planchers, voiles',
        prix_m3: 1050,
        fournisseurs: ['LafargeHolcim', 'Ciments du Maroc', 'Béton du Maroc']
      },
      'c30-37': {
        nom: 'Béton C30/37 HP',
        explication: 'Béton haute performance pour structures sollicitées (30 MPa)',
        dosage: '400 kg ciment/m³',
        resistance: '30 MPa',
        usage: 'Immeubles élevés, pieux, radiers',
        prix_m3: 1200,
        adjuvants: 'Plastifiants, hydrofuges'
      },
      'leger': {
        nom: 'Béton léger',
        explication: 'Béton allégé pour formes de pente et isolation (densité réduite 1400kg/m³)',
        densite: '1400 kg/m³',
        usage: 'Formes de pente toiture, isolation',
        prix_m3: 850,
        avantage: 'Léger + isolant thermique'
      }
    }
  },

  // CATÉGORIE: ACIERS
  aciers: {
    nom: 'Aciers pour béton armé',
    explication: 'Armatures métalliques qui renforcent le béton en traction',
    items: {
      'ha-fe500': {
        nom: 'Acier HA Fe500 (Haute Adhérence)',
        explication: 'Barres nervurées crantées pour accroche optimale au béton',
        limite_elastique: '500 MPa',
        diametres: ['Ø6', 'Ø8', 'Ø10', 'Ø12', 'Ø14', 'Ø16', 'Ø20', 'Ø25', 'Ø32'],
        presentation: 'Barres 6m ou 12m',
        prix_tonne: 7500,
        norme: 'NM 01.4.050',
        fournisseurs: ['Sonasid', 'Maghreb Steel']
      },
      'treillis-soude': {
        nom: 'Treillis soudés',
        explication: 'Panneaux de grillage métallique soudé pour armature rapide des dalles',
        types: {
          'ST15': 'Maillage 20x20cm Ø5mm (dalles légères)',
          'ST25': 'Maillage 15x15cm Ø5mm (dalles courantes)',
          'PAF': 'Panneau Armature Façade pour voiles'
        },
        dimensions: '2.40m x 6.00m',
        prix_m2: 45,
        avantage: 'Pose rapide, moins de main d\'œuvre'
      },
      'cadres-epingles': {
        nom: 'Cadres et épingles',
        explication: 'Armatures transversales en forme de rectangle qui empêchent le flambement',
        formes: ['Cadres rectangulaires', 'Étriers', 'Épingles (U)'],
        diametres: 'Ø6, Ø8, Ø10mm',
        role: 'Reprise effort tranchant + anti-flambement aciers longitudinaux',
        prix_kg: 9
      },
      'acier-precontraint': {
        nom: 'Torons de précontrainte',
        explication: 'Câbles à haute résistance tendus pour comprimer le béton',
        type: '7 fils torsadés',
        resistance: '1860 MPa (4x acier normal)',
        diametres: ['Ø12.5mm', 'Ø15mm'],
        usage: 'Précontrainte dalles, poutres longue portée',
        prix_kg: 18
      }
    }
  },

  // CATÉGORIE: BLOCS ET BRIQUES
  maconnerie: {
    nom: 'Blocs et briques de maçonnerie',
    explication: 'Éléments empilables pour murs et cloisons',
    items: {
      'parpaing-20': {
        nom: 'Parpaing creux 20cm',
        explication: 'Bloc béton avec alvéoles, élément de base pour murs porteurs',
        dimensions: '20x20x50cm',
        resistance: 'B40 (4 MPa)',
        poids: '16 kg',
        usage: 'Murs porteurs extérieurs',
        prix_unite: 6.5,
        prix_m2: 65,
        rendement: '10 blocs/m²'
      },
      'parpaing-15': {
        nom: 'Parpaing creux 15cm',
        explication: 'Parpaing pour refends intérieurs et cloisons renforcées',
        dimensions: '15x20x50cm',
        poids: '13 kg',
        usage: 'Refends porteurs intérieurs',
        prix_unite: 5.8,
        prix_m2: 58
      },
      'parpaing-10': {
        nom: 'Parpaing 10cm',
        explication: 'Parpaing fin pour cloisons légères non porteuses',
        dimensions: '10x20x50cm',
        poids: '9 kg',
        usage: 'Cloisons séparatives',
        prix_unite: 4.5,
        prix_m2: 45
      },
      'brique-creuse': {
        nom: 'Brique creuse 8 trous',
        explication: 'Brique terre cuite avec alvéoles verticales, légère et isolante',
        dimensions: '20x20x30cm',
        poids: '8 kg',
        usage: 'Cloisons, doublage, murs non porteurs',
        avantages: 'Légère, bonne isolation phonique',
        prix_unite: 5.2,
        prix_m2: 62
      },
      'brique-pleine': {
        nom: 'Brique pleine terre cuite',
        explication: 'Brique massive pour charges importantes et esthétique',
        dimensions: '22x10.5x5cm',
        poids: '2.3 kg',
        usage: 'Arcs, façades apparentes, murets',
        avantages: 'Esthétique, durable, écologique',
        prix_unite: 2.8,
        prix_m2: 110
      },
      'brique-parement': {
        nom: 'Brique de parement',
        explication: 'Brique décorative pour façades sans enduit',
        couleurs: ['Rouge naturel', 'Ocre', 'Beige', 'Sablé'],
        dimensions: '22x10.5x5cm',
        usage: 'Façades vues, décoration',
        prix_m2: 180
      }
    }
  },

  // CATÉGORIE: ISOLANTS THERMIQUES
  isolants: {
    nom: 'Isolants thermiques',
    explication: 'Matériaux réduisant les transferts de chaleur (hiver/été)',
    items: {
      'polystyrene-expanse': {
        nom: 'Polystyrène expansé (PSE)',
        explication: 'Panneaux blancs en billes expansées, économique et léger',
        epaisseurs: ['4cm (R=1.15)', '6cm (R=1.7)', '8cm (R=2.3)', '10cm (R=2.85)'],
        conductivite: '0.035 W/m.K',
        densite: '15-20 kg/m³',
        usage: 'Isolation murs, toitures',
        avantages: 'Économique, léger, imputrescible',
        inconvenients: 'Inflammable (nécessite protection)',
        prix_m2_10cm: 85
      },
      'polystyrene-extrude': {
        nom: 'Polystyrène extrudé (XPS)',
        explication: 'Panneaux bleus/verts à cellules fermées, plus performant que PSE',
        conductivite: '0.029 W/m.K',
        resistance_compression: '300 kPa',
        usage: 'Isolation sous dalles, terrasses inversées, soubassements',
        avantages: 'Résistant humidité + compression',
        prix_m2_10cm: 145
      },
      'laine-roche': {
        nom: 'Laine de roche',
        explication: 'Isolant en fibres de roches volcaniques, incombustible',
        conductivite: '0.036 W/m.K',
        densite: '40-150 kg/m³',
        classement_feu: 'A1 (incombustible)',
        usage: 'Isolation murs, toitures, acoustique',
        avantages: 'Incombustible, phonique, respirant',
        prix_m2_10cm: 120
      },
      'laine-verre': {
        nom: 'Laine de verre',
        explication: 'Isolant en fibres de verre, le plus économique',
        conductivite: '0.032-0.040 W/m.K',
        presentations: ['Rouleaux', 'Panneaux'],
        usage: 'Combles, rampants, cloisons',
        prix_m2_20cm: 65
      },
      'polyurethane': {
        nom: 'Mousse polyuréthane (PUR/PIR)',
        explication: 'Isolant à cellules fermées, plus performant (mince = efficace)',
        conductivite: '0.022-0.028 W/m.K',
        presentations: ['Panneaux rigides', 'Mousse projetée'],
        usage: 'Toitures, murs, isolation mince haute performance',
        avantages: 'Meilleure performance/épaisseur',
        prix_m2_10cm: 180
      },
      'liege': {
        nom: 'Liège expansé',
        explication: 'Isolant naturel écologique issu de l\'écorce de chêne-liège',
        conductivite: '0.040 W/m.K',
        densite: '100-120 kg/m³',
        usage: 'Isolation écologique murs, sols',
        avantages: 'Naturel, renouvelable, imputrescible, longévité 50+ ans',
        origine: 'Production locale Maroc (forêts Mamora)',
        prix_m2_10cm: 210
      }
    }
  },

  // Continuer avec 10 autres catégories...
