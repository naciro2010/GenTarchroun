// Données régionales 2025 actualisées selon la roadmap BuilderMaroc
const regionProfiles = {
  casablanca: {
    label: "Casablanca-Settat",
    coefficient: 1,
    structureRange: [4500, 5500], // Coût/m² actualisé 2025
    turnkeyRange: [6500, 8500],
    duration: "14-16 mois",
    characteristics: "Côtière humide, main-d'œuvre chère, accès ports",
    plan: [
      "Faire réaliser une étude de sol G2 AVP pour anticiper la portance des terrains littoraux.",
      "Déposer le dossier d'autorisation auprès de l'Agence urbaine et de la commune (délai moyen 30 jours avec Rokhas).",
      "Lancer une consultation d'entreprises locales pour sécuriser les lots gros œuvre et béton prêt à l'emploi.",
      "Vérifier la disponibilité des matériaux (LafargeHolcim, Ciments du Maroc) et anticiper les commandes.",
    ],
    insight:
      "Marché très actif en 2025 : prévoir une marge de 12% sur les prix matériaux et anticiper la disponibilité des équipes qualifiées (délais d'attente de 2-3 mois).",
  },
  rabat: {
    label: "Rabat-Salé-Kénitra",
    coefficient: 1.07,
    structureRange: [4800, 5800],
    turnkeyRange: [6800, 8800],
    duration: "14-16 mois",
    characteristics: "Capitale, admin rapide, standing élevé",
    plan: [
      "Coordonner l'étude de stabilité parasismique RPS 2011 (zone 2/3) avec l'ingénieur structure agréé.",
      "Consulter les services de la Wilaya et de la commune pour valider le plan d'implantation (plateforme Rokhas).",
      "Prévoir un contrôle technique externe ANCFCC pour les ouvrages porteurs (obligatoire secteur public).",
      "Anticiper les exigences RTCM (Règlement Thermique Construction Maroc) dès la conception.",
    ],
    insight:
      "Région administrative : les exigences documentaires sont élevées mais les délais réduits grâce à la digitalisation. Main-d'œuvre qualifiée accessible mais coûts 7% supérieurs à Casablanca.",
  },
  marrakech: {
    label: "Marrakech-Safi",
    coefficient: 0.82,
    structureRange: [3500, 4500],
    turnkeyRange: [5200, 7000],
    duration: "12-14 mois",
    characteristics: "Aride, isolation thermique critique, tourisme",
    plan: [
      "Vérifier la capacité de pompage et de cure du béton face aux amplitudes thermiques (+40°C été, -5°C nuit hiver).",
      "Prévoir isolation renforcée : dalle (R≥2.5), toiture (R≥4), murs (R≥2) selon RTCM.",
      "Mobiliser artisans locaux pour finitions traditionnelles (tadelakt, zellige, bejmat) avec certification qualité.",
      "Anticiper la logistique matériaux en haute saison touristique (avril-octobre) : délais allongés de 30%.",
    ],
    insight:
      "Coûts structurels 18% inférieurs à Casablanca mais attention à la logistique en haute saison. Opportunités financement Fogarim pour primo-accédants. Matériaux terre cuite et pierre locale disponibles et compétitifs.",
  },
  tanger: {
    label: "Tanger-Tétouan-Al Hoceïma",
    coefficient: 0.93,
    structureRange: [4200, 5200],
    turnkeyRange: [6000, 7800],
    duration: "13-15 mois",
    characteristics: "Méditerranée, port, croissance rapide",
    plan: [
      "Étude parasismique approfondie (zone 3 RPS 2011) et résistance au vent côtier (charges > 120 kg/m²).",
      "Protection corrosion saline : aciers inox HA en façade, traitement bétons (additifs anti-chlorures).",
      "Déposer autorisations Agence Urbaine Tanger (délais 30-45 jours) avec volet impact environnemental côtier.",
      "Coordonner raccordements VRD : RADEEL (Tétouan), Amendis (Tanger) - anticiper 2-3 mois délais.",
    ],
    insight:
      "Contexte portuaire dynamique : disponibilité excellent béton industriel (Ciments du Maroc Tétouan) mais vigilance sur délais import composants spéciaux (8-12 semaines). Croissance urbaine forte : anticiper évolutions PLU.",
  },
  fes: {
    label: "Fès-Meknès",
    coefficient: 0.76,
    structureRange: [3200, 4200],
    turnkeyRange: [4800, 6500],
    duration: "13-15 mois",
    characteristics: "Plateaux, inertie thermique, artisanat",
    plan: [
      "Exploiter l'inertie thermique du climat continental : murs épais (30-40cm), matériaux lourds.",
      "Valoriser le savoir-faire artisanal local : zellige Fès (renommée mondiale), bois cèdre Moyen Atlas.",
      "Permis de construire : délais standards 30 jours, respecter Plan d'Aménagement zones classées UNESCO.",
      "Fournisseurs locaux disponibles : Ciments de l'Oriental, Sonasid Fès pour aciers.",
    ],
    insight:
      "Coûts les plus bas du Maroc (24% inf. Casa) avec qualité maintenue. Abondance main-d'œuvre qualifiée (écoles artisanat). Climat exigeant : isolation obligatoire (-2°C hiver, +42°C été) mais amortie par inertie.",
  },
  agadir: {
    label: "Agadir-Souss-Massa",
    coefficient: 0.87,
    structureRange: [3800, 4800],
    turnkeyRange: [5600, 7200],
    duration: "12-14 mois",
    characteristics: "Côtière sud, tourisme résidentiel, normes sismiques",
    plan: [
      "Étude sismique obligatoire poussée (zone 3 RPS 2011, référence séisme 1960) avec bureau contrôle agréé.",
      "Anticipate normes parasismiques renforcées : chaînages, ferraillage spécifique, joints de dilatation.",
      "Valoriser climat doux : besoins climatisation réduits, isolation standard suffisante (économie 15%).",
      "Marché immobilier touristique : consulter promoteurs locaux pour standards de finition attendus.",
    ],
    insight:
      "Marché résidentiel-touristique dynamique avec standards élevés. Coûts modérés (-13% vs Casa) compensés par exigences sismiques strictes. Disponibilité matériaux excellente (hub logistique port Agadir).",
  },
};

