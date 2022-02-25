import paris from "./images/paris-pic.jpg"
import bruges from "./images/bruges-pic.jpg"
import london from "./images/london-pic.jpg"

export default [
    {
        id: 1,
        title: "Paris",
        description: "Paris is a city unlike any other. It is overflowing with culture, history, and beauty. And while people travel to Paris to see the Louvre, climb the Eiffel Tower, or see the Notre-Dame, the real magic is found in the streets.",
        image: paris,
        location: "France",
        maps: "https://goo.gl/maps/T2dwU7fVDiXuAVccA",
        date: "Summer 2017"
    },
    {
        id: 2,
        title: "Bruges",
        description: `Often dubbed the ‘Venice of the North’, the photogenic waterways and fairytale architecture make Bruges one of the prettiest cities in Europe. Magical sights are found around every corner.`,
        image: bruges,
        location: "Belgium",
        maps: "https://goo.gl/maps/muHttiru7Koy6oRz5",
        date: "Winter 2018"  
    },
    {
        id: 3,
        title: "London",
        description: "Samuel Johnson once said that “when a man is tired of London, he is tired of life”. And he was right. London offers something for everyone. From musical in the famous West End theatre to pubs that date back to the time of Sherlock Holmes.",
        image: london,
        location: "England",
        maps: "https://goo.gl/maps/qDwg9B8fjHikX5wt6",
        date: "Summer 2019"
    }
]