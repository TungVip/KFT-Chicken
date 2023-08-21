import { Typography } from '@mui/material';
import React, { useRef, useState, useEffect,createRef } from 'react';
import {Button} from '@mui/material';
import {Link} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function CustomItem({source, name, price, newPrice}) {
  return (
    <>
    <div>
      <div className='image-container'>
        <img className='zoom-image' src={process.env.PUBLIC_URL + source} alt="fish" width={"100%"} height={"auto"}/>
      </div>
        
        <Typography fontSize={22}>{name}</Typography>
        <Typography sx={{mb: "10px"}}>Price: <span style={{color: "brown", fontSize: "20px", fontWeight: "bold"}}><NumberFormatted value={newPrice}/> VND</span> <span style={{color:"gray"}}><del><NumberFormatted value={price}/> VND</del></span></Typography>
        <Link href="">
          <Button sx={{backgroundColor: "#a22a2a", color: "white", width:"100%", borderRadius: "8px",
        "&:hover": {backgroundColor: "#cb3434"}}}>Click For Detail</Button>
        </Link>
    </div>
    </>
  )
  
}

function NumberFormatted({ value }) {
  const formattedValue = value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    useGrouping: true,
    maximumFractionDigits: 0,
  });

  // Replace commas with dots
  const dotFormattedValue = formattedValue.replace(/,/g, '.');

  return <span>{dotFormattedValue}</span>;
}

// const Carousel = ({ fullItems}) => {
//   const listRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemWidth = 200; // Adjust this based on your item width
//   const autoScrollInterval = 5000; // Auto-scroll interval in milliseconds
  
//   const sizeLg = 4;
//   const sizeMd = 3;
//   const sizeXs = 1;
//   const arr = Array.from({ length: sizeLg }, (_, index) => index);
//   // Perform inline operations on the array
//   const itemLg = arr.map(item => fullItems[(currentIndex+item)%(fullItems.length)]);  
//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % fullItems.length;
//       setCurrentIndex(nextIndex);
//     }, autoScrollInterval);

//     return () => {
//       clearInterval(scrollInterval);
//     };
//   }, [currentIndex]);

//   useEffect(() => {
//     listRef.current.scrollTo({ left: currentIndex * itemWidth, behavior: 'smooth' });
//   }, [currentIndex]);

//   const handleClickRight = () => {
//     const nextIndex = (currentIndex + 1) % fullItems.length;
//     setCurrentIndex(nextIndex);
//   };

//   const handleClickLeft = () => {
//     const prevIndex = (currentIndex - 1 + fullItems.length) % fullItems.length;
//     setCurrentIndex(prevIndex);
//   };

//   return (
//     <div className="carousel">
//       <button className="arrow left" onClick={handleClickLeft}>
//         &lt;
//       </button>
//       <div className="list" ref={listRef}>
//         {itemLg.map((item, index) => (
//           <div
//             className="item"
//             key={index}
//           >
//             <CustomItem source={item.source} name={item.name} price={item.price} newPrice={item.newPrice}/>
//           </div>
//         ))}
//       </div>
//       <button className="arrow right" onClick={handleClickRight}>
//         &gt;
//       </button>
//     </div>
//   );
// };
const Carousel = ({ fullItems, setFullItems}) => {
  const itemRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(3);
  const itemWidth = `${23}vw`; // Adjust this based on your item width
  const autoScrollInterval = 5000; // Auto-scroll interval in milliseconds

  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     const nextIndex = (currentIndex + 1) % fullItems.length;
  //     setCurrentIndex(nextIndex);
  //   }, autoScrollInterval);

  //   return () => {
  //     clearInterval(scrollInterval);
  //   };
  // }, [currentIndex]);

  useEffect(() => {
    // console.log(currentIndex);
    itemRefs.current[3]?.scrollIntoView({behavior: "smooth", inline: "end"});
    // listRef.current.scrollTo({ left: currentIndex * itemWidth, behavior: 'smooth' });
    // listRef.current.scrollTo({ left: "10px", behavior: 'smooth' });
    // console.log("Current Index ", currentIndex);
  }, [currentIndex]);

  const handleClickRight = () => {
    // let nextIndex = (currentIndex + 1) % fullItems.length;
    // if (nextIndex === 0) nextIndex = 3;
    // setCurrentIndex(nextIndex);
    const temp_arr = [...fullItems.slice(1), fullItems[0]];
    setFullItems(temp_arr);
  };

  const handleClickLeft = () => {
    let prevIndex = (currentIndex - 1 + fullItems.length) % fullItems.length;
    if (prevIndex < 3) prevIndex = fullItems.length-1;
    setCurrentIndex(prevIndex);
  };


  return (
    <div className="carousel">
      <button className="arrow left" onClick={handleClickLeft}>
        <ArrowCircleLeftIcon sx={{fontSize: "50px", border: "none", color: "#9a3324", backgroundColor: "#f8b02d", borderRadius: "50%"}}/>
      </button>
      <div className="list">
        {fullItems.map((item, index) => (
          <div
            className="item"
            key={index}
            ref={el => (itemRefs.current[index] = el)}
          >
            <CustomItem source={item.source} name={item.name} price={item.price} newPrice={item.newPrice}/>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={handleClickRight}>
        <ArrowCircleRightIcon sx={{fontSize: "50px", border: "none", color: "#9a3324", backgroundColor: "#f8b02d", borderRadius: "50%"}}/>
      </button>
    </div>
  );
};
export default function App() {

  // Add item here
  const [fullItems, setFullItems] = useState([
    {source: "/Combo_Vui_Ve_B.png", name: "Combo Vui Ve A", price: 150000, newPrice: 120000},
    {source: "/Combo_Vui_Ve_D.png", name: "Combo Vui Ve B", price: 247000, newPrice: 199000},
    {source: "/Combo_Vui_Ve_B.png", name: "Combo Vui Ve C", price: 180000, newPrice: 160000},
    {source: "/Combo_Vui_Ve_D.png", name: "Combo Vui Ve D", price: 247000, newPrice: 199000},
    {source: "/Combo_Vui_Ve_B.png", name: "Combo Vui Ve E", price: 150000, newPrice: 120000},
    {source: "/Combo_Vui_Ve_D.png", name: "Combo Vui Ve F", price: 247000, newPrice: 199000},
    {source: "/Combo_Vui_Ve_B.png", name: "Combo Vui Ve G", price: 150000, newPrice: 120000},
    {source: "/Combo_Vui_Ve_D.png", name: "Combo Vui Ve H", price: 247000, newPrice: 199000},
    {source: "/Combo_Vui_Ve_B.png", name: "Combo Vui Ve I", price: 150000, newPrice: 120000},
    {source: "/Combo_Vui_Ve_D.png", name: "Combo Vui Ve J", price: 247000, newPrice: 199000},
  ]);

  return (
    <div className="App">
      <h1 className='menu'>TODAY'S MENUS</h1>
      <Carousel fullItems={fullItems} setFullItems={setFullItems}/>

    </div>

  );
}
