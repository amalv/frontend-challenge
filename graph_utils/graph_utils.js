/**
 * GRAPH FUNCTIONS.
 */

/**
 * getNodeInputConnections: Get a node input connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  return Object.values(graph.connections).filter(
    (connection) => connection.targetPath === node.id
  );
}

/**
 * getNodeOutputConnections: Get a node output connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  return Object.values(graph.connections).filter(
    (connection) => connection.sourcePath === node.id
  );
}

/**
 * getNodeConnections: Get a node connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  return Object.values(graph.connections).filter((connection) =>
    connection.id.includes(node.id)
  );
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  const nodesWithOutputConnections = Object.values(graph.connections).map(
    (connection) => connection.sourcePath
  );

  return Object.values(graph.nodes).filter(
    (node) => !nodesWithOutputConnections.includes(node.id)
  );
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  const nodesWithInputConnections = Object.values(graph.connections).map(
    (connection) => connection.targetPath
  );

  return Object.values(graph.nodes).filter(
    (node) => !nodesWithInputConnections.includes(node.id)
  );
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  const numberSources = Object.values(graph.connections)
    .filter((connection) => connection.targetPath === node.id)
    .reduce((acc, connection) => (acc += 1), 0);

  return numberSources > 1 ? true : false;
}
