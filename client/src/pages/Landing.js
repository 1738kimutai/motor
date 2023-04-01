// import React from 'react'

// function Landing() {
//   return (
//     <div className='landing'>
//       <div className='right'>
//           <h4>
//           Motor World Kenya
//             </h4>
//           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   ibus nibh. Duis vel tellus consectetur, iaculis ligula ac, convallis lacus.</span>
//         </div>
       
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
        
        
//     </div>
//   )
// }

// export default Landing


// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleShowCars = () => {
//     setShowCars(true);
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <h4>Motor World Kenya</h4>
//         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   ibus nibh. Duis vel tellus consectetur, iaculis ligula ac, convallis lacus.</span>
//         <button onClick={handleShowCars}>Show Cars</button>
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//       {showCars && (
//         <div className='card'>
//           {cars.map(car => (
//             <div key={car.id} className='car'>
//               <h4>{car.name}</h4>
//               <img src={car.image_url} alt={car.make + " " + car.model} />
//               <p>Model: {car.model}</p>
//               <p>Transmission: {car.transmission}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;




//ALTERNATIVE 

// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleToggleCars = () => {
//     setShowCars(!showCars);
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <div className='motor'>
//         <h4>Motor World Kenya</h4>
//         <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
//             To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
//         </div>
//         <button onClick={handleToggleCars} className="btn">{showCars ? 'Hide Cars' : 'Show Cars'}</button>
        
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//       {showCars && (
//         <div className='card'>
//           {cars.map(car => (
//             <div key={car.id} className='car'>
//               <h4>{car.name}</h4>
//               <img src={car.image_url} alt={car.make + " " + car.model} />
//               <p>Model: {car.model}</p>
//               <p>Transmission: {car.transmission}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;



//BEST SO FAR  
// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleToggleCars = () => {
//     setShowCars(!showCars);
//   }

//   const handleCarClick = (car) => {
//     setSelectedCar(car);
//   }

