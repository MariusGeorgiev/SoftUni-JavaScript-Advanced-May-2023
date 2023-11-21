function timeToWalk(steps, stepsInMeters, speedInKm) {
  const distanceMetres = steps * stepsInMeters;
  const speedMetersSec = speedInKm / 3.6;
  const time = distanceMetres / speedMetersSec;
  const rest = Math.floor(distanceMetres / 500);

  const timeMin = Math.floor(time / 60);
  const timeSec = Math.round(time - timeMin * 60);
  const timeHr = Math.floor(time / 3600);

  const hh = timeHr < 10 ? "0" : "";
  const mm = timeMin + rest < 10 ? "0" : "";
  const ss = timeSec < 10 ? "0" : "";

  console.log(`${hh + timeHr}:${mm + (timeMin + rest)}:${ss + timeSec}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
