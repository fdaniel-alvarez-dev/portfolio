import ReactGA4 from 'react-ga4';

// Validación de ambiente y configuración
const isValidGAID = (id) => {
  return id && id.startsWith('G-');
};

// Constante para el ID de GA
const GA_ID = 'G-F5V1XMS5DV';

export const initGA = () => {
  if (process.env.NODE_ENV === 'production' && isValidGAID(GA_ID)) {
    // Inicialización de ReactGA4
    ReactGA4.initialize(GA_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
    console.log('GA4 initialized in production mode');
  } else {
    console.log('GA4 not initialized: development mode or invalid ID');
  }
};

export const logPageView = (page) => {
  if (process.env.NODE_ENV === 'production') {
    // Usando tanto ReactGA4 como gtag
    ReactGA4.send({
      hitType: 'pageview',
      page: page
    });

    // Envío a través de gtag
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: page,
        send_to: GA_ID
      });
    }
  }
};

export const logEvent = (category, action, label) => {
  if (process.env.NODE_ENV === 'production') {
    // Usando tanto ReactGA4 como gtag
    ReactGA4.event({
      category: category,
      action: action,
      label: label
    });

    // Envío a través de gtag
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        send_to: GA_ID
      });
    }
  }
};

// Nuevo método para tracking de proyectos
export const logProjectClick = (projectName, projectUrl) => {
  if (process.env.NODE_ENV === 'production') {
    // Usando tanto ReactGA4 como gtag
    ReactGA4.event({
      category: 'Project Click',
      action: 'Click',
      label: `${projectName} - ${projectUrl}`
    });

    // Envío a través de gtag
    if (window.gtag) {
      window.gtag('event', 'project_click', {
        event_category: 'Project Click',
        event_label: `${projectName} - ${projectUrl}`,
        send_to: GA_ID
      });
    }
  }
};

// Método para tracking de secciones
export const logSectionView = (sectionName) => {
  if (process.env.NODE_ENV === 'production') {
    // Usando tanto ReactGA4 como gtag
    ReactGA4.event({
      category: 'Section View',
      action: 'View',
      label: sectionName
    });

    // Envío a través de gtag
    if (window.gtag) {
      window.gtag('event', 'section_view', {
        event_category: 'Section View',
        event_label: sectionName,
        send_to: GA_ID
      });
    }
  }
};