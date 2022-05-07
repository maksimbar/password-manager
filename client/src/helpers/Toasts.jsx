import notify from './Notify';

export const copyToClipboard = (content) => {
  navigator.clipboard.writeText(content);
  notify('Password copied');
};

export const deleteCredentials = (platform, func) => {
  notify(`Credentials for ${platform} removed successfully`);
  func();
};
