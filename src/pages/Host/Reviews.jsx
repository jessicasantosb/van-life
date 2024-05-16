import React from 'react';
import graph from '../../assets/reviews-graph.png';
import styles from './Reviews.module.css';

function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section className={styles.reviews}>
      <div className={styles.topText}>
        <h2 className='title'>Your Reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img className={styles.graph} src={graph} alt='Review graph' />
      <h3>Reviews (2)</h3>
      {reviewsData.map(({ id, rating, name, date, text }) => (
        <div key={id}>
          <div className={styles.review}>
            <div className={styles.stars}>
              {[...Array(rating)].map((_, i) => (
                <p key={i}> &#9733;</p>
              ))}
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{name}</p>
              <p className={styles.date}>{date}</p>
            </div>
            <p>{text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Reviews;
