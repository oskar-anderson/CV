import Settings from "../Settings.js";

export default class Index {

    static async main() {
        let pages = await Index.getPages();
        let contentElement = document.querySelector(".content");
        contentElement.innerHTML = pages.join('');
    }

    static async getPages() {
        let pages = [];
        for (let i = 1; true; i++) {
            let pageUrl = new Settings().getBasePath() + `/pages/page_${i}.html`;
            console.log(`fetching ${pageUrl}`);
            let page = null;
            try {
                page = await Index.getPage(pageUrl)
            } catch (error) {
                if (error instanceof Response) {
                    // This is expected for graceful loop exit
                    if (error.status === 404) {
                        break;
                    }
                    throw new Error(`Unknown server error occured: ${error.statusText}`);
                }
                throw new Error(`Something went wrong: ${error.message || error}`);
            }
            pages.push(page);
        }
        return pages;
    }

    static async getPage(pageUrl)  {
        let fechResult = null;
        // browser will log possible fetch error, but the error is not thrown
        fechResult = await fetch(pageUrl);
        
        if (!fechResult.ok) {
            // network error - non 2xx response
            throw fechResult;
        }
        return fechResult.text();
    };
}
