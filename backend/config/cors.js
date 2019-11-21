module.exports = function (req, res, next) {
    //permitir acesso as APIS de qualquer IP
    res.header('Access-Control-Allow-Origin', '*')
    //permitir acesso as APIS com métodos GET, POST, PUT e DELETE
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //configura o cabeçalho da resposta
    res.header('Access-Control-Allow-Headers', '*')
    //executa próxima atividade
    next()
    }