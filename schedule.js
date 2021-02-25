//We do not need to define a schedule for every traffic light. By default a traffic light's schedule is always to remain red
class Schedule {
    // lightSchedules is an dictionary that maps each incoming street to a duration
  constructor(lightSchedules) {
      this.lightSchedules = lightSchedules
  }
}

module.exports.Schedule = Schedule
