const PAGES = {
    "Main": "main",
    "About": "about_us",
    "Portfolio": "projects",
    "ProjectZelenogorsk" : "project_zelenogorsk",
    "ProjectUefa" : "project_uefa",
    "ProjectCherryGarden" : "project_garden",
    "ProjectSquareAviastart" : "project_aviastar",
    "ProjectMafAviastar" : "project_maf_aviastar",
    "ProjectRest" : "project_restaurant",
    "ProjectBloggers" : "project_bloggers",
    "ProjectHotel" : "project_hotel",
}

export function setPage(page) {
    if (Object.keys(PAGES).includes(page)) {
        window.location.hash = PAGES[page];
    } else {
        window.location.hash = "";
    }
}


export function getPage() {
    let page = window.location.hash.replace("#", "");
    console.log(page)
    if (Object.values(PAGES).includes(page)) {
        return Object.keys(PAGES).find(key => PAGES[key] === page)
    } else {
        window.location.hash = "";
        return "Main";
    }
}