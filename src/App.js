import {useEffect, useState} from "react";

const width = 8
const candyColors = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow'
]



const App= () => {

    const [currentColorArrangement, setCurrentColorArrangement] = useState([])

    const createBoard = () => {
        const randomColorArrangement =[]
        for (let i = 0; i < width * width; i++){
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)] //Grabbing random color from candyColors array
            randomColorArrangement.push(randomColor)
        }
        setCurrentColorArrangement(randomColorArrangement)
    }

    useEffect(() => {
        createBoard()
    },[])

    console.log(currentColorArrangement);

  return (
      <div className="app">
        <div className="game">
            {currentColorArrangement.map((candyColor, index) => ( //maps through current color arrangement set on line 25 and then assigns it based on color.
                <img
                    key={index}
                    style={{backgroundColor: candyColor}}
                />
                ))}
        </div>
      </div>
  )
}

export default App;
