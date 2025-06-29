import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './News.css';

function News() {
  const newsList = [
    { id: 1, title: "Woman bakes expletive-laden pies to 'get a rise' out of her grandmother in annual tradition", description: '"What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition," wrote Jess Lydon.', images: 'images/event-1.jpg' },
    { id: 2, title: "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans", description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'images/event-2.jpg' },
    { id: 3, title: "Burger King is testing a new breakfast sandwich", description: 'This is a win for the flatbread fans.', images: 'images/event-3.jpg' },
    { id: 4, title: "Popeyes permanently adds chicken wings to its menu", description: "And you can get 'em in five different flavors.", images: 'images/event-4.jpg' },
    { id: 5, title: "Top salmon with a sizzling mix of aromatics and spices", description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'images/event-5.jpg' },
    { id: 6, title: "80 Christmas dinner ideas for the ultimate holiday feast", description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'images/event-6.jpg' },
    { id: 7, title: "How to make the easiest prime rib roast for the holidays", description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'images/event-7.jpg' },
    { id: 8, title: "Turn leftover turkey into a flavorful Waldorf salad", description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'images/event-8.jpg' },
  ];

  // Lấy 4 tin đầu tiên cho hiển thị nổi bật
  const featuredNews = newsList.slice(0, 4);
  
  return (
    <Container className="mt-4 mb-5">
      <h1 className="news-title">News Category</h1>
      <Row className="featured-news g-4">
        {featuredNews.map(news => (
          <Col md={6} lg={3} key={news.id}>
            <div className="news-item">
              <Image src={news.images} alt={news.title} fluid className="news-image" />
              <h5>{news.title}</h5>
              <p className="news-description">{news.description}</p>
              
              {/* Chỉ hiển thị full description và link "Read more" cho tin đầu tiên và thứ ba */}
              {(news.id === 1 || news.id === 3) && (
                <p className="text-muted">{news.description.substring(0, 70)}...</p>
              )}
              
              {/* Hiển thị thông tin khác cho tin thứ hai */}
              {news.id === 2 && (
                <div>
                  <p className="text-muted">Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.</p>
                </div>
              )}
              
              {/* Hiển thị thông tin khác cho tin thứ tư */}
              {news.id === 4 && (
                <div>
                  <p className="text-muted">And you can get 'em in five different flavors.</p>
                </div>
              )}
              
              {/* Link đọc thêm */}
              <Link to={`/news/${news.id}`} className="news-link">
                {news.id === 1 && "Woman bakes expletive-laden pies to 'get a rise' out of her grandmother in annual tradition"}
                {news.id === 2 && "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans"}
                {news.id === 3 && "Burger King is testing a new breakfast sandwich"}
                {news.id === 4 && "Popeyes permanently adds chicken wings to its menu"}
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News; 