import React, { useState, useEffect } from 'react';
import styles from './CSS/app.module.css'
import amazon from './svg/amazon.svg'
import google from './svg/google.svg'
import microsoft from './svg/microsoft.svg'
import paytm from './svg/paytm.svg'
import flipkart from './svg/flipkart.png'
import adobe from './svg/adobe.svg'
import p1 from './svg/pattern1.svg'
import p2 from './svg/pattern2.svg'
import p3 from './svg/pattern3.svg'
import p4 from './svg/pattern4.svg'
import p5 from './svg/pattern5.svg'
import p6 from './svg/pattern6.svg'
import Loader from './Components/Loader'




function App() {


  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [Display, setDisplay] = useState(0);

  var to;

  const changeDisplay = (slide) => {

    if (Display !== slide) setDisplay(slide);
    window.clearTimeout(to);
  }

  useEffect(() => {

    let temp = Display
    temp++
    to = window.setTimeout(() => {
      Display === 3 ? setDisplay(0) : setDisplay(temp);
    }, 3000);

  }, [Display])


  const carouselItems = [
    {
      title: "Question Library",
      description: "HIGHLY QUALIFIED MENTORS FROM LEADING TECH GIANTS.",
      img: '/static/media/card1.3200586f.svg'
    },
    {
      title: "Highly Qualified Mentors",
      description: "250 HANDPICKED QUESTIONS FOR CODING INTERVIEWS IN LEADING COMPANIES.",
      img: '/static/media/card2.9642bb74.svg'
    },
    {
      title: "The Perfect Playground",
      description: "THE PERFECT PLAYGROUND TO PRACTICE YOUR CODING INTERVIEW QUESTIONS.",
      img: '/static/media/card3.b5a08772.svg'
    },
    {
      title: "Mock Test",
      description: "FINAL TOUCH WITH COMPANY SPECIFIC MOCK TESTS",
      img: 'data:image/png;base64,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'
    }
  ]

  return (
    <div className={styles.main}>

      {Loading &&
        <Loader />
      }
      <div className={styles.carousel}>

        <div className={styles["carousel-top"]}>
          <div className={styles['carousel-left']}>
            <div>
              <p>
                Master Your <br />
         Destiny With <br />
                <span>PlacementSaga</span>
              </p>
              <button><div />View Sample Question</button>
            </div>
          </div>
          <div className={styles['carousel-right']}>
            <div className={styles['left-capsule']}>
              <div className={styles['left-notch']} />
              <div><img src={carouselItems[Display].img} alt="" /></div>
              <p>{carouselItems[Display].title}</p>
            </div>
            <div className={styles['right-capsule']}>
              <div className={styles['right-notch']} />
              <p>{carouselItems[Display].description}</p>
            </div>
          </div>
        </div>
        <div className={styles["carousel-bottom"]}>
          <div onClick={() => changeDisplay(0)} style={{ backgroundColor: Display == 0 ? '#39f' : '#e2e2e2' }}> </div>
          <div onClick={() => changeDisplay(1)} style={{ backgroundColor: Display == 1 ? '#39f' : '#e2e2e2' }}></div>
          <div onClick={() => changeDisplay(2)} style={{ backgroundColor: Display == 2 ? '#39f' : '#e2e2e2' }}></div>
          <div onClick={() => changeDisplay(3)} style={{ backgroundColor: Display == 3 ? '#39f' : '#e2e2e2' }}></div>
        </div>
      </div>
      <hr />
      <div className={styles.companies}>
        <img style={{ animationDuration: '3s' }} src={adobe} alt="" />
        <img style={{ animationDuration: '5s' }} src={amazon} alt="" />
        <img style={{ animationDuration: '2s' }} src={google} alt="" />
        <img style={{ animationDuration: '3s' }} src={microsoft} alt="" />
        <img style={{ animationDuration: '3s' }} src={flipkart} alt="" />
        <img style={{ animationDuration: '5s' }} src={paytm} alt="" />
      </div>
      <div className={styles.topics}>
        <div>
          <p>Every Topic You need for your</p>
          <h3>Coding Interview</h3>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#E9F0FB" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <div className={styles['topics-container']}>
            <div>
              <img style={{ opacity: '0.25' }} src={p1} alt="" />
              <p>Array</p>
            </div>
            <div>
              <img style={{ opacity: '0.6' }} src={p2} alt="" />
              <p>Sorting</p>
            </div>
            <div>
              <img style={{ opacity: '1' }} src={p3} alt="" />
              <p>Strings</p>
            </div>
            <div>
              <img style={{ opacity: '0.6' }} src={p4} alt="" />
              <p>Linked List</p>
            </div>
            <div>
              <img style={{ opacity: '0.6' }} src={p5} alt="" />
              <p>Stacks & Queues</p>
            </div>
            <div>
              <img style={{ opacity: '1' }} src={p6} alt="" />
              <p>Trees</p>
            </div>
            <div>
              <img src={p6} alt="" />
              <p>Dynamic Programming</p>
            </div>
            <div>
              <img src={p6} alt="" />
              <p>Graphs</p>
            </div>
            <div>
              <img src={p6} alt="" />
              <p>Searching</p>
            </div>
            <div>
              <img src={p3} alt="" />
              <p>Recursion</p>
            </div>
            <div>
              <img style={{ opacity: '0.6' }} src={p2} alt="" />
              <p>Binary Search Tree</p>
            </div>
            <div>
              <img style={{ opacity: '0.25' }} src={p1} alt="" />
              <p>Mathematical</p>
            </div>
            <div>
              <img style={{ opacity: '0.25' }} src={p1} alt="" />
              <p>Bit-Manipulation</p>
            </div>
            <div>
              <img style={{ opacity: '0.6' }} src={p2} alt="" />
              <p>Heaps</p>
            </div>
            <div>
              <img src={p3} alt="" />
              <p>Hashing</p>
            </div>
            <div>
              <img src={p4} alt="" />
              <p>Backtracking</p>
            </div>
            <div>
              <img src={p5} alt="" />
              <p>Tries</p>
            </div>
            <div>
              <img src={p6} alt="" />
              <p>Famous Algorithms</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#E9F0FB" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,101.3C672,107,768,181,864,186.7C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
      </div>
    </div >
  );
}

export default App;
