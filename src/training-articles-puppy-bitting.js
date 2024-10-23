import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppybite from './images/training-bite.avif'

export default function NameLearning(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppybite} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How to Stop a Puppy From Biting </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - January 25 2024 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Liam has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. She has an enormous wealth of knowledge afforded to her both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style={styles.container}>
                <p style={styles.paragraphTop}>
                    There's almost nothing cuter than a puppy and bringing one home is certainly a joyful occasion. We all dream of snuggling an adorable, wiggly little furball, but raising a puppy isn't always sunshine and roses. In fact, handling a new puppy comes with all kinds of challenges ranging from potty training, obedience training, teaching them not to destroy your shoes, and most importantly, stopping them from biting.
                </p>
                <p style={styles.paragraphTop}>
                    Ah yes, puppy bites. If it's been a while since you last interacted with a puppy, perhaps you've forgotten that these adorable furballs possess razor-sharp teeth that they often sink into our hands and feet. Nipping and biting is an annoying habit that every puppy must overcome with the help of his human companions.
                </p>
                <p style={styles.paragraphTop}>
                    Because it's such an annoying (and painful) habit, you're sure to feel motivated when it comes to correcting this behavior. Below we've compiled a series of helpful tips for training your puppy not to bite. But first, it can be helpful to understand what drives this behavior...
                </p>

                <h3 style={styles.heading}>How to Stop a Puppy From Biting</h3>
                <p style={styles.paragraphTop}>
                    There are all kinds of different methods you can use to teach your puppy boundaries when it comes to biting. Following are a few ideas that you can use either individually or together in order to develop positive play habits with your pup.
                </p>
        
                <ol style={styles.orderedList}>
                    <li style={styles.listItem}>
                    <strong>Take Your Puppy To Training Classes</strong>
                    <p style={styles.paragraph}>
                        Just like human children, puppies learn new behaviors quickly. This is a wonderful quality when they are learning positive behaviors, but it can be frustrating when they begin to pick up naughty habits. Taking your pup to training classes is a wonderful way to head off bad habits and begin molding your pup into the dog you want him to become.
                    </p>
                    <p style={styles.paragraph}>
                        At the class, your furry pal will have the opportunity to meet all kinds of new people and dogs, in a controlled environment. Classes are an especially good idea if you're a first-time dog owner or haven't trained a puppy before. With a trainer's guidance, you'll learn productive techniques for interacting with your puppy during play and training. Your pup is likely to find the training classes fun and rewarding, and attending them together will help build and strengthen your bond.
                    </p>
                    </li>
                    <li style={styles.listItem}>
                    <strong>Substitute a Toy</strong>
                    <p style={styles.paragraph}>
                        In the early days of training, it may not be realistic to prevent your pup from biting altogether. During this stage, you should redirect your puppy's biting to appropriate items. Keep a toy on hand any time you're interacting with your pup. If he begins to nip or bite your hands offer him the toy instead. Make sure you praise your puppy emphatically each time he takes the toy. Before you know it he'll realize that biting should be reserved for toys and not hands.
                    </p>
                    </li>
                    <li style={styles.listItem}>
                    <strong>Use Positive Reinforcement</strong>
                    <p style={styles.paragraph}>
                        Positive reinforcement is a powerful and ethical training method that involves rewarding your puppy for good behavior rather than punishing him for bad behavior. Basically, when your puppy does something you like, you reward him with treats, praise, and affection. If he does something you don't like you ignore it and create opportunities for him to do something that warrants praise. This technique works really well when training your puppy not to bite. When he plays gently, or, with a "soft" mouth, you reward him. If he nips, you don't. Your pup will rapidly begin to associate gentleness with a fun reward and won't associate biting with anything at all. The key to success with this method is consistency and patience. Most pups are eager to please their people (especially when they're young), but they will make mistakes along the way. The more you work with your pup, and the more rewards you give him, the faster he will learn. It's also worth mentioning that you can be very creative with the rewards you offer. Many pups are highly food motivated, but food treats aren't the best reward in the long run, as they can lead to obesity. Try mixing in rewards of praise, affection, and even your puppy's favorite toy.
                    </p>
                    </li>
                    <li style={styles.listItem}>
                    <strong>Don't Engage in Rough Play</strong>
                    <p style={styles.paragraph}>
                        There's no doubt that it's fun to play rough with pups. They become excited and giddy and do all kinds of goofy things. However, when they begin nipping you excitedly with their needle-like teeth, this type of play begins to wear thin. Teaching your pup to play in this way can also become problematic because he may begin to believe that all humans like to play like this. As a result, he could engage with the wrong person, say a small child, or someone with a fear of dogs, and it could result in a traumatic experience or even injury. In order to prevent something like this from happening, avoid engaging your puppy in this type of rough play. If you do rough house with your puppy be sure to teach him a word that indicates when it's time for him to calm down. Some dog owners use words like "settle," "calm down," or even "stop" to indicate that playtime is over. While you play with your puppy be sure to set boundaries. If he bites too hard, pause the play and let him calm down. If he's having a wonderful time and all of a sudden his nips lead to the end of playtime, he'll quickly begin to realize nipping is a bad idea.
                    </p>
                    </li>
                    <li style={styles.listItem}>
                    <strong>Say "ouch!"</strong>
                    <p style={styles.paragraph}>
                        It's totally normal for dogs to nip and bite one another during play. If one canine receives a bite that is too painful, he'll let out a yelp. This alerts his playmate that he's gone too far, and reminds him to be gentler. Some dog trainers recommend that we interact with our furry friends in the same manner. If your pup nips you, let out a loud, high-pitched "Ouch!" Doing so will get his attention and help him realize that he's become overzealous in his play. This type of training teaches what is commonly referred to as bite inhibition and it goes a long way in teaching your pup that biting too hard is bad. When you begin training your puppy, reserve your "ouch" for only the bites that are painful. Once your pup begins to bite more gently in general, begin saying "ouch" even for bites that don't hurt you. In this way, you can gradually phase out the habit of nipping and biting all together!
                    </p>
                    </li>
                    <li style={styles.listItem}>
                    <strong>Ignore or Disengage</strong>
                    <p style={styles.paragraph}>
                        When your puppy begins to bite or nip, disengaging or ignoring him sends the message that you are not interested in that type of behavior and that it yields no reward. This is another form of training bite inhibition. Many pups will nip or bite at your feet and ankles as you walk in an attempt to entice you to play with them. If you stop in your tracks and remove the moving temptation your puppy will stop also. Once he does, take another step-- if your pup continues to bite, stop again. By stopping you're removing the "reward" of a fun moving target. Once your little one learns that biting causes the fun to stop he will adjust his behavior. Other times, your puppy may try to entice you to play by nipping at your hands or feet even when you are stationary. If he does this, ignore him until he stops. Once he settles, begin to engage with him. This will teach him that nipping doesn't lead to play and encourages him to look for other ways to instigate fun activities.
                    </p>
                    </li>
                    <li style={styles.listItem}>
                    <strong>Socialize Your Puppy</strong>
                    <p style={styles.paragraph}>
                        One of the best teachers for your puppy is someone who speaks his language! Socializing your pup with other dogs is a great way for him to learn the rules of play. Dogs are good at setting boundaries with one another. Learning how to play with other dogs will, in turn, help your puppy play better with you. His canine pals will let him know when he's getting too rough, and he'll begin to realize how his behavior affects others. It may seem hard to believe, but he will apply the manners he learns from his furry buddies in his interactions with you and other humans he meets! Take care when choosing the first dogs to introduce your puppy to. Sometimes older dogs, even very friendly ones, have no patience for rambunctious puppy energy and may reprimand your pup a little bit too harshly. It's important to choose playmates that enjoy playing with energetic dogs so your furbaby has a positive play experience and looks forward to socializing with other dogs in the future. If your puppy has a negative experience he could develop anxiety or even aggression toward other dogs. If you're hesitant to socialize your puppy on your own, ask a trainer to assist you. A trainer will be able to choose the best playmates for your pup and can supervise his interactions.
                    </p>
                    </li>
                </ol>
                <h3 style = {styles.heading}>Why Do Puppies Bite?</h3>
                <p style={styles.paragraphTop}>
                    Nipping and biting is a completely normal puppy behavior and generally isn't done out of aggression. Puppies learn about their environment through their noses and mouths. They sniff, chew, mouth, and bite in order to take in their surroundings. It's important to remember that while their nips and bites hurt, they are given out with positive intentions!.
                </p>
                <p style={styles.paragraphTop}>
                    Biting and nipping is also a way for puppies to engage in play. If you've ever watched dogs play you've surely noticed that there is plenty of wrestling and play fighting involved. Puppies (and even adult dogs) love to roughhouse. They engage by pouncing on one another and grabbing mouthfuls of one another's puppy fluff, growling, tackling, and chasing.
                </p>
                <p style={styles.paragraphTop}>
                    This type of play is very cute when it occurs between canines, but when your puppy tries to engage with you or your children in the same manner it becomes a bit, well, ouchy. This is why it's so important to teach your pup not to bite and help them learn to play in a way that's fun for both of you!
                </p>
                <p style={styles.paragraphTop}> Additional Tips for Success</p>
                <h3 style={styles.heading}> Remove temptation </h3>
                <p style={styles.paragraphTop}>This is especially important in the early days of training your puppy not to bite. Pups are enticed to nip and bite at anything that is near their face. After all, they just want to get to know it. With this in mind, don't tempt your puppy to nip you by waving your hands or feet near their face. Actions such as playfully booping your pup on the nose, or even tousling his ears, could be seen as an invitation for nipping. Removing the temptation for your puppy to nip you helps create opportunities for him to exercise positive behaviors that you can then reinforce with rewards. Once your pup has been learning bite inhibition for a while, begin to engage in actions such as the ones mentioned. When your pup doesn't attempt to nip your hand, you'll realize how far he's come in his training!</p>
                <h3 style={styles.heading}> Be Mindful When Your Pup Plays With Children </h3>
                <p style={styles.paragraphTop}>Curbing your pup's tendency to bite is an important undertaking for all dog owners, but it's especially critical if you have small children. Puppies tend to love children and are thrilled at the chance to engage with them. Unfortunately, sharp puppy teeth and tender child skin are not a great combination. To help make playtime fun and productive for both your kids and your pup, ensure that they are supervised any time they play together. This way you can quickly intervene if your pup becomes too rambunctious.</p>
                <h3 style={styles.heading}> Don't Hit Your Puppy </h3>
                <p style={styles.paragraphTop}>Giving your puppy a smack when he nips you too hard might feel like a knee-jerk response but it is neither ethical nor productive. At best, this type of punishment will hurt your dog and leave him feeling sad or even scared of you. At worst, he will retaliate with more bites. Physical reprimands have been linked to aggression in dogs, so steer clear of these entirely. Focus on rewarding your pup's positive behavior and disengaging when he acts unfavorably.</p>
                <h3 style={styles.heading}> How do I distinguish play biting from aggressive biting? </h3>
                <p style={styles.paragraphTop}>Chances are, your puppy will never attempt to bite you aggressively, but whether he does or not, it's important to understand what that behavior looks like.</p>
                <p style={styles.paragraphTop}>An aggressive puppy will have a rigid or tense body and may show his teeth, growl, or even snap. This type of behavior isn't necessarily cause for alarm, as many puppies do throw the occasional "tantrum," but if it happens repeatedly we recommend contacting a trainer for assistance.</p>
                <p style={styles.paragraphTop}>Common situations in which a puppy may show signs of aggression are:</p>
                <p style={styles.paragraphTop}>When one attempts to take a treat or food from him</p>
                <p style={styles.paragraphTop}>When one attempts to take one of his toys away</p>
                <p style={styles.paragraphTop}>Either of these events may upset your puppy and cause him to react negatively, just how a petulant child would. It's critical in these early stages to correct this behavior properly to prevent it from becoming a habit. If you notice your puppy showing aggression in these situations, or any other, seek assistance from a trainer.</p>
                <h3 style={styles.heading}> Be Patient and Consistent </h3>
                <p style={styles.paragraphTop}>The saying "patience is a virtue" has never rung more true than when training a puppy not to bite. It can be a frustrating and lengthy process, but remember that your pup's biting is not done with bad intentions. Stay patient, stay consistent, and focus on rewarding him when he does a good job. You'll get through this together!
                </p>
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
      margin: '20px',
      lineHeight: '1.6',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        margin: '0',
    },
    paragraph: {
      marginBottom: '20px',
      width: '100%',
    },
    paragraphTop: {
        width: '70%',
        marginTop: '1em',
    },
    orderedList: {
      margin: '20px 0',
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItem: {
      marginBottom: '20px',
      width: '100%',
    },
  };
  