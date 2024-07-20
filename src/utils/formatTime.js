export default function formatTime(dateString) {
  const now = new Date();
  const publishedDate = new Date(dateString);
  const diffInSeconds = Math.floor((now - publishedDate) / 1000);

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'week', seconds: 604800 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 }
  ];

  for (const unit of units) {
    const unitValue = Math.floor(diffInSeconds / unit.seconds);
    if (unitValue >= 1) {
      return `${unitValue} ${unit.name}${unitValue > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}
