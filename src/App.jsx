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
	const [isPlaying, setisPlaying] = useState(false)
	
	const [counter, setCounter] = useState(0)

	function buttonClick() {
		setCounter(counter + 1)
	}

	function buttonClickdecrese() {
		setCounter(counter - 1)
	}
	function playerTrigger() {
		setisPlaying(!isPlaying)
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
			<Video
				isPlaying={isPlaying}
				src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
			/>
			<button
				onClick={playerTrigger}
			>{isPlaying ? 'Pause' : 'Play'}</button>
		</div>
	)
}
export default App
