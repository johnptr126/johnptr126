//Auto-Cast "Hand of Fate" at Max MP

function autocastSpell() {
  var grimoire = Game.Objects["Wizard tower"].minigame,
      handFate = grimoire.spells["hand of fate"];
  if (grimoire.magic == grimoire.magicM && grimoire.magic >= grimoire.getSpellCost(handFate))
    grimoire.castSpell(handFate);
}
setInterval(function () { autocastSpell(); }, 1000);
