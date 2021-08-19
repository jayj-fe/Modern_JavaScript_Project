import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import PostView from "../views/PostView.js";
import Settings from "../views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = matchItem => {
    const values = matchItem.result.slice(1);
    // const keys = Array.from(matchItem.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
   
    // console.log('***************')
    // console.log(matchItem.route.path)

    // console.log(Array.from(matchItem.route.path.matchAll(/:(\w+)/g)))
    // console.log(Array.from(matchItem.route.path.match(/:(\w+)/g) !== null ? matchItem.route.path.match(/:(\w+)/g) : {} ))
    const keys = (Array.from(matchItem.route.path.match(/:(\w+)/g) !== null ? (/:(\w+)/g.exec(matchItem.route.path)).map( x => [x])[1] : {} ));

    // console.log('***************')
    // console.log(keys);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }))
}

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router();
}

const router = async () => {
    // console.log(pathToRegex("/posts/:id"));
    // /posts/:id
    const routers = [
        // { path : "/" , view: () => console.log("Viewing Dashboard") },
        { path : "/" , view: Dashboard },
        { path : "/posts" , view: Posts },
        // { path : "/posts/:id/:somethingElse" , view: ViewPost },
        { path : "/posts/:id" , view: PostView },
        { path : "/settings" , view: Settings }
    ];

    const potentialMatches = routers.map( route => {
        return {
            route : route,
            // isMatch : location.pathname === route.path
            result : location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatche => potentialMatche.result !== null );

    if(!match){
        match = {
            route : routers[0],
            result : [location.pathname]
        }
    }

    // console.log(match);

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    router();

    document.body.addEventListener("click", e => {
        if(e.target.attributes["data-link"]){
        // if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
})