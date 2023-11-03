
export default class Routes {
    listRoutes = {}

    addRouter(pathname, page, image) {
        this.listRoutes[pathname] = {page, image }
        
        console.log(this.listRoutes) 
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
        window.history.pushState({}, "", event.target.href)
    
        this.redir()
    }

    redir() {
        const path = window.location.pathname
        const pagePath = this.listRoutes[path] 
    
        if (pagePath) {
            const {page, image} = pagePath
            fetch(page)
                .then((response) => response.text())
                .then((html) => {
                    document.getElementById('content').innerHTML = html
                    if(image){
                        document.querySelector("body").style.backgroundImage = `url(${image})`
                    }
              })
                .catch((error) => {
                    console.error("Erro ao carregar a página:", error);
              });
          } else {
            console.error("Erro 404: Rota não encontrada", pagePath);
          }
    }
}

