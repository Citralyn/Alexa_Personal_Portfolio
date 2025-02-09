import Heading from '../utilities/HelperHeading.jsx'
import NameOutline from '../utilities/HelperNameOutline.jsx'

const Contact = () => {
  return(
    <>
    <h1>Contact</h1>;
    <NameOutline>
      <Heading>
        1
      </Heading>
    </NameOutline>
    <NameOutline>
      <Heading>
        1
        <NameOutline>
          <Heading>
            2
            <NameOutline>
            <Heading>
              3
            </Heading>
            </NameOutline>
          </Heading>
        </NameOutline>
      </Heading>
    </NameOutline>
    </>
  )
};
  
  export default Contact;