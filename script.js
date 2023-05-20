const list = [
    {
        image:`images/pexels-josh-hild-2422461.jpg`,
        name:`Serene Enviroment`,
        p:`For a cozy and safe enviiroment`,
        price: `$78.999 per night`,
        city: `Barcelona,Spain`
    },
    {
        image:`images/pexels-pixabay-271624.jpg`,
        name:`Luxury Apartment`,
        p:`We provide affordable apartmen with cheap rate`,
        price: `$1,500 per year`,
        city: `Nice,France`
    },
    {
        image:`images/pexels-pixabay-460659.jpg`,
        name:`Good Weather`,
        p:`The best weather condition for relaxation`,
        price: `$278.999 per night`,
        city: `Rome.Italy`
    },
]

for (let i = 0; i < list.length; i++) {
    const featureSection = document.querySelector(".Features-section");
    const features = document.createElement('div');
    features.classList.add('Feature');

    const mainlist = `
        <img class="feature-image" src="${list[i].image}" alt="">
        <div class="feature-text">
                <h3>${list[i].name}</h3>
                <p>${list[i].p}</p>
        </div>
            <div class="feature-footer">
                <h5>${list[i].price}</h5>
                <h5>${list[i].city}</h5>
            </div> 
    `
    features.innerHTML = mainlist;
    featureSection.appendChild(features)
};
