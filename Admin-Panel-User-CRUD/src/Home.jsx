import React, { useContext, useState } from 'react'
import { CarContext } from './context/carContext'

const Home = () => {

    const { cars, updateCar, deleteCar, addCar } = useContext(CarContext)

    const [form, setForm] = useState({
        id:null,
        title: "",
        price: "",
        company: "",
        info: "",
    })
    const [isEdit, setIsEdit] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prv => ({ ...prv, [name]: value }))
    }

    function handleEdit(cars){
        setForm(cars)
        setIsEdit(true)
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (isEdit) {
            updateCar(form)
            setIsEdit(false)
        }

        else {
            addCar(form)
        }
        setForm({
            id: null,
            title: "",
            price: "",
            company: "",
            info: "",
          })
    }
    return (
        <div>
          <h3>CRUD Operation</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" value={form.title} onChange={handleChange} name='title' placeholder='Enter The Title' />
            <input type="text" value={form.price} onChange={handleChange} name='price' placeholder='Enter The Price' />
            <input type="text" value={form.company} onChange={handleChange} name='company' placeholder='Enter The Company' />
            <input type="text" value={form.info} onChange={handleChange} name='info' placeholder='Enter The Info' />
            <button type="submit">{isEdit ? "Update" : "Save"}</button>
          </form>
    
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Information</th>
                <th>Price</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(pro => (
                <tr key={pro.id}>
                  <td>{pro.title}</td>
                  <td>{pro.info}</td>
                  <td>{pro.price}</td>
                  <td>{pro.company}</td>
                  <td>
                    <button onClick={() => handleEdit(pro)}>Edit</button>{" "}
                    <button onClick={() => deleteCar(pro.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
}

export default Home
