import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyname from './images/training-name.jpg'

export default function NameLearning(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyname} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How to Help Your Puppy Learn Its Name </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - December 15 2022 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Liam has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. She has an enormous wealth of knowledge afforded to her both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div className = "road-travel-hero-section training-puppy-name">
                <div className='before-list'>
                    <p style={{marginTop: '1em'}}> The first thing that you want to teach your puppy is his or her name. Understanding his or her name will be the basis for all the commands and lessons that come later. However, teaching your puppy its name is not as simple as repeating their name. Many owners make the mistake of repeating the puppy's name in too many different situations. Calling the puppy's name when scalding, praising, and teaching will confuse the puppy rather than teach it. Today we're going to talk about how to help your puppy learn its name -- in addition, working to discuss how to pick the right name and when you should use his or her name to begin with.</p>
                    <h1 style={{marginTop: '1em'}}> Picking the right name </h1>
                    <p style={{marginTop: '1em'}}>Our dog's names say a lot about who we are. That's why we take so much time when choosing a name. Websites online are devoted to helping you pick your dog's name, whether popular or unique. So, how do you stand out, and how do you pick the perfect name? </p>
                    <p style={{marginTop: '1em'}}> The most obvious part is your personal preference. However, there's more to it than that. To pick a dog's name, you must think a little scientifically. Dogs respond to certain sounds more than others, for example. You must also think about who you know and if that impacts your decision. </p>
                    <h1 style={{marginTop: '1em'}}> Short & Choppy Sounds </h1>
                    <p style={{marginTop: '1em'}}> When choosing your puppy's name, you should first think about the length and sound. Dogs prefer short and choppy names over long soothing ones. Remember, your dog's name serves as an attention cue. Their name is something that they should always respond to by looking at you, and longer names can make hearing and distinguishing that cue more difficult. </p>
                    <h1 style={{marginTop: '1em'}}> Unique Names </h1>
                    <p style={{marginTop: '1em'}}> The final consideration for choosing your dog's name is the uniqueness of the name. While you don't want the name to be hard to remember, you don't want it to blend in with commands or family names. </p>
                    <p style={{marginTop: '1em'}}> Some people think that you shouldn't choose human names for your pet. This can lead you to assign too many human qualities to a dog. However, many people still pick up the Strand, and a good compromise can be using a grandparent name like "Marv." This will also help to ensure that your dog won't later share a name with a family friend. </p>
                    <h1 style={{marginTop: '1em'}}> When to use their name </h1>
                    <p style={{marginTop: '1em'}}> The biggest mistake that dog owners make when teaching a puppy its name is to use it at the wrong times. Using your puppy's name should be an attention-grabbing command. When you say his or her name, it should only mean, "I'm talking to you. Look and listen." Having this understanding with your pet will build a solid foundation for safety and further teaching. </p>
                    <p style={{marginTop: '1em'}}> For example, if you throw the ball and it bounces into the road. An untrained dog might run into the road and get harmed. However, if you train your dog to stop, look, and listen when you say their name, then your dog can be spared from harm. Furthermore, if you can teach your dog to love when their name is called, then you will have a much easier time training them further. </p>
                </div>
                <h2 className='before-list'style={{marginTop: '1em'}}> Yes list </h2>
                <ul className='article-paragraphs'>
                    <li>
                        When you need their attention
                    </li>
                        
                    <li>
                        Positively and encouraging
                    </li>
                    <li>
                        Before issuing a separate command.
                    </li>
                </ul>
                <h2 className='before-list'style={{marginTop: '1em'}}> When Not to Use Their Name </h2>
                <div className='before-list'>
                    <p style = {{marginTop: '1em'}}>  Many people use their pet's name as a correction tool. Shouting angrily in punishment or calling the dog back using their name. During these situations, your pet will learn to associate their name with punishment and negative actions. You do not want this to happen. Should this happen, your pet will ignore your calls and won't turn to give you his or her attention.  </p>
                    <p style = {{marginTop: '1em'}}> Once your dog learns that their name can often mean a punishment then they have no incentive to come back. For the best results, you should only use your dog's name positively and calmly. His or her name should not be a "come" command or a punishment. Always have another word for that. For example, "Bast ... [pause] ... Come!"</p>
                    <h2 className='before-list'style={{marginTop: '1em'}}> No list </h2>
                    <ul style={{marginTop: '2em'}}>
                        <li> Never as a punishment</li>
                        <li> Not as a recall mechanism </li>
                        <li> Never use negatively. </li>
                    </ul>
                    <h1 style={{marginTop: '1em'}}> How to Teach a Puppy Their Name </h1>
                    <p style={{marginTop: '1em'}}> Teaching a puppy his or her name is a very simple task. In reality, they will learn their name so long as you use it often enough. The important factor is making sure they learn it in the right context. Setting goals and having a clear understanding of what they need to get from their name will ensure the proper outcome. </p>
                    <h2 style={{marginTop: '1em'}}> Get Their Attention </h2>
                    <p style={{marginTop: '1em'}}> Start-process by sitting in a quiet room in your home alone with your puppy. You should have no distractions, and a big bag of treats by your side. Make sure that your puppy is rested and calm before beginning a training session. You don't want an overly tired, hyper, or distracted puppy when you begin. </p>
                    <p style={{marginTop: '1em'}}> First, say your puppy's name just once, in a happy tone. You want your voice to convey the need for their attention. If your puppy doesn't respond, that's okay; they do not know their name yet. Take a pause, then clap and say their name again in a positive and happy tone. This will help to get their attention period </p>
                    <h2 style={{marginTop: '1em'}}> Mark & Reward </h2>
                    <p style={{marginTop: '1em'}}> As soon as your new puppy looks to you with his or her full attention, you need to take action immediately. Mark the behavior with a positive word such as "yes!" or "good!" and click if you're using a clicker. Next, give a small food reward and a heavy amount of praise. Though you might not always give food when you call their name, puppies are often very food motivated, and the food will help them respond to their name initially. </p>
                    <h2 style={{marginTop: '1em'}}> Loose Their Attention & Repeat </h2>
                    <p style={{marginTop: '1em'}}>Now, you need to lose their attention. Wait until they turn their attention away from you and repeat their name again. As soon as they look back to you and you have their full attention, repeat the reward and marking process. Initially, you might have to clap and use extra encouragement to obtain their attention. However, you should work on limiting this and reducing the need for more than their name. </p>
                    <h2 style={{marginTop: '1em'}}> Keep Repeating </h2>
                    <p style={{marginTop: '1em'}}>During your first session, you're going to want to repeat the first few steps about a dozen times over the next few minutes. The more you do this, the more boring it will get, and the training would become ineffective. Use the best judgement when determining your dog's attention span. </p>
                    <p style={{marginTop: '1em'}}> Repeat this training every couple of hours for a few days. After a week, your puppy should learn that his or her name means that he will get a treat and praise. He will learn to turn around and give you his attention when you call his or her name. </p>
                    <h2 style={{marginTop: '1em'}}> Train in New Locations </h2>
                    <p style={{marginTop: '1em'}}>After you have formed a solid foundation in a quiet and secluded space, it's time to expand your training. Try training in the living room, kitchen, or bedroom. Once you can obtain your puppy's attention with their name anywhere in the house, try training outside. You should repeat all the steps above until you can get your puppy's attention anywhere in your home and yard. </p>
                    <p style={{marginTop: '1em'}}>Remember, your puppy is still young. They have very short attention spans and can be easily distracted. Practice in different rooms and accept the small wins as you get them. Continue praising your dog heavily, and with time, success will come. </p>
                    <h2 style={{marginTop: '1em'}}> Increase Attention Time </h2>
                    <p style={{marginTop: '1em'}}>In the beginning, you should be marking and praising the second that your puppy gives you their attention. However, after a few sessions, you should be waiting two seconds before giving them attention. Then, three seconds, then four seconds. Eventually, you want to try to get your puppy to pay attention to you for at least five seconds before you reward them. </p>
                    <p style={{marginTop: '1em'}}>If at any point during the session, your puppy is having a hard time hitting five seconds, don't worry. Simply go back to a one or two-second reward for the remainder of the session. There is a high chance that you may have increased the time they needed to pay attention to you to quickly. Ensure that they have proved they're good at paying attention to you for two seconds before leveling up to three seconds or more. </p>
                    <h2 style={{marginTop: '1em'}}> Add Distractions </h2>
                    <p style={{marginTop: '1em'}}>Once your puppy is good at giving you their attention reliably for five seconds at a time anywhere in your home, it's time to add distractions. Start back in a quiet room and add one simple distraction. This could be a person playing with a toy or a child playing. Once your puppy is fully distracted, repeat the steps above. </p>
                    <p style={{marginTop: '1em'}}>This will be much harder as you're asking your puppy to turn away from something fun and rewarding to pay attention to you. If they do this, immediately praise and do not ask for extended attention. You have to build up to five seconds once more. At this point, you're going to want to use something more appetizing than what they're currently paying attention to. You might have to use a cooked piece of chicken rather than dry kibble for the treat. This higher level reward will ensure that they want to look at you rather than the toy.</p>
                    <h2 style={{marginTop: '1em'}}> Increase Both Simultaneously </h2>
                    <p style={{marginTop: '1em'}}>As your puppy becomes able to look at you for extended periods of time with a simple distraction, then you need to ramp up both the distractions and the attention time. Make sure that they can pay attention to you with a single distraction for two seconds, three seconds, and eventually five seconds. Once they're able to do that, add a second distraction and repeat the process. Eventually, your puppy should be able to turn and look at you for five seconds, no matter how many distractions are in your home. </p>
                    <h2 style={{marginTop: '1em'}}> Go Public </h2>
                    <p style={{marginTop: '1em'}}>Now, you should be able to get your puppy's attention anywhere in your home no matter how many distractions for up to five seconds. It's time to take your puppy into the public and practice. Start somewhere quiet, perhaps a public park. Repeat the very first step again. Little to no distractions and the smallest attention earning a reward. </p>
                    <p style={{marginTop: '1em'}}>Since your puppy is in a new place for the first time, there's a chance to go back to square one; that's okay and expected. Simply practice all of the steps in public until your puppy can reliably look at you for five seconds, no matter how many distractions at any location.</p>
                    <h2 style={{marginTop: '1em'}}> Don't Stop </h2>
                    <p style={{marginTop: '1em'}}> Now that your puppy is looking at you quite easily, you might think that you're done. However, you're not! Though your puppy has been conditioned to associate their name with rewards, it doesn't stop there. You must continually give them attention and show them that their name is always exciting, rewarding, and fun. </p>
                    <p style={{marginTop: '1em'}}>As your puppy grows, go through these exercises in multiple locations in situations. You need to make sure that they look at you in any type of distraction no matter the surrounding, environment, or situation. Repetition is the key. Incorporate this training exercise into walks, play dates, and visits. This is the foundation for your puppy's future. Always remember to end training on a positive note. Also, ensure that you don't go too long as to lose their attention. Finally, have fun and show them how rewarding training can be!</p>
                </div>
            </div>
            <div className='popular-and-search p-and-s'>
                <PopularRn />
                <PuppySearch />
            </div>
            <Footer />
        </div>
    )
}