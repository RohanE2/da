// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Calculator, Share2, Download, Info, History, TrendingUp } from 'lucide-react';

// const DACalculatorPro = () => {
//   const [basicPay, setBasicPay] = useState('');
//   const [daPercentage, setDaPercentage] = useState('56');
//   const [employeeType, setEmployeeType] = useState('central');
//   const [calculations, setCalculations] = useState([]);

//   const calculateDA = () => {
//     if (!basicPay) return 0;
//     const base = parseFloat(basicPay);
//     const percentage = parseFloat(daPercentage);
//     return (base * percentage) / 100;
//   };

//   const calculateTotal = () => {
//     if (!basicPay) return 0;
//     return parseFloat(basicPay) + calculateDA();
//   };

//   const saveCalculation = () => {
//     const newCalculation = {
//       date: new Date().toLocaleDateString(),
//       basicPay: parseFloat(basicPay),
//       daPercentage: parseFloat(daPercentage),
//       total: calculateTotal(),
//       employeeType: employeeType
//     };
//     setCalculations([newCalculation, ...calculations.slice(0, 9)]);
//   };

//   const downloadPDF = () => {
//     alert('Download functionality would generate a detailed PDF report');
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50">
//       {/* Header Section */}
//       <div className="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold mb-2">Dearness Allowance Calculator 2025</h1>
//         <p className="text-blue-100">Updated with latest DA rates for all government employees</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Main Calculator Card */}
//         <div className="md:col-span-2">
//           <Card className="shadow-xl bg-white">
//             <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
//               <div className="flex items-center justify-between">
//                 <CardTitle className="flex items-center text-2xl">
//                   <Calculator className="mr-2" />
//                   DA Calculator
//                 </CardTitle>
//                 <div className="flex gap-4">
//                   <Share2 className="cursor-pointer hover:text-blue-200 transition-colors" />
//                   <Download className="cursor-pointer hover:text-blue-200 transition-colors" onClick={downloadPDF} />
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="space-y-6">
//                 {/* Employee Type Selection */}
//                 <div>
//                   <label className="block text-sm font-medium mb-2 text-gray-700">Employee Type</label>
//                   <select
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     value={employeeType}
//                     onChange={(e) => setEmployeeType(e.target.value)}
//                   >
//                     <option value="central">Central Government</option>
//                     <option value="state">State Government</option>
//                     <option value="psu">Public Sector</option>
//                   </select>
//                 </div>

//                 {/* Basic Pay Input */}
//                 <div>
//                   <label className="block text-sm font-medium mb-2 text-gray-700">Basic Pay (₹)</label>
//                   <input
//                     type="number"
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     value={basicPay}
//                     onChange={(e) => setBasicPay(e.target.value)}
//                     min="0"
//                     placeholder="Enter your basic pay"
//                   />
//                 </div>

//                 {/* DA Percentage Input */}
//                 <div>
//                   <label className="block text-sm font-medium mb-2 text-gray-700">DA Percentage (%)</label>
//                   <input
//                     type="number"
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     value={daPercentage}
//                     onChange={(e) => setDaPercentage(e.target.value)}
//                     min="0"
//                     max="100"
//                     step="0.1"
//                   />
//                   <Alert className="mt-2 bg-blue-50 border-blue-200">
//                     <Info className="h-4 w-4 text-blue-500" />
//                     <AlertDescription className="text-blue-700">
//                       Current DA rate: 56% (January 2025)
//                     </AlertDescription>
//                   </Alert>
//                 </div>

//                 {/* Results Section */}
//                 <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-inner">
//                   <h3 className="text-xl font-semibold mb-4 text-gray-800">Calculation Results</h3>
//                   <div className="space-y-3">
//                     <div className="flex justify-between text-gray-700">
//                       <span>Basic Pay:</span>
//                       <span>₹ {basicPay ? parseFloat(basicPay).toLocaleString('en-IN') : '0'}</span>
//                     </div>
//                     <div className="flex justify-between text-gray-700">
//                       <span>DA ({daPercentage}%):</span>
//                       <span>₹ {calculateDA().toLocaleString('en-IN')}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-xl text-blue-700 pt-2 border-t">
//                       <span>Total:</span>
//                       <span>₹ {calculateTotal().toLocaleString('en-IN')}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4">
//                   <button 
//                     className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
//                     onClick={saveCalculation}
//                   >
//                     Save Calculation
//                   </button>
//                   <button 
//                     className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
//                     onClick={downloadPDF}
//                   >
//                     Download Report
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Side Panel */}
//         <div className="space-y-6">
//           {/* Ad Space */}
//           <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//             <p className="text-gray-500">Advertisement Space</p>
//             <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mt-2"></div>
//           </div>

