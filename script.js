// Global Variables
let currentSection = 'home';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let chatMessages = [];
let currentChat = 'general';
let isDropdownToggling = false;

// Vaccine data with detailed information
const vaccines = [
    {
        id: 'hepatite-b-nascimento',
        name: 'Hepatite B',
        age: 'Nascimento',
        doses: '1ª dose',
        description: 'A vacina contra a Hepatite B é essencial para prevenir a infecção pelo vírus, sendo segura e eficaz, e está disponível gratuitamente no SUS para todas as idades; o esquema para crianças envolve 4 doses (ao nascer, 2, 4 e 6 meses)',
        status: 'completed'
    },
    {
        id: 'hexavalente-2m',
        name: 'Hexavalente (DTPa, Hib, VIP, VHB)',
        age: '2 Meses',
        doses: '1ª dose + 2ª dose VHB',
        description: 'Combina várias vacinas em uma só, diminuindo dor e estresse para a criança/bebé',
        status: 'pending'
    },
    {
        id: 'pneumococica-2m',
        name: 'Pneumocócica (Pn20/Pn13)',
        age: '2 Meses',
        doses: '1ª dose',
        description: 'A vacina pneumocócica protege contra infecções graves causadas pela bactéria Streptococcus pneumoniae, como pneumonia, meningite, otite média e infecções sanguíneas (bacteremia)',
        status: 'pending'
    },
    {
        id: 'meningococica-b-2m',
        name: 'Meningocócica B (MenB)',
        age: '2 Meses',
        doses: '1ª dose',
        description: 'A vacina meningocócica protege contra a meningite e outras infecções graves',
        status: 'pending'
    },
    {
        id: 'pentavalente-4m',
        name: 'Pentavalente (DTPa, Hib, VIP)',
        age: '4 Meses',
        doses: '2ª dose',
        description: 'A vacina Pentavalente protege contra cinco doenças graves em bebés e crianças: Difteria, Tétano, Coqueluche',
        status: 'upcoming'
    },
    {
        id: 'pneumococica-4m',
        name: 'Pneumocócica (Pn20/Pn13)',
        age: '4 Meses',
        doses: '2ª dose',
        description: 'A vacina pneumocócica protege contra infecções graves causadas pela bactéria Streptococcus pneumoniae',
        status: 'upcoming'
    },
    {
        id: 'meningococica-b-4m',
        name: 'Meningocócica B (MenB)',
        age: '4 Meses',
        doses: '2ª dose',
        description: 'A vacina meningocócica protege contra a meningite e outras infecções graves',
        status: 'upcoming'
    },
    {
        id: 'hexavalente-6m',
        name: 'Hexavalente (DTPa, Hib, VIP, VHB)',
        age: '6 Meses',
        doses: '3ª dose',
        description: 'Combina várias vacinas em uma só, diminuindo dor e estresse para a criança/bebé',
        status: 'upcoming'
    },
    {
        id: 'pneumococica-12m',
        name: 'Pneumocócica (Pn20/Pn13)',
        age: '12 Meses',
        doses: '3ª dose',
        description: 'A vacina pneumocócica protege contra infecções graves causadas pela bactéria Streptococcus pneumoniae',
        status: 'upcoming'
    },
    {
        id: 'meningococica-c-12m',
        name: 'Meningocócica C (MenC)',
        age: '12 Meses',
        doses: 'Dose única ou reforço',
        description: 'A vacina meningocócica C protege contra a meningite tipo C',
        status: 'upcoming'
    },
    {
        id: 'meningococica-b-12m',
        name: 'Meningocócica B (MenB)',
        age: '12 Meses',
        doses: '3ª dose',
        description: 'A vacina meningocócica protege contra a meningite e outras infecções graves',
        status: 'upcoming'
    },
    {
        id: 'vaspr-12m',
        name: 'VASPR (Sarampo, Papeira, Rubéola)',
        age: '12 Meses',
        doses: '1ª dose',
        description: 'Protege contra sarampo, papeira e rubéola',
        status: 'upcoming'
    },
    {
        id: 'pentavalente-18m',
        name: 'Pentavalente (DTPa, Hib, VIP)',
        age: '18 Meses',
        doses: '4ª dose',
        description: 'A vacina Pentavalente protege contra cinco doenças graves em bebés e crianças',
        status: 'upcoming'
    }
];

// Product data for Essenciais da Mãe (ordem dada, imagens 1–7.webp)
const farmamamaProducts = [
    {
        filename: '1.webp',
        name: 'Medela Easy Pour Sacos Conservação de Leite X50',
        category: 'Amamentação',
        brand: 'Medela',
        description: 'Sacos para conservação e armazenamento de leite materno'
    },
    {
        filename: '2.webp',
        name: 'Medela Coletor de Leite Materno Silicone',
        category: 'Amamentação',
        brand: 'Medela',
        description: 'Coletor de leite materno em silicone, suave e confortável'
    },
    {
        filename: '3.webp',
        name: 'ISDIN Woman Antiestrias 250 ml Duo',
        category: 'Cuidados do Corpo',
        brand: 'ISDIN',
        description: 'Creme antiestrias para prevenção durante a gravidez'
    },
    {
        filename: '4.webp',
        name: 'Medela Purelan 100 Creme para Mamilos 37 g',
        category: 'Amamentação',
        brand: 'Medela',
        description: 'Creme hidratante e protetor para mamilos, 100% lanolina'
    },
    {
        filename: '5.webp',
        name: 'Chicco Cinta Pós-Parto Regulável 38',
        category: 'Pós-Parto',
        brand: 'Chicco',
        description: 'Cinta abdominal pós-parto ajustável para suporte e recuperação'
    },
    {
        filename: '6.webp',
        name: 'Medela Soutien de Maternidade e Amamentação Ultimate BodyFit Branco XL',
        category: 'Lingerie',
        brand: 'Medela',
        description: 'Soutien confortável para gravidez e amamentação, com suporte adaptável'
    },
    {
        filename: '7.webp',
        name: 'Gestacare Gestação Cápsulas x30',
        category: 'Suplementos',
        brand: 'Gestacare',
        description: 'Suplemento alimentar para grávidas com ácido fólico e outros nutrientes essenciais'
    },
    {
        filename: 'Almofada de Amamentação.jpg',
        name: 'Almofada de Amamentação',
        category: 'Amamentação',
        brand: 'Genérico',
        description: 'Almofada confortável para apoio durante a amamentação'
    },
];

