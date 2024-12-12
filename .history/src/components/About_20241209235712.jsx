import React, { useEffect } from 'react';

function About() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Ensure the paragraph is split into spans
    if (paragraphRef.current) {
      const paragraph = paragraphRef.current;
      const text = paragraph.textContent;
      const splittedText = text.split("");
      paragraph.innerHTML = splittedText
        .map((char, index) => `<span key=${index}>${char}</span>`)
        .join("");
    }

    // GSAP animation for paragraph spans
    gsap.to(paragraphRef.current.querySelectorAll("span"), {
      color: "#A1A1AA", // Customize as needed
      stagger: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 2,
        pin: false,
        duration: 8,
      },
    });
  }, []);

  return (
    <div className='text-white h-[70vh] mt-48 flex flex-col items-center'>
      <h1 className='w-[68vw] mb-4 tracking-light text-center font-[100] text-zinc-400 leading-[3.5vh]'>
        <span className='text-[7.5vw] font-[font1] text-zinc-300 tracking-light font-semibold'>About <span className='text-[#0D7C66] tracking-tighter'>Us</span></span>
      </h1>
      <p
      ref={paragraphRef} 
      className='about-content  font-[font6] w-[68vw] mt-16 text-[2.5vh] text-center text-zinc-400 leading-[3.5vh]'>
        Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! Join us for a 24-hour coding marathon where brilliant minds unite to tackle real-world challenges. Ready to make your mark? Address critical issues in healthcare, space exploration, and defense. Whether it's Blockchain for banking or AI-powered smart cities, the possibilities are endless! Collaborate with like-minded individuals and industry experts who will guide you throughout the event. This is not just a competition; it's an opportunity to learn, innovate, and network. With exciting workshops and mentorship sessions, you'll gain valuable insights and skills that will last a lifetime. Don't miss out on the chance to showcase your talent and creativity! Sign up now and be part of a transformative experience that could change your future!
      </p>
    </div>
  );
}

export default About;