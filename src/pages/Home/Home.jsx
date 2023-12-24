import Banner from '../../components/Banner/Banner';
import Testimonial from '../../components/Testimonial/Testimonial';
import WhoGetBenefit from '../../components/WhoGetBenefit/WhoGetBenefit';

const Home = () => {
	return (
		<>
			<div className=''>
				<Banner />
				<WhoGetBenefit />
			<Testimonial></Testimonial>
			</div>
		</>
	);
};

export default Home;
