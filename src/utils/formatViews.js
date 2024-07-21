export default function formatViews(views) {
  if (views >= 1000000000) {
    return `${toFixedWithoutZeros(views / 1000000000, 1)}B`;
  } else if (views >= 1000000) {
    return `${toFixedWithoutZeros(views / 1000000, 1)}M`;
  } else if (views >= 10000) {
    return `${toFixedWithoutZeros(views / 1000, 0)}K`;
  } else if (views >= 1000) {
    return `${toFixedWithoutZeros(views / 1000, 1)}K`;
  }
  return views;
}

const toFixedWithoutZeros = (num, precision) => {
  const factor = Math.pow(10, precision);
  const res = Math.floor(num * factor) / factor;
  return res.toFixed(precision).replace(/\.0+$/, '');
};