// Farmababy Products data extracted from filenames
const farmababyProducts = [
    {
        filename: 'Banheira de Bebé Antiderrapante.jpg',
        name: 'Banheira de Bebé Antiderrapante',
        category: 'Higiene',
        brand: 'Genérico',
        description: 'Banheira segura com superfície antiderrapante para o banho do bebé'
    },
    {
        filename: 'Cadeira Auto Unico Evo i-Size Black-bebe.jpg',
        name: 'Cadeira Auto Unico Evo i-Size',
        category: 'Segurança',
        brand: 'Unico',
        description: 'Cadeira auto homologada i-Size para transporte seguro do bebé'
    },
    {
        filename: 'Chucha em Silicone Mommy Feel 0-9M Rosa-bebe.jpg',
        name: 'Chucha em Silicone Mommy Feel',
        category: 'Conforto',
        brand: 'Mommy Feel',
        description: 'Chucha em silicone para bebés de 0 a 9 meses'
    },
    {
        filename: 'Compressas Bebé Não Tecido.jpg',
        name: 'Compressas Bebé Não Tecido',
        category: 'Higiene',
        brand: 'Genérico',
        description: 'Compressas suaves e não tecido para cuidados do bebé'
    },
    {
        filename: 'Leite Aptamil.jpg',
        name: 'Leite Aptamil',
        category: 'Alimentação',
        brand: 'Aptamil',
        description: 'Leite adaptado para recém-nascidos e bebés'
    },
    {
        filename: 'Resguardos Descartáveis Bebé 60x40cm.jpg',
        name: 'Resguardos Descartáveis Bebé',
        category: 'Higiene',
        brand: 'Genérico',
        description: 'Resguardos descartáveis para mudança de fraldas'
    },
    {
        filename: 'Soro Fisiológico Estéril.jpg',
        name: 'Soro Fisiológico Estéril',
        category: 'Higiene',
        brand: 'Genérico',
        description: 'Soro fisiológico estéril para limpeza nasal e ocular'
    },
    {
        filename: 'uriage-bebe-creme-lavante.jpg',
        name: 'Creme Lavante Uriage Bebé',
        category: 'Higiene',
        brand: 'Uriage',
        description: 'Creme lavante suave e hipoalergénico para o banho do bebé'
    }
];

// Tutorial Content
const tutorials = {
    banho: {
        title: 'Como Dar Banho ao Bebé',
        icon: 'fa-shower',
        duration: '5 min',
        content: `
            <div class="tutorial-steps">
                <h4>Passo a Passo para o Banho do Bebé</h4>
                <div class="step">
                    <h5>1. Preparação</h5>
                    <ul>
                        <li>Verifique se a temperatura da água está entre 36-37°C</li>
                        <li>Tenha todos os produtos necessários à mão</li>
                        <li>Certifique-se de que o ambiente está quente (24-26°C)</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>2. Segurança</h5>
                    <ul>
                        <li>Nunca deixe o bebé sozinho na banheira</li>
                        <li>Use uma banheira adequada para bebés</li>
                        <li>Segure sempre o bebé com uma mão</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>3. Técnica</h5>
                    <ul>
                        <li>Comece por lavar o rosto com água morna</li>
                        <li>Lave o cabelo com champô suave</li>
                        <li>Lave o corpo da cabeça aos pés</li>
                        <li>Seque bem, especialmente nas dobras</li>
                    </ul>
                </div>
                <div class="tip">
                    <strong>Dica:</strong> O banho deve durar entre 5-10 minutos para evitar que o bebé fique com frio.
                </div>
            </div>
        `
    },
    cordao: {
        title: 'Cuidados com o Cordão Umbilical',
        icon: 'fa-band-aid',
        duration: '3 min',
        content: `
            <div class="tutorial-steps">
                <h4>Cuidados Essenciais com o Cordão Umbilical</h4>
                <div class="step">
                    <h5>1. Limpeza Diária</h5>
                    <ul>
                        <li>Lave as mãos antes de tocar no cordão</li>
                        <li>Use álcool a 70% ou soro fisiológico</li>
                        <li>Limpe suavemente à volta da base do cordão</li>
                        <li>Seque bem com gaze limpa</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>2. Sinais de Alerta</h5>
                    <ul>
                        <li>Vermelhidão ou inchaço à volta do cordão</li>
                        <li>Secreção com mau cheiro</li>
                        <li>Sangramento ativo</li>
                        <li>Febre no bebé</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>3. Quando Procurar Ajuda</h5>
                    <p>Se notar algum dos sinais de alerta, contacte imediatamente o pediatra ou enfermeiro.</p>
                </div>
                <div class="tip">
                    <strong>Importante:</strong> O cordão normalmente cai entre o 7º e 14º dia de vida. Não force a sua remoção.
                </div>
            </div>
        `
    },
    leite: {
        title: 'Temperatura do Leite',
        icon: 'fa-baby-bottle',
        duration: '2 min',
        content: `
            <div class="tutorial-steps">
                <h4>Como Preparar o Leite na Temperatura Ideal</h4>
                <div class="step">
                    <h5>1. Temperatura Ideal</h5>
                    <ul>
                        <li>Leite materno: temperatura corporal (37°C)</li>
                        <li>Leite em pó: 37-40°C</li>
                        <li>Teste sempre no pulso antes de dar ao bebé</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>2. Preparação do Leite em Pó</h5>
                    <ul>
                        <li>Ferva a água e deixe arrefecer por 30 minutos</li>
                        <li>Adicione o pó na quantidade correta</li>
                        <li>Misture bem até dissolver completamente</li>
                        <li>Teste a temperatura no pulso</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>3. Aquecimento do Leite Materno</h5>
                    <ul>
                        <li>Use banho-maria ou aquecedor de biberões</li>
                        <li>Nunca use microondas</li>
                        <li>Misture bem antes de testar a temperatura</li>
                    </ul>
                </div>
                <div class="tip">
                    <strong>Dica:</strong> O leite deve estar morno, não quente. Se estiver frio, o bebé pode recusar.
                </div>
            </div>
        `
    },
    mala: {
        title: 'Mala da Maternidade',
        icon: 'fa-suitcase',
        duration: '4 min',
        content: `
            <div class="tutorial-steps">
                <h4>Lista Completa para a Mala da Maternidade</h4>
                <div class="step">
                    <h5>Para o Bebé</h5>
                    <ul>
                        <li>6-8 bodies de tamanho 0-1 mês</li>
                        <li>6-8 pijamas ou macacões</li>
                        <li>6-8 meias</li>
                        <li>2 gorros</li>
                        <li>2 pares de luvas</li>
                        <li>Fraldas tamanho 0 (pelo menos 30)</li>
                        <li>Toalhitas</li>
                        <li>Pomada para o rabinho</li>
                        <li>2 mantas leves</li>
                        <li>1 manta mais quente</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>Para a Mãe</h5>
                    <ul>
                        <li>Roupa interior confortável</li>
                        <li>2-3 pijamas ou camisolas de amamentação</li>
                        <li>Meias quentes</li>
                        <li>Chinelos</li>
                        <li>Produtos de higiene pessoal</li>
                        <li>Discos de amamentação</li>
                        <li>Documentos pessoais</li>
                    </ul>
                </div>
                <div class="tip">
                    <strong>Dica:</strong> Prepare a mala entre as 32-36 semanas de gestação.
                </div>
            </div>
        `
    },
    alimentacao: {
        title: 'Introdução Alimentar (6+ meses)',
        icon: 'fa-apple-alt',
        duration: '6 min',
        content: `
            <div class="tutorial-steps">
                <h4>Como Introduzir Sólidos na Alimentação do Bebé</h4>
                <div class="step">
                    <h5>1. Sinais de Prontidão</h5>
                    <ul>
                        <li>Consegue sentar-se sozinho</li>
                        <li>Mostra interesse pela comida</li>
                        <li>Consegue levar objetos à boca</li>
                        <li>Perdeu o reflexo de extrusão</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>2. Primeiros Alimentos</h5>
                    <ul>
                        <li>Comece com papas de cereais</li>
                        <li>Introduza um alimento de cada vez</li>
                        <li>Espere 3-4 dias entre novos alimentos</li>
                        <li>Comece com texturas suaves</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>3. Alimentos a Evitar</h5>
                    <ul>
                        <li>Mel (até aos 12 meses)</li>
                        <li>Frutos secos inteiros</li>
                        <li>Alimentos com muito sal ou açúcar</li>
                        <li>Leite de vaca como bebida principal</li>
                    </ul>
                </div>
                <div class="tip">
                    <strong>Lembre-se:</strong> O leite materno continua a ser o alimento principal até aos 12 meses.
                </div>
            </div>
        `
    },
    sono: {
        title: 'Sono do Bebé',
        icon: 'fa-moon',
        duration: '5 min',
        content: `
            <div class="tutorial-steps">
                <h4>Dicas para Estabelecer uma Rotina de Sono Saudável</h4>
                <div class="step">
                    <h5>1. Ambiente Adequado</h5>
                    <ul>
                        <li>Quarto escuro e silencioso</li>
                        <li>Temperatura entre 18-20°C</li>
                        <li>Colchão firme e adequado</li>
                        <li>Sem objetos soltos no berço</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>2. Rotina de Sono</h5>
                    <ul>
                        <li>Estabeleça horários regulares</li>
                        <li>Crie uma rotina relaxante antes de dormir</li>
                        <li>Evite estimulação excessiva</li>
                        <li>Coloque o bebé no berço ainda acordado</li>
                    </ul>
                </div>
                <div class="step">
                    <h5>3. Posição Segura</h5>
                    <ul>
                        <li>Sempre de costas</li>
                        <li>Pés no fundo do berço</li>
                        <li>Sem almofadas ou cobertores soltos</li>
                        <li>Sem brinquedos no berço</li>
                    </ul>
                </div>
                <div class="tip">
                    <strong>Importante:</strong> Os recém-nascidos dormem entre 14-17 horas por dia, mas em períodos curtos.
                </div>
            </div>
        `
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    setupEventListeners();
    loadChatMessages();
    
    // Test mobile menu button
    const mobileBtn = document.getElementById('mobile-menu-btn');
    console.log('Mobile button found:', mobileBtn);
    if (mobileBtn) {
        console.log('Adding click listener to mobile button');
        mobileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile button clicked via event listener');
            toggleMobileMenu();
        });
    }
});

