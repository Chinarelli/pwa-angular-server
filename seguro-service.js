const { SEGUROS } = require('./in-memory-db');

exports.salvarSeguros = (req, res) => {
    const seguro = req.body;

    SEGUROS.push(seguro);
    console.log('Seguro Adicionado', seguro);
    res.status(200).json({menssage: 'Seguro adicionado com sucesso!'});
}

exports.listarSeguros = (req, res) => {
    res.status(200).json(SEGUROS);
}