import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Business() {
  return (
    <>
      <h2 className="bg-white me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden display-5" >事業内容</h2>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-left text-black overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">異動作業業務委託</h2>
            <p className="lead ">テプコ・ソリューション・アドバンス株式会社様との異動作業業務委託を行っています。</p>
          </div>
          <div className="mx-auto introStyle business_left_bg"></div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-left text-black overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">電気工事調整委託</h2>
            <p className="lead ">停電電気工事の日程調整や手配を致します。</p>
          </div>
          <div className="mx-auto introStyle business_right_bg" ></div>
        </div>
      </div>
    </>
  );
}

export default Business;
