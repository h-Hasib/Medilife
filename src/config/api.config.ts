const isProd = true;
const urlProd = 'https://medilifeapp.azurewebsites.net/';
const urlDev = 'http://localhost:31558/';
const resourceUrl = 'https://medilifesolutions.blob.core.windows.net/mlsdoctors/';
const reportsResourceUrl = 'https://medilifesolutions.blob.core.windows.net/mlspatientreports/';
const doctorResourceUrl = 'https://medilifesolutions.blob.core.windows.net/thumbnail-200x200/';

export const apiUrl = isProd ? urlProd : urlDev;

export default {
  clientId: '1Ylawxm6CMiYREhsGGSyw8puWuJWZYls',
  url: apiUrl,
  resourceUrl: resourceUrl,
  reportsResourceUrl: reportsResourceUrl,
  doctorResourceUrl: doctorResourceUrl,
};
