// Global Variables
let currentSection = 'home';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let chatMessages = [];
let currentChat = 'general';

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
    initializeApp();
    setupEventListeners();
    loadChatMessages();
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
        mobileToggle.addEventListener('click', toggleMobileMenu);
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

    // Pharmacy search
    const pharmacySearch = document.getElementById('pharmacy-search');
    if (pharmacySearch) {
        pharmacySearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchPharmacies();
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

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function closeMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('active');
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

// Pharmacy Functions
function searchPharmacies() {
    const searchTerm = document.getElementById('pharmacy-search').value.toLowerCase();
    const pharmacyList = document.getElementById('pharmacy-list');
    
    if (!pharmacyList) return;

    // In a real application, this would search a database
    const samplePharmacies = [
        {
            name: 'Farmácia Central',
            address: 'Rua da Liberdade, 123',
            city: 'Lisboa',
            distance: '0.5 km',
            phone: '+351 21 123 4567'
        },
        {
            name: 'Farmácia do Bebé',
            address: 'Avenida de Roma, 456',
            city: 'Lisboa',
            distance: '1.2 km',
            phone: '+351 21 234 5678'
        },
        {
            name: 'Farmácia Familiar',
            address: 'Rua das Flores, 789',
            city: 'Lisboa',
            distance: '0.8 km',
            phone: '+351 21 345 6789'
        }
    ];

    const filteredPharmacies = samplePharmacies.filter(pharmacy => 
        pharmacy.name.toLowerCase().includes(searchTerm) ||
        pharmacy.address.toLowerCase().includes(searchTerm) ||
        pharmacy.city.toLowerCase().includes(searchTerm)
    );

    renderPharmacyList(filteredPharmacies);
}

function renderPharmacyList(pharmacies) {
    const pharmacyList = document.getElementById('pharmacy-list');
    if (!pharmacyList) return;

    pharmacyList.innerHTML = '';

    pharmacies.forEach(pharmacy => {
        const pharmacyElement = document.createElement('div');
        pharmacyElement.className = 'pharmacy-item';
        
        pharmacyElement.innerHTML = `
            <div class="pharmacy-info">
                <h4>${pharmacy.name}</h4>
                <p>${pharmacy.address}</p>
                <p>${pharmacy.city}</p>
                <div class="pharmacy-distance">
                    <i class="fas fa-map-marker-alt"></i> ${pharmacy.distance}
                </div>
            </div>
            <div class="pharmacy-actions">
                <button class="btn btn-small" onclick="callPharmacy('${pharmacy.phone}')">
                    <i class="fas fa-phone"></i>
                </button>
                <button class="btn btn-small" onclick="getDirections('${pharmacy.name}')">
                    <i class="fas fa-directions"></i>
                </button>
            </div>
        `;
        
        pharmacyList.appendChild(pharmacyElement);
    });
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // In a real application, this would use the location to find nearby pharmacies
                alert('Localização obtida! A procurar farmácias próximas...');
                searchPharmacies();
            },
            (error) => {
                alert('Não foi possível obter a sua localização. Por favor, permita o acesso à localização ou pesquise manualmente.');
            }
        );
    } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
    }
}

function callPharmacy(phoneNumber) {
    // In a real application, this would initiate a phone call
    alert(`A ligar para ${phoneNumber}`);
}

function getDirections(pharmacyName) {
    // In a real application, this would open a maps application
    alert(`A abrir direções para ${pharmacyName}`);
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
    const modal = document.getElementById('tutorial-modal');
    if (e.target === modal) {
        closeTutorial();
    }
});

// Initialize pharmacy list on page load
document.addEventListener('DOMContentLoaded', function() {
    const samplePharmacies = [
        {
            name: 'Farmácia Central',
            address: 'Rua da Liberdade, 123',
            city: 'Lisboa',
            distance: '0.5 km',
            phone: '+351 21 123 4567'
        },
        {
            name: 'Farmácia do Bebé',
            address: 'Avenida de Roma, 456',
            city: 'Lisboa',
            distance: '1.2 km',
            phone: '+351 21 234 5678'
        },
        {
            name: 'Farmácia Familiar',
            address: 'Rua das Flores, 789',
            city: 'Lisboa',
            distance: '0.8 km',
            phone: '+351 21 345 6789'
        }
    ];
    
    renderPharmacyList(samplePharmacies);
});
