import BostonArticle from "./boston-article";
import RoadTravelArticle from "./travel-article";
import AirlineArticle from "./airline-article";

const travelCard = [
    {
        id: 1,
        image: "/images/dasc-park.jpg",
        link: "Top dog friendly spots in Boston",
        description: "If you plan on traveling to Boston with your dog, then you need this guide to all of the fun things to do with your dog in Boston. Read on for a comprehensive list of dog-friendly attractions,  delicious dog-friendly dining and all the puppy-focused fun you can handle in Beantown.",
        review: "Reviewed by Sophia Perry",
        date: "May 20, 2021",
        url: "top-dog-friendly-spots-in-boston",
        Component: BostonArticle
    },
    {
        id: 2,
        image: "/images/dasc-travel.jpg",
        link: "Traveling with your new puppy",
        description: "Congratulations on your new puppy! Your new puppy isn’t just entering your life; they will enter your heart and stay there permanently. For the safety and care of the puppy, we have some tips and recommendations to ensure that your travel back home is a safe and happy one. Keep...",
        review: "Reviewed by Sophia Perry",
        date: "June 30, 2021",
        url: "traveling-with-your-new-puppy",
        Component: RoadTravelArticle
    },
    {
        id: 3,
        image: "/images/dasc-airline.jpg",
        link: "How puppies travel on commercial airlines & impacts temperature and weather has",
        description: "Airport Pickup We try to get all our puppies home within 2-3 weeks . To do so, the puppy will need to meet age, weight and health requirements before being authorized to travel. The Travel team will then choose the best travel method for each puppy and customer based on...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2021",
        url: "how-puppies-travel-on-commercial-airlines-and-impacts-temperature-and-weather-can-have-on-their-schedule",
        Component: AirlineArticle
    }
]

export default travelCard;