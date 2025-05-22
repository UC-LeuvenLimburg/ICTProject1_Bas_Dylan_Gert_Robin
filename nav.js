list = [
  "Graduaat Internet of Things",
  "Graduaat HVAC-Systemen",
  "Graduaat Hernieuwbare Energiesystemen",
  "Graduaat Elektromechanische Systemen",
  "Bachelor Energietechnologie",
  "Bachelor Chemie",
  "Bachelor Electromechanica",
  "Bachelor Electronica-ICT",
  "leerkracht secundair onderwijs",
  "leerkracht kleuter onderwijs",
  "Graduaat in de accounting administration",
  "Graduaat in het productiebeheer",
  "Bachelor in het bedrijfsmanagement",
  "Bachelor in human resources management",
  "Bachelor in organisatie & management",
  "Bachelor in de vroedkunde",
  "Bachelor in de verpleegkunde",
  "Bachelor in de biomedische laboratoriumtechnologie",
  "Graduaat in het maatschappelijk werk",
  "Graduaat in de orthopedagogische begeleiding",
  "Graduaat in het sociaal-cultureel werk",
  "Bachelor in de othopedagogie",
];

for (let i = 0; i < 25; i++) {
  let link = document.createElement("a");
  link.href = "template.html?id=" + i;
  link.textContent = list[i];
  link.style.display = "block"; // So each link is on a new line
  document.body.appendChild(link);
}
