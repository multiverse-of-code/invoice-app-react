import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "./assets/logo_hitam.png";

const makeNewPDF = () => {
    // Custom the size of the PDF
    const doc = new jsPDF('p', 'mm', 'a4')
    doc.setLineHeightFactor(1.25)

    doc.addImage(logo, 'PNG', 23, 15, 29.89, 6.01)

    // Set the font family
    doc.setFont('Poppins', 'bold')
    
    // Create text on the center of the PDF
    doc.setFontSize(21.35)
    doc.text('INVOICE', 89.97, 38.39)
    
    doc.setFontSize(10.42)
    doc.text('Invoice to.', 118.48, 65.38)
    
    doc.text(`Invoice No`, 21.57, 73.51)
    doc.text(`Invoice Issued`, 21.57, 78.17)
    
    doc.text('Note.', 21.57, 229.19)
    doc.text('Released by', 167.97, 266.96)
    
    doc.setFont('Poppins', 'normal')
    const textColor = 90
    doc.setTextColor(textColor, textColor, textColor)

    doc.setFontSize(10.99)
    doc.text('DOWN PAYMENT', 21.46, 65.02, {
      charSpace: 0.05
    })

    doc.setFontSize(9.26)
    doc.text('*Keterangan lainnya tertera di Pricelist Wisuda Esok Hari atau WhatsApp admin', 21.78, 235.51)

    doc.text(`@wisudaesokhari
    +62 896 5031 3683 (Silvi)`, 191, 271.68, {align: 'right'})

    // Create table using autoTable with no header
    autoTable(doc, {
      margin: { top: 107.3, left: 18.51 },
      head: [[
        {
          content: 'Item',
          styles: {
            halign: 'left',
            cellPadding: { left: 6.1 },
          }
        },
        {
          content: 'Time',
          styles: {
            halign: 'right',
            cellPadding: { right: 0 },
          }
        },
        {
          content: 'DP Fee',
          styles: {
            halign: 'left',
            cellPadding: { left: 5 },
          }
        },
        {
          content: 'Information',
          styles: {
            halign: 'right',
            cellPadding: { right: 5 },
          }
        }]],
      body: [
        // TODO: Change with data
        ['Booking foto wisuda "Solo Session 1"', '12 Agustus 2023 (14.00 - 15.00)', 'Rp. 100.000', 'Lokasi: Taman Balekambang'],
        ['Booking foto wisuda "Solo Session 2"', '12 Agustus 2023 (14.00 - 15.00)', 'Rp. 100.000', 'Lokasi: Taman Balekambang'],
      ],
      theme: 'plain',
      styles: {
        font: 'Poppins',
        fontStyle: 'normal',
        fontSize: 9.26,
        valign: 'top',
        textColor: [textColor, textColor, textColor],

      },
      headStyles: {
        fillColor: [223,223,223],
        textColor: [0,0,0],
        fontStyle: 'bold',
        fontSize: 9.26,
        minCellHeight: 9.21,
        valign: 'middle',
      },
      tableWidth: 174.45,
      columnStyles: {
        0: {
          cellWidth: 45,
          cellPadding: { left: 6.1, top: 4 },
        },
        1: {
          halign: 'right',
          cellWidth: 35,
          cellPadding: { left: 2, top: 4 },
        },
        2: {
          halign: 'left',
          cellWidth: 40,
          cellPadding: { left: 5, top: 4  },
        },
        3: {
          halign: 'right',
          cellPadding: { right: 5, top: 4 },
        }
      },
    })

    // Place the text below the table
    doc.text(`Ratecard :
    Disc (0%) :
    Remaining :
    
    Subtotal  :
    `, 140, doc.lastAutoTable.finalY + 10, {align: 'right'})

    // TODO: Change with data
    doc.text(`IDR 30,000,00
    IDR 0,00
    IDR 10.000,00
    
    IDR 10,000,00`, 188, doc.lastAutoTable.finalY + 10, {align: 'right'})

    doc.text(`Zakya Hayu Laksita
0838 3067 1920
    
Mahasiswi Fakultas Ekonomi & Bisnis
Universitas Airlangga
Surabaya`, 118.68, 70.78)

    doc.text(`INV/W-EH/SS1/041/VII/23`, 53.98, 73.06)
    doc.text(`12 Juli 2023`, 53.98, 78.17)

    // Preview PDF
    doc.output('dataurlnewwindow')
  }

  export default makeNewPDF