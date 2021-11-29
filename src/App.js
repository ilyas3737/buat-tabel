import logo from './logo.svg';
import './App.css';
import data from './data.json';
import { Component } from 'react';

class App extends Component{
 
render(){
  
  let item = [];
  let h = [];
  for (let i = 0; i < data.proformaItem.length; i++) {
    item.push(<td>{data.proformaItem[i].productDescription}</td>);
  }
  for (let i = 0; i < data.location.length; i++) {
    h.push(<td>{data.location[i].name}</td>);
  }
  h.push(<td>Category</td>);
  h.push(<td>Product</td>);
  h.push(<td>Total Stock</td>);
  h.push(<td>Percent %</td>);  
  h.push(<td>Total Order</td>);  
  function extractKeyValue(obj, value) {
    return Object.keys(obj)[Object.values(obj).indexOf(value)];
}
  return (
    <div className="App">
      <table style={{margin:'2%'}} border="1" width="96%" align="center" cellspacing="0" cellpadding="0">
        <thead style={{background:'red', color:'white'}}>
          <tr>
            {h}
          </tr>
        </thead>
        <tbody>
           {
             data.proformaItem.map(k =>{
              var j = JSON.parse(k.product_stock);
              var a = 0;
              var b = 0;
              var c = 0;
              var order = 10; // tidak tahu nilai order di ambil dimana
              for (let o = 0; o < j.length; o++) {
                var key = Object.keys(j[o]);
                if(key==1){
                  a = j[o][key]
                }
                if(key==3){
                  b = j[o][key]
                }
                if(key==5){
                  c = j[o][key]
                }
              }
              var total = a+b+c;
              var persen = (order/total)*100;
              persen = persen.toFixed(2);
               return (
                 
                <tr>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                    <td>{k.categoryDescription}</td>
                    <td>{k.productDescription}</td>
                    <td>{total}</td>
                    <td>{persen+" %"}</td>
                    <td>{order}</td>
                </tr>
               );
             })
          
           }
        </tbody>
      </table>
    </div>
  );
  }
}

export default App;
