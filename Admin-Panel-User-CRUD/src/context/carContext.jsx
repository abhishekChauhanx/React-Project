import { createContext, useState } from "react";
import { carData } from "../data";
export const CarContext = createContext()

export const CarProvider = ({ children }) => {

    const [cars, setCars] = useState(carData);


    function addCar(newCar) {
        setCars((prev) => [...prev, { ...newCar, id: Date.now() }])
    }

    function deleteCar(id) {
        setCars(prev => prev.filter(car => car.id !== id))
    }

    function updateCar(updatedCar) {
        setCars(prev => prev.map(car => car.id === updatedCar.id ? updatedCar : car))
    }
return(
    <CarContext.Provider value={{cars, addCar, deleteCar, updateCar}}>
        {children}
    </CarContext.Provider>
)


}