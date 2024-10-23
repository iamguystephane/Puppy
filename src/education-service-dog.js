import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/education-dog-service.webp'

export default function EducationDogService(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> What Is a Service Dog And What Do They Do? </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>For those of us who require extra assistance in our daily lives, a service dog is so much more than man's best friend, they are everything you could ever need them to be.</p>
                <p style = {styles.paragraph}>Service dogs embody the truest form of canine companionship; assisting their owners in daily tasks, and happily filling the role of non-judgmental friend, helper and guardian.</p>
                <p style = {styles.paragraph}>We understand the significance of service dogs in people's lives, and understand the essential role they fill in our community. We also understand that the process of legally acquiring a service dog is often complicated, exhausting, and fraught with red tape.</p>
                <p style = {styles.paragraph}>In an effort to improve the lives of our customers and their human owners, we offer Service Dog 101, wherein you can find anything you wish to know about service dogs, including what they are, how to get one, and even how to train your dog to become one.</p>
                <h2 style = {styles.heading}> What is a service dog? </h2>
                <p style = {styles.paragraph}>A service dog is any dog that is trained to assist humans with disabilities. A service dog is not a pet, it is a dog who is trained to assist people in tasks specifically related to that person's disability.</p>
                <p style = {styles.paragraph}>As defined by <Link to = "https://adata.org/sites/adata.org/files/files/Service_Animal_Booklet_2014%20LP.pdf" style = {styles.a}>Title II and Title III </Link>of the Americans with Disabilities Act (ADA), the term "service dog" refers to,"...<strong><i>a dog that is individually trained to do work or perform tasks for the benefit of an individual with a disability, including a physical, sensory, psychiatric,  intellectual, or other mental disability.</i></strong>"</p>
                <h2 style = {styles.heading}> What's the Difference Between Service Dogs and Emotional Support Dogs? </h2>
                <p style = {styles.paragraph}>Service dogs are protected by the <Link to = "https://adata.org/sites/adata.org/files/files/ADA_Overview_LP2_final2017.pdf" style = {styles.a}>Americans with Disabilities Act</Link>, however according to the ADA,"...<strong><i>a dog that is individually trained dogs whose sole function it is to provide comfort or emotional support do not qualify as service animals under the ADA.</i></strong>"</p>
                <p style = {styles.paragraph}>That is a critical legal distinction. Service dogs and emotional support dogs are not the same, and are not afforded the same legal protections under the ADA.</p>
                <p style = {styles.paragraph}>Emotional support dogs are often employed in hospitals, or in therapy where in the dogs presence provides comfort to a wide range of patients. Typically no more than one dog can is tasked with providing emotional support for entire hospital.</p>
                <p style = {styles.paragraph}>The role of a service dogs is distinctly different than that of an emotional support dog, according to the ADA,<strong><i>"...must be directly related to the individual's disability."</i></strong></p>
                <h2 style = {styles.heading}> Service Dogs are not Working Dogs </h2>
                <p style = {styles.paragraph}>As stated, a service dog is a dog that has been specially trained to assist a person with disabilities in a role that is directly related to that persons disability, such as a guide dog who enables their blind owner to travel.</p>
                <p style = {styles.paragraph}>Working dogs are dogs who have been trained to perform a role unrelated to a specific persons disabilities, such as K9 search and rescue, or sniffing for narcotics at the airport. These dogs, though highly trained and incredibly talented at what they do, are not considered service dogs under the ADA definition.</p>
                <h2 style = {styles.heading}> Types of Service Dogs </h2>
                <p style = {styles.paragraph}>There many types of service dogs, below are some that are defined by the Americans with Disabilities Act:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}><strong>Guide Dogs -</strong>Service dogs are specially trained to provide travel assistance to persons with severe visual impairments or are blind.</li>
                    <li style = {styles.listItem}><strong>Hearing Dogs - </strong> Hearing dogs are specially trained to alert a person who has a significant hearing loss or is deaf when a sound occurs.</li>
                    <li style = {styles.listItem}><strong>Psychiatric Service Dogs -</strong>Psychiatric service dogs are trained to assist individuals who suffer from psychiatric disabilities, and detect the onset of psychiatric episodes or lessen their effects. According to the ADA, tasks performed by psychiatric service dogs range from providing safety checks and reminding their handler to take medication; to interrupting self-mutilation by persons with dissociative identity disorders; and keeping disoriented individuals from danger.</li>
                    <li style = {styles.listItem}><strong>Autism Support Dogs (SSigDOG)</strong>Sensory signal dogs are a type of service dog trained to assist person with autism by alerting handlers to distracting repetitive movements common among those with autism.</li>
                    <li style = {styles.listItem}><strong>Seizure Alert & Response Dogs -</strong>A seizure alert dog is trained to detect, and alert their handler to the onset of seizure; enabling the person to sit down or move to a safe place in advance of the epileptic episode. The dog will then stand guard over the person during the seizure, or find help. However, the legal definition of a service dog specifies that the service animal in question need be <strong><i>"TRAINED... to do work or perform tasks for the benefit of an individual with a disability." </i></strong> Therefore, under the ADA's strict definition, services dogs like diabetes alert  dogs and allergy detection dogs are considered service dogs because they are trained to detect when their owners are low on insulin, or are about to be exposed to an allergen.</li>
                </ul>
                <p style = {styles.paragraph}>If you are uncertain if your assistance dog qualifies as a service dog under the ADA, we encourage you to <Link to = "https://adata.org/technical-assistance" style = {styles.a}>contact</Link> the ADA at 1-800-949-4232.</p>
                <h2 style = {styles.heading}> What Tasks do Service Dogs Perform? </h2>
                <p style = {styles.paragraph}>A better question to ask is; what tasks don't service dogs perform. Service dogs are trained to perform an astounding number of tasks ranging from the simple, to the extraordinary, including:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>Opening doors and fetching items</li>
                    <li style = {styles.listItem}>Turning on lights</li>
                    <li style = {styles.listItem}>Sounding alarm</li>
                    <li style = {styles.listItem}>Guiding their handler during
                    travel</li>
                    <li style = {styles.listItem}>Interrupting a panic attack,</li>
                    <li style = {styles.listItem}>Detecting a seizure</li>
                    <li style = {styles.listItem}>Providing counterbalance or
                    support</li>
                    <li style = {styles.listItem}>Steadying a handler while
                    transferring from a wheelchair</li>
                    <li style = {styles.listItem}>Many, many more.</li>
                </ul>
                <h2 style = {styles.heading}> What Tasks do Service Dogs Perform? </h2>
                <p style = {styles.paragraph}>According to the <Link to = "https://www.nsarco.com/service-dog-or-esa.html" style = {styles.a}>National Service Dog Registry </Link>, "For a person to legally qualify to have a service dog, he/she must have a disability that substantially limits his/her ability to perform at least one major life task without assistance. Disabilities that commonly qualify for a service dog include:</p>
                <ul style = {styles.orderedList}>
                    <li style={styles.listItem}>Debilitating Physical Condition</li>
                    <li style={styles.listItem}>Asthma or other debilitating
                    breathing problems</li>
                    <li style={styles.listItem}>Blindness & partial blindness</li>
                    <li style={styles.listItem}>Deafness & partial deafness</li>
                    <li style={styles.listItem}>Diabetes & Cancer patients</li>
                    <li style={styles.listItem}>Dizziness/Balance problems</li>
                    <li style={styles.listItem}>Epilepsy</li>
                    <li style={styles.listItem}>General Hearing Difficulty</li>
                    <li style={styles.listItem}>Mobility Problems & Physical
                    Weakness</li>
                    <li style={styles.listItem}>Neurological Problems</li>
                    <li style={styles.listItem}>Paralysis</li>
                    <li style={styles.listItem}>Speech Problems</li>
                    <li style={styles.listItem}>Seizures</li>
                    <li style={styles.listItem}>Age-Related Cognitive Decline</li>
                    <li style={styles.listItem}>Autism</li>
                    <li style={styles.listItem}>Depression</li>
                    <li style={styles.listItem}>Dyslexia</li>
                    <li style={styles.listItem}>Bipolar Disorder</li>
                    <li style={styles.listItem}>Emotionally Overwhelmed</li>
                    <li style={styles.listItem}>Panic Attacks</li>
                    <li style={styles.listItem}>Post Traumatic Stress Disorder
                    (PTSD)</li>
                    <li style={styles.listItem}>Separation Anxiety</li>
                    <li style={styles.listItem}>Social Phobia</li>
                    <li style={styles.listItem}>Stress Problems</li>
                </ul>
                <h2 style = {styles.heading}>Can You Get a Service Dog for Anxiety, Depression? </h2>
                <p style = {styles.paragraph}>Yes. Should a person's anxiety and/or depression be debilitating enough to be considered a disability, that person would qualify for a service dog. The most important thing to remember is that the dog must be trained to assist you in a role that is specific to your disability. A dog trained to assist a person suffering from severe anxiety and/or depression would be classified as a psychiatric service dog, and would perform roles like:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>Detect signs of an impending
                    anxiety attack</li>
                    <li style = {styles.listItem}>Fetch medication during an anxiety
                    attack</li>
                    <li style = {styles.listItem}>Bring someone to help their
                    handler in distress</li>
                    <li style = {styles.listItem}>Prevent strangers from approaching
                    their handler</li>
                    <li style = {styles.listItem}>Calming a person suffering from an
                    anxiety attack through distraction; licking, snuggling, etc.</li>
                    <li style = {styles.listItem}>Provide deep pressure therapy</li>
                </ul>
                <h2 style = {styles.heading}>How Much Does it Cost to Get a Service Dog? </h2>
                <p style = {styles.paragraph}>Service dogs are specially bred, highly trained, and in high demand. Therefore they are often a costly investment. For the average service dog training organization, the cost of a service dog is between $15,000 and $50,000 for a specially trained service dog. In addition to the cost of purchasing a service dog, owners/handlers are also responsible for the associated cost of ownership, including vet bills.</p>
                <h2 style = {styles.heading}>Are Service Dogs Covered by Insurance? </h2>
                <p style = {styles.paragraph}>Due to the relatively high cost of service dog ownership, health insurance often becomes a factor. Unfortunately, health insurance does not cover the cost of a service dog or any additional expenses.</p>
                <h2 style = {styles.heading}>What about Medicare, Medicaid or private insurance? </h2>
                <p style = {styles.paragraph}>Unfortunately, the answer is the same; health insurance <strong>DOES NOT</strong> cover the cost of a service dog, or the cost of ownership.</p>
                <h2 style = {styles.heading}>How Long Does it Take to Get a Service Dog? </h2>
                <p style = {styles.paragraph}>On average, it takes between two and three years for a dog to complete service dog training depending on the dog, and the specific nature of service dog training.</p>
                <h2 style = {styles.heading}>Do Service Dogs Need to be Professionally Trained? </h2>
                <p style = {styles.paragraph}>No. The ADA does not require service dogs to be professionally trained. People with disabilities have the right to train their dog themselves, or use a professional service dog training program if they wish.</p>
                <h2 style = {styles.heading}>How Can I Get My Dog Registered as a Service Dog? </h2>
                <p style = {styles.paragraph}>Your dog does not require certification to become a service dog. However it does require training specific to your disability. Before training your dog as a service dog you must first understand that it takes a special caliber of dog to undertake such an important responsibility. Though dogs of any breed can be a service dog, most dogs lack the temperament, intelligence and social skills to become a service dog. However, if you feel that your dog has what it takes to complete specialized training, earn its certification, and don the vest of the service dog, then these are the steps you need to follow.</p>
                <ol style = {styles.orderedList}>
                    <h2 style = {styles.listItem}><li>Understanding Your Dog and Disability.</li></h2>
                    <p style = {styles.paragraph}>According to the <Link to = "https://adata.org/sites/adata.org/files/files/ADA_Overview_LP2_final2017.pdf" style = {styles.a}> ADA </Link>, a service dog must be trained in a role specific to your disability. The law does not distinguish between breeds; all breeds are eligible to become services dogs, though some breeds are naturally restricted from performing some service dog roles. A Dachshund, for example, will find it very challenging to open doors, or guide a person up and down a flight of stairs. Likewise it would be very difficult for a Corgi to detect a seizure as the Corgi does not have that ability, unlike the Akita.</p>
                    <p style = {styles.paragraph}>Therefore, before you and your dog undertake service dog training you should first determine whether or not your dog has the physical ability to perform the roles necessitated by your disability.</p>
                    <h2 style = {styles.listItem}><li>Choose Who Will Train Your Service Dog.</li></h2>
                    <p style = {styles.paragraph}>Therefore, before you and your dog undertake service dog training you should first determine whether or not your dog has the physical ability to perform the roles necessitated by your disability.</p>
                    <p style = {styles.paragraph}>However, it's generally recommended that prospective service owners be at least present during the dogs training to establish a particular bond with the dog and most effectively mitigate disabling symptoms.</p>
                    <h2 style = {styles.listItem}><li>Service Dog Training</li></h2>
                    <p style = {styles.paragraph}>Service dog training is where your dog will learn the skills it needs to best assist you in its role as your service dog. There is no minimum service training requirement, though thirty hours of the training will likely be spent in public.</p>
                    <p style = {styles.paragraph}>Training hours spent in public are essential, as your dog will need to perform its role regardless of any distractions that may occur around it.</p>
                    <p style = {styles.paragraph}>Your dog will also need to be trained in "tasking", to assist with your disability. Tasking is a broad skill that can include tasks as simple as leading you from a room to detecting a medical alert and performing CPR.</p>
                    <h2 style = {styles.listItem}><li>Public Access Test</li></h2>
                    <p style = {styles.paragraph}>Once you dog has completed the necessary training to become a service dog, it is time for the Public Access Test. This is where your dog and handler will be tested on all that they have learned in service dog training, such as:</p>
                </ol>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>Controlled un/loading into and out
                    of a vehicle</li>
                    <li style = {styles.listItem}>Controlled approach to a building</li>
                    <li style = {styles.listItem}>Controlled entry and exit through
                    a doorway</li>
                    <li style = {styles.listItem}>Six-foot recall on lead</li>
                    <li style = {styles.listItem}>"Sit" and "Down" on command in
                    various situations</li>
                    <li style = {styles.listItem}>Control in a restaurant</li>
                    <li style = {styles.listItem}>Control when the leash is dropped</li>
                    <li style = {styles.listItem}>Absolutely zero aggressive
                    behavior</li>
                    <li style = {styles.listItem}>No sniffing behaviors unless
                    released to do so</li>
                    <li style = {styles.listItem}>No solicitations for food or
                    affection</li>
                    <li style = {styles.listItem}>No over-excitement and
                    hyperactivity in public</li>
                </ul>
                    <h2 style = {styles.heading}>Do Service Dogs Need to Be Certified?</h2>
                    <p style = {styles.paragraph}>No. According to the <Link to = "https://adata.org/sites/adata.org/files/files/ADA_Overview_LP2_final2017.pdf" style = {styles.a}> ADA </Link>, <strong><i>"Covered entities may not require documentation, such as proof that the animal has been certified, trained, or licensed as a service animal, as a condition for entry....  Mandatory registration of service animals is not permissible under the ADA." </i></strong></p>
                    <p style={styles.paragraph}>However, as dogs, service dogs are subject to the same local licensing and vaccination rules that are applied to all dogs.</p>
                    <h2 style = {styles.heading}>Is it Illegal to Ask for Service Dog Papers?</h2>
                    <p style = {styles.paragraph}>No. According to the <Link to = "https://adata.org/sites/adata.org/files/files/ADA_Overview_LP2_final2017.pdf" style = {styles.a}> ADA </Link>, <strong><i>"In situations where it is not obvious that the dog is a service animal, staff may ask only two specific questions: (1) is the dog a service animal required because of a disability? and (2) what work or task has the dog been trained to perform?"</i></strong></p>
                    <p style={styles.paragraph}>In all other instances staff are not allowed to ask for ANY documentation for the dog, require that the dog demonstrate its task, or inquire about the nature of the person's disability.</p>
                    <h3 style = {styles.heading}>Don't Fake Service Dog Credentials</h3>
                    <p style={styles.paragraph}>Though service dog credentials are not required by law, there are many organizations that offer service dog certification documents online for a fee. According to the Department of Justice, these documents do not convey any rights under the ADA and are not recognized as proof that the dog is a service animal.</p>
                    <p style={styles.paragraph}>It is also a federal crime to obtain fake service dog credentials for the purpose of gaining public access into restaurants, stores, and the cabin area of airplanes. The exploitation of service dog laws is a federal crime, and detrimental to the well-being of working service dogs.</p>
                    <h2 style = {styles.heading}>FAQ</h2>
                    <p style={styles.paragraph}><strong>Can a Service Dog Live With Another Dog? </strong>Yes. However, it would need to be determined whether the presence of the other dog negatively affects the service dogs ability to assist its handler.</p>
                    <p style={styles.paragraph}><strong>Can you Pet a Service Dog? </strong>No. A service dog is not a pet, it is a working dog that has a very important job to do. Unless clear consent is given by the handler that it is okay to pet the dog, then you should not touch them or make eye contact.</p>
                    <p style={styles.paragraph}><strong>Do Service Dogs Have to be on a Leash? </strong>The ADA requires that service dogs be under the control of the handler at all times. This means that the service dog must be, <strong><i>"...harnessed, leashed, or tethered while in public places unless these devices interfere with the service dog's work or the person's disability prevents use of these devices."</i></strong></p>
                    <p style={styles.paragraph}><strong>Does a Service Dog Need to Wear a Vest? </strong>No. The Americans with Disabilities Act does not require service dogs to wear a vest. However, it is highly recommended that they wear a vest to alert people in your surroundings that your dog is working and should not be distracted from their task at hand.</p>
                    <h3 style = {styles.heading}>Did you know?</h3>
                    <ol style={styles.orderedList}>
                        <li style = {styles.listItem}>If you see a service dog without its handler, that is a good indication that the handler may need assistance. Under those circumstances you should follow the dog back to its handler to investigate and determine if you should call emergency services.</li>
                        <li style = {styles.listItem}>Every individual, dog and disability is entirely unique, therefore so is every service dog team.</li>
                        <li style = {styles.listItem}>Service dogs need time off too. Service dogs are of course, dogs, which means they need all the socialization, exercise and nutrition as other dogs. Just be sure not to socialize with them when they are working.</li>
                        <li style = {styles.listItem}>It's considered rude to approach greet a service dog before greeting the handler. Proper etiquette is to ignore the service dog all together.</li>
                        <li style = {styles.listItem}>Service dog handlers may not be visibly disabled. This does not give anyone the right to approach, distract or pet the service dog.</li>
                        <li style = {styles.listItem}>Guide dogs are trained to go to the bathroom on-demand to make it easier for the visually impaired to pick it up.</li>
                        <li style = {styles.listItem}>The first guide dog in the United States was a German Shepherd female, named Buddy. She faithfully guided Morris Frank who established the first guide dog school in the U.S.</li>
                        <li style = {styles.listItem}>The "Dog of the Millennium" was a service dog named Endal, who is famous for his amazing ability to assist his disabled owner with virtually every aspect of his life.</li>
                        <li style = {styles.listItem}>During the 9/11 attacks on the World Trade Centers a Golden Retriever service dog named Roselle safely led her blind owner Michael Hingson from the 78th floor of the North Tower of the World Trade Center</li>
                        <li style = {styles.listItem}>During the 9/11 attacks on the World Trade Centers a Labrador Retriever service dog led his blind owner Omar Rivera from 71st floor of Tower 1 of the World Trade Center</li>
                    </ol>
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
    heading: {
        fontWeight: '600',
        width: '60%',
        marginTop: '1em'
    },
    orderedList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    a: {
        color: '#ff7b00',
        textDecoration: 'none',
        fontWeight: '600'
    },
    listItem: {
        width: '57%',
        lineHeight: '1.6'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
        lineHeight: '1.6'
    }
}