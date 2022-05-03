import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import Search from './components/Search'
import { useState } from 'react';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome'


const API_URL = process.env.REACT_APP_API_URL  || 'http://127.0.0.1:5000';

const App = () => {
  const [word, setWord] = useState("")
  const [images, setImages] = useState([])

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]) //... operator means adding to existing array of images
      })
      .catch((err) => {
        console.log(err)
      });
    setWord('');
  }

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id))
  };

  return (
    <div className="App">
      <Header title='Image Search' />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className='mt-4'>
        {images.length ? <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className='pb-3'>
              <ImageCard image={image} handleDelete={handleDeleteImage} />
            </Col>
          ))}
        </Row> : <Welcome />}

      </Container>
    </div>
  );
}

export default App;
