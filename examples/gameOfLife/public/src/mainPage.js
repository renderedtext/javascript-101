$(document).ready(() => {
   console.log('script loaded');
   const pop = new Population(10, 10);
   let canvas = new fabric.Canvas('canvas');

   const i = setInterval(() => {
     pop.iter();
     draw();
   }, 1000);

   $("#stop").click(() => {
     clearInterval(i);
   });

   $("#reset").click(() => {
     pop.init();
   });

   const draw = () => {
     canvas = new fabric.Canvas('canvas');
     for (let [rowIdx, row] of pop.map.entries()) {
       for (let [colIdx, val] of row.entries()) {
         let color = (val === 1 ? 'green' : 'red')
         let rect = new fabric.Rect({
           left: colIdx * 50,
           top: rowIdx * 50,
           fill: color,
           width: 50,
           height: 50,
           selectable: false
         });
         canvas.add(rect);
       }
     }
     canvas.renderAll();
   };

   const initEl = () => {
    const gridEl = [];
    for (const [rowIdx, row] of pop.map.entries()) {
      for (const [colIdx, val] of row.entries()) {
        const rect = new fabric.Rect({
          left: colIdx * 50,
          top: rowIdx * 50,
          fill: 'white',
          width: 50,
          height: 50,
          selectable: false
        });
        rect.name = rowIdx * pop.rows + colIdx
      }
    }
   };

});
