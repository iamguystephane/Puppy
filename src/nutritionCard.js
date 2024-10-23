import NutritionFeeding from "./nutrition-feeding";
import NutrtitionSchedule from "./nutrition-schedule";

const nutritionCard = [
    {
        id: 1,
        image: "/images/nutrition-feeding.webp",
        link: "What human foods can dogs eat?",
        description: "Dogs are a constant companion that we love having in every part of life. However, we often wonder what's okay for them and what is dangerous. While it might be obvious that they can't walk on the pavement when it's very hot outside, what they can eat ...",
        review: "Reviewed by Sophia Perry",
        date: "July 20, 2023",
        url: "what-human-foods-can-dogs-eat",
        Component: NutritionFeeding
    },
    {
        id: 2,
        image: "/images/nutrition-schedule.webp",
        link: "Puppy feeding chart and schedule: How much and how often to feed your puppy",
        description: "There is a lot of misleading information concerning dog foods, canine nutritional requirements and exactly what a puppy needs to eat. To cut through the myriad of conflicting messages we've created this guide on how, when and what to feed your puppy. Puppy Feeding Schedule/Timeline (By Week) ...",
        review: "Reviewed by Sophia Perry",
        date: "June 10, 2016",
        url: "puppy-feeding-window-chart-amount",
        Component: NutrtitionSchedule
    }
]

export default nutritionCard;