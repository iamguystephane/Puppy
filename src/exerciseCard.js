import ExerciseMentalHealth from "./exercise-mental-health";
import ExerciseNeeds from "./exercise-exercise-needs";
import ExerciseMeetPeople from "./exercise-meet-people";


const exerciseCard= [
    {
        id: 1,
        image: "/images/exercise-mental-health.webp",
        link: "How exercise can imporve your puppy's mental health and overall happiness",
        description: "When we first met our puppy, she was jumping, playing, and rolling around on a trampoline with her brothers and sisters. She was full of energy and thrilled to meet us. Being first time puppy parents, we were not experts on what to do or expect when you first get ...",
        review: "Reviewed by Sophia Perry",
        date: "July 20, 2023",
        url: "a-story-about-exercise-and-mental-well-being-for-dog-and-family",
        Component: ExerciseMentalHealth
    },
    {
        id: 2,
        image: "/images/exercise-exercise.jpg",
        link: "How much exercise does a puppy need?",
        description: "From the Basset Hound to the Greyhound every puppy needs exercise. How much exercise your puppy needs depends on its age and breed. Fortunately this guide has everything you need to determine when and how often you should exercise your puppy? Why Exercise is Important? Regular exercise is not only ...",
        review: "Reviewed by Sophia Perry",
        date: "June 10, 2016",
        url: "how-much-exercise-a-puppy-needs",
        Component: ExerciseNeeds
    },
    {
        id: 3,
        image: "/images/exercise-friends.jpg",
        link: "How your dog can help you make friends and meet new people",
        description: "Owning a dog comes with many perks. There's the unconditional love, health benefits and a sense of security, just to name a few. But what you may not know is that your furry friend can help find more human companionship, too. Read on for ways to put your best paw ...",
        review: "Reviewed by Sophia Perry",
        date: "January 17, 2023",
        url: "make-friends-using-dog",
        Component: ExerciseMeetPeople
    }
]

export default exerciseCard