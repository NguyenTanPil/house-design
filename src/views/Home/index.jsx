import Categories from '../../components/Categories';
import Collection from '../../components/Collection';
import ShortChannel from '../../components/ShortChannel';
import Signature from '../../components/Signature';
import Slider from '../../components/Slider';

const Home = () => {
	return (
		<div>
			<Slider />
			<Categories />
			<Signature />
			<Collection />
			<ShortChannel />
		</div>
	);
};

export default Home;
