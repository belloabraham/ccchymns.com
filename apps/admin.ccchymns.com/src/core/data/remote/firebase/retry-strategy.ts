import { Observable, mergeMap, throwError, timer } from 'rxjs';
import { FirestoreErrorCodes } from './error-codes';

export const genericRetryStrategy =
  ({
    maxRetryAttempts = 3,
    scalingDuration = 1000,
    excludedStatusCodes = [
      FirestoreErrorCodes.permissionDenied,
      FirestoreErrorCodes.unauthenticated,
    ],
  }: {
    maxRetryAttempts?: number;
    scalingDuration?: number;
    excludedStatusCodes?: string[];
  } = {}) =>
  (attempts: Observable<any>) => {
    return attempts.pipe(
      mergeMap((error, i) => {
        const retryAttempt = i + 1;
        // if maximum number of retries have been met
        // or response is a status code we don't wish to retry, throw error
        if (
          retryAttempt > maxRetryAttempts ||
          excludedStatusCodes.find((e) => e === error.status)
        ) {
          return throwError(error);
        }
        console.info(
          `Attempt ${retryAttempt}: retrying in ${
            retryAttempt * scalingDuration
          }ms`
        );
        // retry after 1s, 2s, etc...
        return timer(retryAttempt * scalingDuration);
      }),
      // finalize(() => console.log('We are done!'))
    );
  };
