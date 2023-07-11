import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import table from './images/desk.JPG';
import desk from './images/deskWithHuman.JPG';

function office() {
  return (
    <>
      <h2 className="bg-white me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden display-5" >事業所</h2>
      <p className="text-center">停電電気工事の日程調整業務を扱う事業所です。</p>
      <div className="container marketing text-center">
        <div className="row">
          <div className="col-md-6">
            <img src={table} className="bd-placeholder-img rounded-circle" width="140" height="140" />
            <h2>狛江事業所</h2>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">住所</th>
                  <td>東京都狛江市岩戸北3丁目19番6号フラットえびす207号室</td>
                </tr>
                <tr>
                  <th scope="row">TEL</th>
                  <td>03-5761-5686</td>
                </tr>
                <tr>
                  <th scope="row">E-MAIL</th>
                  <td colSpan="2">takamoto-teiden@jcom.zaq.ne.jp</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <img className="bd-placeholder-img rounded-circle" src={desk} width="140" height="140" />
            <h2>東大和事業所</h2>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">住所</th>
                  <td>東京都東大和市中央2丁目1101番11号スターティングポイント中央202号室</td>
                </tr>
                <tr>
                  <th scope="row">TEL</th>
                  <td>042-843-6145</td>
                </tr>
                <tr>
                  <th scope="row">E-MAIL</th>
                  <td colSpan="2">takamoto-teiden@jcom.zaq.ne.jp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default office;
