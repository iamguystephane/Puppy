import EducationNationalDay from "./education-national-day";
import EducationMinisterShow from "./education-minster-show";
import EducationDogService from "./education-service-dog";
import EducationCarSafety from "./education-car-safety";

const educationCard = [
    {
        id: 1,
        image: "/images/education-national-day.jpg",
        link: "National puppy day is about the betterment of puppies. So are we. Learn about the benefits of responsible breeding",
        description: "Responsible puppy breeding is an ethical practice that helps stop puppy mills, makes puppies healthier, give puppies better temperament, supports responsible pet ownership and improves the dog community.",
        review: "Reviewed by Sophia Perry",
        date: "July 20, 2023",
        url: "benefits-of-responsible-breeding",
        Component: EducationNationalDay
    },
    {
        id: 2,
        image: "/images/education-westminster.jpg",
        link: "How to watch the upcoming westminster kennel club dog show",
        description: "While many of us have switched on our TVs and enjoyed a few minutes of a dog show, few of us actually know much about what's going on",
        review: "Reviewed by Sophia Perry",
        date: "June 10, 2016",
        url: "how-to-watch-the-upcoming-westminster-dog-show",
        Component: EducationMinisterShow
    },
    {
        id: 3,
        image: "/images/education-dog-service.webp",
        link: "What is a service dog and what do they do?",
        description: "For those of us who require extra assistance in our daily lives, a service dog is so much more than man's best friend, they are everything you could ever need them to be.",
        review: "Reviewed by Sophia Perry",
        date: "January 17, 2023",
        url: "service-dog-101",
        Component: EducationDogService
    },
    {
        id: 4,
        image: "/images/education-car.jpg",
        link: "Car safety: The right way to transport your puppy",
        description: "Many puppy parents don't think twice about shuttling their new furry baby around in a car. Most of the preparation for a new puppy surrounds training, purchasing the necessary \"stuff\" and puppy proofing your home. But, what most don't realize is that there are strict laws around transporting your four-legged ...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2021",
        url: "car-safety",
        Component: EducationCarSafety
    }
]

export default educationCard;