//           {/* DA Rate History */}
//           <Card className="shadow-lg bg-white">
//             <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
//               <CardTitle className="flex items-center">
//                 <History className="mr-2" />
//                 DA Rate History
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-4">
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center p-2 rounded bg-blue-50 text-blue-700">
//                   <span>Jan 2025</span>
//                   <span className="font-semibold">56%</span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 rounded bg-purple-50 text-purple-700">
//                   <span>Jul 2024</span>
//                   <span className="font-semibold">50%</span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 rounded bg-blue-50 text-blue-700">
//                   <span>Jan 2024</span>
//                   <span className="font-semibold">42%</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Calculation History */}
//           <Card className="shadow-lg bg-white">
//             <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
//               <CardTitle className="flex items-center">
//                 <TrendingUp className="mr-2" />
//                 Your Calculations
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-4">
//               {calculations.length > 0 ? (
//                 <div className="space-y-3">
//                   {calculations.map((calc, index) => (
//                     <div key={index} className="p-3 rounded bg-gradient-to-r from-blue-50 to-purple-50">
//                       <div className="flex justify-between text-gray-700">
//                         <span>{calc.date}</span>
//                         <span className="font-semibold">₹ {calc.total.toLocaleString('en-IN')}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-500 text-center p-4">No saved calculations yet</p>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
//         <div className="space-y-6">
//           <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
//             <h3 className="font-semibold text-blue-700">What is Dearness Allowance (DA)?</h3>
//             <p className="mt-2 text-gray-700">Dearness Allowance is a cost of living adjustment allowance paid to government employees and pensioners in India to offset the impact of inflation.</p>
//           </div>
//           <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
//             <h3 className="font-semibold text-purple-700">How often is DA revised?</h3>
//             <p className="mt-2 text-gray-700">DA is typically revised twice a year - in January and July, based on the percentage increase in the All India Consumer Price Index.</p>
//           </div>
//           <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
//             <h3 className="font-semibold text-blue-700">How is DA calculated?</h3>
//             <p className="mt-2 text-gray-700">DA is calculated as a percentage of an employee's basic pay. The percentage is determined by the government based on inflation rates.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Ad Space */}
//       <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center">
//         <p className="text-gray-500">Advertisement Space</p>
//         <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mt-2"></div>
//       </div>
//     </div>
//   );
// };

// export default DACalculatorPro;




