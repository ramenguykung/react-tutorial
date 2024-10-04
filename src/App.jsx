import Checkbox from "./components/Checkbox"
import { useState } from "react"
import Video from './components/Video'

function App() {
	const list = [
		{
			text: '1',
			isChecked: true
		},
		{
			text: '2',
			isChecked: false
		},
		{
			text: '3',
			isChecked: true
		}
	]
	const [counter, setCounter] = useState(0)
	function buttonClick() {
		setCounter(counter + 1)
	}
	function buttonClickdecrese() {
		setCounter(counter - 1)
	}
	return (
		<div>
			<div> 
				Current counter: {counter}
				<button
					onClick={buttonClick}
					>Increase Counter</button>
				<button
					onClick={buttonClickdecrese}
				>
					Decrease Counter</button>
			</div>
			{
				list.map((todo, index) => {
					return (
						<Checkbox
							key={index}
							text={todo.text}
							isChecked={todo.isChecked}
						/>
					)
				})
			}
		</div>
	)
}
export default App
