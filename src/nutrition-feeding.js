import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/nutrition-feeding.webp'

export default function NutritionFeeding(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> What human food can dogs eat? </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}> Dogs are a constant companion that we love having in every part of life. However, we often wonder what's okay for them and what is dangerous. While it might be obvious that they can't walk on the pavement when it's very hot outside, what they can eat is much less clear. Dog food comes in dry, wet, and raw. Unless you are feeding the last type, chances are you don't handle the fresh ingredients of your pet's chow. During a summer outing, you're left asking, "Can dogs eat apples/grapes/eggs?" Knowing what is okay and what isn't is what is like playing a hard game of Minesweeper. Today, we have the answers to the top issues in regards to what dogs can or can't eat! </p>
                <p style = {styles.paragraph}> A Look at Teeth </p>
                <p style = {styles.paragraph}> Before getting started, let's take a look at what dogs should be eating. Though dogs are generally carnivores, eating vegetables isn't out of the question. Proponents of the raw diet will know that meat with pumpkin and carrot can create the perfect meal for a dog. In addition, chewing on raw, uncooked bone can help them clean their teeth after a meal.  </p>
                <p style = {styles.paragraph}> Now, that's not to say that all meats are equal or that you can give as much carrot or pumpkin as you want. Everything lives in moderation, and the meat you give should be human quality, nothing less. Remember to talk to a vet before feeding a raw diet as your pet could have special needs that limit or change your options.  </p>
                <p style = {styles.paragraph}> In the wild  </p>
                <p style = {styles.paragraph}> With all the pet food advertisements, you've probably seen pet food pride itself as being what your dog's ancestors ate. Before we get started on what your pet can eat, let's take a look at what wild dogs, specifically wolves, are known to eat. Wolves are carnivores; this means that they eat meat as their main food source. Most wolves will eat large hoofed animals depending on where they're natural feeding grounds are located. However, wolves do require more than just meat to stay healthy. Many wolves can be seen eating berries, apples, and pears in the wild. In addition, they will eat grass for fiber and an upset stomach just as dogs do.</p>
                <p style = {styles.paragraph}> Are dogs color blind? </p>
                <p style = {styles.paragraph}> The first question that you may have is can a dog tell the difference between a grape and a blueberry? The answer, yes but they might not care. Dogs don't see as many colors as we do, but they are not color blind. Their eyes mostly pickup the yellows, blues, and violets of the world. That said, while they can tell the difference between foods and colors, they might not care too much. Their determining factor? If they think they can eat it. </p>
                <p style = {styles.paragraph}> Can Dogs Eat...  </p>
                <p style = {styles.paragraph}> Now for the fun part, all your "can dogs eat" questions, answered. After each food type, we're going to talk about if it's okay to eat, how much can be eaten, and why. Hopefully, by the end of this, you'll have a great understanding of what your dog can eat and how to keep them healthy. First, we will take a look at what foods can and can't be eaten. In the end, we have added a few bonus thoughts on food additives that can make your pets sick.</p>
                <p style = {styles.paragraph}> Apples: Yes! Apples make a delicious and healthy treat for your pet. They're crunchy and rich in antioxidants and fiber. However, your dog should not be allowed to eat the core or any seeds. The seeds found in apples contain cyanide, a toxic substance. A dog's more sensitive body, especially smaller dogs, can't handle this and your pet could become very sick if exposed to a large number of seeds over time. </p>
                <p style = {styles.paragraph}> Bananas: Sometimes! High in potassium, vitamin B6, and vitamin C, Bananas are a healthy alternative to fatty and salty treats. However, everything good should be eaten in moderation. Because bananas are so high in sugar, they should be used sparingly. A dog's body doesn't process sugar as our does, and it can lead to fast weight gain.  </p>
                <p style = {styles.paragraph}> Grapes: No! Add grapes to your never feed list! Grapes and raisins are highly toxic to dogs leading to kidney failure and even death. Though research hasn't been able to pinpoint exactly what in grapes is fatal, it is known that as few as three could be fatal to your beloved pet.  </p>
                <p style = {styles.paragraph}> Strawberries: Yes! Strawberries are a nutritional powerhouse full of antioxidants, fiber, and vitamin C. In addition, strawberries have an enzyme that can help whiten your dog's teeth! However, fresh is best for both human and pet. Canned strawberries or strawberries in syrup are a no go as the high levels of sugar and preservatives can cause issues in your pet's stomach. </p>
                <p style = {styles.paragraph}> Grass: Yes! Though you shouldn't be feeding grass to your pet on purpose, it's no issue if they are grazing while in the backyard. There are many schools of thought as to why this is the case. Some think that it's because the dogs don't feel well and need to vomit. Others think that grass eating may be to improve digestion, treat intestinal worms, or to fulfill a nutritional need.  </p>
                <p style = {styles.paragraph}>Blueberries: Yes! Antioxidants, fiber and phytochemicals, oh my! Blueberries are a great treat for you and your pet. On a summer day, try them frozen for a crunchy and nutritious snack. However, make sure you only use fresh blueberries. This is another case where canned and in syrup is a no go. </p>
                <p style = {styles.paragraph}> Watermelons: Sometimes! Eating the red part of watermelon without seeds is a great treat for pets. The seeds can cause an intestinal blockage so they should be avoided. In addition, you should not let your pet chew on the rind. That can lead to gastrointestinal upset and a visit to the vet. </p>
                <p style = {styles.paragraph}> Oranges: Sometimes! Orange, like all citrus, is known to cause diarrhoea, irritation, vomiting, or even central nervous system depression if eaten in large amounts. Eating a smaller amount is not a concern; however, keep in mind that the high sugar content can lead to obesity if given as a treat regularly.  </p>
                <p style = {styles.paragraph}>Avocado: No! This highly debated food contains a chemical called persin. In large quantities, it's toxic to pets and can cause vomiting and diarrhea. However, small amounts of avocado shouldn't cause too much of an issue. In summary, we don't recommend this as a regular treat for your pet.  </p>
                <p style = {styles.paragraph}> Carrots: Yes! Both raw and cooked carrots are great for your dog's health. However, it's essential never to feed your dog a whole carrot. Make sure you shred the carrot into very small pieces to prevent choking in both large and smaller pets.</p>
                <p style = {styles.paragraph}> Pineapples: Yes! Though okay to give to your pet in moderation, this fruit is often on the, by the pet, list. Watching your pet after you give them a taste will let you know if it should be on the list or not. Some pets will have upset stomachs after eating, in which case, pineapple should be stricken from the treat list.</p>
                <p style = {styles.paragraph}>Tomatoes: Yes! As long as the tomato is ripe, it is safe. However, the stem and leaves, as well as unripe green tomatoes, have a high amount of solanine. Generally, small amounts of this chemical are safe for a dog, but it shouldn't be eaten in large quantities. </p>
                <p style = {styles.paragraph}> Broccoli: Yes! Dogs can eat broccoli, both cooked and raw. Remember to keep the pieces small and only give a little as a treat. The florets contain isothiocyanates which can cause gastric irritation in your pets. When cooking this vegetable, or any other, for you pet don't add any oil or salt to the mix. Pet's don't need those extra flavors to be happy or healthy. </p>
                <p style = {styles.paragraph}> Eggs: Yes! Eggs are a great source of protein, riboflavin, and selenium for you and your pet. However, make sure to give them this treat cooked and shelled. Giving them a raw egg can cause a biotin deficiency while the shells could upset or hurt their stomachs. </p>
                <p style = {styles.paragraph}> Carrots: Yes! Both raw and cooked carrots are great for your dog's health. However, it's essential never to feed your dog a whole carrot. Make sure you shred the carrot into very small pieces to prevent choking in both large and smaller pets.</p>
                <p style = {styles.paragraph}> Popcorn: Yes! While not bad for pets, plain air-popped popcorn can get stuck in your dog's teeth and pose a choking hazard. For that reason, it's probably best left for the humans at the table. If you do give it to your pet, make sure to keep unpopped and half-popped kernels away from your pet.</p>
                <p style = {styles.paragraph}> Peanuts: Yes! Good news! Peanuts, peanut butter, and peanut treats are great treats for your pet. However, they should always be xylitol free! Some brands of peanut butter use this additive in place of sugar, and it is highly toxic to pets. Otherwise, keep in mind that peanuts are highly fatty and can be harder to process for your pet. If you notice any upset stomach, diarrhea, or vomiting then shy away from feeding your pets peanuts.</p>
                <p style = {styles.paragraph}> Tree Nuts: Sometimes! This is a topic with multiple fronts. On the safe list are almonds and cashews. However, as with any food, caution should be exercised. Nuts are high in fat, which can cause vomiting and diarrhea in pets. On the other hand, macadamia nuts, black walnuts, and pecans are on the no go list. These nuts, when moldy contain a toxin that can cause seizures and neurological issues. Contact a vet right away if any of the unsafe tree nuts have been eaten by your pet.  </p>
                <p style = {styles.paragraph}> Chocolate: No! No! A small amount of chocolate won't seriously harm your pooch. However, they will be prone to getting an upset stomach with some vomiting or diarrhea. On the other hand, large amounts of chocolate will cause too much theobromine to enter the system. This chemical can produce muscle tremors, seizures, an irregular heartbeat, internal bleeding or a heart attack. You'll know of theobromine poisoning if your pet has severe hyperactivity after the consumption of chocolate.</p>
                <p style = {styles.paragraph}>Onions: No! A chemical called thiosulfate is found in uncooked, cooked, and even powdered onion. As such, it's something that should never be fed to your pet as a treat or meal. However, unlike a grape, this vegetable takes a bit longer to take effect. Should your pet gorge on onions, you can expect the destruction of the red blood cells in their body, which could lead to death.</p>
                <p style = {styles.paragraph}> Garlic: No! Belonging to the Allium family with onions, chives, and leeks, this food is poisonous to your pooch. While the amount that they have to eat to get sick is generally very large, some dogs are more sensitive than others. In general, this food should be left off of your dog's plate. </p>
                <p style = {styles.paragraph}>Milk: Sometimes! Whether or not your pet can have milk will depend on if they are lactose intolerant or not. Some dogs have issues digesting milk while others don't. If your dog is showing signs of diarrhea or vomiting after they consume milk-based products, you know that this is off the list.</p>
                <p style = {styles.paragraph}>Fish: Yes! Your dog can eat fish. In fact, fish has many good fats and amino acids that can give your dog a nice health boost. Salmon and sardines are especially great for your pet. Salmon is loaded with extra vitamins and protein while sardines have soft, digestible bones filled with calcium. Make sure that all the small bones have been picked out if sardines aren't the fish of choice!</p>
                <p style = {styles.paragraph}>Bread: Yes! Small amounts of white bread won't harm your pet. However, bread also won't give them any health benefits either. It can pack on the carbs and calories, causing weight gain if not careful. Though it's simply best to avoid bread altogether, homemade bread is often a better option. Preservatives in store-bought bread can lead to stomach upset. </p>
                <p style = {styles.paragraph}>Cheese: Yes! Your pet can have cheese in small or moderate quantities as long as they aren't lactose intolerant. Make sure to use plan cheeses with no added spices or foods. Also, look for low-fat options like cottage cheese or mozzarella.</p>
                <p style = {styles.paragraph}>Cinnamon: No! While not toxic, this spice can lead to irritation. It's known to lower a dog's blood sugar to dangerous levels. This can lead to diarrhea, vomiting increased, or decreased heart rate, and even liver disease. In the powder form, inhalation can cause difficulty breathing, coughing, and choking. </p>
                <p style = {styles.paragraph}>Coconut: Yes! Coconut contains Lauric which will strengthen your pets immune system. It can also help clear skin conditions like hot spots, flea allergies, and itchy skin. The milk and oil are safe as well! However, your pet shouldn't munch on the furry shell as it can get lodged in their throat.</p>
                <p style = {styles.paragraph}>Corn: Yes! Corn is one of the most common ingredients in most dog food. However, the cob is hard to digest and can cause intestinal blockage. If you want to share fresh corn, make sure it's off the cob first.</p>
                <p style = {styles.paragraph}>Ham: Yes Though ham is safe, it's not the healthiest option available. It's generally a salty and fatty meat. While a small piece in fine, we recommend avoiding adding this as a normal treat to their meal plan.</p>
                <p style = {styles.paragraph}>Honey: Yes! Honey is packed with health-boosting properties such as vitamins A, B, C, D, E, and K, potassium, calcium, magnesium, copper, and antioxidants. Just as in humans, feeding your pet local and organic honey can help with allergies as it introduces the pollen to their immune system though small doses, building immunity.</p>
                <p style = {styles.paragraph}>Pork: Yes! Like all meats, pork is a great source of protein for your pet. It's packed with highly digestible protein and amino acids. In addition, pork is also less likely to cause an allergic reaction when compared to other meats. Keep in mind, pig has more calories per pound so pets will need less of it. </p>
                <p style = {styles.paragraph}>Quinoa: Yes! Quinoa is an ingredient in high-quality dry dog foods. It's a healthy alternative to corn, wheat, and soy. This is due to its strong nutritional profile as opposed to the starch profiles of the other options. </p>
                <p style = {styles.paragraph}>Shrimp: Yes! Shrimp is high in antioxidants, vitamin B12, and phosphorus. In addition, it's also low and fat, calories, and carbohydrates. You should always cook the shrimp and remove the shell, including tail, head, and legs. However, it should only be fed now and then to your pet.</p>
                <p style = {styles.paragraph}>Grain: Yes! Although there has been a lot of discussion around grain-free diets, there is nothing wrong with your dog eating grain. Dogs do not have to be grain-free. Grains like wheat and corn provide protein, fatty acids, and fiber. However, if your dog has allergies, you should talk to your vet to see if avoiding grains could help.</p>
                <p style = {styles.paragraph}>Yogurt: Yes! Plain yogurt is an acceptable snack for your pet. However, some canines, especially lactose intolerant ones, will have issues digesting this treat. If your dog can eat yogurt, the active bacteria will help strengthen their digestive system due to the probiotics in the food. As with all dog treats, you should avoid added sugar and artificial sweeteners. </p>
                <p style = {styles.paragraph}>Chemical Additives to Look Out for: Sometimes, listing what food is okay and what food does not do not cover the whole picture. For these next few, we are going to talk about the chemicals that can be added to food that is toxic to pets. If your pet gets into the cabinet, take a look at what they have eaten to see if you should go to the vet or not. </p>
                <p style = {styles.paragraph}>Xylitol: No! This additive is found in many candies, gums, toothpaste, diet foods, and baked goods. It's a sugar replacement used for human purposes. However, for dogs, it can cause drops in blood sugar and liver failure. If you see lethargy, vomiting, or coordination, your dog may need to go to the emergency vet. Seizures, liver failure, and death can follow within just a few days. </p>
                <p style = {styles.paragraph}>Yeast: No! Before bread is cooked, you have to add activities and let it rise. If you are a baker, make sure that your pet does not get a hold of active yeast. If they do, the yeast will swell inside the stomach. This swelling inflates your dog's stomach and causes a lot of pain. Also, as yeast ferments, it creates alcohol causing alcohol poisoning.  </p>
                <p style = {styles.paragraph}>Salt: No! Just like humans, salt causes pets to retain water. However, due to their smaller size, it can cause it faster and on a more extreme scale. Eating too much salt will mean lots of trips to the potty as well as sodium ion poisoning. If you see vomiting, diarrhea, depression, tremors, high temperature, or seizure after ingestion of large quantities of salt, then take your pet to the vet. </p>
                <p style = {styles.paragraph}>Alcohol: No! Alcohol is bad on the liver and brain, whether human or pet. However, pets need a lot less alcohol to show the effects. Just a little liquor, beer, or wine can cause vomiting, diarrhea, coma, or even death. The smaller the pet, the worst issue can be. </p>
                <p style = {styles.paragraph}>Always Talk to a Vet! </p>
                <p style = {styles.paragraph}>If you ever have any questions about what your pet can or cannot eat, then you should speak to a vet. While we aim to make this list comprehensive, each pet will have unique needs, allergies, and issues. In general, dry food with quality treats from the pet store will be safe and enough for your pet. Human food is not necessary and can be hit or miss depending on the pet. If you are thinking about feeding your pet a raw diet, then you must consult a vet before beginning. They will be able to tell you what nutrition should be in the food and give you recommendations on food sources and amounts. Also, remember that each of the foods above will vary depending on the size of the pet. Things that are poisonous in high quantities will take less for a Yorkie than a mastiff. </p>
                <p style = {styles.paragraph}>Is there anything that dogs are allergic to that we didn't cover? What is your favourite human food treats to give to your pet? If you have any comments or concerns about food that we didn't cover, let us know in the comments on our facebook posts.! </p>
            </div>
            <div className='popular-and-search p-and-s'>
                <PopularRn />
                <PuppySearch />
            </div>
            <Footer />
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}