import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }} className={props.cards} >
      <Card.Img variant="top" src={props.img} className='rounded-circle w-50 h-50 mx-auto' />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.role}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;