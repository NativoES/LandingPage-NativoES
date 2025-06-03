'use client';

import React, { useEffect, useState } from 'react';
import SingleFeedbackCard from './SingleFeedbackCard';

export default function FeedbackCard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/review?locale=es');
        const data = await res.json();

        const parsed = data.map(item => {
          const review = item.es?.resennia || {};
          const respuesta = item.es?.respuestas || null;

          return {
            id: item._id,
            nombre: review.nombre || 'Anónimo',
            avatarUrl: review.avatarUrl || '/placeholder.jpg',
            contenido: review.contenido || '',
            calificacion: review.calificacion || 0,
            fecha: review.fecha || '',
            respuesta,
          };
        });

        setFeedbacks(parsed);
      } catch (err) {
        console.error('Error al cargar reseñas:', err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {feedbacks.map((feedback) => (
        <SingleFeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </>
  );
}
