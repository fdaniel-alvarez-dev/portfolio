import ReactGA4 from 'react-ga4';

// Validación de ambiente y configuración
const isValidGAID = (id) => {
  return id && id.startsWith('G-');
};

export const initGA = () => {
  const gaId = process.env.REACT_APP_GA_ID;
  
  if (process.env.NODE_ENV === 'production' && isValidGAID(gaId)) {
    ReactGA4.initialize(gaId, {
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
  if (process.env.NODE_ENV === 'production' && isValidGAID(process.env.REACT_APP_GA_ID)) {
    ReactGA4.send({
      hitType: 'pageview',
      page: page
    });
  }
};

export const logEvent = (category, action, label) => {
  if (process.env.NODE_ENV === 'production' && isValidGAID(process.env.REACT_APP_GA_ID)) {
    ReactGA4.event({
      category: category,
      action: action,
      label: label
    });
  }
};