//   const handleBackClick = () => {
//     setSelectedCar(null);
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <div className='motor'>
//         <h4>Motor World Kenya</h4>
//         <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
//             To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
//         </div>
//         <button onClick={handleToggleCars} className="btn">{showCars ? 'Back Home' : 'Available Cars'}</button>
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//       {showCars && !selectedCar && (
//         <div className='card'>
//           {cars.map(car => (
//             <div key={car.id} className='car'>
//               <h4>{car.name}</h4>
//               <img src={car.image_url} alt={car.make + " " + car.model} />
//               <p>Model: {car.model}</p>
//               <p>Transmission: {car.transmission}</p>
//               <button onClick={() => handleCarClick(car)} className='details'>View Car Details</button>
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedCar && (
//         <div className='car-details'>
//           <h4>{selectedCar.name}</h4>
//           <img src={selectedCar.image_url} alt={selectedCar.make + " " + selectedCar.model} />
//           <p>Model: {selectedCar.model}</p>
//           <p>Transmission: {selectedCar.transmission}</p>
//           <p>Price: {selectedCar.price}</p>
//           <p>Mileage: {selectedCar.mileage}</p>
//           <button onClick={handleBackClick} className="details">Back to Cars</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;



//ADDING THE BUY BUTTON 
// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleToggleCars = () => {
//     setShowCars(!showCars);
//   }

//   const handleCarClick = (car) => {
//     setSelectedCar(car);
//   }

//   const handleBackClick = () => {
//     setSelectedCar(null);
//   }

//   const handleBuyClick = () => {
//     window.location.href = "/contact";
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <div className='motor'>
//         <h4>Motor <i style={{ color: 'brown' }}>World</i> Kenya</h4>
//         <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
//             To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
//         </div>
//         <button onClick={handleToggleCars} className="btn">{showCars ? 'Back Home' : 'Available Cars'}</button>
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//       {showCars && !selectedCar && (
//         <div className='card'>
//           {cars.map(car => (
//             <div key={car.id} className='car'>
//               <h4>{car.name}</h4>
//               <img src={car.image_url} alt={car.make + " " + car.model} />
//               <p>Model: {car.model}</p>
//               <p>Transmission: {car.transmission}</p>
//               <button onClick={() => handleCarClick(car)} className='details'>View Car Details</button>
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedCar && (
//         <div className='car-details'>
//           <h4>{selectedCar.name}</h4>
//           <img src={selectedCar.image_url} alt={selectedCar.make + " " + selectedCar.model} />
//           <p>Model: {selectedCar.model}</p>
//           <p>Transmission: {selectedCar.transmission}</p>
//           <p>Price: {selectedCar.price}</p>
//           <p>Mileage: {selectedCar.mileage}</p>
//           <button onClick={handleBackClick} className="details">Back to Cars</button>
//           <button onClick={handleBuyClick} className='details'>Make Purchase</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;



//HAS SEARCH AND DELETE FUNCTIONALITIES

// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");


//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleToggleCars = () => {
//     setShowCars(!showCars);
  
//   }

//   const handleCarClick = (car) => {
//     setSelectedCar(car);
//   }

//   const handleBackClick = () => {
//     setSelectedCar(null);
//   }

//   const handleBuyClick = () => {
//     window.location.href = "/contact";
//   }

//   const handleDeleteCar = (id) => {
//     fetch(`http://localhost:4000/cars/${id}`, { method: 'DELETE' })
//       .then(res => res.json())
//       .then(() => {
//         const updatedCars = cars.filter(car => car.id !== id);
//         setCars(updatedCars);
//       })
//       .catch(err => console.error(err));
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <div className='motor'>
//         <h4>Motor <i style={{ color: 'brown' }}>World</i> Kenya</h4>
//         <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
//             To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
//         </div>
//         <button onClick={handleToggleCars} className="btn">{showCars ? 'Back Home' : 'Available Cars'}</button>
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//    {showCars && !selectedCar && (
//     <div className='outer'>
//     <div className='search'>
//       <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search car by name" />
//     </div>
//   <div className='card'>
    
//     {cars.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase())).map(car => (
//       <div key={car.id} className='car'>
//         <h4>{car.name}</h4>
//         <img src={car.image_url} alt={car.make + " " + car.model} />
//         <p>Model: {car.model}</p>
//         <p>Transmission: {car.transmission}</p>
//         <div className='buttons'>
//         <button onClick={() => handleCarClick(car)} className='handle-button'>View Car Details</button>
//         <button onClick={() => handleDeleteCar(car.id)} className='handle-button'>Remove Car</button>
//         </div>
//       </div>
//     ))}
//   </div>
//   </div>
// )}

//       {selectedCar && (
//         <div className='car-details'>
//           <h4>{selectedCar.name}</h4>
//           <img src={selectedCar.image_url} alt={selectedCar.make + " " + selectedCar.model} />
//           <p>Model: {selectedCar.model}</p>
//           <p>Transmission: {selectedCar.transmission}</p>
//           <p>Price: {selectedCar.price}</p>
//           <p>Mileage: {selectedCar.mileage}</p>
//           <button onClick={handleBackClick} className="handle-button">Back to Cars</button>
//           <button onClick={handleBuyClick} className='handle-button'>Make Purchase</button>
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;



//HAS CREATE FUNCTIONALITY 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  const [cars, setCars] = useState([]);
  const [showCars, setShowCars] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    show_room_id: "",
    model: "",
    transmission: "",
    price: "",
    mileage: "",
    image_url: ""
  });


  useEffect(() => {
    fetch("http://localhost:4000/cars")
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error(err));
  }, []);

  const handleToggleCars = () => {
    setShowCars(!showCars);
  
  }

  const handleCarClick = (car) => {
    setSelectedCar(car);
  }

  const handleBackClick = () => {
    setSelectedCar(null);
  }

  const handleBuyClick = () => {
    window.location.href = "/contact";
  }

  const handleDeleteCar = (id) => {
    fetch(`http://localhost:4000/cars/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
      })
      .catch(err => console.error(err));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/cars", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setCars([...cars, data]);
        setFormData({
          name: "",
          show_room_id: "",
          model: "",
          transmission: "",
          price: "",
          mileage: "",
          image_url: ""
        });
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='landing'>
      <div className='right'>
        <div className='motor'>
        <h4>Motor <i style={{ color: 'brown' }}>World</i> Kenya</h4>
        <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
            To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
        </div>
        <Link to='' onClick={() => window.scrollTo(0, 0)}>
        <button onClick={handleToggleCars} className="btn">{showCars ? 'Back Home' : 'Available Cars'}</button>
        </Link>
      </div>
      {!showCars && (
        <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
      )}
   {showCars && !selectedCar && (
    <div className='outer'>
    <div className='search'>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search car by name" />
    </div>
    <div className='form'>
          <form onSubmit={handleSubmit}>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Car Name" required />
            <input type="text" value={formData.show_room_id} onChange={(e) => setFormData({ ...formData, show_room_id: e.target.value })} placeholder="Show room" required />
            <input type="text" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} placeholder="Car Model" required />
            <input type="text" value={formData.transmission} onChange={(e) => setFormData({ ...formData, transmission: e.target.value })} placeholder="Car Transmission" required />
            <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="Car Price" required />
            <input type="number" value={formData.mileage} onChange={(e) => setFormData({ ...formData, mileage: e.target.value })} placeholder="Car Mileage" required />
            <input type="text" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} placeholder="Car Image URL" required />
            <button type="submit" className='handle-button'>Add New Car</button>
          </form>
        </div>
  <div className='card'>
    
    {cars.filter(car => car.name && car.name.toLowerCase().includes(searchQuery.toLowerCase())).map(car => (
      <div key={car.id} className='car'>
        <h4>{car.name}</h4>
        <img src={car.image_url} alt={car.make + " " + car.model} />
        <div className='brief-details'>
        <p>Model: {car.model}</p>
        <p>Transmission: {car.transmission}</p>
        </div>
        <div className='buttons'>
        <Link to='' onClick={() => window.scrollTo(0, 0)}>
        <button onClick={() => handleCarClick(car)} className='handle-button'>View Car Details</button>
        </Link>
        <button onClick={() => handleDeleteCar(car.id)} className='handle-button'>Remove Car</button>
        </div>
      </div>
    ))}
  </div>
  </div>
)}

      {selectedCar && (
        <div className='car-details'>
          <h4>{selectedCar.name}</h4>
          <img src={selectedCar.image_url} alt={selectedCar.make + " " + selectedCar.model} />
          <div className='more-details'>
          <p>Model: {selectedCar.model}</p>
          <p>Transmission: {selectedCar.transmission}</p>
          <p>Price: {selectedCar.price}</p>
          <p>Mileage: {selectedCar.mileage}</p>
          <p>Model: {selectedCar.model}</p>
          <p>show_room: {selectedCar.show_room_id}</p>
          </div>
          <Link onClick={() => window.scrollTo(0, 0)}>
          <button onClick={handleBackClick} className="handle-button">Back to Cars</button>
          </Link>
          <button onClick={handleBuyClick} className='handle-button'>Make Purchase</button>
          
        </div>
      )}
    </div>
    
  );
}

export default Landing;


