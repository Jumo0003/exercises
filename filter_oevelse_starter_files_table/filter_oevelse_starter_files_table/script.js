const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true);
const manySeats = vehicles.filter((vehicle) => vehicle.passengers > 2);
const jonasEl = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas");
const rugbrød = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
const søren = vehicles.filter((vehicle) => vehicle.fuel === vehicle.passengers > 100);

const filters = {
  isElectric: electricVehicles,
  moreThan2: manySeats,
  isElectricAndOwnedByJonas: jonasEl,
  ryebreadFueled: rugbrød,
  all: vehicles,
  allTheSeats: søren,
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const valgt = event.target.dataset.filter;
    showTheseVehicles(filters[valgt]);
  });
});

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  if (arr.length === 0) {
    tbodyPointer.innerHTML = `<tr><td colspan="7">ingen resultater matcher din søgning</td></tr>`;
    return;
  }
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ? each.type : ""}</td>
  <td>${each.fuel ? each.fuel : ""}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : ""}</td>
  <td>${each.ownedBy ? each.ownedBy : ""}</td>
  <td>${each.isElectric ? "X" : ""}</td>
  <td>${each.isTandem ? "X" : ""}</td>
</tr>`;
  });
}
