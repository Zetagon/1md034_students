function MenuItem(name, kCal, containsGluten, imagePath) {
    this.name = name;
    this.kCal = kCal;
    this.containsGluten = containsGluten;
    this.imagePath = imagePath;
    this.nameKCal = function() {
        return this.name + ': ' + this.kCal;
    }
}

let oreo = new MenuItem("Burger Oreo", 800, true, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FV2Uu3G6Awxg%2Fmaxresdefault.jpg&f=1&nofb=1");
let mega = new MenuItem("Mega Burger", 700, false, "http://3.bp.blogspot.com/_uSukkBNulxg/So7HxBI6kEI/AAAAAAAADo0/C8lo6tRh-I8/s400/AmericanBurgerChips.jpg");
let ufo = new MenuItem("Ufo Burger", NaN, false, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3fli9w4dgkipni0u2per21bw-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F02%2F049-UFO%25E2%2580%2599s-Burger-Flavor-MI-0076-1024x682.jpg&f=1&nofb=1");
let billys = new MenuItem("Billys Burger", 1600, true, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3B6KmscisZG3XU63ltbKMwHaEy%26pid%3DApi&f=1");
let doritos = new MenuItem("Doritos Burger", 6000, false, "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.choosy-beggars.com%2Fwp-content%2Fuploads%2F2010%2F07%2FDoritos-All-Nighter-Cheeseburger.gif&f=1&nofb=1");

let myId = document.getElementById("myID");

// let oreoP = document.createElement('p');
// oreoP.appendChild(document.createTextNode(oreo.nameKCal()))
// myId.appendChild(oreoP);
// let megaP = document.createElement('p');
// megaP.appendChild(document.createTextNode(mega.nameKCal()))
// myId.appendChild(megaP);
// let ufoP = document.createElement('p');
// ufoP.appendChild(document.createTextNode(ufo.nameKCal()))
// myId.appendChild(ufoP);
// let billysP = document.createElement('p');
// billysP.appendChild(document.createTextNode(billys.nameKCal()))
// myId.appendChild(billysP);
// let doritosP = document.createElement('p');
// doritosP.appendChild(document.createTextNode(doritos.nameKCal()))
// myId.appendChild(doritosP);

// const vm = new Vue({
//     el: "#foo",
//     data: {
//         baz: new Date()
//     }
// })
const vm = new Vue({
  el: '#myID',
  data: {
      oreoP: oreo.nameKCal(),
      megaP: mega.nameKCal(),
      ufoP: ufo.nameKCal(),
      billysP: billys.nameKCal(),
      doritosP: doritos.nameKCal()
  }
})
