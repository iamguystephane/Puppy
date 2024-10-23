import VirtualTraining from "./virtual-training";
import NameLearning from "./training-article-name";
import PuppyBitting from "./training-articles-puppy-bitting";
import YardTraining from "./training-article-yard-escape";
import TrainingAggression1 from "./training-article-aggression1";
import TrainingAggression2 from "./training-article-aggression2";
import TrainingAggression3 from "./training-article-aggression3";
import TrainingLeash from "./training-article-leash";
import CrateTraining from "./training-article-crate-training";

const trainingCard = [
    {
        id: 1,
        image: "/images/training-virt.webp",
        link: "Why do virtual Dog training",
        description: "If you plan on traveling to Boston with your dog, then you need this guide to all of the fun things to do with your dog in Boston. Read on for a comprehensive list of dog-friendly attractions,  delicious dog-friendly dining and all the puppy-focused fun you can handle in Beantown.",
        review: "Reviewed by Sophia Perry",
        date: "May 20, 2021",
        url: "why-do-virtual-dog-training",
        Component: VirtualTraining
    },
    {
        id: 2,
        image: "/images/training-name.jpg",
        link: "How to Help Your Puppy Learn its Name",
        description: "Congratulations on your new puppy! Your new puppy isn’t just entering your life; they will enter your heart and stay there permanently. For the safety and care of the puppy, we have some tips and recommendations to ensure that your travel back home is a safe and happy one. Keep...",
        review: "Reviewed by Sophia Perry",
        date: "June 30, 2021",
        url: "how-to-help-your-puppy-learn-its-name",
        Component: NameLearning
    },
    {
        id: 3,
        image: "/images/training-bite.avif",
        link: "How to Stop a Puppy From Biting",
        description: "Airport Pickup We try to get all our puppies home within 2-3 weeks . To do so, the puppy will need to meet age, weight and health requirements before being authorized to travel. The Travel team will then choose the best travel method for each puppy and customer based on...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2021",
        url: "how-to-stop-a-puppy-from-bitting",
        Component: PuppyBitting
    },
    {
        id: 4,
        image: "/images/training-escape.jpg",
        link: "How To Keep Your Dog From Escaping Your Yard: Reining in Dogs With Waterlust",
        description: "We've all seen the infamous \"Lost Dog\" posters from distraught owners longing to see their furry loved one again. Unfortunately, having a dog run away is a reality many dog-owners face at one point or another. But if your dog bolts from the home, then it might take some extra ...",
        review: "Reviewed by Sophia Perry",
        date: "March 10, 2017",
        url: "reigning-in-dogs-with-wanderlust",
        Component: YardTraining
    },
    {
        id: 5,
        image: "/images/training-aggressive-1.jpg",
        link: "When the bite's bigger than the bark: Aggression in dogs part 3",
        description: "Dogs are complicated animals with distinct personalities and therefore temperaments based on their individual genetic makeup, environmental factors and breed history. Just like humans, dogs have faults and behaviors that need correcting. And one of those common issues is aggression. While we've established in Part One of this series that ...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2024",
        url: "aggression-in-dog-part-3",
        Component: TrainingAggression3
    },
    {
        id: 6,
        image: "/images/training-aggressive-2.jpg",
        link: "When the bite's bigger than the bark: Aggression in dogs part 2",
        description: "Dog aggression is a serious problem that can cause high anxiety, anger and heartbreak for owners, ultimately result in dangerous injuries (for both dogs and humans) and end in potentially fatal consequences, not to mention lead to cases of homeless and abandoned dogs. To better equip you with information and ...",
        review: "Reviewed by Sophia Perry",
        date: "June 7, 2021",
        url: "aggression-in-dog-part-2",
        Component: TrainingAggression2
    },
    {
        id: 7,
        image: "/images/training-aggressive-3.webp",
        link: "When the bite's bigger than the bark: Aggression in dogs part 1",
        description: "Aggression in dogs is a scary, yet complex behavioral pattern, but is common and treatable with an intensive training plan. It's important to accept at the onset of dog ownership that most dogs will exhibit some form of aggression at some point, typically when guarding their territories or protecting themselves ...",
        review: "Reviewed by Sophia Perry",
        date: "August 7, 2021",
        url: "aggression-in-dog-part-1",
        Component: TrainingAggression1
    },
    {
        id: 8,
        image: "/images/training-leash.jpg",
        link: "Step-by-Step tutorial leash training",
        description: "We've all seen those dogs. The ones who zigzag every which way on their walks. The ones who mark on every tree. The ones who drag their owners down the street. It begs the question: Who is walking who anyway? Prevent these unfortunately common situations from becoming your situation by ...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2023",
        url: "leash-training",
        Component: TrainingLeash
    },
    {
        id: 9,
        image: "/images/training-crate.jpg",
        link: "How to crate train a puppy",
        description: "The philosophy behind crate training your furry companion is to create a familiar and safe location where your dog will want to enter of her own will and enjoy relaxing and sleeping inside her very own comfy and cozy spot. Because dogs don't like to soil their sleeping areas, they ...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2021",
        url: "crate-training",
        Component: CrateTraining
    }
]

export default trainingCard;