function initializeApp() {
    // Check if baby data exists, if not show modal
    const babyData = getBabyData();
    if (!babyData || !babyData.birthDate) {
        setTimeout(() => {
            openBabyDataModal();
        }, 1000); // Show after 1 second
    }
    
    // Set initial active section
    showSection('home');
    
    // Initialize vaccine calendar
    updateVaccineCalendar();
    
    // Initialize chat
    initializeChat();
    
    // Load baby profile if on that section
    loadBabyProfile();
}

function setupEventListeners() {
    // Navigation (only for non-dropdown links - dropdowns use onclick in HTML)
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href').substring(1);
            if (section) {
                showSection(section);
            }
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    // Mobile menu overlay
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Chat input
    const messageInput = document.getElementById('message-input');
    if (messageInput) {
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Product search
    const productSearch = document.getElementById('product-search');
    if (productSearch) {
        productSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }

    // Product search for Mamã (Essenciais para a Mamã)
    const productSearchMae = document.getElementById('product-search-mae');
    if (productSearchMae) {
        productSearchMae.addEventListener('input', () => {
            searchProductsMae();
        });
        productSearchMae.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProductsMae();
            }
        });
    }

    // Product search for Bebé (Essenciais para o Bebé)
    const productSearchBebe = document.getElementById('product-search-bebe');
    if (productSearchBebe) {
        productSearchBebe.addEventListener('input', () => {
            searchProductsBebe();
        });
        productSearchBebe.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProductsBebe();
            }
        });
    }
}

// Toggle dropdown menu
function toggleDropdown(event, element) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    
    const dropdown = element.closest('.nav-dropdown');
    if (!dropdown) {
        return false;
    }
    
    const allDropdowns = document.querySelectorAll('.nav-dropdown');
    const isCurrentlyActive = dropdown.classList.contains('active');
    
    // Close all other dropdowns first
    allDropdowns.forEach(dd => {
        if (dd !== dropdown) {
            dd.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    if (isCurrentlyActive) {
        dropdown.classList.remove('active');
    } else {
        dropdown.classList.add('active');
    }
    
    return false;
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    // Check if click is on a dropdown toggle
    const clickedToggle = event.target.closest('.dropdown-toggle');
    if (clickedToggle) {
        // Don't close - toggleDropdown will handle it
        return;
    }
    
    // Check if click is inside a dropdown menu
    const clickedMenu = event.target.closest('.dropdown-menu');
    if (clickedMenu) {
        // Don't close if clicking inside the menu
        return;
    }
    
    // Check if click is inside any dropdown container (for mobile)
    const clickedDropdown = event.target.closest('.nav-dropdown');
    if (clickedDropdown) {
        // Don't close if clicking inside dropdown container
        return;
    }
    
    // Close all dropdowns if clicking outside
    const allDropdowns = document.querySelectorAll('.nav-dropdown');
    allDropdowns.forEach(dd => {
        dd.classList.remove('active');
    });
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Scroll to top of the page (main has margin-top for header)
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 50);
    }

    // Close all dropdowns
    const allDropdowns = document.querySelectorAll('.nav-dropdown');
    allDropdowns.forEach(dd => {
        dd.classList.remove('active');
    });
    
    // Update navigation (including dropdown links)
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    const nav = document.querySelector('.nav');
    if (nav && nav.classList.contains('active')) {
        toggleMobileMenu();
    }

    // Close mobile menu if open
    closeMobileMenu();
    
    // Load products when opening essentials sections
    if (sectionId === 'essenciais-mae') {
        renderFarmamamaProducts();
        // Clear search and show all products
        const searchInputMae = document.getElementById('product-search-mae');
        if (searchInputMae) {
            searchInputMae.value = '';
        }
    } else if (sectionId === 'essenciais-bebe') {
        renderFarmababyProducts();
        // Clear search and show all products
        const searchInputBebe = document.getElementById('product-search-bebe');
        if (searchInputBebe) {
            searchInputBebe.value = '';
        }
    } else if (sectionId === 'perfil-bebe') {
        loadBabyProfile();
    } else if (sectionId === 'vacinas') {
        updateVaccineCalendar();
    } else if (sectionId === 'apoio') {
        renderProfessionals();
    }
}

function testMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.style.left = '0px';
        nav.style.background = 'red';
        nav.style.zIndex = '10000';
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileToggle = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    if (!nav) {
        console.error('Nav element not found!');
        return;
    }
    
    // Toggle the active class
    nav.classList.toggle('active');
    
    // Toggle overlay
    if (overlay) {
        overlay.classList.toggle('active');
    }
    
    // Change icon
    if (mobileToggle) {
        if (nav.classList.contains('active')) {
            mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
}

function closeMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    nav.classList.remove('active');
    overlay.classList.remove('active');
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

function openTutorial(tutorialId) {
    const tutorial = tutorials[tutorialId];
    if (!tutorial) return;

    // Update tutorial view content
    const titleElement = document.getElementById('tutorial-view-title');
    const contentElement = document.getElementById('tutorial-view-content');
    const iconElement = document.getElementById('tutorial-view-icon');
    const durationElement = document.getElementById('tutorial-view-duration');

    if (titleElement) titleElement.textContent = tutorial.title;
    if (contentElement) contentElement.innerHTML = tutorial.content;
    if (iconElement && tutorial.icon) {
        iconElement.className = `fas ${tutorial.icon}`;
    }
    if (durationElement && tutorial.duration) {
        durationElement.textContent = tutorial.duration;
    }

    // Show tutorial view section and hide tutorials list
    showSection('tutorial-view');
}

function backToTutorials() {
    showSection('tutoriais');
}

// Vaccine Calendar Functions
function updateVaccineCalendar() {
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const currentMonthElement = document.getElementById('current-month');
    if (currentMonthElement) {
        currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }
    
    // Render vaccines
    renderVaccines();
}

function calculateVaccineDate(birthDate, ageInMonths) {
    if (!birthDate) return null;
    
    const birth = new Date(birthDate);
    const vaccineDate = new Date(birth);
    vaccineDate.setMonth(vaccineDate.getMonth() + ageInMonths);
    
    return vaccineDate;
}

function formatVaccineDate(date) {
    if (!date) return '';
    return date.toLocaleDateString('pt-PT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getVaccineStatus(vaccineDate) {
    if (!vaccineDate) return 'upcoming';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const vaxDate = new Date(vaccineDate);
    vaxDate.setHours(0, 0, 0, 0);
    
    // Consider completed if date has passed
    if (vaxDate < today) {
        return 'completed';
    } else if (vaxDate.getTime() === today.getTime()) {
        return 'pending';
    } else {
        return 'upcoming';
    }
}

function parseVaccineAge(ageString) {
    // Parse age strings like "Nascimento", "2 meses", "4 meses", etc.
    if (ageString.toLowerCase().includes('nascimento') || ageString.toLowerCase().includes('ao nascer')) {
        return 0;
    }
    
    const match = ageString.match(/(\d+)\s*(mês|meses|m)/i);
    if (match) {
        return parseInt(match[1]);
    }
    
    return null;
}

function getMonthColor(month) {
    // Array de cores diferentes para cada mês (0-11)
    const monthColors = [
        '#FF6B9D', // Janeiro - Rosa vibrante
        '#C44569', // Fevereiro - Rosa escuro
        '#F8B500', // Março - Amarelo
        '#FFA07A', // Abril - Salmão
        '#98D8C8', // Maio - Verde água
        '#6BCB77', // Junho - Verde
        '#4ECDC4', // Julho - Turquesa
        '#45B7D1', // Agosto - Azul claro
        '#96CEB4', // Setembro - Verde menta
        '#FFEAA7', // Outubro - Amarelo claro
        '#DDA15E', // Novembro - Laranja
        '#BC6C25'  // Dezembro - Castanho
    ];
    return monthColors[month] || '#ffc0cb';
}

function renderVaccines() {
    const vaccineList = document.getElementById('vaccine-list');
    if (!vaccineList) return;
    
    vaccineList.innerHTML = '';
    
    const babyData = getBabyData();
    const hasBabyData = babyData && babyData.birthDate;
    
    // Show message if no baby data
    if (!hasBabyData) {
        vaccineList.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: var(--soft-pink); border-radius: var(--border-radius);">
                <i class="fas fa-info-circle" style="font-size: 2rem; color: var(--baby-pink); margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 1rem;">Dados do Bebé Necessários</h3>
                <p style="color: var(--text-light); margin-bottom: 1.5rem;">
                    Para calcular as datas das vacinas, por favor, introduza os dados do bebé no Perfil do Bebé.
                </p>
                <button class="btn btn-primary" onclick="showSection('perfil-bebe')">
                    <i class="fas fa-baby"></i> Ir para Perfil do Bebé
                </button>
            </div>
        `;
        return;
    }
    
    vaccines.forEach(vaccine => {
        const ageInMonths = parseVaccineAge(vaccine.age);
        const vaccineDate = ageInMonths !== null ? calculateVaccineDate(babyData.birthDate, ageInMonths) : null;
        const formattedDate = vaccineDate ? formatVaccineDate(vaccineDate) : '';
        const status = vaccineDate ? getVaccineStatus(vaccineDate) : vaccine.status;
        
        // Get month color for the vaccine
        const month = vaccineDate ? vaccineDate.getMonth() : null;
        const monthColor = month !== null ? getMonthColor(month) : '#ffc0cb';
        
        const vaccineElement = document.createElement('div');
        vaccineElement.className = `vaccine-item ${status}`;
        vaccineElement.onclick = () => openVaccineDetails(vaccine);
        
        // Apply month color as border-left
        if (month !== null) {
            vaccineElement.style.borderLeftColor = monthColor;
        }
        
        const iconClass = status === 'completed' ? 'fa-check-circle' : 
                         status === 'pending' ? 'fa-clock' : 'fa-calendar';
        
        const dateInfo = formattedDate ? `<p style="margin-top: 0.5rem; color: ${monthColor}; font-weight: 600;"><i class="fas fa-calendar-alt"></i> ${formattedDate}</p>` : '';
        
        vaccineElement.innerHTML = `
            <div class="vaccine-icon" style="background: ${monthColor}; color: white;">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="vaccine-details">
                <h4>${vaccine.name}</h4>
                <p><strong>Idade:</strong> ${vaccine.age} - ${vaccine.doses}</p>
                ${dateInfo}
                <p class="vaccine-description">${vaccine.description}</p>
                <span class="vaccine-status ${status}">${
                    status === 'completed' ? 'Concluída' : 
                    status === 'pending' ? 'Pendente' : 'Próxima'
                }</span>
            </div>
        `;
        
        vaccineList.appendChild(vaccineElement);
    });
}

function openVaccineDetails(vaccine) {
    const modal = document.getElementById('vaccine-details-modal');
    const modalTitle = document.getElementById('modal-vaccine-title');
    const modalContent = document.getElementById('modal-vaccine-content');
    
    if (modal && modalTitle && modalContent) {
        modalTitle.textContent = vaccine.name;
        modalContent.innerHTML = `
            <p><strong>Idade:</strong> ${vaccine.age}</p>
            <p><strong>Dose:</strong> ${vaccine.doses}</p>
            <p><strong>Descrição:</strong> ${vaccine.description}</p>
            <button class="btn btn-primary" onclick="openVaccineSchedule('${vaccine.id}')" style="margin-top: 1rem; width: 100%;">
                <i class="fas fa-calendar-plus"></i> Agendar Esta Vacina
            </button>
        `;
        modal.classList.add('active');
    }
}

function openVaccineSchedule(vaccineId = null) {
    const modal = document.getElementById('vaccine-schedule-modal');
    if (modal) {
        if (vaccineId) {
            const vaccine = vaccines.find(v => v.id === vaccineId);
            if (vaccine) {
                document.getElementById('schedule-vaccine-name').value = vaccine.name;
            }
        }
        modal.classList.add('active');
    }
}

function closeVaccineSchedule() {
    const modal = document.getElementById('vaccine-schedule-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function closeVaccineDetails() {
    const modal = document.getElementById('vaccine-details-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function scheduleVaccine() {
    const vaccineName = document.getElementById('schedule-vaccine-name').value;
    const date = document.getElementById('schedule-date').value;
    const time = document.getElementById('schedule-time').value;
    
    if (!vaccineName || !date || !time) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    alert(`Vacina "${vaccineName}" agendada para ${date} às ${time}`);
    closeVaccineSchedule();
}

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateVaccineCalendar();
}

// Chat Functions
function initializeChat() {
    // Add some sample messages
    if (chatMessages.length === 0) {
        chatMessages = [
            {
                id: 1,
                sender: 'Maria',
                message: 'Olá! Alguém tem dicas para o primeiro banho do bebé?',
                time: '10:30',
                type: 'received'
            },
            {
                id: 2,
                sender: 'Ana',
                message: 'Eu usei água a 37°C e foi perfeito! O bebé ficou muito calmo.',
                time: '10:32',
                type: 'sent'
            },
            {
                id: 3,
                sender: 'Sofia',
                message: 'Concordo! E não se esqueçam de ter tudo preparado antes de começar.',
                time: '10:35',
                type: 'received'
            }
        ];
        renderChatMessages();
    }
}

function loadChatMessages() {
    // In a real application, this would load messages from a server
    renderChatMessages();
}

function renderChatMessages() {
    const chatMessagesElement = document.getElementById('chat-messages');
    if (!chatMessagesElement) return;

    chatMessagesElement.innerHTML = '';
    
    chatMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type}`;
        
        messageElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${message.message}</p>
                <span class="message-time">${message.time}</span>
            </div>
        `;
        
        chatMessagesElement.appendChild(messageElement);
    });
    
    // Scroll to bottom
    chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    if (!messageInput || !messageInput.value.trim()) return;

    const newMessage = {
        id: Date.now(),
        sender: 'Você',
        message: messageInput.value.trim(),
        time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }),
        type: 'sent'
    };

    chatMessages.push(newMessage);
    messageInput.value = '';
    renderChatMessages();
}

function createNewChat() {
    // In a real application, this would create a new chat room
    alert('Funcionalidade de nova conversa será implementada em breve!');
}

// Support Functions
function requestSupport() {
    // In a real application, this would connect to a support system
    alert('Sistema de apoio psicológico será implementado em breve!\n\nContactos de emergência:\nLinha Nacional de Emergência Social: 144\nSOS Voz Amiga: 213 544 545');
}

function scheduleConsultation() {
    // In a real application, this would open a scheduling system
    alert('Sistema de agendamento de consultas será implementado em breve!\n\nPara agendar uma consulta, contacte:\nEmail: consultas@mammi.pt\nTelefone: +351 21 123 4567');
}

// Product Functions
function showCategory(category) {
    // Hide all product lists
    const productLists = document.querySelectorAll('.product-list');
    productLists.forEach(list => {
        list.classList.remove('active');
    });
    
    // Show selected category
    const selectedList = document.getElementById(`${category}-list`);
    if (selectedList) {
        selectedList.classList.add('active');
        
        // Render products if needed
        if (category === 'farmababy') {
            renderFarmababyProducts();
        } else if (category === 'farmamama') {
            renderFarmamamaProducts();
        }
    }
    
    // Update button states
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.getElementById(`btn-${category}`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Clear search
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Show all products when clearing search
    if (selectedList) {
        const productItems = selectedList.querySelectorAll('.product-item');
        productItems.forEach(item => {
            item.style.display = 'flex';
        });
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const activeList = document.querySelector('.product-list.active');
    
    if (!activeList) return;
    
    const productItems = activeList.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const productName = item.querySelector('h4').textContent.toLowerCase();
        const productDescription = item.querySelector('p').textContent.toLowerCase();
        const productCategory = item.querySelector('.product-category').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || 
            productDescription.includes(searchTerm) || 
            productCategory.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function searchProductsMae() {
    const searchInput = document.getElementById('product-search-mae');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const productList = document.getElementById('farmamama-list');
    
    if (!productList) return;
    
    const productItems = productList.querySelectorAll('.product-item');
    
    // If search is empty, show all products
    if (searchTerm === '') {
        productItems.forEach(item => {
            item.style.display = 'flex';
        });
        return;
    }
    
    // Filter products based on search term
    productItems.forEach(item => {
        const productName = item.querySelector('h4')?.textContent.toLowerCase() || '';
        const productDescription = item.querySelector('p')?.textContent.toLowerCase() || '';
        const productCategory = item.querySelector('.product-category')?.textContent.toLowerCase() || '';
        const productBrand = item.querySelector('.product-brand')?.textContent.toLowerCase() || '';
        
        if (productName.includes(searchTerm) || 
            productDescription.includes(searchTerm) || 
            productCategory.includes(searchTerm) ||
            productBrand.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function searchProductsBebe() {
    const searchInput = document.getElementById('product-search-bebe');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const productList = document.getElementById('farmababy-list');
    
    if (!productList) return;
    
    const productItems = productList.querySelectorAll('.product-item');
    
    // If search is empty, show all products
    if (searchTerm === '') {
        productItems.forEach(item => {
            item.style.display = 'flex';
        });
        return;
    }
    
    // Filter products based on search term
    productItems.forEach(item => {
        const productName = item.querySelector('h4')?.textContent.toLowerCase() || '';
        const productDescription = item.querySelector('p')?.textContent.toLowerCase() || '';
        const productCategory = item.querySelector('.product-category')?.textContent.toLowerCase() || '';
        const productBrand = item.querySelector('.product-brand')?.textContent.toLowerCase() || '';
        
        if (productName.includes(searchTerm) || 
            productDescription.includes(searchTerm) || 
            productCategory.includes(searchTerm) ||
            productBrand.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function showNutritionTab(tab) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.nutrition-tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nutrition-tab');
    tabs.forEach(t => {
        t.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(`${tab}-content`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Utility Functions
function formatDate(date) {
    return date.toLocaleDateString('pt-PT');
}

function formatTime(date) {
    return date.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const tutorialModal = document.getElementById('tutorial-modal');
    if (e.target === tutorialModal) {
        closeTutorial();
    }
    
    const productModal = document.getElementById('product-image-modal');
    if (e.target === productModal) {
        closeProductModal();
    }
    
    // Close mobile menu when clicking outside
    const nav = document.querySelector('.nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !mobileToggle.contains(e.target)) {
        closeMobileMenu();
    }
});

// Close modals with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTutorial();
        closeProductModal();
    }
});

// Function to get icon based on category
function getCategoryIcon(category) {
    const iconMap = {
        'Cuidados do Corpo': 'fas fa-spa',
        'Lingerie': 'fas fa-tshirt',
        'Pós-Parto': 'fas fa-heart',
        'Suplementos': 'fas fa-pills',
        'Higiene': 'fas fa-shower',
        'Amamentação': 'fas fa-baby-bottle',
        'Segurança': 'fas fa-shield-alt',
        'Conforto': 'fas fa-couch',
        'Alimentação': 'fas fa-apple-alt'
    };
    return iconMap[category] || 'fas fa-pills';
}

// Function to render Farmamama products
function renderFarmamamaProducts() {
    const farmamamaList = document.getElementById('farmamama-list');
    if (!farmamamaList) {
        console.error('farmamama-list element not found');
        return;
    }
    
    // Add active class to show the product list
    farmamamaList.classList.add('active');
    farmamamaList.innerHTML = '';
    
    farmamamaProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        
        const icon = getCategoryIcon(product.category);
        // Almofada de Amamentação está na pasta produtosBEBE, os outros estão em produtosmae
        const imagePath = product.filename === 'Almofada de Amamentação.jpg' 
            ? `produtosBEBE/${product.filename}` 
            : `produtosmae/${product.filename}`;
        
        // Escape quotes for onclick attribute
        const escapedName = product.name.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        const escapedBrand = product.brand.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        const escapedImagePath = imagePath.replace(/'/g, "&#39;");
        
        productElement.innerHTML = `
            <div class="product-image" onclick="openProductModal('${escapedImagePath}', '${escapedName}', '${escapedBrand}')">
                <img src="${imagePath}" alt="${product.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'${icon}\'></i>';">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="product-brand">Marca: <strong>${product.brand}</strong></div>
                <span class="product-category">${product.category}</span>
            </div>
        `;
        
        farmamamaList.appendChild(productElement);
    });
}

// Function to render Farmababy products
function renderFarmababyProducts() {
    const farmababyList = document.getElementById('farmababy-list');
    if (!farmababyList) return;
    
    // Add active class to show the product list
    farmababyList.classList.add('active');
    farmababyList.innerHTML = '';
    
    farmababyProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        
        const icon = getCategoryIcon(product.category);
        const imagePath = `produtosBEBE/${product.filename}`;
        
        // Escape quotes for onclick attribute
        const escapedName = product.name.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        const escapedBrand = product.brand.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        const escapedImagePath = imagePath.replace(/'/g, "&#39;");
        
        productElement.innerHTML = `
            <div class="product-image" onclick="openProductModal('${escapedImagePath}', '${escapedName}', '${escapedBrand}')">
                <img src="${imagePath}" alt="${product.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'${icon}\'></i>';">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="product-brand">Marca: <strong>${product.brand}</strong></div>
                <span class="product-category">${product.category}</span>
            </div>
        `;
        
        farmababyList.appendChild(productElement);
    });
}

// Function to open product image modal
function openProductModal(imagePath, productName, brand) {
    const modal = document.getElementById('product-image-modal');
    const modalImage = document.getElementById('modal-product-image');
    const modalTitle = document.getElementById('modal-product-title');
    const modalBrand = document.getElementById('modal-product-brand');
    
    if (modal && modalImage && modalTitle && modalBrand) {
        modalImage.src = imagePath;
        modalImage.alt = productName;
        modalTitle.textContent = productName;
        modalBrand.textContent = brand;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Function to close product image modal
function closeProductModal() {
    const modal = document.getElementById('product-image-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Motivational phrases
const motivationalPhrases = [
    "Você é mais forte do que imagina! 💪",
    "Cada dia é uma nova conquista na sua jornada de mãe! 🌟",
    "Você está a fazer um trabalho incrível! ❤️",
    "Lembre-se: cuidar de si é também cuidar do seu bebé! 💕",
    "A maternidade é uma aventura única e especial! 🌈",
    "Você não está sozinha nesta jornada! 🤗",
    "Cada pequeno passo é uma grande vitória! 🎉",
    "Acredite no seu instinto materno! ✨"
];

// Show motivational phrase on page load
function showMotivationalPhrase() {
    const phrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    // Create a toast notification
    const toast = document.createElement('div');
    toast.className = 'motivational-toast';
    toast.textContent = phrase;
    document.body.appendChild(toast);
    
    // Add click event to remove the toast
    toast.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Wellness Functions
function showWellnessTab(tab) {
    const tabs = document.querySelectorAll('.wellness-tab');
    const contents = document.querySelectorAll('.wellness-tab-content');
    
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    document.querySelector(`.wellness-tab[onclick="showWellnessTab('${tab}')"]`)?.classList.add('active');
    document.getElementById(`${tab}-content`)?.classList.add('active');
}

// Medication Functions
let medications = [];

function openMedicationModal() {
    document.getElementById('medication-modal').classList.add('active');
}

function closeMedicationModal() {
    document.getElementById('medication-modal').classList.remove('active');
}

function addMedication() {
    const name = document.getElementById('med-name').value;
    const time = document.getElementById('med-time').value;
    const frequency = document.getElementById('med-frequency').value;
    
    const medication = {
        id: Date.now(),
        name,
        time,
        frequency
    };
    
    medications.push(medication);
    renderMedications();
    closeMedicationModal();
    
    // Clear form
    document.getElementById('med-name').value = '';
    document.getElementById('med-time').value = '';
    document.getElementById('med-frequency').value = 'diario';
}

function renderMedications() {
    const list = document.getElementById('medication-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (medications.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-light);">Nenhuma medicação adicionada ainda.</p>';
        return;
    }
    
    medications.forEach(med => {
        const item = document.createElement('div');
        item.className = 'medication-item';
        item.innerHTML = `
            <div class="medication-info">
                <h4>${med.name}</h4>
                <p><i class="fas fa-clock"></i> ${med.time}</p>
                <p><i class="fas fa-sync"></i> ${med.frequency === 'diario' ? 'Diário' : med.frequency === 'semanal' ? 'Semanal' : 'Quando necessário'}</p>
            </div>
            <button class="btn btn-small" onclick="deleteMedication(${med.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        list.appendChild(item);
    });
}

function deleteMedication(id) {
    medications = medications.filter(m => m.id !== id);
    renderMedications();
}

// Gallery Functions
let galleryItems = [];

function openGalleryUpload() {
    document.getElementById('gallery-upload-modal').classList.add('active');
}

function closeGalleryUpload() {
    document.getElementById('gallery-upload-modal').classList.remove('active');
}

function uploadToGallery() {
    const file = document.getElementById('gallery-file').files[0];
    const description = document.getElementById('gallery-description').value;
    
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const item = {
            id: Date.now(),
            src: e.target.result,
            description: description || 'Momento especial',
            type: file.type.startsWith('video/') ? 'video' : 'image'
        };
        
        galleryItems.push(item);
        renderGallery();
        closeGalleryUpload();
        
        // Clear form
        document.getElementById('gallery-file').value = '';
        document.getElementById('gallery-description').value = '';
    };
    reader.readAsDataURL(file);
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (galleryItems.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">Ainda não há fotos ou vídeos na galeria.</p>';
        return;
    }
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        if (item.type === 'video') {
            galleryItem.innerHTML = `
                <video src="${item.src}" controls></video>
                <p>${item.description}</p>
            `;
        } else {
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.description}">
                <p>${item.description}</p>
            `;
        }
        
        grid.appendChild(galleryItem);
    });
}

// Meditation Functions
function playMeditation(audioId) {
    // Stop all other audio players
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        if (audio.id !== audioId) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
    
    // Play the selected audio
    const audio = document.getElementById(audioId);
    if (audio) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}

// Care Functions
function showCareTab(tab) {
    const tabs = document.querySelectorAll('.care-tab');
    const contents = document.querySelectorAll('.care-tab-content');
    
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    document.querySelector(`.care-tab[onclick="showCareTab('${tab}')"]`)?.classList.add('active');
    document.getElementById(`${tab}-content`)?.classList.add('active');
}

// Professionals data
const professionals = [
    {
        id: 'psicologo1',
        name: 'Dra. Ana Silva',
        specialty: 'Psicóloga Clínica',
        specialization: 'Psicologia Perinatal',
        experience: '10 anos de experiência',
        description: 'Especializada em apoio psicológico durante a gravidez e pós-parto',
        icon: 'fa-user-md',
        color: '#ffc0cb'
    },
    {
        id: 'psicologo2',
        name: 'Dr. João Santos',
        specialty: 'Psicólogo Clínico',
        specialization: 'Ansiedade e Depressão Pós-Parto',
        experience: '8 anos de experiência',
        description: 'Especializado no tratamento de ansiedade e depressão pós-parto',
        icon: 'fa-user-md',
        color: '#add8e6'
    },
    {
        id: 'nutricionista1',
        name: 'Dra. Maria Costa',
        specialty: 'Nutricionista',
        specialization: 'Nutrição na Gravidez e Pós-Parto',
        experience: '12 anos de experiência',
        description: 'Especializada em nutrição durante a gravidez e amamentação',
        icon: 'fa-apple-alt',
        color: '#98D8C8'
    },
    {
        id: 'enfermeiro1',
        name: 'Enf. Pedro Oliveira',
        specialty: 'Enfermeiro',
        specialization: 'Enfermagem Obstétrica',
        experience: '15 anos de experiência',
        description: 'Especializado em cuidados de enfermagem durante a gravidez e pós-parto',
        icon: 'fa-user-nurse',
        color: '#6BCB77'
    },
    {
        id: 'psicologo3',
        name: 'Dra. Sofia Martins',
        specialty: 'Psicóloga Clínica',
        specialization: 'Terapia Familiar',
        experience: '7 anos de experiência',
        description: 'Especializada em terapia familiar e apoio à parentalidade',
        icon: 'fa-user-md',
        color: '#FFA07A'
    }
];

let currentSelectedProfessional = null;

// Online Consultation Functions
function renderProfessionals() {
    const professionalsList = document.getElementById('professionals-list');
    if (!professionalsList) return;
    
    professionalsList.innerHTML = '';
    
    professionals.forEach(professional => {
        const professionalCard = document.createElement('div');
        professionalCard.className = 'professional-card';
        professionalCard.style.borderLeftColor = professional.color;
        
        professionalCard.innerHTML = `
            <div class="professional-icon" style="background: ${professional.color};">
                <i class="fas ${professional.icon}"></i>
            </div>
            <div class="professional-info">
                <h3>${professional.name}</h3>
                <p class="professional-specialty"><strong>${professional.specialty}</strong></p>
                <p class="professional-specialization">${professional.specialization}</p>
                <p class="professional-experience">${professional.experience}</p>
                <p class="professional-description">${professional.description}</p>
            </div>
            <div class="professional-action">
                <button class="btn btn-primary" onclick="selectProfessional('${professional.id}')">
                    <i class="fas fa-calendar-check"></i> Agendar Consulta
                </button>
            </div>
        `;
        
        professionalsList.appendChild(professionalCard);
    });
}

function selectProfessional(professionalId) {
    const professional = professionals.find(p => p.id === professionalId);
    if (!professional) return;
    
    currentSelectedProfessional = professional;
    
    // Hide professionals list and show booking form
    const professionalsList = document.getElementById('professionals-list');
    const bookingForm = document.getElementById('booking-form-container');
    const bookingName = document.getElementById('booking-professional-name');
    
    if (professionalsList) professionalsList.style.display = 'none';
    if (bookingForm) bookingForm.style.display = 'block';
    if (bookingName) bookingName.textContent = `Agendar Consulta com ${professional.name}`;
    
    // Set minimum date to today
    const dateInput = document.getElementById('consultation-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = '';
    }
    
    // Clear time
    const timeInput = document.getElementById('consultation-time');
    if (timeInput) timeInput.value = '';
}

function cancelBooking() {
    const professionalsList = document.getElementById('professionals-list');
    const bookingForm = document.getElementById('booking-form-container');
    
    if (professionalsList) professionalsList.style.display = 'grid';
    if (bookingForm) bookingForm.style.display = 'none';
    
    currentSelectedProfessional = null;
}

function confirmOnlineConsultation() {
    if (!currentSelectedProfessional) {
        alert('Por favor, selecione um profissional.');
        return;
    }
    
    const date = document.getElementById('consultation-date').value;
    const time = document.getElementById('consultation-time').value;
    
    if (!date || !time) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Format date and time
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('pt-PT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    alert(`Consulta agendada com sucesso!\n\nProfissional: ${currentSelectedProfessional.name}\nData: ${formattedDate}\nHora: ${time}`);
    
    // Reset form
    cancelBooking();
}

// Teleconsultation Functions
let currentTeleconsultationType = '';

function scheduleTeleconsultation(type) {
    currentTeleconsultationType = type;
    const modal = document.getElementById('teleconsultation-modal');
    const title = document.getElementById('teleconsultation-title');
    
    if (title) {
        title.textContent = `Agendar Consulta com ${type === 'nutricionista' ? 'Nutricionista' : 'Enfermeiro'}`;
    }
    
    if (modal) {
        modal.classList.add('active');
    }
}

function closeTeleconsultation() {
    document.getElementById('teleconsultation-modal').classList.remove('active');
}

function confirmTeleconsultation() {
    const date = document.getElementById('tele-date').value;
    const time = document.getElementById('tele-time').value;
    
    if (!date || !time) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const type = currentTeleconsultationType === 'nutricionista' ? 'Nutricionista' : 'Enfermeiro';
    alert(`Consulta com ${type} agendada para ${date} às ${time}`);
    closeTeleconsultation();
}

// Baby Data Functions
function getBabyData() {
    const data = localStorage.getItem('babyData');
    return data ? JSON.parse(data) : null;
}

function saveBabyData() {
    const name = document.getElementById('baby-name').value.trim();
    const birthDate = document.getElementById('baby-birth-date').value;
    const notBorn = document.getElementById('baby-not-born').checked;
    
    if (!birthDate) {
        alert('Por favor, introduza a data de nascimento ou data prevista.');
        return;
    }
    
    const babyData = {
        name: name || 'Bebé',
        birthDate: birthDate,
        isBorn: !notBorn,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('babyData', JSON.stringify(babyData));
    closeBabyDataModal();
    
    // Reload profile and update vaccine calendar
    loadBabyProfile();
    updateVaccineCalendar();
    
    // Show success message
    alert('Dados do bebé guardados com sucesso!');
}

function openBabyDataModal() {
    const modal = document.getElementById('baby-data-modal');
    const babyData = getBabyData();
    
    if (modal) {
        // Pre-fill form if data exists
        if (babyData) {
            document.getElementById('baby-name').value = babyData.name || '';
            document.getElementById('baby-birth-date').value = babyData.birthDate || '';
            document.getElementById('baby-not-born').checked = !babyData.isBorn;
        } else {
            // Clear form
            document.getElementById('baby-name').value = '';
            document.getElementById('baby-birth-date').value = '';
            document.getElementById('baby-not-born').checked = false;
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBabyDataModal() {
    const modal = document.getElementById('baby-data-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleBirthDate() {
    const notBorn = document.getElementById('baby-not-born').checked;
    const birthDateInput = document.getElementById('baby-birth-date');
    const label = document.getElementById('baby-birth-date-label');
    
    if (notBorn) {
        birthDateInput.required = false;
        if (label) {
            label.querySelector('strong').textContent = 'Data Prevista de Nascimento:';
        }
    } else {
        birthDateInput.required = true;
        if (label) {
            label.querySelector('strong').textContent = 'Data de Nascimento:';
        }
    }
}

function calculateBabyAge(birthDate) {
    if (!birthDate) return null;
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}

function formatBabyAge(age) {
    if (!age) return 'Não disponível';
    
    if (age.years > 0) {
        if (age.months > 0) {
            return `${age.years} ${age.years === 1 ? 'ano' : 'anos'} e ${age.months} ${age.months === 1 ? 'mês' : 'meses'}`;
        }
        return `${age.years} ${age.years === 1 ? 'ano' : 'anos'}`;
    } else if (age.months > 0) {
        if (age.days > 0) {
            return `${age.months} ${age.months === 1 ? 'mês' : 'meses'} e ${age.days} ${age.days === 1 ? 'dia' : 'dias'}`;
        }
        return `${age.months} ${age.months === 1 ? 'mês' : 'meses'}`;
    } else {
        return `${age.days} ${age.days === 1 ? 'dia' : 'dias'}`;
    }
}

function loadBabyProfile() {
    const profileInfo = document.getElementById('baby-profile-info');
    if (!profileInfo) return;
    
    const babyData = getBabyData();
    
    if (!babyData || !babyData.birthDate) {
        profileInfo.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-baby" style="font-size: 4rem; color: var(--baby-pink); margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 1rem;">Ainda não há dados do bebé</h3>
                <p style="color: var(--text-light); margin-bottom: 1.5rem;">
                    Para personalizar a sua experiência e calcular as datas das vacinas, por favor, introduza os dados do seu bebé.
                </p>
                <button class="btn btn-primary" onclick="openBabyDataModal()">
                    <i class="fas fa-plus"></i> Adicionar Dados do Bebé
                </button>
            </div>
        `;
        return;
    }
    
    const age = calculateBabyAge(babyData.birthDate);
    const formattedAge = formatBabyAge(age);
    const birthDateFormatted = new Date(babyData.birthDate).toLocaleDateString('pt-PT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    profileInfo.innerHTML = `
        <div style="padding: 2rem;">
            <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(45deg, var(--baby-pink), var(--baby-blue)); display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">
                    <i class="fas fa-baby"></i>
                </div>
                <div>
                    <h3 style="margin: 0 0 0.5rem 0; color: var(--text-dark);">${babyData.name}</h3>
                    <p style="margin: 0; color: var(--text-light);">
                        ${babyData.isBorn ? 'Nasceu em' : 'Data prevista:'} ${birthDateFormatted}
                    </p>
                </div>
            </div>
            
            <div style="background: var(--soft-pink); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0; color: var(--text-dark);">
                    <i class="fas fa-calendar-alt" style="color: var(--baby-pink); margin-right: 0.5rem;"></i>
                    Idade
                </h4>
                <p style="margin: 0; font-size: 1.2rem; font-weight: 600; color: var(--baby-pink);">
                    ${formattedAge}
                </p>
            </div>
            
            <div style="background: var(--soft-blue); padding: 1.5rem; border-radius: var(--border-radius);">
                <h4 style="margin: 0 0 0.5rem 0; color: var(--text-dark);">
                    <i class="fas fa-info-circle" style="color: var(--baby-blue); margin-right: 0.5rem;"></i>
                    Informações
                </h4>
                <p style="margin: 0; color: var(--text-light);">
                    Os dados do bebé são utilizados para calcular automaticamente as datas das vacinas e outras informações personalizadas.
                </p>
            </div>
        </div>
    `;
}

// AI Chat Functions
function sendAIMessage() {
    const input = document.getElementById('ai-message-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('ai-chat-messages');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message sent';
    userMsg.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'ai-message received';
        aiMsg.innerHTML = `<p>${getAIResponse(message)}</p>`;
        messagesContainer.appendChild(aiMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('banho') || lowerMessage.includes('banhar')) {
        return 'Para dar banho ao bebé, use água a 36-37°C. Tenha tudo preparado antes de começar e nunca deixe o bebé sozinho. O banho deve durar 5-10 minutos.';
    } else if (lowerMessage.includes('leite') || lowerMessage.includes('alimentação')) {
        return 'O leite materno é o melhor alimento para o bebé. Se usar leite em pó, prepare-o a 37-40°C e teste sempre a temperatura no pulso antes de dar ao bebé.';
    } else if (lowerMessage.includes('sono') || lowerMessage.includes('dormir')) {
        return 'Os recém-nascidos dormem entre 14-17 horas por dia, mas em períodos curtos. Estabeleça uma rotina e coloque o bebé sempre de costas no berço.';
    } else if (lowerMessage.includes('vacina')) {
        return 'As vacinas são essenciais para proteger o seu bebé. Siga o calendário de vacinação recomendado pelo pediatra.';
    } else if (lowerMessage.includes('ansiedade') || lowerMessage.includes('stress')) {
        return 'É normal sentir ansiedade. Tente técnicas de respiração, meditação ou procure apoio psicológico se necessário.';
    } else {
        return 'Obrigada pela sua pergunta. Para informações mais específicas, recomendo que consulte o pediatra ou enfermeiro. Posso ajudá-la com dicas gerais sobre cuidados com o bebé e bem-estar.';
    }
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show motivational phrase
    showMotivationalPhrase();
    
    // Render Farmababy products (default)
    renderFarmababyProducts();
    
    // Render vaccines
    renderVaccines();
    
    // Render medications
    renderMedications();
    
    // Render gallery
    renderGallery();
    
    // Ensure Farmababy is shown by default
    showCategory('farmababy');
    
    // AI Chat enter key
    const aiInput = document.getElementById('ai-message-input');
    if (aiInput) {
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendAIMessage();
            }
        });
    }
});
