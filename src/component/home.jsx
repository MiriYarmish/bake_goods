import { useEffect, useState } from "react";


export const Home = () => {

  const images = [
   "../תמונות לפרוייקט/apple cake.jpg",
    "../תמונות לפרוייקט/babka.jpg",
    "../תמונות לפרוייקט/cinnamon buns.jpg",
    "../תמונות לפרוייקט/murbole cake.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    // ניקוי הinterval כשמרכיב מתUnmount
    return () => clearInterval(interval);
}, [images.length]);

  return (
    <>
      <article
        style={{
         position: "relative",
          width:2400,
          height: "700px",  // הגדל את הגובה אם צריך
          overflow: "hidden",
          marginRight:1000,
        }}
        >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{
              alignItems:"center",
              position: "absolute",
              width: 1200,
              height: 1000,
             
              // objectFit: "cover",
              opacity: index === currentIndex ? 0.7 : 0,
              transition: "opacity 1s ease-in-out",  // אנימציה חלקה
              marginRight:250,
              // zIndex: index === currentIndex ? 1 : 0,  // לוודא שהתמונה הנוכחית עליונה
            }}
            // onError={(e) => {
            //   console.error('Error loading image', e.target.src);  // אוסף שגיאות טעינה
            //   e.target.style.display = "none";  // אם התמונה לא נטענת, לא להציג אותה
            // }}
          />
        ))}
      </article>
    </>
  );
};