const typologyRates = {
  villa: { base: 3600, label: "Villa contemporaine" },
  riad: { base: 3100, label: "Riad traditionnel" },
  "maison-eco": { base: 2650, label: "Maison économique" },
  immeuble: { base: 3300, label: "Immeuble locatif" },
};

const levelCoefficients = {
  rdc: 1,
  "r+1": 1.12,
  "r+2": 1.2,
  "r+3": 1.28,
};

const foundationCoefficients = {
  semelles: 1,
  radier: 1.08,
  pieux: 1.18,
};

const structureCoefficients = {
  portique: 1,
  voiles: 1.05,
  mixte: 1.12,
};

const slabCoefficients = {
  hourdis: 1,
  "dalle-pleine": 1.06,
  poutrelles: 0.97,
};

const roofCoefficients = {
  terrasse: 1,
  inclinee: 1.05,
  mixte: 1.08,
};

const breakdownPercentages = {
  Fondations: 0.3,
  "Élévations & planchers": 0.45,
  "Toiture & protections": 0.25,
};

const currencyFormatter = new Intl.NumberFormat("fr-MA", {
  style: "currency",
  currency: "MAD",
  maximumFractionDigits: 0,
});

function formatCurrency(value) {
  return currencyFormatter.format(Math.round(value));
}

