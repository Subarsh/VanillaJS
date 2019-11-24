function drawDonutChart(){
    var width = document.getElementById('donut-graph').getAttribute('width');
    var height = document.getElementById('donut-graph').getAttribute('height');

    var radius = Math.min(width,height)/2 -80;
    let data = [2];

    var color = d3.scaleOrdinal()
        .domain([0,30])
        .range(['steelblue']);

    var svg = d3.select('#donut-graph')
        .append('svg')
        .attr('width',width)
        .attr('height',height)
        .append('g')
        .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');

    var arc = d3.arc()
        .outerRadius(radius-10)
        .innerRadius(radius)
        .startAngle(30)
        .endAngle(60);

    var pie = d3.pie()
        .sort(null)
        .value(function(d){ return d});
    
    svg.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class','arc')
        .append('path')
        .attr('d', arc)
        .style('fill', function(d){ return color(d.data)});

    svg.append('text')
        .attr('transform', function(d){
            return "translate(" + arc.centroid(d) + ")";
        })
        .text(function(d){
            return d.data + "Days Remaining"
        })

    

}