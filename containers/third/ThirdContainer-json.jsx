import * as React from "react";
import { Link } from "react-router-dom";
import "./third-container.less";
import { Layout, Menu, Breadcrumb, Icon,Tabs  } from 'antd';
import  './index.css';
import imgURL from './img/icon1.png';
import axios from 'axios';
 
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}

 
class ThirdPage extends React.Component {
   

  constructor(props) {

    super(props);

    this.state = {

      posts: []

    } 
  }



    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
    componentDidMount() {
      axios.get('./api/testone.json','{}')

      .then(res => {

     
        const posts = res.data.xAxis.data ;
        console.log(posts)
        this.setState({ posts });
 
      });
    }
    componentWillUnmount() {
        console.log("third page willunmount");
    }
    render() {

        
        return (
            <div className="ui-page">
                <div style={{width :'70%',height:'100%', float:'left',border:'1px solid #ccc',borderRadius: '5px' ,marginLeft:'15px',marginTop:'15px',background:'#FFFFFF'}}>
{/* 菜单div */}<div class='page1menu' style={{borderRadius: '5px 5px 0px 0px',border:'1px solid #ccc' }}>
             <Tabs type="card" defaultActiveKey="1"  onChange={callback}>
  {/* TAB1---------------------------------- TAB1--------------------------------TAB1  */}
    <TabPane tab="待办事宜" key="1" >
{/*列表div*/}<div style={{padding:'15px 15px'}}>    
{/*单条信息div*/}<div style={{ }}>
            <p>发布于 2013-02-19 13：24</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>王承揽：发起了【上海协和发展业务机会】内核评审流程</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
              <font style={{color:'#ADADAD'}}>最新跟踪记录：2018-02-19 王承揽</font><font style={{fontWeight:'bold'}}> 发起了业务机会的内核评审 </font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <input value='查看' type='button' onClick={() => this.componentDidMount()} style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/>
            </div>
            </div>
{/*单条信息divEND*/}</div>   
{/*单条信息div*/}<div style={{ }}>
            <p>发布于 2013-02-19 13：24</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>王承揽：发起了【认领客户-上海银联科技】流程</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
              <font style={{color:'#ADADAD'}}>最新跟踪记录：2018-02-19 张主管</font><font style={{fontWeight:'bold'}}> 同意通过 </font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <input value='查看' type='button' style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/>
            </div>
            </div>
{/*单条信息divEND*/}</div>  
{/*单条信息div*/}<div style={{ }}>
            <p>发布于 2013-02-19 13：24</p>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',padding:'15px 15px',background:'#F5F5F5'}}>
              <h3  style={{fontWeight:'bold'}}>李协同：分配了【业务机会-上海墨鱼科技有限公司】</h3>
{/*橙色div*/}<div style={{height:'55px', background:'#FFF8DB', border:'1px solid #FADD9B',borderRadius:'5px',padding:'15px 15px'}}>
            <div style={{width:'70%',float:'left'}}>
              <font style={{color:'#ADADAD'}}>最新跟踪记录：2018-02-19 李协同</font><font style={{fontWeight:'bold'}}> 分配了一个业务机会 </font> 
            </div>
            <div style={{width:'30%',float:'right'}}>
            <font style={{color:'#F7986B'}}>详细跟踪记录</font>
            </div>
                        </div>
            <div style={{ padding:'15px 0px 5px 0px',height:'33px'}}>
            <input value='查看' type='button' style={{ border:'none', height:'28px', borderRadius:'5px',width:'70px', float:'right',background:'#1F93FF',color:'#fff'}}/>
            </div>
            </div>
{/*单条信息divEND*/}</div>            
{/*列表divEND*/}</div>
    </TabPane>
      {/* TAB2--------------------------------- TAB2--------------------------------TAB2 */}
    <TabPane tab="业务机会" key="2">
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <table style={{width: '100%'}}>
        <tr>
          <td>
            <table style={{width: '100%'}}>
              <tr>
                <td colspan='6'> 
                    <textarea style={{resize: 'none',width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>今天和银联老总</textarea> 
                </td>
              </tr>
              <tr>
              <td style={{   padding: '10px 0px   10px 0px'}}>
                 客户名称
                </td>
                <td style={{width:'24%'}}>
                {/*     display: 'block',width: '70%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px' */}
                  <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  机会名称
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  业务类型
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
              </tr>
              <tr>
              <td style={{   padding: '10px 0px   10px 0px'}}>
                 发起协同 
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
              </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  优先程度
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  截止日期
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
              </tr>
              <tr>
              <td style={{  padding: '10px 0px   10px 0px'}}>
                 客户联系人 
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
               </td>
                <td style={{  padding: '10px 0px   10px 0px'}}>
                  联系方式
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
                <td style={{   padding: '10px 0px   10px 0px'}}>
                  预计资金规模
                </td>
                <td style={{width:'24%'}}>
                <input type='text' style={{display: 'block',width: '80%',border: '1px solid #ccc',borderRadius: '5px',padding: '4px'}}></input>
                </td>
              </tr>
              <tr>
              <td  colspan='6' style={{  padding: '10px 0px   10px 0px'}}>
                <button type="button" style={{backgroundColor: '#1E90ff', color:'#fff',border: '1px solid #ccc', borderRadius: '5px'}}>提交</button>
                &nbsp;  &nbsp;
                <button type="button" style={{backgroundColor: '#1E90ff', color:'#fff',border: '1px solid #ccc',borderRadius: '5px'}}>提交并发起协同</button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <select>
  <option value="volvo">按照最新跟踪排序</option>
  <option value="saab">按照录入时间排序</option> 
            </select>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />全部 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />对接中 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />分配给我 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />我提交的 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />已结束的 </label>
          </td>
        </tr>
        <tr>
          <td style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2'  style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   0px 15px'}}>
                <h2><font color="#FFA500">上海银联股份有限公司</font></h2>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '0px 0px   0px 15px'}}>
                发布于 2018-03-02 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                发起人：<font style={{fontWeight:'bold'}}> 王承揽（我）</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>200,200.00  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>银联有意几年IPO，麻烦提供一份适合银联的详尽IPO解决方案。</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td style={{padding:'15px'}}>
                    最新跟踪记录：2018-03-05 张承做 <font style={{fontWeight:'bold'}}>完成了IPO解决方案，可以正式立项签合同了</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td  style={{padding:'15px'}}>
                    对接部门：<font style={{fontWeight:'bold'}}>IPO业务部</font>
                </td>
                <td  style={{padding:'15px'}}>
                    对接人：<font style={{fontWeight:'bold'}}>张承做</font>
                </td>
                <td  style={{padding:'15px'}}>
                    分配人：<font style={{fontWeight:'bold'}}>李协同</font>
                </td>
                </tr>
              </table >
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}}>
                已对接：<font style={{fontWeight:'bold'}}>张承做（IPO业务部）</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '10px 15px   15px 15px'}}>
                <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                  <tr>
                    <td   style={{padding: '5px 0px   5px 15px'}}>
                    <font style={{fontWeight:'bold'}}>张承做(IPO业务部)说:</font>
                    </td>
                  </tr>
                  <tr>
                    <td   style={{padding: '5px 0px   5px 15px'}}>
                      这个需求我之前也提了，但是好像没有继续做下去，我尽力做方案，但不保证成啊，哥
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '5px 15px   5px 15px'}}>
                    <hr  />
                    </td>
                    </tr>
                  <tr>
                    
                          <td   style={{padding: '5px 15px   5px 15px'}}>
                          <textarea style={{resize: 'none', background:'#D3D3D3', width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>说点什么。。。</textarea> 
                          
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2'  style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   0px 15px'}}>
                <h2><font color="#FFA500">上海长城宽带</font></h2>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '0px 0px   0px 15px'}}>
                发布于 2018-03-01 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                发起人：<font style={{fontWeight:'bold'}}> 王承揽（我）</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>400,200.00  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>银联有意几年IPO，麻烦提供一份适合银联的详尽IPO解决方案。</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td style={{padding:'15px'}}>
                    最新跟踪记录：2018-03-05 张承做 <font style={{fontWeight:'bold'}}>完成了IPO解决方案，可以正式立项签合同了</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td  style={{padding:'15px'}}>
                    对接部门：<font style={{fontWeight:'bold'}}>IPO业务部</font>
                </td>
                <td  style={{padding:'15px'}}>
                    对接人：<font style={{fontWeight:'bold'}}>张承做</font>
                </td>
                <td  style={{padding:'15px'}}>
                    分配人：<font style={{fontWeight:'bold'}}>李协同</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
    </table>
      </div>
    </TabPane>
      {/* TAB3---------------------------------- TAB3--------------------------------TAB3 */}
    <TabPane tab="服务跟踪" key="3">
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <table style={{width: '100%'}}>
        <tr>
          <td>
            <table style={{width: '100%'}}>
              <tr>
                <td colspan='6'> 
                    <textarea style={{resize: 'none',width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>填写服务跟踪记录...</textarea> 
                </td>
              </tr>
              
              <tr>
              <td  colspan='6' style={{  padding: '10px 0px   10px 0px'}}>
                <button type="button" style={{backgroundColor: '#1E90ff', color:'#fff',border: '1px solid #ccc', borderRadius: '5px'}}>保存</button>
                
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <select>
  <option value="volvo">按照最新跟踪排序</option>
  <option value="saab">按照录入时间排序</option> 
            </select>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />全部 </label>&nbsp;&nbsp;&nbsp;
            <label><input name="Fruit" type="checkbox" value="" />和业务机会相关 </label>&nbsp;&nbsp;&nbsp;
  
          </td>
        </tr>
        <tr>
          <td style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2'  style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   0px 15px'}}>
                <h2><font color="#FFA500">上海银联股份有限公司222</font></h2>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '0px 0px   0px 15px'}}>
                发布于 2018-03-02 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                发起人：<font style={{fontWeight:'bold'}}> 王承揽（我）</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>200,200.00  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>银联有意几年IPO，麻烦提供一份适合银联的详尽IPO解决方案。</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td style={{padding:'15px'}}>
                    最新跟踪记录：2018-03-05 张承做 <font style={{fontWeight:'bold'}}>完成了IPO解决方案，可以正式立项签合同了</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td  style={{padding:'15px'}}>
                    对接部门：<font style={{fontWeight:'bold'}}>IPO业务部</font>
                </td>
                <td  style={{padding:'15px'}}>
                    对接人：<font style={{fontWeight:'bold'}}>张承做</font>
                </td>
                <td  style={{padding:'15px'}}>
                    分配人：<font style={{fontWeight:'bold'}}>李协同</font>
                </td>
                </tr>
              </table >
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}}>
                已对接：<font style={{fontWeight:'bold'}}>张承做（IPO业务部）</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '10px 15px   15px 15px'}}>
                <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                  <tr>
                    <td   style={{padding: '5px 0px   5px 15px'}}>
                    <font style={{fontWeight:'bold'}}>张承做(IPO业务部)说:</font>
                    </td>
                  </tr>
                  <tr>
                    <td   style={{padding: '5px 0px   5px 15px'}}>
                      这个需求我之前也提了，但是好像没有继续做下去，我尽力做方案，但不保证成啊，哥
                    </td>
                  </tr>
                  <tr>
                    <td style={{padding: '5px 15px   5px 15px'}}>
                    <hr  />
                    </td>
                    </tr>
                  <tr>
                    
                          <td   style={{padding: '5px 15px   5px 15px'}}>
                          <textarea style={{resize: 'none', background:'#D3D3D3', width: '100%',border: '1px solid #ccc',padding: '20px 4px', borderRadius: '5px'}}>说点什么。。。</textarea> 
                          
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 0px   15px 5px'}}>
            <tr>
              <td colspan='2'  style={{width:'100%',   borderRadius: '5px', padding: '15px 0px   0px 15px'}}>
                <h2><font color="#FFA500">上海长城宽带</font></h2>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '0px 0px   0px 15px'}}>
                发布于 2018-03-01 18：24
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                发起人：<font style={{fontWeight:'bold'}}> 王承揽（我）</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
                预计资金：<font style={{fontWeight:'bold'}}>400,200.00  </font>
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px 0px   5px 15px'}}>
                业务类型：<font style={{fontWeight:'bold'}}>新三板上市</font>
              </td>
              <td style={{padding: '5px 0px   5px 15px'}}>
               截止日期：<font style={{fontWeight:'bold'}}>2018-03-03</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '5px 0px   5px 15px'}} >
                机会描述：<font style={{fontWeight:'bold'}}>银联有意几年IPO，麻烦提供一份适合银联的详尽IPO解决方案。</font>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td style={{padding:'15px'}}>
                    最新跟踪记录：2018-03-05 张承做 <font style={{fontWeight:'bold'}}>完成了IPO解决方案，可以正式立项签合同了</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td colspan='2' style={{padding: '15px 15px   15px 15px'}}>
              <table style={{width:'100%', border: '1px solid #ccc', borderRadius: '5px', padding: '15px 15px   15px 15px'}}>
                <tr>
                  <td  style={{padding:'15px'}}>
                    对接部门：<font style={{fontWeight:'bold'}}>IPO业务部</font>
                </td>
                <td  style={{padding:'15px'}}>
                    对接人：<font style={{fontWeight:'bold'}}>张承做</font>
                </td>
                <td  style={{padding:'15px'}}>
                    分配人：<font style={{fontWeight:'bold'}}>李协同</font>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
    </table>
      </div>
    </TabPane>
      {/* TAB4---------------------------------- TAB4--------------------------------TAB4 */}
    <TabPane tab="运营数据（协）" key="4"><div>
   <h1>下面为json数据</h1>
    
