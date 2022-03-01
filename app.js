var accusations = [];
var friends = ["Lumpy", "Dumpy", "Frumpy", "Bumpy", "Pumpy"]
var locations = ["Varrock", "Falador", "Lumbridge", "Ardougne", "Burthorpe", "Kourend", "Morytania", "Prifddinas", "Relleka", "Catherby"]
var weapons = ["Twisted bow", "Scythe of Vitur", "Harmonised Staff", "Abyssal Whip", "Torag's Hammers", "Dharok's Greataxe", "Karil's Crossbow", "Verac's Flail", "Guthan's Warpear", "Ahrim's Staff", "Toxic Blowpipe", "Crystal Bow", "Dragon Claws", "Dragon Warhammer", "Ghrazi Rapier", "Blade of Saeldor", "Inquistor's Mace", "Trident of the Swamp", "Iban's Staff", "Armadyl Godsword"]

for (let i = 1; i < 101; i++) {
    var currentElement = document.createElement("h3");
    currentElement.innerText = "Accusation " + i + ".";
    currentElement.addEventListener("click", displayAccusation(i));
    document.body.appendChild(currentElement);
}

function displayAccusation(accusationNumber) {
    var friend = friends[accusationNumber % 5];
    var weapon = weapons[accusationNumber % 20];
    var location = locations[accusationNumber % 10];
    return function () {
        alert(
            "Accusation " + accusationNumber + ": I accuse " + friend + ", with the " + weapon + " in " + location + "!"
        );
    };
}
