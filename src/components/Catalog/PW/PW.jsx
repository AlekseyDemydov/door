
// import { NavLink } from 'react-router-dom';
// import React, { useState }  from 'react';
// import PWcatalog from './PWcatalog/PWcatalog';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';


// import PWmain from './img/PWmain.webp';


// import creem from './img/allDoor/color/creem.jpg';
// import black from './img/allDoor/color/black.jpg';
// import Grafit from './img/allDoor/color/Grafit.jpg';
// import light_gray from './img/allDoor/color/light_gray.jpg';
// import Perlamutr_Belyy from './img/allDoor/color/Perlamutr_Belyy.jpg';
// import Perlamutr_Bronza from './img/allDoor/color/Perlamutr_Bronza.jpg';
// import Perlamutr_Zoloto from './img/allDoor/color/Perlamutr_Zoloto.jpg';
// import white from './img/allDoor/color/white.jpg';

// import ds from './img/inserDoor/insert/Dub-Sonoma.jpg'
// import dt from './img/inserDoor/insert/Dub_tobaco.jpg'
// import ks from './img/inserDoor/insert/Kashtan_Svetlyy.jpg'

// import lb from './img/glass/color/lakobelBlack.jpg'
// import lp from './img/glass/color/lakobelPer.jpg'
// import ls from './img/glass/color/lakobelSilver.jpg'
// import lw from './img/glass/color/lakobelWhite.jpg'
// import z from './img/glass/color/zerkalo.jpg'


// import s from './PW.module.scss';

// const importAll = context => context.keys().map(context);

// const blackDoor = importAll(require.context('./img/allDoor/black', false, /\.(png)$/));
// // const creemDoor = importAll(require.context('./img/allDoor/creem', false, /\.(png)$/));
// // const grafitDoor = importAll(require.context('./img/allDoor/Grafit', false, /\.(png)$/));
// // const whiteDoor = importAll(require.context('./img/allDoor/white', false, /\.(png)$/));
// // const litegreyDoor = importAll(require.context('./img/allDoor/litegrey', false, /\.(png)$/));
// // const perwhiteDoor = importAll(require.context('./img/allDoor/perwhite', false, /\.(png)$/));
// // const perbronzeDoor = importAll(require.context('./img/allDoor/perbronze', false, /\.(png)$/));
// // const pergoldDoor = importAll(require.context('./img/allDoor/pergold', false, /\.(png)$/));

// // const dsPlusBlack = importAll(require.context('./img/inserDoor/ds/dsPlusBlack', false, /\.(png)$/));
// // const dsPlusBronze = importAll(require.context('./img/inserDoor/ds/dsPlusBronze', false, /\.(png)$/));
// // const dsPlusCreem = importAll(require.context('./img/inserDoor/ds/dsPlusCreem', false, /\.(png)$/));
// // const dsPlusGold = importAll(require.context('./img/inserDoor/ds/dsPlusGold', false, /\.(png)$/));
// // const dsPlusGrafit = importAll(require.context('./img/inserDoor/ds/dsPlusGrafit', false, /\.(png)$/));
// // const dsPlusLiteGray = importAll(require.context('./img/inserDoor/ds/dsPlusLiteGray', false, /\.(png)$/));
// // const dsPlusPerWhite = importAll(require.context('./img/inserDoor/ds/dsPlusPerWhite', false, /\.(png)$/));
// // const dsPlusWhite = importAll(require.context('./img/inserDoor/ds/dsPlusWhite', false, /\.(png)$/));

