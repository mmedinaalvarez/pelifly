import React, { useState, useEffect } from "react";
import "./SelectCinema.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const SelectCinema = () => {
  const [cinemas, setCinemas] = useState([]);

  const [selectEnabled, setSelectEnabled] = useState(false);

  const selectDate = () => {
    setSelectEnabled(true);
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
      <div className="ContainerSelectCinema">
        <div>
          <select style={{ marginRight: 20 }} onChange={selectDate}>
            <option>Selecciona un cine</option>
            {cinemas.map((cinema) => {
              return (
                <option key={cinema.id} value={cinema.id}>
                  {cinema.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {/* {selectEnabled ? (
            <select>
              <option>Selecciona un horario</option>
              <option onClick={selectDate}>Prueba</option> 
              <option selected={selectDate}>Lunes</option>
            </select>
          ) : null} /*} */}
          {/* {selectEnabled ? (
            <select>
              <option>Selecciona un horario</option>
              <option>Lunes</option>
            </select>
          )} */}
          {selectEnabled ? (
            <select disabled={!selectEnabled}>
              <option>Selecciona un horario</option>
              <option>Prueba</option>
              <option>Lunes</option>
            </select>
          ) : (
            <select disabled>
              <option>Selecciona un horario</option>
              <option>Prueba</option>
              <option>Lunes</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCinema;
