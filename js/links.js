const linkCard = document.getElementsByClassName("link-card");
// diven för alla länkar
const linkContainer = document.querySelector(".link-container");

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

        publishLinkBtn.addEventListener("click", function () {
            const NewLinkDiv = document.createElement("div");
            NewLinkDiv.setAttribute("class", "link-div");
            
            const inputUrl = document.getElementById("link-url").value;
            const inputName = document.getElementById("link-name").value;

            const newLink = document.createElement("a");
            newLink.href = inputUrl;
            newLink.innerHTML = inputName;

            NewLinkDiv.appendChild(newLink);
            linkContainer.appendChild(NewLinkDiv);
            
            linkInput.value = "";
            linkInputName.value = "";

        });
        
        addLinkBtn.disabled = true;   
    });

    // Skapa en koppling till publishLinkBtn som gör att en text skapas som länkar till den sida användaren valt att lägga upp som länk. Behöver brytas upp i två, så skapa två input fält, ett för namn, ett för länk som sedan laddas upp med hjälp av publishLinkBtn.

    // Ev. låta användare ladda upp logga till hemsidan
    // skapa en funktion som låter användare ta bort länkar de lagt upp tidigare
};

addLink();

