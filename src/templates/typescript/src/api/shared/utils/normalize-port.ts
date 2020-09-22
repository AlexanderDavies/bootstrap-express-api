import { round } from 'lodash';

export const normalizePort = (val: string | number): number | boolean | string => {
  let port;

  if (typeof val === 'number') {
    port = round(val, 0);
  }

  if (typeof val === 'string') {
    port = parseInt(val, 10);
  }

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};
