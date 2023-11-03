import Routes from './routes.js'

const path = new Routes()
const links = document.querySelectorAll('nav a')

path.addRouter("/", "/pages/home.html", "/images/mountains-universe-1.jpg");
path.addRouter("/universe", "/pages/universe.html", "/images/mountains-universe-2.jpg");
path.addRouter("/exploration", "/pages/exploration.html", "/images/mountains-universe-3.jpg");
path.addRouter("404", "/pages/404.html")

window.onpopstate = () => path.redir()
window.route = () => path.route()

path.redir()

for(const itemLink of links ) {
    itemLink.addEventListener('click', (event) => path.route(event))
}

