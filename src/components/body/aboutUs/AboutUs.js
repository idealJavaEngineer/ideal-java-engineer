
import { useParams } from 'react-router-dom';

function AboutUs() {
    let {id} = useParams();
    console.log(id);
    return (
        <pre>
            <p>{id}</p>
        </pre>
    )
}

export default AboutUs;