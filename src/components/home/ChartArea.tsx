import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const tab_title: string[] = ["Funding Allocation", "Token Distribution"];
const chart_List_1: string[] = ["Contingency: 70%", "Business Development: 20%", "Investor: 30%", "Poland: 15%", "Legal & Regulation: 20%", "Czech Republic: 50%"]
const chart_List_2: string[] = ["Launchpool: 32%", "Foundation: 25%", "Private Offering: 16%", "Financiers: 12%", "Team: 8%", "Initial Airdrop: 7%"]

const ChartArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };


   const chartData = [
      [70, 20, 30, 15, 20, 50], // Funding Allocation percentages
      [32, 25, 16, 12, 8, 7]  // Token Distribution percentages
   ];

   const labelData = [
      ["Contingency", "Business Development", "Investor", "Poland", "Legal & Regulation", "Czech Republic"], // Funding Allocation labels
      ["Launchpool", "Foundation", "Private Offering", "Financiers", "Team", "Initial Airdrop"]  // Token Distribution labels
   ];

   const datasetLabel = [
      "Number of Tokens",
      "Percentage"
   ];

   const data = {
      labels: labelData[activeTab],
      datasets: [
         {
            label: datasetLabel[activeTab],
            data: chartData[activeTab],
            backgroundColor: ["#44A08D", "#136F84", "#0B446D", "#033356", "#012641", "#191F28"]
         }
      ],
   };

   return (
      <div id="chart" className="chart-area pt-140">
         <div className="container">
            <div className="chart-inner-wrap">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="chart-wrap">
                        <div className="chart">
                           <div id="doughnutChart">
                              {chartData[activeTab] && <Doughnut data={data} />}
                           </div>
                        </div>
                        <div className="chart-tab">
                           <ul className="nav nav-tabs" id="myTab" role="tablist">
                              {tab_title.map((tab, index) => (
                                 <li key={index} className="nav-item">
                                    <button onClick={() => handleTabClick(index)}
                                       className={activeTab === index ? 'nav-link active' : ' nav-link'}>{tab}
                                    </button>
                                 </li>
                              ))}
                           </ul>
                           <div className="tab-content" id="myTabContent">
                              <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="description">
                                 <div className="chart-list">
                                    <ul className="list-wrap">
                                       {chart_List_1.map((list, index) => (<li key={index}>{list}</li>))}
                                    </ul>
                                 </div>
                              </div>
                              <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="description">
                                 <div className="chart-list">
                                    <ul className="list-wrap">
                                       {chart_List_2.map((list, i) => (<li key={i}>{list}</li>))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="right-side-content">
                        <img src="https://i.imgur.com/xXTGcVC.gif" alt="" />
                        <p>Multi-function available for our app <br /> Steps to use the app:</p>
                        <ul className="list-wrap">
                           <li><span>1</span>Choose image template</li>
                           <li><span>2</span>Click the contents to be modified</li>
                           <li><span>3</span>Input new contents in the input area</li>
                           <li><span>4</span>Save or share your image</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChartArea
