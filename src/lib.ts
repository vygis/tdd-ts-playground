function _traverse(path: string[], target: string, nextBatch: string[], network: {[key: string]: string[]}): string[] {
  if (!nextBatch || !nextBatch.length) {
    return null;
  };
  if (nextBatch.includes(target)) {
    return [...path, target];
  };
  return nextBatch
    .filter(n => !path.includes(n)) // avoiding circular paths
    .reduce((shortestPath: string[], n) => {
    const nextPath = _traverse([...path, n], target, network[n], network);
    if (!nextPath) {
      return shortestPath;
    }
    if (!shortestPath) {
      return nextPath;
    }
    if (nextPath.length < shortestPath.length) {
      return nextPath;
    }
    return shortestPath;
    }, null);
}

// solution to https://www.interviewcake.com/question/python/mesh-message

export function getShortestPath(origin: string, target: string, network: {[key: string]: string[]}): string[] {
  return _traverse([origin], target, network[origin], network);
}