// // const dtPlusBlack = importAll(require.context('./img/inserDoor/dt/dtPlusBlack', false, /\.(png)$/));
// // const dtPlusBronze = importAll(require.context('./img/inserDoor/dt/dtPlusBronze', false, /\.(png)$/));
// // const dtPlusCreem = importAll(require.context('./img/inserDoor/dt/dtPlusCreem', false, /\.(png)$/));
// // const dtPlusGold = importAll(require.context('./img/inserDoor/dt/dtPlusGold', false, /\.(png)$/));
// // const dtPlusGrafit = importAll(require.context('./img/inserDoor/dt/dtPlusGrafit', false, /\.(png)$/));
// // const dtPlusLiteGray = importAll(require.context('./img/inserDoor/dt/dtPlusLiteGray', false, /\.(png)$/));
// // const dtPlusPerWhite = importAll(require.context('./img/inserDoor/dt/dtPlusPerWhite', false, /\.(png)$/));
// // const dtPlusWhite = importAll(require.context('./img/inserDoor/dt/dtPlusWhite', false, /\.(png)$/));

// // const ksPlusBlack = importAll(require.context('./img/inserDoor/ks/ksPlusBlack', false, /\.(png)$/));
// // const ksPlusBronze = importAll(require.context('./img/inserDoor/ks/ksPlusBronze', false, /\.(png)$/));
// // const ksPlusCreem = importAll(require.context('./img/inserDoor/ks/ksPlusCreem', false, /\.(png)$/));
// // const ksPlusGold = importAll(require.context('./img/inserDoor/ks/ksPlusGold', false, /\.(png)$/));
// // const ksPlusGrafit = importAll(require.context('./img/inserDoor/ks/ksPlusGrafit', false, /\.(png)$/));
// // const ksPlusLiteGray = importAll(require.context('./img/inserDoor/ks/ksPlusLiteGray', false, /\.(png)$/));
// // const ksPlusPerWhite = importAll(require.context('./img/inserDoor/ks/ksPlusPerWhite', false, /\.(png)$/));
// // const ksPlusWhite = importAll(require.context('./img/inserDoor/ks/ksPlusWhite', false, /\.(png)$/));

// // const lbPlusBlack = importAll(require.context('./img/glass/lb/lbPlusBlack', false, /\.(png)$/));
// // const lbPlusBronze = importAll(require.context('./img/glass/lb/lbPlusBronze', false, /\.(png)$/));
// // const lbPlusCreem = importAll(require.context('./img/glass/lb/lbPlusCreem', false, /\.(png)$/));
// // const lbPlusGold = importAll(require.context('./img/glass/lb/lbPlusGold', false, /\.(png)$/));
// // const lbPlusGrafit = importAll(require.context('./img/glass/lb/lbPlusGrafit', false, /\.(png)$/));
// // const lbPlusLiteGray = importAll(require.context('./img/glass/lb/lbPlusLiteGray', false, /\.(png)$/));
// // const lbPlusPerWhite = importAll(require.context('./img/glass/lb/lbPlusPerWhite', false, /\.(png)$/));
// // const lbPlusWhite = importAll(require.context('./img/glass/lb/lbPlusWhite', false, /\.(png)$/));

// // const lpPlusBlack = importAll(require.context('./img/glass/lp/lpPlusBlack', false, /\.(png)$/));
// // const lpPlusBronze = importAll(require.context('./img/glass/lp/lpPlusBronze', false, /\.(png)$/));
// // const lpPlusCreem = importAll(require.context('./img/glass/lp/lpPlusCreem', false, /\.(png)$/));
// // const lpPlusGold = importAll(require.context('./img/glass/lp/lpPlusGold', false, /\.(png)$/));
// // const lpPlusGrafit = importAll(require.context('./img/glass/lp/lpPlusGrafit', false, /\.(png)$/));
// // const lpPlusLiteGray = importAll(require.context('./img/glass/lp/lpPlusLiteGray', false, /\.(png)$/));
// // const lpPlusPerWhite = importAll(require.context('./img/glass/lp/lpPlusPerWhite', false, /\.(png)$/));
// // const lpPlusWhite = importAll(require.context('./img/glass/lp/lpPlusWhite', false, /\.(png)$/));

