import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Home.css";

export default function Home() {
  return (
    <>
      <section id="header-section">
        <Header />
      </section>

      <section id="quick-start-section">
        <img id="quick-start-banner" src="https://placehold.co/1200x800"></img>
        <a href="/signup">
          <img className="quick-start" src="https://placehold.co/200x90"></img>
        </a>
      </section>

      <section id="examples-section">
        <h2 id="examples-section-header">Check out these awesome examples!</h2>
        <p id="examples-section-intro">
          Lorem ipsum dolor sit amet, cum gubergren efficiendi in, illud mazim
          quaeque mea at. Ex usu utinam laudem. Purto ornatus sed at, no vel
          error percipit. Ad est reque malorum facilisi, ad eam eloquentiam
          voluptatibus, pro an dicta postea. His ad inciderint dissentiunt. Cum
          ne primis eripuit. An nemore dissentiet vim, vel ne eripuit salutatus.
        </p>
        <div id="hover-container">
          <div id="hover-examples">
            <p>HoverExample1</p>
            <p>HoverExample2</p>
            <p>HoverExample3</p>
            <p>HoverExample4</p>
            <p>HoverExample5</p>
          </div>
        </div>
        <img id="hover-banner" src="https://placehold.co/1000x400"></img>
      </section>

      <section id="persuasive-section">
        <div id="first-ad" className="persuasive-ad">
          <h2>Here's a couple reasons you should be using example!</h2>
          <p className="persuasive-paragraph">
            Lorem ipsum dolor sit amet, cum gubergren efficiendi in, illud mazim
            quaeque mea at. Ex usu utinam laudem. Purto ornatus sed at, no vel
            error percipit. Ad est reque malorum facilisi, ad eam eloquentiam
            voluptatibus, pro an dicta postea. His ad inciderint dissentiunt.
            Cum ne primis eripuit. An nemore dissentiet vim, vel ne eripuit
            salutatus.
          </p>
          <img
            className="persuasive-ad"
            src="https://placehold.co/200x90"
          ></img>
        </div>
        <div id="second-ad" className="persuasive-ad">
          <h2>Here's a couple reasons you should be using example!</h2>
          <p className="persuasive-paragraph">
            Lorem ipsum dolor sit amet, cum gubergren efficiendi in, illud mazim
            quaeque mea at. Ex usu utinam laudem. Purto ornatus sed at, no vel
            error percipit. Ad est reque malorum facilisi, ad eam eloquentiam
            voluptatibus, pro an dicta postea. His ad inciderint dissentiunt.
            Cum ne primis eripuit. An nemore dissentiet vim, vel ne eripuit
            salutatus.
          </p>
          <img
            className="persuasive-ad"
            src="https://placehold.co/200x90"
          ></img>
        </div>
      </section>
      <section id="footer-section">
        <Footer />
      </section>
    </>
  );
}
