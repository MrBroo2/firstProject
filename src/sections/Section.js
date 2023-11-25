import "./styles/Section.css";
import img1 from "../images/section-img1.svg";
import img2 from "../images/section-img2.svg";
import img3 from "../images/section-img3.svg";
import img4 from "../images/section-img4.svg";
import img5 from "../images/section-img5.svg";
import img6 from "../images/section-div-img.png";
import img7 from "../images/yuklash.png";
import img8 from "../images/sellect.png";
import img9 from "../images/sellect2.png";
import img10 from "../images/section-div-img2.png";
import img11 from "../images/bolg'acha.png";
import img12 from "../images/togri.png";

export default function Header() {
  return (
    <section>
      <div className="container section">
        <div className="rasmlar">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </div>
        <div className="flex">
          <div>
            <img src={img6} />
          </div>
          <div>
            <p className="text1">Lorem ipsum dolor</p>
            <p className="text2">Two Saas are better than one.</p>
            <p className="text3">
              One of the most fundamental ways to go about that is to create a
              memorable e-commerce slogan.
            </p>
            <div className="dv3">
              <img src={img7} />
              <p className="text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="dv3">
              <img src={img7} />
              <p className="text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="dv3">
              <img src={img7} />
              <p className="text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex3">
          <div>
            <p className="text5">Lorem ipsum dolor</p>
            <p className="text6">With a name like Saas, it has to be good.</p>
            <div className="dvs">
              <div className="flex2">
                <p className="text7">Review the facts Saas is the best?</p>
                <img src={img8} />
              </div>
              <p className="text8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod
                tempor.
              </p>
            </div>
            <div className="gg">
              <p className="text9">Lorem ipsum dolor sit amet consectetur?</p>
              <img src={img9} />
            </div>
            <div className="gg">
              <p className="text9">Lorem ipsum dolor sit amet consectetur?</p>
              <img src={img9} />
            </div>
            <div className="gg">
              <p className="text9">Lorem ipsum dolor sit amet consectetur?</p>
              <img src={img9} />
            </div>
            <div className="gg">
              <p className="text9">Lorem ipsum dolor sit amet consectetur?</p>
              <img src={img9} />
            </div>
            <div>
              <button className="text10">free trial</button>
              <button className="text11">read more</button>
            </div>
          </div>
          <img src={img10} />
        </div>
        <div>
          <p className="text12">Lorem ipsum dolor sit amet</p>
          <h3 className="text13">
            The Loudest Noise Comes From The Electric Saas.
          </h3>
          <p className="text14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <div className="flexdv">
            <div className="dve">
              <img src={img11} className="rasm" />
              <p className="text15">Responsive Layout </p>
              <p className="text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className="dve">
              <img src={img11} className="rasm" />
              <p className="text15">Responsive Layout </p>
              <p className="text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className="dve">
              <img src={img11} className="rasm" />
              <p className="text15">Responsive Layout </p>
              <p className="text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className="dve">
              <img src={img11} className="rasm" />
              <p className="text15">Responsive Layout </p>
              <p className="text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className="dve">
              <img src={img11} className="rasm" />
              <p className="text15">Responsive Layout </p>
              <p className="text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className="dve">
              <img src={img11} className="rasm" />
              <p className="text15">Responsive Layout </p>
              <p className="text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div>
            <p className="text17">Keep calm and buy</p>
            <p className="text18">
              With lowering the price to even a slight extent one can achieve
              exponential growth.
            </p>
          </div>
          <div>
            <div className="dvl">
              <p className="text19">STUDENT</p>
              <p className="text20">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
              <p className="text21">$15</p>
              <div className="dvv">
                <div className="text22bg">
                  <p className="text22">Monthiy</p>
                </div>

                <p className="text23">Annually</p>
              </div>
              <div className="dvf">
                <img src={img12} />
                <p className="text24">
                  Consulting with experts 20 times for I yea
                </p>
              </div>
              <div className="dvf">
                <img src={img12} />
                <p className="text24">Add friends for free for 1month</p>
              </div>
              <div className="dvf">
                <img src={img12} />
                <p className="text24">Free 5 fonts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
