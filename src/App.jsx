import Checkbox from "./components/Checkbox"
import { useState } from "react"

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
	return (
		<div>
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
