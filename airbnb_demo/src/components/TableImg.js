import React from "react";

export default function TableImg(){


    return(
        <section>
           <table className="main-tb tb" >
              <tr>
                  
                  <td rowSpan={3}><img src="./images/img-main/cassiee.jpg"></img></td>
                  <td ><img src="./images/img-main/elliot.jpg"></img></td>
                  <td className="tb-row"><img src="./images/img-main/nathan.jpg"></img></td>
                  
             </tr>
             <tr>
                <td ><img src="./images/img-main/jewls.jpg"></img></td>
                <td className="tb-row"><img src="/images/img-main/lexi.jpg"></img></td>
              </tr>
              




          </table>
        </section>
    )
}