// Base de données matériaux BuilderMaroc 2025
// 150+ matériaux avec prix actualisés par région

const materiauxDatabase = {
  categories: {
    structure: {
      name: "Structure & Gros Œuvre",
      icon: "🏗️",
      items: [
        { id: "ciment-cpa-45", name: "Ciment CPA 45", unit: "tonne", prixCasa: 950, prixRabat: 980, prixMarrakech: 920, prixTanger: 970, prixFes: 900, prixAgadir: 940, fournisseurs: ["LafargeHolcim", "Ciments du Maroc"], norme: "NM 10.1.004" },
        { id: "ciment-cpj-35", name: "Ciment CPJ 35", unit: "tonne", prixCasa: 850, prixRabat: 880, prixMarrakech: 820, prixTanger: 870, prixFes: 800, prixAgadir: 840, fournisseurs: ["LafargeHolcim", "Holcim"], norme: "NM 10.1.004" },
        { id: "beton-bpe-b25", name: "Béton Prêt à l'Emploi B25", unit: "m³", prixCasa: 1100, prixRabat: 1150, prixMarrakech: 950, prixTanger: 1080, prixFes: 920, prixAgadir: 1020, fournisseurs: ["LafargeHolcim", "Ciments du Maroc"], norme: "NM 10.1.008" },
        { id: "beton-bpe-b30", name: "Béton BPE B30", unit: "m³", prixCasa: 1250, prixRabat: 1300, prixMarrakech: 1080, prixTanger: 1220, prixFes: 1050, prixAgadir: 1150, fournisseurs: ["LafargeHolcim"], norme: "NM 10.1.008" },
        { id: "acier-ha-fe400", name: "Acier HA FE400 (barres)", unit: "tonne", prixCasa: 10500, prixRabat: 10800, prixMarrakech: 10200, prixTanger: 10600, prixFes: 10100, prixAgadir: 10400, fournisseurs: ["Sonasid", "Maghreb Steel"], norme: "NM 01.4.093" },
        { id: "acier-ha-fe500", name: "Acier HA FE500 (barres)", unit: "tonne", prixCasa: 11200, prixRabat: 11500, prixMarrakech: 10900, prixTanger: 11300, prixFes: 10800, prixAgadir: 11100, fournisseurs: ["Sonasid"], norme: "NM 01.4.093" },
        { id: "treillis-soude-150", name: "Treillis Soudé PAF 150", unit: "m²", prixCasa: 35, prixRabat: 37, prixMarrakech: 33, prixTanger: 36, prixFes: 32, prixAgadir: 34, fournisseurs: ["Sonasid", "Maghreb Steel"], norme: "" },
        { id: "parpaing-20", name: "Parpaing Creux 20x20x50", unit: "unité", prixCasa: 6.5, prixRabat: 6.8, prixMarrakech: 5.8, prixTanger: 6.3, prixFes: 5.5, prixAgadir: 6, fournisseurs: ["Production locale"], norme: "NM 10.1.009" },
        { id: "parpaing-15", name: "Parpaing Creux 15x20x50", unit: "unité", prixCasa: 5, prixRabat: 5.2, prixMarrakech: 4.5, prixTanger: 4.8, prixFes: 4.3, prixAgadir: 4.6, fournisseurs: ["Production locale"], norme: "NM 10.1.009" },
        { id: "parpaing-10", name: "Parpaing Creux 10x20x50", unit: "unité", prixCasa: 3.8, prixRabat: 4, prixMarrakech: 3.5, prixTanger: 3.7, prixFes: 3.3, prixAgadir: 3.6, fournisseurs: ["Production locale"], norme: "NM 10.1.009" },
        { id: "brique-rouge-6t", name: "Brique Rouge 6 Trous", unit: "unité", prixCasa: 2.5, prixRabat: 2.6, prixMarrakech: 2.2, prixTanger: 2.4, prixFes: 2, prixAgadir: 2.3, fournisseurs: ["Briqueteries locales"], norme: "" },
        { id: "hourdis-16", name: "Hourdis Béton 16+4 cm", unit: "unité", prixCasa: 28, prixRabat: 29, prixMarrakech: 26, prixTanger: 27.5, prixFes: 25, prixAgadir: 26.5, fournisseurs: ["LafargeHolcim"], norme: "" },
        { id: "hourdis-20", name: "Hourdis Béton 20+4 cm", unit: "unité", prixCasa: 32, prixRabat: 33, prixMarrakech: 30, prixTanger: 31.5, prixFes: 29, prixAgadir: 30.5, fournisseurs: ["LafargeHolcim"], norme: "" },
        { id: "sable-concasse", name: "Sable Concassé 0/4", unit: "m³", prixCasa: 180, prixRabat: 190, prixMarrakech: 160, prixTanger: 175, prixFes: 150, prixAgadir: 170, fournisseurs: ["Carrières locales"], norme: "" },
        { id: "gravier-concasse", name: "Gravier Concassé 8/16", unit: "m³", prixCasa: 200, prixRabat: 210, prixMarrakech: 180, prixTanger: 195, prixFes: 170, prixAgadir: 190, fournisseurs: ["Carrières locales"], norme: "" }
      ]
    },

    isolation: {
      name: "Isolation Thermique & Acoustique",
      icon: "🌡️",
      items: [
        { id: "polystyrene-exp-4cm", name: "Polystyrène Expansé 4cm", unit: "m²", prixCasa: 35, prixRabat: 37, prixMarrakech: 32, prixTanger: 35, prixFes: 30, prixAgadir: 33, fournisseurs: ["Knauf", "Isover"], norme: "RTCM" },
        { id: "polystyrene-exp-6cm", name: "Polystyrène Expansé 6cm", unit: "m²", prixCasa: 48, prixRabat: 50, prixMarrakech: 44, prixTanger: 47, prixFes: 42, prixAgadir: 45, fournisseurs: ["Knauf"], norme: "RTCM" },
        { id: "polystyrene-ext-8cm", name: "Polystyrène Extrudé 8cm", unit: "m²", prixCasa: 85, prixRabat: 88, prixMarrakech: 78, prixTanger: 83, prixFes: 75, prixAgadir: 80, fournisseurs: ["Knauf"], norme: "RTCM" },
        { id: "laine-roche-8cm", name: "Laine de Roche 80mm", unit: "m²", prixCasa: 65, prixRabat: 68, prixMarrakech: 60, prixTanger: 64, prixFes: 58, prixAgadir: 62, fournisseurs: ["Isover", "Rockwool"], norme: "RTCM" },
        { id: "laine-roche-10cm", name: "Laine de Roche 100mm", unit: "m²", prixCasa: 78, prixRabat: 81, prixMarrakech: 72, prixTanger: 76, prixFes: 70, prixAgadir: 74, fournisseurs: ["Isover"], norme: "RTCM" },
        { id: "liege-naturel-4cm", name: "Liège Naturel Expansé 40mm", unit: "m²", prixCasa: 120, prixRabat: 125, prixMarrakech: 110, prixTanger: 118, prixFes: 108, prixAgadir: 115, fournisseurs: ["Importation"], norme: "Écologique" },
        { id: "liege-projete", name: "Liège Projeté Isolant", unit: "m²", prixCasa: 180, prixRabat: 185, prixMarrakech: 165, prixTanger: 175, prixFes: 160, prixAgadir: 170, fournisseurs: ["Applicateurs spécialisés"], norme: "RTCM" }
      ]
    },

    etancheite: {
      name: "Étanchéité & Protection",
      icon: "💧",
      items: [
        { id: "membrane-bitume-4kg", name: "Membrane Bitume 4kg/m²", unit: "m²", prixCasa: 45, prixRabat: 47, prixMarrakech: 42, prixTanger: 44, prixFes: 40, prixAgadir: 43, fournisseurs: ["Soprema", "SMAC"], norme: "NM 10.1.050" },
        { id: "membrane-bitume-5kg", name: "Membrane Bitume 5kg/m² Armée", unit: "m²", prixCasa: 55, prixRabat: 58, prixMarrakech: 52, prixTanger: 54, prixFes: 50, prixAgadir: 53, fournisseurs: ["Soprema"], norme: "NM 10.1.050" },
        { id: "pvc-arme-15mm", name: "Membrane PVC Armée 1,5mm", unit: "m²", prixCasa: 85, prixRabat: 88, prixMarrakech: 80, prixTanger: 83, prixFes: 78, prixAgadir: 82, fournisseurs: ["Soprema"], norme: "" },
        { id: "resine-polyurethane", name: "Résine Polyuréthane Liquide", unit: "kg", prixCasa: 95, prixRabat: 98, prixMarrakech: 90, prixTanger: 93, prixFes: 88, prixAgadir: 92, fournisseurs: ["Sika", "Weber"], norme: "" },
        { id: "primaire-accrochage", name: "Primaire d'Accrochage Bitume", unit: "kg", prixCasa: 18, prixRabat: 19, prixMarrakech: 17, prixTanger: 18, prixFes: 16, prixAgadir: 17.5, fournisseurs: ["Soprema", "SMAC"], norme: "" }
      ]
    },

    menuiseries: {
      name: "Menuiseries & Fermetures",
      icon: "🚪",
      items: [
        { id: "fenetre-alu-120x140", name: "Fenêtre Alu 120x140 cm", unit: "unité", prixCasa: 1800, prixRabat: 1900, prixMarrakech: 1650, prixTanger: 1750, prixFes: 1600, prixAgadir: 1700, fournisseurs: ["Afric Menuiserie", "Atlas Alu"], norme: "" },
        { id: "fenetre-pvc-120x140", name: "Fenêtre PVC 120x140 cm", unit: "unité", prixCasa: 1500, prixRabat: 1600, prixMarrakech: 1400, prixTanger: 1480, prixFes: 1350, prixAgadir: 1450, fournisseurs: ["Fenêtres du Maroc"], norme: "" },
        { id: "porte-entree-alu", name: "Porte d'Entrée Alu Sécurisée", unit: "unité", prixCasa: 4500, prixRabat: 4800, prixMarrakech: 4200, prixTanger: 4400, prixFes: 4000, prixAgadir: 4300, fournisseurs: ["Afric Menuiserie"], norme: "" },
        { id: "porte-interieure-bois", name: "Porte Intérieure Isoplane Peinte", unit: "unité", prixCasa: 850, prixRabat: 900, prixMarrakech: 780, prixTanger: 820, prixFes: 750, prixAgadir: 800, fournisseurs: ["Menuisiers locaux"], norme: "" },
        { id: "volet-roulant-alu", name: "Volet Roulant Alu Motorisé 120x140", unit: "unité", prixCasa: 2200, prixRabat: 2300, prixMarrakech: 2000, prixTanger: 2150, prixFes: 1950, prixAgadir: 2100, fournisseurs: ["Bubendorff"], norme: "" },
        { id: "baie-coulissante-alu-3m", name: "Baie Coulissante Alu 3m", unit: "unité", prixCasa: 6500, prixRabat: 6800, prixMarrakech: 6000, prixTanger: 6350, prixFes: 5800, prixAgadir: 6200, fournisseurs: ["Atlas Alu"], norme: "" }
      ]
    },

    revetements_sols: {
      name: "Revêtements de Sols",
      icon: "🟫",
      items: [
        { id: "carrelage-30x30-standard", name: "Carrelage Céramique 30x30 Standard", unit: "m²", prixCasa: 80, prixRabat: 85, prixMarrakech: 75, prixTanger: 80, prixFes: 72, prixAgadir: 78, fournisseurs: ["Céramique Maghrébine", "Promindus"], norme: "" },
        { id: "carrelage-60x60-poli", name: "Carrelage 60x60 Poli Rectifié", unit: "m²", prixCasa: 150, prixRabat: 160, prixMarrakech: 140, prixTanger: 148, prixFes: 135, prixAgadir: 145, fournisseurs: ["Promindus"], norme: "" },
        { id: "carrelage-60x120-grand-format", name: "Carrelage Grand Format 60x120", unit: "m²", prixCasa: 220, prixRabat: 230, prixMarrakech: 200, prixTanger: 215, prixFes: 195, prixAgadir: 210, fournisseurs: ["Importation Italie"], norme: "" },
        { id: "zellige-10x10-fes", name: "Zellige Artisanal Fès 10x10", unit: "m²", prixCasa: 280, prixRabat: 290, prixMarrakech: 260, prixTanger: 275, prixFes: 240, prixAgadir: 270, fournisseurs: ["Artisans Fès"], norme: "Traditionnel" },
        { id: "bejmat-traditionnel", name: "Bejmat Traditionnel 15x5", unit: "m²", prixCasa: 180, prixRabat: 190, prixMarrakech: 165, prixTanger: 175, prixFes: 150, prixAgadir: 170, fournisseurs: ["Artisans locaux"], norme: "" },
        { id: "pierre-marbre-beige", name: "Marbre Beige Egypte 60x60", unit: "m²", prixCasa: 350, prixRabat: 370, prixMarrakech: 330, prixTanger: 345, prixFes: 320, prixAgadir: 340, fournisseurs: ["Marbreries Casa"], norme: "" },
        { id: "pierre-travertin", name: "Travertin Opus Romain", unit: "m²", prixCasa: 280, prixRabat: 295, prixMarrakech: 260, prixTanger: 275, prixFes: 250, prixAgadir: 270, fournisseurs: ["Marbreries"], norme: "" },
        { id: "parquet-chene-14mm", name: "Parquet Chêne Massif 14mm", unit: "m²", prixCasa: 450, prixRabat: 480, prixMarrakech: 420, prixTanger: 445, prixFes: 410, prixAgadir: 440, fournisseurs: ["Importation Europe"], norme: "" },
        { id: "parquet-flottant-8mm", name: "Parquet Flottant Stratifié 8mm", unit: "m²", prixCasa: 180, prixRabat: 190, prixMarrakech: 165, prixTanger: 175, prixFes: 160, prixAgadir: 170, fournisseurs: ["Quick Step"], norme: "" },
        { id: "tadelakt-marrakech", name: "Tadelakt Traditionnel Marrakech", unit: "m²", prixCasa: 380, prixRabat: 400, prixMarrakech: 320, prixTanger: 365, prixFes: 350, prixAgadir: 360, fournisseurs: ["Artisans Marrakech"], norme: "Traditionnel" }
      ]
    },

    revetements_murs: {
      name: "Revêtements Muraux",
      icon: "🎨",
      items: [
        { id: "faience-20x40-blanc", name: "Faïence 20x40 Blanc Brillant", unit: "m²", prixCasa: 100, prixRabat: 105, prixMarrakech: 92, prixTanger: 98, prixFes: 90, prixAgadir: 95, fournisseurs: ["Céramique Maghrébine"], norme: "" },
        { id: "faience-30x60-rectifie", name: "Faïence 30x60 Rectifiée Mate", unit: "m²", prixCasa: 145, prixRabat: 150, prixMarrakech: 135, prixTanger: 142, prixFes: 130, prixAgadir: 140, fournisseurs: ["Promindus"], norme: "" },
        { id: "peinture-facade-acrylique", name: "Peinture Façade Acrylique", unit: "m²", prixCasa: 55, prixRabat: 58, prixMarrakech: 50, prixTanger: 54, prixFes: 48, prixAgadir: 52, fournisseurs: ["Astral", "Decofer"], norme: "" },
        { id: "peinture-int-mate", name: "Peinture Intérieure Mate Lessivable", unit: "m²", prixCasa: 40, prixRabat: 42, prixMarrakech: 37, prixTanger: 39, prixFes: 36, prixAgadir: 38, fournisseurs: ["Astral"], norme: "" },
        { id: "enduit-monocouche", name: "Enduit Monocouche Façade", unit: "m²", prixCasa: 120, prixRabat: 125, prixMarrakech: 110, prixTanger: 118, prixFes: 105, prixAgadir: 115, fournisseurs: ["Weber"], norme: "" },
        { id: "parement-pierre-naturelle", name: "Parement Pierre Naturelle", unit: "m²", prixCasa: 220, prixRabat: 230, prixMarrakech: 200, prixTanger: 215, prixFes: 195, prixAgadir: 210, fournisseurs: ["Marbreries"], norme: "" }
      ]
    },

    plomberie: {
      name: "Plomberie & Sanitaires",
      icon: "🚿",
      items: [
        { id: "tube-pvc-evac-110", name: "Tube PVC Évacuation Ø110mm", unit: "ml", prixCasa: 35, prixRabat: 37, prixMarrakech: 32, prixTanger: 34, prixFes: 31, prixAgadir: 33, fournisseurs: ["Wavin", "Nicoll"], norme: "" },
        { id: "tube-pvc-evac-50", name: "Tube PVC Évacuation Ø50mm", unit: "ml", prixCasa: 18, prixRabat: 19, prixMarrakech: 17, prixTanger: 18, prixFes: 16, prixAgadir: 17.5, fournisseurs: ["Wavin"], norme: "" },
        { id: "tube-per-16", name: "Tube PER Multicouche Ø16mm", unit: "ml", prixCasa: 22, prixRabat: 23, prixMarrakech: 20, prixTanger: 21.5, prixFes: 19.5, prixAgadir: 21, fournisseurs: ["Nicoll"], norme: "" },
        { id: "tube-cuivre-14", name: "Tube Cuivre Écroui Ø14mm", unit: "ml", prixCasa: 45, prixRabat: 47, prixMarrakech: 42, prixTanger: 44, prixFes: 41, prixAgadir: 43, fournisseurs: ["Distribution spécialisée"], norme: "" },
        { id: "lavabo-sur-colonne", name: "Lavabo sur Colonne Céramique", unit: "unité", prixCasa: 550, prixRabat: 580, prixMarrakech: 520, prixTanger: 545, prixFes: 510, prixAgadir: 535, fournisseurs: ["Ideal Standard", "Roca"], norme: "" },
        { id: "wc-suspendu-grohe", name: "WC Suspendu avec Bâti Grohe", unit: "ensemble", prixCasa: 3500, prixRabat: 3700, prixMarrakech: 3300, prixTanger: 3450, prixFes: 3200, prixAgadir: 3400, fournisseurs: ["Grohe"], norme: "" },
        { id: "baignoire-acrylique-170", name: "Baignoire Acrylique 170cm", unit: "unité", prixCasa: 2200, prixRabat: 2350, prixMarrakech: 2050, prixTanger: 2150, prixFes: 2000, prixAgadir: 2100, fournisseurs: ["Roca", "Jacob Delafon"], norme: "" },
        { id: "douche-italienne-kit", name: "Kit Douche Italienne 90x90", unit: "ensemble", prixCasa: 2800, prixRabat: 2950, prixMarrakech: 2600, prixTanger: 2750, prixFes: 2550, prixAgadir: 2700, fournisseurs: ["Grohe"], norme: "" },
        { id: "robinetterie-lavabo", name: "Robinetterie Lavabo Mitigeur", unit: "unité", prixCasa: 380, prixRabat: 400, prixMarrakech: 350, prixTanger: 375, prixFes: 340, prixAgadir: 365, fournisseurs: ["Grohe", "Hansgrohe"], norme: "" },
        { id: "chauffe-eau-200l", name: "Chauffe-Eau Électrique 200L", unit: "unité", prixCasa: 2800, prixRabat: 2950, prixMarrakech: 2600, prixTanger: 2750, prixFes: 2550, prixAgadir: 2700, fournisseurs: ["Ariston", "Thermor"], norme: "" }
      ]
    },

    electricite: {
      name: "Électricité & Éclairage",
      icon: "💡",
      items: [
        { id: "cable-3g15", name: "Câble 3G1,5mm² (Prise)", unit: "ml", prixCasa: 12, prixRabat: 12.5, prixMarrakech: 11, prixTanger: 11.8, prixFes: 10.5, prixAgadir: 11.5, fournisseurs: ["Nexans", "Maroc Câbles"], norme: "NM C 33-209" },
        { id: "cable-3g25", name: "Câble 3G2,5mm² (Chauffage)", unit: "ml", prixCasa: 18, prixRabat: 19, prixMarrakech: 17, prixTanger: 17.8, prixFes: 16.5, prixAgadir: 17.5, fournisseurs: ["Nexans"], norme: "NM C 33-209" },
        { id: "cable-3g6", name: "Câble 3G6mm² (Chauffe-eau)", unit: "ml", prixCasa: 35, prixRabat: 37, prixMarrakech: 32, prixTanger: 34, prixFes: 31, prixAgadir: 33, fournisseurs: ["Nexans"], norme: "NM C 33-209" },
        { id: "tableau-electrique-3r", name: "Tableau Électrique 3 Rangées", unit: "unité", prixCasa: 850, prixRabat: 900, prixMarrakech: 780, prixTanger: 820, prixFes: 760, prixAgadir: 800, fournisseurs: ["Legrand", "Schneider"], norme: "NM C 15-100" },
        { id: "disjoncteur-16a", name: "Disjoncteur 16A Ph+N", unit: "unité", prixCasa: 45, prixRabat: 47, prixMarrakech: 42, prixTanger: 44, prixFes: 41, prixAgadir: 43, fournisseurs: ["Legrand"], norme: "" },
        { id: "differentiel-40a-30ma", name: "Interrupteur Différentiel 40A 30mA", unit: "unité", prixCasa: 280, prixRabat: 295, prixMarrakech: 260, prixTanger: 275, prixFes: 255, prixAgadir: 270, fournisseurs: ["Schneider"], norme: "" },
        { id: "spot-led-encastre", name: "Spot LED Encastré 10W Blanc", unit: "unité", prixCasa: 55, prixRabat: 58, prixMarrakech: 52, prixTanger: 54, prixFes: 50, prixAgadir: 53, fournisseurs: ["Philips", "Osram"], norme: "" },
        { id: "plafonnier-led-60cm", name: "Plafonnier LED 60cm 40W", unit: "unité", prixCasa: 180, prixRabat: 190, prixMarrakech: 165, prixTanger: 175, prixFes: 160, prixAgadir: 170, fournisseurs: ["Philips"], norme: "" }
      ]
    },

    toiture: {
      name: "Toiture & Couverture",
      icon: "🏠",
      items: [
        { id: "tuile-mecanique-terracotta", name: "Tuile Mécanique Terracotta", unit: "m²", prixCasa: 85, prixRabat: 88, prixMarrakech: 80, prixTanger: 83, prixFes: 78, prixAgadir: 82, fournisseurs: ["Imerys"], norme: "" },
        { id: "tuile-plate-rouge", name: "Tuile Plate Rouge 16x27", unit: "m²", prixCasa: 120, prixRabat: 125, prixMarrakech: 110, prixTanger: 118, prixFes: 105, prixAgadir: 115, fournisseurs: ["Production locale"], norme: "" },
        { id: "bac-acier-double-peau", name: "Bac Acier Double Peau Isolé", unit: "m²", prixCasa: 280, prixRabat: 295, prixMarrakech: 260, prixTanger: 275, prixFes: 250, prixAgadir: 270, fournisseurs: ["ArcelorMittal"], norme: "" },
        { id: "charpente-bois-sapin", name: "Charpente Bois Sapin (au m²)", unit: "m²", prixCasa: 350, prixRabat: 370, prixMarrakech: 320, prixTanger: 345, prixFes: 310, prixAgadir: 335, fournisseurs: ["Menuiseries"], norme: "" },
        { id: "gouttiere-zinc-25", name: "Gouttière Zinc Demi-Ronde Ø25", unit: "ml", prixCasa: 95, prixRabat: 100, prixMarrakech: 88, prixTanger: 93, prixFes: 85, prixAgadir: 90, fournisseurs: ["Zingueries"], norme: "" }
      ]
    },

    vrd: {
      name: "VRD & Aménagements Extérieurs",
      icon: "🚧",
      items: [
        { id: "bordure-t2-100x20", name: "Bordure T2 Béton 100x20", unit: "ml", prixCasa: 42, prixRabat: 44, prixMarrakech: 38, prixTanger: 41, prixFes: 37, prixAgadir: 40, fournisseurs: ["Préfa locales"], norme: "" },
        { id: "pave-autobloquant-gris", name: "Pavé Autobloquant Gris 20x10x6", unit: "m²", prixCasa: 65, prixRabat: 68, prixMarrakech: 60, prixTanger: 64, prixFes: 58, prixAgadir: 62, fournisseurs: ["Préfa locales"], norme: "" },
        { id: "grille-avaloir-fonte", name: "Grille d'Avaloir Fonte 40x40", unit: "unité", prixCasa: 280, prixRabat: 295, prixMarrakech: 260, prixTanger: 275, prixFes: 250, prixAgadir: 270, fournisseurs: ["Fonderies"], norme: "" },
        { id: "regard-pvc-40x40", name: "Regard de Visite PVC 40x40", unit: "unité", prixCasa: 180, prixRabat: 190, prixMarrakech: 165, prixTanger: 175, prixFes: 160, prixAgadir: 170, fournisseurs: ["Wavin"], norme: "" },
        { id: "gazon-synthetique-30mm", name: "Gazon Synthétique 30mm", unit: "m²", prixCasa: 180, prixRabat: 190, prixMarrakech: 165, prixTanger: 175, prixFes: 160, prixAgadir: 170, fournisseurs: ["Importation"], norme: "" },
        { id: "arrosage-auto-turbine", name: "Turbine Arrosage Automatique", unit: "unité", prixCasa: 220, prixRabat: 230, prixMarrakech: 200, prixTanger: 215, prixFes: 195, prixAgadir: 210, fournisseurs: ["Hunter", "Rain Bird"], norme: "" }
      ]
    }
  },

  regions: {
    casa: "Casablanca",
    rabat: "Rabat",
    marrakech: "Marrakech",
    tanger: "Tanger",
    fes: "Fès",
    agadir: "Agadir"
  }
};

// Export pour utilisation dans la page
if (typeof module !== 'undefined' && module.exports) {
  module.exports = materiauxDatabase;
}
