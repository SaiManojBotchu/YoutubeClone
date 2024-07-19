export default function formatViews(views) {
  if (views >= 1000000000) {
    return `${toFixedWithoutZeros(views / 1000000000, 1)}B`;
  }
  if (views >= 1000000) {
    return `${toFixedWithoutZeros(views / 1000000, 1)}M`;
  }
  if (views >= 1000) {
    return `${toFixedWithoutZeros(views / 1000, 0)}K`;
  }
  return views;
}

const toFixedWithoutZeros = (num, precision) => Number.parseFloat(num.toFixed(precision));
