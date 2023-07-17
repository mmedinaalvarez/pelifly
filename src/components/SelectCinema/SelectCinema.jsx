import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./SelectCinema.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const SelectCinema = () => {
  const [cinemas, setCinemas] = useState([]);

  const [selectEnabled, setSelectEnabled] = useState(false);
  const { selectedCinema, setSelectedCinema, selectedTime, setSelectedTime } =
    useContext(CartContext);

  const selectDate = () => {
    setSelectEnabled(true);
  };

  const handleCinemaChange = (e) => {
    setSelectedCinema(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  useEffect(() => {
    const getCinemas = async () => {
      const q = query(collection(db, "cinemas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setCinemas(docs);
    };
    getCinemas();
  }, []);
  return (
    <div>
      <div>
        <div className="ContainerSelectCinema">
          {/* <select style={{ marginRight: 20 }} onChange={selectDate}> */}
          <select style={{ marginRight: 20 }} onChange={handleCinemaChange}>
            <option>Selecciona un cine</option>
            {cinemas.map((cinema) => {
              return (
                <option key={cinema.id} value={cinema.id}>
                  {cinema.name}
                </option>
              );
            })}
          </select>

          {selectEnabled ? (
            <select disabled={!selectEnabled} onChange={handleTimeChange}>
              <option>Selecciona un horario</option>
              <option>13:40 Hs</option>
              <option>17:00 Hs</option>
              <option>20:00 Hs</option>
              <option>00:02 Hs</option>
            </select>
          ) : (
            <select disabled>
              <option>Selecciona un horario</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCinema;