{this.state.posts}

 

 
      </div></TabPane>
      {/* TAB5---------------------------------- TAB5--------------------------------TAB5 */}
    <TabPane tab="服领导驾驶舱（领）" key="5">Content of Tab Pane 5</TabPane>
      {/* TAB6---------------------------------- TAB6--------------------------------TAB6 */}
    <TabPane tab="机构业务概览（领）" key="6">Content of Tab Pane 6</TabPane>

  </Tabs>
        </div>
            </div>     
{/* 右侧人员div */}<div style={{background:'#fff', width :'20%', height:'100%',float:'left',border:'1px solid #ccc',borderRadius: '5px',padding:'15px 15px',marginLeft:'15px',marginTop:'15px'}}>
                <div style={{border:'none', height:'85px'}}>
                <div style={{width:'40%',float:'left'}}>
                <img src={imgURL} />  
                </div>
                <div style={{width:'60%',float:'right'}}>
                  <h3 style={{fontWeight:'bold'}}> 王统一 </h3>
                  <font>统一角色模拟，非角色功能隐藏</font>
                </div>
                </div>
{/*右侧第一横线 */}<div style={{padding:'10px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                      <font style={{fontWeight:'bold'}}>通知公告</font>
{/*右侧第一横线END */}</div>
{/*右侧第二横线 */}<div style={{height:'45px', padding:'10px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                    <div style={{width:'50%',float:'left'}}>
                    <font style={{fontWeight:'bold'}}>我的收入</font>
                    </div>
                    <div style={{width:'50%',float:'right'}}>
                    <font style={{fontWeight:'bold',color:'#FF9E0A'}}>￥32,928.98</font>
                    </div>
{/*右侧第二横线END */}</div>
{/*右侧第三横线 */}<div style={{height:'50px', padding:'10px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                    <div style={{width:'50%',float:'left', padding:'3px 0px 0px 0px'}}>
                    <font style={{fontWeight:'bold'}}>对接中的机会</font>
                    </div>
                    <div style={{width:'50%',float:'right'}}>
                    <h3 style={{fontWeight:'bold'}}>4</h3>
                    </div>
{/*右侧第三横线END */}</div>
                    <div style={{height:'50px',padding:'10px 0px 0px 5px'}}>
                      <div style={{width:'65%',float:'left'}}>
                        <h3 style={{fontWeight:'bold'}}>客户管理</h3>
                      </div>
                      <div style={{width:'35%',float:'right'}}>
                        <font style={{color:'#1890FF'}}>帮我分析</font>
                      </div>
                    </div>
{/*右侧第四横线 */}<div style={{height:'100px', padding:'0px 0px 10px 5px', borderBottom:'1px solid #ccc',}}>
                    <table style={{width:'100%'}}>
                      <tr>
                        <td style={{width:'65%'}}>
                          <font>待服务的客户</font>
                        </td>
                        <td  style={{width:'35%'}}>
                          <font>4</font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <font>客户的重大提醒</font>
                        </td>
                        <td>
                          <font>2</font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <font>客户商机</font>
                        </td>
                        <td>
                          <font> </font>
                        </td>
                      </tr>
                    </table>
{/*右侧第四横线END */}</div>
                    <div style={{height:'50px',padding:'10px 0px 0px 5px'}}>
                      <div style={{width:'65%',float:'left'}}>
                        <h3 style={{fontWeight:'bold'}}>业务机会管理</h3>
                      </div>
                      <div style={{width:'35%',float:'right'}}>
                        <font style={{color:'#1890FF'}}>帮我分析</font>
                      </div>
                    </div>
                <div style={{height:'100px', padding:'0px 0px 10px 5px' }}>
                    <table style={{width:'100%'}}>
                      <tr>
                        <td style={{width:'65%'}}>
                          <font>新增的业务机会</font>
                        </td>
                        <td  style={{width:'35%'}}>
                          <font>4</font>
                        </td>
                      </tr>
                      </table>
                  </div>
                 </div>
            </div>
        );
    }
}

export default ThirdPage;