# DESIGNDOC

``graph-js`` is the javascript library built on top of D3.JS to interact with a graph.

``graph-player`` is the interface used to create graphs and interact with graph algorithms.

## Overview

Note: overview from a product-centric view.

### Terminology:

* **graph**: the instance of graph which manages the nodes and links. 
			 Can be a directed or undirected graph.


### Description

##### Content Area

##### Controls Bar

###### Creating Graphs


## Implementation

### Technologies


HTML5, JS, CSS3

Libraries:

* jQuery (js)
* d3.js

##### Public API Functions 
-inspired form http://docs.oracle.com/cd/E21764_01/apirefs.1111/e13403/javax/ide/util/Graph.html


add(node)
	Adds a vertex to the graph.

connect(nodeSource, nodeTarget)
	Creates a connection between two vertices.

contains(node)

getInwardEdges(nodeTo)
    Returns the list of vertices that a connects to a specified vertex. Returns an array

getOutwardEdges(nodeFrom)
	Returns the list of vertices that a specified vertex connects to.

getSortedVertices()
	Get an ordered list of vertices, sorted such that for any given vertex A with a directed edge to vertex B, index(B) < index(A).
 
 getSortedVertices(nodeStart)
 	Get an ordered list of vertices, sorted such that for any given vertex A with a directed edge to vertex B, index(B) < index(A).

getVerticesConnectedTo(node)
	Get all vertices connected to the specified vertex.

iterator()
	Returns an iterator over the vertices in this graph.

remove(node)

size()
           
subgraph(vertices[])
	returns subgraph based on specified verticies



##### Private API Functions 

