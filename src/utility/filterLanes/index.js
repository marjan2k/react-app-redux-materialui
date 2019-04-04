export const filterLanes = (laneList, key) => {
  if (!laneList) {
    return [];
  }
  switch (key) {
    case 'isOutbid':
      return laneList.filter(laneItem => laneItem.isOutbid);
    case 'isWatching':
      return laneList.filter(laneItem => ((laneItem.isWatching) || (laneItem.itemsWatching && laneItem.itemsWatching > 0)));
    case 'isWinning':
      return laneList.filter(laneItem => laneItem.isWinning);
    default:
      return laneList;
  }
};
