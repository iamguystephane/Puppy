import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/nutrition-schedule.webp'

export default function NutrtitionSchedule(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> Puppy feeding schedule </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>There is a lot of misleading information concerning dog foods, canine nutritional requirements and exactly what a puppy needs to eat. To cut through the myriad of conflicting messages we've created this guide on how, when and what to feed your puppy. </p>
                <h3 style = {styles.heading}>Puppy Feeding Schedule/Timeline (By Week)</h3>
                <p style = {styles.paragraph}> Puppies have very specific nutritional requirements that determine what foods they can eat, how much they should be fed, and when they should transition to adult food. To make feeding your puppy as easy as possible, we've created a weekly feeding schedule detailing how much food your puppy needs; how often they need to eat, and what types of food options you should have available.</p>
                <h3 style = {styles.heading}>How Much Food Do I Feed My Puppy?</h3>
                <p style = {styles.paragraph}>Every week brings a rapid cycle of changes in which your puppy grows, learns and especially eats. From the day they are born, they are on an accelerated growth path, and they need the fuel to reach their full potential.</p>
                <p style = {styles.paragraph}> How much your puppy needs to eat is determined by its size and weight. This chart details how much food you should be feeding your puppy based on their weight and is a great place to start when creating a food plan. Don't forget to consult a licensed veterinarian before making any changes to your puppy's diet. Not all foods are the same calories per spoonful and may need some adjusting.</p>
                <table className = "nutrition-schedule">
                    <tr>
                        <th> Weight of Puppy </th>
                        <th> Amount to feed per day </th>
                    </tr>
                    <tr>
                        <td>4 oz.</td>
                        <td>2 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>6 oz.</td>
                        <td>3 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>8 oz.</td>
                        <td>4 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>10 oz.</td>
                        <td>5 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>12 oz.</td>
                        <td>6 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>14 oz.</td>
                        <td>7 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>16 oz.</td>
                        <td>8 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>18 oz.</td>
                        <td>9 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>20 oz.</td>
                        <td>10 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>22 oz.</td>
                        <td>11 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>24 oz.</td>
                        <td>12 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>26 oz.</td>
                        <td>13 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>28 oz.</td>
                        <td>14 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>30 oz.</td>
                        <td>15 Tbsp.</td>
                    </tr>
                    <tr>
                        <td>32 oz.</td>
                        <td>15 Tbsp.</td>
                    </tr>
                </table>
                <p style = {styles.paragraph}>Be sure to monitor your new puppy's health and wellness. If they appear skinny and eagerly finish every meal, then you may need to increase the amount of food in their diet. Conversely, if you notice that your puppy is gaining too much weight for their age, you may need to limit the amount of food in their diet.</p>
                <h3 style = {styles.heading}> How Often Do I Feed My Puppy?</h3>
                <p style = {styles.paragraph}>How often you feed you puppy is determined by its age. Puppies eat more when they are young, because they are constantly growing. Newborn puppies cannot consume solid food and should be kept on their mother's milk until weaning age. Around 6 weeks you can begin feeding your puppy solid food according to the following chart.</p>
                <table className = "nutrition-schedule">
                    <tr>
                        <th> Puppy age </th>
                        <th> Finding frequency </th>
                    </tr>
                    <tr>
                        <td> 1 week </td>
                        <td> 3-4 hours </td>
                    </tr>
                    <tr>
                        <td> 2 weeks </td>
                        <td> 3-4 hours </td>
                    </tr>
                    <tr>
                        <td> 3 weeks </td>
                        <td> 6 hours </td>
                    </tr>
                    <tr>
                        <td> 4 weeks </td>
                        <td> 8 hours </td>
                    </tr>
                    <tr>
                        <td> 5 weeks </td>
                        <td> 8 hours </td>
                    </tr>
                    <tr>
                        <td> 6 weeks </td>
                        <td> 8 hours </td>
                    </tr>
                    <tr>
                        <td> 7 weeks </td>
                        <td> 8 hours </td>
                    </tr>
                    <tr>
                        <td> 8 weeks </td>
                        <td> 8 hours </td>
                    </tr>
                    <tr>
                        <td> 9 weeks </td>
                        <td> Twice daily </td>
                    </tr>
                    <tr>
                        <td> 10 weeks </td>
                        <td> Twice daily </td>
                    </tr>
                </table>
                <p style = {styles.paragraph}>After 8 weeks, puppies should learn that food will no longer be provided constantly throughout the day. Feed your puppy then wait for them to finish their meal. After 10 minutes remove their food even if they haven't finished, though 10 minutes should provide enough time for your puppy to consume the entire meal.</p>
                <h3 style = {styles.heading}> Does Breed Affect Feeding Schedule?</h3>
                <p style = {styles.paragraph}>Breed can play a factor in determining when to feed your puppy. Large breeds like the German Shepherd, Rottweiler and American Bulldogs will require much more food than small breeds like the Jack Russel and Yorkshire Terriers. Therefore, owners should consider their puppies size, and age in unison when creating a food plan. As your puppy grows its metabolic rate will change, and it will need more or less food depending on breed. In general, the more exercise the breed requires to stay healthy, the more food they need to fuel their lifestyle. Lean, agile breeds like the Vizsla and Greyhound will require more food than a Basset Hound or a French Bulldog. Your vet will happily inform you on breed specific nutritional requirements.</p>
                <h3 style = {styles.heading}> Is Wet or Dry Food Better for Puppies?</h3>
                <p style = {styles.paragraph}>Whether or not to feed your puppy wet or dry food is a common enough question to spark a fierce debate between dog experts over which is best. The answer to the question, however, is... It depends.</p>
                <p style = {styles.paragraph}>If you have any questions regarding exactly how much food your puppy should be eating in the course of a day you should consult your veterinarian or the breeder. Don't guess. Do your research on the ingredients that go into the different puppy foods and how labels are written so that you can make the most informed choice on which puppy food is best for your puppy.</p>
                <h3 style = {styles.heading}>Wet Food</h3>
                <p style = {styles.paragraph}>Puppies need protein, fat, and fiber in their diet. If it can't be classified as one of those nutritional categories, it shouldn't be in your puppy's diet. The best wet foods contain ingredients that are rich in fatty proteins and healthy sugars like; muscle protein and no animal byproducts like hooves and tendons. Canned food is generally more expensive than dry food, and more palatable. However, owners should be wary of "all-meat" products. Your puppy needs a complete, balanced diet to fulfill their nutritional requirements. Meat only diets won't cut it.</p>
                <p style = {styles.paragraph}>Therefore, it's important for new puppy owners to ensure their puppy is fed a diet rich in the fat, protein, nutrients and minerals they need to sustain vital body function, boost immunity, and sustain healthy development.</p>
                <p style = {styles.paragraph}>High-quality wet dog food contains a high level of moisture and zero grain, filler content, or artificial ingredients. Artificial ingredients are linked to cancer and a myriad of potentially harmful medical conditions that can severely affect your puppy's quality of life.</p>
                <h3 style = {styles.heading}>Dry Food</h3>
                <p style = {styles.paragraph}>Dry dog food is a concentrated dog wherein moisture is removed. The highest quality dry foods contain significant levels of animal proteins and fats like chicken, beef, fish, and lamb.</p>
                <p style = {styles.paragraph}>These healthy animal fat sources provide much-needed nutrients like omega fatty acids to support skin and coat health. Puppies also benefit from the healthy animal fats found in dry food that provide amino acids and support cognitive development.</p>
                <p style = {styles.paragraph}>Additionally, many new puppy owners claim an oral-hygiene advantage with hard kibble thanks to the friction produced by heavy chewing, which helps to keep the gums and teeth healthy. We recommend using kibble that is moistened with water to keep your puppy hydrated.</p>
                <h3 style = {styles.heading}>Raw Diets</h3>
                <p style = {styles.paragraph}>Your puppy's diet should consist primarily of meat, with zero grains, starches, preservatives and artificial ingredients. Raw diets contain zero artificial ingredients and are fresher than canned wet food or bagged dry food, and typically prepared and portioned at home with fresh whole ingredients like beef, blueberries, and vegetables.</p>
                <h3 style = {styles.heading}>NO PEOPLE FOOD</h3>
                <p style = {styles.paragraph}>Obesity is a common problem found in many breeds, so avoid feeding your puppy from the table. Puppies are not likely to benefit from human food, which may even contain ingredients that are harmful to a puppy like garlic, chocolate, or gluten.</p>
                <p style = {styles.paragraph}>Puppies need protein, healthy fats, vitamins and minerals, and not much else. Their bodies are still growing and the protein aids in development. Thankfully puppies are carnivores, which means they get all of the nutrition they need from animal protein.</p>
                <p style = {styles.paragraph}>To keep your puppy at a healthy weight, be sure to avoid overfeeding them, even if they beg. This is especially tricky with some breeds, who always appear to be hungry and who are predisposed to becoming overweight as they seem to always be hungry. It's no surprise that these same breeds are the most prone to canine obesity.</p>
                <p style = {styles.paragraph}>Don't forget, you are the puppy's leader, and there is no room for another alpha dog in the house. By allowing your puppy to beg at the table you undermine your status as its pack leader, which can, and will result in training and behavior problems.</p>
                <h3 style = {styles.heading}>What About Bones and Treats?</h3>
                <p style = {styles.paragraph}>Caution is needed when giving your puppy a bone to chew one. Poultry, pork and cooked bones of any kind, are off limits and hazardous to your puppy. They splinter into shards that can cause choking and serious damage to your puppy's mouth, throat, and insides.</p>
                <p style = {styles.paragraph}>In fact, any bone can be chewed into small pieces and block the intestines, leading to a bout of constipation and lacerations of the mouth and internal organs. They can even lodge in the throat with fatal results. It is important to note that bones have little if any nutritional value.</p>
                <p style = {styles.paragraph}>Bones actually provide zero nutritional value. Not to mention the thousands of other ways to satisfy your puppy's urge to chew, like chew toys and fake bones.</p>
                <h3 style = {styles.heading}>What Diet is Best for My Puppy?</h3>
                <p style = {styles.paragraph}>What diet is best for your new puppy is best determined by your veterinarian. While there are pros and cons to each type of food, only a vet has the expertise to properly inform you as to which is best for your puppy.</p>
                <h3 style = {styles.heading}>Should I Buy the More Expensive Dog Food?</h3>
                <p style = {styles.paragraph}>First, check the for a statement from (AAFCO), the Association of American Feed Control Officials. This association informs pet owners about the intended use of the food. Another phrase to look for is "complete and balanced nutrition"</p>
                <p style = {styles.paragraph}>High-quality dog food has higher nutritional density, which means you can feed your dog less to achieve the same results. Additionally, high-quality puppy foods have stable ingredient profiles, higher in essential fatty acids.</p>
                <h3 style = {styles.heading}>When Should I Switch My Puppy to Dog Food?</h3>
                <p style = {styles.paragraph}>When to transition your puppy from puppy food to dog food is, obviously, determined by its age, and may vary from breed to breed. Smaller breeds should transition from puppy to dog food around 12 months old and large breeds around 18-24 months.</p>
                <p style = {styles.paragraph}>Large breeds, on the other hand, continue to grow for several weeks more than small breeds. Therefore, they typically transition from puppy food to dog food later than small breeds. Your vet will be able to help you determine when your puppy is done growing, and when their puppy food can be changed to dog food.</p>
                <h3 style = {styles.heading}>How to Switch from Puppy Food to Adult Food</h3>
                <p style = {styles.paragraph}>When transitioning your puppy from puppy food to adult food, be sure to make the switch gradually over several days. Sudden changes in your dog's diet can cause stomach irritation. Don't forget to consult with your veterinarian about the best type of food for your adult dog.</p>
                <h3 style = {styles.heading}>How to Switch from Puppy Food to Adult Food</h3>
                <ol style = {styles.unOrderedList}>
                    <li style = {styles.listItem}>Try to avoid feeding your puppy the moment you get home, as it may encourage separation anxiety. Besides, play time is a much better way to say hello when you get home.</li>
                    <li style = {styles.listItem}>Prescription diets can be purchased from veterinarians to feed dogs with kidney disease, heart disease, diabetes, and other serious conditions. These foods should never be fed without a prescription.</li>
                    <li style = {styles.listItem}>Avoid feeding your puppy vitamin or mineral supplements. When utilized incorrectly they can and will do far more harm than good.</li>
                    <li style = {styles.listItem}>Consult with your veterinarian before making any major change to your puppy's diet. Then stick with whichever formula and feeding plan they recommend, as sudden changes in food may cause digestion problems.</li>
                    <li style = {styles.listItem}>Small portions of carrot or apple chunks are healthful low-calorie snacks that most dogs love.</li>
                    <li style = {styles.listItem}>Always keep fresh water available. Wash the water bowl daily to avoid a buildup of bacteria.</li>
                </ol>
                <h3 style = {styles.heading}> FAQ </h3>
                <p style = {styles.paragraph}>What is the best food for my puppy? The best dog food for your puppy will contain the healthy proteins, fats, fruits, and vegetables that they need to sustain a healthy lifestyle. High-quality puppy food products contain zero filler or animal byproducts, so you can be sure your puppy is eating nothing but what its body needs to remain healthy.</p>
                <p style = {styles.paragraph}>What is the best food for my puppy? The best dog food for your puppy will contain the healthy proteins, fats, fruits, and vegetables that they need to sustain a healthy lifestyle. High-quality puppy food products contain zero filler or animal byproducts, so you can be sure your puppy is eating nothing but what its body needs to remain healthy.Can puppies be overfed? Yes. It takes time for a puppy to learn when to stop eating. A puppy's digestive system is very delicate. Therefore, puppies who overeat will typically vomit to relieve the pressure on their distended stomachs. Assuming your puppy manages to keep their food down, they will almost certainly experience diarrhea shortly after. Chronic overeating can result in chronic diarrhea that can last for weeks, even months. Excessive calories from overfeeding me may lead to weight gain, which is detrimental to your puppy's healthy development. If you can't feel your puppy's ribs under your fingers, they are too heavy. Before you put your limit your puppy's diet, we recommend consulting your vet on how to safely cut back their caloric intake. To avoid this unpleasant issue, we recommend instill a feeding schedule. Feeding your puppy moistened dry puppy food, 3 to 5 times per day for no longer than 10 minutes per feeding. After 10 minutes remove their food even if they haven't finished, though 10 minutes should provide enough time for your puppy to consume the entire meal.</p>
                <p style = {styles.paragraph}>What are the best times to feed a puppy? The best times to feed your puppy are at 7 a.m., noontime for lunch, and 5 p.m. for dinner. The last meal should always be around 5 p.m. so that they have enough time to digest their food and go potty one last time before bedtime.</p>
                <p style = {styles.paragraph}>How often should puppies drink water? Often. Puppies should always have access to fresh, clean water. If you notice your puppy's water bowl is empty, you should fill it up right away.</p>
                <p style = {styles.paragraph}>Is it OK to give a puppy regular dog food? It is very important to your puppy's healthy development that it be feed a diet designed to meet its nutritional requirements. However, a meal or two of adult dog food can suffice if you find yourself in a bind. Though any new food may upset their stomach, a small amount of adult food shouldn't hurt.</p>
                <p style = {styles.paragraph}>What foods should be avoided? Puppies are carnivores who will never require corn, wheat or gluten in their diet. Owners should avoid dog foods that contain any ingredients derived from corn, wheat or gluten, and artificial ingredients such as:</p>
                <ul style = {styles.unOrderedList}>
                    <li style = {styles.listItem}>White Flour</li>
                    <li style = {styles.listItem}>MSG</li>
                    <li style = {styles.listItem}>Gluten</li>
                    <li style = {styles.listItem}>Corn Syrup</li>
                    <li style = {styles.listItem}>Rendered Fat</li>
                    <li style = {styles.listItem}>Vegetable Oil</li>
                    <li style = {styles.listItem}>Animal By-Products</li>
                    <li style = {styles.listItem}>Brewers Rice</li>
                    <li style = {styles.listItem}>Corn</li>
                    <li style = {styles.listItem}>Animal Digest</li>
                </ul>
                <p style = {styles.paragraph}>Your puppy is unlikely to turn down a snack, so owners should avoid feeding their puppy "human food" and completely avoid foods that contain:</p>
                <ul style = {styles.unOrderedList}>
                    <li style = {styles.listItem}>Chocolate & Dairy</li>
                    <li style = {styles.listItem}>Onions</li>
                    <li style = {styles.listItem}>Garlic</li>
                    <li style = {styles.listItem}>Caffeine</li>
                    <li style = {styles.listItem}>Grapes</li>
                    <li style = {styles.listItem}>Nuts</li>
                    <li style = {styles.listItem}>Pitted Fruit</li>
                    <li style = {styles.listItem}>Salt</li>
                    <li style = {styles.listItem}>Yeast</li>
                    <li style = {styles.listItem}>Soy</li>
                </ul>
                <p style = {styles.paragraph}> Final thoughts </p>
                <p style = {styles.paragraph}> One of the most significant decisions you can make for your puppy is determining what it will eat. By feeding your puppy a nutritious diet on a regular basis you ensure it receives the vitamins and minerals it needs to grow into a healthy, happy adult dog. </p>
                <p style = {styles.paragraph}> So long as you're willing to consult with your veterinarian and commit to feeding your puppy only the highest-quality puppy food, then chances are high your puppy will enjoy an excellent quality of life. </p>
                <p style = {styles.paragraph}> Your entire household should be dedicated to your puppy's feeding regimen. Your puppy will find it and exploit any possible handouts, thereby reversing all of the good you are trying to do. Keeping a puppy healthy and on its feeding schedule takes a conscious effort from everyone in the household. </p>
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
    unOrderedList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        width: '60%',
        marginTop: '1em',
    },
    heading: {
        width: '60%',
        marginTop: '1em',
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}