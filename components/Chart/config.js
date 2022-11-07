export const chartOption = {
  crosshair: {
    vertLine: {
      color: 'rgba(100, 100, 100, 0.4)',
    },
    horzLine: {
      color: 'rgba(100, 100, 100, 0.4)',
      labelBackgroundColor: '#f5f5fe',
    },
  },
  layout: {
    backgroundColor: 'transparent',
    textColor: '#787F83',
    fontFamily: 'Danila',
    fontSize: 14,
  },
  grid: {
    vertLines: {
      visible: false,
    },
    horzLines: {
      visible: false,
    },
  },
  leftPriceScale: {
    visible: true,
    borderVisible: true,
    drawTicks: false,
  },
  rightPriceScale: {
    borderVisible: true,
    drawTicks: false,
  },
  timeScale: {
    fixLeftEdge: true,
    fixRightEdge: true,
    lockVisibleTimeRangeOnResize: true,
    rightBarStaysOnScroll: true,
    visible: true,
  },
  handleScroll: false,
  handleScale: false,
};

export const areaOption = {
  lineWidth: 1,
  lineColor: 'rgb(100, 100, 100)',
  lineType: 0,
  topColor: 'rgba(100, 100, 100, 0.4)',
  bottomColor: 'rgba(0, 0, 0, 0)',
  crosshairMarkerRadius: 8,
  crosshairMarkerBorderColor: 'rgba(100, 100, 100, 0.4)',
  crosshairMarkerBackgroundColor: '#FFF',
};

export const DATA = [
  { time: '2022-10-01', value: 21.93 },
  { time: '2022-10-02', value: 18.43 },
  { time: '2022-10-03', value: 15.31 },
  { time: '2022-10-04', value: 11.02 },
  { time: '2022-10-05', value: 27.01 },
  { time: '2022-10-06', value: 32.31 },
  { time: '2022-10-07', value: 8.24 },
  { time: '2022-10-08', value: 15.38 },
  { time: '2022-10-09', value: 40.29 },
];
