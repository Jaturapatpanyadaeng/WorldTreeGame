import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import './home.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Footer from './footer'
function Home() {
  return (
    <div className='App'>
      <Navbar/>
      <title>หน้าหลัก - WorldTree</title>
      <header className='App-header'>
      <section class="home" id="home">
            <div class="content"><Fade>
                <h3 className='texter'>WorldTree</h3>
                <p className='texter'>เว็บไซต์เกมส์ที่ดีที่สุดในประเทศไทย</p></Fade>
                <a href="https://worldtree-b252d.web.app/game.html" class="dowload">คลิกเพื่อดูเกม</a>
            </div>
        </section>
    <section class="about" id="about">
        <h1 class="heading"><Fade left cascade><span>หน้าเกี่ยวกับ</span></Fade></h1>
        <div class="row">
            <div class="image">
                <img src="/img/png/2home.jpg" alt="" />
            </div>
            <div class="content">
            <Fade left cascade><h3>คุณต้องการหาเกมส์ที่คุณต้องการไปเล่นอีกหรอ?</h3>
                <p className='texter'>เราแนะนำนี้เลย</p>
                <p className='texter'>เกมในเว็ปสามารถเล่นแก้เบื่อได้ไม่ต้องสียเวลาดาวน์โหลด สามารถเล่นได้ในเว็ปได้เลย แถมยังมีเกมส์ดาวน์โหลดและเกมอีกหลายๆแนวให้ท่านได้เล่นอีกมากมายอีกด้วย</p>
                </Fade></div>
        </div>
    </section>
<section class="review" id="review">
    <h1 class="heading"> <Fade left cascade><span>ความคิดเห็นผู้ใช้</span></Fade></h1>
    <div class="box-container">
        <div class="box">    <Fade bottom>
            <p>เกมนี้สนุกมากครับผมเล่นทีน้ำตาไหลเลย สนุกหรอ? ไม่อ่ะ แสบตา</p>
            <img src="/img/png/b279f12891ef1e3ac647f4b868e13dd3.jpg" alt=""/><br />
            <h1>นางนาฬิกา</h1>
            <i class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </i>
            </Fade>
        </div>
        <div class="box"><Fade bottom>
            <p>เกมนี้สนุกมากครับผมเล่นทีน้ำตาไหลเลย สนุกหรอ? ไม่อ่ะ แสบตา</p>
            <img src="/img/png/matrix-5030250_1280.jpg" alt=""/><br />
            <h1>นายพื้นหลัง</h1>
            <i class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </i>
            </Fade>
        </div>
        <div class="box"><Fade bottom>
            <p>เกมนี้สนุกมากครับผมเล่นทีน้ำตาไหลเลย สนุกหรอ? ไม่อ่ะ แสบตา</p>
            <img src="/img/png/deadline.png" alt=""/><br />
            <h1>นายต้นไม้</h1>
            <i class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </i>
            </Fade>
        </div>
    </div>
</section>
      </header><br /><br />
      <Footer></Footer>
      </div>
  );
}

export default Home;
