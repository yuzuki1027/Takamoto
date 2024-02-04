import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function campany() {

    return (
    <>
    <h2 className="bg-white me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden display-5 " >会社概要</h2>
    
    <div className='container'>
    <table class="table table-bordered">
    <tbody>
    <tr>
      <th scope="row">会社名</th>
      <td>高本電業株式会社</td>
      
    </tr>
    <tr>
      <th scope="row">代表取締役</th>
      <td>高橋貴志</td>
    </tr>
    <tr>
      <th scope="row">所在地</th>
      <td colspan="2">東京都狛江市岩戸南4丁目15番地8号</td>
    </tr>
    <tr>
      <th scope="row">電話番号</th>
      <td colspan="2">03-3489-6932</td>
    </tr>
    <tr>
      <th scope="row">設置年月日</th>
      <td colspan="2">昭和46年11月25日</td>
    </tr>
    <tr>
    <th scope="row">事業内容</th>
      <td colspan="2">テプコ・ソリューション・アドバンス株式会社との異動作業委託契約及びテプコ・ソリューション・アドバンス株式会社との停電周知業務</td>
      
      </tr>
      <tr>
      <th scope="row">資本金</th>
      <td colspan="2">1000千円</td>
    </tr>
    <tr>
      <th scope="row">事業所数</th>
      <td colspan="2">3箇所</td>
    </tr>
    <tr>
      <th scope="row">売上高</th>
      <td colspan="2">19000千円</td>
    </tr>
    <tr>
      <th scope="row">経営利益</th>
      <td colspan="2">1000千円</td>
    </tr>
    <tr>
      <th scope="row">従業員数</th>
      <td colspan="2">5名(第1種電気工事士 1名,第二種電気工事士 2名,宅地建物取引士 1名)</td>
    </tr>
  </tbody>
</table>
</div>

    </>
  
  );
}
export default campany;