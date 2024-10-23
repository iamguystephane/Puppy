import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/grooming-switch-baths.jpg'

export default function GroomingSwitchBath(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> Keeping your dog clean and fresh between baths </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - December 10 2015 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style={styles.container}>
                <p style = {styles.paragraph}>Fluffy comes home from the groomer's looking prim and perfect, with a coat as white as snow. The next day on your walk, she rolls around in a pile of manure, practically undoing the maintenance of yesterday, but it's too early for another bath. What's a dog owner to do?</p>
                <p style = {styles.paragraph}> Taking your dog to the groomer's can get expensive and time-consuming, especially if your pup is one to get into all types of smelly trouble. We've got you covered with a list of tips and products to keep Fluffy smelling fresh before her next bath and after playtime.</p>
                <h1 style = {styles.heading}>Brush Early and Often</h1>
                <p style = {styles.paragraph}>You might have had the experience of trying to comb a massive knot from your pup's fur. Mats in your dog's fur are not only unsightly, but they can also cause pain and discomfort for your dog. The good news is that matted fur can easily be prevented with regularly brushing. For long- or thick-haired breeds, daily brushing is recommended. You can even purchase a fur-detangling spray to make your dog's fur easier to work with before brushing.</p>
                <h1 style = {styles.heading}>Try Doggy Wipes</h1>
                <p style = {styles.paragraph}>Doggy wipes are an easy and convenient way to freshen up your pup when there's no time for a full blown bath. You can use them on your dog's entire body, or on particularly dirty areas like the paws or rear-end. While they aren't a replacement for a proper bath, many dog owners love using wipes like these when they're on the go.</p>
                <h1 style = {styles.heading}>Dry Shampoo: Not Just for Humans</h1>
                <p style = {styles.paragraph}>For those of you unfamiliar with the recent fad, dry shampoo is a powder that is used to remove excess oil from the hair while deodorizing and cleaning. Just rub the formula into your pup's fur and brush it out. (She'll most likely take care of the rest by giving a big shake.) Once again, this is not a replacement for bathing, but rather a quick on-the-go solution.</p>
                <h1 style = {styles.heading}>Spritz on Some Fragrance</h1>
                <p style = {styles.paragraph}>Doggy perfumes or colognes can be used in the same way that human fragrances are used--to add an extra bit of "oomph" on a special occasion, or alternatively, to hide an unwanted stench. While some doggy perfumes are made to mimic popular human brands, you should NEVER spray your dog with a human fragrance, as it can cause severe irritation.</p>
                <h1 style = {styles.heading}>Keep Her Bedding Clean</h1>
                <p style = {styles.paragraph}>A dirty bed not only makes for a dirty dog, but a smelly general living space. Alleviate the lingering odor of dirty dog bedding by cleaning out your dog's bed, blankets and other possessions on a regular basis. Products like NuVet Stain & Odor Remover can effectively eliminate both physical and airborne signs of a dirty doghouse.</p>
                <h1 style = {styles.heading}>Give Her a Teeth Cleaning Treat</h1>
                <p style = {styles.paragraph}>You can spray and wipe your pooch all you want, but without good dental hygiene, you'll surely smell your pup before you see her. A teeth cleaning treat like this one can keep her teeth clean while giving her something to chew on.</p>
                <p style = {styles.paragraph}>You don't have to worry about a dirty pup when your next grooming appointment is still weeks away. Simple hygiene pup-keep can keep her looking and smelling her best, both before and after the groomer's!</p>
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
        width: '60%',
        marginTop: '1em'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}