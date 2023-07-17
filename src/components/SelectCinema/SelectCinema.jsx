import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./SelectCinema.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const SelectCinema = () => {
  const [cinemas, setCinemas] = useState([]);

  const { selectedCinema, setSelectedCinema, selectedTime, setSelectedTime } =
    useContext(CartContext);

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

      setCinemas(docs);
    };
    getCinemas();
  }, []);
  const isCinemaSelected = selectedCinema !== "";
  return (
    <div>
      <div>
        <div className="ContainerSelectCinema">
          <select
            style={{ marginRight: 20 }}
            onChange={handleCinemaChange}
            value={selectedCinema}
          >
            <option value="">Selecciona un cine</option>
            {cinemas.map((cinema) => (
              <option key={cinema.id} value={cinema.id}>
                {cinema.name}
              </option>
            ))}
          </select>

          <select
            disabled={!isCinemaSelected}
            onChange={handleTimeChange}
            value={selectedTime}
          >
            <option value="">Selecciona un horario</option>
            <option value="13:40">13:40 Hs</option>
            <option value="17:00">17:00 Hs</option>
            <option value="20:00">20:00 Hs</option>
            <option value="00:02">00:02 Hs</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectCinema;