// // const lsPlusBlack = importAll(require.context('./img/glass/ls/lsPlusBlack', false, /\.(png)$/));
// // const lsPlusBronze = importAll(require.context('./img/glass/ls/lsPlusBronze', false, /\.(png)$/));
// // const lsPlusCreem = importAll(require.context('./img/glass/ls/lsPlusCreem', false, /\.(png)$/));
// // const lsPlusGold = importAll(require.context('./img/glass/ls/lsPlusGold', false, /\.(png)$/));
// // const lsPlusGrafit = importAll(require.context('./img/glass/ls/lsPlusGrafit', false, /\.(png)$/));
// // const lsPlusLiteGray = importAll(require.context('./img/glass/ls/lsPlusLiteGray', false, /\.(png)$/));
// // const lsPlusPerWhite = importAll(require.context('./img/glass/ls/lsPlusPerWhite', false, /\.(png)$/));
// // const lsPlusWhite = importAll(require.context('./img/glass/ls/lsPlusWhite', false, /\.(png)$/));

// // const lwPlusBlack = importAll(require.context('./img/glass/lw/lwPlusBlack', false, /\.(png)$/));
// // const lwPlusBronze = importAll(require.context('./img/glass/lw/lwPlusBronze', false, /\.(png)$/));
// // const lwPlusCreem = importAll(require.context('./img/glass/lw/lwPlusCreem', false, /\.(png)$/));
// // const lwPlusGold = importAll(require.context('./img/glass/lw/lwPlusGold', false, /\.(png)$/));
// // const lwPlusGrafit = importAll(require.context('./img/glass/lw/lwPlusGrafit', false, /\.(png)$/));
// // const lwPlusLiteGray = importAll(require.context('./img/glass/lw/lwPlusLiteGray', false, /\.(png)$/));
// // const lwPlusPerWhite = importAll(require.context('./img/glass/lw/lwPlusPerWhite', false, /\.(png)$/));
// // const lwPlusWhite = importAll(require.context('./img/glass/lw/lwPlusWhite', false, /\.(png)$/));

// // const zPlusBlack = importAll(require.context('./img/glass/z/zPlusBlack', false, /\.(png)$/));
// // const zPlusBronze = importAll(require.context('./img/glass/z/zPlusBronze', false, /\.(png)$/));
// // const zPlusCreem = importAll(require.context('./img/glass/z/zPlusCreem', false, /\.(png)$/));
// // const zPlusGold = importAll(require.context('./img/glass/z/zPlusGold', false, /\.(png)$/));
// // const zPlusGrafit = importAll(require.context('./img/glass/z/zPlusGrafit', false, /\.(png)$/));
// // const zPlusLiteGray = importAll(require.context('./img/glass/z/zPlusLiteGray', false, /\.(png)$/));
// // const zPlusPerWhite = importAll(require.context('./img/glass/z/zPlusPerWhite', false, /\.(png)$/));
// // const zPlusWhite = importAll(require.context('./img/glass/z/zPlusWhite', false, /\.(png)$/));





// const PW = () => {
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedInsert, setSelectedInsert] = useState(null);
//   const [selectedGlass, setSelectedGlass] = useState(null);


//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleInsertSelect = (insert) => {
//     setSelectedInsert(insert);
//   };

//   const handleGlassSelect = (glass) => {
//     setSelectedGlass(glass);
//   };

//   const filterImagesByColor = (color, images) => {
//     if (!color) return images; // Якщо колір не вибрано, повертаємо всі зображення
  
//     return images.filter(image => {
//       // Перевіряємо, чи зображення має відповідний колір
//       return image.includes(color);
//     });
//   };
  
//   // Функція для фільтрації зображень за вставкою
//   const filterImagesByInsert = (insert, images) => {
//     if (!insert) return images; // Якщо вставку не вибрано, повертаємо всі зображення
  
//     return images.filter(image => {
//       // Перевіряємо, чи зображення має відповідну вставку
//       return image.includes(insert);
//     });
//   };
  
//   // Функція для фільтрації зображень за склом
//   const filterImagesByGlass = (glass, images) => {
//     if (!glass) return images; // Якщо скло не вибрано, повертаємо всі зображення
  
