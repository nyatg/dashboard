const linkCard = document.getElementsByClassName("link-card");
// diven för alla länkar
const linkContainer = document.querySelector(".link-container");

function saveLinksToLocalStorage() {
    const links = document.querySelectorAll(".link-div a");
    const linksArray = Array.from(links).map(link => ({
        href: link.href,
        text: link.textContent
    }));
    localStorage.setItem('savedLinks', JSON.stringify(linksArray));
};

function addLink() { 
    const addLinkBtn = document.getElementById("add-link");

    addLinkBtn.addEventListener("click", function () {

        // Diven för lägg till länk knappen:
        const addLinkDiv = document.getElementById("new-link");

        // textfältet där man kan skriva länkens url
        const linkInput = document.createElement("input");
        linkInput.setAttribute("type", "url");
        linkInput.setAttribute("placeholder", "Hemsidans URL:");
        linkInput.setAttribute("id", "link-url");

        addLinkDiv.appendChild(linkInput);

        // textfältet där man kan skriva namnet på hemsidan:
        const linkInputName = document.createElement("input");
        linkInputName.setAttribute("placeholder", "Hemsidans namn:");
        linkInputName.setAttribute("id", "link-name");

        addLinkDiv.appendChild(linkInputName);
        
        // Knappen för att publicera länkarna i kortet
        const publishLinkBtn = document.createElement("button");
        publishLinkBtn.setAttribute("id", "publishLinkBtn");
        publishLinkBtn.innerHTML = "Spara länk";
        addLinkDiv.appendChild(publishLinkBtn);

    // avbryt knapp (Kan ev. göra den till en img som är x)
        const cancelBtn = document.createElement("button");
        cancelBtn.innerHTML = "Avbryt/Klar";
        addLinkDiv.appendChild(cancelBtn);

        cancelBtn.addEventListener("click", function () {
            addLinkDiv.removeChild(linkInput);
            addLinkDiv.removeChild(linkInputName);
            addLinkDiv.removeChild(publishLinkBtn);
            addLinkDiv.removeChild(cancelBtn);
            addLinkBtn.disabled = false;
        });

        function createLink(href, text) {
            const newLink = document.createElement('a');
            newLink.setAttribute('class', 'link-class');
            newLink.href = href;
            newLink.textContent = text;
            return newLink;
        }

        function deleteLink() { 

        };

        publishLinkBtn.addEventListener("click", function () {
            const newLinkDiv = document.createElement("div");
            newLinkDiv.setAttribute("class", "link-div");
            
            const inputUrl = document.getElementById("link-url").value;
            const inputName = document.getElementById("link-name").value;

            
            const newLink = createLink(inputUrl, inputName);
            // newLink.href = inputUrl;
            // newLink.innerHTML = inputName;

            newLinkDiv.appendChild(newLink);
            linkContainer.appendChild(newLinkDiv);
            
            linkInput.value = "";
            linkInputName.value = "";

            saveLinksToLocalStorage();

        });
        
        addLinkBtn.disabled = true;   
    });

    // Skapa en koppling till publishLinkBtn som gör att en text skapas som länkar till den sida användaren valt att lägga upp som länk. Behöver brytas upp i två, så skapa två input fält, ett för namn, ett för länk som sedan laddas upp med hjälp av publishLinkBtn.

    // Ev. låta användare ladda upp logga till hemsidan
    // skapa en funktion som låter användare ta bort länkar de lagt upp tidigare
};

window.addEventListener('load', function () {
    const savedLinks = JSON.parse(this.localStorage.getItem('savedLinks'));
    if (savedLinks) {
        savedLinks.forEach((link, index) => {
            const newLink = document.createElement('a');
            newLink.href = link.href;
            newLink.textContent = link.text;

            newLink.classList.add('link-class');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "x";
            deleteBtn.addEventListener('click', function () {
                // Ta bort från DOM
                linkContainer.removeChild(newLink.parentElement);

                // Ta bort från localstorage
                savedLinks.splice(index, 1);
                localStorage.setItem('savedLinks', JSON.stringify(savedLinks));
            });

            const linkDiv = document.createElement('div');
            linkDiv.classList.add('link-div');
            linkDiv.appendChild(newLink);
            linkDiv.appendChild(deleteBtn);

            linkContainer.appendChild(linkDiv);
        });
    }
});

addLink();

