import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Product from "./Product"
import Redirect from "react-router-dom/Redirect";
import Nav_User from "./Nav_User";
import NavBar from "./NavBar";


class Home extends Component {
  state={
    click:false,
    card:""
  }
  render() {
    // console.log(this.state.click)
    if(this.state.click){
      
      // return <Product category={this.state.card}/>
      return <Redirect to={{
        pathname: '/' + this.state.card
     }}/>
    }
    
    
    return (
      //   {/* Slider */}
      //         <img src={require("../assets/img/clothing.png")} alt="Clothing Pic" />
      //         <img src={require("../assets/img/furnitures.png")} alt="Furniture Pic" />
      //         <img src={require("../assets/img/shoes.png")} alt="Shoes Pic" />
      //         <img src={require("../assets/img/mobiles.png")} alt="Mobiles Pic" />
      
      <body style={{backgroundColor:"#D3D3D3"}}>
      <Carousel>
      <Carousel.Item onClick={()=>this.setState({card:"Clothing", click:true})}>
      {/* <Carousel.Item onClick={()=><Redirect to="/Clothing" push/>}> */}
        <img
          className="offset-2"
          style={{ 
            width: "900px",
            height: "700px",
            // maxHeight: "245px",
            marginTop:"50px",
            display: "block"
            }}
          src={require("../assets/img/clothing.png")}
          alt="Clothing Pic"
          
        />
        
      </Carousel.Item>

      <Carousel.Item onClick={()=>this.setState({card:"Furniture", click:true})}>
       
        <img
           className="offset-2"
           style={{ 
             width: "900px",
             height: "700px",
             // maxHeight: "245px",
             marginTop:"50px",
             display: "block"
             }}
          src={require("../assets/img/furnitures.png")} alt="Furniture Pic"
          
        />
       
      </Carousel.Item>

      <Carousel.Item onClick={()=>this.setState({card:"Shoes", click:true})}>
        <img
           className="offset-2"
           style={{ 
             width: "900px",
             height: "700px",
             // maxHeight: "245px",
             marginTop:"50px",
             display: "block"
             }}
          src={require("../assets/img/shoes.png")} alt="Shoes Pic"
          
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>this.setState({card:"Electronics", click:true})}>
        <img
          className="offset-2"
          style={{ 
            width: "900px",
            height: "700px",
            // maxHeight: "245px",
            marginTop:"50px",
            display: "block"
            }}
          src={require("../assets/img/mobiles.png")} alt="Mobiles Pic"
          
        />
      </Carousel.Item>
    </Carousel>
    </body>
   
  
    );
  }
}

export default Home;
// import React, { useState,Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

// const items = [
//   {
//     src: require("../assets/img/clothing.png"),
//     altText: 'Slide 1',
    
//   },
//   {
//     src:require("../assets/img/furnitures.png"),    
//     altText: 'Slide 2',
//   },
//   {
//     src:require("../assets/img/shoes.png"),
//     altText: 'Slide 3',
//   },
//   {
//     src:require("../assets/img/mobiles.png"),
//     altText: 'Slide 4',
//   }
// ];

// const Example = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   }

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} 
//         className="offset-2"
//                   style={{ 
//                     width: "900px",
//                     height: "700px",
//                     // maxHeight: "245px",
//                     marginTop:"50px",
//                     display: "block"
//                     }}/>
//         {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//     >
//       <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel>
//   );
// }

// export default Example;