var AdjacencyList = function() {

}


var graph = function () {
  //
  // private
  //
  var _force = null;
  var _links = null;
  var _link = null;
  var _nodes = null;
  var _node = null;
  var _svg = null;
  var _fill = null;
  var _al = {}; //Adjacency list @EXPERIMENTAL



  var _tick = function(){
      _link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
      _node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
  };

  var _restart = function(){
    _link = _link.data(_links);

    _link.enter().insert("line", ".node")
        .attr("class", "link");

    _node = _node.data(_nodes);

    _node.enter().insert("circle", ".cursor")
       .attr("class", "node")
       .attr("r", 5);
    _force.start();
  };

    return {
      //
      //public
      //
      debug: function(){
        debugger;
      },

      width: 0,

      height: 0,

      create: function (width, height) {
        if(!width) width = 960;
        if(!height) height = 500;
        this.width = width; this.height = height;

        _fill = d3.scale.category20();
        _force = d3.layout.force()
          .size([width, height])
          .nodes([{}]) // initialize with a single node
          .linkDistance(30)
          .charge(-60)
          .on("tick", _tick);
    
        _svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("id", "graph");
    
        _svg.append("rect")
          .attr("width", width)
          .attr("height", height);
    
        _nodes = _force.nodes();
        _links = _force.links();
        _node = _svg.selectAll(".node");
        _link = _svg.selectAll(".link");

        _restart();
      },

      createGraphFromJson: function(json){
        
        _force = null;
        _force = d3.layout.force()
          .size([this.width, this.height])
          .nodes(json.nodes) // initialize with a single node
          .links(json.links)
          .linkDistance(30)
          .charge(-60)
          .on("tick", _tick);

        _nodes = _force.nodes();
        _links = _force.links();
        _node = _svg.selectAll(".node");
        _link = _svg.selectAll(".link");

        _restart();
      
      },

      createNode: function(xPos, yPos) {
        if(!xPos) xPos = this.height/2;
        if(!yPos) yPos = this.height/2;

        _nodes.push({x: xPos, y: yPos});
        _restart();
      },

      generateGraph: function(){
        var Min = 1; var Max = 20;
        for(var i = 0; i <= 20; i++){
          this.createNode();
        }
        for(i = 0; i < 10; i++){
          graph.createEdge(Math.floor(Math.random() * Max) + Min, Math.floor(Math.random() * Max) + Min );
        }
      },

      createEdge: function(nodeSource, nodeTarget) {
        if(!nodeSource || !nodeTarget) return;
        _links.push({source: _nodes[nodeSource], target: _nodes[nodeTarget] });

        //Adjacency list
        if(!_al[nodeSource])
          _al[nodeSource] = new Array;
        _al[nodeSource].push(nodeTarget);

        _restart();
      },

      getEdges: function(node){
        if(!node) return;
        return _al[node]; //returns an array with all edges with this node

      }

    };
 
}()

graph.create(400 ,600);
