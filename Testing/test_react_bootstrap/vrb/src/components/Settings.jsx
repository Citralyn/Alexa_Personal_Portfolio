//there's an api for the different classes each thing supports!
//-> on the website: https://react-bootstrap.github.io/docs/components/carousel
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';


export default function Settings() {
    function handleSlide() {
        console.log("YAY")
    }
    return(
        <div>
            <h1>Settings</h1>
            <Carousel onSlide={handleSlide}>
              <Carousel.Item>
                <Image src="/src/assets/fat_cat.jpeg"></Image>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Image src="/src/assets/fat_cat.jpeg"></Image>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Image src="/src/assets/fat_cat.jpeg"></Image>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        );
}