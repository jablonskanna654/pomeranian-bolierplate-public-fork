import './styles.css';

export function CSSBoxModel() {
  return (
    <>
      <p id="unique-id-box-model" className="class-box-model">
        {' '}
        {''}3 Ćwiczenia z HTML & CSS - CSSBoxModel
      </p>
      <div className="parent-box-model">
        <p id="unique-id-box-model-2" className="class-box-model">
          1 Ćwiczenia z HTML & CSS
        </p>
        <p id="unique-id-box-model-1" className="class-box-model">
          2 Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
      </div>
      {/* najczęściej wykorzystywane tagi  */}
      <a href="">Kotwice</a>
      <input type="text" />
      <img src="" alt="" />
      <h1></h1>
      <button></button>
      <div className="display-css-test">Lorem ipsum dolor 1</div>
      <div className="display-css-test">Lorem ipsum dolor 2</div>
      {/* ////////////////Box sizing vs Border Box\\\\\\\\\\\\\\\\ */}
      <div className="box-sizing-container">
        <div className="content-box-example">1</div>
        <div className="border-box-example">2</div>
      </div>
      {/* ////////////////Box sizing vs Border Box\\\\\\\\\\\\\\\\ */}
      {/* ////////////////CSS property overflow\\\\\\\\\\\\\\\\ */}
      <div className="overflow-container">
        <div className="overflow-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sit
          tempore sint iure quae repellendus fugiat sunt cupiditate voluptate
          perferendis ut, inventore nihil? Laborum cum neque enim nulla est!
          Dolorem.
        </div>
      </div>
      <div className="units-container">
        <div className="units-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sit tempore sint iure quae repellendus fugiat sunt cupiditate voluptate perferendis ut, inventore nihil? Laborum cum neque enim nulla est!
          Dolorem.
        </div>
      </div>
    </>
  );
}
