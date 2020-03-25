  
const drawColumn = (xScale, yScale, parentGroup, data, xScaleAttrName, yScaleAttrName, barMaxHeight, barWidth,color) => {
  const rects = parentGroup.selectAll('rect')
    .data(data)

  rects.enter()
   .append('rect')
   .attr('width', barWidth)
   .attr('height', d => barMaxHeight - yScale(d[yScaleAttrName]))
   .attr('fill', color)
   .attr('x', d => xScale(d[xScaleAttrName]))
   .attr('y', d => yScale(d[yScaleAttrName]));
}
