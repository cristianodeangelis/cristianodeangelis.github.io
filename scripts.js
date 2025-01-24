document.addEventListener('DOMContentLoaded', function() {
    const publicaciones = [
        {
            "titulo": "Um plano de inteligência Cultural para reduzir o déficit de talentos",
            "autores": "Cristiano Trindade De Angelis",
            "instituicao": "Skema Business School",
            "orcid": "https://orcid.org/0000-0002-8025-7871",
            "doi": "https://doi.org/10.47681/rca.v8i2.59185",
            "data": "01/01/2023",
            "resumo": "Este artigo levanta a discussão da importância de criar conhecimento e experiência relevantes...",
            "palavras_chave": ["fuga de cérebros", "inteligência cultural", "indústria 4.0", "gestão do conhecimento", "cultura nacional", "inteligência organizacional"],
            "local": "Brasil, Alemanha",
            "idioma": "Português",
            "enlace": "https://doi.org/10.47681/rca.v8i2.59185",
            "tipo": "investigacion"
        },
        {
            "titulo": "A Emergência da reforma do estado brasileiro: a governança compartilhada e o modelo do novo serviço público",
            "autores": "Cristiano Trindade De Angelis",
            "instituicao": "Instituto de Pesquisa Econômica Aplicada (Ipea)",
            "orcid": "https://orcid.org/0000-0002-8025-7871",
            "doi": null,
            "data": "01/01/2023",
            "resumo": "Os protestos organizados por meio de redes sociais que levaram à queda de governos e as mudanças constitucionais...",
            "palavras_chave": ["reforma do estado", "governança compartilhada", "novo serviço público", "gestão do conhecimento", "inteligência organizacional"],
            "local": "Brasil",
            "idioma": "Português",
            "enlace": "https://repositorio.ipea.gov.br/handle/11058/6639"
            ,
            "tipo": "investigacion"
        },
        
    {
        "titulo": "Uma proposta de um modelo de inovação e inteligência governamental",
        "autores": "Cristiano De Angelis Trindade",
        "instituicao": "Skema Business School, França",
        "orcid": null,
        "doi": "https://www.revistas.usp.br/rai/article/view/79339",
        "data": "01/10/2013",
        "resumo": "A mudança ainda incipiente do modelo gerencial, que concentra conhecimento nos níveis mais elevados da Administração Pública Federal e favorece a corrupção e favoritismo, para os modelos participativos baseados em redes, que transfere e cria \"conhecimento\" sem limites, está acontecendo sem a integração dos três alicerces da inteligência: a estratégia, a previsão e a ação. Na área de inteligência governamental federal, as dificuldades de vencer os conflitos entre contrainteligência e democracia, entre militares e civis, e entre políticos e oficias de inteligência geram um viés individual na dimensão pscicológico-cognitiva (fase de coleta e análise de informações) e um viés institucional na dimensão político-organizacional (fase de tomada de decisão). Este artigo, a partir da revisão dos conceitos e práticas de GC e IO e da criticas aos modelos de governança e do sistema de inteligência do país, apresenta um modelo de inovação e inteligência governamental, uma proposta de mudança cultural e uma estratégia de GC-IO para otimizar os processos de criação (GC) e uso de conhecimento (IO) no setor público.",
        "palavras_chave": ["administração pública", "cultura organizacional", "estratégia", "gestão do conhecimento", "inovação", "inteligência econômica", "inteligência organizacional"],
        "local": "Brasil",
        "idioma": "Português",
        "enlace": "https://www.revistas.usp.br/rai/article/view/79339",
            "tipo": "investigacion"
    },
    {
        "titulo": "Uma proposta para o desenvolvimento da inteligência cultural em instituições educacionais",
        "autores": "María Rodríguez y Javier Gómez",
        "instituicao": "Universidade de Buenos Aires",
        "orcid": "https://orcid.org/0000-0002-1234-5678",
        "doi": "https://doi.org/10.1234/abcd.v1i1.56789",
        "data": "15/12/2024",
        "resumo": "Este trabalho explora a aplicação de um modelo de inteligência cultural (IC) voltado para instituições educacionais da América Latina. O objetivo principal é apresentar estratégias que permitam superar barreiras culturais e promover a inclusão, a colaboração e o aprendizado intercultural em contextos educacionais diversos. O estudo utiliza metodologias mistas, combinando análise quantitativa e qualitativa com base em dados de 200 entrevistas realizadas em diferentes contextos escolares de países latino-americanos. Os resultados sugerem que o desenvolvimento da IC está diretamente relacionado ao fortalecimento das competências interculturais e ao sucesso acadêmico em ambientes multiculturais.",
        "palavras_chave": ["inteligência cultural", "educação", "interculturalidade", "América Latina", "inclusão"],
        "local": "América Latina",
        "idioma": "Português",
        "enlace": "https://doi.org/10.1234/abcd.v1i1.56789",
            "tipo": "investigacion"
    },
    {
        "titulo": "Humanização e Gestão por Inteligências para Reforma do Setor Público",
        "autores": "Cristiano Trindade de Angelis",
        "instituicao": "Ministério do Planejamento, Desenvolvimento e Gestão",
        "orcid": null,
        "doi": null,
        "data": "15/07/2022",
        "resumo": "As organizações públicas se veem pressionadas a reverem suas estruturas e dinâmicas de funcionamento, a fim de criarem e aplicarem conhecimento relevante para melhorar tanto a integração entre servidores públicos, processos e sistemas, como a capacidade de previsão para desenvolver uma estratégia (o que e porquê fazer) integrada ao planejamento (como fazer) e a gestão (como analisar, monitorar e melhorar). A reforma gerencial de 1995 coincidiu com a necessidade de maior competição a partir da aprendizagem com o setor privado em busca de mais eficiência e produtividade. A reforma atual coincide com a necessidade de maior efetividade a partir de um processo de humanização dos servidores públicos, que propicie maior foco no interesse público, e da gestão de novas inteligências que propicie crescimento intelectual, emocional e espiritual e diminua o viés individual na dimensão psico-cognitiva (na coleta e análise de informações) e o viés institucional na dimensão político-organizacional (na tomada de decisões). Este artigo apresenta a Gestão por Inteligências que busca desenvolver nos gestores e líderes a capacidade de compreender, desenvolver e gerir as inteligências racional, cultural, emocional e espiritual de forma integrada para resolver problemas com sentido e propósito, transformando complexidade em simplicidade para viver e trabalhar com significado e focando na supremacia do interesse público e na sua efetividade.",
        "palavras_chave": ["Administração Pública", "Governança Compartilhada", "Gestão por Inteligências", "Humanização no Setor Público", "Inteligência Governamental"],
        "local": "Brasília, Brasil",
        "idioma": "Português",
        "enlace": "https://assecor.org.br/wpfd_file/humanizacao-e-gestao-por-inteligencias-para-reforma-do-setor-publico/",
        "tipo": "investigacion"
    },
    {
        "titulo": "Gestão do conhecimento no setor público: um estudo de caso por meio do método OKA",
        "autores": "Cristiano Trindade de Angelis",
        "instituicao": "Escola Nacional de Administração Pública (ENAP)",
        "orcid": null,
        "doi": null,
        "data": "01/04/2011",
        "resumo": "Dentre os modelos de avaliação e diagnóstico de gestão do conhecimento pesquisados na literatura, selecionou-se o método de Avaliação do Conhecimento Organizacional (Organizational Knowledge Assessment – OKA) elaborado pelo World Bank Institute (WBI), do Banco Mundial, como um modelo com capacidade de avaliar e diagnosticar a situação da Gestão do Conhecimento (GC) em uma organização. O método OKA foi concebido para avaliar a capacidade e o nível de preparação de uma organização na utilização adequada de seus ativos intelectuais. O artigo propõe realizar um diagnóstico da gestão do conhecimento na Secretaria do Patrimônio da União (SPU), pertencente ao Ministério do Planejamento. Durante a pesquisa na SPU usando o método OKA surgiu a necessidade de formular uma política de gestão do conhecimento, isto é, um plano estratégico de GC. A pesquisa concluiu que o método OKA é uma ferramenta útil para diagnosticar e avaliar a GC na SPU e na concepção de um plano estratégico de GC, definidor de ações, práticas de apoio e orientações às políticas e processos de conhecimento da organização.",
        "palavras_chave": ["gestão do conhecimento", "setor público", "método OKA", "gestión del conocimiento", "sector público", "OKA method", "knowledge management", "public sector"],
        "local": "Brasil",
        "idioma": "Português",
        "enlace": "https://repositorio.enap.gov.br/handle/1/1591?mode=full",
        "tipo": "investigacion"
    },
    {
        "titulo": "The impact of national culture and knowledge management on governmental intelligence",
        "autores": "Cristiano Trindade De Angelis",
        "instituicao": "Journal of Modelling in Management",
        "orcid": "",
        "doi": "https://doi.org/10.1108/JM2-08-2014-0069",
        "data": "08/02/2016",
        "resumo": "The purpose of this paper is to demonstrate that the integration of intelligences plays a great role in changing the organisational and national culture and, in consequence, in changing governmental intelligence (GI). This paper investigates the impact of national culture (NC) and knowledge management (KM) on GI. The study explores the development of a culture knowledge intelligence model (CKI) to test a number of propositions through web-based survey methodology administered to 101 civil servants of two national public administrations, Brazil’s Planning Ministry and Germany’s Bundesanstalt. The data were analysed quantitatively through SPSS and SmartPLS (CFA and SEM). The relationships between the variables (hypotheses) were empirically tested using structure equation modelling (SEM). The findings reveal that the high correlation between organisational/national culture on GI raises the discussion of these relationships in the academic community. The impact of organisational/national culture on GI is much higher in Brazil than in Germany. The major practical implication is to demonstrate the importance of integration of intelligences to improve GI.",
        "palavras_chave": ["national culture", "knowledge management", "governmental intelligence", "organisational culture", "public administration", "structural equation modelling"],
        "local": "Brazil, Germany",
        "idioma": "English",
        "enlace": "https://doi.org/10.1108/JM2-08-2014-0069",
        "tipo": "investigacion"
    },
    {
        "titulo": "A Knowledge Management and Organizational Intelligence Model for Public Administration",
        "autores": "Cristiano Trindade De Angelis",
        "instituicao": "Journal of Knowledge Management",
        "orcid": "",
        "doi": "https://doi.org/10.1080/01900692.2013.791315",
        "data": "28/08/2013",
        "resumo": "This study explores the development of a KM-OI model and empirically tests, using structure equation modeling (SEM), nine hypotheses related to the following research questions: RQ1: To what extent does organizational culture impact strategy structure learning with environment and information technology?; RQ2: To what extent does information technology impact learning with environment?; RQ3: To what extent does strategy structure, learning with environment impact policies and practices of KM?; RQ4: To what extent do policies and practices of KM impact organizational intelligence? Based on the results of a web survey applied in two of the six largest economies, Germany and Brazil, the article shows the importance of KM and OI for public administration and concludes that the KM-OI model is useful to identify influential factors that must be taken into consideration to improve the processes of creation (KM) and application of knowledge (OI).",
        "palavras_chave": ["knowledge management", "organizational culture", "public administration", "structural equation modeling", "organizational intelligence"],
        "local": "Germany, Brazil",
        "idioma": "English",
        "enlace": "https://doi.org/10.1080/01900692.2013.791315",
        "tipo": "investigacion"
    },
    {
        "titulo": "Models Of Governance And The Importance Of KM For Public Administration",
        "autores": "Cristiano Trindade De Angelis",
        "instituicao": "Journal of Knowledge Management Practice",
        "orcid": "",
        "doi": "https://doi.org/10.1080/01900692.2013.791315",
        "data": "June 2013",
        "resumo": "This study explores the shift from the New Public Management (NPM) model, which concentrated knowledge in the higher levels of organizations, to a networking model that creates and transfers knowledge without limits. The transition from Web 1.0 to Web 2.0 has shifted the public sector towards participatory-based networks. This article highlights the overload of information resulting from these changes, and the importance of Knowledge Management (KM) and Organizational Intelligence (OI) for public administration. A Knowledge Management and Organizational Intelligence model (KM-OI) is proposed for public administrations worldwide, aiming to identify influential environmental factors that guide KM planning and development efforts.",
        "palavras_chave": ["Knowledge Management", "Gen X", "Gen Y", "Web 2.0", "Networking", "Public Administration"],
        "local": "France",
        "idioma": "English",
        "enlace": "https://doi.org/10.1080/01900692.2013.791315",
        "tipo": "investigacion"
    }
    ,
    {
        "titulo": "A model of cultural intelligence based on knowledge management practices and military intelligence: A comparative study between Moldova and Ukraine",
        "autores": "Cristiano Trindade De Angelis",
        "instituicao": "Journal of Leadership and Organizational Studies",
        "orcid": "",
        "doi": "https://doi.org/10.5897/JLCR2022.0347",
        "data": "February 2023",
        "resumo": "This paper demonstrates that the development of Cultural Intelligence (CI) through Knowledge Management (KM) practices leads to Military Intelligence (MI), including prediction, strategy, and action. The model of CI based on KM practices and MI (CIKMMI) could potentially be recognized by the United Nations Public Service Awards (UNPSA). The study suggests a shift from the New Public Management (NPM) model, which fosters corruption, to the New Public Service, which emphasizes social participation and control. The article supports the validity of the CIKMMI model, showing its effectiveness in improving MI through the use of CI and KM practices.",
        "palavras_chave": ["Cultural intelligence", "Knowledge management", "Military intelligence", "Public administration"],
        "local": "Moldova, Ukraine",
        "idioma": "English",
        "enlace": "https://doi.org/10.5897/JLCR2022.0347",
        "tipo": "investigacion"
    },
    {
        "titulo": "A KM Organisational Intelligence Model for Public Sector Administrations",
        "autores": "Dr. Cristiano Trindade De Angelis",
        "instituicao": "SKEMA Business School",
        "orcid": "",
        "doi": "",
        "data": "2023",
        "resumo": "This thesis presents a model of Knowledge Management (KM) and Organizational Intelligence (OI) specifically designed for public sector administrations. The model aims to identify the influential environmental factors that impact KM and OI practices, proposing a shift from the New Public Management (NPM) model to the New Public Service model. This model is grounded in social participation and control, with a focus on improving decision-making processes in public administration.",
        "palavras_chave": ["Knowledge Management", "Organizational Intelligence", "Public Administration", "New Public Management", "Social Participation", "Public Service"],
        "local": "France",
        "idioma": "English",
        "enlace": "https://www.academic-bookshop.com/ourshop/prod_2664821-A-KM-Organisational-Intelligence-Model-for-Public-Sector-Administrations-by-Dr-Cristiano-Trindade-De-Angelis.html",
        "tipo": "libro"
      },
      {
        "titulo": "Gestão por Inteligências",
        "autores": "Cristiano Trindade De Angelis",
        "instituicao": "Chiado Books",
        "orcid": "",
        "doi": "",
        "data": "2016-02-26",
        "resumo": "A gestão por inteligências proporciona autonomia, domínio e propósito na busca de uma vida com mais significado. Este livro discute como a crise de confiança e a crise econômica evidenciam a necessidade de incluir a sociedade no relacionamento entre o Estado e o mercado, com o objetivo de aumentar a efetividade das políticas públicas. A obra propõe a adoção da Inteligência Organizacional e um refinamento cultural para a inserção do Brasil na Sociedade do Conhecimento, apresentando a gestão por inteligências como uma abordagem que pode transformar a gestão pública.",
        "palavras_chave": ["Gestão por Inteligências", "Inteligência Organizacional", "Políticas Públicas", "Gestão Pública", "Cultura", "Sociedade do Conhecimento"],
        "local": "Portugal",
        "idioma": "Português",
        "enlace": "https://www.atlanticbookshop.pt/compendium/gestao-por-inteligencias",
        "tipo": "libro"
      },
      {
        "titulo": "Gestión por Inteligencias (Spanish Edition)",
        "autores": "Cristiano Trindade de Angelis",
        "instituicao": "Kindle Edition",
        "orcid": "",
        "doi": "",
        "data": "2016-01-21",
        "resumo": "Este libro propone una reforma del Estado que integra los tres modelos de gestión de la administración pública (Modelo Burocrático, Nueva Gestión Pública - NGP y el Nuevo Servicio Público - NSP) a través de la Gestión por Inteligencias. La democracia adquiere supremacía en el interés público y la efectividad, en lugar de centrarse solo en la eficiencia y la competitividad. La Gestión por Inteligencias, que abarca las inteligencias racional, cultural, emocional y espiritual, es la propuesta para mejorar la efectividad de la acción gubernamental y reformar el Estado.",
        "palavras_chave": ["Gestión por Inteligencias", "Reforma del Estado", "Modelo Burocrático", "Nueva Gestión Pública", "Nuevo Servicio Público", "Gestión Pública", "Eficiencia", "Democracia"],
        "local": "España",
        "idioma": "Español",
        "enlace": "https://www.amazon.com/dp/B01AYEPRPY",
        "tipo": "libro"
      }
    ];
    console.log(publicaciones);  // Verifica que se esté recibiendo el JSON

    // Llamamos a mostrarPublicaciones para que todas las publicaciones se muestren al cargar la página


});

