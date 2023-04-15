import React from 'react';
import ReactDOM from 'react-dom';
import './calorie.css';
function AddItem({ addItem, name, updateName, calories, updateCalories, protein, updateProtein, carbs, updateCarbs, fat, updateFat }) {
    return (
      <form onSubmit={addItem}>
        <div className="form-inner">
  
          <div className="form-input">
            <input id="name" type="text" placeholder="Name"
            value={name} onChange={updateName} />
          </div>
  
          <div className="form-input">
            <input id="calories" type="number" placeholder="Calories"
            value={calories} onChange={updateCalories} step="0.01" />
          </div>
  
          <div className="form-input">
            <input id="protein" type="number" placeholder="Protein"
            value={protein} onChange={updateProtein} step="0.01" />
          </div>
  
          <div className="form-input">
            <input id="carbs" type="number" placeholder="Carbs"
            value={carbs} onChange={updateCarbs} step="0.01" />
          </div>
  
          <div className="form-input">
            <input id="fat" type="number" placeholder="Fat"
            value={fat} onChange={updateFat} step="0.01" />
          </div>
          
        </div>
        <input
          type="submit"
          value="Add Item"
        />
      </form>
    )
  }
  
  function NutritionItem({ itemProp, calories, setCalories, protein, setProtein, carbs, setCarbs, fat, setFat, removeItem }) {
  
    let [clicked, setClicked] = React.useState(false)
  
    function isClicked() {
      if (!clicked) {
        setClicked(true)
        itemProp.clicked = true
        setCalories(calories + itemProp.calories)
        setProtein(protein + itemProp.protein)
        setCarbs(carbs + itemProp.carbs)
        setFat(fat + itemProp.fat)
  
      } else {
        setClicked(false)
        itemProp.clicked = false
        setCalories(calories - itemProp.calories)
        setProtein(protein - itemProp.protein)
        setCarbs(carbs - itemProp.carbs)
        setFat(fat - itemProp.fat)
      }
    }
  
    function removeInfo() {
      if (itemProp.clicked === true) {
        itemProp.clicked = false
        setCalories(calories - itemProp.calories)
        setProtein(protein - itemProp.protein)
        setCarbs(carbs - itemProp.carbs)
        setFat(fat - itemProp.fat)     
      }
      return removeItem()
    }
    
    return (
      <div
        className={
          'item ' +
          (clicked ? 'item-active' : 'item-inactive')
        }
      >   
        <span className="remove-item" onClick={ () => removeInfo() } aria-label="Remove item" title="Remove item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="Remove item">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </span>
  
        <div className="item-name">{itemProp.name}</div>
        <div><p>Calories</p>{itemProp.calories}</div>
        <div><p>Protein</p>{itemProp.protein}</div>
        <div><p>Carbs</p>{itemProp.carbs}</div>
        <div><p>Fat</p>{itemProp.fat}</div>
  
        <span className="add-item" onClick={() => isClicked()} aria-label={clicked ? 'Remove info' : 'Add info'} title={clicked ? 'Remove info' : 'Add info'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={'add-info ' + (clicked ? 'inactive-info' : '')}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={'remove-info ' + (clicked ? '' : 'inactive-info')}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </span>
      </div>
    )
  }
  
  
  function App() {
    let [totalCalories, setTotalCalories] = React.useState(0)
    let [totalProtein, setTotalProtein] = React.useState(0)
    let [totalCarbs, setTotalCarbs] = React.useState(0)
    let [totalFat, setTotalFat] = React.useState(0)
  
    let [addName, setAddName] = React.useState('')
    let [addCalories, setAddCalories] = React.useState('')
    let [addProtein, setAddProtein] = React.useState('')
    let [addCarbs, setAddCarbs] = React.useState('')
    let [addFat, setAddFat] = React.useState('')
  
    let [items, setItems] = React.useState([
      {
        name: 'Apple',
        calories: 95,
        protein: 0.5,
        carbs: 25,
        fat: 0.3,
        clicked: false,
        id: Math.floor(Math.random() * 1000000000)
      },
      {
        name: 'Chicken Breast',
        calories: 284,
        protein: 53.4,
        carbs: 0,
        fat: 6.2,
        clicked: false,
        id: Math.floor(Math.random() * 1000000000)
      }
    ])
  
    function addNutritionalItem(e) {
      e.preventDefault()
      if (
        addName.length >= 1 && 
        addCalories !== '' &&
        addProtein.length !== '' &&
        addCarbs.length !== '' &&
        addFat.length !== ''
      ) {
        items.push({
          name: addName,
          calories: addCalories,
          protein: addProtein,
          carbs: addCarbs,
          fat: addFat,
          clicked: false,
          id: Math.floor(Math.random() * 1000000000)
        })
        setAddName('')
        setAddCalories('')
        setAddProtein('')
        setAddCarbs('')
        setAddFat('')
      }
    }
  
    function removeNutritionalItem(removeItem) {
      setItems(items.filter(item => item.id !== removeItem))
    }
  
    return (
      <main>
  
        <h1>Nutrition Calculator</h1>
  
        <div id="info">
          <div><span title="Calories (g)">Calories</span></div>
          <div><span title="Protein (g)">Protein</span></div>
          <div><span title="Carbohydrates (g)">Carbs</span></div>
          <div><span title="Fat (g)">Fat</span></div>
        </div>
  
        <div id="total">
          <ul>
            <li>Total</li>
            <li>{totalCalories}</li>
            <li>{totalProtein}</li>
            <li>{totalCarbs}</li>
            <li>{totalFat}</li>
          </ul>
        </div>
  
        <div id="items">
          { items.length >= 1 ?
              items.map(item => (
                <NutritionItem
                  key={item.id}
                  itemProp={item}
                  calories={totalCalories}
                  setCalories={setTotalCalories}
                  protein={totalProtein}
                  setProtein={setTotalProtein}
                  carbs={totalCarbs}
                  setCarbs={setTotalCarbs}
                  fat={totalFat}
                  setFat={setTotalFat}
                  removeItem={() => removeNutritionalItem(item.id)}
                />
              ))
            : <div className="empty-items">Add an item to the nutrition calculator.</div>
          }
        </div>
  
        <AddItem
          addItem={addNutritionalItem}
          name={addName}
          updateName={(e) => setAddName(e.target.value)}
          calories={addCalories}
          updateCalories={(e) => setAddCalories(parseFloat(e.target.value))}
          protein={addProtein}
          updateProtein={(e) => setAddProtein(parseFloat(e.target.value))}
          carbs={addCarbs}
          updateCarbs={(e) => setAddCarbs(parseFloat(e.target.value))}
          fat={addFat}
          updateFat={(e) => setAddFat(parseFloat(e.target.value))}
        />
      </main>
    );
  }
  
  
  export default App