import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Share2, Download, Info, History, TrendingUp } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DACalculatorPro = () => {
  const [basicPay, setBasicPay] = useState('');
  const [daPercentage, setDaPercentage] = useState('56');
  const [employeeType, setEmployeeType] = useState('central');
  const [calculations, setCalculations] = useState([]);

  // Load saved calculations from localStorage on component mount
  useEffect(() => {
    const savedCalculations = localStorage.getItem('daCalculations');
    if (savedCalculations) {
      setCalculations(JSON.parse(savedCalculations));
    }
  }, []);

  const calculateDA = () => {
    if (!basicPay) return 0;
    const base = parseFloat(basicPay);
    const percentage = parseFloat(daPercentage);
    return (base * percentage) / 100;
  };

  const calculateTotal = () => {
    if (!basicPay) return 0;
    return parseFloat(basicPay) + calculateDA();
  };

  // const saveCalculation = () => {
  //   if (!basicPay) return;
    
  //   const newCalculation = {
  //     date: new Date().toLocaleDateString(),
  //     basicPay: parseFloat(basicPay),
  //     daPercentage: parseFloat(daPercentage),
  //     daAmount: calculateDA(),
  //     total: calculateTotal(),
  //     employeeType: employeeType
  //   };
    
  //   const updatedCalculations = [newCalculation, ...calculations.slice(0, 9)];
  //   setCalculations(updatedCalculations);
    
  //   // Save to localStorage
  //   localStorage.setItem('daCalculations', JSON.stringify(updatedCalculations));
  // };

  const saveCalculation = () => {
    if (!basicPay) return;
    
    const newCalculation = {
      date: new Date().toLocaleDateString(),
      basicPay: parseFloat(basicPay),
      daPercentage: parseFloat(daPercentage),
      daAmount: calculateDA(),
      total: calculateTotal(),
      employeeType: employeeType
    };
    
    const updatedCalculations = [newCalculation, ...calculations.slice(0, 9)];
    setCalculations(updatedCalculations);
    localStorage.setItem('daCalculations', JSON.stringify(updatedCalculations));
  };

  const shareCalculation = () => {
    const text = `DA Calculation:\nBasic Pay: ₹${parseFloat(basicPay).toLocaleString('en-IN')}\nDA (${daPercentage}%): ₹${calculateDA().toLocaleString('en-IN')}\nTotal: ₹${calculateTotal().toLocaleString('en-IN')}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'DA Calculation Results',
        text: text
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text)
        .then(() => alert('Calculation copied to clipboard!'))
        .catch(console.error);
    }
  };

  // const generatePDF = () => {
  //   const calculationDetails = {
  //     employeeType: employeeType.charAt(0).toUpperCase() + employeeType.slice(1),
  //     basicPay: parseFloat(basicPay).toLocaleString('en-IN'),
  //     daPercentage: daPercentage,
  //     daAmount: calculateDA().toLocaleString('en-IN'),
  //     total: calculateTotal().toLocaleString('en-IN'),
  //     date: new Date().toLocaleDateString(),
  //   };

  //   const content = `
  //     DA Calculation Report
  //     =====================
      
  //     Date: ${calculationDetails.date}
      
  //     Employee Details
  //     ---------------
  //     Employee Type: ${calculationDetails.employeeType} Government Employee
      
  //     Calculation Breakdown
  //     --------------------
  //     Basic Pay: ₹${calculationDetails.basicPay}
  //     DA Rate: ${calculationDetails.daPercentage}%
  //     DA Amount: ₹${calculationDetails.daAmount}
      
  //     Total Salary: ₹${calculationDetails.total}
      
  //     Notes
  //     -----
  //     - This calculation is based on the DA rate of ${daPercentage}% effective from January 2025
  //     - DA rates are subject to revision by the government
  //     - For official purposes, please verify with your organization
      
  //     Generated via DA Calculator Pro
  //     `;

  //   const blob = new Blob([content], { type: 'text/plain' });
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = `DA_Calculation_${new Date().toISOString().split('T')[0]}.txt`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   window.URL.revokeObjectURL(url);
  // };

  // const generatePDF = () => {
  //   const doc = new jsPDF();
    
  //   // Add header with logo
  //   doc.setFontSize(20);
  //   doc.setTextColor(0, 48, 143);
  //   doc.text('DA Calculation Report', 105, 20, { align: 'center' });
    
  //   // Add date
  //   doc.setFontSize(10);
  //   doc.setTextColor(100);
  //   doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
    
  //   // Add employee details
  //   doc.setFontSize(12);
  //   doc.setTextColor(0);
  //   doc.text('Employee Details', 20, 40);
    
  //   const employeeTypeFormatted = employeeType.charAt(0).toUpperCase() + employeeType.slice(1);
    
  //   const details = [
  //     ['Employee Type:', `${employeeTypeFormatted} Government Employee`],
  //     ['Basic Pay:', `₹ ${parseFloat(basicPay).toLocaleString('en-IN')}`],
  //     ['DA Rate:', `${daPercentage}%`],
  //     ['DA Amount:', `₹ ${calculateDA().toLocaleString('en-IN')}`],
  //     ['Total Salary:', `₹ ${calculateTotal().toLocaleString('en-IN')}`]
  //   ];
    
  //   doc.autoTable({
  //     startY: 45,
  //     head: [],
  //     body: details,
  //     theme: 'plain',
  //     styles: { fontSize: 12, cellPadding: 5 },
  //     columnStyles: {
  //       0: { fontStyle: 'bold', cellWidth: 40 },
  //       1: { cellWidth: 100 }
  //     }
  //   });
    
  //   // Add notes section
  //   const notes = [
  //     'Notes:',
  //     `• This calculation is based on the DA rate of ${daPercentage}% effective from January 2025`,
  //     '• DA rates are subject to revision by the government',
  //     '• For official purposes, please verify with your organization'
  //   ];
    
  //   let yPos = doc.autoTable.previous.finalY + 20;
    
  //   doc.setFontSize(12);
  //   doc.setTextColor(0);
  //   notes.forEach((note, index) => {
  //     doc.text(note, 20, yPos + (index * 7));
  //   });
    
  //   // Add footer
  //   doc.setFontSize(10);
  //   doc.setTextColor(100);
  //   const pageWidth = doc.internal.pageSize.width;
  //   doc.text('Generated via DA Calculator Pro', pageWidth/2, 280, { align: 'center' });
    
  //   // Save the PDF
  //   doc.save(`DA_Calculation_${new Date().toISOString().split('T')[0]}.pdf`);
  // };


const generatePDF = () => {
  const doc = new jsPDF();
  
  // Add professional styling and proper rupee symbol
  // const rupeeSymbol = '\u20B9'; // Unicode for Rupee symbol
  const rupeeSymbol = '';
  
  // Add header with gradient background
  doc.setFillColor(0, 48, 143);
  doc.rect(0, 0, doc.internal.pageSize.width, 35, 'F');
  
  // Add header text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(255);
  doc.text('DA Calculation Report', 105, 25, { align: 'center' });
  
  // Add date with professional formatting
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100);
  const formattedDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  doc.text(`Generated on: ${formattedDate}`, 20, 45);
  
  // Add employee details with enhanced styling
  doc.setFontSize(14);
  doc.setTextColor(0, 48, 143);
  doc.text('Employee Details', 20, 60);
  
  // Add underline for section header
  doc.setLineWidth(0.5);
  doc.line(20, 62, 100, 62);
  
  const employeeTypeFormatted = employeeType.charAt(0).toUpperCase() + employeeType.slice(1);
  
  // Improved currency formatting function
  const formatCurrency = (amount) => {
    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    const formattedAmount = numAmount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `${rupeeSymbol}${formattedAmount}`;
  };
  
  const details = [
    ['Employee Type:', `${employeeTypeFormatted} Government Employee`],
    ['Basic Pay:', formatCurrency(basicPay)],
    ['DA Rate:', `${daPercentage}%`],
    ['DA Amount:', formatCurrency(calculateDA())],
    ['Total Salary:', formatCurrency(calculateTotal())]
  ];
  
  // Enhanced table styling
  doc.autoTable({
    startY: 70,
    head: [],
    body: details,
    theme: 'grid',
    styles: {
      fontSize: 12,
      cellPadding: 8,
      lineColor: [0, 48, 143],
      lineWidth: 0.1,
      font: 'helvetica',
      minCellWidth: 40
    },
    columnStyles: {
      0: { 
        fontStyle: 'bold',
        cellWidth: 60,
        fillColor: [240, 240, 250]
      },
      1: { 
        cellWidth: 100,
        halign: 'right'
      }
    },
    alternateRowStyles: {
      fillColor: [250, 250, 255]
    },
    didParseCell: function(data) {
      if (data.column.index === 1 && data.cell.text[0]?.startsWith(rupeeSymbol)) {
        data.cell.styles.halign = 'right';
      }
    }
  });
  
  // Add notes section with enhanced styling
  const notes = [
    'Important Notes:',
    `• This calculation is based on the DA rate of ${daPercentage}% effective from January 2025`,
    '• DA rates are subject to revision by the government',
    '• For official purposes, please verify with your organization'
  ];
  
  let yPos = doc.autoTable.previous.finalY + 20;
  
  // Add notes section header with styling
  doc.setFontSize(14);
  doc.setTextColor(0, 48, 143);
  doc.text(notes[0], 20, yPos);
  doc.line(20, yPos + 2, 80, yPos + 2);
  
  // Add notes content
  doc.setFontSize(11);
  doc.setTextColor(60);
  notes.slice(1).forEach((note, index) => {
    doc.text(note, 20, yPos + 15 + (index * 8));
  });
  
  // Add professional footer with line separator
  doc.setDrawColor(0, 48, 143);
  doc.setLineWidth(0.5);
  doc.line(20, 270, doc.internal.pageSize.width - 20, 270);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  const pageWidth = doc.internal.pageSize.width;
  doc.text('Generated via DA Calculator Pro', pageWidth/2, 280, { align: 'center' });
  
  // Add page numbers
  const pageCount = doc.internal.getNumberOfPages();
  doc.setFontSize(10);
  for(let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - 30, 290);
  }
  
  // Save the PDF with formatted date in filename
  const dateStr = new Date().toISOString().split('T')[0];
  doc.save(`DA_Calculation_Report_${dateStr}.pdf`);
};




  return (
    <div className="max-w-4xl mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Dearness Allowance Calculator 2025</h1>
        <p className="text-blue-100">Updated with latest DA rates for all government employees</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Calculator Card */}
        <div className="md:col-span-2">
          <Card className="shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="mr-2" />
                  DA Calculator
                </CardTitle>
                <div className="flex gap-4">
                  <Share2 
                    className="cursor-pointer hover:text-blue-200 transition-colors" 
                    onClick={shareCalculation}
                  />
                  <Download 
                    className="cursor-pointer hover:text-blue-200 transition-colors" 
                    onClick={generatePDF}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Employee Type Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Employee Type</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={employeeType}
                    onChange={(e) => setEmployeeType(e.target.value)}
                  >
                    <option value="central">Central Government</option>
                    <option value="state">State Government</option>
                    <option value="psu">Public Sector</option>
                  </select>
                </div>

                {/* Basic Pay Input */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Basic Pay (₹)</label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={basicPay}
                    onChange={(e) => setBasicPay(e.target.value)}
                    min="0"
                    placeholder="Enter your basic pay"
                  />
                </div>

                {/* DA Percentage Info */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Current DA Rate</label>
                  <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-4 w-4 text-blue-500" />
                    <AlertDescription className="text-blue-700">
                      Current DA rate: {daPercentage}% (January 2025)
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Results Section */}
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-inner">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Calculation Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Basic Pay:</span>
                      <span>₹ {basicPay ? parseFloat(basicPay).toLocaleString('en-IN') : '0'}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>DA ({daPercentage}%):</span>
                      <span>₹ {calculateDA().toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl text-blue-700 pt-2 border-t">
                      <span>Total:</span>
                      <span>₹ {calculateTotal().toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                    onClick={saveCalculation}
                  >
                    Save Calculation
                  </button>
                  <button 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
                    onClick={generatePDF}
                  >
                    Download Report
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">

 {/* Ad Space */}
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
             <p className="text-gray-500">Advertisement Space</p>
             <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mt-2"></div>
           </div>

          {/* DA Rate History */}
          <Card className="shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <History className="mr-2" />
                DA Rate History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 rounded bg-blue-50 text-blue-700">
                  <span>Jan 2025</span>
                  <span className="font-semibold">56%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-purple-50 text-purple-700">
                  <span>Jul 2024</span>
                  <span className="font-semibold">50%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-blue-50 text-blue-700">
                  <span>Jan 2024</span>
                  <span className="font-semibold">42%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calculation History */}
          <Card className="shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Your Calculations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {calculations.length > 0 ? (
                <div className="space-y-3">
                  {calculations.map((calc, index) => (
                    <div key={index} className="p-3 rounded bg-gradient-to-r from-blue-50 to-purple-50">
                      <div className="flex justify-between text-gray-700">
                        <span>{calc.date}</span>
                        <span className="font-semibold">₹ {calc.total.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {calc.employeeType.charAt(0).toUpperCase() + calc.employeeType.slice(1)} • DA: {calc.daPercentage}%
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center p-4">No saved calculations yet</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-blue-700">What is Dearness Allowance (DA)?</h3>
            <p className="mt-2 text-gray-700">Dearness Allowance is a cost of living adjustment allowance paid to government employees and pensioners in India to offset the impact of inflation.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h3 className="font-semibold text-purple-700">How often is DA revised?</h3>
            <p className="mt-2 text-gray-700">DA is typically revised twice a year - in January and July, based on the percentage increase in the All India Consumer Price Index.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-blue-700">How is DA calculated?</h3>
            <p className="mt-2 text-gray-700">DA is calculated as a percentage of an employee's basic pay. The percentage is determined by the government based on inflation rates.</p>
          </div>
        </div>
      </div>

 {/* Footer Ad Space */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center">
         <p className="text-gray-500">Advertisement Space</p>
         <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mt-2"></div>
       </div>
     {/* </div> */}

    </div>
  );
};



export default DACalculatorPro;


