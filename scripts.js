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
    titulo: "A marketing proposal to understand and review Latino voting in the US",
    url: "https://article.isarpublisher.com/viewArticle/A-marketing-proposal-to-understand-and-review-Latino-voting-in-the-US-a-case-study-of-Cali-Baja-and-Trumps-posters",
    pais: "India",
    continente: "Asia"
  },
  {
    titulo: "Educação como liberdade: um modelo de participação social e inclusão social para reduzir a distopia",
    url: "https://www.even3.com.br/anais/12snsep/479335-educacao-como-liberdade--um-modelo-de-participacao-social-e-inclusao-social-para-reduzir-a-distopia/",
    pais: "Brazil",
    continente: "South, Central and North America"
  },
  {
    titulo: "Artigo da Revista BEA",
    url: "https://periodicos.unifesp.br/index.php/revbea/article/view/10593",
    pais: "Brazil",
    continente: "South, Central and North America"
  },
  {
    titulo: "Artigo da Revista Ambientale",
    url: "https://periodicosuneal.emnuvens.com.br/ambientale/article/view/535",
    pais: "Brazil",
    continente: "South, Central and North America"
  },
  {
    titulo: "Humanização e gestão por inteligências para reforma do setor público",
    url: "https://assecor.org.br/wpfd_file/humanizacao-e-gestao-por-inteligencias-para-reforma-do-setor-publico/",
    pais: "Brazil",
    continente: "South, Central and North America"
  },
  {
    titulo: "Archivos CPLT",
    url: "https://archives.cplt.cl/artic/20150108/asocfile/20150108180133/t_s_n4___web.pdf",
    pais: "Chile",
    continente: "South, Central and North America"
  },
  {
    titulo: "Revista Ciencia Política #49",
    url: "https://www.revcienciapolitica.com.ar/num49art7.php",
    pais: "Argentina",
    continente: "South, Central and North America"
  },
  {
    titulo: "Revista Ciencia Política #48",
    url: "https://www.revcienciapolitica.com.ar/num48art6.php",
    pais: "Argentina",
    continente: "South, Central and North America"
  },
  {
    titulo: "Research article from Emerald Insight",
    url: "https://www.emeraldinsight.com/doi/abs/10.1108/JM2-08-2014-0069",
    pais: "England",
    continente: "Europe"
  },
  {
    titulo: "Gestão por inteligências",
    url: "https://www.atlanticbookshop.pt/compendium/gestao-por-inteligencias",
    pais: "Portugal",
    continente: "Europe"
  },
  {
    titulo: "A study on cultural intelligence",
    url: "https://academicjournals.org/journal/IJLIS/article-in-press-abstract/a_model_of_cultural_intelligence_social_participation_and_governmental_intelligence_to_reduce_corruption",
    pais: "Nigeria",
    continente: "Africa"
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
    <p><strong>Country:</strong> ${investigacion.pais}</p>
    <p><strong>Continent:</strong> ${investigacion.continente}</p>
    <p><a href="${investigacion.url}" target="_blank">Read more</a></p>
`;

                resultadosContainer.appendChild(articleElement);
            });
        }
    }
});
