const fullCourseData = {
    units: [
        {
            id: 1, trimester: 1, title: "El proyecto científico",
            project: { title: "La Máquina de la Ciencia: ¿Cómo funciona el mundo?", finalProduct: "Creación de un 'Rincón de la Ciencia' en el aula...", phases: [ { name: 'Lanzamiento', sessions: 2 }, { name: 'Investigación', sessions: 4 }, { name: 'Producción', sessions: 5 }, { name: 'Presentación', sessions: 2 } ] },
            saberes: { "BIOLOGÍA Y GEOLOGÍA": ["El proyecto científico."], "MATEMÁTICAS": ["Las fracciones. Potencias...", "Operaciones con radicales..."], "FÍSICA Y QUÍMICA": ["Los estados de la materia."], "TECNOLOGÍA": ["Máquinas y mecanismos..."] },
            conexiones: { competencias: ["Utilizar el pensamiento científico..."], criterios: ["Distingue las fases del método científico..."] },
            huertoSTEAM: { title: "Planificación y Diseño del Huerto", description: "Aplicamos el método científico para diseñar nuestro huerto...", tasks: ["Investigar tipos de suelo...", "Diseñar la distribución...", "Construir un pluviómetro..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica de evaluación del informe, infografía y máquina simple." }, { name: "Diario de Aprendizaje", weight: 20, description: "Seguimiento del cuaderno de clase, reflexiones y anotaciones del proceso." }, { name: "Trabajo en Equipo", weight: 20, description: "Coevaluación de los roles y observación directa del docente." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre el método científico y operaciones básicas." } ] }
        },
        {
            id: 2, trimester: 1, title: "El origen del universo y el sistema solar",
            project: { title: "Misión Cosmos: Construyendo nuestro Sistema Solar", finalProduct: "Una maqueta interactiva del Sistema Solar a escala...", phases: [ { name: 'Plan de Misión', sessions: 2 }, { name: 'Cálculos y Diseño', sessions: 4 }, { name: 'Construcción', sessions: 5 }, { name: 'Divulgación', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["El origen del universo..."], "MATEMÁTICAS": ["Proporcionalidad directa..."], "FÍSICA Y QUÍMICA": ["Mezclas y disoluciones."], "TECNOLOGÍA": ["Electricidad y electrónica."]},
            conexiones: { competencias: ["Describir la estructura del sistema solar..."], criterios: ["Identifica y ordena los planetas..."] },
            huertoSTEAM: { title: "El Sol, el Agua y la Vida", description: "Comprendemos la importancia del Sol...", tasks: ["Calcular las horas de sol...", "Preparar disoluciones...", "Diseñar un sistema de riego..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica de evaluación de la maqueta (precisión, acabado, funcionalidad)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Revisión de los cálculos de escalas y diseños del circuito." }, { name: "Trabajo en Equipo", weight: 20, description: "Coevaluación y observación de la colaboración en la construcción." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre planetas y resolución de problemas de proporcionalidad." } ] }
        },
        {
            id: 3, trimester: 1, title: "La estructura de la Tierra",
            project: { title: "Viaje al Centro de la Tierra: Un Modelo Interactivo", finalProduct: "Un diorama a escala de un corte transversal de la Tierra...", phases: [ { name: 'Investigación', sessions: 2 }, { name: 'Diseño y Cálculos', sessions: 4 }, { name: 'Construcción', sessions: 5 }, { name: 'Demostración', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["La estructura de la Tierra..."], "MATEMÁTICAS": ["Porcentajes..."], "FÍSICA Y QUÍMICA": ["El átomo..."], "TECNOLOGÍA": ["Efectos de la corriente eléctrica..."]},
            conexiones: { competencias: ["Identificar y describir las capas de la geosfera..."], criterios: ["Representa correctamente las capas de la Tierra..."] },
            huertoSTEAM: { title: "El Suelo: Nuestro Laboratorio", description: "Analizamos la composición de nuestro suelo...", tasks: ["Tomar muestras de suelo...", "Calcular el porcentaje...", "Identificar nutrientes..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica de evaluación del diorama (fidelidad, simulación, circuito)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Revisión de los cálculos de porcentajes y esquemas." }, { name: "Trabajo en Equipo", weight: 20, description: "Coevaluación durante el montaje del modelo." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre capas de la Tierra y la tabla periódica." } ] }
        },
        {
            id: 4, trimester: 2, title: "El tiempo geológico",
            project: { title: "Una Aventura a través del Tiempo Geológico", finalProduct: "Un 'Friso Cronológico Interactivo' de las eras geológicas...", phases: [ { name: 'Asignación de Eras', sessions: 2 }, { name: 'Diseño y Formulación', sessions: 4 }, { name: 'Construcción', sessions: 6 }, { name: 'Exposición', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["Medida del tiempo geológico..."], "MATEMÁTICAS": ["Expresiones algebraicas..."], "FÍSICA Y QUÍMICA": ["Formulación inorgánica..."], "TECNOLOGÍA": ["Instalación eléctrica..."]},
            conexiones: { competencias: ["Interpretar la escala del tiempo geológico..."], criterios: ["Ordena cronológicamente las eras geológicas..."] },
            huertoSTEAM: { title: "El Ciclo del Carbono", description: "Estudiamos el ciclo del carbono y el compostaje...", tasks: ["Construir una compostera...", "Formular compuestos orgánicos...", "Crear un circuito LED..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica del friso (rigor científico, creatividad, interactividad)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Ejercicios de formulación y operaciones con polinomios." }, { name: "Trabajo en Equipo", weight: 20, description: "Observación de la coordinación en el montaje del friso." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre eras geológicas y nomenclatura inorgánica." } ] }
        },
        {
            id: 5, trimester: 2, title: "El origen de la vida",
            project: { title: "Bio-Bitácora Digital: El Código de la Vida", finalProduct: "Una página web interactiva (Bio-Bitácora) por equipo...", phases: [ { name: 'Investigación', sessions: 3 }, { name: 'Modelado', sessions: 4 }, { name: 'Construcción Digital', sessions: 5 }, { name: 'Publicación', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["El origen de la vida. La evolución."], "MATEMÁTICAS": ["Ecuaciones..."], "FÍSICA Y QUÍMICA": ["Los cambios químicos."], "TECNOLOGÍA": ["Páginas web..."]},
            conexiones: { competencias: ["Argumentar sobre las teorías del origen de la vida..."], criterios: ["Describe los puntos clave de dos teorías..."] },
            huertoSTEAM: { title: "El Ciclo de la Vida", description: "Observamos el ciclo completo de una planta...", tasks: ["Plantar semillas de ciclo corto...", "Plantear ecuaciones...", "Crear un blog del huerto..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica de la página web (contenido, diseño, funcionalidad)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Resolución de ecuaciones y borradores de la web." }, { name: "Trabajo en Equipo", weight: 20, description: "Coevaluación del desarrollo del proyecto digital." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre evolución y cambios químicos." } ] }
        },
        {
            id: 6, trimester: 2, title: "La célula",
            project: { title: "Universo Microscópico: El Escape Room Celular", finalProduct: "Un 'escape room' temático (físico o digital)...", phases: [ { name: 'Inmersión Celular', sessions: 3 }, { name: 'Diseño de Enigmas', sessions: 4 }, { name: 'Construcción', sessions: 5 }, { name: '¡A Jugar!', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["La célula."], "MATEMÁTICAS": ["Funciones."], "FÍSICA Y QUÍMICA": ["Estequiometría..."], "TECNOLOGÍA": ["Comunidades virtuales."]},
            conexiones: { competencias: ["Describir la estructura de las células..."], criterios: ["Dibuja una célula vegetal..."] },
            huertoSTEAM: { title: "El Motor de las Plantas", description: "Estudiamos la célula vegetal a nivel microscópico...", tasks: ["Observar células con microscopio...", "Balancear la fotosíntesis...", "Crear una gráfica de crecimiento..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica del escape room (originalidad, rigor, jugabilidad)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Diseño de los puzles y representación de funciones." }, { name: "Trabajo en Equipo", weight: 20, description: "Observación de la colaboración en la creación del juego." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre orgánulos celulares y estequiometría." } ] }
        },
        {
            id: 7, trimester: 3, title: "Genes y cromosomas",
            project: { title: "Misión Genoma: El Misterio del ADN", finalProduct: "Un 'kit de investigador genético'...", phases: [ { name: 'Escena del Crimen', sessions: 2 }, { name: 'Construcción', sessions: 5 }, { name: 'Análisis', sessions: 4 }, { name: 'Presentación', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["Genes y cromosomas..."], "MATEMÁTICAS": ["Polígonos. Poliedros."], "FÍSICA Y QUÍMICA": ["Las fuerzas..."], "TECNOLOGÍA": ["El proyecto tecnológico."]},
            conexiones: { competencias: ["Relacionar los conceptos de gen, ADN..."], criterios: ["Realiza una extracción de ADN..."] },
            huertoSTEAM: { title: "El ADN de Nuestras Plantas", description: "Extraemos ADN de frutas y hortalizas...", tasks: ["Extracción casera de ADN...", "Diseñar tutores...", "Calcular áreas de cultivo..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica del kit (extracción, modelo 3D, informe del caso)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Documentación del proceso de extracción y diseño del poliedro." }, { name: "Trabajo en Equipo", weight: 20, description: "Coevaluación en la resolución del caso y montaje." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre estructura del ADN y polígonos." } ] }
        },
        {
            id: 8, trimester: 3, title: "Biología molecular",
            project: { title: "Bio-Hackers: Programando el Futuro", finalProduct: "El diseño y prototipo de una solución biotecnológica...", phases: [ { name: 'Identificar Problema', sessions: 2 }, { name: 'Diseño y Programación', sessions: 5 }, { name: 'Construcción', sessions: 5 }, { name: 'Demostración', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["Biología molecular..."], "MATEMÁTICAS": ["Trigonometría."], "FÍSICA Y QUÍMICA": ["Estudio del movimiento."], "TECNOLOGÍA": ["Lenguajes de programación."]},
            conexiones: { competencias: ["Debatir sobre las aplicaciones de la biotecnología..."], criterios: ["Explica qué es un alimento transgénico..."] },
            huertoSTEAM: { title: "Innovación en el Huerto", description: "Investigamos sobre biotecnología aplicada...", tasks: ["Debate sobre transgénicos...", "Usar trigonometría...", "Programar un sensor de humedad..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica del prototipo (funcionalidad, programación, diseño)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Bocetos, código del programa y problemas de trigonometría." }, { name: "Trabajo en Equipo", weight: 20, description: "Observación de la colaboración en el montaje y programación." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre biotecnología y conceptos de movimiento." } ] }
        },
        {
            id: 9, trimester: 3, title: "Genética mendeliana",
            project: { title: "El Legado de Mendel: Robótica y Herencia", finalProduct: "Una 'Feria de la Genética' con análisis estadístico...", phases: [ { name: 'Análisis Cosecha', sessions: 3 }, { name: 'Leyes de Mendel', sessions: 4 }, { name: 'Robotizando', sessions: 5 }, { name: 'Feria Genética', sessions: 2 } ] },
            saberes: {"BIOLOGÍA Y GEOLOGÍA": ["Genética mendeliana..."], "MATEMÁTICAS": ["Estadística. Probabilidad."], "FÍSICA Y QUÍMICA": ["Las fuerzas..."], "TECNOLOGÍA": ["Programación y robótica."]},
            conexiones: { competencias: ["Resolver problemas de transmisión de caracteres..."], criterios: ["Completa un cuadro de Punnett..."] },
            huertoSTEAM: { title: "La Cosecha y sus Secretos", description: "Realizamos la cosecha y analizamos los resultados...", tasks: ["Análisis estadístico...", "Usar cuadros de Punnett...", "Diseñar un brazo robótico..."] },
            evaluation: { instruments: [ { name: "Proyecto (Producto Final)", weight: 50, description: "Rúbrica del stand (análisis estadístico, predicciones, robot)." }, { name: "Diario de Aprendizaje", weight: 20, description: "Problemas de genética y análisis de datos de la cosecha." }, { name: "Trabajo en Equipo", weight: 20, description: "Coevaluación del montaje de la feria." }, { name: "Prueba de Saberes", weight: 10, description: "Cuestionario sobre leyes de Mendel y probabilidad." } ] }
        }
    ]
};

let activeChart = null;

function renderAnnualPlan() {
    const planView = document.getElementById('view-plan');
    const trimesters = { 1: [], 2: [], 3: [] };
    fullCourseData.units.forEach(unit => trimesters[unit.trimester].push(unit));
    const unitColors = ['bg-amber-100', 'bg-lime-100', 'bg-sky-100', 'bg-rose-100', 'bg-fuchsia-100', 'bg-teal-100', 'bg-orange-100', 'bg-indigo-100', 'bg-emerald-100'];
    planView.innerHTML = `<div class="container mx-auto"><h2 class="text-3xl font-bold mb-2">Planificación Anual del Curso</h2><p class="text-gray-600 mb-6">Distribución de unidades didácticas basada en el calendario escolar 2025-2026 de la CM y una carga de 9 horas semanales.</p><div class="bg-white p-6 rounded-lg shadow-lg border border-[#8A9A5B] mb-8"><h3 class="text-2xl font-bold text-[#8A9A5B]">Proyecto Anual Vertebrador: Huerto STEAM</h3><p class="mt-2 text-gray-700">A lo largo de todo el curso, desarrollaremos un huerto escolar aplicando los conocimientos de todas las áreas. Cada unidad didáctica aportará herramientas y saberes para planificar, construir, mantener, analizar y mejorar nuestro huerto, convirtiéndolo en un laboratorio vivo.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div class="bg-white p-4 rounded-lg shadow-sm text-center border"><p class="text-4xl font-bold text-[#8A9A5B]">36</p><p class="text-sm text-gray-500">Semanas Lectivas (Aprox.)</p></div><div class="bg-white p-4 rounded-lg shadow-sm text-center border"><p class="text-4xl font-bold text-[#8A9A5B]">320+</p><p class="text-sm text-gray-500">Horas Totales de Clase</p></div><div class="bg-white p-4 rounded-lg shadow-sm text-center border"><p class="text-4xl font-bold text-[#8A9A5B]">1</p><p class="text-sm text-gray-500">Proyecto Anual Integrado</p></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white p-4 rounded-lg shadow-sm border"><h3 class="font-bold text-xl mb-4 text-center border-b pb-2">1er Trimestre <span class="text-sm font-normal text-gray-500">(Sep-Dic)</span></h3><div class="space-y-3">${trimesters[1].map(u => renderUnitBlock(u, unitColors[u.id-1])).join('')}</div></div><div class="bg-white p-4 rounded-lg shadow-sm border"><h3 class="font-bold text-xl mb-4 text-center border-b pb-2">2º Trimestre <span class="text-sm font-normal text-gray-500">(Ene-Mar)</span></h3><div class="space-y-3">${trimesters[2].map(u => renderUnitBlock(u, unitColors[u.id-1])).join('')}</div></div><div class="bg-white p-4 rounded-lg shadow-sm border"><h3 class="font-bold text-xl mb-4 text-center border-b pb-2">3er Trimestre <span class="text-sm font-normal text-gray-500">(Abr-Jun)</span></h3><div class="space-y-3">${trimesters[3].map(u => renderUnitBlock(u, unitColors[u.id-1])).join('')}</div></div></div></div>`;
}

function renderUnitBlock(unit, color) { return `<div data-unitid="${unit.id}" class="unit-block p-3 rounded-md cursor-pointer hover:shadow-lg transition-shadow ${color}"><p class="font-semibold">U${unit.id}: ${unit.title}</p></div>`; }

function switchView(viewName) {
    document.querySelectorAll('#main-nav button').forEach(b => b.classList.remove('main-tab-active'));
    document.querySelector(`#main-nav button[data-view="${viewName}"]`).classList.add('main-tab-active');
    document.getElementById('view-plan').classList.add('hidden');
    document.getElementById('view-units').classList.add('hidden');
    document.getElementById(`view-${viewName}`).classList.remove('hidden');
    if (viewName === 'units' && !document.getElementById('main-content').innerHTML) { renderUnit(1); }
}

function renderSaberes(saberes) { let content = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">'; for (const area in saberes) { content += `<div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"><h4 class="font-semibold text-[#8A9A5B] mb-2">${area}</h4><ul class="list-disc list-inside text-gray-700 space-y-1">${Object.values(saberes[area]).map(saber => `<li>${saber}</li>`).join('')}</ul></div>`; } return content + '</div>'; }
function renderConexiones(conexiones) { return `<div class="space-y-6"><div><h4 class="text-lg font-semibold text-[#8A9A5B] mb-2">Competencias Específicas</h4><ul class="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded-lg shadow-sm border border-gray-200">${conexiones.competencias.map(c => `<li>${c}</li>`).join('')}</ul></div><div><h4 class="text-lg font-semibold text-[#8A9A5B] mb-2">Criterios de Evaluación</h4><ul class="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded-lg shadow-sm border border-gray-200">${conexiones.criterios.map(c => `<li>${c}</li>`).join('')}</ul></div></div>`; }
function renderHuertoConnection(huertoData) { return `<div class="bg-white p-6 rounded-lg shadow-sm border"><h4 class="text-xl font-bold text-[#8A9A5B] mb-3">${huertoData.title}</h4><p class="text-gray-700 mb-4">${huertoData.description}</p><h5 class="font-semibold text-gray-800 mb-2">Tareas Prácticas:</h5><ul class="list-disc list-inside text-gray-700 space-y-2">${huertoData.tasks.map(t => `<li>${t}</li>`).join('')}</ul></div>`; }

function renderProjectPhases(project) {
    const phasesHtml = project.phases.map(phase => `<div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"><h5 class="font-semibold text-gray-800">${phase.name} (${phase.sessions} sesiones)</h5></div>`).join('');
    return `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="space-y-4"><h4 class="text-lg font-semibold text-[#8A9A5B] mb-2">Cronograma del Proyecto</h4><div class="chart-container relative h-64 md:h-80 w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-sm border"><canvas id="timelineChart"></canvas></div></div><div class="space-y-4"><h4 class="text-lg font-semibold text-[#8A9A5B] mb-2">Detalle de las Fases</h4><div class="space-y-3">${phasesHtml}</div></div></div>`;
}

function renderEvaluation(evaluation) {
    const instrumentsHtml = evaluation.instruments.map(inst => `<div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"><h5 class="font-semibold text-gray-800">${inst.name} (${inst.weight}%)</h5><p class="text-gray-600 mt-1">${inst.description}</p></div>`).join('');
    return `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="space-y-4"><h4 class="text-lg font-semibold text-[#8A9A5B] mb-2">Ponderación de Instrumentos</h4><div class="chart-container relative h-64 md:h-80 w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-sm border"><canvas id="evaluationChart"></canvas></div></div><div class="space-y-4"><h4 class="text-lg font-semibold text-[#8A9A5B] mb-2">Instrumentos de Evaluación</h4><div class="space-y-3">${instrumentsHtml}</div></div></div>`;
}

function createTimelineChart(phases) {
    if (activeChart) { activeChart.destroy(); }
    const ctx = document.getElementById('timelineChart').getContext('2d');
    activeChart = new Chart(ctx, { type: 'bar', data: { labels: phases.map(p => p.name), datasets: [{ label: 'Nº de Sesiones', data: phases.map(p => p.sessions), backgroundColor: '#8A9A5B' }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, scales: { x: { beginAtZero: true, ticks: { stepSize: 1 } } }, plugins: { legend: { display: false } } } });
}

function createEvaluationChart(instruments) {
    if (activeChart) { activeChart.destroy(); }
    const ctx = document.getElementById('evaluationChart').getContext('2d');
    activeChart = new Chart(ctx, { type: 'pie', data: { labels: instruments.map(i => i.name), datasets: [{ data: instruments.map(i => i.weight), backgroundColor: ['#8A9A5B', '#B47A6A', '#D8C3A5', '#A2AAB0'] }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } } } });
}

function renderUnit(unitId) {
    const unit = fullCourseData.units.find(u => u.id === unitId);
    if (!unit) return;
    const contentEl = document.getElementById('main-content');
    const projectInfo = unit.project ? `<div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8"><h3 class="text-2xl font-bold text-[#B47A6A]">${unit.project.title}</h3><p class="mt-2 text-gray-600"><strong>Proyecto de Unidad:</strong> ${unit.project.finalProduct}</p></div>` : '';
    
    contentEl.innerHTML = `<div class="bg-[#F8F7F4] p-1 rounded-lg"><h2 class="text-3xl font-bold mb-4">Unidad ${unit.id}: ${unit.title}</h2>${projectInfo}<div class="mb-6 border-b border-gray-300"><nav id="unit-tabs" class="flex space-x-2 md:space-x-4 overflow-x-auto whitespace-nowrap pb-1"><button data-tab="huerto" class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">Conexión Huerto</button><button data-tab="saberes" class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">Saberes Básicos</button><button data-tab="conexiones" class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">Conexiones</button>${unit.project ? `<button data-tab="fases" class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">Proyecto</button>` : ''}<button data-tab="evaluacion" class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">Evaluación</button></nav></div><div id="tab-content"><div id="huerto-content" class="tab-pane hidden">${renderHuertoConnection(unit.huertoSTEAM)}</div><div id="saberes-content" class="tab-pane hidden">${renderSaberes(unit.saberes)}</div><div id="conexiones-content" class="tab-pane hidden">${renderConexiones(unit.conexiones)}</div>${unit.project ? `<div id="fases-content" class="tab-pane hidden">${renderProjectPhases(unit.project)}</div>` : ''}<div id="evaluacion-content" class="tab-pane hidden">${renderEvaluation(unit.evaluation)}</div></div></div>`;

    updateActiveNavLink(unitId);
    
    const firstTab = document.querySelector('#unit-tabs button');
    if(firstTab){
        handleTabClick(firstTab, unit);
    }

    document.getElementById('unit-tabs').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            handleTabClick(e.target, unit);
        }
    });
}

function handleTabClick(button, unit) {
    const tab = button.dataset.tab;
    if (activeChart) { activeChart.destroy(); activeChart = null; }
    document.querySelectorAll('#unit-tabs button').forEach(b => b.classList.remove('unit-tab-active'));
    button.classList.add('unit-tab-active');
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById(`${tab}-content`).classList.remove('hidden');
    if (tab === 'fases' && unit.project) { setTimeout(() => createTimelineChart(unit.project.phases), 0); }
    if (tab === 'evaluacion' && unit.evaluation) { setTimeout(() => createEvaluationChart(unit.evaluation.instruments), 0); }
}

function renderSidebar() { const navEl = document.getElementById('unit-nav'); navEl.innerHTML = fullCourseData.units.map(unit => `<a href="#" data-unitid="${unit.id}" class="block py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"><strong>U${unit.id}:</strong> ${unit.title}</a>`).join(''); }
function updateActiveNavLink(unitId) { document.querySelectorAll('#nav-bar a').forEach(a => { a.classList.remove('sidebar-active'); if (parseInt(a.dataset.unitid) === unitId) { a.classList.add('sidebar-active'); } }); }

document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderAnnualPlan();
    document.getElementById('main-nav').addEventListener('click', (e) => { if (e.target.tagName === 'BUTTON') { switchView(e.target.dataset.view); } });
    document.getElementById('view-plan').addEventListener('click', (e) => { const block = e.target.closest('.unit-block'); if (block) { const unitId = parseInt(block.dataset.unitid); switchView('units'); renderUnit(unitId); } });
    document.getElementById('unit-nav').addEventListener('click', (e) => { e.preventDefault(); const link = e.target.closest('a'); if (link) { const unitId = parseInt(link.dataset.unitid); renderUnit(unitId); if (window.innerWidth < 768) { document.getElementById('sidebar').classList.add('hidden'); } } });
    document.getElementById('menu-toggle').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('hidden'); });
});
