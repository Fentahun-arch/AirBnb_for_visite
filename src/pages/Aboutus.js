// import React from 'react';
// import './Aboutus.css'
//import {Card} from '../GetComponents';

// const data = [
//     {
//         id: 1,
//         cardHeader: false,
//         cardContent: {
//             img: 'https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg',
//             caption: 'Gift of our nature',
//         },

//         cardFooter: {
//             title: 'Gift of our nature',
//             subtitle: 'Travel from home with Online Experiences.',
//         },
//     },
//     {
//         id: 2,
//         cardHeader: false,
//         cardContent: {
//             img:'https://media.istockphoto.com/photos/couple-in-russian-traditional-dress-on-nature-picture-id470322470?s=612x612',
//             caption: 'Online Experiences',
//         },

//         cardFooter: {
//             title: 'Online Experiences',
//             subtitle: 'Live, interactive activities led by Hosts.',
//         },
//     },
//     {
//         id: 3,
//         cardHeader: false,
//         cardContent: {
//             img: 'http://www.moscow-hotels.net/images/hotels/cosmos-hotel/cosmos-hotel-moscow.jpg',
//             caption: 'Cosmos Hotel',
//         },

//         cardFooter: {
//             title: 'Cosmos Hotel',
//             subtitle: 'Large standard hotel with superior facility in northern Moscow.',
//         },
//     },
//      {
//         id: 3,
//         cardHeader: false,
//         cardContent: {
//             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVI1MbN809cC-xajfxkdSv3mpMbYCCkBSXw&usqp=CAU',
//             caption: 'washington hospital',
//         },

//         cardFooter: {
//             title: 'washington hospital',
//             subtitle: 'Adventist Healthcare',
//         },
//     },
// ]
// function Aboutus() {
//   return(
//   <div className='aboutus'>
//       <h1>Hello Dear, Welcome!
      
      
//       </h1>
         
//         <section className='discoverContainer MT2'>
//             <h2 className='h2'>We are airbnb's hosts</h2>
//             <p className='sectionSubtitle'>
//                 Unique activities with local experts—in person or online.
//             </p>
//             <div className='cardsContainer MT2'>
//                 {data.map(card => {
//                     const {id, cardHeader, cardContent, cardFooter} = card
//                     return (
//                         <Card
//                             key={id}
//                             cardHeaderContent={cardHeader}
//                             cardContent={cardContent}
//                             cardFooterContent={cardFooter}
//                         />
//                     )
//                 })}
//             </div>
//         </section>
    
//   </div>
//   );
// }

// export default Aboutus;

import React from 'react'
import './Aboutus.css'

class Aboutus extends React.Component{
    render(){
        return(
          <div className='body'>
          
         
	<div class="container">
		<div class="nav">
			<div class="logo"> </div>

		</div>
		<div class="about-us">
			<div class="who-we-are">
				<h3>Who we are</h3>
				<span>We are Students in Addis Ababa Science and 
        Technology university (AASTU) 
        in the  department of Software Engineering.</span>
			</div>
			<div class="cards">
				<div class="card">
					<div class="card-img card-img1"></div>
					<div class="card-body">
						<h3 className='Fn'>Fentahun</h3>
						<span className='stu'>Student</span>
					
					</div>
					</div>
			
			
			<div class="card">
					<div class="card-img card-img2"></div>
					<card class="card-body">
						<h3 className='Es'>Esubalew</h3>
						<span className='st'>Student</span>

					</card>
				</div>
			
			<div class="card">
					<div class="card-img card-img3"></div>
					<card class="card-body">
						<h3 className='ea'>Eyoel A</h3>
						<span className='std'>Student</span>
					
					</card>
				</div>
			
			<div class="card">
					<div class="card-img card-img4"></div>
					<card class="card-body">
						<h3>Eyoel Z</h3>
						<span>Student</span>

					</card>
          
				</div>
		
			
		</div>

	<div class="social-media">
				<i class="fa fa-github" style= {{fontSize:"24px"}}></i>
			<i class="fa fa-linkedin" style= {{fontSize:"24px"}}></i>
		<i class="fa fa-twitter" style= {{fontSize:"24px"}}></i>
		<i class="fa fa-facebook" style= {{fontSize:"24px"}}></i>
			</div>
	</div>

         </div>
           <h4 className='info'> AirBnb is a vital website for visiting different places in the world</h4>
         </div>
        );
    }
}
export default Aboutus;