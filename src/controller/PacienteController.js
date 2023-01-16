import PacienteModel from "../model/PacienteModel.js"

class PacienteController {

    async getOne(req, res) {
        const { id } = req.params

        try {
            const paciente = await PacienteModel.findByPk(id)

            if (paciente) {
                return res.json(paciente)
            }
            res.json({ message: "paciente não encontrado!" })
        } catch (error) {
            res.status(400).json({ message: "erro!" })
        }
    }

    async index(req, res) {
        const paciente = await PacienteModel.findAll()
        res.json({ items: paciente })
    }

    async store(req, res) {
        const { nome, idade, faltas, descricao } = req.body

        try {
            const paciente = await PacienteModel.create({
                nome,
                idade,
                faltas,
                descricao
            })
            res.json({ message: "Paciente criado!", paciente })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    async update(req, res) {

        const { id } = req.params
        const { nome, idade, faltas, descricao } = req.body

        try {

            const paciente = await PacienteModel.update({
                nome,
                idade,
                faltas,
                descricao
            },
            {where: { id: id }})

            let pacienteAtualizado = await PacienteModel.findByPk(id)

            return res.json({ message: "Paciente atualizado!", pacienteAtualizado })

        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    async remove(req, res) {
        const { id } = req.params

        const paciente = await PacienteModel.findByPk(id)

        if (paciente) {
            await paciente.destroy()
            return res.json({ message: "Paciente removido!" })
        }
        res.status(404).json({ message: "Paciente não encontrado!" })

    }

}

export default PacienteController