//     return images.filter(image => {
//       // Перевіряємо, чи зображення має відповідне скло
//       return image.includes(glass);
//     });
//   };

//   const filteredImages = () => {
//     const colorImages = filterImagesByColor(selectedColor, blackDoor);
//     const insertImages = filterImagesByInsert(selectedInsert, colorImages);
//     const glassImages = filterImagesByGlass(selectedGlass, insertImages);
  
//     return glassImages;
//   };

//   return (
//     <>
//       <div className={s.peregorodkibox}>
//         <div className={s.mainBOx}>
//           <h1 className={s.titleper}>МОДЕЛЬ PW</h1>
//           <div>
//             <ul className={s.infolistper}>
//               <li className={s.infoper}>
//                 Двері в ногу з часом, із сучасним дизайном та виробничими
//                 інноваціями, здатні задовольнити високі естетичні запити. Двері
//                 розширюють можливості сприйняття покриття, дизайну та кольору.
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className={s.perslider}>
//           <img src={PWmain} alt="РАmain" className={s.imgMainPa} />
//         </div>
//       </div>
//       <div className={s.bgHero}></div>
//       <div className={s.seriasBox}>
//         <div>
//           <div>
//             <h3>СЕРІЇ</h3>
//             <NavLink className={s.serias}>
//               PW
//             </NavLink>
//             <h4 className={s.serias}>
//               PM
//             </h4>
//             <h4 className={s.serias}>
//               P
//             </h4>
//             <h4 className={s.serias}>
//               U
//             </h4>
//           </div>
//           <div>
//             <h3>КОЛІР</h3>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>чорний</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={black}
//                 alt={black}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>крем</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={creem}
//                 alt={creem}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>графіт</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={Grafit}
//                 alt={Grafit}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>лайт грей</Tooltip>}
              
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={light_gray}
//                 alt={light_gray}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>Перламутр білий</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={Perlamutr_Belyy}
//                 alt={Perlamutr_Belyy}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>перламутр бронза</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={Perlamutr_Bronza}
//                 alt={Perlamutr_Bronza}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>перламутр золото</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={Perlamutr_Zoloto}
//                 alt={Perlamutr_Zoloto}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>білий</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={white}
//                 alt={white}
//                 onClick={() => handleColorSelect(color)}
//               />
//             </OverlayTrigger>
//           </div>
//           <div>
//             <h3>ВСТАВКА</h3>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>дуб тобакко</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={dt}
//                 alt={dt}
//                 onClick={() => handleInsertSelect(insert)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>дуб санома</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={ds}
//                 alt={ds}
//                 onClick={() => handleInsertSelect(insert)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>каштан світлий</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={ks}
//                 alt={ks}
//                 onClick={() => handleInsertSelect(insert)}
//               />
//             </OverlayTrigger>
//           </div>



//           <div>
//             <h3>СКЛО</h3>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>LACOBEL білий</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={lw}
//                 alt={lw}
//                 onClick={() => handleGlassSelect(glass)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>LACOBEL перламутр</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={lp}
//                 alt={lp}
//                 onClick={() => handleGlassSelect(glass)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>LACOBEL срібло</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={ls}
//                 alt={ls}
//                 onClick={() => handleGlassSelect(glass)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>LACOBEL чорний</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={lb}
//                 alt={lb}
//                 onClick={() => handleGlassSelect(glass)}
//               />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="top"
//               delay={{ show: 250, hide: 400 }}
//               overlay={<Tooltip>ДЗЕРКАЛО</Tooltip>}
//             >
//               <img
//                 className={s.imgCoolor}
//                 src={z}
//                 alt={z}
//                 onClick={() => handleGlassSelect(glass)}
//               />
//             </OverlayTrigger>
//           </div>
//         </div>
//         <div className={s.imgBox}>
//         {filteredImages.map((image, index) => (
//           <img key={index} src={image} alt={`Result ${index}`} />
//         ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default PW;