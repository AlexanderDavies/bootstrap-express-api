import { ApiError } from './errors';

describe('Util: ApiError', () => {
  describe('When generating the error', () => {
    const errorMessage = 'unauthorized!';
    const errorStatus = 401;

    it('should return an instance of api error', () => {
      const error = new ApiError({ message: errorMessage, status: errorStatus });
      expect(error).toBeInstanceOf(ApiError);
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
      expect(error.status).toEqual(errorStatus);
      expect(error.errors).toEqual(null);
    });

    it('should return an instance of an api erorr with default values if none are provided', () => {
      const obj: any = {};
      const error = new ApiError(obj);
      expect(error).toBeInstanceOf(ApiError);
      expect(error.message).toEqual('');
      expect(error.status).toEqual(500);
      expect(error.errors).toBe(null);
    });
  });
});
