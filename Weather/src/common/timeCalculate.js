const timeDurationConvert = (timeInSec) => {
  if (isNaN(timeInSec)) {
    return 'Updating time..';
  }

  let hours = Math.floor(timeInSec / 3600);
  let minutes = Math.floor((timeInSec - hours * 3600) / 60);
  let seconds = timeInSec - hours * 3600 - minutes * 60;

  if (hours > 1 && minutes === 0) {
    return `${hours} hours ago`.replace(/^0+/, '');
  }
  if (hours > 1 && minutes > 1) {
    return `${hours} hours ${minutes} minutes ago`.replace(/^0+/, '');
  }
  if (hours > 1 && minutes === 1) {
    return `${hours} hours ${minutes} minute ago`.replace(/^0+/, '');
  }
  if (hours === 1 && minutes > 1) {
    return `${hours} hour ${minutes} minutes ago`.replace(/^0+/, '');
  }
  if (hours === 1 && minutes === 0) {
    return `${hours} hour ago`.replace(/^0+/, '');
  }
  if (hours === 1 && minutes === 1) {
    return `${hours} hour ${minutes} minute ago`.replace(/^0+/, '');
  }
  if (hours < 1 && minutes === 1) {
    return `${minutes} minute ago`.replace(/^0+/, '');
  }
  if (hours < 1 && minutes > 1) {
    return `${minutes} minutes ago`.replace(/^0+/, '');
  }
  if (hours < 1 && minutes < 1 && seconds > 30) {
    return `${seconds} seconds ago`.replace(/^0+/, '');
  }
  if (hours < 1 && minutes < 1 && seconds <= 30) {
    return 'few seconds ago'.replace(/^0+/, '');
  }

  return hours + ':' + minutes + ':' + seconds;
};

export default timeDurationConvert;
