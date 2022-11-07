import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

import { chartOption, areaOption } from './config';

const Chart = ({ data, priceLineOptions, ...rest }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartRef.current, chartOption);
    const areaSeries = chart.addAreaSeries(areaOption);
    areaSeries.setData(data);

    // Make Chart Responsive with screen resize
    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== chartRef.current) {
        return;
      }
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    }).observe(chartRef.current);

    return () => {
      chart.remove();
    };
  }, [data, rest]);

  return (
    <div
      style={{
        height: '400px',
        position: 'relative',
        width: '100%',
      }}
      ref={chartRef}
      {...rest}
    />
  );
};

export default Chart;
