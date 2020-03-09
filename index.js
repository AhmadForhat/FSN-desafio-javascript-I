// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação
const adicionarALunos = (nome, modelo) => {
    alunosDaEscola.push({nome: nome, modelo: modelo})
    console.log("Aluno adicionado com sucesso!!")
    return "Aluno adicionado com sucesso!!"
}

const listarAlunos = () => {
    const listaAlunos = alunosDaEscola.map(aluno => aluno.nome)
    console.log(listaAlunos)
    return listaAlunos
}

const buscarAlunos = (nome) => {
    const filtrarAlunos = alunosDaEscola.filter(aluno => aluno.nome === nome)
    if(filtrarAlunos){
        console.log(filtrarAlunos)
        return filtrarAlunos
    }else{
        console.log(`O aluno ${nome} não foi encontrado na lista`)
        return `O aluno ${nome} não foi encontrado na lista`
    }
}

const matricularAluno = (nome, curso) => {
    const filtrarAlunos = alunosDaEscola.filter(aluno => aluno.nome === nome)
    if(filtrarAluno){
        filtrarAlunos.cursos.push(curso)
        console.log(`O aluno ${nome} foi adicionado ao curso ${curso} com sucesso`)
        return `O aluno ${nome} foi adicionado ao curso ${curso} com sucesso`
    }else{
        console.log(`O Aluno ${nome}, não foi encontrado no cadastro`)
        return `O Aluno ${nome}, não foi encontrado no cadastro`
    }

}

const aplicarFalta = (nomes) => {
    nomes.map(nome => {
        const filtrarAlunos = alunosDaEscola.filter(aluno => aluno.nome === nome.nome)
        if(filtrarAluno){
            filtrarAlunos.faltas + 1
            console.log(`O aluno ${nome} teve uma falta adicionada`)
            return `O aluno ${nome} teve uma falta adicionada`
        }else{
            console.log(`O Aluno ${nome}, não foi encontrado no cadastro`)
            return `O Aluno ${nome}, não foi encontrado no cadastro`
        }
    })
}

const aplicarNota = (nomes) => {
    nomes.map(nome => {
        const filtrarAlunos = alunosDaEscola.filter(aluno => aluno.nome === nome.nome)
        if(filtrarAluno){
            filtrarAlunos.nota.push(nome.notas)
            console.log(`O aluno ${nome.nome} teve suas notas adicionadas`)
            return `O aluno ${nome.nome} teve uma falta adicionada`
        }else{
            console.log(`O Aluno ${nome.nome}, não foi encontrado no cadastro`)
            return `O Aluno ${nome.nome}, não foi encontrado no cadastro`
        }
    })
}

const aprovarAluno = (nome) =>{
    const filtrarAluno = alunosDaEscola.filter(aluno => aluno.nome === nome)
    if(filtrarAluno){
        if(((filtrarAluno.notas.reduce((anterior,depois) => anterior+depois))/filtrarAluno.notas.length) >= 7 && filtrarAluno.faltas <= 3){
            console.log(`O aluno ${nome} foi aprovado!`)
            return `O aluno ${nome} foi aprovado`
        }else{
            console.log(`O aluno ${nome} foi reprovado!`)
            return `O aluno ${nome} foi reprovado`
        }
    }else{
        console.log(`O Aluno ${nome}, não foi encontrado no cadastro`)
        return `O Aluno ${nome}, não foi encontrado no cadastro`
    }

}