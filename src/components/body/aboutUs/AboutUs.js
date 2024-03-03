
import { useParams } from 'react-router-dom';

function AboutUs() {
    let {id} = useParams();
    return (
        <pre>
            <p>{id}</p>
        </pre>
    )
}

export default AboutUs;