var graph = {
  force: null,
  links: null,
  link: null,
  nodes: null,
  node: null,
  svg: null,


  init: function(){
    var width = 960,
    height = 500;
    var link,  node;

    var fill = d3.scale.category20();

    var that = this;

    this.force = d3.layout.force()
       .size([width, height])
       .nodes([{}]) // initialize with a single node
       .linkDistance(30)
       .charge(-60)
       .on("tick", this.tick);

    this.svg = d3.select("body").append("svg")
       .attr("width", width)
       .attr("height", height)
       .attr("id", "graph");

    this.svg.append("rect")
       .attr("width", width)
       .attr("height", height);

    this.nodes = this.force.nodes(),
    this.links = this.force.links(),
    this.node = this.svg.selectAll(".node"),
    this.link = this.svg.selectAll(".link");

    node = this.node;
    link = this.link;

  },

  createNode: function(xVal, yVal){
   var node = {x: xVal, y: yVal};
   this.nodes.push(node);

   this.restart();
  },

  createEdge: function(nodeSource, nodeTarget){
    this.links.push({source: node, target: target});
  },

  restart: function(){
    this.link = this.link.data(this.links);

    this.link.enter().insert("line", ".node")
        .attr("class", "link");

    this.node = this.node.data(this.nodes);

    this.node.enter().insert("circle", ".cursor")
       .attr("class", "node")
       .attr("r", 5)
       .call(this.force.drag);

    this.force.start();
  },

  tick: function(){
    this.link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    this.node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
  },

  randomNumber: function(min, max){
    return Math.random() * (max - min) + min;
  }

}
// this:
graph.init();