function updateSimulation(event) {
  if (event) {
    event.preventDefault();
  }

  const form = document.querySelector("#simulation-form");
  if (!form) return;

  const surface = Number.parseFloat(form.surface.value);
  const totalOutput = document.getElementById("total-estimate");
  const rangeOutput = document.getElementById("range-estimate");
  const perM2Output = document.getElementById("per-m2");
  const breakdownContainer = document.getElementById("breakdown");
  const summaryOutput = document.getElementById("scenario-resume");
  const extrasList = document.getElementById("extra-options");
  const regionalReference = document.getElementById("regional-reference");
  const regionalInsight = document.getElementById("regional-insight");
  const actionPlanList = document.getElementById("action-plan");

  if (!surface || surface < 50) {
    totalOutput.textContent = "Renseignez la surface pour démarrer.";
    rangeOutput.textContent = "";
    perM2Output.textContent = "La surface minimale recommandée est de 50 m².";
    breakdownContainer.innerHTML = "";
    summaryOutput.textContent = "Complétez le formulaire pour afficher un résumé personnalisé.";
    extrasList.innerHTML = "";
    if (regionalReference) {
      regionalReference.textContent =
        "Sélectionnez une région et renseignez la surface pour afficher des repères budgétaires et un plan d'action.";
    }
    if (regionalInsight) {
      regionalInsight.textContent = "";
    }
    if (actionPlanList) {
      actionPlanList.innerHTML = "";
    }
    return;
  }

  const regionKey = form.region.value;
  const regionProfile = regionProfiles[regionKey];
  const levelsKey = form["levels"].value;
  const typologyKey = form.typologie.value;
  const fondationsKey = form.fondations.value;
  const structureKey = form.structure.value;
  const slabKey = form.dallage.value;
  const roofKey = form.toiture.value;

  const typology = typologyRates[typologyKey];

  const structureBase = surface * typology.base;
  const adjustments =
    (regionProfile?.coefficient ?? 1) *
    levelCoefficients[levelsKey] *
    foundationCoefficients[fondationsKey] *
    structureCoefficients[structureKey] *
    slabCoefficients[slabKey] *
    roofCoefficients[roofKey];

  const structureTotal = structureBase * adjustments;

  let totalEstimate = structureTotal;
  const extraItems = [];

  if (form.contingence.checked) {
    const contingency = structureTotal * 0.05;
    totalEstimate += contingency;
    extraItems.push(`${formatCurrency(contingency)} de marge imprévus (5 %).`);
  }

  if (form.honoraires.checked) {
    const fees = structureTotal * 0.07;
    totalEstimate += fees;
    extraItems.push(`${formatCurrency(fees)} d'honoraires de maîtrise d'œuvre (7 %).`);
  }

  if (form.vrd.checked) {
    const vrdAllowance = surface * 400;
    totalEstimate += vrdAllowance;
    extraItems.push(`${formatCurrency(vrdAllowance)} pour VRD et raccordements (400 MAD/m²).`);
  }

  const costPerSqm = totalEstimate / surface;
  const lowRange = totalEstimate * 0.93;
  const highRange = totalEstimate * 1.07;

  totalOutput.textContent = formatCurrency(totalEstimate);
  rangeOutput.textContent = `Fourchette : ${formatCurrency(lowRange)} à ${formatCurrency(highRange)} (±7 %).`;
  perM2Output.textContent = `Coût total estimé : ${formatCurrency(costPerSqm)} / m² pour ${surface} m².`;

  breakdownContainer.innerHTML = "";
  Object.entries(breakdownPercentages).forEach(([label, ratio]) => {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = formatCurrency(structureTotal * ratio);
    breakdownContainer.append(dt, dd);
  });

  const regionLabel = regionProfile?.label ?? form.region.options[form.region.selectedIndex].text;
  const levelLabel = form.levels.options[form.levels.selectedIndex].text;
  const fondationsLabel = form.fondations.options[form.fondations.selectedIndex].text;
  const structureLabel = form.structure.options[form.structure.selectedIndex].text;
  const slabLabel = form.dallage.options[form.dallage.selectedIndex].text;
  const roofLabel = form.toiture.options[form.toiture.selectedIndex].text;

  summaryOutput.textContent = `${typology.label} ${levelLabel}, ${surface} m² à ${regionLabel}. Fondations ${fondationsLabel.toLowerCase()}, structure ${structureLabel.toLowerCase()}, plancher ${slabLabel.toLowerCase()}, toiture ${roofLabel.toLowerCase()}.`;

  extrasList.innerHTML = "";
  if (extraItems.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Aucun ajustement additionnel n'a été appliqué.";
    extrasList.append(li);
  } else {
    extraItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      extrasList.append(li);
    });
  }

  if (regionProfile && regionalReference) {
    const [structureMin, structureMax] = regionProfile.structureRange;
    const [turnkeyMin, turnkeyMax] = regionProfile.turnkeyRange;
    regionalReference.textContent =
      `Repère ${regionProfile.label} : ${formatCurrency(structureMin)} à ${formatCurrency(
        structureMax
      )} / m² pour le gros œuvre, ${formatCurrency(turnkeyMin)} à ${formatCurrency(turnkeyMax)} / m² en clé en main.`;
  }

  if (regionProfile && regionalInsight) {
    regionalInsight.textContent = regionProfile.insight;
  }

  if (regionProfile && actionPlanList) {
    actionPlanList.innerHTML = "";
    regionProfile.plan.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      actionPlanList.append(li);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#simulation-form");
  if (!form) return;

  form.addEventListener("submit", updateSimulation);
  form.addEventListener("input", updateSimulation);
  updateSimulation();
});
