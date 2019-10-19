class ProductViewPageUpdater {
    static updatePage(document, page) {
        let mainPictureSrc = document.querySelector("#main-picture img");
        mainPictureSrc.setAttribute('src', page.itemImg);
    
        let itemName = document.querySelector("#item-name");
        itemName.textContent = page.itemName;
    
        let itemCost = document.querySelector("#item-cost");
        itemCost.textContent = page.itemCost;
    
        let itemDimensions = document.querySelector("#item-dimensions");
        itemDimensions.textContent = page.itemDimensions;
    
        let itemMisc = document.querySelector("#item-misc");
        itemMisc.textContent = page.itemMisc;
    }
}

module.exports = ProductViewPageUpdater;