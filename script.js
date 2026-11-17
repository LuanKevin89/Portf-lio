
// Informações do currículo

const curriculo = {

    dadosPessoais: {
        nome: "Luan Kevin Martins Calixto",
        idade: 25,
        cargo: "Estudante de Análise e Desenvolvimento de Sistemas",
        email: "luankevin89@gmail.com",
        telefone: "(11) 94136-2597",
        cidade: "Suzano - SP",
        linkedin: "https://www.linkedin.com/in/luan-kevin-17b3371a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        github: "https://github.com/LuanKevin89"
    },

    sobreMim: "Sou estudante de Análise e Desenvolvimento de Sistemas, com grande interesse em tecnologia, programação e desenvolvimento web. Atualmente trabalho na área de faturamento com emissão de conhecimentos de transporte, rotina que desenvolveu minha precisão com dados, familiaridade com sistemas e gestão de tempo enquanto concilio trabalho e estudos. Estou em busca de um estágio para evoluir tecnicamente e construir minha trajetória na área de TI.",

    formacao: {
        instituicao: "Centro Universitário Piaget (UNIPiaget)",
        curso: "Análise e Desenvolvimento de Sistemas",
        semestre: "1º semestre",
        situacao: "Cursando"
    },

    experiencia: [
        {
            empresa: "Suzanlog Logistica LTDA",
            cargo: "Assistente de faturamento pleno",
            inicio: "03/04/2025",
            termino: "Atual",
            descricao: "Atuação na área de faturamento com emissão de Conhecimentos de Transporte (CT-e), conciliando a rotina profissional com a graduação em Análise e Desenvolvimento de Sistemas."
        }
    ],

    conhecimentos: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "SQL",
        "MySQL",
        "Git e GitHub"
    ],

    nivelConhecimento: "Básico",

    habilidades: [
        "Atenção aos detalhes: Habilidade essencial para evitar erros na emissão de documentos fiscais e na escrita de códigos de programação.",
        "Gestão de tempo: Competência comprovada pela sua rotina de conciliar o trabalho diário com os estudos da faculdade.",
        "Resolução de problemas: Capacidade de identificar falhas em processos ou sistemas e buscar soluções práticas rapidamente.",
        "Adaptabilidade: Flexibilidade para lidar com mudanças de ferramentas, novos sistemas e diferentes demandas de trabalho"
    ],

    projetos: [
        {
            nome: "Projetos acadêmicos de programação",
            descricao: "Desenvolvimento de atividades práticas durante a graduação, envolvendo lógica de programação, desenvolvimento web e banco de dados.",
            tecnologias: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "SQL"
            ]
        }
    ],

    objetivoProfissional: "Conquistar uma oportunidade de estágio em Desenvolvimento de Software.",

    disponibilidade: "Presencial, remoto ou híbrido"

};


// Função para carregar as informações no HTML

function carregarCurriculo() {

    // Dados pessoais

    document.getElementById("nome").textContent =
        curriculo.dadosPessoais.nome;

    document.getElementById("cargo").textContent =
        curriculo.dadosPessoais.cargo;

    document.getElementById("email").textContent =
        curriculo.dadosPessoais.email;

    document.getElementById("telefone").textContent =
        curriculo.dadosPessoais.telefone;

    document.getElementById("cidade").textContent =
        curriculo.dadosPessoais.cidade;

    document.getElementById("sobre").textContent =
        curriculo.sobreMim;

    document.getElementById("objetivo").textContent =
        curriculo.objetivoProfissional;

    document.getElementById("disponibilidade").textContent =
        curriculo.disponibilidade;


    // Formação acadêmica

    document.getElementById("formacao").textContent =
        curriculo.formacao.curso + " - " +
        curriculo.formacao.instituicao;

    document.getElementById("semestre").textContent =
        curriculo.formacao.semestre + " | " +
        curriculo.formacao.situacao;


    // Links das redes sociais

    const linkedin = document.getElementById("linkedin");
    linkedin.href = curriculo.dadosPessoais.linkedin;

    const github = document.getElementById("github");
    github.href = curriculo.dadosPessoais.github;


    // Experiência profissional

    const experiencia = document.getElementById("experiencia");

    curriculo.experiencia.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("experiencia-item");

        const empresa = document.createElement("h3");
        empresa.textContent = item.empresa;

        const cargo = document.createElement("p");
        cargo.textContent = item.cargo;

        const periodo = document.createElement("p");
        periodo.textContent = item.inicio + " - " + item.termino;

        const descricao = document.createElement("p");
        descricao.textContent = item.descricao;

        div.appendChild(empresa);
        div.appendChild(cargo);
        div.appendChild(periodo);
        div.appendChild(descricao);

        experiencia.appendChild(div);

    });


    // Conhecimentos técnicos

    const conhecimentos = document.getElementById("conhecimentos");

    curriculo.conhecimentos.forEach(item => {

        const span = document.createElement("span");

        span.textContent = item + " - " + curriculo.nivelConhecimento;

        conhecimentos.appendChild(span);

    });


    // Projetos acadêmicos

    const projetos = document.getElementById("projetos");

    curriculo.projetos.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("projeto-item");

        const nome = document.createElement("h3");
        nome.textContent = item.nome;

        const descricao = document.createElement("p");
        descricao.textContent = item.descricao;

        const tecnologias = document.createElement("p");
        tecnologias.textContent =
            "Tecnologias: " + item.tecnologias.join(", ");

        div.appendChild(nome);
        div.appendChild(descricao);
        div.appendChild(tecnologias);

        projetos.appendChild(div);

    });


    // Habilidades

    const habilidades = document.getElementById("habilidades");

    curriculo.habilidades.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        habilidades.appendChild(li);

    });

}


// Executar quando a página carregar

document.addEventListener("DOMContentLoaded", carregarCurriculo);