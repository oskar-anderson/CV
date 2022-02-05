export default class Index {

    static async main() {
        let pages = await Index.getPages();
        let contentElement = document.querySelector(".content");
        for (let page of pages) {
            contentElement.innerHTML += page;
        };
    }

    static async getPages() {
        let pages = [];
        for (let i = 1; true; i++) {
            let pageUrl = new URL(document.location.href).origin + `/pages/page_${i}.html`;
            try {
                let page = await fetch(pageUrl).then(
                    x => { 
                        if (!x.ok) {
                            throw Error(`Page with ${pageUrl} returned non 2xx response!`);
                        }
                        return x.text() 
                    }
                    ).catch(e => {
                        throw Error(`Page with ${pageUrl} does not exist! ${e}`);
                    });
                pages.push(page);
            } catch (error) {
                console.error(error);
                break;
            }
        }
        return pages;
    }

}