import GroomingBath from "./grooming-bath";
import GroomingTick from "./grooming-tick";
import GroomingGroom from "./grooming-groom";
import GroomingSwitchBath from "./grooming-switch-baths";
import GroomingEars from "./grooming-ears";

const groomingCard = [
    {
        id: 1,
        image: "/images/grooming-bath.jpg",
        link: "How to bathe a puppy",
        description: "Picture this: it's late one afternoon and your puppy is about three months old. You sit down on the ground, ready to have a play session... when the awful happens. Your beautiful pup walks around the corner covered in... something very dirty and smelly. As unpleasant as this may be, ...",
        review: "Reviewed by Sophia Perry",
        date: "July 20, 2023",
        url: "how-to-bathe-a-puppy",
        Component: GroomingBath
    },
    {
        id: 2,
        image: "/images/grooming-tick.webp",
        link: "What to do if you find a tick on your dog",
        description: "Ticks season is coming up; are you prepared? Ticks are a nuisance, but they also pose a danger to you and your pets when they carry diseases, like Lyme disease. If you suspect your dog has a tick, don't panic. We've got the tips to help you deal with these ...",
        review: "Reviewed by Sophia Perry",
        date: "June 10, 2016",
        url: "if-you-find-a-tick-on-your-dog",
        Component: GroomingTick
    },
    {
        id: 3,
        image: "/images/grooming-switch-baths.jpg",
        link: "Keeping your dog clean and fresh between baths",
        description: "Fluffy comes home from the groomer's looking prim and perfect, with a coat as white as snow. The next day on your walk, she rolls around in a pile of manure, practically undoing the maintenance of yesterday, but it's too early for another bath. What's a dog owner to do? ...",
        review: "Reviewed by Sophia Perry",
        date: "January 17, 2023",
        url: "keeping-dogs-clean-between-baths",
        Component: GroomingSwitchBath
    },
    {
        id: 4,
        image: "/images/grooming-ear.webp",
        link: "Clean your dog's ears in just a few easy steps",
        description: "With all of the upkeep that goes into caring for your beloved pooch, ear cleaning can be an easily forgotten hygiene task. But don't play this health regimen \"by ear,\" if you catch our drift. It's imperative to clean your dog's ear canals on a regular basis and keep them ...",
        review: "Reviewed by Sophia Perry",
        date: "April 7, 2021",
        url: "cleaning-dogs-ears",
        Component: GroomingEars
    },
    {
        id: 5,
        image: "/images/grooming-grooming.jpg",
        link: "Finding puppy groomer: Consider these factors",
        description: "Something as superficial as your dog's hairstyle may seem silly and unimportant, but choosing a professional groomer should be a high priority. Depending on your dog's breed and hygiene needs, they could be visiting the groomer as often as every 4-6 weeks, so deciding who will be responsible for keeping ...",
        review: "Reviewed by Sophia Perry",
        date: "July 15, 2018",
        url: "finding-puppy-groomer",
        Component: GroomingGroom
    }
]

export default groomingCard;