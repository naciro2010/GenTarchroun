const regionProfiles = {
  casablanca: {
    label: "Casablanca-Settat",
    coefficient: 1,
    structureRange: [3400, 3900],
    turnkeyRange: [5400, 7800],
    plan: [
      "Faire réaliser une étude de sol G2 AVP pour anticiper la portance des terrains littoraux.",
      "Déposer le dossier d'autorisation auprès de l'Agence urbaine et de la commune (délai moyen 4 à 6 semaines).",
      "Lancer une consultation d'entreprises locales pour sécuriser les lots gros œuvre et béton prêt à l'emploi.",
    ],
    insight:
      "Marché très actif : prévoir une marge sur les prix matériaux et la disponibilité des équipes qualifiées.",
  },
  rabat: {
    label: "Rabat-Salé-Kénitra",
    coefficient: 1.05,
    structureRange: [3500, 4100],
    turnkeyRange: [5600, 7900],
    plan: [
      "Coordonner l'étude de stabilité parasismique (zone 2/3) avec l'ingénieur structure.",
      "Consulter les services de la Wilaya et de la commune pour valider le plan d'implantation.",
      "Prévoir un contrôle technique externe pour les ouvrages porteurs (préféré dans le secteur public).",
    ],
    insight:
      "Région administrative : les exigences documentaires sont élevées mais la main-d'œuvre qualifiée est accessible.",
  },
  marrakech: {
    label: "Marrakech-Safi",
    coefficient: 0.95,
    structureRange: [3000, 3600],
    turnkeyRange: [4800, 7200],
    plan: [
      "Vérifier la capacité de pompage et de cure du béton face aux fortes amplitudes thermiques.",
      "Prévoir une isolation de dalle et de toiture adaptée au climat semi-désertique.",
      "Mobiliser des artisans locaux pour les finitions traditionnelles (tadelakt, zellige) si nécessaires.",
    ],
    insight:
      "Les coûts structurels sont légèrement inférieurs mais la logistique matériaux doit être anticipée en saison haute.",
  },
  tanger: {
    label: "Tanger-Tétouan-Al Hoceïma",
    coefficient: 1.03,
    structureRange: [3300, 3850],
    turnkeyRange: [5200, 7600],
    plan: [
      "Faire contrôler la résistance au vent et à la corrosion saline pour les aciers en façade.",
      "Déposer les autorisations auprès des agences urbaines littorales (Tanger Med, Tétouan).",
      "Coordonner les raccordements VRD avec les opérateurs publics (RADEEL, Amendis).",
    ],
    insight:
      "Contexte portuaire : disponibilité du béton industriel mais vigilance sur les délais d'import des composants spéciaux.",
  },
  oriental: {
    label: "Oriental",
    coefficient: 1.08,
    structureRange: [3100, 3700],
    turnkeyRange: [5000, 7400],
    plan: [
      "Budgéter le transport de matériaux depuis Fès ou Casablanca pour les lots spécifiques.",
      "Consulter la direction régionale de l'urbanisme pour les projets hors périmètre municipal.",
      "Sécuriser un fournisseur local pour l'eau et l'énergie durant le chantier (groupes électrogènes si besoin).",
    ],
    insight:
      "Les coûts logistiques augmentent le prix global ; optimiser le phasage des approvisionnements réduit les surcoûts.",
  },
  sud: {
    label: "Laâyoune/Guelmim & Sud",
    coefficient: 1.1,
    structureRange: [3200, 3800],
    turnkeyRange: [5200, 7600],
    plan: [
      "Analyser la résistance des matériaux aux vents sableux et à la salinité (bétons additivés).",
      "Prévoir des solutions de stockage d'eau et de production électrique autonomes pour le chantier.",
      "Mobiliser un logisticien pour le transport maritime/terrestre des matériaux lourds.",
    ],
    insight:
      "L'éloignement des grands centres nécessite un calendrier logistique détaillé et des marges de sécurité plus élevées.",
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
