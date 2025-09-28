const regionCoefficients = {
  casablanca: 1,
  rabat: 1.05,
  marrakech: 0.95,
  tanger: 1.03,
  oriental: 1.08,
  sud: 1.1,
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

  if (!surface || surface < 50) {
    totalOutput.textContent = "Renseignez la surface pour démarrer.";
    rangeOutput.textContent = "";
    perM2Output.textContent = "La surface minimale recommandée est de 50 m².";
    breakdownContainer.innerHTML = "";
    summaryOutput.textContent = "Complétez le formulaire pour afficher un résumé personnalisé.";
    extrasList.innerHTML = "";
    return;
  }

  const regionKey = form.region.value;
  const levelsKey = form["levels"].value;
  const typologyKey = form.typologie.value;
  const fondationsKey = form.fondations.value;
  const structureKey = form.structure.value;
  const slabKey = form.dallage.value;
  const roofKey = form.toiture.value;

  const typology = typologyRates[typologyKey];

  const structureBase = surface * typology.base;
  const adjustments =
    regionCoefficients[regionKey] *
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

  const regionLabel = form.region.options[form.region.selectedIndex].text;
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
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#simulation-form");
  if (!form) return;

  form.addEventListener("submit", updateSimulation);
  form.addEventListener("input", updateSimulation);
  updateSimulation();
});
