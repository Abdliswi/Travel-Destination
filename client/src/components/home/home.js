import data from '../../data/db.json';
import Tours from '../tours/tours';
import Footer from '../footer/footer';
function Home() {
    return (
        <>
            <Tours data={data} />
            <Footer />
        </>
    );
}
export default Home;