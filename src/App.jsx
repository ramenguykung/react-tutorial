import Header from './components/Header'
import { IconA } from './components/Icon'
import Image from './components/Image'
function App() {
	return (
		<div>
			<Header/>
			Hello World!
			<IconA/>
			<Image 
				imgUrl='https://fastly.picsum.photos/id/590/200/300.jpg?hmac=rMKCd22eXuQjtVujiifOrJzm-dBuhO8blicB93xN4y4'/>
		</div>
	)
}
export default App
