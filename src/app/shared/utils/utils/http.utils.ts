import { HttpParams } from '@angular/common/http';

export function httpParametersFromObject(parameters: { [key: string]: unknown }): HttpParams {
  const formattedParameters: { [key: string]: string | string[] | boolean } = Object.entries(parameters).reduce(
    (params: { [key: string]: string | string[] | boolean }, [parameterKey, parameterValue]: [string, unknown]) => {
      if (Array.isArray(parameterValue)) {
        params[parameterKey] = parameterValue
          .filter((value: unknown) => (typeof value === 'string' || typeof value === 'number') && !!parameterValue)
          .map((value: string | number) => value.toString());
      } else if ((typeof parameterValue === 'string' || typeof parameterValue === 'number') && !!parameterValue) {
        params[parameterKey] = parameterValue.toString();
      } else if (typeof parameterValue === 'boolean') {
        params[parameterKey] = parameterValue;
      }
      return params;
    },
    {}
  );

  return new HttpParams({ fromObject: formattedParameters });
}
