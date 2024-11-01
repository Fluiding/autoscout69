(async function() {
    const normes = {
    EURO1: 1, EURO2: 2, EURO3: 3,
    EURO4: 4, EURO5: 5, EURO5A: 5,
    EURO5B: 5, EURO6: 6, EURO6B: 6,
    EURO6C: 7, EURO6D: 8, EURO6DT: 9,
    }
    
    const marques = {
    MERCEDES: "Mercedes-Benz",
    VW: "Volkswagen",
    }
    
    // Vehicle Info
    var marque = document.querySelector("ul.doubleList:nth-child(1) > li:nth-child(1) > span:nth-child(2) > span:nth-child(1)").textContent
    const type = document.querySelector("#componentVehicleData > div > ul > li:nth-child(3) > span:nth-child(2) > span").textContent
    var modele = type
    const circ = document.querySelector("ul.doubleList:nth-child(1) > li:nth-child(6) > span:nth-child(2) > span:nth-child(1)").textContent.slice(-4)
    const carburant = document.querySelector("ul.doubleList:nth-child(2) > li:nth-child(7) > span:nth-child(2)")?.textContent
    const cylindree = String(parseInt(document.querySelector("ul.doubleList:nth-child(2) > li:nth-child(6) > span:nth-child(2)")?.textContent) / 1000).slice(0, 3)
    var norme = document.querySelector("ul.doubleList:nth-child(2) > li:nth-child(9) > span:nth-child(2)")?.textContent
    const kw = document.querySelector("ul.doubleList:nth-child(2) > li:nth-child(5) > span:nth-child(2)")?.textContent
    const km = document.querySelector("ul.doubleList:nth-child(1) > li:nth-child(7) > strong:nth-child(2) > span:nth-child(1)").textContent.slice(0, -3)
    
    marque = marque in marques ? marques[marque] : marque.charAt(0) + marque.slice(1).toLowerCase()
    
    // Copy Vehicle Info Button
    if (kw) {
    var list = `<ul>
    <li> <button class="myG">${marque} ${type.split(/\s+/)[0]} ${cylindree} ${carburant} ${kw}</button> </li>
    <li> <button class="myG">${km}</button> <button class="myG">${circ}</button> </li>
    </ul>`
    
    const listParent = document.querySelector("#componentVehicleData > div:nth-child(3)")
    listParent.innerHTML = listParent.innerHTML + list
    
    for (const button of document.getElementsByClassName("myG")) {
    button.style.alignItems = "center"
    button.style.appearance = "none"
    button.style.backgroundColor = "#fff"
    button.style.border = "1px solid #000000"
    button.style.borderRadius = ".375em"
    button.style.boxShadow = "none"
    button.style.boxSizing = "border-box"
    button.style.color = "#363636"
    button.style.cursor = "pointer"
    button.style.display = "inline-flex"
    button.style.fontFamily = "BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif"
    button.style.fontSize = "1rem"
    button.style.height = "2.5em"
    button.style.justifyContent = "center"
    button.style.lineHeight = "1.5"
    button.style.padding = "calc(.5em - 1px) 1em"
    button.style.position = "relative"
    button.style.textAlign = "center"
    button.style.userSelect = "none"
    button.style.webkitUserSelect = "none"
    button.style.touchAction = "manipulation"
    button.style.verticalAlign = "top"
    button.style.whiteSpace = "nowrap"
    
    button.addEventListener('click', function(event) {
    button.style.borderColor = '#4a4a4a'
    button.style.outline = '0'
    })
    
    button.addEventListener('focus', function(event) {
    button.style.borderColor = '#485fc7'
    button.style.outline = '0'
    })
    
    button.addEventListener('blur', function(event) {
    button.style.borderColor = '#b5b5b5'
    button.style.boxShadow = 'none'
    })
    
    button.addEventListener('mouseover', function(event) {
    button.style.borderColor = '#b5b5b5'
    })
    
    button.addEventListener('mouseout', function(event) {
    button.style.borderColor = ''
    })
    
    button.addEventListener("click", function() {
        const text = document.createElement("textarea")
        text.value = button.textContent
        document.body.appendChild(text)
        text.select()
        document.execCommand("copy")
        document.body.removeChild(text)
    })}}
    
    // Failsaves
    if (marque == "Mercedes-Benz")
        modele = `${type.split(/\s+/)[0]}-${type.split(/\s+/)[1]}`
    else
        modele = type.split(/\s+/)[0]
    
    // Search Button
    const link = `<a
    style="width: 120px"
    class="myG"
    href="https://www.autoscout24.be/fr/lst/${marque}/${modele}/ft_${carburant}?atype=C&cy=B&fregfrom=${String(parseInt(circ)-1)}&fregto=${circ}&emclass=${normes[norme]}&sort=price"
    target="_blank"
    >Chercher sur AutoScout24
    </a>`
    
    const linkParent = document.querySelector("div.subMenu:nth-child(1)") || document.querySelector("#content_vehicle > div:nth-child(2)")
    linkParent.innerHTML = linkParent.innerHTML + link
    
    // Remove Report Image Button
    while (true) {
        await new Promise(f => setTimeout(f, 200))
        if (!document.querySelector(".slick-lightbox-slick > div:nth-child(2) > div:nth-child(1)")) continue
        for (const child of document.querySelector(".slick-lightbox-slick > div:nth-child(2) > div:nth-child(1)").childNodes) {
            const element = child.getElementsByClassName("slick-lightbox-slick-item-inner")[0].getElementsByClassName("warningButtonShortFill")[0]
            if (element) element.remove()
        }
    }
})();
