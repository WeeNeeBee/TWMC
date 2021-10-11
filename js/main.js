let books = [
    {
        img : "1",
        name : "1ST TO DIE",
        content : "Four crime-solving friends face off against a killer in San Francisco in the Women's Murder Club novel...",
        price : "$99.99"
    },
    {
        img : "2",
        name : "2ND CHANCE",
        content : "The Women's Murder Club returns for another thrilling crime investigation. Will their skills be enough to take down a brutal madman?...",
        price : "$87.99"
    },
    {
        img : "3",
        name : "3RD DEGREE",
        content : "One member of the Women's Murder Club is hiding a secret so dangerous that it could destroy them all...",
        price : "$56.99"
    },
    {
        img : "4",
        name : "4TH OF JULY",
        content : "Detective Lindsay Boxer and the Women's Murder Club make a courageous return...",
        price : "$96.99"
    },
    {
        img : "5",
        name : "THE 5TH HORSEMAN",
        content : "Dare to face the most terrifying heights of suspense. From hospital murders to explosive court battles, the Women's Murder Club takes on their most harrowing challenge yet...",
        price : "$100"
    },
    {
        img : "6",
        name : "THE 6TH TARGET",
        content : "When a horrifying attack leaves one of the Women's Murder Club struggling for her life, the others fight to keep a madman behind bars before anyone else is hurt...",
        price : "$57.87"
    },
    {
        img : "7",
        name : "7TH HEAVEN",
        content : "A terrible fire in a wealthy suburban home leaves a married couple dead and Detective Lindsay Boxer and her partner Rich Conklin searching for clues...",
        price : "$56.99"
    },
    {
        img : "8",
        name : "THE 8TH CONFESSION",
        content : "As San Francisco's most glamorous millionaires mingle at the party of the year, someone is watching--waiting for a chance to take vengeance on Isa and Ethan Bailey, the city's most celebrated couple...",
        price : "$67.89"
    },
    {
        img : "9",
        name : "THE 9TH JUDGEMENT",
        content : "The Women's Murder Club takes on two deranged killers, but Detective Lindsay Boxer begins to wonder if the mysterious case is also breaking apart her closest friendships...",
        price : "$88.89"
    },
    {
        img : "10",
        name : "10TH ANNIVERSARY",
        content : "Secrets. Lies. Murder. In this pulse-pounding Women's Murder Club novel, mysteries and lives unravel...",
        price : "$97.89"
    },
    {
        img : "11",
        name : "11TH HOUR",
        content : "Your best friend ... or a vicious killer? You won't know until the 11th Hour. Lindsay Boxer is pregnant at last!...",
        price : "$97.89"
    },
    {
        img : "12",
        name : "12TH OF NEVER",
        content : "It's finally time! Detective Lindsay Boxer is in labor--while two killers are on the loose.Lindsay Boxer's beautiful baby is born!...",
        price : "$97.89"
    },
]

let booksSection = document.getElementById('books-img');
let html = "";
books.forEach(e=> {
    html += `
    
    
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card m-3">
                <img src="img/${e.img}.jpg" class="card-img-top gallery-item img-fluid" alt="...">
                <div class="card-body">
                    <h4>${e.name}</h4>
                    <p>${e.content}</p>
                    <h3>${e.price}</h3>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Purcharse</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    `
    booksSection.innerHTML = html;
})
