function clock(hour, minute) {
  if (hour > 23 || hour < 0 || minute > 60 || minute < 0) {
    return false
  }
  // 360度 每小时30度 
  const hourNum = hour * 30 + (minute / 60) * 30
  // 6度
  const minuteNum = minute * 6

  let res = Math.abs(hourNum - minuteNum)

  res = Math.min(360-res, res)

  return res
}

console.log(clock(16, 37))

// 0-23 : 0-59