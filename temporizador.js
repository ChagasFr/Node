const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// time para o cancelamento
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelamento tarefa 1')
}, 20000)


// regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30