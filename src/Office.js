import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import table from './images/newtable.jpg';
import bee from './images/bee.jpg';
import room from './images/roomwithhuman.jpg';


function office() {
  const images = [room,bee,table];

// 以下を追記してください！
let count = 0;
const slideimage =()=>{
  if( count >= images.length){
    count = 0;
  }else{
    document.getElementById('slideshow').src = images[count];
    count++;
  }
}
setInterval(slideimage,5000);


 
    return (
      <>
        <h2 className="bg-white me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden display-5" >事業所</h2>
        <p className="text-center">停電電気工事の日程調整業務を扱う事業所です。</p>
        <p className="text-center">狛江事業所は令和6年3月25日に東大和事業所と統合しました。</p>
        <div className="container marketing text-center">
          <div className="row">
      
              <h2>東大和事業所</h2>
              <div className='col-2'></div>
              <div className='col-8'> <img id ="slideshow" className="mx-auto bd-placeholder-img img-fluid" ></img> </div>
              <div className='col-2 '></div>
              

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
      </>
    );
    
  
}

export default office;
