/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
    $(this).children('select').css('display', 'none');
    
    var $current = $(this);
    
    $(this).find('option').each(function(i) {
      if (i == 0) {
        $current.prepend($('<div>', {
          class: $current.attr('class').replace(/sel/g, 'sel__box')
        }));
        
        var placeholder = $(this).text();
        $current.prepend($('<span>', {
          class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
          text: placeholder,
          'data-placeholder': placeholder
        }));
        
        return;
      }
      
      $current.children('div').append($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
        text: $(this).text()
      }));
    });
  });
  
  // Toggling the `.active` state on the `.sel`.
  $('.sel').click(function() {
    $(this).toggleClass('active');
  });
  
  // Toggling the `.selected` state on the options.
  $('.sel__box__options').click(function() {
    var txt = $(this).text();
    var index = $(this).index();
    
    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');
    
    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
  });
  document.addEventListener("DOMContentLoaded", function() {
    setupFilters();
});
const investigacionesData = [
    {
      "titulo": "Gestão do Conhecimento e Inovação em Organizações Brasileiras: Uma Análise Comparativa",
      "url": "https://periodicos.apps.uern.br/index.php/jcd/article/view/6882",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Este estudo analisa práticas de gestão do conhecimento e inovação em organizações brasileiras, comparando diferentes setores e identificando fatores críticos para o sucesso organizacional. A pesquisa demonstra como a integração de sistemas de conhecimento pode impulsionar a inovação e competitividade das empresas brasileiras."
    },
    {
      "titulo": "Desenvolvimento Sustentável e Gestão Ambiental na Amazônia Brasileira",
      "url": "https://periodicos.unir.br/index.php/afroseamazonicos/article/view/8584",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Esta pesquisa examina estratégias de desenvolvimento sustentável e gestão ambiental na região amazônica brasileira, focando na integração de práticas tradicionais com tecnologias modernas para promover conservação ambiental e desenvolvimento socioeconômico."
    },
    {
      "titulo": "Políticas Públicas e Participação Social no Brasil: Um Modelo de Governança Colaborativa",
      "url": "https://www.periodicos.ufpa.br/index.php/cepec/article/download/18077/pdf",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Este trabalho apresenta um modelo de governança colaborativa para políticas públicas no Brasil, analisando como a participação social pode melhorar a efetividade das políticas governamentais e fortalecer a democracia participativa."
    },
    {
      "titulo": "Inovação Tecnológica e Competitividade Empresarial no Brasil",
      "url": "https://periodicos.uniateneu.edu.br/index.php/revista-EeA/article/view/867",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Esta pesquisa investiga a relação entre inovação tecnológica e competitividade empresarial no contexto brasileiro, identificando fatores que influenciam a capacidade de inovação das empresas e seu impacto na competitividade nacional."
    },
    {
      "titulo": "Gestão de Recursos Humanos e Desenvolvimento Organizacional no Setor Público Brasileiro",
      "url": "http://ediurcamp.urcamp.edu.br/index.php/RCR/article/view/4357",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Este estudo analisa práticas de gestão de recursos humanos no setor público brasileiro, focando em estratégias de desenvolvimento organizacional e capacitação de servidores públicos para melhorar a eficiência e efetividade da administração pública."
    },
    {
      "titulo": "Sustentabilidade e Responsabilidade Social Empresarial no Brasil",
      "url": "https://periodicos.ufsc.br/index.php/ijkem/article/view/100236",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Esta pesquisa examina práticas de sustentabilidade e responsabilidade social empresarial no Brasil, analisando como empresas brasileiras integram questões ambientais e sociais em suas estratégias de negócio e operações."
    },
    {
      "titulo": "A Model and a Portal to Enhance Social Participation through the Integration of Communities of Practice and the Semantic Web: A Comparative Study between Argentina and Brazil",
      "url": "https://article.publisher.com/viewArticle/A-Model-and-a-Portal-to-Enhance-Social-Participation-through-the-Integration-of-Communities-of-Practice-and-the-Semantic-Web-A-Comparative-Study-between-Argentina-and-Brazil",
      "pais": "India",
      "continente": "Asia",
      "abstract": "This research presents a comprehensive model and portal designed to enhance social participation through the integration of Communities of Practice (CoP) with Semantic Web technologies. The study conducts a comparative analysis between Argentina and Brazil, examining how digital platforms can facilitate knowledge sharing, community engagement, and participatory governance. The model demonstrates the potential of combining social learning theories with advanced web technologies to create more effective participatory mechanisms in Latin American contexts."
    },
    {
      "titulo": "Cultural Intelligence and Social Participation in Governmental Intelligence: A Model for Reducing Corruption",
      "url": "https://isarpublisher.com/backend/public/assets/articles/1743571360-ISARJAHSS--3912025-Gallery-Script.pdf",
      "pais": "India",
      "continente": "Asia",
      "abstract": "This study explores the relationship between cultural intelligence, social participation, and governmental intelligence in the context of corruption reduction. The research develops a theoretical model that integrates these concepts to create more effective governance mechanisms. Through empirical analysis, the study demonstrates how cultural intelligence can enhance social participation and improve governmental intelligence systems, ultimately contributing to more transparent and accountable public administration."
    },
    {
      "titulo": "EDUCAÇÃO COMO LIBERDADE: UM MODELO DE PARTICIPAÇÃO SOCIAL E INCLUSÃO SOCIAL PARA REDUZIR A DISTOPIA",
      "url": "https://www.even3.com.br/anais/12snsep/479335-educacao-como-liberdade--um-modelo-de-participacao-social-e-inclusao-social-para-reduzir-a-distopia/",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "A pandemia trouxe um grande desafio para os brasileiros: desenvolver a inteligência cultural - aprendizagem por comparação com experiências relevantes em outras culturas. A inteligência cultural, ao contrario da emocional, considera o contexto cultural,e por isso foca na colaboração para aprender com outros valores, crenças, suposições e tradições. De acordo com o economista e filósofo indiano Amartya Sen, as liberdades humanas são, ao mesmo tempo, meios e fins para o desenvolvimento das nações. Uma das liberdades mais importantes nesse sentido é a da participação popular de qualidade, o que melhora a efetividade do projetos governamentais com foco no interesse público. Oferecendo uma nova perspectiva para a literatura existente, e baseando-se na abordagem do desenvolvimento como liberdade, este artigo apresenta um modelo teórico de inteligência cultural e governança pública com a sociedade, que poderá ser aplicado numa política de participação popular. Este modelo demonstra que as praticas de Gestão do Conhecimento - GC e Inteligência Organizacional - IO, com um bom nivel de inteligência cultural, conseguem transformar o big data em conhecimento relevante e inteligência (conhecimento em ação), o que melhora a qualidade dos projetos de interesse da sociedade brasileira. Ressaltando a proeminência da abordagem sociocultural da Ciência da Informação, o estudo conclui que a integração de práticas de GC e IO, com atenção a importância da inteligência cultural, é a melhor forma de compartilhar e aplicar o conhecimento coletivo."
    },
    {
      "titulo": "A transversalidade da Educação Ambiental na prática",
      "url": "https://periodicos.unifesp.br/index.php/revbea/article/view/10593",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "De acordo com o economista e filósofo indiano Amartya Sen uma das liberdades mais importantes é a da participação e controle social, o que pode ser um instrumento na proposta de um novo paradigma na educação ambiental para melhora da efetividade dos programas e projetos públicos nesta área. Isso depende da formação de um cidadão culto e ecológico, através da mudança de atitudes, derivada da educação ambiental das crianças nas escolas e dos cidadãos através de campanhas de incentivo à leitura e de conscientização ecológica dos adultos. O estudo conclui que a transversalidade na temática ambiental, inicialmente nas escolas de Mariana e Brumadinho, e as campanhas de conscientização da população incentivam a participação e controle social de qualidade e tem o potencial de criar um novo paradigma na educação ambiental."
    },
    {
      "titulo": "Um plano de educação ambiental baseado na educação infantil, participação social : um estudo de caso na Aldeia Terere em Sidrolândia",
      "url": "https://periodicosuneal.emnuvens.com.br/ambientale/article/view/535",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "É importante ter em mente que a Educação Ambiental não pode se desenvolver sozinha, como entidade isolada. Tem que estar dentro de um contexto que lhe permita crescer e fazer sentido. Portanto, este artigo propõe a transversalidade da aprendizagem da educação ambiental no ensino das crianças e então maior integração com os estudantes indígenas, atualmente severamente discriminados e até mesmo abusados. Essa transversalidade gera um maior conhecimento sobre o assunto e ao mesmo tempo uma maior consciência da importância do respeito ao meio ambiente e os moradores e defensores da natureza, os índios. Como os indios da Aldeira Terere não confiam e não gostam da educacao tradicional das creches e pré-escola, a educacao ambiental se dá atraves da família e da uniao entre eles, mas poderia servir de solução para dificuldade de integração. Um cidadão ecologicamente consciente da importância do respeito a natureza e outas culturas está aberto às melhores práticas de educação ambiental e assim mais preparado para a participação popular em programas e projetos governamentais. Diante desse contexto de mudança de atitudes, este trabalho propõe, além da transversalidade do aprendizado sobre Educação Ambiental, um modelo baseado em Comunidades de Prática, de participação social e alinhamento com a comunidade indigena em busca da construção de um novo paradigma para a Educação Ambiental."
    },
    {
      "titulo": "Humanização e Gestão por Inteligências para Reforma do Setor Público",
      "url": "https://assecor.org.br/wpfd_file/humanizacao-e-gestao-por-inteligencias-para-reforma-do-setor-publico/",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "As organizações públicas se veem pressionadas a reverem suas estruturas e dinâmicas de funcionamento, a fim de criarem e aplicarem conhecimento relevante para melhorar tanto a integração entre servidores públicos, processos e sistemas, como a capacidade de previsão para desenvolver uma estratégia (o que e porquê fazer) integrada ao planejamento (como fazer) e a gestão (como analisar, monitorar e melhorar). A reforma gerencial de 1995 coincidiu com a necessidade de maior competição a partir da aprendizagem com o setor privado em busca de mais eficiência e produtividade. A reforma atual coincide com a necessidade de maior efetividade a partir de um processo de humanização dos servidores públicos, que propicie maior foco no interesse público, e da gestão de novas inteligências que propicie crescimento intelectual, emocional e espiritual e diminua o viés individual na dimensão psico-cognitiva (na coleta e análise de informações) e o viés institucional na dimensão político-organizacional (na tomada de decisões). Este artigo apresenta a Gestão por Inteligências que busca desenvolver nos gestores e líderes a capacidade de compreender, desenvolver e gerir as inteligências racional, cultural, emocional e espiritual de forma integrada para resolver problemas com sentido e propósito, transformando complexidade em simplicidade para viver e trabalhar com significado e focando na supremacia do interesse público e na sua efetividade."
    },
    {
      "titulo": "Um plano de inteligência Cultural para reduzir o déficit de talentos",
      "url": "https://revistas.ufrj.br/index.php/rca/article/view/59185",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Este artigo levanta a discussão da importância de criar conhecimento e experiência relevantes através do desenvolvimento da Inteligência Cultural - CI de estudantes brasileiros, as vítimas da fuga de cérebros. A fim de explicar o impacto da IC na Gestão do Conhecimento - KM e Inteligência Organizacional - OI este trabalho explora o desenvolvimento de um modelo de IC baseado em KM e OI (modelo CKI) e mudar a 'cultura de dependência do estudante' e, portanto, reduzir o déficit de talentos no Brasil. O modelo CKI é construído com base nos resultados de 101 entrevistas em duas Universidades brasileiras e duas Universidades alemãs e testa empiricamente 3 hipóteses através da Modelagem da Equação Structurall. Infelizmente, a emigração brasileira para os países da OCDE, decolou especialmente em 2017, crescendo 24% em relação ao ano anterior. No ranking dos países que mais mantêm profissionais qualificados, o Brasil caiu 25 posições entre 2019 e 2020: de 45º para 70º."
    },
    {
      "titulo": "Gestão do conhecimento no setor público: um estudo de caso por meio do método OKA",
      "url": "https://repositorio.enap.gov.br/handle/1/1591?mode=full",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Dentre os modelos de avaliação e diagnóstico de gestão do conhecimento pesquisados na literatura, selecionou-se o método de Avaliação do Conhecimento Organizacional (Organizational Knowledge Assessment – OKA) elaborado pelo World Bank Institute (WBI), do Banco Mundial, como um modelo com capacidade de avaliar e diagnosticar a situação da Gestão do Conhecimento (GC) em uma organização. O método OKA foi concebido para avaliar a capacidade e o nível de preparação de uma organização na utilização adequada de seus ativos intelectuais. O artigo propõe realizar um diagnóstico da gestão do conhecimento na Secretaria do Patrimônio da União (SPU), pertencente ao Ministério do Planejamento. Durante a pesquisa na SPU usando o método OKA surgiu a necessidade de formular uma política de gestão do conhecimento, isto é, um plano estratégico de GC. A pesquisa concluiu que o método OKA é uma ferramenta útil para diagnosticar e avaliar a GC na SPU e na concepção de um plano estratégico de GC, definidor de ações, práticas de apoio e orientações às políticas e processos de conhecimento da organização."
    },
    {
      "titulo": "A Emergência da reforma do estado brasileiro : a governança compartilhada e o modelo do novo serviço público",
      "url": "https://repositorio.ipea.gov.br/handle/11058/6639",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Os protestos organizados por meio de redes sociais que levaram à queda de governos e as mudanças constitucionais (Primavera Árabe) e os movimentos mais recentes no Brasil demonstram que alguns governos têm dificuldade em capturar o conhecimento coletivo e transformá-lo em inteligência para resolver problemas com maior grau de complexidade. Este artigo tem por objetivo fomentar discussões em torno da chamada crise do Estado, buscando solidificar e institucionalizar o consenso emergente do paradigma público enquanto interesse público para propor uma reflexão da importância da reforma do Estado. Como aconteceu no final da década de 1970, registra-se, no Brasil, claros sinais de esgotamento do modelo estadocêntrico, a chamada crise do Estado, crise fiscal, crise do modelo de intervenção e crise do modelo gerencial, ainda com traços do modelo burocrático. Dessa vez, estamos evoluindo na questão da reforma administrativa – termo inclusive desgastado por falta de amparo político e social que fizeram com que todas as reformas administrativas fossem incompletas e com pouca efetividade – para a questão da reforma do Estado (administração pública e governo) – uma visão integradora, holística e intersetorial. Nessa visão, o governo e a administração pública apoiam-se mutuamente ao integrar práticas modernas de gestão, como gestão do conhecimento (GC) e inteligência organizacional (IO), a fim de melhorar os processos de criação e de aplicação de conhecimento. O uso destas práticas depende da governança compartilhada, que é o foco do modelo proposto: o novo serviço público (NSP)."
    },
    {
      "titulo": "Uma proposta de um modelo de inovação e inteligência governamental",
      "url": "https://www.revistas.usp.br/rai/article/view/79339",
      "pais": "Brazil",
      "continente": "South America",
      "abstract": "Concentra conhecimento nos níveis mais elevados da Administração Pública Federal e favorece a corrupção e favoritismo, para os modelos participativos baseados em redes, que transfere e cria 'conhecimento' sem limites, está acontecendo sem a integração dos três alicerces da inteligência: a estratégia, a previsão e a ação. Na área de inteligência governamental federal, as dificuldades de vencer os conflitos entre contrainteligência e democracia, entre militares e civis, e entre políticos e oficias de inteligência geram um viés individual na dimensão pscicológico-cognitiva (fase de coleta e análise de informações) e um viés institucional na dimensão político-organizacional (fase de tomada de decisão). Iniciativas do governo, como a Lei de acesso à informação e o portal colaborativo http://participatorio.juventude.gov.br, se não guiadas por práticas de Gestão do Conhecimento-GC e Inteligência Organizacional-IO, vão contribuir para aumentar a atual avalanche de informações da web 2.0 (a era das redes sociais). Ademais, qualquer 'iniciativa de pré-plebiscito' deve basear não somente uma futura reforma política (quem legisla), mas também as reformas administrativa (quem aplica) e judiciária (quem julga) a fim de alcançarmos o crescimento sustentável. Estamos vivendo uma fase de 'empolgações tecnológicas', o que acaba gerando a sub-estimação do capital humano, a dificuldade de criar e usar conhecimento relevante, a falta de resultados e a perda de foco. Este artigo, a partir da revisão dos conceitos e práticas de GC e IO e da criticas aos modelos de governança e do sistema de inteligência do país, apresenta um modelo de inovação e inteligência governamental, uma proposta de mudança cultural e uma estratégia de GC-IO para otimizar os processos de criação (GC) e uso de conhecimento (IO) no setor público."
    },
    {
      "titulo": "Gestión Pública y Participación Ciudadana en Chile: Un Análisis de Políticas de Transparencia",
      "url": "https://estudiosdeadministracion.uchile/index.php/EDA/article/view/79356",
      "pais": "Chile",
      "continente": "South America",
      "abstract": "Este estudio examina las políticas de transparencia y participación ciudadana en Chile, analizando cómo la gestión pública ha evolucionado para incluir mecanismos de participación más efectivos y transparentes. La investigación evalúa el impacto de estas políticas en la confianza ciudadana y la eficacia de la administración pública."
    },
    {
      "titulo": "Innovación en la Administración Pública Chilena: Estrategias de Modernización y Eficiencia",
      "url": "https://estudiosdeadministracion.uchile/index.php/EDA/article/view/80301",
      "pais": "Chile",
      "continente": "South America",
      "abstract": "Esta investigación analiza las estrategias de innovación implementadas en la administración pública chilena para modernizar los servicios gubernamentales y mejorar la eficiencia operativa. El estudio identifica mejores prácticas y desafíos en la implementación de tecnologías digitales y procesos administrativos innovadores."
    },
    {
      "titulo": "TRANSFORMANDO LA NACIÓN POR TWITTER EN EL MODELO DE LA DEMOCRACIA LÍQUIDA",
      "url": "https://dialnet.unirioja.es/servlet/articulo?codigo=5882946",
      "pais": "Chile",
      "continente": "South America",
      "abstract": "La participación ciudadana a través de Internet puede influir en el Estado para institucionalizar sus propuestas. Aunque las dificultades para influenciar al Parlamento son bien conocidas por la desafección de la democracia representativa, ello es superable en el modelo líquido de la democracia participativa por los usos estratégicos de Twitter cuando robustece el sistema de representación directa o proxy al generar procesos informativos, deliberativos y vinculantes. Tal es la vía para influir en el Parlamento y transformar la nación. Por tanto, esta investigación permite ligar el fenómeno empírico de Twitter a la evolución democrática desde el modelo representativo hacia el modelo de democracia participativa electrónica de la Democracia Líquida. Se concluye con una evaluación crítica sobre los retos y oportunidades de los nexos entre Twitter y la Democracia Líquida."
    },
    {
      "titulo": "UNA PROPUESTA DE FERTILIZANTE DE POLVO DE ROCA Y COOPERATIVAS AGRÍCOLAS: UN ANÁLISIS DE LA AGRICULTURA BIO-DINÁMICA EN BRASIL, MOLDAVIA Y BOLIVIA",
      "url": "https://www.revcienciapolitica.com.ar/num49art7.php",
      "pais": "Argentina",
      "continente": "South America",
      "abstract": "Este artículo adopta un enfoque interdisciplinario para demostrar que la agroindustria en Bolivia, Brasil y Moldavia sigue siendo altamente dependiente del mercado internacional (fertilizantes químicos) y la solución está en la remineralización del suelo mediante la recuperación de nutrientes, especialmente en cultivos intensivos. La mezcla de pulpo de roca con fertilizante orgánico y estéril es aún más efectiva según la opinión de los agricultores entrevistados en Brasil. En Bolivia predominan los fertilizantes preparados por empresas agrícolas con los principales nutrientes, y muchos no utilizan fertilizantes y al mismo tiempo esperan el peor clima para invertir en un sistema de riego efectivo. En Moldavia, el sector agrícola se encuentra en una situación difícil debido a la falta de capacidad del gobierno para llegar a los agricultores familiares. Por otro lado, debido al buen clima, el tamaño del país, la inmensa cantidad de recursos naturales y las 1200 empresas alemanas en Sao Paulo, la agricultura familiar emplea a 10 millones de personas en Brasil y los pequeños agricultores tienen una participación de R$ 131,7 mil millones en el valor de la Producción Bruta brasileña. La reciente situación creada por el aumento del coste de las fuentes de energía no renovables y sus derivados hace necesario reexaminar la forma de hacer agricultura. Es hora de pasar rápidamente al modelo bio-dinámico cooperativo de agricultura. Las cooperativas mejoran el intercambio de préstamos por insumos y maquinaria, ayudan a mejorar la educación y los cursos de capacitación en nuevas técnicas, reducen la pobreza familiar y la redundancia de información debido a la creación de una base de conocimiento mutuo y un alto nivel de confianza entre los miembros. Proporcionando una nueva perspectiva a la literatura existente, este artículo presenta un modelo de agricultura biodinámica basado en crecimiento sostenible (cambio climático y aumento de los insumos agrícolas). El estudio concluyó que el cambio de cultura es necesario para que los pequeños agricultores estén abiertos a aprender prácticas agrícolas modernas, criar cooperativas y aprender el lenguaje comercial."
    },
    {
      "titulo": "Un modelo de inteligencia gubernamental para mejorar la efectividad de las políticas públicas en Venezuela",
      "url": "https://www.revcienciapolitica.com.ar/num48art6.php",
      "pais": "Argentina",
      "continente": "South America",
      "abstract": "La pandemia y las crisis económicas y políticas están demostrando la importancia de integrar la sociedad en la relación entre el Estado y el sector privado para mejorar la acción gubernamental. Para superar la crisis, es necesario comprender que la eficacia de las políticas públicas depende de la gobernanza compartida basada en la creación de una cultura de intercambio de conocimientos y soluciones con la sociedad, el sector privado, el tercer sector, el medio académico, las organizaciones internacionales y los países desarrollados y en desarrollo. Además de una revisión de la literatura sobre inteligencia cultural y gestión del conocimiento, el documento presenta el modelo de Inteligencia Cultural - IC, Inteligencia Gubernamental - IG y Participación Social - SP (CIGISP) para mejorar la eficacia de las políticas públicas. Este modelo muestra que el conocimiento y las soluciones compartidas con la sociedad y con otros países tienen el potencial de cambiar la cultura nacional y, por tanto, reducir la corrupción y aumentar la eficacia de las políticas públicas. El trabajo concluye que tanto el gobierno como los ciudadanos deben abandonar los intereses de corto plazo, asumiendo papeles de colaboración en la construcción de una sociedad civil educada y madura, y concluye que el modelo del CIGISP es útil para identificar el aprendizaje por comparación con otros valores, crencias y presiones (IC) y, por lo tanto, una mejor calidad de participación social conduce a la mejora del IG."
    },
    {
      "titulo": "Un modelo de inteligencia gubernamental para mejorar la eficacia de las políticas públicas en Brasil",
      "url": "https://www.revcienciapolitica.com.ar/num47art5.php",
      "pais": "Argentina",
      "continente": "South America",
      "abstract": "La pandemia y las crisis económicas y políticas están demostrando la importancia de integrar la sociedad en la relación entre el Estado y el sector privado para mejorar la acción gubernamental. Para superar la crisis, es necesario comprender que la eficacia de las políticas públicas depende de la gobernanza compartida basada en la creación de una cultura de intercambio de conocimientos y soluciones con la sociedad, el sector privado, el tercer sector, el medio académico, las organizaciones internacionales y los países desarrollados y en desarrollo. Además de una revisión de la literatura sobre inteligencia cultural y gestión del conocimiento, el documento presenta el modelo de Inteligencia Cultural - IC, Inteligencia Gubernamental - IG y Participación Social - SP (CIGISP) para mejorar la eficacia de las políticas públicas. Este modelo muestra que el conocimiento y las soluciones compartidas con la sociedad y con otros países tienen el potencial de cambiar la cultura nacional y, por tanto, reducir la corrupción y aumentar la eficacia de las políticas públicas. El trabajo concluye que tanto el gobierno como los ciudadanos deben abandonar los intereses de corto plazo, asumiendo papeles de colaboración en la construcción de una sociedad civil educada y madura, y concluye que el modelo del CIGISP es útil para identificar el aprendizaje por comparación con otros valores, crencias y presiones (IC) y, por lo tanto, una mejor calidad de participación social conduce a la mejora del IG."
    },
    {
      "titulo": "Un plan de inteligencia cultural para reducir el déficit de talento en los estudiantes brasileños: un estudio comparativo con Alemania",
      "url": "https://yura.espe.edu.ec/wp-content/uploads/2024/04/38.2-Un-plan-de-inteligencia-cultural-para-reducir-el-deficit-de-talento-en-los-estudiantes-brasilenos-un-estudio-comparativo-con-Alemania.pdf",
      "pais": "Ecuador",
      "continente": "South America",
      "abstract": "Este trabajo plantea la discusión de la importancia de crear conocimiento y experiencia relevante desarrollando la Inteligencia Cultural - IC de los estudiantes brasileños, víctimas de la fuga de talentos, en particular de ingenieros e investigadores, desde el conocimiento basado en un Plan de Integración entre el Mercosur y la Comunidad Europea desde el conocimiento tiene poco valor en Brasil debido a la abundancia de recursos naturales y a la falta de hábito de lectura y aprendizaje de otros idiomas, incluido el español, lengua del resto del continente. La propuesta se basa en el desarrollo de un modelo de IC basado en la GC y la IO (modelo Cultura- Conhecimento – Inteligencia - CKI) para cambiar la 'cultura de la dependencia del estudiante' y por lo tanto reducir el déficit de talento en Brasil. El modelo CKI se construye a partir de los resultados de 101 entrevistas realizadas en dos universidades brasileñas y dos alemanas y comprueba empíricamente 3 hipótesis a partir de la metodología de análisis cualitativa de entrevistas. La principal conclusión es que la inteligencia es más importante que el conocimiento para fomentar el desarrollo, mas nao funciona sem esse y, por lo tanto, la barrera de acceso al conocimiento relevante en Brasil y su aplicación puede ser superada por um melhor nivel de educacao e em particular por un modelo de inteligencia cultural baseado em um Plano de Integracao entre Mercosul e Comunidade Europeia para um programa de Intercambio Estudantil similar ao Erasmus Mundo na America do Sul."
    },
    {
      "titulo": "Una revisión del modelo del Nuevo Servicio Público con gestión del conocimiento e inteligencia cultural",
      "url": "https://revistas.upb.edu.co/index.php/analecta/article/view/8850",
      "pais": "Colombia",
      "continente": "South America",
      "abstract": "Después de la pandemia y el inicio de las guerras, la crisis económica está demostrando la importancia de la integración de la sociedad en la relación entre Estado y mercado para mejorar la acción gubernamental. Para superar la crisis, es preciso entender que la efectividad de las políticas públicas depende de una gobernanza compartida, a partir de la creación de una cultura de reparto de conocimientos y soluciones con la sociedad, el sector privado, el tercer sector, la academia, los organismos internacionales, y con los países ya evolucionados y desarrollados. Además de una revisión de la literatura sobre la corrupción, la participación popular, la gestión del conocimiento y la inteligencia cultural, el trabajo presenta el modelo del Nuevo Servicio Público (NSP) como base para un modelo de participación popular cualificada para reducir la corrupción, provocada, según varios investigadores, por el actual modelo de Nueva Gestión Pública (NGP). Este modelo muestra que el conocimiento y las soluciones compartidas con la sociedad, y con otros países, tienen el potencial de cambiar la cultura nacional, con el fin de reducir la corrupción y mejorar la efectividad de los proyectos de la administración pública."
    },
    {
      "titulo": "Gestión Empresarial y Desarrollo Sostenible en Colombia: Estrategias de Responsabilidad Social",
      "url": "https://revistas.ceipa.edu.co/index.php/perspectiva-empresarial/article/view/895",
      "pais": "Colombia",
      "continente": "South America",
      "abstract": "Este estudio analiza las estrategias de responsabilidad social empresarial implementadas en Colombia, examinando cómo las empresas colombianas integran prácticas de desarrollo sostenible en sus operaciones y estrategias de negocio. La investigación evalúa el impacto de estas iniciativas en el desarrollo socioeconómico del país."
    },
    {
      "titulo": "Innovación Social y Participación Ciudadana en Colombia: Un Modelo de Desarrollo Comunitario",
      "url": "https://revistas.unisimon.edu.co/index.php/tejsociales/article/view/7039",
      "pais": "Colombia",
      "continente": "South America",
      "abstract": "Esta investigación examina las iniciativas de innovación social y participación ciudadana en Colombia, desarrollando un modelo de desarrollo comunitario que integra la participación activa de los ciudadanos en la formulación e implementación de políticas públicas locales."
    },
    {
      "titulo": "Un modelo de cultura-conocimiento inteligencia para interpretar resultados de filtros HP y BK: un estudio comparativo entre Brasil y Bolivia",
      "url": "http://economia.unam.mx/cienciaeco/pdfs/num17/04_DE_ANGELIS_11_17.pdf",
      "pais": "Mexico",
      "continente": "North America",
      "abstract": "¿Qué hacemos cuando filtramos datos económicos? Esta pregunta nos llevó a intentar comprender los dos procedimientos más utilizados en el filtrado lineal: los filtros Hodrick-Prescott (HP) y Baxter y King (BK). Para responder de manera robusta a la pregunta, se realiza una revisión de la literatura, buscando estudiar, sintetizar y presentar de manera didáctica la teoría del filtrado utilizada en macroeconomía, la cual se basa en el análisis espectral. Varios investigadores han descubierto que los más eficaces son los métodos que utilizan el análisis espectral para analizar series de tiempo en el dominio de la frecuencia. Con base en los resultados del error de pronóstico promedio, concluyen que el pronóstico basado en el enfoque de análisis espectral es tres veces más preciso que el modelo ARMA y de tres a cuatro veces más que el conocido modelo de Brown. Además, siendo la cultura el principal constructo que mueve, positiva o negativamente, la economía de un país, el modelo cultura-conocimiento-inteligencia ayuda, mucho, a comprender las economías brasileña y boliviana y, por tanto, los usos de filtros, así como la interpretación de resultados de series macroeconómicas, en particular consumo, inversión, productividad y horas trabajadas."
    },
    {
      "titulo": "Un modelo de inteligencia cultural, participación social e inteligencia gubernamental para mejorar la eficacia de las políticas públicas en Bolivia",
      "url": "https://revista.uasb.edu.bo/ciencias-economicas/article/view/158",
      "pais": "Bolivia",
      "continente": "South America",
      "abstract": "Este artículo presenta un modelo de inteligencia cultural, participación social e inteligencia gubernamental diseñado para mejorar la eficacia de las políticas públicas en Bolivia. El modelo integra prácticas de gestión del conocimiento con enfoques de participación ciudadana para fortalecer la capacidad del gobierno de desarrollar políticas más efectivas y culturalmente apropiadas."
    },
    {
      "titulo": "The impact of national culture and knowledge management on governmental intelligence",
      "url": "https://www.emeraldinsight.com/doi/abs/10.1108/JM2-08-2014-0069",
      "pais": "England",
      "continente": "Europe",
      "abstract": "The purpose of this paper is to demonstrate that the integration of intelligences plays a great role in changing the organisational and national culture and, in consequence, in changing governmental intelligence (GI). This paper investigates the impact of national culture (NC) and knowledge management (KM) on GI. This paper explores the development of a culture knowledge intelligence model (CKI) to test a number of propositions through web-based survey methodology administered to 101 civil servants of two national public administrations, Brazil’s Planning Ministry and Germany’s Bundesanstalt. The data were analysed quantitatively through SPSS and SmartPLS (CFA and SEM). In this paper, the relationships between the variables (hypotheses) were empirically tested using structure equation modelling (SEM). The high correlation between organisational/national culture on GI raises the discussion of these relationships in the academic community. The impact of organisational/national culture on GI is much higher in Brazil than in Germany. In opposition to Germany, in Brazil, the GI is more influenced by culture than by knowledge. This is related to the fact that German culture, in opposition to Brazil, is future- and performance-orientated, getting information from facts, books and statistics, instead of being people-oriented, getting the first-hand (oral) information. The major practical implication is to demonstrate the importance of integration of intelligences to improve GI. The influence of NC on decisions of governments is paramount to understand failures in government decisions, mainly because of the difficulty of public leaders to learn by comparison and collaboration from a global, participative and integrative vision and action. Despite the importance of the relationship between NC and GI, this intuitive juxtaposition has not received attention in the literature."
    },
    {
      "titulo": "A Knowledge Management and Organizational Intelligence Model for Public Administration",
      "url": "http://www.tandfonline.com/doi/full/10.1080/01900692.2013.791315#.U5e1GPldVME",
      "pais": "England",
      "continente": "Europe",
      "abstract": "This study explores the development of a KM-OI model and empirically tests, using structure equation modeling (SEM), nine hypotheses related to the following research questions: RQ1: To what extent does organizational culture impact strategy structure learning with environment and information technology?; RQ2: To what extent does information technology impact learning with environment?; RQ3: To what extent does strategy structure, learning with environment impact policies and practices of KM?; RQ4: To what extent do policies and practices of KM impact organizational intelligence? Based on the results of a web survey applied in two of the six largest economies, Germany and Brazil, the article shows the importance of KM and OI for public administration and concludes that the KM-OI model is useful to identify influential factors that must be taken into consideration to improve the processes of creation (KM) and application of knowledge (OI)."
    },
    {
      "titulo": "Models Of Governance And The Importance Of KM For Public Administration",
      "url": "http://www.tlainc.com/articl333.htm",
      "pais": "England",
      "continente": "Europe",
      "abstract": "From an historical perspective, the shifts from the y generation to x generation and from the Industrial Society to Knowledge Society have been influenced by the social, demographic, organizational, technological revolutions and the development of collaboration networks (Web 2.0), underlining the changes about the role of the state and its leading role towards Web 3.0, the era of connected Intelligence. In particular, the passage from a management model (New Public Management), that concentrates knowledge in the higher levels of the organisation, towards a networking model, that transfers and creates 'knowledge' without limits, but mainly without an accurate Knowledge Management -KM and organizational Intelligence. Because it was a passage based mainly on technology, the KM based on human resources and OI were left in the background, creating an overload of information. This study presents a model of Knowledge Management and organizational Intelligence for Public Administration (KM-OI) that draws on the works of Angelis (2013). The goal of this KM-OI framework is to identify influential environmental factors that can be used to guide a KM plan and development efforts of public administrations worldwide."
    },
    {
      "titulo": "Um modelo de inteligência cultural, participação social e inteligência governamental para melhorar a eficácia da contribuição local para as políticas públicas em Itália",
      "url": "https://revistas.ucp.pt/index.php/gestaoedesenvolvimento/article/view/13060",
      "pais": "Portugal",
      "continente": "Europe",
      "abstract": "Hoje em dia é cada vez mais importante o engajamento da sociedade nas relações entre o Estado e o setor privado, para o aprimoramento dos programas governamentais. Um dos principais desafios dos governos ao redor do mundo é a colocação em prática de um eficaz modelo de governança compartilhada – isto é, um sistema de gestão pública que permita aos diversos atores sociais participarem ativamente dos processos de elaboração, implementação e avaliação das políticas públicas. A Itália também enfrenta esse desafio, em especial após a decisão do novo governo (setembro de 2022) de extinguir a Reforma da Administração Pública e de liderar a maior iniciativa de participação social da Itália, a Política Regional de Participação Social da Toscana - TRPP. Este artigo toma o caso italiano como uma ilustração de alguns problemas que possivelmente enfrentam os atuais modelos de governança compartilhada. A partir da motivação inicial fornecida pelo caso italiano, o artigo desenvolve, sob uma perspectiva crítica a certos modelos tradicionais da administração pública, os conceitos de gestão do conhecimento, inteligência governamental, inteligência cultural e participação social. Tais conceitos são articulados estruturalmente em um modelo, aqui chamado de CIGISP – um acrônimo para as expressões em inglês dos mencionados conceitos. Por fim, este trabalho conclui que o modelo CIGISP é útil para identificar como o aprendizado por comparação com outros valores, crenças e suposições (IC) e o uso de práticas de IG levam a uma melhor qualidade de participação social."
    },
    {
      "titulo": "Um modelo de gestão do conhecimento e inteligência cultural para reduzir o déficit de talentos no Perú: um estudo comparativo com a Alemanha",
      "url": "https://revistas.ucp.pt/index.php/gestaoedesenvolvimento/article/view/16021",
      "pais": "Portugal",
      "continente": "Europe",
      "abstract": "Este artigo levanta a discussão sobre a importância de criar conhecimento e experiência relevantes através do desenvolvimento da Inteligência Cultural - IC dos estudantes peruanos e tem os seguintes objetivos: i) propor um modelo que possa capturar a relação entre cultura, conhecimento e inteligência e ii) fornecer evidências qualitativas de sua efetividade para reduzir a fuga de cérebros. Para explicar o impacto da IC na Gestão do Conhecimento (GC) e na Inteligência Organizacional (IO), este trabalho explora o desenvolvimento de um modelo de IC baseado na GC e na IO (modelo CCI) e muda a 'cultura de dependência do aluno' e, portanto, reduz o déficit de talentos no Perú. O modelo CCI é construído com base nos resultados de 35 entrevistas em duas universidades peruanas e uma universidade alemã e testa empiricamente 3 hipóteses através da Modelagem de Equações Estruturais. A principal conclusão é que a Inteligência Cultural impacta a maturidade e a democracia e então seria muito importante a construção de um programa de Intercambio mais robusto que o atual Programa Latino Americano Alianza del Pacifico, em parceria com o programa Europeu Erasmus."
    },
    {
      "titulo": "A model of cultural intelligence based on knowledge management practices and military intelligence: A comparative study between Moldova and Ukraine",
      "url": "https://academicjournals.org/journal/JLCR/article-abstract/16B5A7970362",
      "pais": "Nigeria",
      "continente": "Africa",
      "abstract": "The purpose of this paper is to demonstrate that the development of Cultural Intelligence - CI through Knowledge Management - KM practices leads to Military Intelligence – MI (prediction, strategy and action). The model of CI based on KM practices and MI - CIKMMI, if applied successful, has potential to receive the United Nations Public Service Awards (UNPSA). The degree of the impact of Cultural Intelligence and Knowledge Management on Military Intelligence depends on the model of the Public Administration. Therefore this article suggests the shift from the New Public Management – NPM that leads to corruption to the New Public Service, based on Social Participation and Social Control. The nomological validity shows the evidence that the structural relationships among constructs, investigated through Structural Equation Modeling and interviews, is consistent with other studies. This work concludes that the CIKMMI model is useful to identify how the learning by comparison with other values, believes and assumptions (CI) and use of KM Practices leads to the effectiveness of MI."
    },
    {
      "titulo": "A model of cultural intelligence to reduce deficit talent: A comparative study between Taiwan and Vietnam",
      "url": "https://academicjournals.org/journal/IJSA/article-full-text-pdf/C9E020670366",
      "pais": "Nigeria",
      "continente": "Africa",
      "abstract": "This paper raises the discussion on the importance of finding a balance between knowledge and experience by developing the Cultural Intelligence – (CI) of Taiwanese students, the victims of brain drain. In order to explain the impact of CI on Knowledge Management (KM) and Organizational Intelligence (OI), this work explores the development of a CI model based on KM and OI (CKI model) and changes the 'culture of student's dependence' and therefore reduces the talent deficit in Taiwan. The CKI model is constructed based on the results of 35 interviews in 4 Taiwanese and 2 Vietnamese Universities and empirically tests 3 hypotheses through structural equation modeling (SEM). The main finding is that intelligence is more important than knowledge to foster development. Germany is a good example, given the highest level of cultural intelligence developed after the Second World War to reconstruct the country."
    },
    {
      "titulo": "A Model of Cultural Intelligence, Social Participation and Governmental Intelligence to Reduce Corruption",
      "url": "https://academicjournals.org/journal/IJLIS/article-in-press-abstract/a_model_of_cultural_intelligence_social_participation_and_governmental_intelligence_to_reduce_corruption",
      "pais": "Nigeria",
      "continente": "Africa",
      "abstract": "This research develops a comprehensive model that integrates cultural intelligence, social participation, and governmental intelligence to address corruption in Nigeria. The study examines how these three components work together to create more transparent and accountable governance systems, providing practical recommendations for reducing corruption through enhanced citizen engagement and cultural understanding."
    },
    {
      "titulo": "Agriculture and Hydrology Research: Sustainable Water Management in Agricultural Systems",
      "url": "https://article.sciencepublishinggroup.com/pdf/j.hyd.20251301.17",
      "pais": "Agriculture and Hydrology",
      "continente": "Agriculture and Hydrology",
      "abstract": "This research explores sustainable water management practices in agricultural systems, focusing on the integration of hydrological principles with agricultural practices to optimize water use efficiency and environmental sustainability."
    },
    {
      "titulo": "Advanced Agricultural Engineering and Rural Development Strategies",
      "url": "https://academicjournals.org/journal/JAERD/article-full-text-pdf/12EF86B72153.pdf",
      "pais": "Agriculture and Hydrology",
      "continente": "Agriculture and Hydrology",
      "abstract": "This study examines advanced agricultural engineering techniques and their application in rural development strategies, with particular emphasis on sustainable farming practices and technological innovation in agricultural systems."
    },
    {
      "titulo": "Hydrological Modeling and Agricultural Water Resource Management",
      "url": "https://ijoear.com/assets/articles_menuscripts/file/IJOEAR-APR-2025-15.pdf",
      "pais": "Agriculture and Hydrology",
      "continente": "Agriculture and Hydrology",
      "abstract": "This research presents innovative hydrological modeling approaches for agricultural water resource management, focusing on the development of predictive models for water availability and agricultural planning."
    },
    {
      "titulo": "Economic Development and Social Innovation in France: A Comprehensive Analysis",
      "url": "https://iiste.org/Journals/index.php/JEDS/article/view/63330",
      "pais": "France",
      "continente": "Europe",
      "abstract": "This study examines economic development and social innovation strategies in France, analyzing how the country has implemented policies to foster sustainable growth and social inclusion. The research explores the role of government institutions, private sector initiatives, and civil society organizations in driving economic transformation and social progress."
    },
    {
      "titulo": "Public Administration Reform and Digital Governance in France",
      "url": "https://www.iiste.org/Journals/index.php/JEDS/article/view/63248/65362",
      "pais": "France",
      "continente": "Europe",
      "abstract": "This research investigates public administration reform and digital governance initiatives in France, focusing on how technological innovation has transformed government operations and citizen services. The study analyzes the implementation of digital platforms, e-government services, and participatory mechanisms that enhance transparency and efficiency in public administration."
    },
    {
      "titulo": "Innovation and Economic Development in the United States: A Comprehensive Analysis",
      "url": "https://j.ideasspread.org/index.php/ier/article/view/1468",
      "pais": "United States",
      "continente": "North America",
      "abstract": "This study examines innovation and economic development strategies in the United States, analyzing how the country has maintained its position as a global leader in technological innovation and economic growth. The research explores the role of government policies, private sector initiatives, and educational institutions in fostering innovation and driving economic development."
    }
];

function redirectToResearch(type, value) {
    // Cambiar de página a research.html
    window.location.href = `research.html?type=${type}&value=${value}`;
}

// Verificar el URL para mostrar los resultados correspondientes
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const value = urlParams.get('value');

    if (type && value) {
        const filteredInvestigaciones = investigacionesData.filter(investigacion => investigacion[type] === value);
        const resultadosContainer = document.getElementById('investigaciones-research');

        if (filteredInvestigaciones.length === 0) {
            resultadosContainer.innerHTML = '<p>No se encontraron investigaciones.</p>';
        } else {
            filteredInvestigaciones.forEach(investigacion => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('investigacion-item');

                articleElement.innerHTML = `
    <h3>${investigacion.titulo}</h3>
    <p><strong>abstract:</strong> ${investigacion.abstract}</p>
    <p><strong>Country:</strong> ${investigacion.pais}</p>
    <p><strong>Continent:</strong> ${investigacion.continente}</p>
    <p><a href="${investigacion.url}" target="_blank">Read more</a></p>
`;

                resultadosContainer.appendChild(articleElement);
                
            });
        }
    }
});
