var textArray = [
  "The largest beetle by weight is Goliathus goliathus (a species of goliath beetle), by length excluding the antennae Dynastes hercules (the Hercules beetle), and by length including the antennae Batocera wallacei (Wallace's long-horn beetle). Overall speaking, most of the world's largest beetles are scarabs of the subfamily Dynastinae and longhorns of the subfamily Prioninae (however, Batocera actually belongs to the Lamiinae).",
  "я скоро добавлю текст на русском",
  "Oil bodies are unique cell organelles found only in liverworts. It has been debated what the purpose of oil bodies is, with some suggested functions being photoprotection, defense from predators or pathogens, protection from desiccation, cold resistance, or energy storage. So far, there is no consensus. However, liverwort oil-bodies are extremely important taxonomically: their color and shape are useful visual characteristics, and they contain many secondary metabolites such as terpenoids which tend to be fragrant (Geocalyx graveolens smells like turpentine, while Conocephalum conicum has a mushroomy scent!) and highly specific to a particular group, making them useful for chemosystematics. ",
  "Chionea, the snow flies, is a fascinating genus of wingless craneflies. The adults are only active in winter, able to withstand sub-zero temperatures lethal to the majority of insect species (usually from -6 to 0 degrees Celsius), and can be seen walking on the surface of snow in large numbers. Their bodies contain trehalose and glycerine, antifreeze agents which prevent ice from forming inside. If a limb does start freezing, the insect can self-amputate it to save its life!",
  "The ghostwort, scientifically known as Aneura (Cryptothallus) mirabilis, is a truly unique plant. It is one of the two species of liverwort that completely lack chlorophyll, making it unable to photosynthesize; instead, it receives all of its nutrients from a fungus, Tulasnella. The name ghostwort comes from the plant's pale white coloration. It is both rare and difficult to spot in the field, found across northern Europe and in Greenland, buried underneath peat moss. Its closest relative, Aneura crumii, is the second achlorophyllous species of liverwort found in forests of Costa Rica. ",
  "The pattern of spacing of stem nodes in horsetails, wherein those toward the apex of the shoot are increasingly close together, is said to have inspired Scottish mathematician John Napier to invent logarithms."
];
var randomNumber = Math.floor(Math.random() * textArray.length);
document.getElementById("randomNumber").innerHTML = textArray[randomNumber];
