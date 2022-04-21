function timeConversion(s) {
  if (s.includes('AM')) {
    const time = s.replace('AM', '');
    if (s[0] === '1' && s[1] === '2') {
       const timeConverted = '00' + time.slice(2);
       return timeConverted; 
    }

    return time;
  }

  const hour = s.slice(0, 2);
  const minutesAndSeconds = s.slice(2).replace('PM', '');

  switch (hour) {
    case '01':
      return '13' + minutesAndSeconds;
    case '02':
      return '14' + minutesAndSeconds;
    case '03':
      return '15' + minutesAndSeconds;
    case '04':
      return '16' + minutesAndSeconds;
    case '05':
      return '17' + minutesAndSeconds;
    case '06':
      return '18' + minutesAndSeconds;
    case '07':
      return '19' + minutesAndSeconds;
    case '08':
      return '20' + minutesAndSeconds;
    case '09':
      return '21' + minutesAndSeconds;
    case '10':
      return '22' + minutesAndSeconds;
    case '11':
      return '23' + minutesAndSeconds;
  
    default:
      return hour + minutesAndSeconds;
  }


};

console.log(timeConversion('01:01:00PM'));