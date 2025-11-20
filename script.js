// Global Variables
let currentSection = 'home';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let chatMessages = [];
let currentChat = 'general';

// Product data extracted from filenames
const farmamamaProducts = [
    {
        filename: '3660709-CUIDADOS-DO-CORPO-CREME-HIDRATANTE-PARA-MAMILOS-MEDELA-P-01.jpg',
        name: 'Creme Hidratante para Mamilos',
        category: 'Cuidados do Corpo',
        brand: 'Medela',
        description: 'Hidratação e proteção dos mamilos durante a amamentação'
    },
    {
        filename: '4593451-LINGERIE-CINTA-POS-PARTO-REGULAVEL-MAMMY-CHICCO-P-01.jpg',
        name: 'Cinta Pós-Parto Regulável',
        category: 'Lingerie',
        brand: 'Mammy Chicco',
        description: 'Suporte abdominal pós-parto ajustável'
    },
    {
        filename: '6065014-OUTROS-PENSOS-HIGIENICOS-POS-PARTO-WELLS-P-01.jpg',
        name: 'Pensos Higiénicos Pós-Parto',
        category: 'Pós-Parto',
        brand: 'Wells',
        description: 'Absorção e proteção pós-parto'
    },
    {
        filename: '6148805-SUPLEMENTOS-VITADE-COM-VITAMINA-D-E-DHA-VITADE-P-01.jpg',
        name: 'Vitade com Vitamina D e DHA',
        category: 'Suplementos',
        brand: 'Vitade',
        description: 'Suplemento com vitamina D e DHA para gestação'
    },
    {
        filename: '6396271-PRODUTOS-P-DENTICAO-DETERGENTE-PARA-BIBEROES-E-TETINAS-WELLS-P-01.jpg',
        name: 'Detergente para Biberões e Tetinas',
        category: 'Higiene',
        brand: 'Wells',
        description: 'Limpeza segura de biberões e tetinas'
    },
    {
        filename: '7540629-OUTROS-FRASCO-LAVAGEM-POS-PARTO-LANSINOH-P-01.jpg',
        name: 'Frasco de Lavagem Pós-Parto',
        category: 'Pós-Parto',
        brand: 'Lansinoh',
        description: 'Higiene íntima pós-parto'
    },
    {
        filename: '7576302-CUIDADOS-DO-CORPO-OLEO-ANTI-ESTRIAS-BIO-MUSTELA-MATERNIDADE-P-01.jpg',
        name: 'Óleo Anti-Estrias Bio',
        category: 'Cuidados do Corpo',
        brand: 'Mustela Maternidade',
        description: 'Prevenção e tratamento de estrias durante a gravidez'
    },
    {
        filename: '7719986-SUPLEMENTOS-GESTACARE-GESTACAO-COM-ACIDO-FOLICO-E-OMEGA-3-GESTACARE-P-01.webp',
        name: 'Gestacare Gestação com Ácido Fólico e Omega-3',
        category: 'Suplementos',
        brand: 'Gestacare',
        description: 'Suplemento pré-natal com ácido fólico e omega-3'
    },
    {
        filename: '7974285-LINGERIE-SOUTIEN-DE-AMAMENTACAO-BEGE-WELLS-P-01.jpg',
        name: 'Soutien de Amamentação',
        category: 'Lingerie',
        brand: 'Wells',
        description: 'Soutien confortável para amamentação'
    },
    {
        filename: '8048337-OUTROS-FRASCO-LAVAGEM-POS-PARTO-MOTHER-WELLS-P-01 (1).webp',
        name: 'Frasco de Lavagem Pós-Parto Mother',
        category: 'Pós-Parto',
        brand: 'Wells',
        description: 'Higiene íntima pós-parto'
    },
    {
        filename: '8111959-HIGIENE-ORGANIZADOR-MUDA-FRALDA-BABY-WELLS-P-01.jpg',
        name: 'Organizador Muda Fralda',
        category: 'Higiene',
        brand: 'Wells',
        description: 'Organizador prático para mudança de fraldas'
    },
    {
        filename: '8121118-AMAMENTACAO-EXTRATOR-DE-LEITE-DUPLO-SWING-MAXI-HANDS-FREE-MEDELA-P-01.jpg',
        name: 'Extrator de Leite Duplo Swing Maxi',
        category: 'Amamentação',
        brand: 'Medela',
        description: 'Extrator de leite duplo hands-free'
    },
    {
        filename: '8153732-AMAMENTACAO-ALMOFADA-MAMARIA-QUENTE-E-FRIA-WELLS-P-01.jpg',
        name: 'Almofada Mamária Quente e Fria',
        category: 'Amamentação',
        brand: 'Wells',
        description: 'Alívio para seios durante a amamentação'
    },
    {
        filename: '8153733-OUTROS-ALMOFADA-QUENTE-E-FRIA-POS-PARTO-WELLS-P-02.jpg',
        name: 'Almofada Quente e Fria Pós-Parto',
        category: 'Pós-Parto',
        brand: 'Wells',
        description: 'Alívio e conforto pós-parto'
    },
    {
        filename: '8289280-CUIDADOS-DO-CORPO-PENSO-PARA-CICATRIZ-CESARIANA-BABY-WELLS-P-01.jpg',
        name: 'Penso para Cicatriz de Cesariana',
        category: 'Cuidados do Corpo',
        brand: 'Wells',
        description: 'Proteção e cuidado da cicatriz de cesariana'
    }
];

// Farmababy Products data extracted from filenames
const farmababyProducts = [
    {
        filename: 'Almofada de Amamentação.jpg',
        name: 'Almofada de Amamentação',
        category: 'Amamentação',
        brand: 'Genérico',
        description: 'Almofada confortável para apoio durante a amamentação'
    },
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
    // Set initial active section
    showSection('home');
    
    // Initialize vaccine calendar
    updateVaccineCalendar();
    
    // Initialize chat
    initializeChat();
}

function setupEventListeners() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href').substring(1);
            showSection(section);
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
}

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
    }

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if open
    closeMobileMenu();
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

    const modal = document.getElementById('tutorial-modal');
    const title = document.getElementById('tutorial-title');
    const content = document.getElementById('tutorial-content');

    title.textContent = tutorial.title;
    content.innerHTML = tutorial.content;

    modal.classList.add('active');
}

function closeTutorial() {
    const modal = document.getElementById('tutorial-modal');
    modal.classList.remove('active');
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
    if (!farmamamaList) return;
    
    farmamamaList.innerHTML = '';
    
    farmamamaProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        
        const icon = getCategoryIcon(product.category);
        const imagePath = `produtosmae/${product.filename}`;
        
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

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render Farmababy products (default)
    renderFarmababyProducts();
    
    // Ensure Farmababy is shown by default
    showCategory('farmababy');
});
