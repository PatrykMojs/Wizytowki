let sidebar_button = document.querySelector(".sidebar_button");
let sidebar = document.querySelector(".sidebar");

sidebar_button.onclick = function(){
    sidebar.classList.toggle("active");
    sidebar.classList.toggle("active_sidebar");
}

document.onclick = function(e){
    if(!sidebar_button.contains(e.target) && !sidebar.contains(e.target)){
        sidebar_button.classList.remove("active");
        sidebar.classList.remove("active_sidebar");
    }
}

//-----------------------------------------------------------------------------------

var result = 0;
var buttonId;

var products = [
    { name: 'Klasyczny', id: "button_burger_classic", price: 30, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/idealny-serowy-burger-z-warzywami-na-drewnianym-stole-i-czarnym-tle-ai-generatywny_123827-23432.jpg?w=1060&t=st=1693476358~exp=1693476958~hmac=386606596a8e34f2f6497794a8e959e5d9c3e21561a8c2b64ef819fff5a3efd2" },
    { name: 'Duży ser', id: "button_burger_cheese", price: 32, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/widok-z-boku-burger-miesny-z-zablokowanym-nozem-z-frytkami-i-zupami-na-tacy_140725-13957.jpg?w=740&t=st=1693483004~exp=1693483604~hmac=e8cb768cb465b301ccb6f16e0b30d76c4a0c20d3fd4f2603befa507087c7b8ff"},
    { name: 'Bekon', id: "button_burger_bacon", price: 35, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/widok-z-przodu-mezczyzna-trzyma-tace-z-burgerem-i-frytkami_23-2148678809.jpg?w=1060&t=st=1693483133~exp=1693483733~hmac=da2328573359025e74a63fc8a28ccbbf710da720a47656505fe06327b7b2bfdc"},
    { name: 'Podwójna wołowina', id: "button_burger_doubleBeef", counter: 0, price: 45, img: "https://img.freepik.com/darmowe-zdjecie/duzy-burger-makowy-z-wolowina-topionym-cheddarem-i-pelna-biala-salatka_114579-2311.jpg?w=1060&t=st=1693483214~exp=1693483814~hmac=b9bf3276f12038971753a990154570644cb9d2714c1b62d085d343d6532c0eda" },
    { name: 'Czerwony', id: "button_burger_Red", price: 43, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/sezam-polewamy-burgera-wolowego_141793-17589.jpg?w=1060&t=st=1693483328~exp=1693483928~hmac=1d03b0868f5a6c5f0041275a2e3550e4aa4e09b248c35d85cca198daaed9c430" },
    { name: 'BBQ', id: "button_burger_BBQ", price: 34, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/burger-wolowy-z-salatami-cheddar-i-cebula_140725-5718.jpg?w=826&t=st=1693483417~exp=1693484017~hmac=3b2a3229226a223b720a1ba1c34ed67bf93ba3fc6714c3e577adb521f2327d0f" },
    { name: 'Cebulkarz', id: "button_burger_onion", price: 36, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/burger-widok-z-przodu-na-stojaku_141793-15542.jpg?w=1060&t=st=1693230150~exp=1693230750~hmac=12990a1677a16a13c269aa8380da86d31614b9667f1712633744ef32fe041905" },
    { name: 'Serek', id: "button_burger_cheese2", price: 40, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/burger-z-kurczaka-z-frytkami-na-stole_140725-4532.jpg?w=740&t=st=1693230236~exp=1693230836~hmac=93599574eea84d8a306fc57d1c5dbf5a4e13cb2e852cd3f2488df0ce84858c32" },
    { name: 'Wege', id: "button_burger_wege", price: 37, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/hamburger-podawany-z-roztopionym-serem-cheddar-i-sumakhem-na-rustykalnym-stole_114579-1791.jpg?w=740&t=st=1693230304~exp=1693230904~hmac=b2d67226e76fc6a670a5ac928e84ad39d04498e0763258d9495699f8c8080a23" },
    { name: 'Frytki', id: "button_chips", price: 15, counter: 0, img: "https://img.freepik.com/darmowe-zdjecie/widok-z-gory-pyszne-frytki-i-sos_23-2149235944.jpg?w=360&t=st=1693402741~exp=1693403341~hmac=1bcc9fb5c8283eb2db32e4511edb9030e03fa2325409ab7ef066cfe8f3c7c949" },
    { name: 'Cebulowe krązki', id: "button_onion_rings", counter: 0, price: 18, img: "https://img.freepik.com/darmowe-zdjecie/smazone-krazki-cebuli-na-stole_140725-6647.jpg?w=740&t=st=1693403014~exp=1693403614~hmac=060a27fab97238508f1fdfcfc2ebd3a9a2fb495e22e86c4459ee3ced6bf5e2db" }
]

document.addEventListener("DOMContentLoaded", function() {
    assignButtonClickEvents();
    showOrder();
});

function assignButtonClickEvents() {
    let buttons = document.querySelectorAll(".button_burger_add");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let buttonId = button.id;
            let product = products.find(p => p.id === buttonId);
            addToOrder(product);
        });
    });
}

function addToOrder(product) {
    result += product.price;

    let index = products.findIndex(p => p.id === product.id);
    if (index !== -1) {
        products[index].counter++;
    }
    showOrder(); 
}

function showOrder() {
    var sidebar = document.querySelector(".resultInfo");
    var totalCounter = products.reduce((total, product) => total + product.counter, 0);

    if (totalCounter > 0) {
        sidebar.innerHTML = "<h3><i>Twoje zamówienie znajduje się poniżej</i></h3>";
        sidebar.innerHTML += "<p> Do zapłaty: " + result + " zł</p>";
        sidebar.innerHTML += "<h4>Produkty:</h4>";

        products.forEach(function(product) {
            if (product.counter > 0) {
                sidebar.innerHTML += "<p><img src=" + product.img + " alt=" + product.name + " width=150 height=150>";
                sidebar.innerHTML += " Nazwa: " + product.name + "";
                sidebar.innerHTML += " Ilość: " + product.counter + "</p><button class='incrementButton' onclick=\"incrementProduct('" + product.id + "')\">+</button><button class='decrementButton' onclick=\"decrementProduct('" + product.id + "')\">-</button><br>";
            }
        });

        sidebar.innerHTML += "<button class='payButton'>Przejdź do metody płatności</button>";
    } else {
        sidebar.innerHTML = "<h3><i>Nie wybrano jeszcze produktu</i></h3>";
    }
}

function incrementProduct(productId){
    let product = products.find(p => p.id === productId);
    if(product){
        product.counter++;
        result+=product.price;
        showOrder();
    }
}

function decrementProduct(productId){
    let product = products.find(p => p.id === productId);
    if(product && product.counter!==-1){
        product.counter--;
        result-=product.price;
        showOrder();
    }
}
